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
    "revision": "42191870a24c2835d8eef63a36003950"
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
    "url": "assets/js/10.72b47051.js",
    "revision": "3fa78d706da840d267eadb5aa80613e1"
  },
  {
    "url": "assets/js/11.a56d63fb.js",
    "revision": "04587cc873702f64e6d0753a74ab6b99"
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
    "url": "assets/js/14.69c6910a.js",
    "revision": "562da950db657d2b5fe4e50b23a21f61"
  },
  {
    "url": "assets/js/15.ff323c9a.js",
    "revision": "69838fc908e8c52ce21fa246568615c7"
  },
  {
    "url": "assets/js/16.ec41ad04.js",
    "revision": "f126be5a74fca07d3be41982c7f01d75"
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
    "url": "assets/js/2.696dc39f.js",
    "revision": "76f6ae7d96340de0f7354297f5881ea6"
  },
  {
    "url": "assets/js/20.808eb14d.js",
    "revision": "52dd6b576e157cf6a39eb7e1a8d3df4c"
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
    "url": "assets/js/25.804b8dcf.js",
    "revision": "34d52e96c5c58ac75454cfe5067722a9"
  },
  {
    "url": "assets/js/26.16f50631.js",
    "revision": "80fdc4bda65efb8ffe9e2ebb535998c4"
  },
  {
    "url": "assets/js/27.e28f7429.js",
    "revision": "3f1bf6033edeea6ebadab91023386c50"
  },
  {
    "url": "assets/js/28.7ea03ede.js",
    "revision": "de5885a84766a1f013506fe1db027a1b"
  },
  {
    "url": "assets/js/29.e7151c3c.js",
    "revision": "6101720356d538af73fee809702f5172"
  },
  {
    "url": "assets/js/3.dac0136f.js",
    "revision": "7e9d1c326781d500d1a3ea72560c0308"
  },
  {
    "url": "assets/js/30.3138a375.js",
    "revision": "b9e65d2c4d16c0f688cae643bc5d9806"
  },
  {
    "url": "assets/js/31.af5da6df.js",
    "revision": "9a2decb8a763b7ea5b288d5e9bed26e1"
  },
  {
    "url": "assets/js/32.ad5d6188.js",
    "revision": "e4f334042796bc862c2fd811fc8d498d"
  },
  {
    "url": "assets/js/4.df4e6048.js",
    "revision": "3cfd10b05d67ee723bb83f61665e70d5"
  },
  {
    "url": "assets/js/5.2339c75e.js",
    "revision": "13e3e0577242eae7ffa19e858413df62"
  },
  {
    "url": "assets/js/6.a6c78384.js",
    "revision": "b742b30955bc5001e087b652a5bcef83"
  },
  {
    "url": "assets/js/7.0284df69.js",
    "revision": "e0c2f1306bedbdf1c397d4014ccdc860"
  },
  {
    "url": "assets/js/8.c4cc7471.js",
    "revision": "bc681c5004b778bf79559e80f1863feb"
  },
  {
    "url": "assets/js/9.bd15fb6f.js",
    "revision": "5dd4f80abce349a7d3f2d8f7875094c7"
  },
  {
    "url": "assets/js/app.a2bf01fa.js",
    "revision": "cd7d64c395b582cc35b72c5b47c9a2ea"
  },
  {
    "url": "css/index.html",
    "revision": "4b5806a966c2dbb2b4729c8911548421"
  },
  {
    "url": "css/scss.html",
    "revision": "ee487392e51541382e21ac2a5de06619"
  },
  {
    "url": "css/skill.html",
    "revision": "100be710b8db25ed340a6aee4ca20cd8"
  },
  {
    "url": "git/command.html",
    "revision": "f93d46e615a420a6f32d7c09d884dae9"
  },
  {
    "url": "git/index.html",
    "revision": "e76a1d78b3e9fad1a5b11bf1d73907e7"
  },
  {
    "url": "index.html",
    "revision": "aecc59de9092786115288cd4cb0f72cf"
  },
  {
    "url": "issue/h5.html",
    "revision": "2a168d805e42c3a91dc30d4821858332"
  },
  {
    "url": "issue/pc.html",
    "revision": "1b665e7cda48dfa5537d9b9a4a09fa65"
  },
  {
    "url": "node/npm.html",
    "revision": "54357d55966bc8ea6f10d824a8f54010"
  },
  {
    "url": "node/toolkit.html",
    "revision": "a6956c51948da4e95e0cee4028bf4b1f"
  },
  {
    "url": "online-tools/bookmark-scripts.html",
    "revision": "6d2696223202aa1c48042e02838fb06a"
  },
  {
    "url": "online-tools/index.html",
    "revision": "0794e8dcef1b7fb5c71a7dcba255b684"
  },
  {
    "url": "software/browser.html",
    "revision": "76682696f7124e7035515ca3aafdb47b"
  },
  {
    "url": "software/cross-platform.html",
    "revision": "34b3abbb1f311afd98994fb6b44c123b"
  },
  {
    "url": "software/mac.html",
    "revision": "7f30f1e005f2eb1578c18e40e07f04c0"
  },
  {
    "url": "software/vscode.html",
    "revision": "789932b575619a50a37c3cc0cf2f0e8b"
  },
  {
    "url": "software/webstorm.html",
    "revision": "d04577149bbf9f4e4553501069cfb579"
  },
  {
    "url": "software/windows.html",
    "revision": "743093d2778265ee0b7bbbbd5995ee14"
  },
  {
    "url": "software/zsh.html",
    "revision": "4f9b6c7acfa8e6af606b0b7d1a269784"
  },
  {
    "url": "utils/function.html",
    "revision": "6f26168986ce6b7d7277b43307d1a871"
  },
  {
    "url": "utils/library.html",
    "revision": "c5a9956e9265ce32de3fcbb1838d1263"
  },
  {
    "url": "utils/regexp.html",
    "revision": "79755389bc83325c0f552bf91a9892d9"
  },
  {
    "url": "vue/index.html",
    "revision": "4d83bef23a659878911ae69cbb934c83"
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
