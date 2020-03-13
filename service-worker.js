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
    "revision": "41a8e8c10a21fe721705cd51b0504560"
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
    "url": "assets/js/10.f74ae1d7.js",
    "revision": "570fa67ccf477238e89c06f83a4150f9"
  },
  {
    "url": "assets/js/11.106c00dc.js",
    "revision": "d8f2610623dfa3fbea2bbd37405e32dd"
  },
  {
    "url": "assets/js/12.8529d3a1.js",
    "revision": "845446eb3b2116ded56b883e8acd95e1"
  },
  {
    "url": "assets/js/13.006314a0.js",
    "revision": "414750e368ddcd3ba1344dd815b72aae"
  },
  {
    "url": "assets/js/14.4c0e70ed.js",
    "revision": "8b4a1ccf6bed2fd6c5e98d3be31790a4"
  },
  {
    "url": "assets/js/15.1f971d41.js",
    "revision": "c77dc13f70a00886cf954606848b2fda"
  },
  {
    "url": "assets/js/16.c11a4e28.js",
    "revision": "8fe4c5a7d040458fee684dc83bbc222b"
  },
  {
    "url": "assets/js/17.a8acb936.js",
    "revision": "01e6d96a83c29017db7d9a361392e3ee"
  },
  {
    "url": "assets/js/18.dfd37064.js",
    "revision": "b20ca97cf2613c6040a78ab2a510c651"
  },
  {
    "url": "assets/js/19.e2b8e53f.js",
    "revision": "c5af2936d38e323b9cf39c1ef3c27d5e"
  },
  {
    "url": "assets/js/2.efb942e3.js",
    "revision": "093f3843fb73994024df773845bed087"
  },
  {
    "url": "assets/js/20.0b468979.js",
    "revision": "68385e74a0b0e1bf551b5cc511144680"
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
    "url": "assets/js/8.a19f2db3.js",
    "revision": "f15356250c5ed62edf0c1bba43df84a7"
  },
  {
    "url": "assets/js/9.34b45f1e.js",
    "revision": "c28ded72e152203ced07a72467708a61"
  },
  {
    "url": "assets/js/app.fca3c907.js",
    "revision": "7e6534c20d71b672a3bb1597dbc9577e"
  },
  {
    "url": "css/index.html",
    "revision": "af1d75b49ace11c94d9ad55b9c502bff"
  },
  {
    "url": "css/scss.html",
    "revision": "9cd447c4ab38db2a1c245811c3f95d88"
  },
  {
    "url": "css/skill.html",
    "revision": "202f375bbbdd335726166ab432508f0e"
  },
  {
    "url": "git/command.html",
    "revision": "247800d877a23cc6532f8f6169f7cf9e"
  },
  {
    "url": "git/index.html",
    "revision": "d270ae4f338619183df93062ef49da58"
  },
  {
    "url": "index.html",
    "revision": "5c7701d96476da547822e653b012a0a4"
  },
  {
    "url": "node/depend.html",
    "revision": "752ca58d8037ca835f881e46c2f0a449"
  },
  {
    "url": "node/npm.html",
    "revision": "18f3155e18c4527d57a845c9f4b93fbf"
  },
  {
    "url": "software/browser.html",
    "revision": "068846f8b7e5deb0bbc1787ca3620c8d"
  },
  {
    "url": "software/mac.html",
    "revision": "f502a6614b5ac5be47a8744fbbd77179"
  },
  {
    "url": "software/windows.html",
    "revision": "81f2d1f57afa3ce1f319a12a231dbe60"
  },
  {
    "url": "utils/function.html",
    "revision": "4a1ffc9c5f9b3dfc14d6118ac7b1b9a4"
  },
  {
    "url": "utils/regexp.html",
    "revision": "70ddeefc4b47899a3d22dd7b05fb2417"
  },
  {
    "url": "vue/index.html",
    "revision": "db81c22d6d2caf7c4a06aadcab820189"
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
