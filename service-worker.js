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
    "revision": "989df456fafc93b38280207b8d8e6563"
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
    "url": "assets/js/16.73812152.js",
    "revision": "7a52ab3065c5b9602bf45aff1d944552"
  },
  {
    "url": "assets/js/17.f3173b43.js",
    "revision": "95ccd7bce5a85af9eb5808fc99cb588a"
  },
  {
    "url": "assets/js/18.25de88bb.js",
    "revision": "a37883b26c9d9785a88e5ea9dd7964cf"
  },
  {
    "url": "assets/js/19.85e294d6.js",
    "revision": "a1a15394350537e5c0054fb9df4fd34e"
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
    "url": "assets/js/21.7395c68b.js",
    "revision": "77b766edeb527c107f7f8a3627ee4c63"
  },
  {
    "url": "assets/js/22.2338cd7c.js",
    "revision": "de67aa47ad7ca7a6b4286e7315248892"
  },
  {
    "url": "assets/js/23.36ab1f7d.js",
    "revision": "5efbe86256497fcd3a7c864e60e9fc91"
  },
  {
    "url": "assets/js/24.94a02eb2.js",
    "revision": "742bcc4c9ed52764e7a7e346c03e1bb0"
  },
  {
    "url": "assets/js/25.f3919237.js",
    "revision": "e3f417a770db168f98c8421ea6c51601"
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
    "url": "assets/js/5.9e3d97e8.js",
    "revision": "6e925e478f93e0dc3de243a8eec84de7"
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
    "url": "assets/js/app.374133b9.js",
    "revision": "d401e7dbcc6ef8f7a7651d4710532798"
  },
  {
    "url": "css/index.html",
    "revision": "bc8ffed07cc7e686f74546e6c9188b77"
  },
  {
    "url": "css/scss.html",
    "revision": "b4eeeeb1af9c2673f5fc5e48d492e297"
  },
  {
    "url": "css/skill.html",
    "revision": "09cef0713ac7dc1b0ce4696c2ee0e732"
  },
  {
    "url": "git/command.html",
    "revision": "8b80a07cefe4cebfb25780208a7b5417"
  },
  {
    "url": "git/index.html",
    "revision": "576820f5d2fd7bc0d7e690031dee4406"
  },
  {
    "url": "index.html",
    "revision": "f2c5785516fbe102eb1d62bd4d436336"
  },
  {
    "url": "issue/h5.html",
    "revision": "e9c743bfe6766a3fbfa362e9027e4cf7"
  },
  {
    "url": "issue/pc.html",
    "revision": "11342898096c1528f345bfff4e45acea"
  },
  {
    "url": "node/depend.html",
    "revision": "6bac84e65150fd0edbd7a1790c38576c"
  },
  {
    "url": "node/npm.html",
    "revision": "baae459538221b2fb478a0e5b6a69065"
  },
  {
    "url": "software/browser.html",
    "revision": "1d714763c25bd3ff79b657197c6a0ea1"
  },
  {
    "url": "software/mac.html",
    "revision": "75fe24d93f79c947e18d6e59ccc2856a"
  },
  {
    "url": "software/vscode.html",
    "revision": "31bc67121fa20afaadab75749c2f83e4"
  },
  {
    "url": "software/webstorm.html",
    "revision": "39b020bb458061fd3dba1c4ee660b142"
  },
  {
    "url": "software/windows.html",
    "revision": "fc0227b0f5ddfc558f40db3b8275184f"
  },
  {
    "url": "utils/function.html",
    "revision": "631030011bd842a6241a2a52c7be91b8"
  },
  {
    "url": "utils/regexp.html",
    "revision": "0386f1538ab580f865efe2db7cf017f8"
  },
  {
    "url": "vue/index.html",
    "revision": "6bd5348dbaea53a5554b7ea9254b7e99"
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
