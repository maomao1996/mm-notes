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
    "revision": "1fc65acb5010735fc445e064770f94d3"
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
    "url": "assets/js/11.b1ddc09f.js",
    "revision": "44235b8af1497b7f7c0334f38efbc504"
  },
  {
    "url": "assets/js/12.5f777764.js",
    "revision": "8ec8282b3816f9ac44d4869488cf9b54"
  },
  {
    "url": "assets/js/13.97dfbf4a.js",
    "revision": "bbe0d45c5fc2a95cf8bc905a6fefdeb9"
  },
  {
    "url": "assets/js/14.5f277c4f.js",
    "revision": "37963ef77b1ad7fae2cd9530a31fe8bd"
  },
  {
    "url": "assets/js/15.5a4dc2b2.js",
    "revision": "39a88ce28e548ee7a04c4ec97ea5f382"
  },
  {
    "url": "assets/js/16.4e8c3bef.js",
    "revision": "6d20dce931e23edf2c0584c005781d7b"
  },
  {
    "url": "assets/js/17.40d13493.js",
    "revision": "b95d0bf07717c1003314c081db346e2d"
  },
  {
    "url": "assets/js/18.913daf40.js",
    "revision": "4d2e1be5e53c1a4bfa8765b174ec95d7"
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
    "url": "assets/js/app.177b8da5.js",
    "revision": "840318cec69d48fb690714712695b126"
  },
  {
    "url": "css/index.html",
    "revision": "446400a80d76cb5b0174b6290acfea27"
  },
  {
    "url": "css/scss.html",
    "revision": "cd42b15b85067137675a366112ed4d32"
  },
  {
    "url": "css/skill.html",
    "revision": "ed9de2ae4a3cd2514ac161876759d0ad"
  },
  {
    "url": "git/command.html",
    "revision": "07a736b99df3edc6f75f652a61ed901b"
  },
  {
    "url": "git/index.html",
    "revision": "3d8ae2433ea79aca23f678dfc5e11d8b"
  },
  {
    "url": "index.html",
    "revision": "1a4b749de21f21e8373ee05da91827c2"
  },
  {
    "url": "node/depend.html",
    "revision": "dfe3a8e2b5f19008b474dd9f53d9a88b"
  },
  {
    "url": "node/npm.html",
    "revision": "73168e40e2c6ddee6b1bbcf72f6825ee"
  },
  {
    "url": "software/browser.html",
    "revision": "2e1a0ce600d8af57b7e708045c78af93"
  },
  {
    "url": "software/mac.html",
    "revision": "991c91f25972caf511feacc4e910a67a"
  },
  {
    "url": "software/windows.html",
    "revision": "0264ce9ccc897d72f6b51fb934d315d5"
  },
  {
    "url": "utils/function.html",
    "revision": "61e8121d981c8aaef55567ab5b25bcec"
  },
  {
    "url": "utils/regexp.html",
    "revision": "078f5c76ae479588c647f147c67762c0"
  },
  {
    "url": "vue/index.html",
    "revision": "0733cc9f05c6cf965924774fee1e42e3"
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
