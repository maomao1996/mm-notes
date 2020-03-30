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
    "revision": "e86c0353a0b908b7f12b2c2f36158ee6"
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
    "url": "assets/js/12.f7602f4d.js",
    "revision": "7da02dfdb1b358c1ac205f9d35334256"
  },
  {
    "url": "assets/js/13.006314a0.js",
    "revision": "414750e368ddcd3ba1344dd815b72aae"
  },
  {
    "url": "assets/js/14.05b48f43.js",
    "revision": "bd55f7ee1609eeccda492f5fd940c413"
  },
  {
    "url": "assets/js/15.0170adb6.js",
    "revision": "63f5c9fd91fec684cc9730c96e74ddbd"
  },
  {
    "url": "assets/js/16.c11a4e28.js",
    "revision": "8fe4c5a7d040458fee684dc83bbc222b"
  },
  {
    "url": "assets/js/17.42e2c8c9.js",
    "revision": "f08e8d28d4de3639823f2d9f2747f98d"
  },
  {
    "url": "assets/js/18.c001da69.js",
    "revision": "d8b4a856ce822aae1e1334b13458d2b9"
  },
  {
    "url": "assets/js/19.2b153970.js",
    "revision": "49e550124b1427c2819870e932c9f59a"
  },
  {
    "url": "assets/js/2.efb942e3.js",
    "revision": "093f3843fb73994024df773845bed087"
  },
  {
    "url": "assets/js/20.f41758f4.js",
    "revision": "8a1d1b567c4597dc02f6a6bc7d8a70fe"
  },
  {
    "url": "assets/js/21.7c9c0411.js",
    "revision": "15b1b2d445f13e10b0912bb6583f0269"
  },
  {
    "url": "assets/js/22.ff86084a.js",
    "revision": "043f2730849b6632664c8985385f707a"
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
    "url": "assets/js/5.f5480d4b.js",
    "revision": "992c2ad257a87a752c61880b2b735d85"
  },
  {
    "url": "assets/js/6.de5e72eb.js",
    "revision": "959a0b9ed72de8cf3fdd95d804fb7978"
  },
  {
    "url": "assets/js/7.c15f80be.js",
    "revision": "b9dd59cf493b3f26bf8c06f9fe0a8bb4"
  },
  {
    "url": "assets/js/8.adbe05f7.js",
    "revision": "4da4c13e178ee3be69a01b428e09b843"
  },
  {
    "url": "assets/js/9.90df4489.js",
    "revision": "9587ec8ae0184d41d94695272a612d04"
  },
  {
    "url": "assets/js/app.74b6c5f5.js",
    "revision": "4ae8120f8916468b515bb5d0d51b0b4d"
  },
  {
    "url": "css/index.html",
    "revision": "4f0e1539d3178c85841b3fcce727b209"
  },
  {
    "url": "css/scss.html",
    "revision": "61c321075fff7604ae2eb60ef56b13f8"
  },
  {
    "url": "css/skill.html",
    "revision": "f22663389555c43c63c7dceeaca2bfcf"
  },
  {
    "url": "git/command.html",
    "revision": "156939bd6feb6ff038f901638db9c222"
  },
  {
    "url": "git/index.html",
    "revision": "37213d9fcd91ff9713bcd3664434c53e"
  },
  {
    "url": "index.html",
    "revision": "d3b1c84de167f9155562efcb3d1583ec"
  },
  {
    "url": "node/depend.html",
    "revision": "66035ee16bab687bdcdfe59961f52fbb"
  },
  {
    "url": "node/npm.html",
    "revision": "7553867c4b50bce5b17ca0852180920c"
  },
  {
    "url": "software/browser.html",
    "revision": "9a9807580c67f25bef0c378d21fd6a97"
  },
  {
    "url": "software/mac.html",
    "revision": "6a019ab21ffa63f4367780bc83863dab"
  },
  {
    "url": "software/vscode.html",
    "revision": "4ef604ec5f5af1849319df500262ab0d"
  },
  {
    "url": "software/windows.html",
    "revision": "1da4d0fe625f1e7096edee3a771bf247"
  },
  {
    "url": "utils/function.html",
    "revision": "cf3fbbcb94019165b2ce976c4e52fcc8"
  },
  {
    "url": "utils/regexp.html",
    "revision": "040b3eeb5c7e9757aa5cce8659eb520a"
  },
  {
    "url": "vue/index.html",
    "revision": "d40d6e0b47228a074887142470e46159"
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
