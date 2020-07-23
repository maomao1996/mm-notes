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
    "revision": "587e9cae2c0c662d736f3ea4e7cda350"
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
    "url": "assets/js/12.7550d2c5.js",
    "revision": "9bce67f47e7e3fb0afc17dcb7b392bbc"
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
    "url": "assets/js/16.0da5e330.js",
    "revision": "9387839d8d4a441d4b946c762b88e89a"
  },
  {
    "url": "assets/js/17.aab9ea78.js",
    "revision": "3d739536679134d0a9c2ee826582aec7"
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
    "url": "assets/js/2.007004f9.js",
    "revision": "bcc2b93c3a9b2ebf882945287dbcd801"
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
    "url": "assets/js/3.51c8b2fa.js",
    "revision": "ebf83ffef6c4b78ac802f77ffb3f305d"
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
    "url": "assets/js/app.5499ee92.js",
    "revision": "5fe4e1b63a6477e9262a439a9a4069da"
  },
  {
    "url": "css/index.html",
    "revision": "73968a249870a6d0981d5578227484d5"
  },
  {
    "url": "css/scss.html",
    "revision": "19fd0e4a8fec91cf0d7c0cb871a18937"
  },
  {
    "url": "css/skill.html",
    "revision": "291f34870fa33434965c4b92b37abe20"
  },
  {
    "url": "git/command.html",
    "revision": "e7ffb22a1678f847d5d2567450380167"
  },
  {
    "url": "git/index.html",
    "revision": "5f8c0552f18d5cedc9cfbf7dae6cce9b"
  },
  {
    "url": "index.html",
    "revision": "9a2a5d020cd06e3c8b6cc9669c3ae2f1"
  },
  {
    "url": "issue/h5.html",
    "revision": "8ead8eee3eae0125b92aedcc1d45a4be"
  },
  {
    "url": "issue/pc.html",
    "revision": "f8971a1304f46a4bb0410fea5b8749df"
  },
  {
    "url": "node/npm.html",
    "revision": "fa4000c61eceb358f09eab7bbb88cd1a"
  },
  {
    "url": "node/toolkit.html",
    "revision": "c254d638bad6a2a3374477762055021a"
  },
  {
    "url": "software/browser.html",
    "revision": "2a8cea83a464a1e3ff8f80107c1606e0"
  },
  {
    "url": "software/mac.html",
    "revision": "232a358aa5a675412e0b983c081f9fef"
  },
  {
    "url": "software/vscode.html",
    "revision": "d7365e772357d8ae157ddb6def4383db"
  },
  {
    "url": "software/webstorm.html",
    "revision": "18062648799b151daafbfa06556fea26"
  },
  {
    "url": "software/windows.html",
    "revision": "cdf158c55c0772b2227f107ec4a7b5e9"
  },
  {
    "url": "software/zsh.html",
    "revision": "6910e75e7d3c1c24ff22b38d233d0a2a"
  },
  {
    "url": "utils/function.html",
    "revision": "13303668249fb8faf5eb0974b3e950ea"
  },
  {
    "url": "utils/regexp.html",
    "revision": "db91fa6712c64d1fbd5af37590aad7c0"
  },
  {
    "url": "vue/index.html",
    "revision": "ca326c3a8f4432716355c851ddc544f3"
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
