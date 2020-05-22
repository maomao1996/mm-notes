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
    "revision": "4ee33782bd8e7ae1229187796b121c9f"
  },
  {
    "url": "assets/css/0.styles.e3808d4c.css",
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
    "url": "assets/js/10.d5527948.js",
    "revision": "41b610632fb22e23a72ba7a60813ccf5"
  },
  {
    "url": "assets/js/11.4d9e5372.js",
    "revision": "22316d1ff96228cf89bfb54288b566ba"
  },
  {
    "url": "assets/js/12.a460e48a.js",
    "revision": "b964e7a759ca18b0931fca45e7bab0da"
  },
  {
    "url": "assets/js/13.f193ea4f.js",
    "revision": "dd11bf2d6f6366b87efc2c12210f479a"
  },
  {
    "url": "assets/js/14.0a360927.js",
    "revision": "deaf4b8862dcb7a097ea80bc8442e63d"
  },
  {
    "url": "assets/js/15.4d01a6b8.js",
    "revision": "61bdd4442a80b5f20928022914c08a96"
  },
  {
    "url": "assets/js/16.7bb54df1.js",
    "revision": "1581f2ab14402089789448e5448f74ab"
  },
  {
    "url": "assets/js/17.66307fa4.js",
    "revision": "dc3e22c9a15d32ab9d620c364f07bcd4"
  },
  {
    "url": "assets/js/18.8ef9e635.js",
    "revision": "487986682f4b21df6c30c4286392efc7"
  },
  {
    "url": "assets/js/19.30628153.js",
    "revision": "1384b46001b97b67409dd93a87fcdfb1"
  },
  {
    "url": "assets/js/2.66c6543e.js",
    "revision": "826779dce117630240123d987202e2e3"
  },
  {
    "url": "assets/js/20.99f300ca.js",
    "revision": "8a9355c0f6c9906c50e9b6ff4df96cb7"
  },
  {
    "url": "assets/js/21.983c8538.js",
    "revision": "9342398f6a036988c6e23b7976140b2f"
  },
  {
    "url": "assets/js/22.c0154d30.js",
    "revision": "a2c221dd2a643215373d1d6870532064"
  },
  {
    "url": "assets/js/23.125bd49c.js",
    "revision": "3bdf6e96add670e535e7684fc6d9a54e"
  },
  {
    "url": "assets/js/24.24f029bf.js",
    "revision": "5f9540b262bdafe63e420eab5945261e"
  },
  {
    "url": "assets/js/25.3e19f3aa.js",
    "revision": "05c9daf9ab3793c5f8604e102ce93c81"
  },
  {
    "url": "assets/js/3.cc50ac46.js",
    "revision": "8fe6f72f7435b88b6607d5d80322bf08"
  },
  {
    "url": "assets/js/4.9d016c8c.js",
    "revision": "971d2d1edc574a9759a4e374656fa038"
  },
  {
    "url": "assets/js/5.64443de1.js",
    "revision": "d7326ca9c4b067379db4ccbcd399f0c2"
  },
  {
    "url": "assets/js/6.d93b686c.js",
    "revision": "fef424a2a6729901fe70e65bf73bb8fd"
  },
  {
    "url": "assets/js/7.5e2c1f42.js",
    "revision": "cbd00b9f1106d3cf7dd29c10dba3f669"
  },
  {
    "url": "assets/js/8.52c00ad5.js",
    "revision": "50c47c93b19999f58e2c07b718124105"
  },
  {
    "url": "assets/js/9.3d70bca9.js",
    "revision": "e287ef2639795d6ca27e3897ae4c9d1f"
  },
  {
    "url": "assets/js/app.5170e51a.js",
    "revision": "3c14213ab22d4003c4fe82d9581ac0b5"
  },
  {
    "url": "css/index.html",
    "revision": "ebc969c109f4c46ae630b6b1b5b4791a"
  },
  {
    "url": "css/scss.html",
    "revision": "5ee69ebc1714b648582fd5fd41ead774"
  },
  {
    "url": "css/skill.html",
    "revision": "96d8f22abfc979460f4dc0d522bf8654"
  },
  {
    "url": "git/command.html",
    "revision": "2a661bdddcdb32567ebb766a0c3e6997"
  },
  {
    "url": "git/index.html",
    "revision": "d4a03ac924b024cf60a5ba285c05bdc1"
  },
  {
    "url": "index.html",
    "revision": "3effb5a69ee298843017c454b76b8f2a"
  },
  {
    "url": "issue/h5.html",
    "revision": "8a04325ca0bf17679eac96d3839ec8ee"
  },
  {
    "url": "issue/pc.html",
    "revision": "2384a130bf043f9fb27a39b83b9e2fa1"
  },
  {
    "url": "node/depend.html",
    "revision": "425ed562efe852c0f279d33d74a4bbad"
  },
  {
    "url": "node/npm.html",
    "revision": "7cb2bff8b1eb0f76a63db905f7c3fb87"
  },
  {
    "url": "software/browser.html",
    "revision": "4477149b25d0b50fcf5f2f36b96b25f8"
  },
  {
    "url": "software/mac.html",
    "revision": "d7579f63c57cc7817cff97bd7b66037d"
  },
  {
    "url": "software/vscode.html",
    "revision": "418e24ad504ee166411e25d005d0425d"
  },
  {
    "url": "software/webstorm.html",
    "revision": "8ac7f26af1c5a1b9b4385659a809047a"
  },
  {
    "url": "software/windows.html",
    "revision": "f8074233a0267040c6e9479fc60591c8"
  },
  {
    "url": "utils/function.html",
    "revision": "cb46c22998ecd1d08fbc1861f6d3c639"
  },
  {
    "url": "utils/regexp.html",
    "revision": "6f5305f57f99b97708185f3808088b22"
  },
  {
    "url": "vue/index.html",
    "revision": "cd2b6f02d3e4244436fa0cf86e8109dc"
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
