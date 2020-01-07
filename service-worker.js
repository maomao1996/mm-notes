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
    "revision": "74ca4d962aa69a589add249c8d2f6f2c"
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
    "url": "assets/js/11.f2396ece.js",
    "revision": "b7ff3a29346358a761a67dabb2acda72"
  },
  {
    "url": "assets/js/12.07cf0070.js",
    "revision": "02e9d9af1bdbb35d7df30cc4979480ef"
  },
  {
    "url": "assets/js/13.8073027f.js",
    "revision": "29ce2ace5ffd60cbd6110dec56aa055d"
  },
  {
    "url": "assets/js/14.151068d2.js",
    "revision": "5fd439951ea50689d8fd45ac9070ae0f"
  },
  {
    "url": "assets/js/15.9829b2a3.js",
    "revision": "9c5defb392f14a5acd18d3010f315564"
  },
  {
    "url": "assets/js/16.8d5d987b.js",
    "revision": "6e97bce437ca6a1e79f5a41506ee652a"
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
    "url": "assets/js/8.0fda611a.js",
    "revision": "a8ad819fe78078e1ccf7e0bd21f4409c"
  },
  {
    "url": "assets/js/9.a098f036.js",
    "revision": "ced7849f82e2bc2c684ec4d3ac48ce8f"
  },
  {
    "url": "assets/js/app.6ba26e3c.js",
    "revision": "9bec36a275e23b019440301d192a9563"
  },
  {
    "url": "css/index.html",
    "revision": "d0c29106655708bdbeb93456816fc5a4"
  },
  {
    "url": "css/scss.html",
    "revision": "fa4ca8a7d8c52fe860c5d7a7bbdef04f"
  },
  {
    "url": "css/skill.html",
    "revision": "4f208d978c494004ad264e46bfc4fc14"
  },
  {
    "url": "git/index.html",
    "revision": "f96269e472123d0eba3d3fcba47169e8"
  },
  {
    "url": "index.html",
    "revision": "537cfe93429c7b41a0775e37e12cb0d6"
  },
  {
    "url": "node/depend.html",
    "revision": "3a4b3bbbc92be207c6f81ceb15cb4c46"
  },
  {
    "url": "node/npm.html",
    "revision": "8ab65f672a1dbc88907223d2d1ff6f37"
  },
  {
    "url": "utils/function.html",
    "revision": "86bdc1e830a70a1388177b050e93b25b"
  },
  {
    "url": "utils/regexp.html",
    "revision": "bc779d7ed99859c428a56f7391a03a14"
  },
  {
    "url": "vue/index.html",
    "revision": "b5a35b0a44c28ea703b46e43cceedd11"
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
