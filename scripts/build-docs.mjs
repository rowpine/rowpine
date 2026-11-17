#!/usr/bin/env node
// Build the documentation: help topics (docs/*.md), guides (guides/*.md), the
// API reference (from the rowpine package's type definitions), the search
// index, .md copies for agents, the docs and guides lists in llms.txt, and
// sitemap.xml + robots.txt.
//   node scripts/build-docs.mjs
import { readdirSync, readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs'
import { join, dirname, relative } from 'node:path'
import { fileURLToPath } from 'node:url'
import { marked } from 'marked'
import { readApi } from './lib/api.mjs'
import { codeBlock, extractCode, inlineCode } from './lib/code.mjs'
import { docsPage, feedback, metaRow, pager, ORIGIN, REPO } from './lib/shell.mjs'
import { header, footer, FONTS, THEME_HEAD } from './chrome.mjs'
import { esc, firstSentence, frontMatter, gitDate, plain, withIds, wrapTables } from './lib/text.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const site = join(root, 'site')
const codeDir = join(root, 'guides', 'code')
mkdirSync(join(site, 'docs'), { recursive: true })
mkdirSync(join(site, 'guides'), { recursive: true })

const SECTIONS = ['Getting started', 'Excel', 'PDF', 'CSV', 'Pivot', 'Resources']
const SECTION_BLURB = {
  'Getting started': 'Install the package and the components, add an export menu, set your license key.',
  Excel: 'Real .xlsx files: typed cells, formats, colors, outline levels and SUBTOTAL formulas.',
  PDF: 'Reports with a title, headline numbers, page setup and grouped rows.',
  CSV: 'Plain text export, free with no license key.',
  Pivot: 'Cross-tabs from flat rows, a designer for your users, and pivot export.',
  Resources: 'What changed in each version, and fixes for common problems.',
}
const api = readApi(root)
const version = api.version
const tested = JSON.parse(readFileSync(join(root, 'guides', 'tested.json'), 'utf8'))

// ------------------------------------------------------------------ read
const topics = readdirSync(join(root, 'docs'))
  .filter((f) => f.endsWith('.md'))
  .map((file) => {
    const { meta, body } = frontMatter(readFileSync(join(root, 'docs', file), 'utf8'), file)
    for (const k of ['title', 'section', 'order']) if (!meta[k]) throw new Error(`${file}: missing ${k}`)
    if (meta.section !== 'Resources') for (const k of ['image', 'alt', 'example']) if (!meta[k]) throw new Error(`${file}: missing ${k}`)
    if (!SECTIONS.includes(meta.section)) throw new Error(`${file}: unknown section ${meta.section}`)
    return { slug: file.replace(/\.md$/, ''), file: `docs/${file}`, ...meta, order: Number(meta.order), body }
  })
  .sort((a, b) => SECTIONS.indexOf(a.section) - SECTIONS.indexOf(b.section) || a.order - b.order)

const guides = readdirSync(join(root, 'guides'))
  .filter((f) => f.endsWith('.md'))
  .map((file) => {
    const { meta, body } = frontMatter(readFileSync(join(root, 'guides', file), 'utf8'), file)
    for (const k of ['title', 'description', 'image', 'alt', 'date', 'order', 'short']) if (!meta[k]) throw new Error(`guides/${file}: missing ${k}`)
    return { slug: file.replace(/\.md$/, ''), file: `guides/${file}`, ...meta, order: Number(meta.order), body }
  })
  .sort((a, b) => a.order - b.order)

// Every relative .html link in a topic must point at a topic or an API page.
const docPages = new Set([...topics.map((t) => t.slug), ...api.pages.map((p) => p.slug)])
for (const t of topics) {
  for (const [, href] of t.body.matchAll(/\]\(([a-z0-9-]+)\.html(?:#[\w-]*)?\)/g)) {
    if (!docPages.has(href)) throw new Error(`${t.slug}: link to missing page ${href}`)
  }
}

// ------------------------------------------------------------------ navigation
const nav = SECTIONS.map((s) => ({
  label: s,
  items: [
    ...(s === 'Getting started' ? [{ href: 'docs/', title: 'Overview' }] : []),
    ...topics.filter((t) => t.section === s).map((t) => ({ href: `docs/${t.slug}.html`, title: t.title })),
    ...(s === 'Resources'
      ? [
          { href: 'security.html', title: 'Security' },
          { href: 'license.html', title: 'License' },
          { href: 'examples/', title: 'Live demos' },
        ]
      : []),
  ],
}))
const resources = nav.pop()
nav.push(
  { label: 'Guides', items: [{ href: 'guides/', title: 'All guides' }, ...guides.map((g) => ({ href: `guides/${g.slug}.html`, title: g.title }))] },
  { label: 'API reference', items: api.pages.map((p) => ({ href: `docs/${p.slug}.html`, title: p.title })) },
  resources,
)

const search = []
function indexPage(kind, title, url, html) {
  // The page, then each of its h2 sections.
  const parts = html.split(/(?=<h2 id=")/)
  search.push({ k: kind, t: title, u: url, x: plain(parts[0]).slice(0, 400) })
  for (const part of parts.slice(1)) {
    const m = /^<h2 id="([^"]+)">([\s\S]*?)<a class="anchor"/.exec(part)
    if (!m) continue
    search.push({ k: kind, t: title, h: plain(m[2]), u: `${url}#${m[1]}`, x: plain(part.slice(m[0].length)).slice(0, 360) })
  }
}

const docsBase = '../'
const write = (path, html) => writeFileSync(join(site, path), html)

// ------------------------------------------------------------------ docs topics
topics.forEach((t, i) => {
  const { text, restore } = extractCode(t.body, codeDir)
  const { html, toc } = withIds(wrapTables(restore(marked.parse(text))))
  const description = t.description ?? firstSentence(t.body)
  const prev = topics[i - 1], next = topics[i + 1]
  const main = `<article class="doc">
    <div class="crumbs"><a href="./">Docs</a><span>${esc(t.section)}</span></div>
    <h1>${esc(t.title)}</h1>
    ${t.description ? `<p class="lead">${esc(t.description)}</p>` : ''}
    ${metaRow({ updated: gitDate(root, t.file), version, md: `${t.slug}.md`, edit: `${REPO}/blob/main/${t.file}` })}
    ${t.image ? `<figure><img src="img/${t.image}" alt="${esc(t.alt)}" loading="lazy"><figcaption>${esc(t.alt)}.</figcaption></figure>` : ''}
    ${html}
    ${t.example ? `<a class="live-card" href="../examples/#/${t.example}"><span><b>Live example and source</b><span>Run this in the browser and read the code behind it.</span></span><i>Open &rarr;</i></a>` : ''}
    ${feedback(t.slug)}
    ${pager(prev && { href: `docs/${prev.slug}.html`, title: prev.title }, next && { href: `docs/${next.slug}.html`, title: next.title }, docsBase)}
  </article>`
  write(`docs/${t.slug}.html`, docsPage({
    title: `${t.title} - Rowpine docs`, description, canonical: `${ORIGIN}/docs/${t.slug}.html`, nav, current: `docs/${t.slug}.html`,
    main, toc, md: `${t.slug}.md`, version,
    jsonld: { '@context': 'https://schema.org', '@type': 'TechArticle', headline: t.title, description, dateModified: gitDate(root, t.file), author: { '@type': 'Organization', name: 'jQWidgets LTD' } },
  }))
  write(`docs/${t.slug}.md`, `# ${t.title}\n\n${t.image ? `![${t.alt}](img/${t.image})\n\n` : ''}${inlineCode(t.body, codeDir)}\n${t.example ? `\nLive example: ${ORIGIN}/examples/#/${t.example}\n` : ''}`)
  indexPage('Docs', t.title, `docs/${t.slug}.html`, html)
})

// ------------------------------------------------------------------ API reference
const where = new Map(api.pages.flatMap((p) => p.entries.map((e) => [e.name, p.slug])))
const linkTypes = (s, page) =>
  esc(s).replace(/\b([A-Z][A-Za-z]+)\b/g, (m) => (where.has(m) ? `<a href="${where.get(m) === page ? '' : `${where.get(m)}.html`}#${m}">${m}</a>` : m))
// Code spans that name an API entry link to it.
const linkCode = (html, page) =>
  html.replace(/<code>([A-Za-z_][\w]*)<\/code>/g, (m, n) => (where.has(n) ? `<a href="${where.get(n) === page ? '' : `${where.get(n)}.html`}#${n}"><code>${n}</code></a>` : m))
let currentPage = ''
const mdInline = (s) => (s ? linkCode(marked.parseInline(s), currentPage) : '')

function signatureText(text) {
  if (text.length <= 88) return text
  const open = text.indexOf('(')
  let depth = 0, close = -1
  for (let i = open; i < text.length; i++) {
    if ('(<{['.includes(text[i])) depth++
    else if (')>}]'.includes(text[i]) && --depth === 0) { close = i; break }
  }
  const params = []
  let cur = '', d = 0
  for (const ch of text.slice(open + 1, close)) {
    if ('(<{['.includes(ch)) d++
    if (')>}]'.includes(ch)) d--
    if (ch === ',' && d === 0) { params.push(cur.trim()); cur = '' } else cur += ch
  }
  if (cur.trim()) params.push(cur.trim())
  return `${text.slice(0, open)}(\n${params.map((p) => `  ${p},`).join('\n')}\n)${text.slice(close + 1)}`
}

function entryHtml(e, page) {
  currentPage = page
  const doc = e.doc?.text ? `<div class="api-doc">${linkCode(marked.parse(e.doc.text), page)}</div>` : ''
  let body = ''
  if (e.signatures) {
    body = e.signatures.map((s) => {
      const params = s.params.length
        ? `<h4>Parameters</h4><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>${s.params
            .map((p) => `<tr><td><code>${esc(p.name)}</code>${p.optional ? '<span class="opt">optional</span>' : ''}</td><td><code class="ty">${linkTypes(p.optional ? p.type.replace(/ \| undefined$/, '') : p.type, page)}</code></td><td>${mdInline(p.doc)}</td></tr>`)
            .join('')}</tbody></table>`
        : ''
      return `${codeBlock(signatureText(s.text.replace(/: ([\w<>\[\]]+) \| undefined(?=[,)])/g, ': $1')), 'ts', e.kind === 'component' ? 'Component' : 'Signature')}${params}<h4>Returns</h4><p><code class="ty">${linkTypes(s.returns, page)}</code></p>`
    }).join('')
  } else if (e.props) {
    body = `<h4>Properties</h4><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>${e.props
      .map((p) => `<tr><td><code>${esc(p.name)}</code>${p.optional ? '<span class="opt">optional</span>' : ''}</td><td><code class="ty">${linkTypes(p.type, page)}</code></td><td>${mdInline(p.doc)}</td></tr>`)
      .join('')}</tbody></table>`
  } else if (e.definition) {
    body = codeBlock(e.definition.replace(/\s*\/\*\*[\s\S]*?\*\/\s*/g, ' ').replace(/\s+/g, ' ').replace(/ \| /g, '\n  | '), 'ts', 'Type')
  } else if (e.type) {
    body = `<p><b>Type</b> <code class="ty">${linkTypes(e.type, page)}</code></p>`
  }
  const src = e.file ? `<p class="src">Source in your project: <code>components/${e.file}</code></p>` : ''
  return `<section class="api-entry" id="${esc(e.name)}">
    <div class="api-head"><h2><code>${esc(e.name)}${e.generics ? esc(e.generics) : ''}</code></h2><span class="kind">${esc(e.kind)}</span></div>
    ${doc}${src}${body}
  </section>`
}

function entryMd(e) {
  const lines = [`## ${e.name}${e.generics ?? ''} (${e.kind})`, '', e.doc?.text ?? '']
  if (e.signatures) for (const s of e.signatures) {
    lines.push('```ts', signatureText(s.text), '```')
    for (const p of s.params) lines.push(`- \`${p.name}\`${p.optional ? ' (optional)' : ''}: \`${p.optional ? p.type.replace(/ \| undefined$/, '') : p.type}\`${p.doc ? ` ${p.doc}` : ''}`)
    lines.push(`- returns \`${s.returns}\``)
  }
  if (e.props) for (const p of e.props) lines.push(`- \`${p.name}\`${p.optional ? ' (optional)' : ''}: \`${p.type}\`${p.doc ? ` ${p.doc}` : ''}`)
  if (e.definition) lines.push('```ts', e.definition, '```')
  if (e.type) lines.push(`Type: \`${e.type}\``)
  return lines.join('\n') + '\n'
}

api.pages.forEach((p, i) => {
  const prev = api.pages[i - 1], next = api.pages[i + 1]
  const main = `<article class="doc">
    <div class="crumbs"><a href="./">Docs</a><span>API reference</span></div>
    <h1>${esc(p.title)}</h1>
    <p class="lead">${esc(p.lead)}</p>
    ${metaRow({ version, md: `${p.slug}.md`, extra: [`Generated from the package's type definitions`] })}
    ${wrapTables(p.entries.map((e) => entryHtml(e, p.slug)).join('\n'))}
    ${feedback(p.slug)}
    ${pager(prev && { href: `docs/${prev.slug}.html`, title: prev.title }, next && { href: `docs/${next.slug}.html`, title: next.title }, docsBase)}
  </article>`
  const toc = p.entries.map((e) => ({ level: 2, id: e.name, text: e.name }))
  write(`docs/${p.slug}.html`, docsPage({
    title: `${p.title} - Rowpine API reference`, description: p.lead, canonical: `${ORIGIN}/docs/${p.slug}.html`, nav, current: `docs/${p.slug}.html`,
    main, toc, md: `${p.slug}.md`, version,
  }))
  write(`docs/${p.slug}.md`, `# ${p.title} (rowpine ${version})\n\n${p.lead}\n\n${p.entries.map(entryMd).join('\n')}`)
  for (const e of p.entries) {
    search.push({
      k: 'API', t: e.name, h: p.title, u: `docs/${p.slug}.html#${e.name}`,
      x: [e.doc?.text, ...(e.props ?? []).map((x) => `${x.name} ${x.doc}`), ...(e.signatures ?? []).flatMap((s) => s.params.map((x) => x.name))].filter(Boolean).join(' ').slice(0, 500),
    })
  }
})

// ------------------------------------------------------------------ docs home
const testedChips = [`rowpine ${version}`, `TanStack Table ${tested['@tanstack/react-table'].join(' and ')}`, `React ${tested.react}`, 'shadcn/ui Base UI and Radix']
const home = `<div class="dhero">
    <h1>Rowpine documentation</h1>
    <p class="lead">Excel, PDF and CSV export and pivot tables for TanStack Table and shadcn/ui. Install it, add a component, and pass it the table you already render.</p>
    <button type="button" class="dsearch" data-open-search><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>Search docs, guides and API<kbd>Ctrl K</kbd></button>
    <div class="tested">${testedChips.map((c) => `<span>${esc(c)}</span>`).join('')}</div>
  </div>
  <div class="doc">
    <h2 id="quick-start">Quick start<a class="anchor" href="#quick-start" aria-label="Link to this section">#</a></h2>
    ${codeBlock('npm install rowpine\nnpx shadcn add @rowpine/export-menu', 'bash')}
    ${codeBlock('import { ExportMenu } from "@/components/export-menu"\n\n<ExportMenu table={table} fileName="orders" />', 'tsx', 'orders-table.tsx')}
    <p>That gives your table an Excel, PDF and CSV menu. <a href="installation.html">Installation</a> covers the details, and <a href="license-keys.html">license keys</a> what changes when you buy.</p>
  </div>
  <div class="dgrid">
    ${SECTIONS.filter((s) => s !== 'Resources').map((s) => {
      const items = topics.filter((t) => t.section === s)
      return `<div class="dcard"><h2><a href="${items[0].slug}.html">${esc(s)}</a></h2><p>${esc(SECTION_BLURB[s])}</p><ul>${items.slice(0, 5).map((t) => `<li><a href="${t.slug}.html">${esc(t.title)}</a></li>`).join('')}${items.length > 5 ? `<li class="more">and ${items.length - 5} more in the menu</li>` : ''}</ul></div>`
    }).join('')}
    <div class="dcard"><h2><a href="../guides/">Guides</a></h2><p>Step by step, with code that is built and run before it is published.</p><ul>${guides.map((g) => `<li><a href="../guides/${g.slug}.html">${esc(g.title)}</a></li>`).join('')}</ul></div>
    <div class="dcard"><h2><a href="${api.pages[0].slug}.html">API reference</a></h2><p>Every function, option and type, generated from rowpine ${esc(version)}.</p><ul>${api.pages.map((p) => `<li><a href="${p.slug}.html">${esc(p.title)}</a></li>`).join('')}</ul></div>
    <div class="dcard"><h2><a href="changelog.html">Resources</a></h2><p>${esc(SECTION_BLURB.Resources)}</p><ul><li><a href="changelog.html">Changelog</a></li><li><a href="troubleshooting.html">Troubleshooting</a></li><li><a href="support.html">Support</a></li><li><a href="../security.html">Security</a></li><li><a href="../license.html">License</a></li></ul></div>
  </div>`
write('docs/index.html', docsPage({
  title: 'Rowpine documentation', description: 'Documentation for Rowpine: Excel, PDF and CSV export and pivot tables for TanStack Table and shadcn/ui. Topics, guides and the API reference.',
  canonical: `${ORIGIN}/docs/`, nav, current: 'docs/', main: home, ogType: 'website', version,
}))

// ------------------------------------------------------------------ guides
const card = (g) => `<a class="card" href="${g.slug}.html">
        <div class="thumb"><img src="img/${g.image}" alt="${esc(g.alt)}" loading="lazy"></div>
        <div class="body"><span class="tag">${esc(g.section ?? 'Guide')}</span><h3>${esc(g.title)}</h3><p>${esc(g.short)}</p></div>
      </a>`
guides.forEach((g, i) => {
  const { text, restore } = extractCode(g.body, codeDir)
  let html = restore(marked.parse(text))
  html = html.replace(/<p><img src="([^"]+)" alt="([^"]*)"(?: title="([^"]*)")?><\/p>/g, (_, src, alt, cap) =>
    `<figure><img src="${src}" alt="${alt}" loading="lazy">${cap ? `<figcaption>${cap}</figcaption>` : ''}</figure>`)
  const ids = withIds(wrapTables(html))
  const words = g.body.replace(/<!--[\s\S]*?-->/g, '').split(/\s+/).length + (g.body.match(/<!--\s*code:/g) ?? []).length * 40
  const minutes = Math.max(3, Math.round(words / 220))
  const prev = guides[i - 1], next = guides[i + 1]
  const others = guides.filter((x) => x.slug !== g.slug)
  const testedLine = `Tested with rowpine ${tested.rowpine}, TanStack Table ${tested['@tanstack/react-table'].join(' and ')}, React ${tested.react}`
  const main = `<article class="doc">
    <div class="crumbs"><a href="../docs/">Docs</a><a href="./">Guides</a><span>${esc(g.section ?? 'Tutorial')}</span></div>
    <h1>${esc(g.title)}</h1>
    <p class="lead">${esc(g.description)}</p>
    ${metaRow({ updated: gitDate(root, g.file), md: `${g.slug}.md`, edit: `${REPO}/blob/main/${g.file}`, extra: [`${minutes} min read`, esc(testedLine)] })}
    ${ids.html}
    <div class="try">
      <div><h2>Try it in your project</h2><p>Everything runs without a license key; Excel and PDF files carry one notice line until you add one.</p></div>
      <div class="buttons"><a class="btn primary" href="../docs/installation.html" data-umami-event="Guide install">Install Rowpine</a><a class="btn secondary" href="../examples/">Live demos</a></div>
    </div>
    ${feedback(`guide:${g.slug}`)}
    ${pager(prev && { href: `guides/${prev.slug}.html`, title: prev.title }, next && { href: `guides/${next.slug}.html`, title: next.title }, docsBase)}
    <h2 style="margin-top:44px">More guides</h2>
    <div class="guide-cards">${others.map(card).join('')}</div>
  </article>`
  const canonical = `${ORIGIN}/guides/${g.slug}.html`
  write(`guides/${g.slug}.html`, docsPage({
    title: `${g.title} - Rowpine`, description: g.description, canonical, nav, current: `guides/${g.slug}.html`,
    main, toc: ids.toc, md: `${g.slug}.md`, version,
    jsonld: {
      '@context': 'https://schema.org', '@type': 'TechArticle', headline: g.title, description: g.description,
      datePublished: g.date, dateModified: gitDate(root, g.file), image: `${ORIGIN}/guides/img/${g.image}`, mainEntityOfPage: canonical,
      author: { '@type': 'Organization', name: 'jQWidgets LTD', url: ORIGIN }, publisher: { '@type': 'Organization', name: 'jQWidgets LTD' }, proficiencyLevel: 'Intermediate',
    },
  }))
  write(`guides/${g.slug}.md`, `# ${g.title}\n\n${g.description}\n\n${inlineCode(g.body, codeDir)}\n`)
  indexPage('Guide', g.title, `guides/${g.slug}.html`, ids.html)
})
write('guides/index.html', docsPage({
  title: 'Rowpine guides - TanStack Table to Excel, PDF and pivot tables',
  description: 'Step-by-step guides for TanStack Table and shadcn/ui: export to Excel with grouped rows, build a pivot table, and export a data table to PDF.',
  canonical: `${ORIGIN}/guides/`, nav, current: 'guides/', ogType: 'website', version,
  main: `<article class="doc" style="max-width:none">
    <div class="crumbs"><a href="../docs/">Docs</a><span>Guides</span></div>
    <h1>Guides</h1>
    <p class="lead">Step-by-step guides for TanStack Table and shadcn/ui. Every code sample is built and run in a real app before it is published.</p>
    <div class="guide-cards three">${guides.map(card).join('')}</div>
  </article>`,
}))

// ------------------------------------------------------------------ the other pages, for search
for (const file of ['index.html', 'pricing.html', 'security.html', 'license.html', 'privacy.html']) {
  const html = readFileSync(join(site, file), 'utf8')
  const title = (/<title>([^<]*)<\/title>/.exec(html)?.[1] ?? file).replace(/ - .*$/, '').replace(/^Rowpine for TanStack Table$/, 'Rowpine home')
  const body = (/<main[^>]*>([\s\S]*?)<\/main>/.exec(html)?.[1] ?? '').replace(/<script[\s\S]*?<\/script>/g, '')
  const heads = [...body.matchAll(/<(?:h2|h3|summary)[^>]*>([\s\S]*?)<\/(?:h2|h3|summary)>/g)].map((m) => plain(m[1])).filter(Boolean)
  search.push({ k: 'Page', t: title, u: file === 'index.html' ? '' : file, x: `${heads.join('. ')}. ${plain(body)}`.slice(0, 500) })
}
writeFileSync(join(site, 'search-index.json'), JSON.stringify(search))

// ------------------------------------------------------------------ 404
// GitHub Pages serves /404.html for any missing path, at any depth, so every
// link and asset in it is absolute.
{
  const B = `${ORIGIN}/`
  write('404.html', `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Page not found - Rowpine</title>
<meta name="robots" content="noindex">
<link rel="icon" href="${B}favicon.svg" type="image/svg+xml">
${FONTS}
${THEME_HEAD}
<link rel="stylesheet" href="${B}site.css">
<script src="${B}analytics.js" defer></script>
</head>
<body>
${header({ base: B })}
<main class="notfound">
  <div class="wrap">
    <span class="label">404</span>
    <h1>This page is not here</h1>
    <p class="lead">The link may be old, or the page moved. Search for what you were looking for, or start from one of these.</p>
    <button type="button" class="dsearch" data-open-search><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>Search docs, guides and API<kbd>Ctrl K</kbd></button>
    <ul class="nf-links">
      <li><a href="${B}docs/">Documentation</a></li>
      <li><a href="${B}guides/">Guides</a></li>
      <li><a href="${B}docs/api-export.html">API reference</a></li>
      <li><a href="${B}examples/">Live demos</a></li>
      <li><a href="${B}pricing.html">Pricing</a></li>
      <li><a href="${B}">Home</a></li>
    </ul>
  </div>
</main>
${footer({ base: B })}
</body>
</html>
`)
}

// ------------------------------------------------------------------ llms.txt
const llmsPath = join(site, 'llms.txt')
let llms = readFileSync(llmsPath, 'utf8')
const block = (name, body) => {
  const re = new RegExp(`<!-- ${name}:start -->[\\s\\S]*<!-- ${name}:end -->`)
  const text = `<!-- ${name}:start -->\n${body}\n<!-- ${name}:end -->`
  llms = re.test(llms) ? llms.replace(re, text) : llms.trimEnd() + '\n\n' + text + '\n'
}
block('docs', '## Docs\n\n' + topics.map((t) => `- [${t.title}](${ORIGIN}/docs/${t.slug}.md): ${t.description ?? firstSentence(t.body)}`).join('\n'))
block('api', `## API reference (rowpine ${version})\n\n` + api.pages.map((p) => `- [${p.title}](${ORIGIN}/docs/${p.slug}.md): ${p.lead}`).join('\n'))
block('guides', '## Guides\n\n' + guides.map((g) => `- [${g.title}](${ORIGIN}/guides/${g.slug}.md): ${g.short}`).join('\n'))
writeFileSync(llmsPath, llms)

// ------------------------------------------------------------------ sitemap.xml and robots.txt
const pages = []
const walk = (dir) => {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name)
    if (e.isDirectory()) { if (!['r', 'img', 'assets'].includes(e.name)) walk(p); continue }
    if (!e.name.endsWith('.html')) continue
    const rel = relative(site, p).replace(/\\/g, '/')
    if (rel === 'thanks.html' || rel === '404.html' || rel === 'examples/tour.html') continue
    pages.push(rel.replace(/(^|\/)index\.html$/, '$1'))
  }
}
walk(site)
pages.sort()
writeFileSync(join(site, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages.map((p) => `  <url><loc>${ORIGIN}/${p}</loc></url>`).join('\n')}\n</urlset>\n`)
if (!existsSync(join(site, 'robots.txt'))) writeFileSync(join(site, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${ORIGIN}/sitemap.xml\n`)

console.log(`${topics.length} topics, ${guides.length} guides, ${api.pages.length} API pages (rowpine ${version}), ${search.length} search entries, sitemap ${pages.length} pages`)
