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
    "revision": "e11be68efcb7323b7ba4268681af3dd0"
  },
  {
    "url": "assets/css/0.styles.3134d9f1.css",
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
    "url": "assets/js/10.9e33ef32.js",
    "revision": "1a882f61040be9b098eb67bfecfb7318"
  },
  {
    "url": "assets/js/11.9fd4a780.js",
    "revision": "eec9f75ef91536bcf62ac1e6aae0353b"
  },
  {
    "url": "assets/js/12.aff7af37.js",
    "revision": "b5f0b8a745c690957fe81528a7b8a63c"
  },
  {
    "url": "assets/js/13.44025892.js",
    "revision": "a070670fada88fbd17e2bd906d9d513e"
  },
  {
    "url": "assets/js/14.4eb1c6c1.js",
    "revision": "ec29aac8881840bd0640ec6aa794c147"
  },
  {
    "url": "assets/js/15.b8eb5311.js",
    "revision": "79f0b31cd717e15510a68bff7e5cd764"
  },
  {
    "url": "assets/js/16.a9d59222.js",
    "revision": "ac344eb7c555457da9334ece92d6a1c6"
  },
  {
    "url": "assets/js/17.ead0fef9.js",
    "revision": "52c55478346d30d7af6f794be49f3d5c"
  },
  {
    "url": "assets/js/18.9b7f12b3.js",
    "revision": "ba61fa838903257955203dd7e282d98b"
  },
  {
    "url": "assets/js/19.56db90d9.js",
    "revision": "f1fed65dd4d8a148b7c7f144bd56a2b7"
  },
  {
    "url": "assets/js/2.86a43efa.js",
    "revision": "fba9a8b4eadeaa27ad7022599bf07fbb"
  },
  {
    "url": "assets/js/20.a2b9d3c1.js",
    "revision": "c75732dfd10d98ee76b2ca978636dab8"
  },
  {
    "url": "assets/js/21.0bdee702.js",
    "revision": "4e33e09758ebcb3d1d0162df06cdd64c"
  },
  {
    "url": "assets/js/22.bba5804a.js",
    "revision": "e112cf1a6bfde14724baa5e946052732"
  },
  {
    "url": "assets/js/23.c4a7d528.js",
    "revision": "4e451d5c3df5beab015b7e627d72bec9"
  },
  {
    "url": "assets/js/24.738b0bcd.js",
    "revision": "a221c83709d692d1bb681f543dda768a"
  },
  {
    "url": "assets/js/25.c5e5260c.js",
    "revision": "1e30a551e77a9463693903a437676408"
  },
  {
    "url": "assets/js/26.45041344.js",
    "revision": "71cd1e83bc3082713a2d96c481a5f47e"
  },
  {
    "url": "assets/js/3.bba07ca6.js",
    "revision": "6e3dad5e1c7d705cb07023c52173bce1"
  },
  {
    "url": "assets/js/4.b8baadb9.js",
    "revision": "4a6c141b012082f63d9705715e120c92"
  },
  {
    "url": "assets/js/5.3f49c2e1.js",
    "revision": "11846c07e4a9d3af9a9dfd44c11dc4cd"
  },
  {
    "url": "assets/js/6.35e670b3.js",
    "revision": "cc2ddebe805a06b48dee85f1e5530db8"
  },
  {
    "url": "assets/js/7.c477c477.js",
    "revision": "8690027961796efada5b4a4ec3ccf9ba"
  },
  {
    "url": "assets/js/8.089ba109.js",
    "revision": "4abbdc226c4290f393ade857ea4ce185"
  },
  {
    "url": "assets/js/9.ce72ebd0.js",
    "revision": "c9b072102ac4cd4e97172f506e38e0fc"
  },
  {
    "url": "assets/js/app.148f90af.js",
    "revision": "6fa734c86735599c75afa80e6742ca81"
  },
  {
    "url": "css/index.html",
    "revision": "2f3ce5bea58d26b3a53191bd30467fd2"
  },
  {
    "url": "css/scss.html",
    "revision": "f10b36a5826607d3301967a0a9595398"
  },
  {
    "url": "css/skill.html",
    "revision": "a1b9e183437c31fea2e8a3f23c5255b8"
  },
  {
    "url": "git/command.html",
    "revision": "6d2f434f7044c8d4aa17811fbc7c2827"
  },
  {
    "url": "git/index.html",
    "revision": "1734c04ecab9bdc7c32115a42fb56d1a"
  },
  {
    "url": "index.html",
    "revision": "8ddb51ef4f8f60957f025b1868278131"
  },
  {
    "url": "issue/h5.html",
    "revision": "c3e75a6c6e45ece0ac0ac08ed8e29dc3"
  },
  {
    "url": "issue/pc.html",
    "revision": "33ae86bf87f4bc1f8f427f3d06b8c738"
  },
  {
    "url": "node/depend.html",
    "revision": "43d763c50ea14d497241d80ef1e28359"
  },
  {
    "url": "node/npm.html",
    "revision": "2a2c78210ff836abd707191149d0cae0"
  },
  {
    "url": "software/browser.html",
    "revision": "bb13e8242ac0eae6808186d641457d96"
  },
  {
    "url": "software/mac.html",
    "revision": "f4da52299e8e5fef2b0ff35ef8570f4f"
  },
  {
    "url": "software/vscode.html",
    "revision": "8e6c510f9e122f54446f69125d15349d"
  },
  {
    "url": "software/webstorm.html",
    "revision": "13a553bd59f5114ae87dc9440a75aea8"
  },
  {
    "url": "software/windows.html",
    "revision": "fa2d453c763d709a80ebdd612e4a4659"
  },
  {
    "url": "utils/function.html",
    "revision": "b14f9327ba682486f6c625ec062d7633"
  },
  {
    "url": "utils/regexp.html",
    "revision": "ab304d3c6596908a2994b85a1e77ed47"
  },
  {
    "url": "vue/index.html",
    "revision": "5e4336c58526b9d2ff6cabea94a331bf"
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
