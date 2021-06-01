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
    "revision": "0258bbfb21103e91ba0c776f8f710c80"
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
    "url": "assets/js/12.8adbd7b0.js",
    "revision": "5f78f2f5fe31bed1d1377e97d26ddd91"
  },
  {
    "url": "assets/js/13.ce6c6d07.js",
    "revision": "df70554b03ce45731dba534735f37f12"
  },
  {
    "url": "assets/js/14.443ad9c4.js",
    "revision": "ab1d7f56de91829f0b2bd4a9bc96ee53"
  },
  {
    "url": "assets/js/15.62dbbe06.js",
    "revision": "6b77e274a71652744437935f846084da"
  },
  {
    "url": "assets/js/16.869d8f5d.js",
    "revision": "3017fab03e5a50f3e23169bf607158a3"
  },
  {
    "url": "assets/js/17.cac951e3.js",
    "revision": "1ac6b942b672ed3d4240a01c4c6f54af"
  },
  {
    "url": "assets/js/18.a40fa35c.js",
    "revision": "9f2b5152cb82d6a74e3f7ca3ad56c273"
  },
  {
    "url": "assets/js/19.080da409.js",
    "revision": "83e3db2c69d98775793cd18f2aa524ee"
  },
  {
    "url": "assets/js/2.ce93414b.js",
    "revision": "8893814c7c5b8c92af52f1197b369c85"
  },
  {
    "url": "assets/js/20.f6079f56.js",
    "revision": "b7e451bb4a9ed4d8e1942624cd0a5a7d"
  },
  {
    "url": "assets/js/21.22b38bff.js",
    "revision": "ae78356a09217520428e11adfb8097c3"
  },
  {
    "url": "assets/js/22.05f0a1bf.js",
    "revision": "ef8a75ca2132a3392d1a23370b51a8eb"
  },
  {
    "url": "assets/js/23.7ad047dd.js",
    "revision": "28fce4b9944182e448ebfcac0751605a"
  },
  {
    "url": "assets/js/24.346c678b.js",
    "revision": "79b0cd55a2531bdf8cb2fbca69168655"
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
    "url": "assets/js/app.3dc743af.js",
    "revision": "bbbd4726945797aba3a233744623258a"
  },
  {
    "url": "css/index.html",
    "revision": "235671178e499e4ee2bdbf05518ea7a5"
  },
  {
    "url": "css/scss.html",
    "revision": "53ae26617af0475f67cfc660da9c264c"
  },
  {
    "url": "css/skill.html",
    "revision": "661aa01fde80de7aa430ee4c371f08d9"
  },
  {
    "url": "git/command.html",
    "revision": "1cad368727d7d2dfef8e02fad5e8ff6d"
  },
  {
    "url": "git/index.html",
    "revision": "8d9f4f07f7858caef99a25e1b09123dc"
  },
  {
    "url": "index.html",
    "revision": "e5406cea33cbbd762ba2f5939090454f"
  },
  {
    "url": "issue/h5.html",
    "revision": "9c48d83e7eb88d5818d8d3ab6d8fe6a2"
  },
  {
    "url": "issue/pc.html",
    "revision": "1d82b85057d1c3c94412ad2406929c6a"
  },
  {
    "url": "node/npm.html",
    "revision": "33fbedb4e4bc9f65053d47a1d7510009"
  },
  {
    "url": "node/toolkit.html",
    "revision": "d2312fb23d7232eeb70c42d69f2ddb39"
  },
  {
    "url": "online-tools/bookmark-scripts.html",
    "revision": "102a7eaaf857e49f9ff8b8280a52605b"
  },
  {
    "url": "online-tools/index.html",
    "revision": "054dde9fbcec0198179ec6d5603b85d6"
  },
  {
    "url": "software/browser.html",
    "revision": "283b67e921c7ac94f971159d93b0c425"
  },
  {
    "url": "software/cross-platform.html",
    "revision": "0ed39f0f9726584c64c8b80858f9256b"
  },
  {
    "url": "software/mac.html",
    "revision": "894a487003b8171f9d7c4e5fe03ad208"
  },
  {
    "url": "software/vscode.html",
    "revision": "ea63265ffb73d2e1e2e41fd232ad7624"
  },
  {
    "url": "software/webstorm.html",
    "revision": "a2012f9b6ead9618a3a6c5a2b41d4bbc"
  },
  {
    "url": "software/windows.html",
    "revision": "48ed963f82221e5d0bf69fdbaeb91034"
  },
  {
    "url": "software/zsh.html",
    "revision": "3ad6e12a8f14cc4f61de90b7fc8288e9"
  },
  {
    "url": "utils/function.html",
    "revision": "f52dd535a4bf32a9905e04d39ff41e72"
  },
  {
    "url": "utils/library.html",
    "revision": "5b5fcec973954613e5b3311909db63cc"
  },
  {
    "url": "utils/regexp.html",
    "revision": "07e4d753548fd783a0b709efcfab58da"
  },
  {
    "url": "vue/index.html",
    "revision": "a6b72b7881b31d3f5cb913d972ed4efe"
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
