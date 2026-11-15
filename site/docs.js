// Behavior for the documentation pages: copy buttons, the "On this page"
// highlight, the mobile menu, page feedback and Copy as Markdown.
;(function () {
  function flash(el, text) {
    var label = el.querySelector('span') || el
    var was = label.textContent
    label.textContent = text
    setTimeout(function () { label.textContent = was }, 1400)
  }

  document.addEventListener('click', function (e) {
    var copy = e.target.closest('.editor .copy')
    if (copy) {
      var code = copy.closest('.editor').querySelector('code').innerText
      if (navigator.clipboard) navigator.clipboard.writeText(code).then(function () { flash(copy, 'Copied') })
      return
    }
    var md = e.target.closest('[data-copy-md]')
    if (md) {
      fetch(md.getAttribute('data-copy-md'))
        .then(function (r) { return r.text() })
        .then(function (text) { return navigator.clipboard.writeText(text) })
        .then(function () { flash(md, 'Copied') })
        .catch(function () { location.href = md.getAttribute('data-copy-md') })
      return
    }
    var answer = e.target.closest('[data-feedback] button')
    if (answer) {
      var box = answer.closest('[data-feedback]')
      box.querySelectorAll('button').forEach(function (b) { b.hidden = true })
      box.querySelector('span').hidden = true
      box.querySelector('.fb-thanks').hidden = false
      return
    }
    var toggle = e.target.closest('.dnav-toggle')
    if (toggle) {
      var nav = document.getElementById('docs-nav')
      var open = !nav.classList.contains('open')
      nav.classList.toggle('open', open)
      toggle.setAttribute('aria-expanded', String(open))
      document.body.style.overflow = open ? 'hidden' : ''
    }
  })

  // Mark the section being read.
  var links = Array.prototype.slice.call(document.querySelectorAll('.dtoc a[href^="#"]:not(.totop)'))
  var heads = links.map(function (a) { return document.getElementById(decodeURIComponent(a.hash.slice(1))) }).filter(Boolean)
  function mark() {
    var cur = heads[0]
    for (var i = 0; i < heads.length; i++) if (heads[i].getBoundingClientRect().top < 110) cur = heads[i]
    links.forEach(function (a) { a.classList.toggle('on', cur && a.hash === '#' + cur.id) })
  }
  if (heads.length) {
    addEventListener('scroll', mark, { passive: true })
    mark()
  }
  // Keep the current page visible in the navigation.
  var navEl = document.getElementById('docs-nav')
  var current = navEl && navEl.querySelector('[aria-current="page"]')
  if (current) navEl.scrollTop = Math.max(0, current.offsetTop - navEl.clientHeight / 2)
})()
