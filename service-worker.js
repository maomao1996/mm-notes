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
    "revision": "4c7bf51334a525a044b32af4273cf762"
  },
  {
    "url": "assets/css/0.styles.045a0977.css",
    "revision": "8145b087406583e3ea24c5250e314bf2"
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
    "url": "assets/js/10.31956f34.js",
    "revision": "c2c43ec026a32e255183e3f8cf4f258f"
  },
  {
    "url": "assets/js/11.114cc8e8.js",
    "revision": "bcb7e32499795b013879625f1273313f"
  },
  {
    "url": "assets/js/12.d0403188.js",
    "revision": "4f8dae3eaa3a4657211225767c00409f"
  },
  {
    "url": "assets/js/13.5d16a3cc.js",
    "revision": "5d0a1c2e9f4e6d9ef47252beac5c8b2e"
  },
  {
    "url": "assets/js/14.549c97b1.js",
    "revision": "ed737521f8ca08e294ca63ad4d449ac6"
  },
  {
    "url": "assets/js/15.e3f810a2.js",
    "revision": "1ab19f046d7e57cadc1e95dd5d90e649"
  },
  {
    "url": "assets/js/16.d7b8e9b9.js",
    "revision": "05bbe51908eccc294dc391aec475229e"
  },
  {
    "url": "assets/js/17.cbab4f9c.js",
    "revision": "cd1d32b1ba26664838d260b7e4146f95"
  },
  {
    "url": "assets/js/18.0afe62b5.js",
    "revision": "cb969f096ef396bf50784ece6516bf76"
  },
  {
    "url": "assets/js/19.d93cf557.js",
    "revision": "75f7c45184f32e1483c38e56cce41012"
  },
  {
    "url": "assets/js/2.0d6dbd6d.js",
    "revision": "ce089b828b9628dc31c3c2f8709c0956"
  },
  {
    "url": "assets/js/20.feccc43e.js",
    "revision": "5a84cd261ae012433a3e4f189f49063d"
  },
  {
    "url": "assets/js/21.a190ab78.js",
    "revision": "48b7fdaa0b8af53f59220bf07d9a9a2e"
  },
  {
    "url": "assets/js/22.305bf590.js",
    "revision": "26ffaaa6a3805e16fe1384668822188c"
  },
  {
    "url": "assets/js/23.28b60938.js",
    "revision": "370515a615421cd24596f0843467a401"
  },
  {
    "url": "assets/js/24.15c514e0.js",
    "revision": "44eee1e714f4e937c86211677df811f4"
  },
  {
    "url": "assets/js/25.268954c0.js",
    "revision": "d0b1160de543e9af5ac0b6677bda0f88"
  },
  {
    "url": "assets/js/26.93205842.js",
    "revision": "7fc8d7f0a3256a7d23d8ab8f505e5149"
  },
  {
    "url": "assets/js/3.382bc1a9.js",
    "revision": "752e3932c184e9a1f49fba74330dd2dc"
  },
  {
    "url": "assets/js/4.8f471528.js",
    "revision": "0a935ee58fc378fd5fc6bdb21c244970"
  },
  {
    "url": "assets/js/5.75c658d8.js",
    "revision": "f349edd583e3290850dd17c29f03ae2e"
  },
  {
    "url": "assets/js/6.e8d26585.js",
    "revision": "d64529af118e35a088c7d7927ff13c52"
  },
  {
    "url": "assets/js/7.201b1f06.js",
    "revision": "2cbe1d4b4f9eb040cf3595cb9feb53c3"
  },
  {
    "url": "assets/js/8.a3cd0157.js",
    "revision": "4438957f59f6a0d50967a2381d9b003c"
  },
  {
    "url": "assets/js/9.cb95b172.js",
    "revision": "532f84fa650160f9e43cc27e96f5651c"
  },
  {
    "url": "assets/js/app.aa72c27e.js",
    "revision": "7855d540c6de4fe42ad0320a8a9cc36a"
  },
  {
    "url": "css/index.html",
    "revision": "3ded8c878b10d088e44b7593669577b5"
  },
  {
    "url": "css/scss.html",
    "revision": "3b80325bd04738ec03f2e2e6a3c5214b"
  },
  {
    "url": "css/skill.html",
    "revision": "4496bb26a1f9638add17bf2d23985f49"
  },
  {
    "url": "git/command.html",
    "revision": "8862e89a2f21e40af7907ef63bee78f6"
  },
  {
    "url": "git/index.html",
    "revision": "582aa895d4ad2450d4ae0e94b2b2c87f"
  },
  {
    "url": "index.html",
    "revision": "5d15fe0245a298833220842e8736faa9"
  },
  {
    "url": "issue/h5.html",
    "revision": "4bdc12909804db61e1c44080a77b4bfe"
  },
  {
    "url": "issue/pc.html",
    "revision": "ea622cc076df2ceb66127996f47f9305"
  },
  {
    "url": "node/npm.html",
    "revision": "7bfbacf569459a87fb9771565ac6e0bd"
  },
  {
    "url": "node/toolkit.html",
    "revision": "f37500e26ab8834057d556693c67798e"
  },
  {
    "url": "software/browser.html",
    "revision": "f90ed7d27e4678efa57d7a6aac21ce33"
  },
  {
    "url": "software/mac.html",
    "revision": "5fa2f28d052cebfe1a2ca7e26790eeff"
  },
  {
    "url": "software/vscode.html",
    "revision": "0690d7a887e77a9dd5f22bdd575c8821"
  },
  {
    "url": "software/webstorm.html",
    "revision": "1b5900d1b3a974103bbecce1896c78f3"
  },
  {
    "url": "software/windows.html",
    "revision": "ec5575dcdb05b69cefcedd2c6a418c17"
  },
  {
    "url": "software/zsh.html",
    "revision": "557b24b8852d472ae121e71f1d587b04"
  },
  {
    "url": "utils/function.html",
    "revision": "663b9f871be2a4f590e65611cf1274b9"
  },
  {
    "url": "utils/regexp.html",
    "revision": "b6a21142212521a3fc8b7971f4ebe9aa"
  },
  {
    "url": "vue/index.html",
    "revision": "3b72223f827c905fae7f3949e43e5964"
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
