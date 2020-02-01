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
    "revision": "432a12f256e5b4c9a00ef77b36994cac"
  },
  {
    "url": "assets/css/0.styles.bb08940e.css",
    "revision": "c53d0ea9ecebce97a80983e960157f9f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.c88f83f6.js",
    "revision": "5e58b78cf7b53c24746dc7c7de1d9373"
  },
  {
    "url": "assets/js/11.8f3b8d7c.js",
    "revision": "8b729af304458ba07f8edfab5927b50b"
  },
  {
    "url": "assets/js/12.fa7e9125.js",
    "revision": "0e40e474ef64dc1c6560a8bf917aa5c2"
  },
  {
    "url": "assets/js/13.dfd14a38.js",
    "revision": "4d0465fb5e1ac4b626e12188de70596b"
  },
  {
    "url": "assets/js/14.45dab893.js",
    "revision": "341f0a47e0a08347bbc8e1ef7037e81c"
  },
  {
    "url": "assets/js/15.b1d13eb1.js",
    "revision": "a99db1adb014c7bbb6acc9686249684f"
  },
  {
    "url": "assets/js/16.e7815ff6.js",
    "revision": "7e258a5f17e04cc997df55e7610926ae"
  },
  {
    "url": "assets/js/17.a7415bcb.js",
    "revision": "794b1f50dce22578aea28370eeba8fc9"
  },
  {
    "url": "assets/js/18.80f5dc95.js",
    "revision": "b7076133b0f0f9e3961ea27563997bef"
  },
  {
    "url": "assets/js/19.c74a7020.js",
    "revision": "fb1f9240efd67b0d5a560691d171e5b1"
  },
  {
    "url": "assets/js/2.a29a5127.js",
    "revision": "ed269ff1a9445bb1104e0e5c4b9a624f"
  },
  {
    "url": "assets/js/20.8ca7d1cd.js",
    "revision": "f43c1a36ba1477b99f69594b2c096a03"
  },
  {
    "url": "assets/js/3.db84f657.js",
    "revision": "1bebef28a93d2266b4f8c35359bcbd23"
  },
  {
    "url": "assets/js/4.40fdd9ab.js",
    "revision": "45673508825dda9c8359e6988221ee87"
  },
  {
    "url": "assets/js/5.40aa0710.js",
    "revision": "28d103535a8c2a859e59140e1b0d2996"
  },
  {
    "url": "assets/js/6.de5e72eb.js",
    "revision": "959a0b9ed72de8cf3fdd95d804fb7978"
  },
  {
    "url": "assets/js/7.f22262f3.js",
    "revision": "3790783a0fb5cb9b6dc40c8565eee987"
  },
  {
    "url": "assets/js/8.a5dc02b2.js",
    "revision": "7b7a652c148b933f032fae8de517419b"
  },
  {
    "url": "assets/js/9.5911d56b.js",
    "revision": "b24277b597e628eec7c41961706699f1"
  },
  {
    "url": "assets/js/app.602ab4a8.js",
    "revision": "bd1071cb35a70d12dc2a9e0487e11663"
  },
  {
    "url": "css/index.html",
    "revision": "d04fe2df7ebe23fd7395f5c99f706dad"
  },
  {
    "url": "css/scss.html",
    "revision": "c61815a52eb4b127cde5eadd93124a95"
  },
  {
    "url": "css/skill.html",
    "revision": "2bb1126c277c269719a2fbf9962725d6"
  },
  {
    "url": "git/command.html",
    "revision": "f4eb3b3dcf5399023222579724c29ecd"
  },
  {
    "url": "git/index.html",
    "revision": "8d669389acc0a560b0e6176bb80eeebf"
  },
  {
    "url": "index.html",
    "revision": "cdcb26d9096eb18ac1430c1f5ec51a72"
  },
  {
    "url": "node/depend.html",
    "revision": "885810caf8f2994e8eb6126def4508f1"
  },
  {
    "url": "node/npm.html",
    "revision": "561e1ec671ecca1abcf17448e9b49122"
  },
  {
    "url": "software/browser.html",
    "revision": "07c6b0a5aee23d7a536eadd66f02bb2f"
  },
  {
    "url": "software/mac.html",
    "revision": "4aea555568862de6444fcf6f497e6ddb"
  },
  {
    "url": "utils/function.html",
    "revision": "d47c04537bd33c612092759afa91a816"
  },
  {
    "url": "utils/regexp.html",
    "revision": "587e0653a1dacf4114d02001f868124e"
  },
  {
    "url": "vue/index.html",
    "revision": "ccff0a4e75af89e36750d09e29a1425e"
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
