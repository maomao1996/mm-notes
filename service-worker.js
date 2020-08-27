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
    "revision": "6a1693c35eee97c05d114f000e7dfc27"
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
    "url": "assets/js/11.bd4bff3c.js",
    "revision": "0af854c5d5e5af939cc3c245e27cbb4d"
  },
  {
    "url": "assets/js/12.a5ab7be2.js",
    "revision": "2911254c895eaceba3bf467c9961aa97"
  },
  {
    "url": "assets/js/13.5d16a3cc.js",
    "revision": "5d0a1c2e9f4e6d9ef47252beac5c8b2e"
  },
  {
    "url": "assets/js/14.4e8bcc72.js",
    "revision": "5fe53068f42d6dd4c1d909f8b98663dd"
  },
  {
    "url": "assets/js/15.e1d35b26.js",
    "revision": "63e2630acae1a01a57deaf49573f4d33"
  },
  {
    "url": "assets/js/16.74e150f3.js",
    "revision": "151366b014e860d98a97d57c048ef397"
  },
  {
    "url": "assets/js/17.d2f37447.js",
    "revision": "b0d44e539130b6ba373082fd45d5e528"
  },
  {
    "url": "assets/js/18.d689188a.js",
    "revision": "cf3a3b73a265b0a95d15d4b50b80340e"
  },
  {
    "url": "assets/js/19.aabddfbf.js",
    "revision": "b6b865ed6ec9783bfba828e6c13eb284"
  },
  {
    "url": "assets/js/2.0d6dbd6d.js",
    "revision": "ce089b828b9628dc31c3c2f8709c0956"
  },
  {
    "url": "assets/js/20.d492555c.js",
    "revision": "71296d195cec69965ba951c1610fbfb7"
  },
  {
    "url": "assets/js/21.769b5c22.js",
    "revision": "9f034cb109f35cf29f4f5121f3100418"
  },
  {
    "url": "assets/js/22.e9e3e7ed.js",
    "revision": "6a2440a58f292ab1dd732e1a770ce1a4"
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
    "url": "assets/js/25.651f585f.js",
    "revision": "de7884c1ba85e5ea7829f3fbbc09ef47"
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
    "url": "assets/js/6.1f55ec10.js",
    "revision": "e54630ff7f345aec9bc13b185664c9be"
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
    "url": "assets/js/app.a6225d44.js",
    "revision": "3304740465d408cd0b880e46eb96c2fb"
  },
  {
    "url": "css/index.html",
    "revision": "7b814dee06ffd717c29924ae72e47f77"
  },
  {
    "url": "css/scss.html",
    "revision": "e3a5ea9506658b62cb0f1c888ad11313"
  },
  {
    "url": "css/skill.html",
    "revision": "82197d6a7cced458f4ecc07a747be7a9"
  },
  {
    "url": "git/command.html",
    "revision": "caf457f1beca51ad7fc6c8ea460c45f1"
  },
  {
    "url": "git/index.html",
    "revision": "0a41e0d37db4485fb17de20b7188383f"
  },
  {
    "url": "index.html",
    "revision": "50b5c8907ac45ea0632b23e155b53c51"
  },
  {
    "url": "issue/h5.html",
    "revision": "ca9d6c54627a795c2b4034be7ce4156d"
  },
  {
    "url": "issue/pc.html",
    "revision": "633f30f50b8f7ef3203d23971ca05c56"
  },
  {
    "url": "node/npm.html",
    "revision": "b9b01c272325404d6f3beeda9501b202"
  },
  {
    "url": "node/toolkit.html",
    "revision": "8cdfd7a3d3e9aa33d543c3323c7b20dd"
  },
  {
    "url": "software/browser.html",
    "revision": "fd3b188f84e080fd6101600a249e322a"
  },
  {
    "url": "software/mac.html",
    "revision": "0a2a70f1ef6d13eeaefc325815c222c7"
  },
  {
    "url": "software/vscode.html",
    "revision": "3d0354bc9324fc1c6a2490e30bcaa97a"
  },
  {
    "url": "software/webstorm.html",
    "revision": "79a124fefebdaca13b0ed43c34638d5b"
  },
  {
    "url": "software/windows.html",
    "revision": "e50d5bc480c1ca3e5f7a032d23022312"
  },
  {
    "url": "software/zsh.html",
    "revision": "6b1fcf96d0cdb706cd16c8d6bbdb67b2"
  },
  {
    "url": "utils/function.html",
    "revision": "cc1a4db97062c66d2b316a9eea55346b"
  },
  {
    "url": "utils/regexp.html",
    "revision": "14b6ec61589e601cc4bce134cd75e9b2"
  },
  {
    "url": "vue/index.html",
    "revision": "0af4e5ff1e7ed65f2fe116160c9c44a0"
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
