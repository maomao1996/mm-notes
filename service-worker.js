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
    "revision": "84d9e18e41bcd6cf7bc0f860490b4a80"
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
    "url": "assets/js/11.8b9dc27b.js",
    "revision": "fe4b040744e1df46905ba1a526a5929c"
  },
  {
    "url": "assets/js/12.5fba6416.js",
    "revision": "0ac8bf104bf205591e20f3e4ead00d3d"
  },
  {
    "url": "assets/js/13.5574a4a1.js",
    "revision": "b2a39b993e8dbea4287ee4acbb0bc851"
  },
  {
    "url": "assets/js/14.00ff466c.js",
    "revision": "a3c57e93fdee8e91ee1448451ce851cf"
  },
  {
    "url": "assets/js/15.ff323c9a.js",
    "revision": "69838fc908e8c52ce21fa246568615c7"
  },
  {
    "url": "assets/js/16.e8c1e245.js",
    "revision": "ad7b05cd9191070201c7831fa523d1dd"
  },
  {
    "url": "assets/js/17.5cffe1ef.js",
    "revision": "3100c99d43dc1c4a474f6083d7e8b457"
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
    "url": "assets/js/app.24345ca3.js",
    "revision": "6a017db9e52040d9e0143764e4338378"
  },
  {
    "url": "css/index.html",
    "revision": "a8732581eff4cdd7406390139c82684d"
  },
  {
    "url": "css/scss.html",
    "revision": "eac3f57e3b348719da2ceb2aa3359f6e"
  },
  {
    "url": "css/skill.html",
    "revision": "a8751cac7cf3d8b9e99a7d048e257f58"
  },
  {
    "url": "git/command.html",
    "revision": "8bffa264865f4c321417e4ae0d82bcde"
  },
  {
    "url": "git/index.html",
    "revision": "772493c3b64f5075c3b3b76711600979"
  },
  {
    "url": "index.html",
    "revision": "d90c1e6e6674f27d1305f9a61d715c58"
  },
  {
    "url": "issue/h5.html",
    "revision": "f019d4b67c0f55105d413e1153ee9b77"
  },
  {
    "url": "issue/pc.html",
    "revision": "0d7f791f90d7ae2b704f0c0eeeaa0d5b"
  },
  {
    "url": "node/npm.html",
    "revision": "12c8e79f092819cc1abfaceeb2c07133"
  },
  {
    "url": "node/toolkit.html",
    "revision": "b0414d900e72b4732751a3f10a58425d"
  },
  {
    "url": "online-tools/bookmark-scripts.html",
    "revision": "ea7505a0fcc23f26d1cc289a963a3bbd"
  },
  {
    "url": "online-tools/index.html",
    "revision": "8516539f516f08190ea9e2597f12da78"
  },
  {
    "url": "software/browser.html",
    "revision": "315ac8833376293eb7d2c2df2f746d91"
  },
  {
    "url": "software/cross-platform.html",
    "revision": "4d6b7aee1beadf262b2fb658d7c056e8"
  },
  {
    "url": "software/mac.html",
    "revision": "ddf56935669c20480fe9b89bb99f4918"
  },
  {
    "url": "software/vscode.html",
    "revision": "304fcfacf8d16949ef9795f1a6abfd1f"
  },
  {
    "url": "software/webstorm.html",
    "revision": "6371e555df04fba4cfe1f21532e13307"
  },
  {
    "url": "software/windows.html",
    "revision": "6adb85504ff4400322a47cbb528915b2"
  },
  {
    "url": "software/zsh.html",
    "revision": "65b792b6b4ec947f3ba62372f65f289e"
  },
  {
    "url": "utils/function.html",
    "revision": "5f13a298d7f6dfdc9313e5b286990a06"
  },
  {
    "url": "utils/library.html",
    "revision": "be36e9a4ee9786f0c00723f2ee4f28a0"
  },
  {
    "url": "utils/regexp.html",
    "revision": "d2a665bf785795ba58627510423af04a"
  },
  {
    "url": "vue/index.html",
    "revision": "b13047f101aa3e2a5d56e8443ac0c913"
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
