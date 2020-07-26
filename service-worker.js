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
    "revision": "1e04b7449dbe22ab32a0f73fa3443a99"
  },
  {
    "url": "assets/css/0.styles.f1ecd4b0.css",
    "revision": "d99ca45e02c38f35b230dd51ae2cc037"
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
    "url": "assets/js/10.ca90b8d1.js",
    "revision": "c2c43ec026a32e255183e3f8cf4f258f"
  },
  {
    "url": "assets/js/11.2f97bf4f.js",
    "revision": "0af854c5d5e5af939cc3c245e27cbb4d"
  },
  {
    "url": "assets/js/12.e0a06fef.js",
    "revision": "4b66de567a769a20e607febc9c3f2f95"
  },
  {
    "url": "assets/js/13.5de590a7.js",
    "revision": "853b98f7e449120e2efdea418b5d20b7"
  },
  {
    "url": "assets/js/14.2d9419f6.js",
    "revision": "5fe53068f42d6dd4c1d909f8b98663dd"
  },
  {
    "url": "assets/js/15.56c955bb.js",
    "revision": "63e2630acae1a01a57deaf49573f4d33"
  },
  {
    "url": "assets/js/16.eff64a44.js",
    "revision": "151366b014e860d98a97d57c048ef397"
  },
  {
    "url": "assets/js/17.2b273adc.js",
    "revision": "b0d44e539130b6ba373082fd45d5e528"
  },
  {
    "url": "assets/js/18.66756dd8.js",
    "revision": "cf3a3b73a265b0a95d15d4b50b80340e"
  },
  {
    "url": "assets/js/19.016ff24e.js",
    "revision": "b9230641b903fab3f94821b7cdedeb6f"
  },
  {
    "url": "assets/js/2.b6435333.js",
    "revision": "47867ff2cdd65c6ceb3725ea6118cda9"
  },
  {
    "url": "assets/js/20.c916a1eb.js",
    "revision": "3a2cc1151a051c2c2e84642c655f53c8"
  },
  {
    "url": "assets/js/21.8a0dce48.js",
    "revision": "bf83911c3939477ff157fa5af6dbdcda"
  },
  {
    "url": "assets/js/22.91716c88.js",
    "revision": "b6e70eb5b40e74b4c461e432fabf681b"
  },
  {
    "url": "assets/js/23.7fd1c513.js",
    "revision": "f9c9c1c682bbfb52d0960eb1bc9e5a8c"
  },
  {
    "url": "assets/js/24.524574b0.js",
    "revision": "941148427f7975ae8aac70fef02a18b0"
  },
  {
    "url": "assets/js/25.86e2beb4.js",
    "revision": "92818a64785fbce177f547c20b5326ad"
  },
  {
    "url": "assets/js/26.93205842.js",
    "revision": "7fc8d7f0a3256a7d23d8ab8f505e5149"
  },
  {
    "url": "assets/js/3.431d1b43.js",
    "revision": "752e3932c184e9a1f49fba74330dd2dc"
  },
  {
    "url": "assets/js/4.3486c7c1.js",
    "revision": "0a935ee58fc378fd5fc6bdb21c244970"
  },
  {
    "url": "assets/js/5.75c658d8.js",
    "revision": "f349edd583e3290850dd17c29f03ae2e"
  },
  {
    "url": "assets/js/6.c187c35b.js",
    "revision": "875d80a22146e45d48e739c631ba98bc"
  },
  {
    "url": "assets/js/7.faafe814.js",
    "revision": "2cbe1d4b4f9eb040cf3595cb9feb53c3"
  },
  {
    "url": "assets/js/8.df0444fa.js",
    "revision": "4438957f59f6a0d50967a2381d9b003c"
  },
  {
    "url": "assets/js/9.76e782fb.js",
    "revision": "532f84fa650160f9e43cc27e96f5651c"
  },
  {
    "url": "assets/js/app.bf4fee94.js",
    "revision": "aa713bbe949badedaf015bd989b836e8"
  },
  {
    "url": "css/index.html",
    "revision": "39cc950be9e5b680bf8c789e8c60a200"
  },
  {
    "url": "css/scss.html",
    "revision": "51c366a026136bcb4935a3167194df10"
  },
  {
    "url": "css/skill.html",
    "revision": "89105518af7c68032a123edae3bbe988"
  },
  {
    "url": "git/command.html",
    "revision": "afaee10bfa374c1e21d41b47607c19b4"
  },
  {
    "url": "git/index.html",
    "revision": "89f8d9b2b976117afa16e7972cb2d463"
  },
  {
    "url": "index.html",
    "revision": "bea75f28abef0814c595814684b7adbd"
  },
  {
    "url": "issue/h5.html",
    "revision": "3c51efadc91392058a6a954f6846435f"
  },
  {
    "url": "issue/pc.html",
    "revision": "68416c618ede564dbfe48653964abcb1"
  },
  {
    "url": "node/npm.html",
    "revision": "d0eefc996f74e407623747ec0124a6ae"
  },
  {
    "url": "node/toolkit.html",
    "revision": "7d36ac7e41be0a2e14219c36d7e3c2d3"
  },
  {
    "url": "software/browser.html",
    "revision": "d0920c4c62c02bdc62968c26fc1b9c34"
  },
  {
    "url": "software/mac.html",
    "revision": "0f621fa67d4295d5fe376cc15a0168c4"
  },
  {
    "url": "software/vscode.html",
    "revision": "a3770e57ffc5e9da0a28a867e4f425e3"
  },
  {
    "url": "software/webstorm.html",
    "revision": "ae1de8f86ee5cca97deb4e1cdb879359"
  },
  {
    "url": "software/windows.html",
    "revision": "5105c50319eb6763b2138c1a4a15128f"
  },
  {
    "url": "software/zsh.html",
    "revision": "e5a35748ef963d2d5ddebf5ef0e81869"
  },
  {
    "url": "utils/function.html",
    "revision": "5734bf6a5d032f85cc948611e8f96d76"
  },
  {
    "url": "utils/regexp.html",
    "revision": "6f4f80bebdcb7b7f62403af3d73ad7fd"
  },
  {
    "url": "vue/index.html",
    "revision": "337b4f4ca7479f5d3e367c987b0b669a"
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
