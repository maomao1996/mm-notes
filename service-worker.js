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
    "revision": "c73a2e7cf461e78ff24357e82ab0be1a"
  },
  {
    "url": "assets/css/0.styles.653830aa.css",
    "revision": "0ef924d7fbe505ba3040737f0a7635f4"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.70098307.js",
    "revision": "2a3df63f0317d4f89b1a49f06908bc5a"
  },
  {
    "url": "assets/js/11.9732895e.js",
    "revision": "9867fe9ac30c7c7c1e66f410b45d5b2c"
  },
  {
    "url": "assets/js/12.bf997df3.js",
    "revision": "9b890637d9ba708f6ca52c67d34dad3a"
  },
  {
    "url": "assets/js/13.9b7aad3f.js",
    "revision": "e87dc25fa95b74170c213832535144f1"
  },
  {
    "url": "assets/js/14.7d7c8cf8.js",
    "revision": "dd6584cc309e3189f53960b51ee2ac4c"
  },
  {
    "url": "assets/js/15.8801cbbd.js",
    "revision": "fff1d7465fd335bc497c91cb4dd7c71d"
  },
  {
    "url": "assets/js/16.4167627f.js",
    "revision": "d63ba51e04e1f44ee39a3aa3c077ec09"
  },
  {
    "url": "assets/js/17.f44f60df.js",
    "revision": "95c6efd8ab8287088dd32c270fdb9991"
  },
  {
    "url": "assets/js/18.371c5eac.js",
    "revision": "3355210b8e3a6cebed55419b8c4a6a8a"
  },
  {
    "url": "assets/js/19.7ffd02a1.js",
    "revision": "ce1b8734eccbc64be2011aa9a849b279"
  },
  {
    "url": "assets/js/2.43b048c2.js",
    "revision": "abd9017238a5af4d2a79fd43bd312039"
  },
  {
    "url": "assets/js/20.cd5697d9.js",
    "revision": "ee102a1cc30162282080bee5047b175d"
  },
  {
    "url": "assets/js/21.6c2633b5.js",
    "revision": "4c49e61523b7155ea0010cfa0e790cad"
  },
  {
    "url": "assets/js/22.3c924e91.js",
    "revision": "6e88a9b448cead0409886b126b9954b9"
  },
  {
    "url": "assets/js/23.2f9c3e31.js",
    "revision": "de3139e6e05daaa1efd6d7eab975d123"
  },
  {
    "url": "assets/js/24.27380b01.js",
    "revision": "8b65be167dca822927dc78c46d23f92f"
  },
  {
    "url": "assets/js/25.d1940f0d.js",
    "revision": "07df5477064e350211e9339d0b7afa08"
  },
  {
    "url": "assets/js/3.b4b96c26.js",
    "revision": "01850204c7e0c1a287c563b6d66a1a15"
  },
  {
    "url": "assets/js/4.ae84d2ed.js",
    "revision": "9d0160215bb973851d4967b8a9c6864d"
  },
  {
    "url": "assets/js/5.ce31e539.js",
    "revision": "b6e51c3287b6b0ee827179c71284e848"
  },
  {
    "url": "assets/js/6.de5f5837.js",
    "revision": "e1c67d939734d20bc3b8ffaac5488a19"
  },
  {
    "url": "assets/js/7.825afeb8.js",
    "revision": "6119067b12446f6d1a6021d9c7ef3a3b"
  },
  {
    "url": "assets/js/8.8f65f23f.js",
    "revision": "e262b9067532e412c11ac3a8185480c8"
  },
  {
    "url": "assets/js/9.22283bc2.js",
    "revision": "045f6fc4aab03405123f647d6b2836e6"
  },
  {
    "url": "assets/js/app.5518c001.js",
    "revision": "aa93516de8d2e7045c6386ecd9e83486"
  },
  {
    "url": "css/index.html",
    "revision": "da5fe5ddd24cd72fd22ebcdfb5d22c27"
  },
  {
    "url": "css/scss.html",
    "revision": "a1878edbb5e8e314b71b0804b17a96f7"
  },
  {
    "url": "css/skill.html",
    "revision": "0faa33f37b1139002b6ccff077ff8c75"
  },
  {
    "url": "git/command.html",
    "revision": "23799b118a6d1df558728032f660ca24"
  },
  {
    "url": "git/index.html",
    "revision": "7627c2cc9d8882cc9f55ea76ec8bea9f"
  },
  {
    "url": "index.html",
    "revision": "3755bd881279e221efbf237690fbe67f"
  },
  {
    "url": "issue/h5.html",
    "revision": "78b0555064f3465ac3c35cf06e8be689"
  },
  {
    "url": "issue/pc.html",
    "revision": "ca6c410644ce6ccf66de544c2db099ec"
  },
  {
    "url": "node/depend.html",
    "revision": "1dc8753e8287c5870b8a20b7b3387889"
  },
  {
    "url": "node/npm.html",
    "revision": "b10483905f1c3db77f997d1ca9e7ef81"
  },
  {
    "url": "software/browser.html",
    "revision": "9a81175e8b76a1f162ec4c78ac5fc2ce"
  },
  {
    "url": "software/mac.html",
    "revision": "9a765be36d0ce48f7487ba8326e5b380"
  },
  {
    "url": "software/vscode.html",
    "revision": "7dbead2515f6395bd31d27cdbff0f7a3"
  },
  {
    "url": "software/windows.html",
    "revision": "838db568233b2e10e42f167dc42be710"
  },
  {
    "url": "utils/function.html",
    "revision": "a0dbd8b4ead04fb703120be6d81963d2"
  },
  {
    "url": "utils/regexp.html",
    "revision": "43a4ffd58b6e130b90c9cae134d83728"
  },
  {
    "url": "vue/index.html",
    "revision": "191d9ec4fdcc7a52bc920fcd2251d125"
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
