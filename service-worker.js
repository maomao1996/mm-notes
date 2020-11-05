/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "45567ba44e708fcdcbf568c96f70344e"
  },
  {
    "url": "assets/css/0.styles.8b6df087.css",
    "revision": "7d254739aa9e3b7e5779390276977473"
  },
  {
    "url": "assets/img/instasll.8dc01658.jpg",
    "revision": "8dc01658c77b2b363774fd240b7d4dc7"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.c8f20c1a.js",
    "revision": "ad64a3d3a71a60958b3656c523a7f2a7"
  },
  {
    "url": "assets/js/11.f55be05c.js",
    "revision": "711a65ae4d3438bcd04dfa7ad00bdbe0"
  },
  {
    "url": "assets/js/12.89af23da.js",
    "revision": "f3b6903289dfaffb74ff211a90806aa0"
  },
  {
    "url": "assets/js/13.018091c0.js",
    "revision": "40495c5d67a53cb093b9cba0c82bae05"
  },
  {
    "url": "assets/js/14.684e56c8.js",
    "revision": "502a04120177507c9bc2c9fb3ef104d7"
  },
  {
    "url": "assets/js/15.259e3712.js",
    "revision": "ccb1a094c806529067764ea5f1592369"
  },
  {
    "url": "assets/js/16.541a2b5c.js",
    "revision": "cda6bbda0605b985dbbcc75bbb3adad4"
  },
  {
    "url": "assets/js/17.6e09e940.js",
    "revision": "3e6d9db9bc580a4ad3294f6ff2c47d6a"
  },
  {
    "url": "assets/js/18.cc66973c.js",
    "revision": "9f27ad0c9191c6ee9a9134eacac76351"
  },
  {
    "url": "assets/js/19.c805a10e.js",
    "revision": "9b5b69e7871d93985da396be4220feb0"
  },
  {
    "url": "assets/js/2.fba923d6.js",
    "revision": "fc14ad26e1fb181cf2bb2d3cc5fd7ff3"
  },
  {
    "url": "assets/js/20.cba97c65.js",
    "revision": "f0315010090b856917bb6fb4e3c6554c"
  },
  {
    "url": "assets/js/21.d7623a05.js",
    "revision": "bd891703ab57f8d60955094ab7d61cf1"
  },
  {
    "url": "assets/js/22.cc1cff64.js",
    "revision": "b2631a29f17a1b278bc00be41d15af82"
  },
  {
    "url": "assets/js/23.9e1b2cda.js",
    "revision": "a4048cf866f3bdf6ca608c8a8b0957cb"
  },
  {
    "url": "assets/js/24.e69c45cb.js",
    "revision": "5f3c6368a7f78af5ac76b517fe5e33c7"
  },
  {
    "url": "assets/js/25.1612d2c8.js",
    "revision": "d27b3e07e807f3d6396b94f6d3a9aef4"
  },
  {
    "url": "assets/js/26.0bff7ca4.js",
    "revision": "e9586ef42736e5561fb2548d7bb04502"
  },
  {
    "url": "assets/js/27.bed93ed6.js",
    "revision": "ea25c072486d7360bf91b5f592038bdc"
  },
  {
    "url": "assets/js/28.82019de4.js",
    "revision": "4420b2e11f0ebd772c7b71dd58895500"
  },
  {
    "url": "assets/js/29.9ecce07a.js",
    "revision": "446170babcef3cc1432978d9ff9e213d"
  },
  {
    "url": "assets/js/3.2c47228c.js",
    "revision": "0171144f89d11e2ad2cbeafb4fecefd2"
  },
  {
    "url": "assets/js/30.9e11ba86.js",
    "revision": "bc476b39923b4c2e8c108edae76d00c6"
  },
  {
    "url": "assets/js/31.15c860e4.js",
    "revision": "fa4891660cc59cbf289453776f6860bd"
  },
  {
    "url": "assets/js/4.7fb6dce6.js",
    "revision": "f22cdddff2ea39bc719bf59f34ea67ba"
  },
  {
    "url": "assets/js/5.90eb7b3d.js",
    "revision": "b510052695108bfed112f98013943a77"
  },
  {
    "url": "assets/js/6.eee1525e.js",
    "revision": "74eb55abafeb1d9d314167c107acfcfe"
  },
  {
    "url": "assets/js/7.4faa947e.js",
    "revision": "1660433f10da7303091d9d5ba42a81e1"
  },
  {
    "url": "assets/js/8.8907b013.js",
    "revision": "e09e840f4b0e6aaf5104e606bb900b88"
  },
  {
    "url": "assets/js/9.62d55845.js",
    "revision": "fd8539ebe8e8713a8a0f84beaa31e379"
  },
  {
    "url": "assets/js/app.b0ac981d.js",
    "revision": "1eebaf7f446323b148d10b968cde748a"
  },
  {
    "url": "css/index.html",
    "revision": "514344bd5c729c04ffae37b3028222ea"
  },
  {
    "url": "css/scss.html",
    "revision": "d02dc1be728f7d47d9a3d37782ce21c3"
  },
  {
    "url": "css/skill.html",
    "revision": "2266b5dd6185db63e15d5d4b442da9a9"
  },
  {
    "url": "git/command.html",
    "revision": "6bfb11fdec3171c6660695be6d3de937"
  },
  {
    "url": "git/index.html",
    "revision": "24364d12937209138f41530ac30b4b78"
  },
  {
    "url": "index.html",
    "revision": "dbc1c6c094bb9bc9079b561c3ecfc915"
  },
  {
    "url": "issue/h5.html",
    "revision": "43f654b9490595f9f277c740f4f6daa8"
  },
  {
    "url": "issue/pc.html",
    "revision": "6b142e9497657df504c42c034e3be7b4"
  },
  {
    "url": "node/npm.html",
    "revision": "f58fdeb6ac6e44b0394ca49a5843b7fc"
  },
  {
    "url": "node/toolkit.html",
    "revision": "f3cef2a690a043d9f103ca0a98c24b4d"
  },
  {
    "url": "online-tools/bookmark-scripts.html",
    "revision": "a9acb9e224a86571d4db22e843f042ca"
  },
  {
    "url": "online-tools/index.html",
    "revision": "36602e2a59bcdfd816e9e414862b034d"
  },
  {
    "url": "software/browser.html",
    "revision": "a82f47a9d1178cf204abca01f9647b8c"
  },
  {
    "url": "software/cross-platform.html",
    "revision": "320a3a8a5df069a423e7bb57f866c2fb"
  },
  {
    "url": "software/mac.html",
    "revision": "342a2d551d315045085e25f9fe985773"
  },
  {
    "url": "software/vscode.html",
    "revision": "d3cd5f602052177b35a1fb9c45d943a4"
  },
  {
    "url": "software/webstorm.html",
    "revision": "9ff1eafb731572525215de5e10d7a655"
  },
  {
    "url": "software/windows.html",
    "revision": "d64fa153fc63b8142b0e56e7099f53a4"
  },
  {
    "url": "software/zsh.html",
    "revision": "b0bd32eb04c5c9f1c59d7b14db0f0842"
  },
  {
    "url": "utils/function.html",
    "revision": "9403b4159cae6ab05f636a7d9cb6e652"
  },
  {
    "url": "utils/regexp.html",
    "revision": "4d337420a5630a490ae94819a283a382"
  },
  {
    "url": "vue/index.html",
    "revision": "01ff1245c9565f3433531c7b805b8203"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
