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
    "revision": "f432e8aba28d87933bd89f7ea49c5501"
  },
  {
    "url": "assets/css/0.styles.f20e8708.css",
    "revision": "a564f963a28567847913dd874ca699f4"
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
    "url": "assets/js/10.0c2f20d4.js",
    "revision": "c2c43ec026a32e255183e3f8cf4f258f"
  },
  {
    "url": "assets/js/11.8be2e6c5.js",
    "revision": "0af854c5d5e5af939cc3c245e27cbb4d"
  },
  {
    "url": "assets/js/12.a45b1149.js",
    "revision": "4b66de567a769a20e607febc9c3f2f95"
  },
  {
    "url": "assets/js/13.d5159ee7.js",
    "revision": "853b98f7e449120e2efdea418b5d20b7"
  },
  {
    "url": "assets/js/14.d6b7bdfd.js",
    "revision": "5fe53068f42d6dd4c1d909f8b98663dd"
  },
  {
    "url": "assets/js/15.82075bc8.js",
    "revision": "63e2630acae1a01a57deaf49573f4d33"
  },
  {
    "url": "assets/js/16.2dd9b2d0.js",
    "revision": "151366b014e860d98a97d57c048ef397"
  },
  {
    "url": "assets/js/17.b52da925.js",
    "revision": "b0d44e539130b6ba373082fd45d5e528"
  },
  {
    "url": "assets/js/18.8b30479e.js",
    "revision": "cf3a3b73a265b0a95d15d4b50b80340e"
  },
  {
    "url": "assets/js/19.b1f26cd8.js",
    "revision": "b6b865ed6ec9783bfba828e6c13eb284"
  },
  {
    "url": "assets/js/2.74f1ddc4.js",
    "revision": "29ff0771ebffc89e74303f697deb2771"
  },
  {
    "url": "assets/js/20.338dc091.js",
    "revision": "71296d195cec69965ba951c1610fbfb7"
  },
  {
    "url": "assets/js/21.8f3be277.js",
    "revision": "4dbae746f495cbced8b3bf345e157aba"
  },
  {
    "url": "assets/js/22.5271f018.js",
    "revision": "b6e70eb5b40e74b4c461e432fabf681b"
  },
  {
    "url": "assets/js/23.2d85de99.js",
    "revision": "f9c9c1c682bbfb52d0960eb1bc9e5a8c"
  },
  {
    "url": "assets/js/24.9e7be861.js",
    "revision": "941148427f7975ae8aac70fef02a18b0"
  },
  {
    "url": "assets/js/25.58d3c8ba.js",
    "revision": "de7884c1ba85e5ea7829f3fbbc09ef47"
  },
  {
    "url": "assets/js/26.93205842.js",
    "revision": "7fc8d7f0a3256a7d23d8ab8f505e5149"
  },
  {
    "url": "assets/js/3.f420ac36.js",
    "revision": "752e3932c184e9a1f49fba74330dd2dc"
  },
  {
    "url": "assets/js/4.20507842.js",
    "revision": "0a935ee58fc378fd5fc6bdb21c244970"
  },
  {
    "url": "assets/js/5.75c658d8.js",
    "revision": "f349edd583e3290850dd17c29f03ae2e"
  },
  {
    "url": "assets/js/6.cbbf305c.js",
    "revision": "e54630ff7f345aec9bc13b185664c9be"
  },
  {
    "url": "assets/js/7.a69f9ca3.js",
    "revision": "2cbe1d4b4f9eb040cf3595cb9feb53c3"
  },
  {
    "url": "assets/js/8.27b7bd80.js",
    "revision": "4438957f59f6a0d50967a2381d9b003c"
  },
  {
    "url": "assets/js/9.b3ff8de4.js",
    "revision": "532f84fa650160f9e43cc27e96f5651c"
  },
  {
    "url": "assets/js/app.0505ed27.js",
    "revision": "73590a8e32ec1e57e204a83d00d47b21"
  },
  {
    "url": "css/index.html",
    "revision": "057d0dcc59121809612ec2bbeb0bee50"
  },
  {
    "url": "css/scss.html",
    "revision": "fa5c9c9f386943b2d3c7d26ab54581d3"
  },
  {
    "url": "css/skill.html",
    "revision": "1dc2a09de803f2a965adb6143e4480dc"
  },
  {
    "url": "git/command.html",
    "revision": "c4545a4614c944fca0431072d39965d9"
  },
  {
    "url": "git/index.html",
    "revision": "a9619907d69c4b312e9b293b07714730"
  },
  {
    "url": "index.html",
    "revision": "0c951d2c0d8e42bc62073eeadfbf62a4"
  },
  {
    "url": "issue/h5.html",
    "revision": "a7f9f0ee77aaf76a880cc218516f0e0c"
  },
  {
    "url": "issue/pc.html",
    "revision": "09f3abfd1c4a32cc56489cc7bf0b9aec"
  },
  {
    "url": "node/npm.html",
    "revision": "291632b1a514150fc9e43e9196ddfcbc"
  },
  {
    "url": "node/toolkit.html",
    "revision": "5d26ddd2e8fd26ad7f93e298045ea378"
  },
  {
    "url": "software/browser.html",
    "revision": "12f84e1cf17c79bdd455fa2392744c90"
  },
  {
    "url": "software/mac.html",
    "revision": "4f10cf408e2670855a0067f35eaf9c6d"
  },
  {
    "url": "software/vscode.html",
    "revision": "08104545f6e5fdc5a689146d03ac9a67"
  },
  {
    "url": "software/webstorm.html",
    "revision": "6dd94c81a836920c44a4053a3f0ba03b"
  },
  {
    "url": "software/windows.html",
    "revision": "037f79219a96edd9b107cce407f889d6"
  },
  {
    "url": "software/zsh.html",
    "revision": "9f7dfac650b92f36fa6da6d1d4571073"
  },
  {
    "url": "utils/function.html",
    "revision": "72d019724bb22cb6eecc8568b64a2a0a"
  },
  {
    "url": "utils/regexp.html",
    "revision": "64f086546c3edb33a6ef54a4d5546b6b"
  },
  {
    "url": "vue/index.html",
    "revision": "9dcce8ad56d380cdb8765b625dad494a"
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
