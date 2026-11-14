#!/usr/bin/env node
// Build the help topics: docs/*.md -> site/docs/<slug>.html, a .md copy of each
// for agents, site/docs/index.html, and the docs list in site/llms.txt.
//   node scripts/build-docs.mjs
import { readdirSync, readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { marked } from 'marked'
import { header, footer, FONTS, THEME_HEAD } from './chrome.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const out = join(root, 'site', 'docs')
mkdirSync(out, { recursive: true })

const SECTIONS = ['Getting started', 'Excel', 'PDF', 'CSV', 'Pivot']
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

const topics = readdirSync(join(root, 'docs'))
  .filter((f) => f.endsWith('.md'))
  .map((file) => {
    const raw = readFileSync(join(root, 'docs', file), 'utf8')
    const m = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/.exec(raw)
    if (!m) throw new Error(`${file}: no front matter`)
    const meta = Object.fromEntries(m[1].split('\n').map((l) => [l.slice(0, l.indexOf(':')).trim(), l.slice(l.indexOf(':') + 1).trim()]))
    for (const k of ['title', 'section', 'order', 'image', 'alt', 'example']) if (!meta[k]) throw new Error(`${file}: missing ${k}`)
    if (!SECTIONS.includes(meta.section)) throw new Error(`${file}: unknown section ${meta.section}`)
    return { slug: file.replace(/\.md$/, ''), ...meta, order: Number(meta.order), body: m[2].trim() }
  })
  .sort((a, b) => a.order - b.order)

// Every relative .html link must point at a topic.
const slugs = new Set(topics.map((t) => t.slug))
for (const t of topics) {
  for (const [, href] of t.body.matchAll(/\]\(([a-z0-9-]+)\.html\)/g)) {
    if (!slugs.has(href)) throw new Error(`${t.slug}: link to missing topic ${href}`)
  }
}

const CSS = `
  :root { --code-bg: #f2f4f2; } :root[data-theme="dark"] { --code-bg: #16201a; }
  code, pre { font-family:"Geist Mono",ui-monospace,Menlo,Consolas,monospace; font-size:.88em; }
  :not(pre) > code { background:var(--code-bg); padding:.1em .35em; border-radius:4px; }
  pre { background:var(--code-bg); border:1px solid var(--line); border-radius:8px; padding:12px 14px; overflow-x:auto; line-height:1.5; }
  .layout { display:grid; grid-template-columns:240px minmax(0,1fr); gap:56px; padding:40px 24px 80px; }
  aside.side { position:sticky; top:88px; align-self:start; font-size:14px; max-height:calc(100vh - 112px); overflow:auto; }
  aside.side h2 { font:600 11.5px/1 "Geist Mono",ui-monospace,monospace; text-transform:uppercase; letter-spacing:.08em; color:var(--muted); margin:22px 0 8px; padding-left:8px; }
  aside.side h2:first-child { margin-top:0; }
  aside.side a { display:block; padding:5px 8px; border-radius:6px; color:var(--muted); text-decoration:none; }
  aside.side a:hover { color:var(--fg); }
  aside.side a:hover { background:var(--accent-soft); }
  aside.side a[aria-current] { background:var(--accent-soft); color:var(--brand); font-weight:600; }
  article { max-width:760px; min-width:0; }
  main { min-width:0; }
  article h1 { font-size:36px; line-height:1.15; letter-spacing:-0.03em; font-weight:650; margin:0 0 8px; }
  article p, article li { line-height:1.7; }
  .crumb { color:var(--muted); font-size:14px; margin:0 0 18px; }
  figure { margin:18px 0 24px; }
  figure img { max-width:100%; height:auto; border:1px solid var(--line); border-radius:10px; background:#fff; display:block; box-shadow:var(--shadow-sm); }
  figcaption { color:var(--muted); font-size:13px; margin-top:6px; }
  article h2 { font-size:21px; letter-spacing:-0.015em; font-weight:600; margin:36px 0 8px; }
  table { border-collapse:collapse; width:100%; font-size:14px; margin:12px 0; display:block; overflow-x:auto; }
  th, td { text-align:left; padding:6px 10px; border-bottom:1px solid var(--line); vertical-align:top; }
  th { font-weight:600; }
  .live { display:inline-block; margin:6px 0 0; padding:6px 12px; border:1px solid var(--line); border-radius:8px; text-decoration:none; font-size:14px; background:var(--surface); }
  .pager { display:flex; justify-content:space-between; gap:16px; margin-top:40px; padding-top:16px; border-top:1px solid var(--line); font-size:14px; }
  .index-section { margin-bottom:28px; }
  .index-section ul { list-style:none; padding:0; margin:0; display:grid; grid-template-columns:repeat(auto-fill,minmax(240px,1fr)); gap:4px 24px; }
  .index-section li a { text-decoration:none; }
  @media (max-width: 820px) {
    .layout { grid-template-columns:minmax(0,1fr); gap:16px; padding:24px 16px 56px; }
    aside.side { position:static; max-height:none; order:2; border-top:1px solid var(--line); padding-top:24px; }
    article h1 { font-size:26px; }
  }`

