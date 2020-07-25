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
    "revision": "22a5f778ae3ab544c8e412666724d91d"
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
    "url": "assets/js/16.0da5e330.js",
    "revision": "9387839d8d4a441d4b946c762b88e89a"
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
    "url": "assets/js/app.1e92959a.js",
    "revision": "d71926d92dc286c2411cd64da11a3d34"
  },
  {
    "url": "css/index.html",
    "revision": "d5aa0ff9a3873afdb080f6411795a34f"
  },
  {
    "url": "css/scss.html",
    "revision": "3aea2db01c2ff0ffea82f4518b2d2e06"
  },
  {
    "url": "css/skill.html",
    "revision": "f53d00d890c54e32e673e2fb8179cb22"
  },
  {
    "url": "git/command.html",
    "revision": "545fe83ebf67bfda9b248bc2e8682531"
  },
  {
    "url": "git/index.html",
    "revision": "d44794248a191228393eaff4c8f1758c"
  },
  {
    "url": "index.html",
    "revision": "45176581a5b02d6c20894644b99a213e"
  },
  {
    "url": "issue/h5.html",
    "revision": "02470c9ace11a37b9707b47ea254f1a8"
  },
  {
    "url": "issue/pc.html",
    "revision": "e9847b99f04795e797de005a66760b1b"
  },
  {
    "url": "node/npm.html",
    "revision": "fb2776a07abdca9326bcd3d455ba7d00"
  },
  {
    "url": "node/toolkit.html",
    "revision": "077f851943ee582eca47dbcfbae866ac"
  },
  {
    "url": "software/browser.html",
    "revision": "dd373f3ef85eaee44efa2495d22cd799"
  },
  {
    "url": "software/mac.html",
    "revision": "9fbb70c2c452ae96d47c719480c52897"
  },
  {
    "url": "software/vscode.html",
    "revision": "0043cdbb21a5ff8277ec11fb2d7c80e6"
  },
  {
    "url": "software/webstorm.html",
    "revision": "0c0279582ee1145c4f92e02e4957e19f"
  },
  {
    "url": "software/windows.html",
    "revision": "bee326fd795b6f0859e0ad7632d28789"
  },
  {
    "url": "software/zsh.html",
    "revision": "98eb8313af8a449ad03bdd10ba97b456"
  },
  {
    "url": "utils/function.html",
    "revision": "5b14ba32e4147362b43e2048a6fa1860"
  },
  {
    "url": "utils/regexp.html",
    "revision": "081190989c131f23430d945ced2cc7ec"
  },
  {
    "url": "vue/index.html",
    "revision": "d7ef86b7355861b7255b1de9ecc2eae6"
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
