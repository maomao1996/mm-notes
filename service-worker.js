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
    "revision": "145977748f499b55cbc75b7d2661db15"
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
    "url": "assets/js/14.cec86043.js",
    "revision": "19c3b5a164af5f593d6f292fcae6d3e4"
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
    "url": "assets/js/2.53e4f480.js",
    "revision": "f7ab5e5cfcc6cd687f10fc5b49689fba"
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
    "url": "assets/js/7.f1194160.js",
    "revision": "b285b4fac7769abb79d6d0de68826d5b"
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
    "url": "assets/js/app.1d437ae6.js",
    "revision": "14730e39facb34dd73ac1d49d77ceffd"
  },
  {
    "url": "css/index.html",
    "revision": "f152715451f89fdd22a9d1f9cde800d0"
  },
  {
    "url": "css/scss.html",
    "revision": "a2fb9bc1dbdbc19ee2cd6a3c6032fd6d"
  },
  {
    "url": "css/skill.html",
    "revision": "f3ac25a728e67eaaa79acaae23e3ee3a"
  },
  {
    "url": "git/command.html",
    "revision": "8ddcb0dd5f054b1a4acaea328dbc445a"
  },
  {
    "url": "git/index.html",
    "revision": "5352532aac5620a25e75689774a23e88"
  },
  {
    "url": "index.html",
    "revision": "044d499d67e8631ac642e80c365a8def"
  },
  {
    "url": "issue/h5.html",
    "revision": "d045564be7ed5c40aba8af70dd0432e6"
  },
  {
    "url": "issue/pc.html",
    "revision": "b73fd9fe0b313270879a35e584fef85d"
  },
  {
    "url": "node/npm.html",
    "revision": "cfae4f722693f9356b2c9ba1dea96457"
  },
  {
    "url": "node/toolkit.html",
    "revision": "b477699c4bc4d9786c1fdce42d7785e4"
  },
  {
    "url": "online-tools/bookmark-scripts.html",
    "revision": "f691179240e5422489f73ffa68f21818"
  },
  {
    "url": "online-tools/index.html",
    "revision": "ae8f2c830ecaecffe7fe8c76efc7cb3e"
  },
  {
    "url": "software/browser.html",
    "revision": "61bb37b6259fee159c7f25627bd43a72"
  },
  {
    "url": "software/cross-platform.html",
    "revision": "3b63a937f95d59da46032c409f563a8b"
  },
  {
    "url": "software/mac.html",
    "revision": "8b7fd03502ca6bf6d5f7e3f02122e71f"
  },
  {
    "url": "software/vscode.html",
    "revision": "fa166fde566f43c7cff025f9a64757a6"
  },
  {
    "url": "software/webstorm.html",
    "revision": "bc559efe4da4389aa337c3498b3d488f"
  },
  {
    "url": "software/windows.html",
    "revision": "2c72438d980ae41ce9c367e2c5c594d1"
  },
  {
    "url": "software/zsh.html",
    "revision": "f7464ecaad435d4a882be6c0ea6379a5"
  },
  {
    "url": "utils/function.html",
    "revision": "c8ffce25a57cb2860ec54ea05d8b8368"
  },
  {
    "url": "utils/library.html",
    "revision": "9743d9522ae2c234cd89b2ceb7feef65"
  },
  {
    "url": "utils/regexp.html",
    "revision": "a7734eb7637b0ebb4bf66b219895f7f4"
  },
  {
    "url": "vue/index.html",
    "revision": "07383733c58a446886371f2ec5ccdebe"
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
