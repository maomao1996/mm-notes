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
    "revision": "daa1bf2c2624fe41ba603b8d4c6ab467"
  },
  {
    "url": "assets/css/0.styles.e3808d4c.css",
    "revision": "d99ca45e02c38f35b230dd51ae2cc037"
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
    "url": "assets/js/10.d5527948.js",
    "revision": "41b610632fb22e23a72ba7a60813ccf5"
  },
  {
    "url": "assets/js/11.4d9e5372.js",
    "revision": "22316d1ff96228cf89bfb54288b566ba"
  },
  {
    "url": "assets/js/12.a460e48a.js",
    "revision": "b964e7a759ca18b0931fca45e7bab0da"
  },
  {
    "url": "assets/js/13.f193ea4f.js",
    "revision": "dd11bf2d6f6366b87efc2c12210f479a"
  },
  {
    "url": "assets/js/14.0a360927.js",
    "revision": "deaf4b8862dcb7a097ea80bc8442e63d"
  },
  {
    "url": "assets/js/15.4d01a6b8.js",
    "revision": "61bdd4442a80b5f20928022914c08a96"
  },
  {
    "url": "assets/js/16.7bb54df1.js",
    "revision": "1581f2ab14402089789448e5448f74ab"
  },
  {
    "url": "assets/js/17.66307fa4.js",
    "revision": "dc3e22c9a15d32ab9d620c364f07bcd4"
  },
  {
    "url": "assets/js/18.8ef9e635.js",
    "revision": "487986682f4b21df6c30c4286392efc7"
  },
  {
    "url": "assets/js/19.30628153.js",
    "revision": "1384b46001b97b67409dd93a87fcdfb1"
  },
  {
    "url": "assets/js/2.66c6543e.js",
    "revision": "826779dce117630240123d987202e2e3"
  },
  {
    "url": "assets/js/20.500ba41c.js",
    "revision": "b29ae0641c0fb7f9e28202ae4203e2b3"
  },
  {
    "url": "assets/js/21.983c8538.js",
    "revision": "9342398f6a036988c6e23b7976140b2f"
  },
  {
    "url": "assets/js/22.c0154d30.js",
    "revision": "a2c221dd2a643215373d1d6870532064"
  },
  {
    "url": "assets/js/23.125bd49c.js",
    "revision": "3bdf6e96add670e535e7684fc6d9a54e"
  },
  {
    "url": "assets/js/24.24f029bf.js",
    "revision": "5f9540b262bdafe63e420eab5945261e"
  },
  {
    "url": "assets/js/25.3e19f3aa.js",
    "revision": "05c9daf9ab3793c5f8604e102ce93c81"
  },
  {
    "url": "assets/js/3.cc50ac46.js",
    "revision": "8fe6f72f7435b88b6607d5d80322bf08"
  },
  {
    "url": "assets/js/4.9d016c8c.js",
    "revision": "971d2d1edc574a9759a4e374656fa038"
  },
  {
    "url": "assets/js/5.64443de1.js",
    "revision": "d7326ca9c4b067379db4ccbcd399f0c2"
  },
  {
    "url": "assets/js/6.eb568e85.js",
    "revision": "e3d95388e221086fdaedaf4f0e51448a"
  },
  {
    "url": "assets/js/7.5e2c1f42.js",
    "revision": "cbd00b9f1106d3cf7dd29c10dba3f669"
  },
  {
    "url": "assets/js/8.52c00ad5.js",
    "revision": "50c47c93b19999f58e2c07b718124105"
  },
  {
    "url": "assets/js/9.3d70bca9.js",
    "revision": "e287ef2639795d6ca27e3897ae4c9d1f"
  },
  {
    "url": "assets/js/app.56923a34.js",
    "revision": "b7886bad68cda959440dcf8137124852"
  },
  {
    "url": "css/index.html",
    "revision": "8ccaba61ed0528d83086ce5bba72ccfe"
  },
  {
    "url": "css/scss.html",
    "revision": "514e1e0d9d468c46073990e645b48edc"
  },
  {
    "url": "css/skill.html",
    "revision": "5c835bd0e1126680c7f24656a4f1ffc5"
  },
  {
    "url": "git/command.html",
    "revision": "8b8ed0aed5ddfd92e55600204dd28865"
  },
  {
    "url": "git/index.html",
    "revision": "1c7106f26e2f0c43bd692cbbf7842d71"
  },
  {
    "url": "index.html",
    "revision": "4f58e2721008d5d763432dcc65e52210"
  },
  {
    "url": "issue/h5.html",
    "revision": "ebe93c455ffe5c2c12d3447cf7317138"
  },
  {
    "url": "issue/pc.html",
    "revision": "2e01a5a48ea05a5e5b0f63d49d8f9008"
  },
  {
    "url": "node/depend.html",
    "revision": "81d6ad690062732d912a84b8ad5add7e"
  },
  {
    "url": "node/npm.html",
    "revision": "08cbe2107edafbe8a804fe7f9d6c42c2"
  },
  {
    "url": "software/browser.html",
    "revision": "f5edcc7f2cd491b76fdf1cd61b136a0c"
  },
  {
    "url": "software/mac.html",
    "revision": "295429003fc7e50c29c6057ba7023fe7"
  },
  {
    "url": "software/vscode.html",
    "revision": "f6098d626bb9f7a47bc8a6e111ac3fc9"
  },
  {
    "url": "software/webstorm.html",
    "revision": "86d2ccf73b28c303f65af5b0fab6a7d0"
  },
  {
    "url": "software/windows.html",
    "revision": "8665c81f0d5d17c3e74f287c9af7ce7e"
  },
  {
    "url": "utils/function.html",
    "revision": "a1d093577c2b5677c60cdfee81458a40"
  },
  {
    "url": "utils/regexp.html",
    "revision": "c66206e0c2327cd7cf66c75b3502b762"
  },
  {
    "url": "vue/index.html",
    "revision": "880f5b3eb5a79c7ff64c05eea500fdd7"
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
