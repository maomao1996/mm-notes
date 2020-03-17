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
    "revision": "af435ad24c6f06691fc0e7dc9862fe59"
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
    "url": "assets/js/10.0ea36195.js",
    "revision": "268a8462490a13a3dbd50a4b33d56865"
  },
  {
    "url": "assets/js/11.b1ddc09f.js",
    "revision": "44235b8af1497b7f7c0334f38efbc504"
  },
  {
    "url": "assets/js/12.1fa74371.js",
    "revision": "b5d9d370079fc70465b952626c85087b"
  },
  {
    "url": "assets/js/13.9ac919cd.js",
    "revision": "0851ec188d40f15be1d3b516d30e09a3"
  },
  {
    "url": "assets/js/14.b7483d15.js",
    "revision": "246c8017d6cdfd1e1bc4a91f575c4d0d"
  },
  {
    "url": "assets/js/15.ee23bc3b.js",
    "revision": "2fa204983fa9b4e580902b254ee977eb"
  },
  {
    "url": "assets/js/16.f58fc663.js",
    "revision": "0c8f56ed8860b78ddbd0c568abe2a1c9"
  },
  {
    "url": "assets/js/17.9e0b7842.js",
    "revision": "33a97c287e636524f1db9f4347652536"
  },
  {
    "url": "assets/js/18.913daf40.js",
    "revision": "4d2e1be5e53c1a4bfa8765b174ec95d7"
  },
  {
    "url": "assets/js/19.9291d718.js",
    "revision": "6bcbc44b5939a48673fb7c789237fdab"
  },
  {
    "url": "assets/js/2.efb942e3.js",
    "revision": "093f3843fb73994024df773845bed087"
  },
  {
    "url": "assets/js/20.0b468979.js",
    "revision": "68385e74a0b0e1bf551b5cc511144680"
  },
  {
    "url": "assets/js/21.7f24fb35.js",
    "revision": "cee8a6e101017029bd0210379c03b1ad"
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
    "url": "assets/js/5.8554bda0.js",
    "revision": "f428d5b5d22439eaa77d6002ff9b47a8"
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
    "url": "assets/js/app.a4d5d472.js",
    "revision": "e48de6824aa293895a50e396974997c8"
  },
  {
    "url": "css/index.html",
    "revision": "0e1098be97706dd7c5e7b08240c55967"
  },
  {
    "url": "css/scss.html",
    "revision": "4259afbb7f64afedbf905e2dd083744a"
  },
  {
    "url": "css/skill.html",
    "revision": "ccb8d8bc00304810d76c41b0e6eebb5a"
  },
  {
    "url": "git/command.html",
    "revision": "25e78dc5b426ca82f638aa11b4fe9ed9"
  },
  {
    "url": "git/index.html",
    "revision": "e09f8113f001d87a63b0ccf27657ee2c"
  },
  {
    "url": "index.html",
    "revision": "35989aa96be2285d2a20889b3e715c2e"
  },
  {
    "url": "node/depend.html",
    "revision": "81c6b9a1d571c7861e601b39eb3963de"
  },
  {
    "url": "node/npm.html",
    "revision": "7882e9abace30e4f311534a51caf53ad"
  },
  {
    "url": "software/browser.html",
    "revision": "4d0d3a470bf0c96a099d114d1118467b"
  },
  {
    "url": "software/mac.html",
    "revision": "d3c5ce74243ee5c934d73f9161deb3a1"
  },
  {
    "url": "software/windows.html",
    "revision": "494e2a84797ca00b5bc400bf91a8c11e"
  },
  {
    "url": "utils/function.html",
    "revision": "3ae0d8ac1a995183d68170fa3299b97a"
  },
  {
    "url": "utils/regexp.html",
    "revision": "6086f017da2ba6c9fc114f9a6a69ed3b"
  },
  {
    "url": "vue/index.html",
    "revision": "6b5dca8c8de8698a37dcc24e77654ea4"
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
