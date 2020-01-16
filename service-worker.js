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
    "revision": "7c4de0a17563fa20f0c7e03f294ee038"
  },
  {
    "url": "assets/css/0.styles.7c9ac58b.css",
    "revision": "0a8fb13806774b7687289c0e81467170"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.41343fa4.js",
    "revision": "fc7bdebac37902acef74a06e6aadb7a7"
  },
  {
    "url": "assets/js/11.9802256a.js",
    "revision": "f7bc8d9aeb819af1267baeb6d8a38b1e"
  },
  {
    "url": "assets/js/12.1fa74371.js",
    "revision": "b5d9d370079fc70465b952626c85087b"
  },
  {
    "url": "assets/js/13.5a1c5774.js",
    "revision": "c9436547434b7c2bcb1734f64c51f8a6"
  },
  {
    "url": "assets/js/14.3452c86d.js",
    "revision": "4983710fde83c45d557c2002fb4fea59"
  },
  {
    "url": "assets/js/15.429aa984.js",
    "revision": "3e5eb6f5569cbbe4f2e9034a0ab9f468"
  },
  {
    "url": "assets/js/16.720c5366.js",
    "revision": "a5cb800fa33657c3507c7fbfcfe072ec"
  },
  {
    "url": "assets/js/17.1b9971cb.js",
    "revision": "4ecf8280d664af433de3386239ba5783"
  },
  {
    "url": "assets/js/18.867c74d7.js",
    "revision": "8a1c7532775555be111e13c1eb485dda"
  },
  {
    "url": "assets/js/2.c990e211.js",
    "revision": "05763c5cc0e724afa1241b76a90c8cb0"
  },
  {
    "url": "assets/js/3.bf480012.js",
    "revision": "088aebb946f8d7f120fb6f0bf1160e23"
  },
  {
    "url": "assets/js/4.40fdd9ab.js",
    "revision": "45673508825dda9c8359e6988221ee87"
  },
  {
    "url": "assets/js/5.d48437b5.js",
    "revision": "d7a1c5a4dee8f4b83be57170447a7e6d"
  },
  {
    "url": "assets/js/6.de5e72eb.js",
    "revision": "959a0b9ed72de8cf3fdd95d804fb7978"
  },
  {
    "url": "assets/js/7.3ec4188b.js",
    "revision": "618b464d03e6c9f6e6b092feecced65a"
  },
  {
    "url": "assets/js/8.0fda611a.js",
    "revision": "a8ad819fe78078e1ccf7e0bd21f4409c"
  },
  {
    "url": "assets/js/9.a7cbf51f.js",
    "revision": "9eda0ff56e4eaef5a2ee65269282d128"
  },
  {
    "url": "assets/js/app.603bb6f1.js",
    "revision": "bf1ba1d401231852fde7208c9ecf18c8"
  },
  {
    "url": "css/index.html",
    "revision": "5e85296e9edec0a310de682494996f19"
  },
  {
    "url": "css/scss.html",
    "revision": "acee53bbb533ffc5dde48fc03020ea18"
  },
  {
    "url": "css/skill.html",
    "revision": "ed0cf90cd1b251922815dd340e01aaeb"
  },
  {
    "url": "git/command.html",
    "revision": "80b79337396e9cd8436cad6250970372"
  },
  {
    "url": "git/index.html",
    "revision": "2cae8b2a4970481b5dcbde5075c22705"
  },
  {
    "url": "index.html",
    "revision": "a4f520a4c35cfba6ba3feefdec70d113"
  },
  {
    "url": "node/depend.html",
    "revision": "8e6b6c6157060521047f1e9022e38990"
  },
  {
    "url": "node/npm.html",
    "revision": "ba666b787177c698871c488f36dba4d4"
  },
  {
    "url": "utils/function.html",
    "revision": "8bc3544163110e93044cc28d956a29ba"
  },
  {
    "url": "utils/regexp.html",
    "revision": "e07bd5d4204bb75b618c9e84bf914a2a"
  },
  {
    "url": "vue/index.html",
    "revision": "f44c91a4ce74ab98a7fdf71d7b91170e"
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
