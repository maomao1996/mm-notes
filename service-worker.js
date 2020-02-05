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
    "revision": "f5235ae04155cb69a950555408c3e88c"
  },
  {
    "url": "assets/css/0.styles.c68e6def.css",
    "revision": "c53d0ea9ecebce97a80983e960157f9f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.a4b643a9.js",
    "revision": "0441f3cc79ecbb37355d3f783b8af986"
  },
  {
    "url": "assets/js/11.def4531b.js",
    "revision": "ffc5d6c6c24f742aab9a552713985ad4"
  },
  {
    "url": "assets/js/12.1fa74371.js",
    "revision": "b5d9d370079fc70465b952626c85087b"
  },
  {
    "url": "assets/js/13.ce6b7a7d.js",
    "revision": "d2f1a87a9b1d0acd7d668ed78fd18795"
  },
  {
    "url": "assets/js/14.4daff7b1.js",
    "revision": "7ff3438cc7923954b2c1950d9369555e"
  },
  {
    "url": "assets/js/15.d862ccaf.js",
    "revision": "e7f6ee6178ccc88b64abd73836771fb2"
  },
  {
    "url": "assets/js/16.e7815ff6.js",
    "revision": "7e258a5f17e04cc997df55e7610926ae"
  },
  {
    "url": "assets/js/17.111db377.js",
    "revision": "98ba68c8c4d34244b4920be195c2a7e3"
  },
  {
    "url": "assets/js/18.80f5dc95.js",
    "revision": "b7076133b0f0f9e3961ea27563997bef"
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
    "url": "assets/js/7.c15f80be.js",
    "revision": "b9dd59cf493b3f26bf8c06f9fe0a8bb4"
  },
  {
    "url": "assets/js/8.adbe05f7.js",
    "revision": "4da4c13e178ee3be69a01b428e09b843"
  },
  {
    "url": "assets/js/9.90df4489.js",
    "revision": "9587ec8ae0184d41d94695272a612d04"
  },
  {
    "url": "assets/js/app.8f4480ac.js",
    "revision": "ba4235d86bfe905e5daaf0d6442c607b"
  },
  {
    "url": "css/index.html",
    "revision": "e02e15bb0b5f8a5ae5239deb46f1df22"
  },
  {
    "url": "css/scss.html",
    "revision": "7f90549409649ea321cef7c22521e0dd"
  },
  {
    "url": "css/skill.html",
    "revision": "8209faff412e5a16bff37c4e8e5caf8d"
  },
  {
    "url": "git/command.html",
    "revision": "df25fed82d0b8b10b2188f4de3cc9f53"
  },
  {
    "url": "git/index.html",
    "revision": "526296676f1342ffa52f81bbbb3e6f9e"
  },
  {
    "url": "index.html",
    "revision": "88ec880ea1704509cc221058c4ad21f6"
  },
  {
    "url": "node/depend.html",
    "revision": "de808f7e7b1dcd042ccc4cf3abe22abe"
  },
  {
    "url": "node/npm.html",
    "revision": "ce8b9301fdcaf8bf09da6d7835ead0db"
  },
  {
    "url": "software/browser.html",
    "revision": "374d1f6685f4a64499b3c6a64e7b4386"
  },
  {
    "url": "software/mac.html",
    "revision": "cc1b37dfc5fb797e2dcd62a9bcc1ceee"
  },
  {
    "url": "utils/function.html",
    "revision": "48606d8ef69e65e5a2aa51e3fc51eaec"
  },
  {
    "url": "utils/regexp.html",
    "revision": "048794ff996c7a739335fece555b67b3"
  },
  {
    "url": "vue/index.html",
    "revision": "7c824f3a38e23f21abd0bd8ba73e36c0"
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
