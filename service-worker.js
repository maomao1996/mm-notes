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
    "revision": "94d51e704534517446ee7cc60194700d"
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
    "url": "assets/js/10.0ea36195.js",
    "revision": "268a8462490a13a3dbd50a4b33d56865"
  },
  {
    "url": "assets/js/11.84ae9e43.js",
    "revision": "c372057f8aab685fc7d7c59355dc3e42"
  },
  {
    "url": "assets/js/12.d6194b66.js",
    "revision": "f1b6d6a8125108b73a6ea3aa410db006"
  },
  {
    "url": "assets/js/13.b28093bb.js",
    "revision": "f6ce3458b12991a231a3554ea7f8d791"
  },
  {
    "url": "assets/js/14.e8900dfd.js",
    "revision": "ce22af87412a22091210d581669e38f0"
  },
  {
    "url": "assets/js/15.6fa326d7.js",
    "revision": "f55128538c296b05fc7ff08d3e542864"
  },
  {
    "url": "assets/js/16.2f861792.js",
    "revision": "32f3a9b11f25441abc4f058fc5751715"
  },
  {
    "url": "assets/js/17.2fb33219.js",
    "revision": "b55b5c358bb5d1e0ea704b6c50a9a053"
  },
  {
    "url": "assets/js/18.7fd649be.js",
    "revision": "35f63dfa93f7cd316a1b989db1e11217"
  },
  {
    "url": "assets/js/19.929a9a17.js",
    "revision": "da67771cbfbcc89fc5cb247b59ea27fd"
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
    "url": "assets/js/7.8d944362.js",
    "revision": "9f0b11162b0bf56a35236e8344b75c86"
  },
  {
    "url": "assets/js/8.ec34632c.js",
    "revision": "6a46fd4f61932160715855e8474d27b8"
  },
  {
    "url": "assets/js/9.5911d56b.js",
    "revision": "b24277b597e628eec7c41961706699f1"
  },
  {
    "url": "assets/js/app.0b0263a7.js",
    "revision": "fe8c9aac46a86b2acbf39e75b4274003"
  },
  {
    "url": "css/index.html",
    "revision": "2eb4bdfe95c9221f71e58a9e92eeb3a5"
  },
  {
    "url": "css/scss.html",
    "revision": "e571f9b792443199808b8a6eb2fb96e7"
  },
  {
    "url": "css/skill.html",
    "revision": "a1b872639471fa72877e7720270d9427"
  },
  {
    "url": "git/command.html",
    "revision": "2b87dba43e3436f5a9df1b6861f7bb9b"
  },
  {
    "url": "git/index.html",
    "revision": "27bef3661117b72574ca5aa89bfc3f1a"
  },
  {
    "url": "index.html",
    "revision": "a211f1f67f9a9565077019db0ebb1da4"
  },
  {
    "url": "node/depend.html",
    "revision": "f086ee3a6c3088f1776c4905e37daf7e"
  },
  {
    "url": "node/npm.html",
    "revision": "33dc2eea7a7aa9dd574baad9d925ff45"
  },
  {
    "url": "software/browser.html",
    "revision": "a64ef58f3a191f470b08e401001e78e6"
  },
  {
    "url": "software/mac.html",
    "revision": "d8e4b06505c0984f42e8cb1f156ed34e"
  },
  {
    "url": "utils/function.html",
    "revision": "a29cfb0518ba73f1dec1c6df1949e17c"
  },
  {
    "url": "utils/regexp.html",
    "revision": "9e167288db1ef8d19653fff840e306b4"
  },
  {
    "url": "vue/index.html",
    "revision": "ed62deb3005df5b571dead6d77c5386a"
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
