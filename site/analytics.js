// Cookieless page counts for rowpine.com with Umami Cloud. This file is for the
// website only; the rowpine npm package makes no network calls.
// It loads nothing off rowpine.com (localhost, previews) and nothing when the
// visitor sends Do Not Track or Global Privacy Control.
// Buttons with a data-umami-event attribute are counted as events.
;(function () {
  var WEBSITE_ID = 'ef21e002-21ff-4220-b71c-48d3d256b031' // the Umami website id for rowpine.com
  if (!WEBSITE_ID || location.hostname !== 'rowpine.com') return
  var nav = navigator
  if (nav.doNotTrack === '1' || window.doNotTrack === '1' || nav.globalPrivacyControl) return
  var s = document.createElement('script')
  s.defer = true
  s.src = 'https://cloud.umami.is/script.js'
  s.setAttribute('data-website-id', WEBSITE_ID)
  s.setAttribute('data-domains', 'rowpine.com')
  document.head.appendChild(s)
  // The demos app routes by hash; count each demo as a page view.
  addEventListener('hashchange', function () {
    if (window.umami) window.umami.track()
  })
})()
