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
    "revision": "9f951915bf1dd50acf9db13f3ac4aa07"
  },
  {
    "url": "assets/css/0.styles.8b6df087.css",
    "revision": "7d254739aa9e3b7e5779390276977473"
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
    "url": "assets/js/10.e70814b6.js",
    "revision": "cc6b2c4900faab393a2b5b5b35982940"
  },
  {
    "url": "assets/js/11.72080b8b.js",
    "revision": "3218c1e416640532499f2e426c31b854"
  },
  {
    "url": "assets/js/12.aa03fe96.js",
    "revision": "2cb958b99e558bf830a4b2feec5cd674"
  },
  {
    "url": "assets/js/13.dba505e0.js",
    "revision": "c3dc6b67c46671c4fa52326d4d09c3ce"
  },
  {
    "url": "assets/js/14.95cc2663.js",
    "revision": "df54b20b25a606ef782c8fae1f6861b1"
  },
  {
    "url": "assets/js/15.dbc48149.js",
    "revision": "b70c8412b10b0f552c49796438b6e4f8"
  },
  {
    "url": "assets/js/16.fd161286.js",
    "revision": "54531fc733505482865ff17c69619b9b"
  },
  {
    "url": "assets/js/17.a32ef636.js",
    "revision": "4ec821b5a01419d887fb833aea0a13f6"
  },
  {
    "url": "assets/js/18.d2b1a118.js",
    "revision": "e509d425c029088f48f7b940e7646a98"
  },
  {
    "url": "assets/js/19.69341b68.js",
    "revision": "980f6824818efc6c8c5db69b41584d28"
  },
  {
    "url": "assets/js/2.f4777691.js",
    "revision": "c2759538bf8be39bff270b9842707754"
  },
  {
    "url": "assets/js/20.261bebb6.js",
    "revision": "f36a61cf64aaa224ba45931b6d7555da"
  },
  {
    "url": "assets/js/21.4d4c085f.js",
    "revision": "b8b5c7ea3e2f821b095851435da7a606"
  },
  {
    "url": "assets/js/22.0647ac35.js",
    "revision": "8b84d32bcb3cf47f64cb5acae2dd8097"
  },
  {
    "url": "assets/js/23.8b19393d.js",
    "revision": "72ffe43a96e6c0871b144ffae14d2092"
  },
  {
    "url": "assets/js/24.2b5eda4c.js",
    "revision": "64819e5c8aef65d3341ebdf1cb8bd93f"
  },
  {
    "url": "assets/js/25.15b23695.js",
    "revision": "51006e8191da8e7073c9acd1a58e284c"
  },
  {
    "url": "assets/js/26.7abe3f3f.js",
    "revision": "9d4bb100251a6b45cf46c4284143dfa1"
  },
  {
    "url": "assets/js/27.994ee403.js",
    "revision": "5802ea83c941f58ca4563d6321cb7a87"
  },
  {
    "url": "assets/js/28.3a4d1130.js",
    "revision": "ccb120f8390e3660d9e82eb65dbdc84b"
  },
  {
    "url": "assets/js/29.204059ce.js",
    "revision": "b96d12e21b15a8d067702771dd72f97d"
  },
  {
    "url": "assets/js/3.12ddedc3.js",
    "revision": "a93621185237ac13440ed62674c8de62"
  },
  {
    "url": "assets/js/30.99f1643b.js",
    "revision": "2d5edde052b36a9b25e537126c724e35"
  },
  {
    "url": "assets/js/31.8b4e09db.js",
    "revision": "cc78bd4c74c38b4c5536619a8e709a62"
  },
  {
    "url": "assets/js/32.f27f0fdc.js",
    "revision": "36afc37ee619e2876bb148fcfe5b7a25"
  },
  {
    "url": "assets/js/4.e5a67cfd.js",
    "revision": "3ad2841f6191dde333764db55da97a48"
  },
  {
    "url": "assets/js/5.c3f75469.js",
    "revision": "4f1a98c057eddb191464666bd5686e5f"
  },
  {
    "url": "assets/js/6.17c885dc.js",
    "revision": "38f69538fd26cf078874a7ef35a6395b"
  },
  {
    "url": "assets/js/7.0a1b99ca.js",
    "revision": "d7a32040a27be88cc4a25075b8fc4817"
  },
  {
    "url": "assets/js/8.39576667.js",
    "revision": "6bc3cab36ab75a1656223d20e375d443"
  },
  {
    "url": "assets/js/9.0b31ea69.js",
    "revision": "3721afe1a9836741e2d3aedb3580c7ea"
  },
  {
    "url": "assets/js/app.653d63b5.js",
    "revision": "6e4f1750cf37abd8bbb9c3ca9b53cb34"
  },
  {
    "url": "css/index.html",
    "revision": "8017a579ef7086b15a5cc3442a05c7b3"
  },
  {
    "url": "css/scss.html",
    "revision": "ef12bf9383470de09ad63dfbe6753a54"
  },
  {
    "url": "css/skill.html",
    "revision": "90229e9bb258fd1690c7b49cc80cee27"
  },
  {
    "url": "git/command.html",
    "revision": "4a463035d5dc003f0e14a12b7c553c54"
  },
  {
    "url": "git/index.html",
    "revision": "83c3a059f5a721c3190cac4c7aabeffd"
  },
  {
    "url": "index.html",
    "revision": "ac8bf51c301bf09fa0a3fb4ca3d35a83"
  },
  {
    "url": "issue/h5.html",
    "revision": "cb6001fef128044a0a1ca139ac295c65"
  },
  {
    "url": "issue/pc.html",
    "revision": "52a4608de2accfd2fa9cb89f69b3eed0"
  },
  {
    "url": "node/npm.html",
    "revision": "41a3d1c4f0db03231303762eb091107b"
  },
  {
    "url": "node/toolkit.html",
    "revision": "f4e48a5e339907fbccbb9bfc8a722fef"
  },
  {
    "url": "online-tools/bookmark-scripts.html",
    "revision": "280bfaef4879159b94b642e5888ff928"
  },
  {
    "url": "online-tools/index.html",
    "revision": "eda3faf5c978efd62e2d4adf9d8f1c98"
  },
  {
    "url": "software/browser.html",
    "revision": "1b502771f8483b2c08d308735339ed2e"
  },
  {
    "url": "software/cross-platform.html",
    "revision": "d4dea48984442f312a4866f8da954c47"
  },
  {
    "url": "software/mac.html",
    "revision": "1fb35a0c073d7cdd527c159510815d16"
  },
  {
    "url": "software/vscode.html",
    "revision": "066f0de0ffe778687b6521476ab29d1f"
  },
  {
    "url": "software/webstorm.html",
    "revision": "c7291d60f0985643c97414f7bf38ab3a"
  },
  {
    "url": "software/windows.html",
    "revision": "99754399770e5eaa253771d62ce523d2"
  },
  {
    "url": "software/zsh.html",
    "revision": "86873c09b75953de7e9c75ed28d7a1c0"
  },
  {
    "url": "utils/function.html",
    "revision": "9b986516e4ab939a5ba69da53cb3f182"
  },
  {
    "url": "utils/library.html",
    "revision": "54fa21495ae9d4300321edfabc6c4bc4"
  },
  {
    "url": "utils/regexp.html",
    "revision": "192037be1f91b4e09d2f1b8f2171da82"
  },
  {
    "url": "vue/index.html",
    "revision": "6090a649ec0915019d4ee093db03d25a"
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
