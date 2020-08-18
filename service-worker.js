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
    "revision": "24243e4eace4ea931670bf14c6f87107"
  },
  {
    "url": "assets/css/0.styles.f20e8708.css",
    "revision": "a564f963a28567847913dd874ca699f4"
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
    "url": "assets/js/10.0c2f20d4.js",
    "revision": "c2c43ec026a32e255183e3f8cf4f258f"
  },
  {
    "url": "assets/js/11.c3714242.js",
    "revision": "85687adadf7a2e296315953eb0a481f1"
  },
  {
    "url": "assets/js/12.34baa844.js",
    "revision": "4b113e7cb057c976d33f99b2aa8f12d2"
  },
  {
    "url": "assets/js/13.d5159ee7.js",
    "revision": "853b98f7e449120e2efdea418b5d20b7"
  },
  {
    "url": "assets/js/14.d6b7bdfd.js",
    "revision": "5fe53068f42d6dd4c1d909f8b98663dd"
  },
  {
    "url": "assets/js/15.82075bc8.js",
    "revision": "63e2630acae1a01a57deaf49573f4d33"
  },
  {
    "url": "assets/js/16.2dd9b2d0.js",
    "revision": "151366b014e860d98a97d57c048ef397"
  },
  {
    "url": "assets/js/17.b52da925.js",
    "revision": "b0d44e539130b6ba373082fd45d5e528"
  },
  {
    "url": "assets/js/18.8b30479e.js",
    "revision": "cf3a3b73a265b0a95d15d4b50b80340e"
  },
  {
    "url": "assets/js/19.b1f26cd8.js",
    "revision": "b6b865ed6ec9783bfba828e6c13eb284"
  },
  {
    "url": "assets/js/2.74f1ddc4.js",
    "revision": "29ff0771ebffc89e74303f697deb2771"
  },
  {
    "url": "assets/js/20.338dc091.js",
    "revision": "71296d195cec69965ba951c1610fbfb7"
  },
  {
    "url": "assets/js/21.8f3be277.js",
    "revision": "4dbae746f495cbced8b3bf345e157aba"
  },
  {
    "url": "assets/js/22.5271f018.js",
    "revision": "b6e70eb5b40e74b4c461e432fabf681b"
  },
  {
    "url": "assets/js/23.2d85de99.js",
    "revision": "f9c9c1c682bbfb52d0960eb1bc9e5a8c"
  },
  {
    "url": "assets/js/24.9e7be861.js",
    "revision": "941148427f7975ae8aac70fef02a18b0"
  },
  {
    "url": "assets/js/25.58d3c8ba.js",
    "revision": "de7884c1ba85e5ea7829f3fbbc09ef47"
  },
  {
    "url": "assets/js/26.93205842.js",
    "revision": "7fc8d7f0a3256a7d23d8ab8f505e5149"
  },
  {
    "url": "assets/js/3.f420ac36.js",
    "revision": "752e3932c184e9a1f49fba74330dd2dc"
  },
  {
    "url": "assets/js/4.20507842.js",
    "revision": "0a935ee58fc378fd5fc6bdb21c244970"
  },
  {
    "url": "assets/js/5.75c658d8.js",
    "revision": "f349edd583e3290850dd17c29f03ae2e"
  },
  {
    "url": "assets/js/6.cbbf305c.js",
    "revision": "e54630ff7f345aec9bc13b185664c9be"
  },
  {
    "url": "assets/js/7.a69f9ca3.js",
    "revision": "2cbe1d4b4f9eb040cf3595cb9feb53c3"
  },
  {
    "url": "assets/js/8.27b7bd80.js",
    "revision": "4438957f59f6a0d50967a2381d9b003c"
  },
  {
    "url": "assets/js/9.b3ff8de4.js",
    "revision": "532f84fa650160f9e43cc27e96f5651c"
  },
  {
    "url": "assets/js/app.fd9603e7.js",
    "revision": "07eecedf1e0ca6628273796b7d5cbb64"
  },
  {
    "url": "css/index.html",
    "revision": "45a4a3c52244facdcaf056bf601dfb95"
  },
  {
    "url": "css/scss.html",
    "revision": "c7312d8d697bbfbdd612213f1b01bd96"
  },
  {
    "url": "css/skill.html",
    "revision": "cc4f574a0c67a28f8ba01403522668cf"
  },
  {
    "url": "git/command.html",
    "revision": "ed0dfeea54cd1d3f824b58c8621eec3c"
  },
  {
    "url": "git/index.html",
    "revision": "2f03e534476be645109fb8310246fef5"
  },
  {
    "url": "index.html",
    "revision": "becd7a311823e60550513d9f01d32cde"
  },
  {
    "url": "issue/h5.html",
    "revision": "d13aec669c05a2009619d47e7f5c5639"
  },
  {
    "url": "issue/pc.html",
    "revision": "f8cb8625f59a9a96a3623f73c0becdf5"
  },
  {
    "url": "node/npm.html",
    "revision": "3f0a1c1e523b5b9535071660faf55ee7"
  },
  {
    "url": "node/toolkit.html",
    "revision": "b8acd272393c80a0ad7fd1f5f482e8e0"
  },
  {
    "url": "software/browser.html",
    "revision": "592c876ead396339f36dfe9bc5e35d9b"
  },
  {
    "url": "software/mac.html",
    "revision": "794c711346d1298491a8644aaac7b7d3"
  },
  {
    "url": "software/vscode.html",
    "revision": "58a80dc7a989b86a7e92ad8b3160fd9e"
  },
  {
    "url": "software/webstorm.html",
    "revision": "9e69e0fd5a519772ae606ea09530377d"
  },
  {
    "url": "software/windows.html",
    "revision": "6374dcaceeeaa5ba698fe5a9c63fa1ab"
  },
  {
    "url": "software/zsh.html",
    "revision": "6d4db18feb8e8e99de8b393b2d5fd272"
  },
  {
    "url": "utils/function.html",
    "revision": "55fcbc6cd2e1998635ce0063d7ff9a0a"
  },
  {
    "url": "utils/regexp.html",
    "revision": "105bce560b78bfbd0a231dd5d7aaeaa9"
  },
  {
    "url": "vue/index.html",
    "revision": "9e0c1abb0a8c3f6310c5555e318e1642"
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
