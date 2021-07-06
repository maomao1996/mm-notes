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
    "revision": "eba74cbd2eb412ed1d2cb91b677e9bdc"
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
    "url": "assets/js/19.0937db93.js",
    "revision": "3f642317f492bf5bb4a009ab29fd16d7"
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
    "url": "assets/js/29.e0954585.js",
    "revision": "14d6906e2069912f50685b1c6207299a"
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
    "url": "assets/js/app.a999126d.js",
    "revision": "c07523d0fe1807617b1a86d03bc14022"
  },
  {
    "url": "css/index.html",
    "revision": "dbca8cb6de8632ff0bd09b57cca80551"
  },
  {
    "url": "css/scss.html",
    "revision": "6c61effa6dd9ee755706e72a2cd17047"
  },
  {
    "url": "css/skill.html",
    "revision": "71e0caadd3b1c731396d102ff95cee94"
  },
  {
    "url": "git/command.html",
    "revision": "01c1353f590706dd2a97b040b62fda43"
  },
  {
    "url": "git/index.html",
    "revision": "96145830a1e566090e67cf0b4a52e817"
  },
  {
    "url": "index.html",
    "revision": "21bdbcbeeece34362b85c5a4a181ad2d"
  },
  {
    "url": "issue/h5.html",
    "revision": "bb3aa11273a7707e29d479fea7607a5c"
  },
  {
    "url": "issue/pc.html",
    "revision": "658689924122e1108273518a291af8bb"
  },
  {
    "url": "node/npm.html",
    "revision": "a46d70705bca8a77e8fe46263aeefbf1"
  },
  {
    "url": "node/toolkit.html",
    "revision": "911ada390684734a75de33e1e056d039"
  },
  {
    "url": "online-tools/bookmark-scripts.html",
    "revision": "ab1bbedc0242bf3791eb46ca91b48c84"
  },
  {
    "url": "online-tools/index.html",
    "revision": "030c79ff76264300e6d6ee41b3099713"
  },
  {
    "url": "software/browser.html",
    "revision": "440446f09d9162462ab18e0ef2d6f835"
  },
  {
    "url": "software/cross-platform.html",
    "revision": "85148b0da150d03ba0a7d15c07e678fc"
  },
  {
    "url": "software/mac.html",
    "revision": "14b56ec04d9e3f5e97d6cfe36ee76e89"
  },
  {
    "url": "software/vscode.html",
    "revision": "86b35da099c6a165f381cbc68c6800e8"
  },
  {
    "url": "software/webstorm.html",
    "revision": "6a790633c6d88ce0f88f9990c0599639"
  },
  {
    "url": "software/windows.html",
    "revision": "a2eba078e0db56871593597c2087306c"
  },
  {
    "url": "software/zsh.html",
    "revision": "7b43f6b7d6fcffca14edc6a9072a7a86"
  },
  {
    "url": "utils/function.html",
    "revision": "0d2203bd4877a88d3266268ddf55b2c2"
  },
  {
    "url": "utils/library.html",
    "revision": "efc756b6d8ad55d02996a8d327f2ca1d"
  },
  {
    "url": "utils/regexp.html",
    "revision": "73edcf1c36d5c33a0721867124703750"
  },
  {
    "url": "vue/index.html",
    "revision": "60888abd78c1d8d14965ad3150340bad"
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
