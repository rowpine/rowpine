#!/usr/bin/env node
// Build the help topics: docs/*.md -> site/docs/<slug>.html, a .md copy of each
// for agents, site/docs/index.html, and the docs list in site/llms.txt.
//   node scripts/build-docs.mjs
import { readdirSync, readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { marked } from 'marked'

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
  :root { --bg:#fbfaf7; --surface:#fff; --fg:#1c1f1a; --muted:#5b6157; --line:#e2e0d8; --accent:#2f6b4f; --accent-soft:#e6efe9; --code-bg:#f2f1ec; }
  @media (prefers-color-scheme: dark) { :root { --bg:#121512; --surface:#191d19; --fg:#e6e8e3; --muted:#9ba294; --line:#2b302a; --accent:#7fbf9b; --accent-soft:#1f2d24; --code-bg:#1c211c; } }
  * { box-sizing: border-box; }
  body { margin:0; background:var(--bg); color:var(--fg); font:16px/1.65 Manrope,ui-sans-serif,system-ui,-apple-system,"Segoe UI",Roboto,sans-serif; }
  a { color:var(--accent); }
  code, pre { font-family:ui-monospace,"SF Mono",Menlo,Consolas,monospace; font-size:.88em; }
  :not(pre) > code { background:var(--code-bg); padding:.1em .35em; border-radius:4px; }
  pre { background:var(--code-bg); border:1px solid var(--line); border-radius:8px; padding:12px 14px; overflow-x:auto; line-height:1.5; }
  .wrap { max-width:1120px; margin:0 auto; padding:0 16px; }
  header.top { border-bottom:1px solid var(--line); }
  header.top .wrap { display:flex; align-items:center; justify-content:space-between; height:56px; }
  .brand { display:flex; align-items:center; gap:10px; font-weight:800; color:var(--fg); text-decoration:none; white-space:nowrap; }
  .brand .for { font-weight:600; color:var(--muted); }
  .mark { width:30px; height:30px; border-radius:8px; background:#1f5b40; display:grid; place-items:center; }
  .mark svg { width:19px; height:19px; color:#fff; }
  @media (max-width: 640px) { .brand .for { display:none; } }
  nav.top a { color:var(--muted); text-decoration:none; margin-left:20px; font-size:15px; }
  nav.top a:hover, nav.top a[aria-current] { color:var(--fg); }
  .layout { display:grid; grid-template-columns:230px minmax(0,1fr); gap:40px; padding:28px 0 60px; }
  aside.side { position:sticky; top:16px; align-self:start; font-size:14px; max-height:calc(100vh - 32px); overflow:auto; }
  aside.side h2 { font-size:12px; text-transform:uppercase; letter-spacing:.04em; color:var(--muted); margin:18px 0 6px; }
  aside.side h2:first-child { margin-top:0; }
  aside.side a { display:block; padding:4px 8px; border-radius:6px; color:var(--fg); text-decoration:none; }
  aside.side a:hover { background:var(--accent-soft); }
  aside.side a[aria-current] { background:var(--accent-soft); color:var(--accent); font-weight:600; }
  article { max-width:760px; min-width:0; }
  main { min-width:0; }
  article h1 { font-size:32px; line-height:1.2; margin:0 0 6px; }
  .crumb { color:var(--muted); font-size:14px; margin:0 0 18px; }
  figure { margin:18px 0 24px; }
  figure img { max-width:100%; height:auto; border:1px solid var(--line); border-radius:8px; background:#fff; display:block; }
  figcaption { color:var(--muted); font-size:13px; margin-top:6px; }
  article h2 { font-size:20px; margin:28px 0 8px; }
  table { border-collapse:collapse; width:100%; font-size:14px; margin:12px 0; display:block; overflow-x:auto; }
  th, td { text-align:left; padding:6px 10px; border-bottom:1px solid var(--line); vertical-align:top; }
  th { font-weight:600; }
  .live { display:inline-block; margin:6px 0 0; padding:6px 12px; border:1px solid var(--line); border-radius:8px; text-decoration:none; font-size:14px; background:var(--surface); }
  .pager { display:flex; justify-content:space-between; gap:16px; margin-top:40px; padding-top:16px; border-top:1px solid var(--line); font-size:14px; }
  .index-section { margin-bottom:28px; }
  .index-section ul { list-style:none; padding:0; margin:0; display:grid; grid-template-columns:repeat(auto-fill,minmax(240px,1fr)); gap:4px 24px; }
  .index-section li a { text-decoration:none; }
  footer { border-top:1px solid var(--line); padding:20px 0 36px; color:var(--muted); font-size:14px; }
  @media (max-width: 820px) {
    .layout { grid-template-columns:minmax(0,1fr); gap:16px; }
    aside.side { position:static; max-height:none; }
    nav.top a { margin-left:12px; }
    article h1 { font-size:26px; }
  }`

const LOGO = `<span class="mark"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2 6.5 9h3L5 15h4.5L4 21h7v1h2v-1h7l-5.5-6H19l-4.5-6h3z"/></svg></span>`

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
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<style>${CSS}</style>
</head>
<body>
<header class="top"><div class="wrap">
  <a class="brand" href="../">${LOGO} Rowpine <span class="for">for TanStack Table</span></a>
  <nav class="top"><a href="./" aria-current="page">Docs</a><a href="../examples/">Demos</a><a href="../pricing.html">Pricing</a><a href="https://github.com/rowpine/rowpine">GitHub</a></nav>
</div></header>
<div class="wrap layout">
  <aside class="side" aria-label="Help topics">${sidebar(current)}</aside>
  <main>${body}</main>
</div>
<footer><div class="wrap">Rowpine is a brand of jQWidgets LTD. TanStack Table and shadcn/ui are separate projects and are not affiliated with Rowpine.</div></footer>
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
