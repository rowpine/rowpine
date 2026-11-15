// The documentation shell: the site header, a navigation column, the page,
// an "On this page" column, and the site footer. Docs topics, guides, the API
// reference and the resources pages all render through it.
import { header, footer, FONTS, THEME_HEAD } from '../chrome.mjs'
import { esc, fmtDate } from './text.mjs'

export const ORIGIN = 'https://rowpine.com'
export const REPO = 'https://github.com/rowpine/rowpine'

const ICON = {
  menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M4 6h16M4 12h16M4 18h16"/></svg>',
  ext: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7M9 7h8v8"/></svg>',
  edit: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/></svg>',
  md: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/></svg>',
}

/** The navigation column. `nav` is [{ label, items: [{ href, title, external }] }]; hrefs are from the site root. */
export function navHtml(nav, current, base, version) {
  const groups = nav
    .map((g) => {
      const items = g.items
        .map((it) => {
          const on = it.href === current
          return `<a href="${it.external ? it.href : base + it.href}"${on ? ' aria-current="page"' : ''}${it.external ? ' class="ext"' : ''}>${esc(it.title)}${it.external ? ICON.ext : ''}</a>`
        })
        .join('')
      return `<div class="dnav-group"><h2>${esc(g.label)}</h2>${items}</div>`
    })
    .join('')
  return `<nav class="dnav" id="docs-nav" aria-label="Documentation">
    <div class="dnav-top"><a class="dnav-home" href="${base}docs/">Documentation</a><span class="ver" title="Documented package version">v${esc(version)}</span></div>
    ${groups}
  </nav>`
}

export function tocHtml(toc) {
  if (!toc.length) return '<aside class="dtoc"></aside>'
  return `<aside class="dtoc" aria-label="On this page"><b>On this page</b>${toc.map((t) => `<a href="#${t.id}" class="l${t.level}">${esc(t.text)}</a>`).join('')}<a class="totop" href="#top">Back to top</a></aside>`
}

/** Updated date, version, Copy as Markdown and Edit on GitHub. */
export function metaRow({ updated, version, md, edit, extra = [] }) {
  const parts = [
    updated ? `<span>Updated ${fmtDate(updated)}</span>` : '',
    version ? `<span>rowpine ${esc(version)}</span>` : '',
    ...extra.map((e) => `<span>${e}</span>`),
  ].filter(Boolean)
  const actions = [
    md ? `<button type="button" class="act" data-copy-md="${esc(md)}">${ICON.md}<span>Copy as Markdown</span></button>` : '',
    edit ? `<a class="act" href="${esc(edit)}">${ICON.edit}<span>Edit on GitHub</span></a>` : '',
  ].filter(Boolean)
  return `<div class="dmeta"><div class="facts">${parts.join('')}</div><div class="acts">${actions.join('')}</div></div>`
}

export function feedback(page) {
  return `<div class="feedback" data-feedback>
    <span>Was this page helpful?</span>
    <button type="button" data-answer="yes" data-umami-event="Docs feedback" data-umami-event-page="${esc(page)}" data-umami-event-answer="yes">Yes</button>
    <button type="button" data-answer="no" data-umami-event="Docs feedback" data-umami-event-page="${esc(page)}" data-umami-event-answer="no">No</button>
    <span class="fb-thanks" hidden>Thanks. To tell us more, write to <a href="mailto:info@jqwidgets.com?subject=Rowpine%20docs%3A%20${encodeURIComponent(page)}">info@jqwidgets.com</a>.</span>
  </div>`
}

export function pager(prev, next, base) {
  if (!prev && !next) return ''
  const card = (x, dir) =>
    x ? `<a class="pg ${dir}" href="${base}${x.href}"><span>${dir === 'prev' ? 'Previous' : 'Next'}</span><b>${esc(x.title)}</b></a>` : '<span></span>'
  return `<nav class="pager" aria-label="Previous and next">${card(prev, 'prev')}${card(next, 'next')}</nav>`
}

export function docsPage({ base = '../', title, description, canonical, nav, current, main, toc = [], md, jsonld, ogType = 'article', version }) {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${canonical}">
<link rel="icon" href="${base}favicon.svg" type="image/svg+xml">
<meta property="og:type" content="${ogType}">
<meta property="og:site_name" content="Rowpine">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${ORIGIN}/img/og.png">
<meta name="twitter:card" content="summary_large_image">
${md ? `<link rel="alternate" type="text/markdown" href="${md}">` : ''}
${FONTS}
${THEME_HEAD}
<link rel="stylesheet" href="${base}site.css">
<link rel="stylesheet" href="${base}docs.css">
<script src="${base}analytics.js" defer></script>
<script src="${base}docs.js" defer></script>
${jsonld ? `<script type="application/ld+json">${JSON.stringify(jsonld)}</script>` : ''}
</head>
<body id="top">
${header({ base, current: current?.startsWith('guides/') ? 'guides' : 'docs' })}
<button type="button" class="dnav-toggle" aria-controls="docs-nav" aria-expanded="false">${ICON.menu}<span>Menu</span></button>
<div class="docs">
  ${navHtml(nav, current, base, version)}
  <main class="dmain">
${main}
  </main>
  ${tocHtml(toc)}
</div>
${footer({ base })}
</body>
</html>
`
}
