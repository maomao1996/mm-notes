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
    "revision": "a2fca4a992b4a83ecce962b9d4c322bb"
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
    "url": "assets/js/12.7550d2c5.js",
    "revision": "9bce67f47e7e3fb0afc17dcb7b392bbc"
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
    "url": "assets/js/16.73812152.js",
    "revision": "7a52ab3065c5b9602bf45aff1d944552"
  },
  {
    "url": "assets/js/17.f3173b43.js",
    "revision": "95ccd7bce5a85af9eb5808fc99cb588a"
  },
  {
    "url": "assets/js/18.25de88bb.js",
    "revision": "a37883b26c9d9785a88e5ea9dd7964cf"
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
    "url": "assets/js/20.4ea0a8a0.js",
    "revision": "e5670778215c39ddf9e68741fa7d43ce"
  },
  {
    "url": "assets/js/21.8a0dce48.js",
    "revision": "bf83911c3939477ff157fa5af6dbdcda"
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
    "url": "assets/js/app.034774ab.js",
    "revision": "a7f8436e85e49479ce915f06f5e9fc92"
  },
  {
    "url": "css/index.html",
    "revision": "74530eed2d627f420b6ed3a55623a198"
  },
  {
    "url": "css/scss.html",
    "revision": "e9ae5e779041e9a7ffd39102ece1e879"
  },
  {
    "url": "css/skill.html",
    "revision": "f000b72ebc1bb6057fabc0fe85c7e792"
  },
  {
    "url": "git/command.html",
    "revision": "97b11b14d79f33e914cebb0b6f7e9046"
  },
  {
    "url": "git/index.html",
    "revision": "3828d1e85b31952a636c02cc6e80abac"
  },
  {
    "url": "index.html",
    "revision": "f997858b54ec51bbf6d807e164b63a8b"
  },
  {
    "url": "issue/h5.html",
    "revision": "4516bbf7b674c31f341e1891bd5a9f31"
  },
  {
    "url": "issue/pc.html",
    "revision": "bc8f1ce6a563633392c2ea0d0e99aada"
  },
  {
    "url": "node/depend.html",
    "revision": "b141333edcfdcb2521db837773e17640"
  },
  {
    "url": "node/npm.html",
    "revision": "1da3e45c111d9399bc007013a0c8cd24"
  },
  {
    "url": "software/browser.html",
    "revision": "bbef79f61ee605522e8998e97d04622c"
  },
  {
    "url": "software/mac.html",
    "revision": "7fe6645a4e07df4c34c6bb78acec62a2"
  },
  {
    "url": "software/vscode.html",
    "revision": "a91cad3051238cf68d23707e672a18ba"
  },
  {
    "url": "software/webstorm.html",
    "revision": "ced3d3e0580ce8001b1182b8a9f0ba3b"
  },
  {
    "url": "software/windows.html",
    "revision": "483e01395cff463ccedec95849ff6abc"
  },
  {
    "url": "software/zsh.html",
    "revision": "b7d58bd83d885e8d6f13386fbf1ac9c1"
  },
  {
    "url": "utils/function.html",
    "revision": "668b3b2db0deafe1aa5476432fed8b64"
  },
  {
    "url": "utils/regexp.html",
    "revision": "a5fab8b649d360f954476b627a43ba0c"
  },
  {
    "url": "vue/index.html",
    "revision": "3ba0065790692c734a022289e0ab3781"
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
