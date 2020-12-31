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
    "revision": "8d21e302d4f4dadb6c18bb48f7ee5f97"
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
    "url": "assets/js/2.f4777691.js",
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
    "url": "assets/js/25.04db5b14.js",
    "revision": "d4f24b2ff6e30de9ae66efbefdbb9898"
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
    "url": "assets/js/app.3282cdc6.js",
    "revision": "c6683a2b1862cec203515ba68f240bb4"
  },
  {
    "url": "css/index.html",
    "revision": "7798f0ff4644e5b888591943e17b00cb"
  },
  {
    "url": "css/scss.html",
    "revision": "baa805a03cefc18686ce298a4f0b4887"
  },
  {
    "url": "css/skill.html",
    "revision": "b8055e8e3be818cb96f4319b39d870f8"
  },
  {
    "url": "git/command.html",
    "revision": "6c8817899712356859e4c7fae1e2479f"
  },
  {
    "url": "git/index.html",
    "revision": "d8e3e452bec7f9bd95ff22fb029ebafe"
  },
  {
    "url": "index.html",
    "revision": "acf7ee5d13c8d6fff82df4e0dece8047"
  },
  {
    "url": "issue/h5.html",
    "revision": "e2dab43d9fb2763662794fddda14ea7f"
  },
  {
    "url": "issue/pc.html",
    "revision": "a34eb8cad57e5dab3b3c7d4689c523c8"
  },
  {
    "url": "node/npm.html",
    "revision": "41641edf821977c125572c49c4b08f2e"
  },
  {
    "url": "node/toolkit.html",
    "revision": "5c96ccfa2d4da7ba1ebe9e977af4c07f"
  },
  {
    "url": "online-tools/bookmark-scripts.html",
    "revision": "91709e633779ee96f5c131dcfe3af4d7"
  },
  {
    "url": "online-tools/index.html",
    "revision": "576cf1f80cda127f6ae425b80c8f69a5"
  },
  {
    "url": "software/browser.html",
    "revision": "4b1d41d338b14d14112393ebbe289fcb"
  },
  {
    "url": "software/cross-platform.html",
    "revision": "b3f1d18e94aa9253a38b475e926d8d4c"
  },
  {
    "url": "software/mac.html",
    "revision": "3f824c7a069bca5479783a69802f1716"
  },
  {
    "url": "software/vscode.html",
    "revision": "825fdb65592d163652e71281e642a1bd"
  },
  {
    "url": "software/webstorm.html",
    "revision": "b9a908a8eabe13f3be82e6350eeeae23"
  },
  {
    "url": "software/windows.html",
    "revision": "b5e5cd54aa13b11f7156aa1635a1d3df"
  },
  {
    "url": "software/zsh.html",
    "revision": "aee64d5fd76bf69f9e3ff5ba47a4129e"
  },
  {
    "url": "utils/function.html",
    "revision": "a677a0d743f2d50e876bc76d12aacde3"
  },
  {
    "url": "utils/library.html",
    "revision": "e6a298b745a24b4154a280a19a9dd51e"
  },
  {
    "url": "utils/regexp.html",
    "revision": "4aba356654cffe787fa4c82e7e584788"
  },
  {
    "url": "vue/index.html",
    "revision": "2531986601b70015fe79d869e1c4e254"
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
