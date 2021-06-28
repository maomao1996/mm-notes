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
    "revision": "5995b5de963f48ec3c1e696c2c9ccda4"
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
    "url": "assets/js/10.9b043d01.js",
    "revision": "e9fbfeaac0c65f4a5aa879b2fb21c4be"
  },
  {
    "url": "assets/js/11.76cda4ff.js",
    "revision": "b55a845311ad12519de2006268adbbc2"
  },
  {
    "url": "assets/js/12.7b0aacd4.js",
    "revision": "e67c6cae0a50c8864efe816bf8a442f1"
  },
  {
    "url": "assets/js/13.bba53369.js",
    "revision": "55ba19989378132a397f003473b1079e"
  },
  {
    "url": "assets/js/14.37204b2c.js",
    "revision": "d2af32b7241c5156f03a721ca2ef2a01"
  },
  {
    "url": "assets/js/15.2dc8e8da.js",
    "revision": "dd15bcb5583390f9a9281b75a249fff8"
  },
  {
    "url": "assets/js/16.17aa52ce.js",
    "revision": "65dc2ea8e5e1536e84adcddd99b11a1d"
  },
  {
    "url": "assets/js/17.a1e239df.js",
    "revision": "1149c12ef8f16cd4fa30c96cec665eb0"
  },
  {
    "url": "assets/js/18.52bee490.js",
    "revision": "7d4bbd0ceba13febb9060391db493a1d"
  },
  {
    "url": "assets/js/19.f1ac7b3b.js",
    "revision": "b44257b1ae1a1fa4750146d68238233f"
  },
  {
    "url": "assets/js/2.992d2f78.js",
    "revision": "425e38a9675c4fb11d7344f7d85fdd13"
  },
  {
    "url": "assets/js/20.ba29d99e.js",
    "revision": "1854b14be864a8d444dc328dffc1c0df"
  },
  {
    "url": "assets/js/21.7266c257.js",
    "revision": "e8fad67d8cd761bd05f9953d08283d0e"
  },
  {
    "url": "assets/js/22.bafee729.js",
    "revision": "9ad4189b522be5986656c3fd4d624a94"
  },
  {
    "url": "assets/js/23.0db596dd.js",
    "revision": "e8e63046a007e3115806b62c8773769f"
  },
  {
    "url": "assets/js/24.aef1937e.js",
    "revision": "90db0cd79559e9b3206bafdd362a6a99"
  },
  {
    "url": "assets/js/25.e8341dd7.js",
    "revision": "be72a582b0b61140e1058437aada4cdb"
  },
  {
    "url": "assets/js/26.87942733.js",
    "revision": "b8b8ce3eab9f205ee2b0a3eeab25d047"
  },
  {
    "url": "assets/js/27.f5d9684b.js",
    "revision": "d7ebd19fb912594705de282c73bd5827"
  },
  {
    "url": "assets/js/28.17ce9dcd.js",
    "revision": "228b914f66ebf14518598514ddc56faf"
  },
  {
    "url": "assets/js/29.1e0dbcf7.js",
    "revision": "8674bfcfe9d0de653f0b1f0745063324"
  },
  {
    "url": "assets/js/3.819b7bf1.js",
    "revision": "b77f6122ec6f84ceb6f0c2c950def553"
  },
  {
    "url": "assets/js/30.e559123e.js",
    "revision": "92843eb9731812c8310fb78db85fad3f"
  },
  {
    "url": "assets/js/31.2f82700a.js",
    "revision": "062ea2eed9d7602c29a1da5269676042"
  },
  {
    "url": "assets/js/32.2523a8d2.js",
    "revision": "534c806929377f9aa405b70d70daeed9"
  },
  {
    "url": "assets/js/4.42b9297a.js",
    "revision": "658469963b2d9a069bbeb456c955ac04"
  },
  {
    "url": "assets/js/5.a6536030.js",
    "revision": "3004fb617adc3d848c6785e86053d204"
  },
  {
    "url": "assets/js/6.37d619c9.js",
    "revision": "06701dc420e3102306c404e2ed74fc7d"
  },
  {
    "url": "assets/js/7.6db37436.js",
    "revision": "bed9296b888b67e0e13d329a38d53e78"
  },
  {
    "url": "assets/js/8.6410305c.js",
    "revision": "cefe509f09924f5cc3dfbbe0c434e55e"
  },
  {
    "url": "assets/js/9.da83ba26.js",
    "revision": "e35929be25568a2e549ef9cc3f6a5ed9"
  },
  {
    "url": "assets/js/app.767f45de.js",
    "revision": "e51f120cf75f5433efb2223913e37465"
  },
  {
    "url": "css/index.html",
    "revision": "77663592aa9897d44324d494e3afbcc7"
  },
  {
    "url": "css/scss.html",
    "revision": "3eb70f2eb55a4b39a0115f432377f225"
  },
  {
    "url": "css/skill.html",
    "revision": "1d18985bbc4f0c901267c351fa9e866f"
  },
  {
    "url": "git/command.html",
    "revision": "66d8d61c3aae1e8a8d5d39ae5944f0f3"
  },
  {
    "url": "git/index.html",
    "revision": "d4e7f987c0c3d4ffd0d49cd78f9d1526"
  },
  {
    "url": "index.html",
    "revision": "040bf60fdc42da8d14916c0dc77a236e"
  },
  {
    "url": "issue/h5.html",
    "revision": "d5fd41aacb33bee680ff42e48d4119c3"
  },
  {
    "url": "issue/pc.html",
    "revision": "ca649a306a79e94a3d74cf6cbf3a7d04"
  },
  {
    "url": "node/npm.html",
    "revision": "d004efb3ee73c0dfe750915063f59bff"
  },
  {
    "url": "node/toolkit.html",
    "revision": "25e88b63bc87f702cba39b0388def0d8"
  },
  {
    "url": "online-tools/bookmark-scripts.html",
    "revision": "887632fb213ae94ac6ae2f1e7ea786a0"
  },
  {
    "url": "online-tools/index.html",
    "revision": "580d11ef9bf243d01be9226a876d94d8"
  },
  {
    "url": "software/browser.html",
    "revision": "37f8aef0058b8e43cb4d9f07a55f06d8"
  },
  {
    "url": "software/cross-platform.html",
    "revision": "546e635978b22ca7dc1654415d3df9a6"
  },
  {
    "url": "software/mac.html",
    "revision": "adbb000fd6afd659e60b746987158ccc"
  },
  {
    "url": "software/vscode.html",
    "revision": "8ef8ee6c07ca51d3190570b8b6f51cc9"
  },
  {
    "url": "software/webstorm.html",
    "revision": "ea18e8e81f72830a9890944a659ae06d"
  },
  {
    "url": "software/windows.html",
    "revision": "9a6192c4d03feb547321efdc29e5a5ae"
  },
  {
    "url": "software/zsh.html",
    "revision": "449e10e655ecfa9b2df14d88c321ab54"
  },
  {
    "url": "utils/function.html",
    "revision": "968a0633aa4cfdea36e3f35852760d63"
  },
  {
    "url": "utils/library.html",
    "revision": "c3eca5f0701d536dc649ed8b4fcb0ed8"
  },
  {
    "url": "utils/regexp.html",
    "revision": "90222b58adb6db926980b7ef43404f4f"
  },
  {
    "url": "vue/index.html",
    "revision": "1f7a35143310285c9c4df1d2b8f26af1"
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
