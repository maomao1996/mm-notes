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
    "revision": "d0075671b603631bacd529ce2990c65d"
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
    "url": "assets/js/10.ee402429.js",
    "revision": "0fbbd58568b321861bf679523cebe338"
  },
  {
    "url": "assets/js/11.5ed1a3cb.js",
    "revision": "77823e9cacfee01398692ec63b76aa75"
  },
  {
    "url": "assets/js/12.4f697739.js",
    "revision": "be75caee51cbcd7287629cdbb6f7800a"
  },
  {
    "url": "assets/js/13.5f312216.js",
    "revision": "5d0a1c2e9f4e6d9ef47252beac5c8b2e"
  },
  {
    "url": "assets/js/14.cbf01481.js",
    "revision": "ed737521f8ca08e294ca63ad4d449ac6"
  },
  {
    "url": "assets/js/15.43072c8a.js",
    "revision": "1ab19f046d7e57cadc1e95dd5d90e649"
  },
  {
    "url": "assets/js/16.b26defc9.js",
    "revision": "2a495851ebd75e7c2c5363a611670551"
  },
  {
    "url": "assets/js/17.2d0e8bd1.js",
    "revision": "1330bb972d5fd3a97170ab507e7df939"
  },
  {
    "url": "assets/js/18.46f03d31.js",
    "revision": "7cf9bf58cf238f94f1708f2ba9fb24b5"
  },
  {
    "url": "assets/js/19.b1679d6e.js",
    "revision": "b3a55237157b9ddcc2177ee8b5bae738"
  },
  {
    "url": "assets/js/2.007004f9.js",
    "revision": "bcc2b93c3a9b2ebf882945287dbcd801"
  },
  {
    "url": "assets/js/20.b7b292c5.js",
    "revision": "a10e9a290a5ebef74a3583a9a830cfa1"
  },
  {
    "url": "assets/js/21.7286b3c5.js",
    "revision": "7c78a5023e2f3e8c7722f7dc1b8fe670"
  },
  {
    "url": "assets/js/22.f9d4916c.js",
    "revision": "0bbdf78d559501e462e78d7855b995b7"
  },
  {
    "url": "assets/js/23.6634d3e5.js",
    "revision": "370515a615421cd24596f0843467a401"
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
    "url": "assets/js/6.a16da0ee.js",
    "revision": "d6e3c3e114f9b119e925d46576651a50"
  },
  {
    "url": "assets/js/7.faafe814.js",
    "revision": "2cbe1d4b4f9eb040cf3595cb9feb53c3"
  },
  {
    "url": "assets/js/8.aedf4097.js",
    "revision": "c4f3192bd39177c16c26c7d95f9d53fd"
  },
  {
    "url": "assets/js/9.9aef0647.js",
    "revision": "eb26526631bb37d63d01040901e74816"
  },
  {
    "url": "assets/js/app.1be024c0.js",
    "revision": "b636d36578dbc86dd65438b3f0a01489"
  },
  {
    "url": "css/index.html",
    "revision": "3a369829b2c65d9d5e29eae7da73d6ae"
  },
  {
    "url": "css/scss.html",
    "revision": "e9a831369d3e3224aa6f769f6fad5ac0"
  },
  {
    "url": "css/skill.html",
    "revision": "8d8f4f840352bb3cb2a19272210473d7"
  },
  {
    "url": "git/command.html",
    "revision": "59a02f0952f0f9a6d59ddc3199a5654c"
  },
  {
    "url": "git/index.html",
    "revision": "5c40eb604035622b390a6b762ca32b61"
  },
  {
    "url": "index.html",
    "revision": "a5fa97ebb8e507ff58ff7ec971b37ca8"
  },
  {
    "url": "issue/h5.html",
    "revision": "81cf9179d1649ded60210cd3646988ad"
  },
  {
    "url": "issue/pc.html",
    "revision": "cff82a521044139972d2f005ee75eef8"
  },
  {
    "url": "node/npm.html",
    "revision": "dcd6ced582fb5050da79efcc1f4e697a"
  },
  {
    "url": "node/toolkit.html",
    "revision": "00e7c1a0d9c463d1e082d266b45944a0"
  },
  {
    "url": "software/browser.html",
    "revision": "bbceeb94767cca7caba600a19dd6a734"
  },
  {
    "url": "software/mac.html",
    "revision": "1596e38cc7887648a8ecffe92fa5fcc9"
  },
  {
    "url": "software/vscode.html",
    "revision": "3fbb890ad6c7145cf1f38d2bd3d80df4"
  },
  {
    "url": "software/webstorm.html",
    "revision": "740190a4b9085fd3bef964086e19d141"
  },
  {
    "url": "software/windows.html",
    "revision": "40acde4a4d368a806b2d214a5cd78fbc"
  },
  {
    "url": "software/zsh.html",
    "revision": "a246081104193bda4bcaff957441192f"
  },
  {
    "url": "utils/function.html",
    "revision": "d47d621e4c83958916084054462836d5"
  },
  {
    "url": "utils/regexp.html",
    "revision": "7f599b4621ff5b339fa1ed3a52759abf"
  },
  {
    "url": "vue/index.html",
    "revision": "65e89efd6690f0f00fd73ba26afe06bd"
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
