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
    "revision": "7409dd7e75db08cc76375ce4b0d8fc5c"
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
    "url": "assets/js/12.be0d9a9f.js",
    "revision": "85431d621b381077ee3bf13c014cb4bd"
  },
  {
    "url": "assets/js/13.46ffc2d0.js",
    "revision": "9be2834333b901111c6b86774a6c33aa"
  },
  {
    "url": "assets/js/14.b2b3e65d.js",
    "revision": "5de7242efad5595f7af0bd828fda466f"
  },
  {
    "url": "assets/js/15.8bf580b7.js",
    "revision": "3b66505bfaa684635c48e865201c133e"
  },
  {
    "url": "assets/js/16.179d23e1.js",
    "revision": "27a22e2ff7df89d4379a7ea760e0f6fc"
  },
  {
    "url": "assets/js/17.42d79347.js",
    "revision": "32ea3673f0702732c7f2018419ebd4e2"
  },
  {
    "url": "assets/js/18.14ea437e.js",
    "revision": "b2dead4f944d2d62ed7434e3de38ea6e"
  },
  {
    "url": "assets/js/19.87f75f74.js",
    "revision": "59ff01c6dbdfc5c244a18e2e829f3265"
  },
  {
    "url": "assets/js/2.d4d459be.js",
    "revision": "c2759538bf8be39bff270b9842707754"
  },
  {
    "url": "assets/js/20.6e70b398.js",
    "revision": "96929e9b9d48fa58ec6a794ebf48e070"
  },
  {
    "url": "assets/js/21.ea4f2f68.js",
    "revision": "5e686ba4881054405f7569dd594516b5"
  },
  {
    "url": "assets/js/22.48ba464f.js",
    "revision": "603d26748196932672c5b75c9d1804b3"
  },
  {
    "url": "assets/js/23.bdccb318.js",
    "revision": "d8bb0fc177331219c1b71e6f4f8fafd9"
  },
  {
    "url": "assets/js/24.9cb15766.js",
    "revision": "326dc5ea630d666acf7b4e3180cf5961"
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
    "url": "assets/js/28.8129c4e7.js",
    "revision": "da9a1014af0f48dd593e6007bf09fa64"
  },
  {
    "url": "assets/js/29.98921b04.js",
    "revision": "f6fac02b590df2a4ed8577030547590b"
  },
  {
    "url": "assets/js/3.d3f6c347.js",
    "revision": "a93621185237ac13440ed62674c8de62"
  },
  {
    "url": "assets/js/30.21d02e62.js",
    "revision": "45f6bd7937353297e1bcbb72d094ac87"
  },
  {
    "url": "assets/js/31.8b4e09db.js",
    "revision": "cc78bd4c74c38b4c5536619a8e709a62"
  },
  {
    "url": "assets/js/32.c737f9c8.js",
    "revision": "2190f1540555c29849c1e8207edef2a2"
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
    "url": "assets/js/7.1f7e9659.js",
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
    "url": "assets/js/app.0689dcc6.js",
    "revision": "db44faab59858123290fe1ad3dcb325d"
  },
  {
    "url": "css/index.html",
    "revision": "a85496d39d980e0117f6edd31b532129"
  },
  {
    "url": "css/scss.html",
    "revision": "16e5bdf4b322bf852c0f4eeebb37a384"
  },
  {
    "url": "css/skill.html",
    "revision": "17c20135527f0aec0f3eea7683c57665"
  },
  {
    "url": "git/command.html",
    "revision": "f8a28dc332f7de217475bdc66095f183"
  },
  {
    "url": "git/index.html",
    "revision": "1692b1f26d6cf026b8b4f678679829ec"
  },
  {
    "url": "index.html",
    "revision": "b6c1e9f15632b1bcdaa4309c060a2719"
  },
  {
    "url": "issue/h5.html",
    "revision": "2ae578f778b3bab5e08e564a2430f290"
  },
  {
    "url": "issue/pc.html",
    "revision": "c8380a5848448d6f3844f4a1cfaff12b"
  },
  {
    "url": "node/npm.html",
    "revision": "5900917228d292f49a13b896f4ec6d04"
  },
  {
    "url": "node/toolkit.html",
    "revision": "7d5976c8609d109a30867a7311279a4e"
  },
  {
    "url": "online-tools/bookmark-scripts.html",
    "revision": "5ba72b1a7e610a65a4561702d6329319"
  },
  {
    "url": "online-tools/index.html",
    "revision": "f3eaa448aad20f4a39f174408cadfc54"
  },
  {
    "url": "software/browser.html",
    "revision": "e4de2d1c5b9847149f944687b86a91cc"
  },
  {
    "url": "software/cross-platform.html",
    "revision": "ae464bcf1a81ef84a09d03657df70189"
  },
  {
    "url": "software/mac.html",
    "revision": "7d16a2b73efcbc65eb1910aa0a88c8b6"
  },
  {
    "url": "software/vscode.html",
    "revision": "0592a2058c597442bd6a1c1dbc03f672"
  },
  {
    "url": "software/webstorm.html",
    "revision": "1eee35c07ac99fe7d9b71b24aff278ec"
  },
  {
    "url": "software/windows.html",
    "revision": "5660c73b9a22c018463b1458936389e7"
  },
  {
    "url": "software/zsh.html",
    "revision": "d6e976e20c981c6b8cde0d17e5a53951"
  },
  {
    "url": "utils/function.html",
    "revision": "9756da3f09ad6438e42bb22eff6b31bb"
  },
  {
    "url": "utils/library.html",
    "revision": "e9c24468c731f668ec0be429e6057d32"
  },
  {
    "url": "utils/regexp.html",
    "revision": "d87008b11967c68486d3432c8dd1b623"
  },
  {
    "url": "vue/index.html",
    "revision": "29a0105d1c4dc5925f5c9ba0177c5e54"
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
