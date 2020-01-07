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
    "revision": "757464d35099943e1397d4d0c5b1155e"
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
    "url": "assets/js/10.d1bfdeb7.js",
    "revision": "fb966677b86d89b6b51cc9a513b3636d"
  },
  {
    "url": "assets/js/11.f2396ece.js",
    "revision": "b7ff3a29346358a761a67dabb2acda72"
  },
  {
    "url": "assets/js/12.513b95e6.js",
    "revision": "488f903974ddf7f0d289f51e3c6883b4"
  },
  {
    "url": "assets/js/13.fc626566.js",
    "revision": "5f743c419c4792ef95a4e373beacf3fe"
  },
  {
    "url": "assets/js/14.f6f1f8fd.js",
    "revision": "c48f37c5afd5fead194599ad89f5d7f9"
  },
  {
    "url": "assets/js/15.f4e1c421.js",
    "revision": "ee1e039554ac97e751395fb647e42299"
  },
  {
    "url": "assets/js/16.17351904.js",
    "revision": "a921f732ed4cb46e2fc761f6918507e3"
  },
  {
    "url": "assets/js/17.f1498e1f.js",
    "revision": "b60b6bf8b8e9bd6a766b83c4814b8e16"
  },
  {
    "url": "assets/js/2.05f7b9eb.js",
    "revision": "d641e3da02d3738c33c06573382db90d"
  },
  {
    "url": "assets/js/3.1dc900e5.js",
    "revision": "34cc6f74cf6a7ccf33f240da4d5c6152"
  },
  {
    "url": "assets/js/4.40fdd9ab.js",
    "revision": "45673508825dda9c8359e6988221ee87"
  },
  {
    "url": "assets/js/5.1fb16d2a.js",
    "revision": "da1d60b8d72a901eb1cbc8d88a46e84e"
  },
  {
    "url": "assets/js/6.de5e72eb.js",
    "revision": "959a0b9ed72de8cf3fdd95d804fb7978"
  },
  {
    "url": "assets/js/7.6a1fb1e6.js",
    "revision": "425c540e4d5aa6689258505f62d8ffee"
  },
  {
    "url": "assets/js/8.0fda611a.js",
    "revision": "a8ad819fe78078e1ccf7e0bd21f4409c"
  },
  {
    "url": "assets/js/9.fa46b43f.js",
    "revision": "c48cd5604502ede8000af01b2996b417"
  },
  {
    "url": "assets/js/app.5b4166b3.js",
    "revision": "c127dff7d935a40a8787a8a731748bb4"
  },
  {
    "url": "css/index.html",
    "revision": "c9d225c47911e8ce9b47898ae1c98ee0"
  },
  {
    "url": "css/scss.html",
    "revision": "2b170eda62e304059278017455f3f9e0"
  },
  {
    "url": "css/skill.html",
    "revision": "dc2c2c6ea33eb36222b975df7e157eeb"
  },
  {
    "url": "git/index.html",
    "revision": "c95eefc73aae27de5bad7018ca557744"
  },
  {
    "url": "index.html",
    "revision": "b2211809648cfc60c25473e3757d4f4c"
  },
  {
    "url": "node/depend.html",
    "revision": "fc103227468b25685e8e82d3d4c7e051"
  },
  {
    "url": "node/npm.html",
    "revision": "c040bca9b702c00bdce17f097032b4c7"
  },
  {
    "url": "utils/function.html",
    "revision": "ce34eb60b2329353443ac061e460edd5"
  },
  {
    "url": "utils/regexp.html",
    "revision": "0a47785719fb2d6c1efb7702850640bd"
  },
  {
    "url": "vue/index.html",
    "revision": "3b58264fc20758c9c965338fcaedcb7e"
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
