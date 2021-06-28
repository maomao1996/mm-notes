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
    "revision": "a0782368532acf1f209ae7e818ff838f"
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
    "url": "assets/js/12.42adc275.js",
    "revision": "58a6a7124bc6950a68dec0ca182ef459"
  },
  {
    "url": "assets/js/13.3b8f6706.js",
    "revision": "b36bbaad231b7b77465892b43f7cf3a5"
  },
  {
    "url": "assets/js/14.3cdbd5ea.js",
    "revision": "68e9c10e4aee4dc0db49deb60ffe7913"
  },
  {
    "url": "assets/js/15.d0696a1e.js",
    "revision": "83b223f4f86b3941aeb36ecd86516e9d"
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
    "url": "assets/js/27.2faf5b31.js",
    "revision": "f9d4d7c1cc79224478483a336c8a36c2"
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
    "url": "assets/js/app.749acb08.js",
    "revision": "b5edb5e9ec648432efb7df413f2acc89"
  },
  {
    "url": "css/index.html",
    "revision": "5efe6756d42bbc8db088527445d67c81"
  },
  {
    "url": "css/scss.html",
    "revision": "2316a3f6bfcaa1fbdf566205f205347c"
  },
  {
    "url": "css/skill.html",
    "revision": "4bd916bf7c9667cec3f7b505b21e9b14"
  },
  {
    "url": "git/command.html",
    "revision": "c3e92c2e6f767902c8e402bf10c30add"
  },
  {
    "url": "git/index.html",
    "revision": "521194cfaa989c7d142a1e24d7e15209"
  },
  {
    "url": "index.html",
    "revision": "269d40ebbc090006fa72ccb8b74348c8"
  },
  {
    "url": "issue/h5.html",
    "revision": "0898667216dfd0ac35a89290bd2e24ab"
  },
  {
    "url": "issue/pc.html",
    "revision": "6e167c45e746356c10850deee3575d05"
  },
  {
    "url": "node/npm.html",
    "revision": "c6b3f50fafcc5b0d0fde43f5cb8ae92f"
  },
  {
    "url": "node/toolkit.html",
    "revision": "da0a620c8a8cfbb8e8b0d64af169cc50"
  },
  {
    "url": "online-tools/bookmark-scripts.html",
    "revision": "b27a10191afc36f88df30ffd37062bc6"
  },
  {
    "url": "online-tools/index.html",
    "revision": "2d37745fed2af7da836ae266d4f38a59"
  },
  {
    "url": "software/browser.html",
    "revision": "dc8653c2008da449820ca7aa89f96082"
  },
  {
    "url": "software/cross-platform.html",
    "revision": "16bade1b75b497eb970c65d71e1869a5"
  },
  {
    "url": "software/mac.html",
    "revision": "3b42612fcbd9b9100fd0a1a8051cbcc6"
  },
  {
    "url": "software/vscode.html",
    "revision": "cb69b6b0bde8640fcd90bbc4b10720e5"
  },
  {
    "url": "software/webstorm.html",
    "revision": "10b6d3aae322fb5259660bdbd45b1c5f"
  },
  {
    "url": "software/windows.html",
    "revision": "6206a6699e448222648816c310aa90bd"
  },
  {
    "url": "software/zsh.html",
    "revision": "9e33af9789ed3b954a45fb9921f55bcb"
  },
  {
    "url": "utils/function.html",
    "revision": "16c57a797cf7b149c10292151479f380"
  },
  {
    "url": "utils/library.html",
    "revision": "799475080ba4461cb63a738f7cfd0efe"
  },
  {
    "url": "utils/regexp.html",
    "revision": "515389208730166022d3b6151cc8a340"
  },
  {
    "url": "vue/index.html",
    "revision": "857e7e7be365dc46ccc824f7cf2554b7"
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
