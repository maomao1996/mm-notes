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
    "revision": "7e0d5d3cc15b327ff15fcc03dcb3725e"
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
    "url": "assets/js/2.9e937ca3.js",
    "revision": "b8af53fd0854891e1946233c4d6e9a66"
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
    "url": "assets/js/24.cc216d12.js",
    "revision": "a547d1ec64b9f20368077cebf29fcc90"
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
    "url": "assets/js/app.36145aac.js",
    "revision": "b9112950557de9d93531501cafb6dec5"
  },
  {
    "url": "css/index.html",
    "revision": "5d62146f3e9e362090807178013a3511"
  },
  {
    "url": "css/scss.html",
    "revision": "76164597842f803ca17da3fbffcd3c2e"
  },
  {
    "url": "css/skill.html",
    "revision": "5607ec4d544abc70a7051e6a8ddb8abf"
  },
  {
    "url": "git/command.html",
    "revision": "703109f871facc26647a5f0b25f237bd"
  },
  {
    "url": "git/index.html",
    "revision": "3c245742896b44bce4293f29644355cb"
  },
  {
    "url": "index.html",
    "revision": "a3c0d83fde10653c0f127d4bef885dcc"
  },
  {
    "url": "issue/h5.html",
    "revision": "f7e318fe54a8a830c483493d96a567aa"
  },
  {
    "url": "issue/pc.html",
    "revision": "b2d892391edb320b334f7b6144c927b5"
  },
  {
    "url": "node/npm.html",
    "revision": "044d01af8e1646c50a2d74f1b78e964a"
  },
  {
    "url": "node/toolkit.html",
    "revision": "148af88a4b86f437d9e8a5877a40e8c3"
  },
  {
    "url": "online-tools/bookmark-scripts.html",
    "revision": "9eb6800298bc745d3be75d39b3207e95"
  },
  {
    "url": "online-tools/index.html",
    "revision": "26ba334e91222c792faec0aa483fffe0"
  },
  {
    "url": "software/browser.html",
    "revision": "780e5cb7bb532c2f66d3273719b3ded2"
  },
  {
    "url": "software/cross-platform.html",
    "revision": "6a52b6faecca51c4ce1fecd9a8623492"
  },
  {
    "url": "software/mac.html",
    "revision": "932fb70627cacf09fed8c67653975a1c"
  },
  {
    "url": "software/vscode.html",
    "revision": "8af37b6645f7b9ac562a2ddf8c19fe0e"
  },
  {
    "url": "software/webstorm.html",
    "revision": "561433a5ea566ebf5e6b1da717d2080e"
  },
  {
    "url": "software/windows.html",
    "revision": "e98e70e9a9c370dd15a236822429a3b5"
  },
  {
    "url": "software/zsh.html",
    "revision": "c39869d8d4d4840623c61975041c0370"
  },
  {
    "url": "utils/function.html",
    "revision": "3016b8d60b89a5867211f4df02160212"
  },
  {
    "url": "utils/library.html",
    "revision": "f1d022123d93cf6a7da0b471058f25d8"
  },
  {
    "url": "utils/regexp.html",
    "revision": "1cdd426115e39541423618c47b2a05ee"
  },
  {
    "url": "vue/index.html",
    "revision": "7f0bb4c2625c80155c51038fbd445a4f"
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
