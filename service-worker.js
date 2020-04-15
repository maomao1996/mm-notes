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
    "revision": "e5b744e7bc7442c942a9f96cf67d712c"
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
    "url": "assets/js/13.0f1a753a.js",
    "revision": "5e437dd58f990900c9dfb4cf19ae0178"
  },
  {
    "url": "assets/js/14.5f2bb266.js",
    "revision": "c6140610f4df1a51560af04557f8ffa8"
  },
  {
    "url": "assets/js/15.c0c3197d.js",
    "revision": "764292658aaf294c74ca03a3b01c1653"
  },
  {
    "url": "assets/js/16.ddd44262.js",
    "revision": "7d3af2ecd833958339ebc7e99a7ae930"
  },
  {
    "url": "assets/js/17.00a0cf49.js",
    "revision": "51f05b3003173b4cf8a19b0679eeba47"
  },
  {
    "url": "assets/js/18.66c7cd87.js",
    "revision": "a642ee5575e05e25249a252571f5bc5b"
  },
  {
    "url": "assets/js/19.7087b97d.js",
    "revision": "b087e88bf71c124c2d2732fd2ce739e9"
  },
  {
    "url": "assets/js/2.43b048c2.js",
    "revision": "abd9017238a5af4d2a79fd43bd312039"
  },
  {
    "url": "assets/js/20.42c889e0.js",
    "revision": "f519f0d2030df97ce21b08e799341e0c"
  },
  {
    "url": "assets/js/21.a62e8c5d.js",
    "revision": "cf41727d9881b2ae1162bce881a7508b"
  },
  {
    "url": "assets/js/22.07eedd68.js",
    "revision": "1229b2cfac5f6ffa72715fc53cdda266"
  },
  {
    "url": "assets/js/23.024c2244.js",
    "revision": "eae7f8e6651b5d2c66365e9a5eba7fb3"
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
    "url": "assets/js/5.9f63172a.js",
    "revision": "7cdb64ef9e5240ffe1e5492d503e2f32"
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
    "url": "assets/js/app.c390a87c.js",
    "revision": "3c3df7eada742f1a16136fb864bec0ac"
  },
  {
    "url": "css/index.html",
    "revision": "49387f6b85ae693348d99165dc06a80b"
  },
  {
    "url": "css/scss.html",
    "revision": "134f2e7d7a9d04d39dd93360527584bb"
  },
  {
    "url": "css/skill.html",
    "revision": "6fec50eb9db2900f988759ade5f2afc4"
  },
  {
    "url": "git/command.html",
    "revision": "b301736ecde8dacd9eb35886a19b47cd"
  },
  {
    "url": "git/index.html",
    "revision": "fcb59d12ca8ac7d7f8cc8fb81dc19132"
  },
  {
    "url": "index.html",
    "revision": "176bbb5c58cf2d84f46c9a3407e5840f"
  },
  {
    "url": "node/depend.html",
    "revision": "ec03d4906d6daa32f057e22efd20b78f"
  },
  {
    "url": "node/npm.html",
    "revision": "dbbb313e4bc7e182b7b18271166c6943"
  },
  {
    "url": "software/browser.html",
    "revision": "a5134307f1d2914c279a29a76803e3de"
  },
  {
    "url": "software/mac.html",
    "revision": "a2717f8578b592a787f788ca5f56a358"
  },
  {
    "url": "software/vscode.html",
    "revision": "6cf19be72a2528d1b0c580797dfc8e3c"
  },
  {
    "url": "software/windows.html",
    "revision": "92139832cb31badc94db610e942604d2"
  },
  {
    "url": "utils/function.html",
    "revision": "19a04363344616219127eb6b1531a28d"
  },
  {
    "url": "utils/regexp.html",
    "revision": "439a895c304cf1ba0bd3f899c47280be"
  },
  {
    "url": "vue/index.html",
    "revision": "cbdfebaa7df371a6dd9e2dbd7594823a"
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