function sidebar(current) {
  return SECTIONS.map((s) => {
    const items = topics.filter((t) => t.section === s)
    if (!items.length) return ''
    return `<h2>${esc(s)}</h2>` + items.map((t) => `<a href="${t.slug}.html"${t.slug === current ? ' aria-current="page"' : ''}>${esc(t.title)}</a>`).join('')
  }).join('')
}

function page({ title, description, body, current }) {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="icon" href="../favicon.svg" type="image/svg+xml">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:image" content="https://rowpine.com/img/og.png">
<meta name="twitter:card" content="summary_large_image">
${current ? `<link rel="alternate" type="text/markdown" href="${current}.md">` : ''}
${FONTS}
${THEME_HEAD}
<link rel="stylesheet" href="../site.css">
<style>${CSS}</style>
<script src="../analytics.js" defer></script>
</head>
<body>
${header({ base: '../', current: 'docs' })}
<div class="wrap layout">
  <aside class="side" aria-label="Help topics">${sidebar(current)}</aside>
  <main>${body}</main>
</div>
${footer({ base: '../' })}
</body>
</html>
`
}

// The opening paragraph, cut at a sentence end, for meta descriptions and llms.txt.
const firstSentence = (md) => {
  const para = md.replace(/```[\s\S]*?```/g, '').replace(/[`*_\[\]]/g, '').replace(/\(([^)]*\.html)\)/g, '').split(/\n\n/)[0].replace(/\s+/g, ' ').trim()
  if (para.length <= 200) return para
  const cut = para.slice(0, 200)
  const end = Math.max(cut.lastIndexOf('. '), cut.lastIndexOf(': '))
  return end > 60 ? cut.slice(0, end + 1) : cut.slice(0, cut.lastIndexOf(' ')) + '...'
}

topics.forEach((t, i) => {
  const prev = topics[i - 1]
  const next = topics[i + 1]
  const body = `<article>
  <h1>${esc(t.title)}</h1>
  <p class="crumb">${esc(t.section)}</p>
  <figure>
    <img src="img/${t.image}" alt="${esc(t.alt)}" loading="lazy">
    <figcaption>${esc(t.alt)}. <a href="../examples/#/${t.example}">Open the live example</a></figcaption>
  </figure>
  ${marked.parse(t.body)}
  <p><a class="live" href="../examples/#/${t.example}">Live example and source</a></p>
  <nav class="pager" aria-label="Previous and next topic">
    <span>${prev ? `<a href="${prev.slug}.html">&larr; ${esc(prev.title)}</a>` : ''}</span>
    <span>${next ? `<a href="${next.slug}.html">${esc(next.title)} &rarr;</a>` : ''}</span>
  </nav>
</article>`
  writeFileSync(join(out, `${t.slug}.html`), page({ title: `${t.title} - Rowpine docs`, description: firstSentence(t.body), body, current: t.slug }))
  writeFileSync(join(out, `${t.slug}.md`), `# ${t.title}\n\n![${t.alt}](img/${t.image})\n\n${t.body}\n\nLive example: https://rowpine.com/examples/#/${t.example}\n`)
})

const index = `<article>
  <h1>Rowpine docs</h1>
  <p class="crumb">${topics.length} help topics. Each has a live example with its source.</p>
  ${SECTIONS.map((s) => {
    const items = topics.filter((t) => t.section === s)
    return items.length
      ? `<section class="index-section"><h2>${esc(s)}</h2><ul>${items.map((t) => `<li><a href="${t.slug}.html">${esc(t.title)}</a></li>`).join('')}</ul></section>`
      : ''
  }).join('')}
</article>`
writeFileSync(join(out, 'index.html'), page({ title: 'Rowpine docs', description: 'Help topics for Rowpine: Excel, PDF and CSV export and pivot tables for TanStack Table and shadcn/ui.', body: index, current: null }))

// The docs list in llms.txt, between markers.
const llmsPath = join(root, 'site', 'llms.txt')
const llms = readFileSync(llmsPath, 'utf8')
const list =
  '<!-- docs:start -->\n## Docs\n\n' +
  SECTIONS.flatMap((s) => topics.filter((t) => t.section === s).map((t) => `- [${t.title}](https://rowpine.com/docs/${t.slug}.md): ${firstSentence(t.body)}`)).join('\n') +
  '\n<!-- docs:end -->'
writeFileSync(llmsPath, /<!-- docs:start -->[\s\S]*<!-- docs:end -->/.test(llms) ? llms.replace(/<!-- docs:start -->[\s\S]*<!-- docs:end -->/, list) : llms.trimEnd() + '\n\n' + list + '\n')

console.log(`${topics.length} topics -> site/docs`)
