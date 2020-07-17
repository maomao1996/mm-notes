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
    "revision": "580b4c9450cd71b75556f27516b27818"
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
    "url": "assets/js/18.25de88bb.js",
    "revision": "a37883b26c9d9785a88e5ea9dd7964cf"
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
    "url": "assets/js/20.4ea0a8a0.js",
    "revision": "e5670778215c39ddf9e68741fa7d43ce"
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
    "url": "assets/js/app.df33acd9.js",
    "revision": "dc03cf9a4648dd07b25601947e7b23f2"
  },
  {
    "url": "css/index.html",
    "revision": "3da26b88a39c0089b45c0696065d72fe"
  },
  {
    "url": "css/scss.html",
    "revision": "fdb976f6b3e5f27caef4448aa25fec5a"
  },
  {
    "url": "css/skill.html",
    "revision": "022fad53ee551365d0d495dbaadb0378"
  },
  {
    "url": "git/command.html",
    "revision": "5f3a7ca34d3bf66b7139b2b3acc73038"
  },
  {
    "url": "git/index.html",
    "revision": "a3faf184ae4a6304719ee1194e83d257"
  },
  {
    "url": "index.html",
    "revision": "8a2bd39dc7cbcb66686ec32a44468a88"
  },
  {
    "url": "issue/h5.html",
    "revision": "b807e7e7d0ebec506c042b8f884d72c0"
  },
  {
    "url": "issue/pc.html",
    "revision": "2ed401dde3e71a6c673624bb0ed9d5bc"
  },
  {
    "url": "node/npm.html",
    "revision": "ceae2ed05cb3f389d1f316bb71a34659"
  },
  {
    "url": "node/toolkit.html",
    "revision": "253176ba4a5ec33e79634a8db5163ab7"
  },
  {
    "url": "software/browser.html",
    "revision": "a294bb42c2d6584ef250aa5699ea9a68"
  },
  {
    "url": "software/mac.html",
    "revision": "e66729d8c127bd93febb448abca6653e"
  },
  {
    "url": "software/vscode.html",
    "revision": "816467923ac4224d68f3fb6d0c788f55"
  },
  {
    "url": "software/webstorm.html",
    "revision": "fd9f421f9727f8c1f6e1c5f6a4dbfba9"
  },
  {
    "url": "software/windows.html",
    "revision": "1a58b688949da76942c5f67bdb4b125d"
  },
  {
    "url": "software/zsh.html",
    "revision": "9923ff0bf43f874f0c93e3f85349e9d9"
  },
  {
    "url": "utils/function.html",
    "revision": "7431550abc33304c51ed67b8135a8660"
  },
  {
    "url": "utils/regexp.html",
    "revision": "31a986eb50495a420b3beeea7ad915b4"
  },
  {
    "url": "vue/index.html",
    "revision": "4a31ba1cccf07f27b22eec3c54004079"
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
