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
    "revision": "4e7797db810fa61fbef96f03e6160263"
  },
  {
    "url": "assets/css/0.styles.653830aa.css",
    "revision": "0ef924d7fbe505ba3040737f0a7635f4"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.70098307.js",
    "revision": "2a3df63f0317d4f89b1a49f06908bc5a"
  },
  {
    "url": "assets/js/11.9732895e.js",
    "revision": "9867fe9ac30c7c7c1e66f410b45d5b2c"
  },
  {
    "url": "assets/js/12.bf997df3.js",
    "revision": "9b890637d9ba708f6ca52c67d34dad3a"
  },
  {
    "url": "assets/js/13.9b7aad3f.js",
    "revision": "e87dc25fa95b74170c213832535144f1"
  },
  {
    "url": "assets/js/14.7d7c8cf8.js",
    "revision": "dd6584cc309e3189f53960b51ee2ac4c"
  },
  {
    "url": "assets/js/15.8801cbbd.js",
    "revision": "fff1d7465fd335bc497c91cb4dd7c71d"
  },
  {
    "url": "assets/js/16.4167627f.js",
    "revision": "d63ba51e04e1f44ee39a3aa3c077ec09"
  },
  {
    "url": "assets/js/17.f44f60df.js",
    "revision": "95c6efd8ab8287088dd32c270fdb9991"
  },
  {
    "url": "assets/js/18.371c5eac.js",
    "revision": "3355210b8e3a6cebed55419b8c4a6a8a"
  },
  {
    "url": "assets/js/19.7ffd02a1.js",
    "revision": "ce1b8734eccbc64be2011aa9a849b279"
  },
  {
    "url": "assets/js/2.43b048c2.js",
    "revision": "abd9017238a5af4d2a79fd43bd312039"
  },
  {
    "url": "assets/js/20.cd5697d9.js",
    "revision": "ee102a1cc30162282080bee5047b175d"
  },
  {
    "url": "assets/js/21.6c2633b5.js",
    "revision": "4c49e61523b7155ea0010cfa0e790cad"
  },
  {
    "url": "assets/js/22.3c924e91.js",
    "revision": "6e88a9b448cead0409886b126b9954b9"
  },
  {
    "url": "assets/js/23.2f9c3e31.js",
    "revision": "de3139e6e05daaa1efd6d7eab975d123"
  },
  {
    "url": "assets/js/24.27380b01.js",
    "revision": "8b65be167dca822927dc78c46d23f92f"
  },
  {
    "url": "assets/js/25.d1940f0d.js",
    "revision": "07df5477064e350211e9339d0b7afa08"
  },
  {
    "url": "assets/js/3.b4b96c26.js",
    "revision": "01850204c7e0c1a287c563b6d66a1a15"
  },
  {
    "url": "assets/js/4.ae84d2ed.js",
    "revision": "9d0160215bb973851d4967b8a9c6864d"
  },
  {
    "url": "assets/js/5.ce31e539.js",
    "revision": "b6e51c3287b6b0ee827179c71284e848"
  },
  {
    "url": "assets/js/6.de5f5837.js",
    "revision": "e1c67d939734d20bc3b8ffaac5488a19"
  },
  {
    "url": "assets/js/7.825afeb8.js",
    "revision": "6119067b12446f6d1a6021d9c7ef3a3b"
  },
  {
    "url": "assets/js/8.8f65f23f.js",
    "revision": "e262b9067532e412c11ac3a8185480c8"
  },
  {
    "url": "assets/js/9.22283bc2.js",
    "revision": "045f6fc4aab03405123f647d6b2836e6"
  },
  {
    "url": "assets/js/app.17657846.js",
    "revision": "b6925c7940e694733c7c827ef5a45ddc"
  },
  {
    "url": "css/index.html",
    "revision": "f2fb6eb86d7b60b24df6b4fae520cf6d"
  },
  {
    "url": "css/scss.html",
    "revision": "4bd8682439c3bf3ef4368e17d8310a72"
  },
  {
    "url": "css/skill.html",
    "revision": "bd2b80bc8ff1096c9fb3dd7579312231"
  },
  {
    "url": "git/command.html",
    "revision": "a99161f673e59637c6decd50ab80194c"
  },
  {
    "url": "git/index.html",
    "revision": "8327c376f8026a759bbe0a6d82118d03"
  },
  {
    "url": "index.html",
    "revision": "bdae63282c39db26cfaf8124af55ffaf"
  },
  {
    "url": "issue/h5.html",
    "revision": "fae70bbfd7687fd4ac9e08cc8022373a"
  },
  {
    "url": "issue/pc.html",
    "revision": "131f7c05d7d597e306ec11e68c74e4ae"
  },
  {
    "url": "node/depend.html",
    "revision": "f21f7d8b48964094a5485969abd22434"
  },
  {
    "url": "node/npm.html",
    "revision": "945acca962317657744ddeb5f06d01c9"
  },
  {
    "url": "software/browser.html",
    "revision": "610a30ab1d2b69ad352801c1eb4abe82"
  },
  {
    "url": "software/mac.html",
    "revision": "8b6536e37358cb9c807c4c9f3fb60dc9"
  },
  {
    "url": "software/vscode.html",
    "revision": "c32ae5970063877015476e6ac4b67b42"
  },
  {
    "url": "software/windows.html",
    "revision": "bdcab0d79e9d9ae2b5c33f1af8be3a05"
  },
  {
    "url": "utils/function.html",
    "revision": "06318df0c84f42eb71d72869fd90f441"
  },
  {
    "url": "utils/regexp.html",
    "revision": "389624e13d5f05892bf59bb15c95a85f"
  },
  {
    "url": "vue/index.html",
    "revision": "f76976ed8a30a963846139814263ef89"
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
