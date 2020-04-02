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
    "url": "assets/css/0.styles.5b1cc798.css",
    "revision": "7d15ce407242318b6536b40c29999060"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.c22332eb.js",
    "revision": "cefbfad8d638ac4318b5d77441bd2ba9"
  },
  {
    "url": "assets/js/11.e401daf2.js",
    "revision": "b9ec2d1aa78d46e1a1cf33d77cf42491"
  },
  {
    "url": "assets/js/12.538c35d9.js",
    "revision": "b487c75e23b7bd1ee1c7477a4822c467"
  },
  {
    "url": "assets/js/13.1f32918a.js",
    "revision": "b920116c562b25f828fb0494cb963897"
  },
  {
    "url": "assets/js/14.66f36f84.js",
    "revision": "76292f8aa77003f75da8bbb1a414a575"
  },
  {
    "url": "assets/js/15.5aab301f.js",
    "revision": "33a8b562718ef302af547fe393b8056b"
  },
  {
    "url": "assets/js/16.c1fa6f11.js",
    "revision": "8943203b3fb218a468e72fa75398ba78"
  },
  {
    "url": "assets/js/17.296a70f4.js",
    "revision": "e4962b327e06e21bda9728bb7540764a"
  },
  {
    "url": "assets/js/18.14d93141.js",
    "revision": "28068c6d3a65301ef567b35e03d692cc"
  },
  {
    "url": "assets/js/19.1771b6ea.js",
    "revision": "196457e377ab82171e221b4fbafa1d88"
  },
  {
    "url": "assets/js/2.1cedc0ae.js",
    "revision": "5a22d8e4077be14c0b226603c34a9dbe"
  },
  {
    "url": "assets/js/20.bfa67bfd.js",
    "revision": "549a3a7c59bf256478fec1f1a036c52a"
  },
  {
    "url": "assets/js/21.f1b3d0bd.js",
    "revision": "2ac17a26685f56f503c3362e844586cd"
  },
  {
    "url": "assets/js/22.3d47635f.js",
    "revision": "24f7e7009d977cf984eea4fb09e9607d"
  },
  {
    "url": "assets/js/23.e0bd6f25.js",
    "revision": "f7110ff53fdbfd1035e90ea6d2cfc899"
  },
  {
    "url": "assets/js/3.a89599f7.js",
    "revision": "c2c2896a1212993394e0f0694d3e2cbf"
  },
  {
    "url": "assets/js/4.4cb7bc11.js",
    "revision": "818da26846d3ffae2fd909561618fcf3"
  },
  {
    "url": "assets/js/5.ed44447f.js",
    "revision": "41341eeaa13188a42cd8ed3442e632c3"
  },
  {
    "url": "assets/js/6.a28e4c5a.js",
    "revision": "86516d353bbf66dfa3b9d39e5bf86b03"
  },
  {
    "url": "assets/js/7.59cd57bd.js",
    "revision": "d26ae206e772a9ec77f971b8e4f8c260"
  },
  {
    "url": "assets/js/8.9a9d633d.js",
    "revision": "25dc83bad22e901fc77ef783da212fd3"
  },
  {
    "url": "assets/js/9.1939733e.js",
    "revision": "7d451fd4d057eda2886fa27bf79f41f8"
  },
  {
    "url": "assets/js/app.b75e6342.js",
    "revision": "babd1eacc959dd39f54aec9712d55bf1"
  },
  {
    "url": "css/index.html",
    "revision": "ff85b6c6b9ca8e7d62b28ededc21d980"
  },
  {
    "url": "css/scss.html",
    "revision": "b774dd080745d02099243201b85cef93"
  },
  {
    "url": "css/skill.html",
    "revision": "a1a5d03901a6764ed58e9ad57f5dff5b"
  },
  {
    "url": "git/command.html",
    "revision": "da5685fe5d658e01d3b88da6430018f3"
  },
  {
    "url": "git/index.html",
    "revision": "66f612aa0f16b6e1e4151f17477f5f87"
  },
  {
    "url": "index.html",
    "revision": "b33b8eda5c3e7885d6662cb36ec18b8c"
  },
  {
    "url": "node/depend.html",
    "revision": "4cbc3e8e4201e7b87afc3d9c6e271802"
  },
  {
    "url": "node/npm.html",
    "revision": "1ed3367db3d3ce6fd82aec4f7687a417"
  },
  {
    "url": "software/browser.html",
    "revision": "fa3cb4907b5eb8c50fa3d76e3eb3572c"
  },
  {
    "url": "software/mac.html",
    "revision": "ea7a3a9872d15fed53183905cadbcb90"
  },
  {
    "url": "software/vscode.html",
    "revision": "ead89bb900fdc460a61d23e44e0f99c2"
  },
  {
    "url": "software/windows.html",
    "revision": "99e7d36564f3a3875429967687e1f12c"
  },
  {
    "url": "utils/function.html",
    "revision": "618d500b16f68fcc3f9afe114954f2b1"
  },
  {
    "url": "utils/regexp.html",
    "revision": "6209dee19709d169c58770c24417be35"
  },
  {
    "url": "vue/index.html",
    "revision": "7fef5bf2de58b42b5be384b8499e2067"
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
