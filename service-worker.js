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
    "revision": "a902cd55317e0741c4e61fcb7e5dedaa"
  },
  {
    "url": "assets/css/0.styles.f0ae8c5e.css",
    "revision": "96f60976a4dfe5d7a7b8ed39c443a75f"
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
    "url": "assets/js/10.36940b99.js",
    "revision": "50a5d7e6dff4cf8631e4dc9ca02cafca"
  },
  {
    "url": "assets/js/11.ca2c06d1.js",
    "revision": "f7cceef90ad0cece468e20f2f45a8eb0"
  },
  {
    "url": "assets/js/12.32de1929.js",
    "revision": "f0dcb0b803e0c8b13f835742585618de"
  },
  {
    "url": "assets/js/13.6b43c81c.js",
    "revision": "daec6bd26b344c50e5a4be45c2136da1"
  },
  {
    "url": "assets/js/14.c6668fc0.js",
    "revision": "19560d96580ca6cb662087ff4e260d90"
  },
  {
    "url": "assets/js/15.f0cb5fb4.js",
    "revision": "b5eea002b17142400df7980106cd1dc3"
  },
  {
    "url": "assets/js/16.e8c1e245.js",
    "revision": "ad7b05cd9191070201c7831fa523d1dd"
  },
  {
    "url": "assets/js/17.fe01de6e.js",
    "revision": "3166120800e35a1626c8934909bb854c"
  },
  {
    "url": "assets/js/18.cf765f91.js",
    "revision": "57a5cb45897860350a89121c47ba11d4"
  },
  {
    "url": "assets/js/19.997386cf.js",
    "revision": "086703e4685975ed8783fbf9984b03ee"
  },
  {
    "url": "assets/js/2.ce93414b.js",
    "revision": "8893814c7c5b8c92af52f1197b369c85"
  },
  {
    "url": "assets/js/20.c3257bc6.js",
    "revision": "651d07155932bc9be4e3314d8d4e9985"
  },
  {
    "url": "assets/js/21.c3868ab7.js",
    "revision": "f4747a9c5b042083d373372e45ad2f99"
  },
  {
    "url": "assets/js/22.1a06aede.js",
    "revision": "c2c3435e6d50e81ae2264a76a76a5a93"
  },
  {
    "url": "assets/js/23.29cfa4c2.js",
    "revision": "2a10514b4773b0452579a4f9a2913286"
  },
  {
    "url": "assets/js/24.a303322f.js",
    "revision": "7adad9b42c13bc646809d756d1536892"
  },
  {
    "url": "assets/js/25.bb32dea0.js",
    "revision": "f53f6ca46eb1085369a03b310e505b2f"
  },
  {
    "url": "assets/js/26.d84cc2b1.js",
    "revision": "cbdbb7080e30184aaf9540340519aeb3"
  },
  {
    "url": "assets/js/27.79278535.js",
    "revision": "99c0827bf105e7c0c7d9db75693dbf90"
  },
  {
    "url": "assets/js/28.e9e3262c.js",
    "revision": "93e4c611bde36c6b4649c50eb393ac02"
  },
  {
    "url": "assets/js/29.849c3115.js",
    "revision": "025f19b470e343b9c02f7c2f262eeadc"
  },
  {
    "url": "assets/js/3.8e2520c6.js",
    "revision": "ba4ce212c8f3d57f2e92b35988aaff8e"
  },
  {
    "url": "assets/js/30.9a45acd7.js",
    "revision": "04e24fe5729a833f336ba32a49b976f6"
  },
  {
    "url": "assets/js/31.bea7fd93.js",
    "revision": "ed7bfc9e98529c388959531457020254"
  },
  {
    "url": "assets/js/32.26ddcd68.js",
    "revision": "2ce15ff3c5ea4acffe2b07f57088cd97"
  },
  {
    "url": "assets/js/4.110db0ab.js",
    "revision": "5fe8090d09f93ff767c743bd4c6900b4"
  },
  {
    "url": "assets/js/5.6545db83.js",
    "revision": "c73ae8475fa116f99fbd62523e16c15a"
  },
  {
    "url": "assets/js/6.41805f68.js",
    "revision": "16391095a932380d41d8fd943d426265"
  },
  {
    "url": "assets/js/7.c1c1947e.js",
    "revision": "c63105264bbd048da76ab3a647cfe4d9"
  },
  {
    "url": "assets/js/8.7d78d546.js",
    "revision": "4b8d1ab5a92d814867ed73e52075f78a"
  },
  {
    "url": "assets/js/9.4cbcfe55.js",
    "revision": "dc1cd615a47f830379d5cac821a501a0"
  },
  {
    "url": "assets/js/app.4429b51f.js",
    "revision": "eac42face3882be3bd75e48e310bf3c6"
  },
  {
    "url": "css/index.html",
    "revision": "39135d7a27080b661ccf3c695ac9a259"
  },
  {
    "url": "css/scss.html",
    "revision": "ef4621f494c41a59b1f937c51e4615d0"
  },
  {
    "url": "css/skill.html",
    "revision": "6383050ea344cb11549be71cefbb8231"
  },
  {
    "url": "git/command.html",
    "revision": "24d5acff0994d0fbad34be7b4c31e2d6"
  },
  {
    "url": "git/index.html",
    "revision": "afd7e4af3891064831c5f684a6c87619"
  },
  {
    "url": "index.html",
    "revision": "0e1de9460d430e87fbe422561d96f91c"
  },
  {
    "url": "issue/h5.html",
    "revision": "363cafa2fb08fcb853c359113e4f54cc"
  },
  {
    "url": "issue/pc.html",
    "revision": "b8a025f3e6aac1732dd175422216657e"
  },
  {
    "url": "node/npm.html",
    "revision": "fa69ceba16e1b9412cc2cb948fbf4c9f"
  },
  {
    "url": "node/toolkit.html",
    "revision": "e5585301ad90387bdbd5291e02669227"
  },
  {
    "url": "online-tools/bookmark-scripts.html",
    "revision": "01d5b4353dbcf6b592f2be1a30f89189"
  },
  {
    "url": "online-tools/index.html",
    "revision": "1b485b2a67a61984b19e6954308cbf2a"
  },
  {
    "url": "software/browser.html",
    "revision": "a5107ed997e5d9fe401dbad5f592fca0"
  },
  {
    "url": "software/cross-platform.html",
    "revision": "e841b3ab2ac0062291de7de5f88af178"
  },
  {
    "url": "software/mac.html",
    "revision": "36f3679865f58cd12447ba471344c2a2"
  },
  {
    "url": "software/vscode.html",
    "revision": "393d9817adc78992634274938cbe635e"
  },
  {
    "url": "software/webstorm.html",
    "revision": "b5c3cd54fb7a9d988eb223e6f637cee5"
  },
  {
    "url": "software/windows.html",
    "revision": "ef313d258fb10bd7caad5783d479727f"
  },
  {
    "url": "software/zsh.html",
    "revision": "8b91f2f6c1a04d0a866cdb25a7578ed1"
  },
  {
    "url": "utils/function.html",
    "revision": "dbdb58f7ffc7f1cbd1a751ca91754286"
  },
  {
    "url": "utils/library.html",
    "revision": "dcb5d9fb556e8a649d9f9ee16946a3e8"
  },
  {
    "url": "utils/regexp.html",
    "revision": "34274b1500e8ec4da2de6c03985a6a57"
  },
  {
    "url": "vue/index.html",
    "revision": "9ca151439e1f45e5981e8746be09969b"
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
