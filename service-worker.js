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
    "revision": "df7d8668a52b199a06c7d5d1d932a78b"
  },
  {
    "url": "assets/css/0.styles.f691032f.css",
    "revision": "25d6101dee0ee9d1e1238a3dad04c886"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.dec59f0b.js",
    "revision": "086eedf4822473a0eaa78b70bfba6b73"
  },
  {
    "url": "assets/js/11.f16dde4e.js",
    "revision": "b692ba2e4695d4e176e0bde71f8c7703"
  },
  {
    "url": "assets/js/12.8529d3a1.js",
    "revision": "845446eb3b2116ded56b883e8acd95e1"
  },
  {
    "url": "assets/js/13.ce6b7a7d.js",
    "revision": "d2f1a87a9b1d0acd7d668ed78fd18795"
  },
  {
    "url": "assets/js/14.1cf5f300.js",
    "revision": "8f65e8606bbc94e264bbdb6f7e4488ae"
  },
  {
    "url": "assets/js/15.df3caf29.js",
    "revision": "c1fb945ca007c11872dc915ad91f4d33"
  },
  {
    "url": "assets/js/16.b5f2cb07.js",
    "revision": "4ae892a07fe64114fa671602fa0757db"
  },
  {
    "url": "assets/js/17.111db377.js",
    "revision": "98ba68c8c4d34244b4920be195c2a7e3"
  },
  {
    "url": "assets/js/18.80f5dc95.js",
    "revision": "b7076133b0f0f9e3961ea27563997bef"
  },
  {
    "url": "assets/js/19.6ab4a1e3.js",
    "revision": "922100095b7479a3128fe21f38bcde9c"
  },
  {
    "url": "assets/js/2.efb942e3.js",
    "revision": "093f3843fb73994024df773845bed087"
  },
  {
    "url": "assets/js/20.8ca7d1cd.js",
    "revision": "f43c1a36ba1477b99f69594b2c096a03"
  },
  {
    "url": "assets/js/3.ea75f2f5.js",
    "revision": "0d2f06855cc059411d34f2fb02a87548"
  },
  {
    "url": "assets/js/4.40fdd9ab.js",
    "revision": "45673508825dda9c8359e6988221ee87"
  },
  {
    "url": "assets/js/5.fe261025.js",
    "revision": "61776cc8fe3405d23bd359f43964b8f7"
  },
  {
    "url": "assets/js/6.de5e72eb.js",
    "revision": "959a0b9ed72de8cf3fdd95d804fb7978"
  },
  {
    "url": "assets/js/7.6df0cb5a.js",
    "revision": "2c4907acc5d2aa87da7166292b5b0cbe"
  },
  {
    "url": "assets/js/8.fefb1abc.js",
    "revision": "76acaca907af03b1c5689ea9c4062784"
  },
  {
    "url": "assets/js/9.90df4489.js",
    "revision": "9587ec8ae0184d41d94695272a612d04"
  },
  {
    "url": "assets/js/app.48f9ef25.js",
    "revision": "b0af06e768f0a3db22ed61c3368eb1ac"
  },
  {
    "url": "css/index.html",
    "revision": "e935a4e7edcaa654cd4150cb33c297ab"
  },
  {
    "url": "css/scss.html",
    "revision": "60db79f5641b80f059ed40b457a9b208"
  },
  {
    "url": "css/skill.html",
    "revision": "155aa16d1ce099a4281a87b992999fa6"
  },
  {
    "url": "git/command.html",
    "revision": "02352c370ffb85f4a7bd03cccf9bde4d"
  },
  {
    "url": "git/index.html",
    "revision": "652566a7a05b6e12b8fa9f804ffe78b1"
  },
  {
    "url": "index.html",
    "revision": "2051ebb89b5351cd0979283d2b44acf9"
  },
  {
    "url": "node/depend.html",
    "revision": "c1bec58d363311a169f7025ab6d09295"
  },
  {
    "url": "node/npm.html",
    "revision": "f0635a1da400f413ffaeb4d9bac07e09"
  },
  {
    "url": "software/browser.html",
    "revision": "99556cd9e50248efd070e63e3a0f0397"
  },
  {
    "url": "software/mac.html",
    "revision": "0073ac8e703ff1c72701017809bfd561"
  },
  {
    "url": "utils/function.html",
    "revision": "904a69a49ba632da01e2c2ff06e90bdf"
  },
  {
    "url": "utils/regexp.html",
    "revision": "1f92531d6f034fa5f9ad22c872e799b5"
  },
  {
    "url": "vue/index.html",
    "revision": "d8646a8a735d0a7c78ec7ac816276422"
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
