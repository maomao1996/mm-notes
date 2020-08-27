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
    "revision": "d82a65ff317d5e1f648c45633c656fc5"
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
    "url": "assets/js/18.1c0bfc92.js",
    "revision": "a28775a54c420476a0cd1fe81b95e022"
  },
  {
    "url": "assets/js/19.d93cf557.js",
    "revision": "75f7c45184f32e1483c38e56cce41012"
  },
  {
    "url": "assets/js/2.0d6dbd6d.js",
    "revision": "ce089b828b9628dc31c3c2f8709c0956"
  },
  {
    "url": "assets/js/20.d492555c.js",
    "revision": "71296d195cec69965ba951c1610fbfb7"
  },
  {
    "url": "assets/js/21.2b79138e.js",
    "revision": "5fe1ffdc2bebe34939fbb4ccf58ed699"
  },
  {
    "url": "assets/js/22.6aaa6da8.js",
    "revision": "b6e70eb5b40e74b4c461e432fabf681b"
  },
  {
    "url": "assets/js/23.6a08d322.js",
    "revision": "f9c9c1c682bbfb52d0960eb1bc9e5a8c"
  },
  {
    "url": "assets/js/24.c23839e8.js",
    "revision": "e9da118b3a82df72317af53d478dfa62"
  },
  {
    "url": "assets/js/25.651f585f.js",
    "revision": "de7884c1ba85e5ea7829f3fbbc09ef47"
  },
  {
    "url": "assets/js/26.93205842.js",
    "revision": "7fc8d7f0a3256a7d23d8ab8f505e5149"
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
    "url": "assets/js/5.75c658d8.js",
    "revision": "f349edd583e3290850dd17c29f03ae2e"
  },
  {
    "url": "assets/js/6.1f55ec10.js",
    "revision": "e54630ff7f345aec9bc13b185664c9be"
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
    "url": "assets/js/app.e29cc8e8.js",
    "revision": "8dacd372558bd518ac5adb4506bd1fa6"
  },
  {
    "url": "css/index.html",
    "revision": "90096be014bb64eb4aa6e750761c4585"
  },
  {
    "url": "css/scss.html",
    "revision": "cbfd92ab32583c91096563da542e9c56"
  },
  {
    "url": "css/skill.html",
    "revision": "49138cd04d83dabdf5d08f0f2c7ffc1d"
  },
  {
    "url": "git/command.html",
    "revision": "11413c748a8cc84d7a8ef423989116b6"
  },
  {
    "url": "git/index.html",
    "revision": "70528cade569d04f5665156d7b0c3e7a"
  },
  {
    "url": "index.html",
    "revision": "8f8c87cb05c6cfef5cbaa9a11651436a"
  },
  {
    "url": "issue/h5.html",
    "revision": "42c24630f5e546f16a2831cb4fe28bf4"
  },
  {
    "url": "issue/pc.html",
    "revision": "4934bb49042b11a52b4817254aa20e32"
  },
  {
    "url": "node/npm.html",
    "revision": "98decff289d7fc980f6180576ea25a75"
  },
  {
    "url": "node/toolkit.html",
    "revision": "953581abdb11280838ebb75dc0963e81"
  },
  {
    "url": "software/browser.html",
    "revision": "e46cc323004f5e00258db907d89f51bc"
  },
  {
    "url": "software/mac.html",
    "revision": "5e840c811bdbca24f1b6221848f84dd6"
  },
  {
    "url": "software/vscode.html",
    "revision": "bf2e686ecdea7c9abd09b6c9dfebcbd4"
  },
  {
    "url": "software/webstorm.html",
    "revision": "e653cb958adb4699c362023478886546"
  },
  {
    "url": "software/windows.html",
    "revision": "1dde8320e75fb3f2f925db0a697781d7"
  },
  {
    "url": "software/zsh.html",
    "revision": "85990be1fa6984f377bb3f75ac4c87a0"
  },
  {
    "url": "utils/function.html",
    "revision": "711c3cd6056ab774525bc0bed83fe90d"
  },
  {
    "url": "utils/regexp.html",
    "revision": "5fe4eb9bf3f23df692b10a1cc2b21f39"
  },
  {
    "url": "vue/index.html",
    "revision": "58bc66354625ab596f68cde53eb2c49c"
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
