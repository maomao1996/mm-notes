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
    "revision": "ef8bb363d080b138f31c1c6a4ea6aa0c"
  },
  {
    "url": "assets/css/0.styles.f691032f.css",
    "revision": "25d6101dee0ee9d1e1238a3dad04c886"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.dec59f0b.js",
    "revision": "086eedf4822473a0eaa78b70bfba6b73"
  },
  {
    "url": "assets/js/11.f16dde4e.js",
    "revision": "b692ba2e4695d4e176e0bde71f8c7703"
  },
  {
    "url": "assets/js/12.f7602f4d.js",
    "revision": "7da02dfdb1b358c1ac205f9d35334256"
  },
  {
    "url": "assets/js/13.006314a0.js",
    "revision": "414750e368ddcd3ba1344dd815b72aae"
  },
  {
    "url": "assets/js/14.05b48f43.js",
    "revision": "bd55f7ee1609eeccda492f5fd940c413"
  },
  {
    "url": "assets/js/15.e24ce143.js",
    "revision": "e5f467a6d22e84342ac066a681e3530a"
  },
  {
    "url": "assets/js/16.c11a4e28.js",
    "revision": "8fe4c5a7d040458fee684dc83bbc222b"
  },
  {
    "url": "assets/js/17.dcbeed2d.js",
    "revision": "ba0bf53ab2d839006d14dba9577db975"
  },
  {
    "url": "assets/js/18.23551a2d.js",
    "revision": "990851007f91461d1ca9f04cdb50159d"
  },
  {
    "url": "assets/js/19.240721f9.js",
    "revision": "f8b7d99f934cda1a6b4dbd2810492c9a"
  },
  {
    "url": "assets/js/2.efb942e3.js",
    "revision": "093f3843fb73994024df773845bed087"
  },
  {
    "url": "assets/js/20.f41758f4.js",
    "revision": "8a1d1b567c4597dc02f6a6bc7d8a70fe"
  },
  {
    "url": "assets/js/21.7b3a6f3d.js",
    "revision": "83aa827fc7255a369b649a8078b178fa"
  },
  {
    "url": "assets/js/22.ff86084a.js",
    "revision": "043f2730849b6632664c8985385f707a"
  },
  {
    "url": "assets/js/3.ea75f2f5.js",
    "revision": "0d2f06855cc059411d34f2fb02a87548"
  },
  {
    "url": "assets/js/4.40fdd9ab.js",
    "revision": "45673508825dda9c8359e6988221ee87"
  },
  {
    "url": "assets/js/5.f5480d4b.js",
    "revision": "992c2ad257a87a752c61880b2b735d85"
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
    "url": "assets/js/9.90df4489.js",
    "revision": "9587ec8ae0184d41d94695272a612d04"
  },
  {
    "url": "assets/js/app.b765aeb2.js",
    "revision": "f720fe9a82adf4f2b71bf9b67c1ba359"
  },
  {
    "url": "css/index.html",
    "revision": "d72a82f01c5305d9ab1139746f56550f"
  },
  {
    "url": "css/scss.html",
    "revision": "a02f3d2bf8309a835c809a000fc3df55"
  },
  {
    "url": "css/skill.html",
    "revision": "cd9be5ee196ac66a00361f570d1541e1"
  },
  {
    "url": "git/command.html",
    "revision": "a262371b6bf2579749ae9540ebeb723a"
  },
  {
    "url": "git/index.html",
    "revision": "bd91afd1fa25eb8a0133076a788539f7"
  },
  {
    "url": "index.html",
    "revision": "ee386155de8ad8fd3ea631079e504b91"
  },
  {
    "url": "node/depend.html",
    "revision": "cf28b9c131679d3ce0756caee35c5de2"
  },
  {
    "url": "node/npm.html",
    "revision": "4174a272ac8a78434a02eb6cefb0efb8"
  },
  {
    "url": "software/browser.html",
    "revision": "da01340def7fb09540ca043492141661"
  },
  {
    "url": "software/mac.html",
    "revision": "2e6ef89b19e0daca0b98d33534bd4ccb"
  },
  {
    "url": "software/vscode.html",
    "revision": "ed2bcd5697d9b09f12468d0b528353fb"
  },
  {
    "url": "software/windows.html",
    "revision": "cd39510e8ef4bb2a1ae1e20fcd5ea2a1"
  },
  {
    "url": "utils/function.html",
    "revision": "93fb92c2a778e503c3bfe2ac61f56f3c"
  },
  {
    "url": "utils/regexp.html",
    "revision": "20f4938f67d503271dac20e64a0ace73"
  },
  {
    "url": "vue/index.html",
    "revision": "31810f267fdc62e74ea610c4f9b4704b"
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
