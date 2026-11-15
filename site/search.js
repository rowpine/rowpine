// Site search: docs, guides, the API reference and the main pages, from a
// prebuilt index (search-index.json) fetched the first time search opens.
// Open with the header button, Ctrl+K or Cmd+K, or "/".
;(function () {
  var base = (document.currentScript && document.currentScript.src.replace(/search\.js(\?.*)?$/, '')) || '/'
  var mac = /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent)
  var index = null
  var loading = null
  var dialog, input, list, active = 0, results = []

  var POPULAR = [
    { k: 'Docs', t: 'Installation', u: 'docs/installation.html' },
    { k: 'Docs', t: 'Export to Excel', u: 'docs/export-to-excel.html' },
    { k: 'Docs', t: 'Pivot designer', u: 'docs/pivot-designer.html' },
    { k: 'Guide', t: 'shadcn data table export to PDF', u: 'guides/shadcn-data-table-export-to-pdf.html' },
    { k: 'API', t: 'exportXlsx', u: 'docs/api-export.html#exportXlsx' },
  ]

  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;') }

  function load() {
    if (index) return Promise.resolve(index)
    if (!loading) {
      loading = fetch(base + 'search-index.json')
        .then(function (r) { return r.json() })
        .then(function (data) {
          index = data.map(function (e) {
            return { e: e, t: e.t.toLowerCase(), h: (e.h || '').toLowerCase(), x: (e.x || '').toLowerCase() }
          })
          return index
        })
    }
    return loading
  }

  function tokens(q) { return q.toLowerCase().split(/[^a-z0-9@._-]+/).filter(Boolean) }
  function startsWord(s, tok) { var i = s.indexOf(tok); while (i >= 0) { if (i === 0 || /[^a-z0-9]/.test(s[i - 1])) return true; i = s.indexOf(tok, i + 1) } return false }

  function score(it, toks) {
    var total = 0
    for (var i = 0; i < toks.length; i++) {
      var t = toks[i], s = 0
      if (it.t === t) s = 30
      else if (startsWord(it.t, t)) s = 14
      else if (it.t.indexOf(t) >= 0) s = 7
      if (startsWord(it.h, t)) s = Math.max(s, 6)
      else if (it.h.indexOf(t) >= 0) s = Math.max(s, 3)
      if (!s) { if (startsWord(it.x, t)) s = 2; else if (it.x.indexOf(t) >= 0) s = 1 }
      if (!s) return 0
      total += s
    }
    // Whole pages rank above their sections when they match as well.
    return total + (it.e.h ? 0 : 1)
  }

  function snippet(text, toks) {
    if (!text) return ''
    var low = text.toLowerCase(), at = -1
    for (var i = 0; i < toks.length && at < 0; i++) at = low.indexOf(toks[i])
    var from = Math.max(0, at - 60)
    var cut = (from > 0 ? '... ' : '') + text.slice(from, from + 170) + (text.length > from + 170 ? ' ...' : '')
    var html = esc(cut)
    toks.forEach(function (t) {
      html = html.replace(new RegExp('(' + t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'ig'), '<mark>$1</mark>')
    })
    return html
  }

  // The last results this visitor opened, kept in this browser only.
  var RECENT_KEY = 'rowpine-recent-search'
  function recent() {
    try { return JSON.parse(localStorage.getItem(RECENT_KEY) || '[]') } catch (e) { return [] }
  }
  function remember(r) {
    try {
      var list = recent().filter(function (x) { return x.u !== r.u })
      list.unshift({ k: r.k, t: r.t, h: r.h, u: r.u })
      localStorage.setItem(RECENT_KEY, JSON.stringify(list.slice(0, 5)))
    } catch (e) {}
  }

  function render(q) {
    var toks = tokens(q)
    if (!toks.length) {
      var past = recent()
      results = past.length ? past : POPULAR
      draw(past.length ? 'Recent' : 'Popular', [])
      return
    }
    load().then(function (idx) {
      if (input.value !== q) return
      results = idx
        .map(function (it) { return { it: it, s: score(it, toks) } })
        .filter(function (r) { return r.s > 0 })
        .sort(function (a, b) { return b.s - a.s })
        .slice(0, 14)
        .map(function (r) { return r.it.e })
      draw(results.length ? '' : 'No results for "' + q + '". Try a function name, such as exportPdf, or a word, such as pivot.', toks)
    })
  }

  function draw(note, toks) {
    active = 0
    list.innerHTML =
      (note ? '<li class="s-note" role="presentation">' + esc(note) + '</li>' : '') +
      results
        .map(function (r, i) {
          return (
            '<li role="option" id="s-opt-' + i + '" aria-selected="' + (i === 0) + '"><a href="' + base + r.u + '">' +
            '<span class="s-kind">' + esc(r.k) + '</span>' +
            '<span class="s-body"><span class="s-title">' + esc(r.t) + (r.h ? ' <span class="s-sec">&rsaquo; ' + esc(r.h) + '</span>' : '') + '</span>' +
            (toks.length && r.x ? '<span class="s-snip">' + snippet(r.x, toks) + '</span>' : '') +
            '</span></a></li>'
          )
        })
        .join('')
    input.setAttribute('aria-activedescendant', results.length ? 's-opt-0' : '')
  }

  function move(d) {
    var items = list.querySelectorAll('[role="option"]')
    if (!items.length) return
    items[active].setAttribute('aria-selected', 'false')
    active = (active + d + items.length) % items.length
    items[active].setAttribute('aria-selected', 'true')
    items[active].scrollIntoView({ block: 'nearest' })
    input.setAttribute('aria-activedescendant', items[active].id)
  }

  function build() {
    dialog = document.createElement('div')
    dialog.className = 'search-dialog'
    dialog.hidden = true
    dialog.innerHTML =
      '<div class="s-backdrop" data-close></div>' +
      '<div class="s-panel" role="dialog" aria-modal="true" aria-label="Search">' +
      '<div class="s-input"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>' +
      '<input type="search" placeholder="Search docs, guides and API" aria-label="Search docs, guides and API" role="combobox" aria-expanded="true" aria-controls="s-results" aria-autocomplete="list" autocomplete="off" spellcheck="false">' +
      '<kbd data-close>Esc</kbd></div>' +
      '<ul class="s-results" id="s-results" role="listbox"></ul>' +
      '<div class="s-foot"><span><kbd>&uarr;</kbd><kbd>&darr;</kbd> to move</span><span><kbd>Enter</kbd> to open</span><span><kbd>Esc</kbd> to close</span></div>' +
      '</div>'
    document.body.appendChild(dialog)
    input = dialog.querySelector('input')
    list = dialog.querySelector('.s-results')
    var timer
    input.addEventListener('input', function () { clearTimeout(timer); timer = setTimeout(function () { render(input.value.trim()) }, 60) })
    input.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowDown') { e.preventDefault(); move(1) }
      else if (e.key === 'ArrowUp') { e.preventDefault(); move(-1) }
      else if (e.key === 'Enter') {
        var a = list.querySelectorAll('[role="option"] a')[active]
        if (a) { e.preventDefault(); if (results[active]) remember(results[active]); location.href = a.href; close() }
      }
    })
    dialog.addEventListener('click', function (e) {
      if (e.target.closest('[data-close]')) close()
      else if (e.target.closest('.s-results a')) {
        var items = Array.prototype.slice.call(list.querySelectorAll('[role="option"]'))
        var i = items.indexOf(e.target.closest('[role="option"]'))
        if (results[i]) remember(results[i])
        close()
      }
    })
  }

  var opener = null
  function open(q) {
    if (!dialog) build()
    opener = document.activeElement
    dialog.hidden = false
    document.documentElement.classList.add('s-open')
    input.value = q || ''
    render(input.value)
    input.focus()
    load()
  }
  function close() {
    if (!dialog || dialog.hidden) return
    dialog.hidden = true
    document.documentElement.classList.remove('s-open')
    if (opener && opener.focus) opener.focus()
  }

  document.addEventListener('keydown', function (e) {
    var typing = /^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement && document.activeElement.tagName) || (document.activeElement && document.activeElement.isContentEditable)
    if ((e.key === 'k' || e.key === 'K') && (e.metaKey || e.ctrlKey)) { e.preventDefault(); dialog && !dialog.hidden ? close() : open() }
    else if (e.key === '/' && !typing) { e.preventDefault(); open() }
    else if (e.key === 'Escape') close()
  })
  document.addEventListener('click', function (e) {
    if (e.target.closest('[data-open-search]')) { e.preventDefault(); open() }
  })
  // Show the shortcut for this platform.
  document.querySelectorAll('[data-open-search] kbd').forEach(function (k) { k.textContent = mac ? '⌘K' : 'Ctrl K' })
})()
