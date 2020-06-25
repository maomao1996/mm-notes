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
    "revision": "5dd1a15ccb75ae54d617ac708e3990f4"
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
    "url": "assets/js/19.c4cd8d21.js",
    "revision": "45bfa5e78230247cceab6983965f2d7b"
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
    "url": "assets/js/app.419768ea.js",
    "revision": "09f733a2410bdcdc044020d12d80185f"
  },
  {
    "url": "css/index.html",
    "revision": "1d18a5c2f66d81d52b50a3202499f2da"
  },
  {
    "url": "css/scss.html",
    "revision": "90488eedb539a96b7e2970917fe07de3"
  },
  {
    "url": "css/skill.html",
    "revision": "b948c406242f5e8a79fe7e6a15982dcb"
  },
  {
    "url": "git/command.html",
    "revision": "e37303bfda536ecdae52ef540e62a758"
  },
  {
    "url": "git/index.html",
    "revision": "1040c7bbf3dadab4b85c7b06b2f2c353"
  },
  {
    "url": "index.html",
    "revision": "aaba3d8ee7499a45c208936be25d47a7"
  },
  {
    "url": "issue/h5.html",
    "revision": "860204fe71a05bf25eed8b59eb8b6f19"
  },
  {
    "url": "issue/pc.html",
    "revision": "eaf81f62ab1c1996a5ded0046889fb0a"
  },
  {
    "url": "node/depend.html",
    "revision": "fa94912cf8df6bef29bcd3e4104c90fe"
  },
  {
    "url": "node/npm.html",
    "revision": "bfc025357d9939c03a48fbe653f89f4a"
  },
  {
    "url": "software/browser.html",
    "revision": "9390cdf69bff13a8f643f9fe8692e755"
  },
  {
    "url": "software/mac.html",
    "revision": "493979c4dd7700c382670e9be92736fc"
  },
  {
    "url": "software/vscode.html",
    "revision": "167dd7e9d0a75ee03c0a58247ea1e85c"
  },
  {
    "url": "software/webstorm.html",
    "revision": "307cd5b687c7ab4d2540f2247786f5b2"
  },
  {
    "url": "software/windows.html",
    "revision": "48ac3d34195d1e7a15db04883cbdb099"
  },
  {
    "url": "utils/function.html",
    "revision": "5f950e8327012370e0f86e8485983917"
  },
  {
    "url": "utils/regexp.html",
    "revision": "3b332f2e16c45135e707300275738eae"
  },
  {
    "url": "vue/index.html",
    "revision": "6e9641b08b9a4e4a924bf6e458a800ba"
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
