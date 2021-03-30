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
    "revision": "7df025e3ae7787f955b3c15ebd076a74"
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
    "url": "assets/js/2.e9c630a0.js",
    "revision": "646cc7115e14eb4515e13bf0f8cc7911"
  },
  {
    "url": "assets/js/20.ec1e8835.js",
    "revision": "bbd22df1a4053f69f137449cdee35ad0"
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
    "url": "assets/js/7.f75f0df3.js",
    "revision": "6edf44bf1fce2ad0ab7a95d810859457"
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
    "url": "assets/js/app.e26b8a72.js",
    "revision": "bb77720af486127796b8cf4da267b6e8"
  },
  {
    "url": "css/index.html",
    "revision": "e90f92b01aa9b86fe38fff18f340710b"
  },
  {
    "url": "css/scss.html",
    "revision": "a30a5cf076207c719f8342ab17dfc2e7"
  },
  {
    "url": "css/skill.html",
    "revision": "c583408faa153233b41fccfc7672d17a"
  },
  {
    "url": "git/command.html",
    "revision": "24a49831ee8ba5fc7ee06b65ec68bfeb"
  },
  {
    "url": "git/index.html",
    "revision": "3bad512b28ca56fc59c359f63f7b15dd"
  },
  {
    "url": "index.html",
    "revision": "f59b8a2373fcb34fd2dd9af681fd4eb0"
  },
  {
    "url": "issue/h5.html",
    "revision": "35b214a9ae1e0110fb4014989303066f"
  },
  {
    "url": "issue/pc.html",
    "revision": "008238185e3204553a68e0d67a3bcdbe"
  },
  {
    "url": "node/npm.html",
    "revision": "ab9ca1fd6136b9e0c0d5392e72a7e7fa"
  },
  {
    "url": "node/toolkit.html",
    "revision": "15b278b17725d6ab5d2f3ad47059a2bd"
  },
  {
    "url": "online-tools/bookmark-scripts.html",
    "revision": "f66b1ef45d47eb6760ff73aae9c03018"
  },
  {
    "url": "online-tools/index.html",
    "revision": "ce03c06f328f53c281ed826fff4c9b6f"
  },
  {
    "url": "software/browser.html",
    "revision": "8b59c3b38fb4bb7ca8bed71e310cd91c"
  },
  {
    "url": "software/cross-platform.html",
    "revision": "148aa8785c46cb9a9aa413d34cc3ef1d"
  },
  {
    "url": "software/mac.html",
    "revision": "1a8cd229293d73c56c70fe1018a83b90"
  },
  {
    "url": "software/vscode.html",
    "revision": "46d90d498cbcc161745ce5a5efbb52d7"
  },
  {
    "url": "software/webstorm.html",
    "revision": "decdd5b521a09554c7dcddfb42702747"
  },
  {
    "url": "software/windows.html",
    "revision": "2c65f29ad62fadace2f4aa9750f6ad94"
  },
  {
    "url": "software/zsh.html",
    "revision": "63231404227adc5372db60ec545458e2"
  },
  {
    "url": "utils/function.html",
    "revision": "1c4d5746f58a0027ea8fb67039f3de34"
  },
  {
    "url": "utils/library.html",
    "revision": "b1bf34ea9c6dbeebf6625ef04d25337f"
  },
  {
    "url": "utils/regexp.html",
    "revision": "c5551f5da7d6f55ed071441e57d8f678"
  },
  {
    "url": "vue/index.html",
    "revision": "7cedf7ee6e661f570238c54ea59e2cc5"
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
