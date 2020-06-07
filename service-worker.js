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
    "revision": "cbc6a48ce270f9d8a6ac3373b3cfd515"
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
    "url": "assets/js/14.3dcbba08.js",
    "revision": "be227d7c94aba23661fe29e1f269ea71"
  },
  {
    "url": "assets/js/15.bb8efddb.js",
    "revision": "af2789484a436cfd258edb6fee7e5f6e"
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
    "url": "assets/js/19.dc6dcf6e.js",
    "revision": "b2222949be56bc2b8d3063c593424e87"
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
    "url": "assets/js/app.7d8247b2.js",
    "revision": "f5f4a6b25820a0776e1eae4365b25551"
  },
  {
    "url": "css/index.html",
    "revision": "5eafe070efcb0d674f6cedf2144b81df"
  },
  {
    "url": "css/scss.html",
    "revision": "47eaffc04041271ab353d6e5353aedb2"
  },
  {
    "url": "css/skill.html",
    "revision": "c194ff66b0ce64356f09bb2ad93fc7cc"
  },
  {
    "url": "git/command.html",
    "revision": "191b13981fec96adf0ca98c382610aea"
  },
  {
    "url": "git/index.html",
    "revision": "f1f1b1ec45495460f19e93b02ec1e294"
  },
  {
    "url": "index.html",
    "revision": "11b3225e655f5669affc6a9b6872907c"
  },
  {
    "url": "issue/h5.html",
    "revision": "58a671deeb2ce7abdb4c5cdf18c9f458"
  },
  {
    "url": "issue/pc.html",
    "revision": "cf8a9fdaffa3bbd06c1c83c679a90989"
  },
  {
    "url": "node/depend.html",
    "revision": "7c32de1dc9747976e39687582172ceea"
  },
  {
    "url": "node/npm.html",
    "revision": "2eb3710a159e46146a5085cd192d0042"
  },
  {
    "url": "software/browser.html",
    "revision": "4e1319ea17ac3351c31cec5b549dc439"
  },
  {
    "url": "software/mac.html",
    "revision": "982461b2ed26887b4db42df9397bd501"
  },
  {
    "url": "software/vscode.html",
    "revision": "d9044917492d5bc5ff06ca53983540bf"
  },
  {
    "url": "software/webstorm.html",
    "revision": "ce2654164d8ecc8a0139c65da3e4346a"
  },
  {
    "url": "software/windows.html",
    "revision": "9e08d9d6f875cfb4335807fa93614aa4"
  },
  {
    "url": "utils/function.html",
    "revision": "716806b70d19750158144fa7c0fa0bb8"
  },
  {
    "url": "utils/regexp.html",
    "revision": "64f691aa6d420ea73987412745df2ee5"
  },
  {
    "url": "vue/index.html",
    "revision": "e74de3698c4f405ee447c08de4cefcdd"
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
