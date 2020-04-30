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
    "revision": "b246e6f78eb18d21c5072275b2254d99"
  },
  {
    "url": "assets/css/0.styles.eaaebaf1.css",
    "revision": "0ef924d7fbe505ba3040737f0a7635f4"
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
    "url": "assets/js/10.50b1dd36.js",
    "revision": "1a882f61040be9b098eb67bfecfb7318"
  },
  {
    "url": "assets/js/11.29e2d407.js",
    "revision": "eec9f75ef91536bcf62ac1e6aae0353b"
  },
  {
    "url": "assets/js/12.f6814210.js",
    "revision": "3a40dce8792d2cda98bfdca6aa4b51c8"
  },
  {
    "url": "assets/js/13.b71085ca.js",
    "revision": "a070670fada88fbd17e2bd906d9d513e"
  },
  {
    "url": "assets/js/14.a2ebfab4.js",
    "revision": "ec29aac8881840bd0640ec6aa794c147"
  },
  {
    "url": "assets/js/15.d0eef558.js",
    "revision": "79f0b31cd717e15510a68bff7e5cd764"
  },
  {
    "url": "assets/js/16.471146c7.js",
    "revision": "ac344eb7c555457da9334ece92d6a1c6"
  },
  {
    "url": "assets/js/17.7f90b9bb.js",
    "revision": "52c55478346d30d7af6f794be49f3d5c"
  },
  {
    "url": "assets/js/18.4228a5ac.js",
    "revision": "ba61fa838903257955203dd7e282d98b"
  },
  {
    "url": "assets/js/19.ae19bfb3.js",
    "revision": "f4c83a35978e868c5c17faba2386a05a"
  },
  {
    "url": "assets/js/2.1d66d02f.js",
    "revision": "fba9a8b4eadeaa27ad7022599bf07fbb"
  },
  {
    "url": "assets/js/20.3f80e32b.js",
    "revision": "c75732dfd10d98ee76b2ca978636dab8"
  },
  {
    "url": "assets/js/21.53b791c5.js",
    "revision": "4e33e09758ebcb3d1d0162df06cdd64c"
  },
  {
    "url": "assets/js/22.00a8f8d7.js",
    "revision": "e112cf1a6bfde14724baa5e946052732"
  },
  {
    "url": "assets/js/23.959acf4c.js",
    "revision": "4e451d5c3df5beab015b7e627d72bec9"
  },
  {
    "url": "assets/js/24.78f7e992.js",
    "revision": "a221c83709d692d1bb681f543dda768a"
  },
  {
    "url": "assets/js/25.04456514.js",
    "revision": "1e30a551e77a9463693903a437676408"
  },
  {
    "url": "assets/js/26.1d6d0178.js",
    "revision": "71cd1e83bc3082713a2d96c481a5f47e"
  },
  {
    "url": "assets/js/3.e1ff2eb7.js",
    "revision": "6e3dad5e1c7d705cb07023c52173bce1"
  },
  {
    "url": "assets/js/4.2dae253f.js",
    "revision": "4a6c141b012082f63d9705715e120c92"
  },
  {
    "url": "assets/js/5.96dd6dc7.js",
    "revision": "11846c07e4a9d3af9a9dfd44c11dc4cd"
  },
  {
    "url": "assets/js/6.88845739.js",
    "revision": "cc2ddebe805a06b48dee85f1e5530db8"
  },
  {
    "url": "assets/js/7.ce73c736.js",
    "revision": "8690027961796efada5b4a4ec3ccf9ba"
  },
  {
    "url": "assets/js/8.84a1ff70.js",
    "revision": "4abbdc226c4290f393ade857ea4ce185"
  },
  {
    "url": "assets/js/9.821aa6b5.js",
    "revision": "c9b072102ac4cd4e97172f506e38e0fc"
  },
  {
    "url": "assets/js/app.bccb67e3.js",
    "revision": "ef1dbc1973df2cb1dc0c2dc5dd88488f"
  },
  {
    "url": "css/index.html",
    "revision": "b369ba2dcfe42a7dc4fa05d239481e51"
  },
  {
    "url": "css/scss.html",
    "revision": "152535314f1217c82ee5a0ecde099857"
  },
  {
    "url": "css/skill.html",
    "revision": "4318c5743540176d6a9afffb7c0571eb"
  },
  {
    "url": "git/command.html",
    "revision": "29114f51aa4b43a2add0ce2cbd890000"
  },
  {
    "url": "git/index.html",
    "revision": "421f02cc8d7efb592128f0afae3e1194"
  },
  {
    "url": "index.html",
    "revision": "a714f939b67e65f917b39d56f1a32f98"
  },
  {
    "url": "issue/h5.html",
    "revision": "f89bbfc0900e7026c21e37f5759718da"
  },
  {
    "url": "issue/pc.html",
    "revision": "c454796fc38839edbcaf1312ee29ff49"
  },
  {
    "url": "node/depend.html",
    "revision": "52693865ca0beed8cc8b607f765428ac"
  },
  {
    "url": "node/npm.html",
    "revision": "1346b0607fc72ceebad134a40f905cfa"
  },
  {
    "url": "software/browser.html",
    "revision": "c0f1fcff84e2079b3a0a3d420f72a7c4"
  },
  {
    "url": "software/mac.html",
    "revision": "ec3524350014c9fdb92fb14ccf036702"
  },
  {
    "url": "software/vscode.html",
    "revision": "4e305fb4f1a7e3405303e19ea0331baa"
  },
  {
    "url": "software/webstorm.html",
    "revision": "7ccdbf78f6332283d354a3298d01a9c5"
  },
  {
    "url": "software/windows.html",
    "revision": "8808a3a85629e6a45e968141fb92e939"
  },
  {
    "url": "utils/function.html",
    "revision": "52a460f14834840618754ea6c0e010db"
  },
  {
    "url": "utils/regexp.html",
    "revision": "69d8f3a0cabd4f15670488908eb85fdb"
  },
  {
    "url": "vue/index.html",
    "revision": "256f50b1cc18ae3807f06de69060af75"
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
