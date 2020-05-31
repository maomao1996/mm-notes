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
    "revision": "30ac586337c4199562c26783a4496162"
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
    "url": "assets/js/10.a97ae281.js",
    "revision": "9f94ead38a01e2b14d2135d97923df90"
  },
  {
    "url": "assets/js/11.052a889c.js",
    "revision": "d9a1aa360a27e5faea858953e531234b"
  },
  {
    "url": "assets/js/12.ff4b1318.js",
    "revision": "85df62176385f2564f4f87464525fcb3"
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
    "url": "assets/js/app.72ae204a.js",
    "revision": "91fc7955f3d53e4678725bf72d70aa3c"
  },
  {
    "url": "css/index.html",
    "revision": "a93c4fd97d362c7d83bc68e22ce63e61"
  },
  {
    "url": "css/scss.html",
    "revision": "e74c577f261bb003baf0fa0358d09b93"
  },
  {
    "url": "css/skill.html",
    "revision": "5b2ebde229b167420a5465c13757f6d3"
  },
  {
    "url": "git/command.html",
    "revision": "112a67117398c00b11b796f2fdebe8ba"
  },
  {
    "url": "git/index.html",
    "revision": "21f6f457e7ba5ee6eb4e75bfd6493c4d"
  },
  {
    "url": "index.html",
    "revision": "61b79f0e5729ca8d32bfbb2047442967"
  },
  {
    "url": "issue/h5.html",
    "revision": "e7cb6e2c6b953910136d619f566b1efe"
  },
  {
    "url": "issue/pc.html",
    "revision": "e48cf3723b056c128b245387821d618c"
  },
  {
    "url": "node/depend.html",
    "revision": "c6b1da1893008644abd6c272da0508c6"
  },
  {
    "url": "node/npm.html",
    "revision": "a64e4d990ca3c31a6d79b42bf821b12b"
  },
  {
    "url": "software/browser.html",
    "revision": "763e91628fef649c69b016208d0ca778"
  },
  {
    "url": "software/mac.html",
    "revision": "9f7997871d885a701823a8b28eb98722"
  },
  {
    "url": "software/vscode.html",
    "revision": "cdd16c64c30c263401624c44bf7d39db"
  },
  {
    "url": "software/webstorm.html",
    "revision": "3d6ae2d3b5888a962cd92b28bc1aacda"
  },
  {
    "url": "software/windows.html",
    "revision": "02faf4a6f7e644a47f56d7471b725e60"
  },
  {
    "url": "utils/function.html",
    "revision": "c68d836ce90bfa0b4b403261e031c31a"
  },
  {
    "url": "utils/regexp.html",
    "revision": "9afc224d9ee4aa0a62b494f8ddebd5a8"
  },
  {
    "url": "vue/index.html",
    "revision": "99f6796e0eb544deda45288732a38a04"
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
