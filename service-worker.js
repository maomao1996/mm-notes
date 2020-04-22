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
    "revision": "77e1ed9b597b04da991bdf33a246d1f7"
  },
  {
    "url": "assets/css/0.styles.653830aa.css",
    "revision": "0ef924d7fbe505ba3040737f0a7635f4"
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
    "url": "assets/js/10.0f440584.js",
    "revision": "8cf8ef00125a6c0861638c7b739ccf1b"
  },
  {
    "url": "assets/js/11.20b8e8fb.js",
    "revision": "330e04d81b524cebe5d2e11bc1e1db32"
  },
  {
    "url": "assets/js/12.0af30b3b.js",
    "revision": "3a40dce8792d2cda98bfdca6aa4b51c8"
  },
  {
    "url": "assets/js/13.26e0975f.js",
    "revision": "a070670fada88fbd17e2bd906d9d513e"
  },
  {
    "url": "assets/js/14.54bb33e9.js",
    "revision": "ec29aac8881840bd0640ec6aa794c147"
  },
  {
    "url": "assets/js/15.c8b73c39.js",
    "revision": "79f0b31cd717e15510a68bff7e5cd764"
  },
  {
    "url": "assets/js/16.9224d03f.js",
    "revision": "ac344eb7c555457da9334ece92d6a1c6"
  },
  {
    "url": "assets/js/17.0acfb467.js",
    "revision": "52c55478346d30d7af6f794be49f3d5c"
  },
  {
    "url": "assets/js/18.93cbbcee.js",
    "revision": "e8843c342856bd1b572dfd22880f8ac1"
  },
  {
    "url": "assets/js/19.2f4421bd.js",
    "revision": "f4c83a35978e868c5c17faba2386a05a"
  },
  {
    "url": "assets/js/2.e24a59ae.js",
    "revision": "fba9a8b4eadeaa27ad7022599bf07fbb"
  },
  {
    "url": "assets/js/20.6e043153.js",
    "revision": "c75732dfd10d98ee76b2ca978636dab8"
  },
  {
    "url": "assets/js/21.ac9a008d.js",
    "revision": "4e33e09758ebcb3d1d0162df06cdd64c"
  },
  {
    "url": "assets/js/22.347ee638.js",
    "revision": "e112cf1a6bfde14724baa5e946052732"
  },
  {
    "url": "assets/js/23.995a6da4.js",
    "revision": "4e451d5c3df5beab015b7e627d72bec9"
  },
  {
    "url": "assets/js/24.72c53587.js",
    "revision": "a221c83709d692d1bb681f543dda768a"
  },
  {
    "url": "assets/js/25.14e95065.js",
    "revision": "1e30a551e77a9463693903a437676408"
  },
  {
    "url": "assets/js/26.c8623bfe.js",
    "revision": "71cd1e83bc3082713a2d96c481a5f47e"
  },
  {
    "url": "assets/js/3.cc6c90cd.js",
    "revision": "6e3dad5e1c7d705cb07023c52173bce1"
  },
  {
    "url": "assets/js/4.10069136.js",
    "revision": "4a6c141b012082f63d9705715e120c92"
  },
  {
    "url": "assets/js/5.9595ecb8.js",
    "revision": "11846c07e4a9d3af9a9dfd44c11dc4cd"
  },
  {
    "url": "assets/js/6.662f6246.js",
    "revision": "cc2ddebe805a06b48dee85f1e5530db8"
  },
  {
    "url": "assets/js/7.26859fa8.js",
    "revision": "8690027961796efada5b4a4ec3ccf9ba"
  },
  {
    "url": "assets/js/8.a25d6602.js",
    "revision": "4abbdc226c4290f393ade857ea4ce185"
  },
  {
    "url": "assets/js/9.e203dbf0.js",
    "revision": "c9b072102ac4cd4e97172f506e38e0fc"
  },
  {
    "url": "assets/js/app.487924d6.js",
    "revision": "ecb8182b4d7f862084e289862ca02ae7"
  },
  {
    "url": "css/index.html",
    "revision": "27bed04f5706cee9920c95a4ed165f52"
  },
  {
    "url": "css/scss.html",
    "revision": "bb6cc6520ea84a2fa5dad4a3cd85e3ba"
  },
  {
    "url": "css/skill.html",
    "revision": "14d3828583bba74428e78cfc0ef0d0c9"
  },
  {
    "url": "git/command.html",
    "revision": "a43234a75e06733ff835f1c9c56516de"
  },
  {
    "url": "git/index.html",
    "revision": "447b8c923f31e592fa727e2bdec5f96e"
  },
  {
    "url": "index.html",
    "revision": "07582cbae82840a23fe9b35dada45507"
  },
  {
    "url": "issue/h5.html",
    "revision": "96be19b1d589abf4f634827251ec9e9f"
  },
  {
    "url": "issue/pc.html",
    "revision": "568dfcf6f530c109c7b8ac5267d99100"
  },
  {
    "url": "node/depend.html",
    "revision": "410986e5ddba30453c6913cfa7193f8e"
  },
  {
    "url": "node/npm.html",
    "revision": "30c364ce6e2c4602b58373be4199fe86"
  },
  {
    "url": "software/browser.html",
    "revision": "8694820e8ff870c77aad27528c9a6b1e"
  },
  {
    "url": "software/mac.html",
    "revision": "042faa9748e220107a9598e6d9ac5d8f"
  },
  {
    "url": "software/vscode.html",
    "revision": "dcd2f2982a7391f91401558a25f1173e"
  },
  {
    "url": "software/webstorm.html",
    "revision": "e65e0019d381b6e9ca886dee007d738c"
  },
  {
    "url": "software/windows.html",
    "revision": "43111c784e6a748353a5d5bf5c711ddf"
  },
  {
    "url": "utils/function.html",
    "revision": "e3ab241e226a39050732613c14651fa4"
  },
  {
    "url": "utils/regexp.html",
    "revision": "e4e47dc25d379d1853804afe161b353b"
  },
  {
    "url": "vue/index.html",
    "revision": "007260363b6679728f81607431f8ddce"
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
