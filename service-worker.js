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
    "revision": "96337e9b22f8ea65fd4e0da3cce99477"
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
    "url": "assets/js/app.77ba7cd6.js",
    "revision": "0c6c91d53b06c22c763a60f0267c2dab"
  },
  {
    "url": "css/index.html",
    "revision": "1d5345a6589b1d791aec59faaad2eef0"
  },
  {
    "url": "css/scss.html",
    "revision": "f2e22737e67054a4eadeae4722711cee"
  },
  {
    "url": "css/skill.html",
    "revision": "234f7af4f6d34a5dd32786044b719869"
  },
  {
    "url": "git/command.html",
    "revision": "225ff3bfa4c4fe429c7e9f1d18c3e516"
  },
  {
    "url": "git/index.html",
    "revision": "89ad4f903092e7326e69bacf74a6bfd2"
  },
  {
    "url": "index.html",
    "revision": "fae691c6692e523ba7e977f986e07bba"
  },
  {
    "url": "issue/h5.html",
    "revision": "7192b0b85b8c3b74e463ae65fb6f5d8d"
  },
  {
    "url": "issue/pc.html",
    "revision": "cb66d6a29416c97f57e3ebb9ddf232df"
  },
  {
    "url": "node/npm.html",
    "revision": "19c5babd74a758d9893fc7ec6ae4faf9"
  },
  {
    "url": "node/toolkit.html",
    "revision": "9401bf17d58c40f3304122ab05c6d942"
  },
  {
    "url": "online-tools/bookmark-scripts.html",
    "revision": "1207a4f5abddfdebb8a9e266b29e2647"
  },
  {
    "url": "online-tools/index.html",
    "revision": "c8c8eae2fdaf807f47c1d85aeda394e5"
  },
  {
    "url": "software/browser.html",
    "revision": "aa4a130a7718d31fc1943e91317dfae6"
  },
  {
    "url": "software/cross-platform.html",
    "revision": "cdc88276148758ee718167a2ab9ebdc6"
  },
  {
    "url": "software/mac.html",
    "revision": "0b1accf85767bbbd45d1fda76e945822"
  },
  {
    "url": "software/vscode.html",
    "revision": "8952d8d6fa35e1655b524c44c1650370"
  },
  {
    "url": "software/webstorm.html",
    "revision": "1aa09f5d96738b4f90844c48a7295f81"
  },
  {
    "url": "software/windows.html",
    "revision": "3b7ceb5e1c3b570f626af3a702b19159"
  },
  {
    "url": "software/zsh.html",
    "revision": "8c61066c3c184335906f495a75f2c7aa"
  },
  {
    "url": "utils/function.html",
    "revision": "37202e282bd6bfd44f7a8b77ed02cedb"
  },
  {
    "url": "utils/library.html",
    "revision": "df574bee79c449fcc8cb188bd531cfc3"
  },
  {
    "url": "utils/regexp.html",
    "revision": "7b0f1b6ff6facb31faf367bc76f8ad3d"
  },
  {
    "url": "vue/index.html",
    "revision": "a41e8b329cc9bb326e57fa852bb88a64"
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
