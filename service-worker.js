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
    "revision": "fda46fe618d0d83a8b34df3eabbc67f8"
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
    "url": "assets/js/app.bf0e27dc.js",
    "revision": "d14f9164592fc2bb117de862a01c0ec7"
  },
  {
    "url": "css/index.html",
    "revision": "38d04a1102dcc6e89b287eaecb72f909"
  },
  {
    "url": "css/scss.html",
    "revision": "c08a4f240eef1fc655e96b68cb3a3fbc"
  },
  {
    "url": "css/skill.html",
    "revision": "070936b1e5c322be0f883c3aa18e71e4"
  },
  {
    "url": "git/command.html",
    "revision": "67f72eab94488165e43fd4f99df6e607"
  },
  {
    "url": "git/index.html",
    "revision": "21f56d97351dac7f000fe14031c1cd73"
  },
  {
    "url": "index.html",
    "revision": "3b13d04403103b2e14e307102d441fa2"
  },
  {
    "url": "issue/h5.html",
    "revision": "b0c20b3926892bc914faa5e041aefb88"
  },
  {
    "url": "issue/pc.html",
    "revision": "186b7ee18343f3b8e26520d83e7846fd"
  },
  {
    "url": "node/depend.html",
    "revision": "6cfd6b9fd504d44b890d0017cd875c7d"
  },
  {
    "url": "node/npm.html",
    "revision": "601c6efb93def272b22a8e123062c4d4"
  },
  {
    "url": "software/browser.html",
    "revision": "0acbbcc0c3a5b32c74c58b43b70e6537"
  },
  {
    "url": "software/mac.html",
    "revision": "07f95e0ef793fe71cd27974ae3e24cca"
  },
  {
    "url": "software/vscode.html",
    "revision": "291527397166463b93d1db6b0b6a160f"
  },
  {
    "url": "software/webstorm.html",
    "revision": "474cdc669f2e7d3f201960445216b2d3"
  },
  {
    "url": "software/windows.html",
    "revision": "d1179123ae4ac3f68fe725683124c879"
  },
  {
    "url": "software/zsh.html",
    "revision": "79ccbd726195c2134e4041535e058984"
  },
  {
    "url": "utils/function.html",
    "revision": "8f626c6497149fbe63f4acbda0b03308"
  },
  {
    "url": "utils/regexp.html",
    "revision": "9cfa637e99467f06c67dcfaab026cb2a"
  },
  {
    "url": "vue/index.html",
    "revision": "b3837dd926e93dd648fd6893c8f57e68"
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
