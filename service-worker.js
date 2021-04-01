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
    "revision": "21dfcda943253a40f21fe8f2dee551ad"
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
    "url": "assets/js/2.6a4b1204.js",
    "revision": "afd836148e223fc8d3aa8345e0055606"
  },
  {
    "url": "assets/js/20.c9adf93e.js",
    "revision": "af796fb81df5d22b4bb3a09b3602e913"
  },
  {
    "url": "assets/js/21.22b38bff.js",
    "revision": "ae78356a09217520428e11adfb8097c3"
  },
  {
    "url": "assets/js/22.2be42ac3.js",
    "revision": "45967e2e7e5b7193bcc897efd38b0c1a"
  },
  {
    "url": "assets/js/23.269de44b.js",
    "revision": "21d1c71bc085b3234d1b24f96cb8e853"
  },
  {
    "url": "assets/js/24.3ae1cd24.js",
    "revision": "adfa588c222fede08e89a9f8d3656958"
  },
  {
    "url": "assets/js/25.804b8dcf.js",
    "revision": "34d52e96c5c58ac75454cfe5067722a9"
  },
  {
    "url": "assets/js/26.0c30606b.js",
    "revision": "69f031b99dcb4d5461e2606704b49c02"
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
    "url": "assets/js/3.f16d9d4e.js",
    "revision": "66196a692b73c9384f7777f2be8a0c0d"
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
    "url": "assets/js/app.775c4e18.js",
    "revision": "606398c364d58cfbe673ce5fa39c12b4"
  },
  {
    "url": "css/index.html",
    "revision": "7ef035af183a68352c6ace7bd07320c5"
  },
  {
    "url": "css/scss.html",
    "revision": "121b488c6c1a3af1fc02ff1f5cecbbee"
  },
  {
    "url": "css/skill.html",
    "revision": "b04a878d5f67d2977de7cb3dc6c5b539"
  },
  {
    "url": "git/command.html",
    "revision": "b11bd9fc3a7c94af1d7d1916d3ec897a"
  },
  {
    "url": "git/index.html",
    "revision": "c9daf439587c9565ef092e05c9f3258b"
  },
  {
    "url": "index.html",
    "revision": "852a3fc95ff2d7a47df668f8ce277cfd"
  },
  {
    "url": "issue/h5.html",
    "revision": "533873d7fb8ba839ad06a7b152e927a0"
  },
  {
    "url": "issue/pc.html",
    "revision": "ff1b9d07a9ca782aeb4555ee384a1393"
  },
  {
    "url": "node/npm.html",
    "revision": "fc9daafd1c91845eccaa987fc7f044e4"
  },
  {
    "url": "node/toolkit.html",
    "revision": "65de1d92376d2cbc4472d4125b72a7af"
  },
  {
    "url": "online-tools/bookmark-scripts.html",
    "revision": "ee80018c3e3fd62e9d994051304671c6"
  },
  {
    "url": "online-tools/index.html",
    "revision": "257d0443736db306c16826bbf91d6239"
  },
  {
    "url": "software/browser.html",
    "revision": "655f4bf6046ca059fc5c4f28297392f6"
  },
  {
    "url": "software/cross-platform.html",
    "revision": "00aa800ede808ba17d1f2e588c9de748"
  },
  {
    "url": "software/mac.html",
    "revision": "4dafcc24b0e5459f90c2e7d6c6d521ce"
  },
  {
    "url": "software/vscode.html",
    "revision": "5c875501f71e65a7046c410bacc324cf"
  },
  {
    "url": "software/webstorm.html",
    "revision": "f7b6bb2c318c89541c56d2bf71c6cf62"
  },
  {
    "url": "software/windows.html",
    "revision": "139f472c8c0d379b656ff94a36bc95d6"
  },
  {
    "url": "software/zsh.html",
    "revision": "765ba0870e2669f962b93cc11b2ee858"
  },
  {
    "url": "utils/function.html",
    "revision": "1d30155c55ea12047db605edc8319912"
  },
  {
    "url": "utils/library.html",
    "revision": "cf7a64d369b2e58213349c3f10c439dd"
  },
  {
    "url": "utils/regexp.html",
    "revision": "27a048d061972934cec087feeb360a07"
  },
  {
    "url": "vue/index.html",
    "revision": "7055e1f60c344de248fc7aac4d191a7b"
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
