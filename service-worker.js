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
    "revision": "eb165e0cfd36d60b1015f9b3b973b1bc"
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
    "url": "assets/js/21.ad439076.js",
    "revision": "55c4a16894468d925c490602e74679f3"
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
    "url": "assets/js/app.d6e6a965.js",
    "revision": "a2a76d9ec804b9b4becc992c2e05130e"
  },
  {
    "url": "css/index.html",
    "revision": "b618e56663325ecd2f407b1d8c0ca474"
  },
  {
    "url": "css/scss.html",
    "revision": "529b78f97e15dd5322c5b04faa393476"
  },
  {
    "url": "css/skill.html",
    "revision": "7362eb07b949bf96bc3f6d750f9bd01c"
  },
  {
    "url": "git/command.html",
    "revision": "7366c9ccf20cc62d6d46428a18277605"
  },
  {
    "url": "git/index.html",
    "revision": "50e4753bf72caaf85cf26ec522a573fa"
  },
  {
    "url": "index.html",
    "revision": "54f44d561154c8bc0fd0d684bbbc8dd6"
  },
  {
    "url": "issue/h5.html",
    "revision": "a0fb47e5d78e218748c383bb48a7d205"
  },
  {
    "url": "issue/pc.html",
    "revision": "8ee7b6b301d8214dcea1199c5e8b22d0"
  },
  {
    "url": "node/npm.html",
    "revision": "47eb3626c0fb5722052c39df1fde0851"
  },
  {
    "url": "node/toolkit.html",
    "revision": "6d629e0aa700b538f9ba26e1712edbec"
  },
  {
    "url": "software/browser.html",
    "revision": "0cbad16accb97f05ee31231afd2266d7"
  },
  {
    "url": "software/mac.html",
    "revision": "6e0137d2597d314501f1b975a1837305"
  },
  {
    "url": "software/vscode.html",
    "revision": "dc12695b52cdaaf5dbf16d81fa2d82bc"
  },
  {
    "url": "software/webstorm.html",
    "revision": "27fc4e8722065a372333df5a93b7a2cc"
  },
  {
    "url": "software/windows.html",
    "revision": "af43d717fe0e4741211ede29df45c564"
  },
  {
    "url": "software/zsh.html",
    "revision": "f344854460916dbc2498595610b823e9"
  },
  {
    "url": "utils/function.html",
    "revision": "2a906b68a085f80b93aa04494f502b17"
  },
  {
    "url": "utils/regexp.html",
    "revision": "b26db3d56c264979e51f8fb4d74c4882"
  },
  {
    "url": "vue/index.html",
    "revision": "be24558548f947c76d54bc2438b103d0"
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
