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
    "revision": "2f008c36b505c1e438c0ccf628d3918d"
  },
  {
    "url": "assets/css/0.styles.f691032f.css",
    "revision": "25d6101dee0ee9d1e1238a3dad04c886"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.f74ae1d7.js",
    "revision": "570fa67ccf477238e89c06f83a4150f9"
  },
  {
    "url": "assets/js/11.1d63d0b7.js",
    "revision": "8b8a93bfae508e2b03ff7852343a7e3a"
  },
  {
    "url": "assets/js/12.8529d3a1.js",
    "revision": "845446eb3b2116ded56b883e8acd95e1"
  },
  {
    "url": "assets/js/13.97dfbf4a.js",
    "revision": "bbe0d45c5fc2a95cf8bc905a6fefdeb9"
  },
  {
    "url": "assets/js/14.5f277c4f.js",
    "revision": "37963ef77b1ad7fae2cd9530a31fe8bd"
  },
  {
    "url": "assets/js/15.c204e474.js",
    "revision": "edd6ccf89d143ba87b6ecb594fd580ee"
  },
  {
    "url": "assets/js/16.c11a4e28.js",
    "revision": "8fe4c5a7d040458fee684dc83bbc222b"
  },
  {
    "url": "assets/js/17.372e12f0.js",
    "revision": "85ab6228d9333dd43056ac9c3ba9fcfe"
  },
  {
    "url": "assets/js/18.0cf1e9fb.js",
    "revision": "98c89682cb9de2c79ca2e45607a63827"
  },
  {
    "url": "assets/js/19.6ab4a1e3.js",
    "revision": "922100095b7479a3128fe21f38bcde9c"
  },
  {
    "url": "assets/js/2.efb942e3.js",
    "revision": "093f3843fb73994024df773845bed087"
  },
  {
    "url": "assets/js/20.8ca7d1cd.js",
    "revision": "f43c1a36ba1477b99f69594b2c096a03"
  },
  {
    "url": "assets/js/3.ea75f2f5.js",
    "revision": "0d2f06855cc059411d34f2fb02a87548"
  },
  {
    "url": "assets/js/4.40fdd9ab.js",
    "revision": "45673508825dda9c8359e6988221ee87"
  },
  {
    "url": "assets/js/5.fe261025.js",
    "revision": "61776cc8fe3405d23bd359f43964b8f7"
  },
  {
    "url": "assets/js/6.de5e72eb.js",
    "revision": "959a0b9ed72de8cf3fdd95d804fb7978"
  },
  {
    "url": "assets/js/7.0b6244fb.js",
    "revision": "707c3a8d8e9413817faecb8c902da70b"
  },
  {
    "url": "assets/js/8.2c149f51.js",
    "revision": "6edc07c646854dec94fe9ddaffa81a7e"
  },
  {
    "url": "assets/js/9.b3892c6b.js",
    "revision": "c86965c321cb89232711b344aafedab1"
  },
  {
    "url": "assets/js/app.2d9578f2.js",
    "revision": "ad7e2503cd2d9bc69a2c604baa9fabde"
  },
  {
    "url": "css/index.html",
    "revision": "b0efe67069d8294ec64ae8bd59aac8ab"
  },
  {
    "url": "css/scss.html",
    "revision": "212f43bfad653bf9da7f229e1bb6c00b"
  },
  {
    "url": "css/skill.html",
    "revision": "af84e2084d7253dd0bcfc711d74e556d"
  },
  {
    "url": "git/command.html",
    "revision": "67086f4ca2eb3b998891836d752af54b"
  },
  {
    "url": "git/index.html",
    "revision": "eecb4439710bd2e250a5d76fd69172c1"
  },
  {
    "url": "index.html",
    "revision": "b52bf836311de73fa3a8be37f8ce5648"
  },
  {
    "url": "node/depend.html",
    "revision": "7ec061796f38626a64a60da2dc436d18"
  },
  {
    "url": "node/npm.html",
    "revision": "9e503761d4347762fdca5d3929340546"
  },
  {
    "url": "software/browser.html",
    "revision": "603c0d7c737d0631b2f44fdd49daf707"
  },
  {
    "url": "software/mac.html",
    "revision": "46fb5cbd12b1e8838252da0c40f76eab"
  },
  {
    "url": "utils/function.html",
    "revision": "ef5f4fd43b6b11795a25a4a60184aed6"
  },
  {
    "url": "utils/regexp.html",
    "revision": "238495696647da83b43f4fca6ff8fdf8"
  },
  {
    "url": "vue/index.html",
    "revision": "f7f76cfb9e48aafcd6cb742a3e38054a"
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
