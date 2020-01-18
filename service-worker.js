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
    "revision": "e2e27672b81521b577137a45abd65869"
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
    "url": "assets/js/11.1d63d0b7.js",
    "revision": "8b8a93bfae508e2b03ff7852343a7e3a"
  },
  {
    "url": "assets/js/12.f7602f4d.js",
    "revision": "7da02dfdb1b358c1ac205f9d35334256"
  },
  {
    "url": "assets/js/13.c21fc0c3.js",
    "revision": "4763a5d1231fc2f1900f8dbf2d06b40a"
  },
  {
    "url": "assets/js/14.6f0316c5.js",
    "revision": "3e5bd1e89a4053437dda9124714452c8"
  },
  {
    "url": "assets/js/15.0a78befd.js",
    "revision": "b893d1414589800dbcc565c421329c4e"
  },
  {
    "url": "assets/js/16.b0763614.js",
    "revision": "9618737f817a07cf0a7f200f116f7780"
  },
  {
    "url": "assets/js/17.0d2c19bb.js",
    "revision": "e43dbf860e9f5c8e54d2835f2140f5ac"
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
    "url": "assets/js/9.7f565dd4.js",
    "revision": "cdd8de7bcd8d5603d6792f66b4b120c5"
  },
  {
    "url": "assets/js/app.b3e935fc.js",
    "revision": "3c002e6177ba7e30f47f6e67e4aaaa1c"
  },
  {
    "url": "css/index.html",
    "revision": "e0a7db0776291aa0c8af2126667141ad"
  },
  {
    "url": "css/scss.html",
    "revision": "13e07f91917fc21535a319b708f7e40f"
  },
  {
    "url": "css/skill.html",
    "revision": "e8204e82e20e72d9e41d642b81f839a0"
  },
  {
    "url": "git/command.html",
    "revision": "3858a4d87748a6a67c8c042e228c8b6b"
  },
  {
    "url": "git/index.html",
    "revision": "8f0d095d9347041604d0b75c73941e94"
  },
  {
    "url": "index.html",
    "revision": "bcaf1f546c37c98f4abbb641fdd53f1a"
  },
  {
    "url": "node/depend.html",
    "revision": "4f38b75a9e8d686a0308f296875be139"
  },
  {
    "url": "node/npm.html",
    "revision": "9abf73e9fab3b2341a5ad98a943cd29d"
  },
  {
    "url": "utils/function.html",
    "revision": "9bd7feee15ae670972903607bb11ae29"
  },
  {
    "url": "utils/regexp.html",
    "revision": "441219380e6cbd6f4edfc02f0c39c348"
  },
  {
    "url": "vue/index.html",
    "revision": "1ff1cb19199d32b9c9cc89298ead02a6"
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
