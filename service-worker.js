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
    "revision": "cf6c4664370d2814b35082999e78ba39"
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
    "url": "assets/js/19.a8530917.js",
    "revision": "30dbdd3757b57728af568b5b4423d9ea"
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
    "url": "assets/js/app.826afac1.js",
    "revision": "dedd8deb2f757a051780d14a6510e0ac"
  },
  {
    "url": "css/index.html",
    "revision": "69347c8f867d7d35389d5e22a1971973"
  },
  {
    "url": "css/scss.html",
    "revision": "4bc1c3fc7b9d2446644e5edd356f7492"
  },
  {
    "url": "css/skill.html",
    "revision": "ccdbe12e8df08c5ec38edaa7804be43f"
  },
  {
    "url": "git/command.html",
    "revision": "083fd6a19a507e0491a8cdffbc9e5d93"
  },
  {
    "url": "git/index.html",
    "revision": "482b68d55811b33d9888b9a0ae602cc3"
  },
  {
    "url": "index.html",
    "revision": "696ed9f348607aaaa111fbd9e9839c33"
  },
  {
    "url": "issue/h5.html",
    "revision": "79af09fa09ac0ad6502ec138908c79f6"
  },
  {
    "url": "issue/pc.html",
    "revision": "f1a02482924953b5e47078beb3b9b16b"
  },
  {
    "url": "node/npm.html",
    "revision": "61287747d9f93ec2b0ae31541170f1f5"
  },
  {
    "url": "node/toolkit.html",
    "revision": "9aa66a659eb93faafe4203a7da6edb6c"
  },
  {
    "url": "online-tools/bookmark-scripts.html",
    "revision": "b8a52dba23cd9e310624d59b4962d8e8"
  },
  {
    "url": "software/browser.html",
    "revision": "fbfef373383171124f1230e742fabcb4"
  },
  {
    "url": "software/cross-platform.html",
    "revision": "eb86a3336dd9274726726043f8c780c9"
  },
  {
    "url": "software/mac.html",
    "revision": "45d43f9fa7af1617d53a942938a6df5e"
  },
  {
    "url": "software/vscode.html",
    "revision": "aa4182c6cbf8e666b5c640df00dbc7b0"
  },
  {
    "url": "software/webstorm.html",
    "revision": "40801f97f0bbcaab2d2f6d118c260685"
  },
  {
    "url": "software/windows.html",
    "revision": "e9b0464ae64327de6463cc1769ea8b54"
  },
  {
    "url": "software/zsh.html",
    "revision": "84b3b8bf0198f431825b7ce9194a6389"
  },
  {
    "url": "utils/function.html",
    "revision": "7075637499d9b9873797e068bfc7b041"
  },
  {
    "url": "utils/regexp.html",
    "revision": "47d34ee148b972719fb7f0dff1e8e1b2"
  },
  {
    "url": "vue/index.html",
    "revision": "184e38da70d025357263b0fc0a207362"
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
