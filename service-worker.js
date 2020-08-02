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
    "revision": "a027d4aa630616657422eac99e1e9b14"
  },
  {
    "url": "assets/css/0.styles.f1ecd4b0.css",
    "revision": "d99ca45e02c38f35b230dd51ae2cc037"
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
    "url": "assets/js/10.ca90b8d1.js",
    "revision": "c2c43ec026a32e255183e3f8cf4f258f"
  },
  {
    "url": "assets/js/11.2f97bf4f.js",
    "revision": "0af854c5d5e5af939cc3c245e27cbb4d"
  },
  {
    "url": "assets/js/12.e0a06fef.js",
    "revision": "4b66de567a769a20e607febc9c3f2f95"
  },
  {
    "url": "assets/js/13.5de590a7.js",
    "revision": "853b98f7e449120e2efdea418b5d20b7"
  },
  {
    "url": "assets/js/14.2d9419f6.js",
    "revision": "5fe53068f42d6dd4c1d909f8b98663dd"
  },
  {
    "url": "assets/js/15.56c955bb.js",
    "revision": "63e2630acae1a01a57deaf49573f4d33"
  },
  {
    "url": "assets/js/16.eff64a44.js",
    "revision": "151366b014e860d98a97d57c048ef397"
  },
  {
    "url": "assets/js/17.2b273adc.js",
    "revision": "b0d44e539130b6ba373082fd45d5e528"
  },
  {
    "url": "assets/js/18.66756dd8.js",
    "revision": "cf3a3b73a265b0a95d15d4b50b80340e"
  },
  {
    "url": "assets/js/19.ba914f31.js",
    "revision": "b6b865ed6ec9783bfba828e6c13eb284"
  },
  {
    "url": "assets/js/2.b6435333.js",
    "revision": "47867ff2cdd65c6ceb3725ea6118cda9"
  },
  {
    "url": "assets/js/20.c916a1eb.js",
    "revision": "3a2cc1151a051c2c2e84642c655f53c8"
  },
  {
    "url": "assets/js/21.ec3e8ace.js",
    "revision": "4dbae746f495cbced8b3bf345e157aba"
  },
  {
    "url": "assets/js/22.91716c88.js",
    "revision": "b6e70eb5b40e74b4c461e432fabf681b"
  },
  {
    "url": "assets/js/23.7fd1c513.js",
    "revision": "f9c9c1c682bbfb52d0960eb1bc9e5a8c"
  },
  {
    "url": "assets/js/24.524574b0.js",
    "revision": "941148427f7975ae8aac70fef02a18b0"
  },
  {
    "url": "assets/js/25.86e2beb4.js",
    "revision": "92818a64785fbce177f547c20b5326ad"
  },
  {
    "url": "assets/js/26.93205842.js",
    "revision": "7fc8d7f0a3256a7d23d8ab8f505e5149"
  },
  {
    "url": "assets/js/3.431d1b43.js",
    "revision": "752e3932c184e9a1f49fba74330dd2dc"
  },
  {
    "url": "assets/js/4.3486c7c1.js",
    "revision": "0a935ee58fc378fd5fc6bdb21c244970"
  },
  {
    "url": "assets/js/5.75c658d8.js",
    "revision": "f349edd583e3290850dd17c29f03ae2e"
  },
  {
    "url": "assets/js/6.c187c35b.js",
    "revision": "875d80a22146e45d48e739c631ba98bc"
  },
  {
    "url": "assets/js/7.faafe814.js",
    "revision": "2cbe1d4b4f9eb040cf3595cb9feb53c3"
  },
  {
    "url": "assets/js/8.df0444fa.js",
    "revision": "4438957f59f6a0d50967a2381d9b003c"
  },
  {
    "url": "assets/js/9.76e782fb.js",
    "revision": "532f84fa650160f9e43cc27e96f5651c"
  },
  {
    "url": "assets/js/app.0f6936f5.js",
    "revision": "8e552b2fcf3f635166087a48152e0a70"
  },
  {
    "url": "css/index.html",
    "revision": "596375aa833b2f470dcc8c03e9f24b74"
  },
  {
    "url": "css/scss.html",
    "revision": "b2715311ecbe77cf9a95801b2a0b5c22"
  },
  {
    "url": "css/skill.html",
    "revision": "dd735f086b4ce8b723ad094324b56579"
  },
  {
    "url": "git/command.html",
    "revision": "32552b57b559f67b19b3d2e0ee4848df"
  },
  {
    "url": "git/index.html",
    "revision": "0657efcbbe5275509e504338dc49fc0d"
  },
  {
    "url": "index.html",
    "revision": "81dcde9690622d131be0531262920721"
  },
  {
    "url": "issue/h5.html",
    "revision": "0f7174f50ed14d59de98b9cada0b8522"
  },
  {
    "url": "issue/pc.html",
    "revision": "2801af0c3f57d286da59bab8a9cf0f69"
  },
  {
    "url": "node/npm.html",
    "revision": "1a1aebe2cd8f34de8f020eeeae53a5eb"
  },
  {
    "url": "node/toolkit.html",
    "revision": "488f1f3f36575a714d647262dd03af1b"
  },
  {
    "url": "software/browser.html",
    "revision": "adb9113176c884b4943673c7ffd08ec1"
  },
  {
    "url": "software/mac.html",
    "revision": "6f6c5879cd4cfa3854d3208988aecade"
  },
  {
    "url": "software/vscode.html",
    "revision": "3964457315b80c53d52e1410f2a04e81"
  },
  {
    "url": "software/webstorm.html",
    "revision": "021f4fb45320db3209dc978dcef68195"
  },
  {
    "url": "software/windows.html",
    "revision": "ce8896251b3d84b0e14e14dbe53fa0ed"
  },
  {
    "url": "software/zsh.html",
    "revision": "9e03c907c448c66bbdc293705806ecf9"
  },
  {
    "url": "utils/function.html",
    "revision": "44d7dc4d49a8f3b44848cb1a4a4bdd99"
  },
  {
    "url": "utils/regexp.html",
    "revision": "d933868ed9549e0fedaa27eb3d19eefb"
  },
  {
    "url": "vue/index.html",
    "revision": "a99f478470d44f8a2366f0c1d2b5456e"
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
