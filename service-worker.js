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
    "revision": "4c4aac9eedff98e8a06f83d1a2b67b79"
  },
  {
    "url": "assets/css/0.styles.7c9ac58b.css",
    "revision": "0a8fb13806774b7687289c0e81467170"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.b879173a.js",
    "revision": "507f9ade22d2e4c651420388da30919f"
  },
  {
    "url": "assets/js/11.1b71eba5.js",
    "revision": "8af6b5798ddb6d80830f36068ed10f5b"
  },
  {
    "url": "assets/js/12.8a72af80.js",
    "revision": "600089961e1a3e677bceb3e89de42020"
  },
  {
    "url": "assets/js/13.5a1c5774.js",
    "revision": "c9436547434b7c2bcb1734f64c51f8a6"
  },
  {
    "url": "assets/js/14.6c0c1eaa.js",
    "revision": "3197f46b02940ed719b76c8b6d520667"
  },
  {
    "url": "assets/js/15.0f456946.js",
    "revision": "2d497ba6e3db11f318525f47260bfb2a"
  },
  {
    "url": "assets/js/16.252175db.js",
    "revision": "ecbf8c643161274f17c1afc9ed5bda0b"
  },
  {
    "url": "assets/js/17.0d2c19bb.js",
    "revision": "e43dbf860e9f5c8e54d2835f2140f5ac"
  },
  {
    "url": "assets/js/18.867c74d7.js",
    "revision": "8a1c7532775555be111e13c1eb485dda"
  },
  {
    "url": "assets/js/2.c990e211.js",
    "revision": "05763c5cc0e724afa1241b76a90c8cb0"
  },
  {
    "url": "assets/js/3.bf480012.js",
    "revision": "088aebb946f8d7f120fb6f0bf1160e23"
  },
  {
    "url": "assets/js/4.40fdd9ab.js",
    "revision": "45673508825dda9c8359e6988221ee87"
  },
  {
    "url": "assets/js/5.d48437b5.js",
    "revision": "d7a1c5a4dee8f4b83be57170447a7e6d"
  },
  {
    "url": "assets/js/6.de5e72eb.js",
    "revision": "959a0b9ed72de8cf3fdd95d804fb7978"
  },
  {
    "url": "assets/js/7.8d944362.js",
    "revision": "9f0b11162b0bf56a35236e8344b75c86"
  },
  {
    "url": "assets/js/8.0fda611a.js",
    "revision": "a8ad819fe78078e1ccf7e0bd21f4409c"
  },
  {
    "url": "assets/js/9.96da2f9d.js",
    "revision": "3b021eaab758334b83810a510628624a"
  },
  {
    "url": "assets/js/app.53f79992.js",
    "revision": "8d84e61cc7dca5509d8eaeb7cd973c41"
  },
  {
    "url": "css/index.html",
    "revision": "130330373e2be1c8ed4039eb346a08d9"
  },
  {
    "url": "css/scss.html",
    "revision": "e80734b6e2078d0b69c410133a998add"
  },
  {
    "url": "css/skill.html",
    "revision": "db034fbf2a0b3b4f24f9893f77e22c3f"
  },
  {
    "url": "git/command.html",
    "revision": "5f75df5c46a3a791bd2bc481cf250237"
  },
  {
    "url": "git/index.html",
    "revision": "b337a7101083f73303098a6575f85f19"
  },
  {
    "url": "index.html",
    "revision": "18a8115f6a15be4612d34df07b5c4939"
  },
  {
    "url": "node/depend.html",
    "revision": "cf1e3e8bbf70d735d6f0a44e341e3164"
  },
  {
    "url": "node/npm.html",
    "revision": "28c7b4d825ba0c449b7cc2e752ad1dae"
  },
  {
    "url": "utils/function.html",
    "revision": "4ff4fcafc6faaba5256787363ecc8a8c"
  },
  {
    "url": "utils/regexp.html",
    "revision": "0bf966e3d6be4c0173dbdb0f14caf6eb"
  },
  {
    "url": "vue/index.html",
    "revision": "545a8dcb525e9e82d83f9f4d40f238f6"
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
