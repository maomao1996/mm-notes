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
    "revision": "1b3bc509aae10250cda4b4603b9edffc"
  },
  {
    "url": "assets/css/0.styles.bb08940e.css",
    "revision": "c53d0ea9ecebce97a80983e960157f9f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.b127fe0d.js",
    "revision": "d43aa27d87d3cd250d873261abcc1955"
  },
  {
    "url": "assets/js/11.1d63d0b7.js",
    "revision": "8b8a93bfae508e2b03ff7852343a7e3a"
  },
  {
    "url": "assets/js/12.61e442cc.js",
    "revision": "6566d99332352142e866cf7856574133"
  },
  {
    "url": "assets/js/13.774c5723.js",
    "revision": "b7554b876aaf1ec142dfa17bc257d98c"
  },
  {
    "url": "assets/js/14.55313ff3.js",
    "revision": "1db46afd0255cb3b7cd3bcf5bd18d700"
  },
  {
    "url": "assets/js/15.31e18243.js",
    "revision": "02b5bd736f0a692f6a917c56f90f4533"
  },
  {
    "url": "assets/js/16.99c33400.js",
    "revision": "5f45bbef436e6e7db2ce1e5bcd101a49"
  },
  {
    "url": "assets/js/17.fe69422b.js",
    "revision": "6ac3d1be1cae499261068ff8a9a2cb13"
  },
  {
    "url": "assets/js/18.44288832.js",
    "revision": "58dde5815831db874be2cef58969bf1d"
  },
  {
    "url": "assets/js/19.bcfbb986.js",
    "revision": "a8fe09eccd7cbf7345947a5e5321121c"
  },
  {
    "url": "assets/js/2.e2514d34.js",
    "revision": "3c0298d2e898faa59ac30c9ad2ab552a"
  },
  {
    "url": "assets/js/3.787f74aa.js",
    "revision": "2f7f9b694fee64a47a5cf610c1f4857d"
  },
  {
    "url": "assets/js/4.40fdd9ab.js",
    "revision": "45673508825dda9c8359e6988221ee87"
  },
  {
    "url": "assets/js/5.5a89d70e.js",
    "revision": "7558a45ed7ee7e6eabe2875e1ab97cc0"
  },
  {
    "url": "assets/js/6.de5e72eb.js",
    "revision": "959a0b9ed72de8cf3fdd95d804fb7978"
  },
  {
    "url": "assets/js/7.c15f80be.js",
    "revision": "b9dd59cf493b3f26bf8c06f9fe0a8bb4"
  },
  {
    "url": "assets/js/8.adbe05f7.js",
    "revision": "4da4c13e178ee3be69a01b428e09b843"
  },
  {
    "url": "assets/js/9.96da2f9d.js",
    "revision": "3b021eaab758334b83810a510628624a"
  },
  {
    "url": "assets/js/app.c30eb6af.js",
    "revision": "ec6dea23db25d88f69023131eb1d5273"
  },
  {
    "url": "css/index.html",
    "revision": "10a7cb20b234243bfc3197516996d7ef"
  },
  {
    "url": "css/scss.html",
    "revision": "696a7ed25f8e1c78baa915b57a171c73"
  },
  {
    "url": "css/skill.html",
    "revision": "40ab34d5345687a60384fedc92096c14"
  },
  {
    "url": "git/command.html",
    "revision": "f0302f969964d8b947847ef5ef9df34e"
  },
  {
    "url": "git/index.html",
    "revision": "e1d4a4b57f4e9dc43cc6a975c7927134"
  },
  {
    "url": "index.html",
    "revision": "b1dbd2440389258b6481c8d72d250a5c"
  },
  {
    "url": "node/depend.html",
    "revision": "ddb3ba9ad42812590cfb1e8211b867cb"
  },
  {
    "url": "node/npm.html",
    "revision": "16e7a9719c9f9525e9573f4d876e0173"
  },
  {
    "url": "software/mac.html",
    "revision": "dcdb369bf4338706a76e7906519cb9a2"
  },
  {
    "url": "utils/function.html",
    "revision": "138bba083de16ce564446c0b0fcf0d67"
  },
  {
    "url": "utils/regexp.html",
    "revision": "f26fbfe28304763b24958e94c366ced2"
  },
  {
    "url": "vue/index.html",
    "revision": "3a3d68fc9b9d83c64aa4906499974e25"
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
