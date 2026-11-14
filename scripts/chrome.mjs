// The site header and footer, in one place. build-docs.mjs uses them for the
// help topics, and `npm run build:chrome` writes them between the
// <!-- header --> / <!-- footer --> markers of the static pages in site/.
// `base` is the path back to the site root: '' for site/*.html, '../' for docs.

export const FONTS = `<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;650;700&family=Geist+Mono:wght@400;500;600&display=swap" rel="stylesheet">`

const MARK = `<span class="mark"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2 6.5 9h3L5 15h4.5L4 21h7v1h2v-1h7l-5.5-6H19l-4.5-6h3z"/></svg></span>`

const GITHUB = `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.42-2.7 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5z"/></svg>`

const MOON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>`

const NAV = [
  ['examples/', 'Demos', 'demos'],
  ['docs/', 'Docs', 'docs'],
  ['pricing.html', 'Pricing', 'pricing'],
  ['license.html', 'License', 'license'],
]

/** The theme script for <head>: applies a saved theme before paint. */
export const THEME_HEAD = `<script>
  try { const t = localStorage.getItem('rowpine-theme'); if (t) document.documentElement.dataset.theme = t } catch {}
</script>`

export function header({ base = '', current = '' } = {}) {
  const links = NAV.map(([href, label, key]) => {
    const cls = key === 'license' ? ' class="hide-sm"' : ''
    const cur = key === current ? ' aria-current="page"' : ''
    return `<a href="${base}${href}"${cls}${cur}>${label}</a>`
  }).join('\n      ')
  return `<header class="top">
  <div class="wrap">
    <a class="brand" href="${base || './'}" aria-label="Rowpine home">
      ${MARK}
      Rowpine <span class="for">for TanStack Table</span>
    </a>
    <nav class="main" aria-label="Main">
      ${links}
    </nav>
    <div class="actions">
      <a class="icon-btn hide-sm" href="https://github.com/rowpine/rowpine" aria-label="Rowpine on GitHub">${GITHUB}</a>
      <button class="icon-btn" type="button" aria-label="Switch light and dark theme" onclick="toggleTheme()">${MOON}</button>
      <a class="btn sm primary" href="${base}pricing.html" data-umami-event="Header buy">Buy a license</a>
    </div>
  </div>
</header>`
}

export function footer({ base = '' } = {}) {
  const a = (href, label) => `<a href="${/^(https?:|mailto:)/.test(href) ? href : base + href}">${label}</a>`
  return `<footer class="site">
  <div class="wrap">
    <div class="cols">
      <div class="about">
        <a class="brand" href="${base || './'}">${MARK} Rowpine</a>
        <p>Pivot tables and Excel and PDF export for TanStack Table and shadcn/ui.</p>
      </div>
      <div>
        <h4>Product</h4>
        ${a('examples/', 'Demos')}
        ${a('pricing.html', 'Pricing')}
        ${a('license.html', 'License')}
        ${a('security.html', 'Security')}
        ${a('https://www.npmjs.com/package/rowpine', 'npm')}
        ${a('https://github.com/rowpine/rowpine', 'GitHub')}
      </div>
      <div>
        <h4>Get started</h4>
        ${a('docs/installation.html', 'Installation')}
        ${a('docs/add-an-export-menu.html', 'Export menu')}
        ${a('docs/license-keys.html', 'License keys')}
        ${a('docs/', 'All help topics')}
      </div>
      <div>
        <h4>Export</h4>
        ${a('docs/export-to-excel.html', 'Excel')}
        ${a('docs/export-to-pdf.html', 'PDF')}
        ${a('docs/csv-export.html', 'CSV')}
        ${a('docs/grouped-rows-as-outlines.html', 'Grouped rows')}
      </div>
      <div>
        <h4>Pivot</h4>
        ${a('docs/pivot-basics.html', 'Pivot tables')}
        ${a('docs/pivot-designer.html', 'Pivot designer')}
        ${a('docs/aggregations.html', 'Aggregations')}
        ${a('docs/exporting-a-pivot.html', 'Export a pivot')}
      </div>
    </div>
    <div class="legal">
      <span>&copy; 2026 jQWidgets LTD. Rowpine is a brand of jQWidgets LTD.</span>
      <nav aria-label="Legal">${a('license.html', 'License')}${a('security.html', 'Security')}${a('privacy.html', 'Privacy')}${a('mailto:info@jqwidgets.com?subject=Rowpine', 'Contact')}${a('llms.txt', 'llms.txt')}</nav>
    </div>
    <p class="fine">TanStack Table and shadcn/ui are separate projects and are not affiliated with Rowpine.</p>
  </div>
</footer>
<script>
  function toggleTheme() {
    const root = document.documentElement
    const dark = root.dataset.theme ? root.dataset.theme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches
    root.dataset.theme = dark ? 'light' : 'dark'
    try { localStorage.setItem('rowpine-theme', root.dataset.theme) } catch {}
  }
</script>`
}
