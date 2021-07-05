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
    "revision": "d7f89df0245ec6640c5b62864987bd1e"
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
    "url": "assets/js/12.c01884ef.js",
    "revision": "579a46b66188e5cac4144b5db4791200"
  },
  {
    "url": "assets/js/13.3b8f6706.js",
    "revision": "b36bbaad231b7b77465892b43f7cf3a5"
  },
  {
    "url": "assets/js/14.626bd8e1.js",
    "revision": "11a200f071977bb3007107698ae6b9b2"
  },
  {
    "url": "assets/js/15.7b5f9887.js",
    "revision": "d6ca782f33d869d40bc34ba1c7d89b55"
  },
  {
    "url": "assets/js/16.a853cb81.js",
    "revision": "ef4856581061c79a378c261c9059edd7"
  },
  {
    "url": "assets/js/17.9aa766cb.js",
    "revision": "238de0cd249232e281d2775661960095"
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
    "url": "assets/js/27.f7a0d495.js",
    "revision": "d401ad94add5348d702ed4e0eb9b19b6"
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
    "url": "assets/js/app.9296d212.js",
    "revision": "86586c6d20532146cb0078f72bbdb675"
  },
  {
    "url": "css/index.html",
    "revision": "204a2bdad368d1cc3fea2d1eec696392"
  },
  {
    "url": "css/scss.html",
    "revision": "a0d7f49bdd83629f715caa4d28a6989f"
  },
  {
    "url": "css/skill.html",
    "revision": "5ef0be623cc30d82b92208b79e3404a2"
  },
  {
    "url": "git/command.html",
    "revision": "d3703fa3019ce3f7711f90e68a20ce4e"
  },
  {
    "url": "git/index.html",
    "revision": "180ec6585fb8c5515daf2d29d5d035db"
  },
  {
    "url": "index.html",
    "revision": "58aea7a881fb64679b275bc969f26d99"
  },
  {
    "url": "issue/h5.html",
    "revision": "4cc54d0c54c0c8e3b36734e604dde16f"
  },
  {
    "url": "issue/pc.html",
    "revision": "6aeaebfbf1ef5a16d5caee8aed203b14"
  },
  {
    "url": "node/npm.html",
    "revision": "066e740b99e5598348f1cc5d997759e6"
  },
  {
    "url": "node/toolkit.html",
    "revision": "69e9e46e4cfd3b43dcce071af7491e90"
  },
  {
    "url": "online-tools/bookmark-scripts.html",
    "revision": "497e651674611d60d0157a720afc33d7"
  },
  {
    "url": "online-tools/index.html",
    "revision": "a868b752fef02c3e69bf2982c3d9f196"
  },
  {
    "url": "software/browser.html",
    "revision": "9ecb67fffaa2be90ac5f94a86adb695b"
  },
  {
    "url": "software/cross-platform.html",
    "revision": "38373596b4066eb0ab8ccf25a5a6a211"
  },
  {
    "url": "software/mac.html",
    "revision": "3802fd252c99b98fa3645244d5d54f4a"
  },
  {
    "url": "software/vscode.html",
    "revision": "258d7195cb3a5235b4b278671a4034d4"
  },
  {
    "url": "software/webstorm.html",
    "revision": "4482967a1b37e1dae74127de85488500"
  },
  {
    "url": "software/windows.html",
    "revision": "301b833a06f3e336f50ac40efacf8a30"
  },
  {
    "url": "software/zsh.html",
    "revision": "6a4b6d1f87e946ded75149eb2e48d8e0"
  },
  {
    "url": "utils/function.html",
    "revision": "3361141673a1f1e6abc44ac2f49b04d8"
  },
  {
    "url": "utils/library.html",
    "revision": "6095ab38dfe87959dee120e855ffe6ea"
  },
  {
    "url": "utils/regexp.html",
    "revision": "6d40d918b911d48a39254c9ddcdc6316"
  },
  {
    "url": "vue/index.html",
    "revision": "e53ac2fd1af24342932ff9bb4604ec50"
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
