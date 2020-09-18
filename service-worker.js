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
    "revision": "07812789aacf0f524497f5f321c55334"
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
    "url": "assets/js/22.d382939e.js",
    "revision": "fbaaceb9b032664cdc0691b6f3e2d5c7"
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
    "url": "assets/js/6.3f7e4152.js",
    "revision": "e929872fabf71e22a258a1006da38d62"
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
    "url": "assets/js/app.b93887ab.js",
    "revision": "51c81f82ab198c7fe1ac1dd464507cfc"
  },
  {
    "url": "css/index.html",
    "revision": "c61a5b86bceeb3c36e7d25f4511b92cd"
  },
  {
    "url": "css/scss.html",
    "revision": "e85bbec79a89c77d59f49b7809173ff8"
  },
  {
    "url": "css/skill.html",
    "revision": "7bcb49662402191b476d9b3aa45770a9"
  },
  {
    "url": "git/command.html",
    "revision": "adbbf4750a5668cc5b5533c8b722f031"
  },
  {
    "url": "git/index.html",
    "revision": "920e125d3dec9ea73413d05a3092aca7"
  },
  {
    "url": "index.html",
    "revision": "599b93917061ad1332604668649d47bc"
  },
  {
    "url": "issue/h5.html",
    "revision": "8370ff87b8537963b2554910130c3073"
  },
  {
    "url": "issue/pc.html",
    "revision": "f191373125f001fbf5e88bb318b76da4"
  },
  {
    "url": "node/npm.html",
    "revision": "90bcaf285bfa3206a647f4af1cb3bec9"
  },
  {
    "url": "node/toolkit.html",
    "revision": "025a1c50a7e171dfeb94d33a587eb70d"
  },
  {
    "url": "online-tools/bookmark-scripts.html",
    "revision": "48b434d8ce3ccdb393abed2db7c1aa46"
  },
  {
    "url": "software/browser.html",
    "revision": "9fbbadfc468642a4282743fa320c992a"
  },
  {
    "url": "software/cross-platform.html",
    "revision": "d24e24ec3b0798c660238a0b3d95502d"
  },
  {
    "url": "software/mac.html",
    "revision": "85d3dfae0b829b8693cc5b4cbdfc8323"
  },
  {
    "url": "software/vscode.html",
    "revision": "c6065e2f81713031c41ce625d8360d52"
  },
  {
    "url": "software/webstorm.html",
    "revision": "fad4dc712a18b8ce559f693dee094c99"
  },
  {
    "url": "software/windows.html",
    "revision": "090729174f2b7a43608fdf90ba953d03"
  },
  {
    "url": "software/zsh.html",
    "revision": "1ef8b39b15c0bd03e7b9eb63f34ed506"
  },
  {
    "url": "utils/function.html",
    "revision": "5c0a3a0484e4980722a724a6a0dd8b10"
  },
  {
    "url": "utils/regexp.html",
    "revision": "5a45ecd8a3a556990f3fed80d2207d03"
  },
  {
    "url": "vue/index.html",
    "revision": "97f8bf2e9c3dcc279fc80dfd653d960f"
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
