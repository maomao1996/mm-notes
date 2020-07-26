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
    "revision": "a2ddd6f8b7dc442e22f1886d5722380f"
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
    "url": "assets/js/19.016ff24e.js",
    "revision": "b9230641b903fab3f94821b7cdedeb6f"
  },
  {
    "url": "assets/js/2.007004f9.js",
    "revision": "bcc2b93c3a9b2ebf882945287dbcd801"
  },
  {
    "url": "assets/js/20.c916a1eb.js",
    "revision": "3a2cc1151a051c2c2e84642c655f53c8"
  },
  {
    "url": "assets/js/21.7286b3c5.js",
    "revision": "7c78a5023e2f3e8c7722f7dc1b8fe670"
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
    "url": "assets/js/3.51c8b2fa.js",
    "revision": "ebf83ffef6c4b78ac802f77ffb3f305d"
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
    "url": "assets/js/6.3e3eff6b.js",
    "revision": "c2f02d0e4df9b5329924746c69076541"
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
    "url": "assets/js/app.d154ea6a.js",
    "revision": "44527f6f791835026bab6f66d01bd093"
  },
  {
    "url": "css/index.html",
    "revision": "d5b2a6531562d7d8c69bbdbb410838e6"
  },
  {
    "url": "css/scss.html",
    "revision": "5289964c4ef6a3b4b6016a06475aafbf"
  },
  {
    "url": "css/skill.html",
    "revision": "981c0373801a28dd904d9b43e399ff4d"
  },
  {
    "url": "git/command.html",
    "revision": "c6be1648ff0713a33dcbb847ca0c1f03"
  },
  {
    "url": "git/index.html",
    "revision": "d14c5c3ef04259edeab78f95a3b50b1e"
  },
  {
    "url": "index.html",
    "revision": "842fd082f0fc742efe506884390c981c"
  },
  {
    "url": "issue/h5.html",
    "revision": "9c2a038376317ed12c7ce4ee324f3b0e"
  },
  {
    "url": "issue/pc.html",
    "revision": "d907d96f97bfeddd9bc0b02409a12e13"
  },
  {
    "url": "node/npm.html",
    "revision": "48e28b4a91b6f2b360d4340760e69b1e"
  },
  {
    "url": "node/toolkit.html",
    "revision": "e8f064d294aad4d5803533e9b5d0082b"
  },
  {
    "url": "software/browser.html",
    "revision": "4402dc5bd68ab0fee9bc2a33bfc3dd10"
  },
  {
    "url": "software/mac.html",
    "revision": "bf6602176d3862e04b48320c56ac5216"
  },
  {
    "url": "software/vscode.html",
    "revision": "593f3412aa34be709a938ee382e237cc"
  },
  {
    "url": "software/webstorm.html",
    "revision": "0767f7e8cf20f272f5cb53c45e062ff4"
  },
  {
    "url": "software/windows.html",
    "revision": "0112d75a2000a7e28375adb106204003"
  },
  {
    "url": "software/zsh.html",
    "revision": "20d72a437c8a605ef13fbc8bfa4715a0"
  },
  {
    "url": "utils/function.html",
    "revision": "5efb0814c89f350a4e8a6bd45e58f321"
  },
  {
    "url": "utils/regexp.html",
    "revision": "3c6a7f630cf866607e3b0bfcf2e3dde9"
  },
  {
    "url": "vue/index.html",
    "revision": "5e0c0919b6d5f5cd61c1b7203a6ead19"
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
