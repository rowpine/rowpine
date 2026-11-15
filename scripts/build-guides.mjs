#!/usr/bin/env node
// Build the guides: guides/*.md -> site/guides/<slug>.html (+ a .md copy),
// site/guides/index.html, the guides list in site/llms.txt, and
// site/sitemap.xml + site/robots.txt for the whole site.
//
// Code in a guide comes from the tested sources in guides/code:
//   <!-- code: excel/orders-table.tsx#features title="orders-table.tsx" -->
// pastes the lines between `// #region features` and `// #endregion features`
// (JSX comments `{/* #region x */}` work too). Those files are built and run
// in a real app before publishing, so a guide never shows untested code.
import { readdirSync, readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs'
import { join, dirname, relative } from 'node:path'
import { fileURLToPath } from 'node:url'
import { marked } from 'marked'
import { header, footer, FONTS, THEME_HEAD } from './chrome.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const site = join(root, 'site')
const out = join(site, 'guides')
const codeDir = join(root, 'guides', 'code')
mkdirSync(out, { recursive: true })

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
const ORIGIN = 'https://rowpine.com'

// ---------------------------------------------------------------- code
const REGION = /^\s*(?:\/\/|\{\/\*)\s*#(end)?region\b\s*([\w-]*)/
function region(file, name) {
  const lines = readFileSync(join(codeDir, file), 'utf8').replace(/\r\n/g, '\n').split('\n')
  let from = 0, to = lines.length
  if (name) {
    from = lines.findIndex((l) => { const m = REGION.exec(l); return m && !m[1] && m[2] === name })
    to = lines.findIndex((l, i) => { const m = REGION.exec(l); return i > from && m && m[1] && m[2] === name })
    if (from < 0 || to < 0) throw new Error(`${file}: no region ${name}`)
    from++
  }
  const picked = lines.slice(from, to).filter((l) => !REGION.test(l))
  const indent = Math.min(...picked.filter((l) => l.trim()).map((l) => /^ */.exec(l)[0].length))
  return picked
    .map((l) => l.slice(indent))
    .join('\n')
    .replace(/"\.\.\/orders"/g, '"./orders"')
    .replace(/^\n+|\n+$/g, '')
}

// A small highlighter for tsx, ts and bash: comments, strings, keywords, components.
function highlight(code, lang) {
  const tokens = lang === 'bash'
    ? /(#[^\n]*)|("(?:[^"\\]|\\.)*"|'[^']*')|(\b(?:npm|npx|pnpm|yarn)\b)/g
    : /(\/\/[^\n]*|\{\/\*[\s\S]*?\*\/\}|\/\*[\s\S]*?\*\/)|("(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*'|`(?:[^`\\]|\\.)*`)|(\b(?:import|from|export|default|const|let|function|return|await|async|type|interface|declare|module|extends|as|typeof|new|if|else|true|false|null|undefined)\b)|((?<![\w$])<\/?[A-Z][\w.]*|\b[A-Z][\w]*(?=\())/g
  let html = '', last = 0
  for (const m of code.matchAll(tokens)) {
    html += esc(code.slice(last, m.index))
    const cls = m[1] ? 'c' : m[2] ? 's' : m[3] ? 'k' : 't'
    html += `<span class="${cls}">${esc(m[0])}</span>`
    last = m.index + m[0].length
  }
  return html + esc(code.slice(last))
}

function codeBlock(code, lang, title) {
  const bar = title ? `<div class="editor-bar"><span class="on">${esc(title)}</span><button type="button" class="copy" aria-label="Copy code">Copy</button></div>` : `<div class="editor-bar"><span class="on">${lang === 'bash' ? 'terminal' : lang}</span><button type="button" class="copy" aria-label="Copy code">Copy</button></div>`
  return `<div class="editor">${bar}<pre class="code"><code>${highlight(code, lang)}</code></pre></div>`
}

// ---------------------------------------------------------------- guides
const guides = readdirSync(join(root, 'guides'))
  .filter((f) => f.endsWith('.md'))
  .map((file) => {
    const raw = readFileSync(join(root, 'guides', file), 'utf8').replace(/\r\n/g, '\n')
    const m = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/.exec(raw)
    if (!m) throw new Error(`${file}: no front matter`)
    const meta = Object.fromEntries(m[1].split('\n').map((l) => [l.slice(0, l.indexOf(':')).trim(), l.slice(l.indexOf(':') + 1).trim()]))
    for (const k of ['title', 'description', 'image', 'alt', 'date', 'order', 'short']) if (!meta[k]) throw new Error(`${file}: missing ${k}`)
    return { slug: file.replace(/\.md$/, ''), ...meta, order: Number(meta.order), body: m[2].trim() }
  })
  .sort((a, b) => a.order - b.order)

const CSS = `
  .guide-head { padding: 56px 0 40px; border-bottom: 1px solid var(--line); background: var(--bg-soft); }
  .crumbs { font-size: 14px; color: var(--muted); margin: 0 0 16px; }
  .crumbs a { color: var(--muted); text-decoration: none; }
  .crumbs a:hover { color: var(--fg); }
  .guide-head h1 { font-size: 44px; line-height: 1.1; font-weight: 650; letter-spacing: -0.035em; margin: 0 0 14px; max-width: 860px; }
  .guide-head .lead { font-size: 18.5px; color: var(--muted); max-width: 760px; margin: 0 0 18px; }
  .byline { display: flex; flex-wrap: wrap; gap: 6px 18px; font-size: 13.5px; color: var(--muted); }
  .byline span + span::before { content: ""; display: inline-block; width: 3px; height: 3px; border-radius: 50%; background: currentColor; margin-right: 18px; vertical-align: middle; opacity: .6; }
  .guide { display: grid; grid-template-columns: minmax(0, 1fr) 240px; gap: 64px; padding: 48px 24px 88px; }
  .guide article { min-width: 0; max-width: 760px; font-size: 16.5px; line-height: 1.75; }
  .guide article > p, .guide article li { color: color-mix(in srgb, var(--fg) 82%, var(--muted)); }
  .guide article h2 { font-size: 27px; line-height: 1.25; letter-spacing: -0.02em; font-weight: 650; margin: 52px 0 12px; scroll-margin-top: 88px; }
  .guide article h3 { font-size: 19px; font-weight: 600; margin: 32px 0 8px; scroll-margin-top: 88px; }
  .guide article h2 + p, .guide article h3 + p { margin-top: 0; }
  .guide article :not(pre) > code { font-size: .86em; background: var(--bg-soft); border: 1px solid var(--line); padding: .08em .38em; border-radius: 5px; }
  .guide article .editor { margin: 20px 0 26px; }
  .guide article pre.code { font-size: 13.5px; line-height: 1.65; }
  .guide article .copy { margin-left: auto; border: 1px solid #2a3d32; background: transparent; color: #a9c2b3; font: 500 12px/1 "Geist Mono", ui-monospace, monospace; padding: 6px 10px; border-radius: 6px; cursor: pointer; }
  .guide article .copy:hover { color: #fff; border-color: #4a6b58; }
  .guide article figure { margin: 26px 0 30px; }
  .guide article figure img { width: 100%; height: auto; border: 1px solid var(--line); border-radius: 10px; background: #fff; box-shadow: var(--shadow-sm); }
  .guide article figcaption { color: var(--muted); font-size: 14px; margin-top: 10px; }
  .guide article table { width: 100%; border-collapse: collapse; font-size: 14.5px; margin: 16px 0 24px; display: block; overflow-x: auto; }
  .guide article th, .guide article td { text-align: left; padding: 9px 12px; border-bottom: 1px solid var(--line); vertical-align: top; }
  .guide article th { font-size: 12.5px; text-transform: uppercase; letter-spacing: .05em; color: var(--muted); font-weight: 600; }
  .guide article blockquote { margin: 22px 0; padding: 14px 18px; border-left: 3px solid var(--brand); background: var(--accent-soft); border-radius: 0 8px 8px 0; }
  .guide article blockquote p { margin: 0; color: var(--fg); }
  .toc { position: sticky; top: 88px; align-self: start; font-size: 14px; }
  .toc b { display: block; font: 600 11.5px/1 "Geist Mono", ui-monospace, monospace; text-transform: uppercase; letter-spacing: .08em; color: var(--muted); margin-bottom: 12px; }
  .toc a { display: block; color: var(--muted); text-decoration: none; padding: 5px 0 5px 12px; border-left: 2px solid var(--line); line-height: 1.4; }
  .toc a:hover { color: var(--fg); border-left-color: var(--line-strong); }
  .toc a.on { color: var(--brand); border-left-color: var(--brand); font-weight: 600; }
  .try { margin: 56px 0 0; padding: 28px; border-radius: 12px; border: 1px solid var(--line); background: var(--bg-soft); display: grid; grid-template-columns: 1fr auto; gap: 18px; align-items: center; }
  .try h2 { margin: 0 0 6px !important; font-size: 22px !important; }
  .try p { margin: 0; color: var(--muted); font-size: 15px; }
  .try .buttons { margin: 0; }
  .more-guides { margin-top: 48px; }
  .more-guides h2 { font-size: 20px !important; margin: 0 0 14px !important; }
  .more-guides .cards { grid-template-columns: repeat(2, 1fr); }
  .guide-list { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; padding: 48px 24px 96px; }
  @media (max-width: 1000px) { .guide { grid-template-columns: minmax(0, 1fr); } .toc { display: none; } .guide-list { grid-template-columns: 1fr 1fr; } }
  @media (max-width: 640px) {
    .guide-head h1 { font-size: 32px; } .guide { padding: 32px 16px 64px; } .guide article h2 { font-size: 23px; }
    .try { grid-template-columns: 1fr; } .more-guides .cards, .guide-list { grid-template-columns: 1fr; } .guide-list { padding: 32px 16px 64px; }
  }`

const SCRIPT = `<script>
  for (const b of document.querySelectorAll('.editor .copy')) {
    b.addEventListener('click', () => {
      const code = b.closest('.editor').querySelector('code').innerText
      navigator.clipboard?.writeText(code).then(() => { b.textContent = 'Copied'; setTimeout(() => (b.textContent = 'Copy'), 1400) })
    })
  }
  // Mark the section being read in the table of contents.
  const links = [...document.querySelectorAll('.toc a')]
  const heads = links.map((a) => document.getElementById(a.hash.slice(1))).filter(Boolean)
  const mark = () => {
    let cur = heads[0]
    for (const h of heads) if (h.getBoundingClientRect().top < 120) cur = h
    for (const a of links) a.classList.toggle('on', a.hash === '#' + cur?.id)
  }
  addEventListener('scroll', mark, { passive: true })
  mark()
</script>`

const slugify = (s) => s.toLowerCase().replace(/<[^>]+>/g, '').replace(/&[a-z]+;/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
const fmtDate = (d) => new Date(d + 'T12:00:00Z').toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })

function render(g) {
  const codes = []
  // Code markers become placeholders so marked leaves them alone.
  let md = g.body.replace(/<!--\s*code:\s*([^#\s]+)(?:#([\w-]+))?(?:\s+title="([^"]*)")?\s*-->/g, (_, file, name, title) => {
    const lang = file.endsWith('.ts') ? 'ts' : 'tsx'
    codes.push(codeBlock(region(file, name), lang, title))
    return `\n\nCODEBLOCK${codes.length - 1}\n\n`
  })
  // Fenced blocks written in the guide (install commands and the like).
  md = md.replace(/```(\w+)?(?: title="([^"]*)")?\n([\s\S]*?)```/g, (_, lang = 'tsx', title, code) => {
    codes.push(codeBlock(code.replace(/\n$/, ''), lang, title))
    return `\n\nCODEBLOCK${codes.length - 1}\n\n`
  })
  let html = marked.parse(md)
  html = html.replace(/<p>CODEBLOCK(\d+)<\/p>/g, (_, i) => codes[Number(i)])
  // Images with a title become figures with a caption.
  html = html.replace(/<p><img src="([^"]+)" alt="([^"]*)"(?: title="([^"]*)")?><\/p>/g, (_, src, alt, cap) =>
    `<figure><img src="${src}" alt="${alt}" loading="lazy">${cap ? `<figcaption>${cap}</figcaption>` : ''}</figure>`)
  const toc = []
  html = html.replace(/<h2>([\s\S]*?)<\/h2>/g, (_, text) => {
    const id = slugify(text)
    toc.push({ id, text: text.replace(/<[^>]+>/g, '') })
    return `<h2 id="${id}">${text}</h2>`
  })
  html = html.replace(/<h3>([\s\S]*?)<\/h3>/g, (_, text) => `<h3 id="${slugify(text)}">${text}</h3>`)
  const words = g.body.replace(/<!--[\s\S]*?-->/g, '').split(/\s+/).length + codes.length * 40
  return { html, toc, minutes: Math.max(3, Math.round(words / 220)) }
}

function card(g, base) {
  return `<a class="card" href="${base}${g.slug}.html">
          <div class="thumb"><img src="${base}img/${g.image}" alt="${esc(g.alt)}" loading="lazy"></div>
          <div class="body"><span class="tag">Guide</span><h3>${esc(g.title)}</h3><p>${esc(g.short)}</p></div>
        </a>`
}

function page({ title, description, canonical, body, jsonld }) {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${canonical}">
<link rel="icon" href="../favicon.svg" type="image/svg+xml">
<meta property="og:type" content="article">
<meta property="og:site_name" content="Rowpine">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${ORIGIN}/img/og.png">
<meta name="twitter:card" content="summary_large_image">
${FONTS}
${THEME_HEAD}
<link rel="stylesheet" href="../site.css">
<style>${CSS}</style>
<script src="../analytics.js" defer></script>
${jsonld ? `<script type="application/ld+json">${JSON.stringify(jsonld)}</script>` : ''}
</head>
<body>
${header({ base: '../', current: 'guides' })}
<main>
${body}
</main>
${footer({ base: '../' })}
${SCRIPT}
</body>
</html>
`
}

for (const g of guides) {
  const { html, toc, minutes } = render(g)
  const canonical = `${ORIGIN}/guides/${g.slug}.html`
  const others = guides.filter((x) => x.slug !== g.slug)
  const body = `<div class="guide-head">
  <div class="wrap">
    <p class="crumbs"><a href="./">Guides</a> / ${esc(g.section ?? 'Tutorial')}</p>
    <h1>${esc(g.title)}</h1>
    <p class="lead">${esc(g.description)}</p>
    <div class="byline"><span>${fmtDate(g.date)}</span><span>${minutes} min read</span><span>TanStack Table v9 and v8</span></div>
  </div>
</div>
<div class="wrap guide">
  <article>
${html}
    <div class="try">
      <div><h2>Try it in your project</h2><p>Everything runs without a license key; Excel and PDF files carry one notice line until you add one.</p></div>
      <div class="buttons"><a class="btn primary" href="../docs/installation.html" data-umami-event="Guide install">Install Rowpine</a><a class="btn secondary" href="../examples/">Live demos</a></div>
    </div>
    <section class="more-guides" aria-label="More guides" style="padding:0">
      <h2>More guides</h2>
      <div class="cards">${others.map((o) => card(o, '')).join('')}</div>
    </section>
  </article>
  <nav class="toc" aria-label="On this page"><b>On this page</b>${toc.map((t) => `<a href="#${t.id}">${esc(t.text)}</a>`).join('')}</nav>
</div>`
  const jsonld = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: g.title,
    description: g.description,
    datePublished: g.date,
    dateModified: g.updated ?? g.date,
    image: `${ORIGIN}/guides/img/${g.image}`,
    mainEntityOfPage: canonical,
    author: { '@type': 'Organization', name: 'jQWidgets LTD', url: ORIGIN },
    publisher: { '@type': 'Organization', name: 'jQWidgets LTD' },
    proficiencyLevel: 'Intermediate',
  }
  writeFileSync(join(out, `${g.slug}.html`), page({ title: `${g.title} - Rowpine`, description: g.description, canonical, body, jsonld }))

  // A Markdown copy for agents, with the code pasted in.
  const md = g.body
    .replace(/<!--\s*code:\s*([^#\s]+)(?:#([\w-]+))?(?:\s+title="([^"]*)")?\s*-->/g, (_, file, name, title) =>
      `\`\`\`${file.endsWith('.ts') ? 'ts' : 'tsx'}${title ? ` title="${title}"` : ''}\n${region(file, name)}\n\`\`\``)
  writeFileSync(join(out, `${g.slug}.md`), `# ${g.title}\n\n${g.description}\n\n${md}\n`)
}

// Index
writeFileSync(join(out, 'index.html'), page({
  title: 'Rowpine guides - TanStack Table to Excel, PDF and pivot tables',
  description: 'Step-by-step guides for TanStack Table and shadcn/ui: export to Excel with grouped rows, build a pivot table, and export a data table to PDF.',
  canonical: `${ORIGIN}/guides/`,
  body: `<div class="page-head">
  <div class="wrap">
    <span class="label">Guides</span>
    <h1>Guides</h1>
    <p class="lead">Step-by-step guides for TanStack Table and shadcn/ui. Every code sample is built and run in a real app before it is published.</p>
  </div>
</div>
<div class="wrap guide-list">${guides.map((g) => card(g, '')).join('')}</div>`,
}))

// llms.txt
const llmsPath = join(site, 'llms.txt')
const llms = readFileSync(llmsPath, 'utf8')
const list = `<!-- guides:start -->\n## Guides\n\n${guides.map((g) => `- [${g.title}](${ORIGIN}/guides/${g.slug}.md): ${g.short}`).join('\n')}\n<!-- guides:end -->`
writeFileSync(llmsPath, /<!-- guides:start -->[\s\S]*<!-- guides:end -->/.test(llms) ? llms.replace(/<!-- guides:start -->[\s\S]*<!-- guides:end -->/, list) : llms.trimEnd() + '\n\n' + list + '\n')

// sitemap.xml and robots.txt for the whole site
const pages = []
const walk = (dir) => {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name)
    if (e.isDirectory()) { if (!['r', 'img', 'assets'].includes(e.name)) walk(p); continue }
    if (!e.name.endsWith('.html')) continue
    const rel = relative(site, p).replace(/\\/g, '/')
    if (rel === 'thanks.html' || rel === 'examples/tour.html') continue
    pages.push(rel.replace(/(^|\/)index\.html$/, '$1'))
  }
}
walk(site)
pages.sort()
writeFileSync(join(site, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages.map((p) => `  <url><loc>${ORIGIN}/${p}</loc></url>`).join('\n')}\n</urlset>\n`)
if (!existsSync(join(site, 'robots.txt')) || !readFileSync(join(site, 'robots.txt'), 'utf8').includes('Sitemap:')) {
  writeFileSync(join(site, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${ORIGIN}/sitemap.xml\n`)
}
console.log(`${guides.length} guides -> site/guides, sitemap with ${pages.length} pages`)
