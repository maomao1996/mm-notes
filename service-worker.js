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
    "revision": "6a850311487253135c26eafbb57371bd"
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
    "url": "assets/js/17.1b846a36.js",
    "revision": "2dafb5ca6d38ec162f893ec28cc6538e"
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
    "url": "assets/js/23.05e06233.js",
    "revision": "bf4d8235d151e25d5211552de279c5dd"
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
    "url": "assets/js/app.690a0893.js",
    "revision": "f427a93db7b8f7550377d8ca60aeaf91"
  },
  {
    "url": "css/index.html",
    "revision": "140598b30b2d3419aa916f779fa09c76"
  },
  {
    "url": "css/scss.html",
    "revision": "e6d0eb89fee27cf728be8f073da4250c"
  },
  {
    "url": "css/skill.html",
    "revision": "f9df9d03dc822b839695ca2bc5be5631"
  },
  {
    "url": "git/command.html",
    "revision": "290b97b227f1e326dd0923d6b650ffe7"
  },
  {
    "url": "git/index.html",
    "revision": "f539caeb0154c53d66102e70dca95d25"
  },
  {
    "url": "index.html",
    "revision": "1f30719c8efb2b13229570a3ead7a3ec"
  },
  {
    "url": "issue/h5.html",
    "revision": "b5311b6d8aa7e10f9f5ee58fc6a8f24c"
  },
  {
    "url": "issue/pc.html",
    "revision": "054340d75d2d55f990d5264b2e926c25"
  },
  {
    "url": "node/npm.html",
    "revision": "e213c9b821aef6a14267e31e47ff0564"
  },
  {
    "url": "node/toolkit.html",
    "revision": "affcb3cb450da121a348766a77a3e8df"
  },
  {
    "url": "online-tools/bookmark-scripts.html",
    "revision": "45d5148bf2df2d8287d4623b357f5d49"
  },
  {
    "url": "online-tools/index.html",
    "revision": "b210029ad2d7a7d5045f24f75b57de7d"
  },
  {
    "url": "software/browser.html",
    "revision": "de0fd6a6355c05f4a982df658049e084"
  },
  {
    "url": "software/cross-platform.html",
    "revision": "7e2fdbd1163f584ee1b6a5fa93a1e08f"
  },
  {
    "url": "software/mac.html",
    "revision": "8a28c461c9cc2e00be73c61e22b59046"
  },
  {
    "url": "software/vscode.html",
    "revision": "c6269d7ddf831c8b5ae3f269ddbec736"
  },
  {
    "url": "software/webstorm.html",
    "revision": "4f9d1ae284e96b8d230bab90ff55ba05"
  },
  {
    "url": "software/windows.html",
    "revision": "b6de231c14be37090c572c9ec6bc3707"
  },
  {
    "url": "software/zsh.html",
    "revision": "c399d5d9557f569f90955b8ce00a91d4"
  },
  {
    "url": "utils/function.html",
    "revision": "8cfe03256e22169ca9d5a4a1444fb604"
  },
  {
    "url": "utils/library.html",
    "revision": "9e6f2c34d8d021ee383a971403e8fe60"
  },
  {
    "url": "utils/regexp.html",
    "revision": "cdb9ae73dbe34072aa12046fb0141ac3"
  },
  {
    "url": "vue/index.html",
    "revision": "097e99b9f208e779ec362e3487d1414d"
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
