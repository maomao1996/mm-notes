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
    "revision": "c26c551f19cf17c55a42a71bf4c78037"
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
    "url": "assets/js/10.1102c874.js",
    "revision": "0fbbd58568b321861bf679523cebe338"
  },
  {
    "url": "assets/js/11.bd4bff3c.js",
    "revision": "0af854c5d5e5af939cc3c245e27cbb4d"
  },
  {
    "url": "assets/js/12.d2928f30.js",
    "revision": "f1a7977baee3f247e089156e30a70d58"
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
    "url": "assets/js/23.d6ccdb82.js",
    "revision": "8da51ae0822cae175e6689dcf543e4ea"
  },
  {
    "url": "assets/js/24.fa6daac7.js",
    "revision": "a912cd4b88424b152a7e7879e702b96f"
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
    "url": "assets/js/6.6f3296a0.js",
    "revision": "b16330bdd7f3435529b890b51035c871"
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
    "url": "assets/js/9.5b606c50.js",
    "revision": "486a40a2262852aad56360d55c486d2b"
  },
  {
    "url": "assets/js/app.03d6d43d.js",
    "revision": "2524d500c697f303b45777a4361aaa0f"
  },
  {
    "url": "css/index.html",
    "revision": "cf046ab699a44e8ab6bc6c762e5f6cd3"
  },
  {
    "url": "css/scss.html",
    "revision": "f7f006ce13d08dddcc18f6fc833c4afe"
  },
  {
    "url": "css/skill.html",
    "revision": "3dac0508a60d8e07f6ec2edf3839cee0"
  },
  {
    "url": "git/command.html",
    "revision": "4c45d9ac16886c25d7cd94fbcf564c86"
  },
  {
    "url": "git/index.html",
    "revision": "d79ae971bd0fe6586ecb1e6f24d8ae59"
  },
  {
    "url": "index.html",
    "revision": "7971f6d6c40c833cc87ea46383778e46"
  },
  {
    "url": "issue/h5.html",
    "revision": "eeb366fc03471a1d588e5ed1f4ee105d"
  },
  {
    "url": "issue/pc.html",
    "revision": "ce6b6b85d797801d838be8a5d933d628"
  },
  {
    "url": "node/npm.html",
    "revision": "0a45f999cc115be39fbe4a6800fa521b"
  },
  {
    "url": "node/toolkit.html",
    "revision": "45aa435527ecf2cd1c08c516945e6a74"
  },
  {
    "url": "online-tools/bookmark-scripts.html",
    "revision": "1ed8ec5b7fd653f2b69e84c023c45ae4"
  },
  {
    "url": "software/browser.html",
    "revision": "2b8961ff4a0da460db72ab9259681ccd"
  },
  {
    "url": "software/cross-platform.html",
    "revision": "3df411922adce48a111c039ffd8998e8"
  },
  {
    "url": "software/mac.html",
    "revision": "c2fa0ce9ff0253610afa1dba04171c49"
  },
  {
    "url": "software/vscode.html",
    "revision": "745c99e6bf59f1e3d05e0a80af456b3e"
  },
  {
    "url": "software/webstorm.html",
    "revision": "36103a3b75118a88184fa65f3d22cdc6"
  },
  {
    "url": "software/windows.html",
    "revision": "43ff1549026c0ed89c26e6611fb9b913"
  },
  {
    "url": "software/zsh.html",
    "revision": "ff55637a8465a22bde96a41d72260c07"
  },
  {
    "url": "utils/function.html",
    "revision": "664e30de19e1d778c1efa3f77fcd23b2"
  },
  {
    "url": "utils/regexp.html",
    "revision": "1264a87cf1fe848de7aea112bf1c38a1"
  },
  {
    "url": "vue/index.html",
    "revision": "bf9e5e11109c3efb16c50248d374d3e2"
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
