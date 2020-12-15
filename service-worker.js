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
    "revision": "43b58a57ebbee5ccf8897cc89decbc8e"
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
    "url": "assets/js/20.bf7e1275.js",
    "revision": "74addbe3ed173710f9757d5f242ead0a"
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
    "url": "assets/js/29.204059ce.js",
    "revision": "b96d12e21b15a8d067702771dd72f97d"
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
    "url": "assets/js/app.1445ecc7.js",
    "revision": "b178916895b1dc297adb9237f6db700b"
  },
  {
    "url": "css/index.html",
    "revision": "08855c2ed0e6a85db1d5934a3e6654cd"
  },
  {
    "url": "css/scss.html",
    "revision": "662a8be2bcf7fa2127f5ff3be045ef10"
  },
  {
    "url": "css/skill.html",
    "revision": "6ad795a24764d40f9aba54e387755ed2"
  },
  {
    "url": "git/command.html",
    "revision": "69e555eb39bbf6b60ccdd7daab6a2aec"
  },
  {
    "url": "git/index.html",
    "revision": "06da008ba30a4022edc028d8faba68eb"
  },
  {
    "url": "index.html",
    "revision": "31f79876e376d6c9323dbca47259ac9e"
  },
  {
    "url": "issue/h5.html",
    "revision": "599fd1595df7ad5871bcd2459d7b8a42"
  },
  {
    "url": "issue/pc.html",
    "revision": "d3352bb3e0137ee3f7cd5a461a73be5e"
  },
  {
    "url": "node/npm.html",
    "revision": "85e86aa21c8b66a6a554bb3807d9738e"
  },
  {
    "url": "node/toolkit.html",
    "revision": "12a52e747456324d3cc820896e1e2f0d"
  },
  {
    "url": "online-tools/bookmark-scripts.html",
    "revision": "b28f37430d0a4d907d3dede8638b0329"
  },
  {
    "url": "online-tools/index.html",
    "revision": "c68af88e90c620aabc766d74e3a9f077"
  },
  {
    "url": "software/browser.html",
    "revision": "f4c29ab829da8c9479e7b1b49dbf34d1"
  },
  {
    "url": "software/cross-platform.html",
    "revision": "b091001d9ec1f1a2c564a7bd68f05ed8"
  },
  {
    "url": "software/mac.html",
    "revision": "e32c14beeab7c139bd861a271a625dbc"
  },
  {
    "url": "software/vscode.html",
    "revision": "bc13b47927382507006b5e10cd1b9929"
  },
  {
    "url": "software/webstorm.html",
    "revision": "c5879e7289fe15eea9e9a7f31ea2dd5d"
  },
  {
    "url": "software/windows.html",
    "revision": "339faead7f5cb3f5f96be1cb941888d2"
  },
  {
    "url": "software/zsh.html",
    "revision": "8bce5df552b5a5200d36f4586a69dd9a"
  },
  {
    "url": "utils/function.html",
    "revision": "8c782940aab3f082be526c806f30e4dd"
  },
  {
    "url": "utils/library.html",
    "revision": "ea2ea0453d07b1126b3758f6c781c1fc"
  },
  {
    "url": "utils/regexp.html",
    "revision": "aa2e5ffeb0590c1f9c42e7c084d6cb3a"
  },
  {
    "url": "vue/index.html",
    "revision": "6021e51d3246311094d134a83d6eb0fc"
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
