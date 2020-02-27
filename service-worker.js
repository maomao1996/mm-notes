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
    "revision": "e7497d960f03722feb07ccf30001500a"
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
    "url": "assets/js/11.f16dde4e.js",
    "revision": "b692ba2e4695d4e176e0bde71f8c7703"
  },
  {
    "url": "assets/js/12.5f777764.js",
    "revision": "8ec8282b3816f9ac44d4869488cf9b54"
  },
  {
    "url": "assets/js/13.339e0e3b.js",
    "revision": "b60c655f2777f1c7def4f68b4ccd6e1e"
  },
  {
    "url": "assets/js/14.5f277c4f.js",
    "revision": "37963ef77b1ad7fae2cd9530a31fe8bd"
  },
  {
    "url": "assets/js/15.df3caf29.js",
    "revision": "c1fb945ca007c11872dc915ad91f4d33"
  },
  {
    "url": "assets/js/16.830cf6a4.js",
    "revision": "23a959996670d421189aa0e235d16fa9"
  },
  {
    "url": "assets/js/17.d7b3b260.js",
    "revision": "371572951134738bd38b6ff95db31462"
  },
  {
    "url": "assets/js/18.913daf40.js",
    "revision": "4d2e1be5e53c1a4bfa8765b174ec95d7"
  },
  {
    "url": "assets/js/19.2fb3f6b7.js",
    "revision": "e931e52e449b48980d8b223120e0ba48"
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
    "url": "assets/js/8.a19f2db3.js",
    "revision": "f15356250c5ed62edf0c1bba43df84a7"
  },
  {
    "url": "assets/js/9.34b45f1e.js",
    "revision": "c28ded72e152203ced07a72467708a61"
  },
  {
    "url": "assets/js/app.4113e733.js",
    "revision": "9e924a02040f7aabc413fcc1d5cf42bf"
  },
  {
    "url": "css/index.html",
    "revision": "bbc9cb5ca0fe0fd0ac9ff80cbe3c94f4"
  },
  {
    "url": "css/scss.html",
    "revision": "0b644a09687fe7adc54053b4c84b367b"
  },
  {
    "url": "css/skill.html",
    "revision": "a53480dcb677bb24c61bdd5c3dfb0327"
  },
  {
    "url": "git/command.html",
    "revision": "ab00f4f840a2dedd147f7f5283a9b998"
  },
  {
    "url": "git/index.html",
    "revision": "d8771b3b12901bca2695ee2de643926b"
  },
  {
    "url": "index.html",
    "revision": "9d82e4893635f0c7e977e865aa1844be"
  },
  {
    "url": "node/depend.html",
    "revision": "dee2b5e4d280f2d81693bd35104bde06"
  },
  {
    "url": "node/npm.html",
    "revision": "2cc76beb4f1c7a0617a8d947703cb7cf"
  },
  {
    "url": "software/browser.html",
    "revision": "03ad6e2a6e6271799e0d108fe5833615"
  },
  {
    "url": "software/mac.html",
    "revision": "7b2a201a08f855d9fedee647bb97f5e1"
  },
  {
    "url": "software/windows.html",
    "revision": "7137e4c9e52ccad8472c90563b47b1d3"
  },
  {
    "url": "utils/function.html",
    "revision": "b9e62a7eece6ec79de451a267e643aff"
  },
  {
    "url": "utils/regexp.html",
    "revision": "afc6510273511712f832291858264a9c"
  },
  {
    "url": "vue/index.html",
    "revision": "cb578f4243ae20e234ac874edc19769f"
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
