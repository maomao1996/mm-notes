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
    "revision": "22bc4f849a35d8dd8c5c31a73f87b5c1"
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
    "url": "assets/js/10.b127fe0d.js",
    "revision": "d43aa27d87d3cd250d873261abcc1955"
  },
  {
    "url": "assets/js/11.0a156ff1.js",
    "revision": "38afec5a9755afc51f2621f6816fe2ae"
  },
  {
    "url": "assets/js/12.d6764f21.js",
    "revision": "29890f1863b9b68cd39913f63144e4ff"
  },
  {
    "url": "assets/js/13.77679aba.js",
    "revision": "e5b93365a54bcb77a44216b0e8d0502a"
  },
  {
    "url": "assets/js/14.06728692.js",
    "revision": "50073f181ed980f4f21091ec5238a6aa"
  },
  {
    "url": "assets/js/15.758b08ad.js",
    "revision": "51383315e1399a00ba87cd63de2949ee"
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
    "url": "assets/js/7.8d944362.js",
    "revision": "9f0b11162b0bf56a35236e8344b75c86"
  },
  {
    "url": "assets/js/8.a841331c.js",
    "revision": "f6840e6eddba920a88b82720a51ec34a"
  },
  {
    "url": "assets/js/9.43161148.js",
    "revision": "25fedd2824859e13a22396683adc37e1"
  },
  {
    "url": "assets/js/app.48259483.js",
    "revision": "d740fb2dd80ffec0be2e5305b90e5d5d"
  },
  {
    "url": "css/index.html",
    "revision": "8476fb951c50b0d35bc3d3a5ce9bb4bc"
  },
  {
    "url": "css/scss.html",
    "revision": "ed40f39a9aa30cd8572050ef63561af8"
  },
  {
    "url": "css/skill.html",
    "revision": "8b717df1944c1827d727f8d250e7d08e"
  },
  {
    "url": "git/index.html",
    "revision": "53933d23dc182f5ae2b48476e883a43f"
  },
  {
    "url": "index.html",
    "revision": "0ee3f17b7e6ffd4865eee1dbe7867511"
  },
  {
    "url": "node/depend.html",
    "revision": "dc557a1afc3c1f6291472aab71e441d8"
  },
  {
    "url": "node/npm.html",
    "revision": "884bc972ce4a2198048571879c953a2b"
  },
  {
    "url": "utils/function.html",
    "revision": "5cd09ad48b93a9f2c10b01f54cdba538"
  },
  {
    "url": "utils/regexp.html",
    "revision": "3f1816eabb41f57262e13f32535f8619"
  },
  {
    "url": "vue/index.html",
    "revision": "2edb07e5981ca252054e333465305f05"
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
