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
    "revision": "7c7aea4704a7a4d153a56eb93cd7adaa"
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
    "url": "assets/js/10.6741d7e1.js",
    "revision": "54014ac629da842de9029d7bd8fb5a5e"
  },
  {
    "url": "assets/js/11.8583b54c.js",
    "revision": "77823e9cacfee01398692ec63b76aa75"
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
    "url": "assets/js/18.2b12ffc9.js",
    "revision": "462ab2154cf049f8a3ee03ffad1445f4"
  },
  {
    "url": "assets/js/19.a8530917.js",
    "revision": "30dbdd3757b57728af568b5b4423d9ea"
  },
  {
    "url": "assets/js/2.0d6dbd6d.js",
    "revision": "ce089b828b9628dc31c3c2f8709c0956"
  },
  {
    "url": "assets/js/20.09438101.js",
    "revision": "dd6184d61596f77b5b7fc15fa19bb757"
  },
  {
    "url": "assets/js/21.c3165063.js",
    "revision": "06ea07c4c5e4d80db5e2ce278b454fb8"
  },
  {
    "url": "assets/js/22.d382939e.js",
    "revision": "fbaaceb9b032664cdc0691b6f3e2d5c7"
  },
  {
    "url": "assets/js/23.28edc9ce.js",
    "revision": "aa3e41a78634cc97ce0cd1cc0d23cb23"
  },
  {
    "url": "assets/js/24.53f49d26.js",
    "revision": "fa30354e080454db854e9efeb2301b44"
  },
  {
    "url": "assets/js/25.6935ee99.js",
    "revision": "7aefbdf85420cc308bebd77a12c7701b"
  },
  {
    "url": "assets/js/26.c2d6f514.js",
    "revision": "5bdfe7e6ac7226248037a541d69de346"
  },
  {
    "url": "assets/js/27.97e98e9b.js",
    "revision": "dd627ed6f972f184e18b978f8f652374"
  },
  {
    "url": "assets/js/28.d1733203.js",
    "revision": "3644fa1037ea6385f27946f2b56c7595"
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
    "url": "assets/js/5.3a7e555b.js",
    "revision": "e4b0f0e04d012ccc61b928918cdf6835"
  },
  {
    "url": "assets/js/6.3f7e4152.js",
    "revision": "e929872fabf71e22a258a1006da38d62"
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
    "url": "assets/js/app.6d1d1e3d.js",
    "revision": "90dd03ac6f2d66873c4033f4fa9b5658"
  },
  {
    "url": "css/index.html",
    "revision": "7cc1a105e19483f93d67bc97c4c958ec"
  },
  {
    "url": "css/scss.html",
    "revision": "bfeb9aa3a7a08138b0ea6eb67182ae2a"
  },
  {
    "url": "css/skill.html",
    "revision": "74926dcd5ae5cc2d69980404018f682a"
  },
  {
    "url": "git/command.html",
    "revision": "dcad4f433e9870079303d6b354b1245c"
  },
  {
    "url": "git/index.html",
    "revision": "7ea084992a6e7ca1411150b18733f462"
  },
  {
    "url": "index.html",
    "revision": "57bc38c1adfbdbb35da74634e0cf666e"
  },
  {
    "url": "issue/h5.html",
    "revision": "00888fcc320031186cc4f63abb500a52"
  },
  {
    "url": "issue/pc.html",
    "revision": "d237426ff66bf5296cade943f0dab847"
  },
  {
    "url": "node/npm.html",
    "revision": "4acc122d862233598948ddd0ed4dfed4"
  },
  {
    "url": "node/toolkit.html",
    "revision": "5970da694c67c162f0c47fab33de886a"
  },
  {
    "url": "online-tools/bookmark-scripts.html",
    "revision": "eaa26526bf56d4466a252100e4dcd5e8"
  },
  {
    "url": "software/browser.html",
    "revision": "4ddfd7fe7fff6c48df775c4643bd0a26"
  },
  {
    "url": "software/cross-platform.html",
    "revision": "7cfe78d96bf1afbf19f8cc869c84d1f5"
  },
  {
    "url": "software/mac.html",
    "revision": "e18f74b6c17e41aa36f06f3cf31f006d"
  },
  {
    "url": "software/vscode.html",
    "revision": "8d66f492b14370c7edeca3cced830365"
  },
  {
    "url": "software/webstorm.html",
    "revision": "713e65d41c9d64250acddb2940ab1d0c"
  },
  {
    "url": "software/windows.html",
    "revision": "935926ebe32b8a306a9249bfeb26641d"
  },
  {
    "url": "software/zsh.html",
    "revision": "cd3e7063be7fc9e014e2015c81220050"
  },
  {
    "url": "utils/function.html",
    "revision": "cddd993adbb26fbc637b6f67722a0817"
  },
  {
    "url": "utils/regexp.html",
    "revision": "ab2c568627e2777383a3ab59a3c33b40"
  },
  {
    "url": "vue/index.html",
    "revision": "ea6480fe9e3100e7e51de9558b87fe9e"
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
