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
    "revision": "a703bbd5cf18746166c98d45ec058d01"
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
    "url": "assets/js/29.4210bbf3.js",
    "revision": "3739e36bd4a80ee338d008a3e1e8b599"
  },
  {
    "url": "assets/js/3.d3f6c347.js",
    "revision": "a93621185237ac13440ed62674c8de62"
  },
  {
    "url": "assets/js/30.835fee74.js",
    "revision": "39cc6caf951ecf0b3fbad70380eaff47"
  },
  {
    "url": "assets/js/31.c5c4067d.js",
    "revision": "cc6d37cde2e1583467e71dd9113ad2bc"
  },
  {
    "url": "assets/js/4.e5a67cfd.js",
    "revision": "3ad2841f6191dde333764db55da97a48"
  },
  {
    "url": "assets/js/5.6eab1d29.js",
    "revision": "db03a9ed3d7a68b0d3abb050a8f643de"
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
    "url": "assets/js/app.b4cb607e.js",
    "revision": "cabb51591e8bcf94220315e66832cf44"
  },
  {
    "url": "css/index.html",
    "revision": "0946e501e56a83807f726ebb4af36e0e"
  },
  {
    "url": "css/scss.html",
    "revision": "67e639b30f546141f672923d38d51f8b"
  },
  {
    "url": "css/skill.html",
    "revision": "996c1de7833b191cca49502abf2bca18"
  },
  {
    "url": "git/command.html",
    "revision": "57cd78a8c2ff6ac2bbf34771628630bf"
  },
  {
    "url": "git/index.html",
    "revision": "3b3808dcac68dee0a6ea6de00130c7e1"
  },
  {
    "url": "index.html",
    "revision": "d31ffc6e9b13a7c838140dd5809d8136"
  },
  {
    "url": "issue/h5.html",
    "revision": "3ebd1777c9cbc33d1bfcfbe6eba9833b"
  },
  {
    "url": "issue/pc.html",
    "revision": "fbd4052ea6b7e59cd2a343c2deea0acf"
  },
  {
    "url": "node/npm.html",
    "revision": "1c6ba3b9e129713a4a72dd09bb3f5124"
  },
  {
    "url": "node/toolkit.html",
    "revision": "f16cd6fd78043e7ad8a7442f957220d1"
  },
  {
    "url": "online-tools/bookmark-scripts.html",
    "revision": "5b988965e10b4c600fb1205059a702e4"
  },
  {
    "url": "online-tools/index.html",
    "revision": "145baf6dc23c8c2c7930b9373e747949"
  },
  {
    "url": "software/browser.html",
    "revision": "e3fa6960c9a1a76c82bcd4469f177ecd"
  },
  {
    "url": "software/cross-platform.html",
    "revision": "a7e49b7f741936724fd5e3732be3aaf7"
  },
  {
    "url": "software/mac.html",
    "revision": "a94b906c3ba09f045098300bd35f64ab"
  },
  {
    "url": "software/vscode.html",
    "revision": "5a41d37eb1789c56bfc9c63ba6e6a12f"
  },
  {
    "url": "software/webstorm.html",
    "revision": "db46d67b4cfbe372ae4048e828d51581"
  },
  {
    "url": "software/windows.html",
    "revision": "e751286933389a5be1f11197243a0251"
  },
  {
    "url": "software/zsh.html",
    "revision": "b8e27d6b70fec01a496cb7a7815fedfd"
  },
  {
    "url": "utils/function.html",
    "revision": "1e901bcbfe571b84ccba0f7fb2f0dd2e"
  },
  {
    "url": "utils/regexp.html",
    "revision": "e7c327d370b54855e9f94a521cada485"
  },
  {
    "url": "vue/index.html",
    "revision": "5e79a1fe9135fffba3d6359b004dfc32"
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
