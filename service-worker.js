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
    "revision": "7d513148256d44de1f8ef5269aef3a9d"
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
    "url": "assets/js/18.7db3d3fa.js",
    "revision": "4d700dcf9a65d476031634f327c17946"
  },
  {
    "url": "assets/js/19.a3b558ee.js",
    "revision": "04f1aeba56f558874c8dd436ea5524c0"
  },
  {
    "url": "assets/js/2.0d6dbd6d.js",
    "revision": "ce089b828b9628dc31c3c2f8709c0956"
  },
  {
    "url": "assets/js/20.09438101.js",
    "revision": "dd6184d61596f77b5b7fc15fa19bb757"
  },
  {
    "url": "assets/js/21.d0f3bf3c.js",
    "revision": "fd2db7951cc640238675f1d1fa33fc5b"
  },
  {
    "url": "assets/js/22.4bc48f0a.js",
    "revision": "135f52653bf8c42e93cad0b17d2cf0d5"
  },
  {
    "url": "assets/js/23.28edc9ce.js",
    "revision": "aa3e41a78634cc97ce0cd1cc0d23cb23"
  },
  {
    "url": "assets/js/24.53f49d26.js",
    "revision": "fa30354e080454db854e9efeb2301b44"
  },
  {
    "url": "assets/js/25.6935ee99.js",
    "revision": "7aefbdf85420cc308bebd77a12c7701b"
  },
  {
    "url": "assets/js/26.c2d6f514.js",
    "revision": "5bdfe7e6ac7226248037a541d69de346"
  },
  {
    "url": "assets/js/27.97e98e9b.js",
    "revision": "dd627ed6f972f184e18b978f8f652374"
  },
  {
    "url": "assets/js/28.d1733203.js",
    "revision": "3644fa1037ea6385f27946f2b56c7595"
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
    "url": "assets/js/5.3a7e555b.js",
    "revision": "e4b0f0e04d012ccc61b928918cdf6835"
  },
  {
    "url": "assets/js/6.b3a0bf5c.js",
    "revision": "8ac9d2bf2876687440d6a28b38e1557d"
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
    "url": "assets/js/app.e01038cb.js",
    "revision": "a4ad7fd8b1e69acaa265f1be9d527028"
  },
  {
    "url": "css/index.html",
    "revision": "a0dae4b279f757f2ad230448ddd3ccf3"
  },
  {
    "url": "css/scss.html",
    "revision": "be4299d01c9380ad7e7c817747fc3c32"
  },
  {
    "url": "css/skill.html",
    "revision": "c82040e2f7ea9d9ca918f957dc86c375"
  },
  {
    "url": "git/command.html",
    "revision": "e3f8a72a0ab0c2b977bfb4cc4a3115b6"
  },
  {
    "url": "git/index.html",
    "revision": "59f0de51859c129275a120c1736ce0c9"
  },
  {
    "url": "index.html",
    "revision": "04f3b24de9501d2e5f53c5a8053c9377"
  },
  {
    "url": "issue/h5.html",
    "revision": "9ee6c593d4d8d4a7eba50a033f27a062"
  },
  {
    "url": "issue/pc.html",
    "revision": "f79caa189a5d3b01b3bbe2a53fed11a3"
  },
  {
    "url": "node/npm.html",
    "revision": "28136be9a6227d8d2dabf834b69fc9b9"
  },
  {
    "url": "node/toolkit.html",
    "revision": "1966bb32e7c8a925b951e51d68d27163"
  },
  {
    "url": "online-tools/bookmark-scripts.html",
    "revision": "6ac593cbf5c9517d4c3c11a89478e074"
  },
  {
    "url": "software/browser.html",
    "revision": "cb7453d4ff9aa6aa944d749517caa022"
  },
  {
    "url": "software/cross-platform.html",
    "revision": "047c41f7d3d968e997ac31ac4378db21"
  },
  {
    "url": "software/mac.html",
    "revision": "b4e05f11da4343f82c554bbdcaa35f6d"
  },
  {
    "url": "software/vscode.html",
    "revision": "e40da8ef597c23ac69c3405f74b8b516"
  },
  {
    "url": "software/webstorm.html",
    "revision": "c117a6f9add8cefeced25cf0b12a2a79"
  },
  {
    "url": "software/windows.html",
    "revision": "985f9127878f0f12608f1200a2884be7"
  },
  {
    "url": "software/zsh.html",
    "revision": "ee5ba715a75268e1559aa35edc629b60"
  },
  {
    "url": "utils/function.html",
    "revision": "b277b5e0ca946649d6618f0cb6405b20"
  },
  {
    "url": "utils/regexp.html",
    "revision": "7216970db5ea089b66415fe0a7cc8807"
  },
  {
    "url": "vue/index.html",
    "revision": "6475a1bce938e8c6d19cac132878e3de"
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
