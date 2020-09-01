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
    "revision": "e6b6226352ebf31728d4afb92edeeed2"
  },
  {
    "url": "assets/css/0.styles.045a0977.css",
    "revision": "8145b087406583e3ea24c5250e314bf2"
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
    "url": "assets/js/10.31956f34.js",
    "revision": "c2c43ec026a32e255183e3f8cf4f258f"
  },
  {
    "url": "assets/js/11.bd4bff3c.js",
    "revision": "0af854c5d5e5af939cc3c245e27cbb4d"
  },
  {
    "url": "assets/js/12.d65f7ff6.js",
    "revision": "9ce0b29ff10db2e14f603018439cc2c8"
  },
  {
    "url": "assets/js/13.7da7fb3b.js",
    "revision": "853b98f7e449120e2efdea418b5d20b7"
  },
  {
    "url": "assets/js/14.4e8bcc72.js",
    "revision": "5fe53068f42d6dd4c1d909f8b98663dd"
  },
  {
    "url": "assets/js/15.e1d35b26.js",
    "revision": "63e2630acae1a01a57deaf49573f4d33"
  },
  {
    "url": "assets/js/16.74e150f3.js",
    "revision": "151366b014e860d98a97d57c048ef397"
  },
  {
    "url": "assets/js/17.d2f37447.js",
    "revision": "b0d44e539130b6ba373082fd45d5e528"
  },
  {
    "url": "assets/js/18.521b78be.js",
    "revision": "7b859716dad577c1ba619350d3ec35be"
  },
  {
    "url": "assets/js/19.c4605751.js",
    "revision": "98a1352c3494357e52d2237448b17325"
  },
  {
    "url": "assets/js/2.0d6dbd6d.js",
    "revision": "ce089b828b9628dc31c3c2f8709c0956"
  },
  {
    "url": "assets/js/20.8b2ed039.js",
    "revision": "12732a8b983e71ab42db53972c5ff15f"
  },
  {
    "url": "assets/js/21.df55b71b.js",
    "revision": "8dcdfb3d96e67677633bc9a0e44715ba"
  },
  {
    "url": "assets/js/22.10c73965.js",
    "revision": "30864746991329d3ec4389a372d48601"
  },
  {
    "url": "assets/js/23.c4c31209.js",
    "revision": "6f80366aaa748102add9763ed2b0a885"
  },
  {
    "url": "assets/js/24.84f7ee9b.js",
    "revision": "432adac3079fe46488402e69231d1b8e"
  },
  {
    "url": "assets/js/25.386e09ee.js",
    "revision": "36f9c234ca9929aaec450e2482bd3040"
  },
  {
    "url": "assets/js/26.337064e2.js",
    "revision": "f75178ac17cde616b70226ab94dd885b"
  },
  {
    "url": "assets/js/27.4eb95be9.js",
    "revision": "d8b666b65a381d2f9d0abb191cf12eb8"
  },
  {
    "url": "assets/js/3.382bc1a9.js",
    "revision": "752e3932c184e9a1f49fba74330dd2dc"
  },
  {
    "url": "assets/js/4.8f471528.js",
    "revision": "0a935ee58fc378fd5fc6bdb21c244970"
  },
  {
    "url": "assets/js/5.5f4c3528.js",
    "revision": "9e3b1b30c04cf14dae8b7ecef9ced32d"
  },
  {
    "url": "assets/js/6.12298dd8.js",
    "revision": "607b4dbd8d21b86134739dcde18f355a"
  },
  {
    "url": "assets/js/7.201b1f06.js",
    "revision": "2cbe1d4b4f9eb040cf3595cb9feb53c3"
  },
  {
    "url": "assets/js/8.a3cd0157.js",
    "revision": "4438957f59f6a0d50967a2381d9b003c"
  },
  {
    "url": "assets/js/9.cb95b172.js",
    "revision": "532f84fa650160f9e43cc27e96f5651c"
  },
  {
    "url": "assets/js/app.fabaca9c.js",
    "revision": "c0d2643c6692858c6d211db7cfbf5003"
  },
  {
    "url": "css/index.html",
    "revision": "760815ec8a36734e01c56c69e00bcf8d"
  },
  {
    "url": "css/scss.html",
    "revision": "8f6bb5678468ce402b28ee1aef8e6c61"
  },
  {
    "url": "css/skill.html",
    "revision": "22bd78e016563c1db8d4e3da5be6fdd9"
  },
  {
    "url": "git/command.html",
    "revision": "07d0167fc5264b9ad667f95e00a4f07c"
  },
  {
    "url": "git/index.html",
    "revision": "8843ebdcaf2727cf66eed2ba72b12e40"
  },
  {
    "url": "index.html",
    "revision": "afbeaed0831c87cfc60ade996b513949"
  },
  {
    "url": "issue/h5.html",
    "revision": "5f336614f97a5c637620ba0bc45bc975"
  },
  {
    "url": "issue/pc.html",
    "revision": "cf25694f924a43d2721377b046731828"
  },
  {
    "url": "node/npm.html",
    "revision": "ee99c5da3b090e53e204f1f23c72116c"
  },
  {
    "url": "node/toolkit.html",
    "revision": "ac67fec4d99826958ebe244e1a4a4f0b"
  },
  {
    "url": "software/browser.html",
    "revision": "182232b6f191fe49bf134a80c343810a"
  },
  {
    "url": "software/cross-platform.html",
    "revision": "8b4cfb725f125236f310aa6b9f9b8e38"
  },
  {
    "url": "software/mac.html",
    "revision": "2e644e06e972999031879d5a30cf9dd8"
  },
  {
    "url": "software/vscode.html",
    "revision": "6ee94e39244e77cad1d3db47b49bb6f4"
  },
  {
    "url": "software/webstorm.html",
    "revision": "a5c21e55add0a1653e2ecdda5f1d6910"
  },
  {
    "url": "software/windows.html",
    "revision": "42456dd1595712c79e3924477d2ce93c"
  },
  {
    "url": "software/zsh.html",
    "revision": "833c05b3bf192e043e40f6f542568604"
  },
  {
    "url": "utils/function.html",
    "revision": "e91c557369ecb017588e91df48d48ed0"
  },
  {
    "url": "utils/regexp.html",
    "revision": "1783b513b2e59ebaf310590581262d3d"
  },
  {
    "url": "vue/index.html",
    "revision": "40127a01cecff9bfb1dc0f7a95a58b6c"
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
