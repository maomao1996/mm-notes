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
    "revision": "f35a0fe1422dce5dc33c5fb72f3a72dc"
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
    "url": "assets/js/15.1bea4e06.js",
    "revision": "c8a56c5e7b44feed3cd359e4bc69835f"
  },
  {
    "url": "assets/js/16.830cf6a4.js",
    "revision": "23a959996670d421189aa0e235d16fa9"
  },
  {
    "url": "assets/js/17.d7806b6e.js",
    "revision": "a1c3b98c16e9632e1bed674ffe1d3748"
  },
  {
    "url": "assets/js/18.82e54566.js",
    "revision": "2bac5ecd5cacc402abfe9afb738458c0"
  },
  {
    "url": "assets/js/19.05db6958.js",
    "revision": "a42c2001d5c069fa2b3a6da6be132a64"
  },
  {
    "url": "assets/js/2.efb942e3.js",
    "revision": "093f3843fb73994024df773845bed087"
  },
  {
    "url": "assets/js/20.e65f4614.js",
    "revision": "14c44fd684583532c67ca32bd25144e0"
  },
  {
    "url": "assets/js/21.7f24fb35.js",
    "revision": "cee8a6e101017029bd0210379c03b1ad"
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
    "url": "assets/js/5.8554bda0.js",
    "revision": "f428d5b5d22439eaa77d6002ff9b47a8"
  },
  {
    "url": "assets/js/6.de5e72eb.js",
    "revision": "959a0b9ed72de8cf3fdd95d804fb7978"
  },
  {
    "url": "assets/js/7.6df0cb5a.js",
    "revision": "2c4907acc5d2aa87da7166292b5b0cbe"
  },
  {
    "url": "assets/js/8.fefb1abc.js",
    "revision": "76acaca907af03b1c5689ea9c4062784"
  },
  {
    "url": "assets/js/9.90df4489.js",
    "revision": "9587ec8ae0184d41d94695272a612d04"
  },
  {
    "url": "assets/js/app.49a72e64.js",
    "revision": "b5977ec7571ff4d53cf249bc0616e29a"
  },
  {
    "url": "css/index.html",
    "revision": "b4cd71cdf89a16d70a4ebe2bcc97182c"
  },
  {
    "url": "css/scss.html",
    "revision": "7d6f990245971732601ec74fab3125bc"
  },
  {
    "url": "css/skill.html",
    "revision": "4b1fbfef6929c13ee2fbc5cdf6cef18b"
  },
  {
    "url": "git/command.html",
    "revision": "211e54f57b0ee2e41c0a1bab0a990b47"
  },
  {
    "url": "git/index.html",
    "revision": "7522d31b6bc256778920d46c1c32cc91"
  },
  {
    "url": "index.html",
    "revision": "8a9bc9e3e7df0bbc0b6636f169dfa583"
  },
  {
    "url": "node/depend.html",
    "revision": "2f990280199d3eab977cfbc871889f2f"
  },
  {
    "url": "node/npm.html",
    "revision": "28ae561225533aa92e6a45895429cddf"
  },
  {
    "url": "software/browser.html",
    "revision": "9f65e72a7028b4354a832ba4efd6d818"
  },
  {
    "url": "software/mac.html",
    "revision": "2e1315f9ee25961db13bd2910fe26a12"
  },
  {
    "url": "software/windows.html",
    "revision": "68a233b8bf1e13670f9dcf4234748394"
  },
  {
    "url": "utils/function.html",
    "revision": "683b00d723f3265ce6e2afb6ab95590c"
  },
  {
    "url": "utils/regexp.html",
    "revision": "eb9822391528c1fa2d9d6daa4e2a5154"
  },
  {
    "url": "vue/index.html",
    "revision": "be089c7c17d7c099cfe48702f03e2495"
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
