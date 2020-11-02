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
    "revision": "bee10ee73e0f11e5a29c6583dfff6723"
  },
  {
    "url": "assets/css/0.styles.8b6df087.css",
    "revision": "7d254739aa9e3b7e5779390276977473"
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
    "url": "assets/js/10.c8f20c1a.js",
    "revision": "ad64a3d3a71a60958b3656c523a7f2a7"
  },
  {
    "url": "assets/js/11.f55be05c.js",
    "revision": "711a65ae4d3438bcd04dfa7ad00bdbe0"
  },
  {
    "url": "assets/js/12.926f286f.js",
    "revision": "9bbd09c780265d34df1b845dc0ab1891"
  },
  {
    "url": "assets/js/13.018091c0.js",
    "revision": "40495c5d67a53cb093b9cba0c82bae05"
  },
  {
    "url": "assets/js/14.684e56c8.js",
    "revision": "502a04120177507c9bc2c9fb3ef104d7"
  },
  {
    "url": "assets/js/15.259e3712.js",
    "revision": "ccb1a094c806529067764ea5f1592369"
  },
  {
    "url": "assets/js/16.541a2b5c.js",
    "revision": "cda6bbda0605b985dbbcc75bbb3adad4"
  },
  {
    "url": "assets/js/17.6e09e940.js",
    "revision": "3e6d9db9bc580a4ad3294f6ff2c47d6a"
  },
  {
    "url": "assets/js/18.cc66973c.js",
    "revision": "9f27ad0c9191c6ee9a9134eacac76351"
  },
  {
    "url": "assets/js/19.c805a10e.js",
    "revision": "9b5b69e7871d93985da396be4220feb0"
  },
  {
    "url": "assets/js/2.fba923d6.js",
    "revision": "fc14ad26e1fb181cf2bb2d3cc5fd7ff3"
  },
  {
    "url": "assets/js/20.cba97c65.js",
    "revision": "f0315010090b856917bb6fb4e3c6554c"
  },
  {
    "url": "assets/js/21.d7623a05.js",
    "revision": "bd891703ab57f8d60955094ab7d61cf1"
  },
  {
    "url": "assets/js/22.cc1cff64.js",
    "revision": "b2631a29f17a1b278bc00be41d15af82"
  },
  {
    "url": "assets/js/23.9e1b2cda.js",
    "revision": "a4048cf866f3bdf6ca608c8a8b0957cb"
  },
  {
    "url": "assets/js/24.e69c45cb.js",
    "revision": "5f3c6368a7f78af5ac76b517fe5e33c7"
  },
  {
    "url": "assets/js/25.1612d2c8.js",
    "revision": "d27b3e07e807f3d6396b94f6d3a9aef4"
  },
  {
    "url": "assets/js/26.0bff7ca4.js",
    "revision": "e9586ef42736e5561fb2548d7bb04502"
  },
  {
    "url": "assets/js/27.bed93ed6.js",
    "revision": "ea25c072486d7360bf91b5f592038bdc"
  },
  {
    "url": "assets/js/28.82019de4.js",
    "revision": "4420b2e11f0ebd772c7b71dd58895500"
  },
  {
    "url": "assets/js/29.9ecce07a.js",
    "revision": "446170babcef3cc1432978d9ff9e213d"
  },
  {
    "url": "assets/js/3.2c47228c.js",
    "revision": "0171144f89d11e2ad2cbeafb4fecefd2"
  },
  {
    "url": "assets/js/30.9e11ba86.js",
    "revision": "bc476b39923b4c2e8c108edae76d00c6"
  },
  {
    "url": "assets/js/31.15c860e4.js",
    "revision": "fa4891660cc59cbf289453776f6860bd"
  },
  {
    "url": "assets/js/4.7fb6dce6.js",
    "revision": "f22cdddff2ea39bc719bf59f34ea67ba"
  },
  {
    "url": "assets/js/5.90eb7b3d.js",
    "revision": "b510052695108bfed112f98013943a77"
  },
  {
    "url": "assets/js/6.eee1525e.js",
    "revision": "74eb55abafeb1d9d314167c107acfcfe"
  },
  {
    "url": "assets/js/7.4faa947e.js",
    "revision": "1660433f10da7303091d9d5ba42a81e1"
  },
  {
    "url": "assets/js/8.8907b013.js",
    "revision": "e09e840f4b0e6aaf5104e606bb900b88"
  },
  {
    "url": "assets/js/9.62d55845.js",
    "revision": "fd8539ebe8e8713a8a0f84beaa31e379"
  },
  {
    "url": "assets/js/app.2412e403.js",
    "revision": "363345913eceaf9331d3cca50a012480"
  },
  {
    "url": "css/index.html",
    "revision": "3e977c133d10c7d60ba16fa1557675bf"
  },
  {
    "url": "css/scss.html",
    "revision": "78ed9695d450d14b56aeeb7140d4d191"
  },
  {
    "url": "css/skill.html",
    "revision": "c73d3b2f661b9e36151fe54025fab5e8"
  },
  {
    "url": "git/command.html",
    "revision": "2065efc9d0252c78e0e8e282d116b0ba"
  },
  {
    "url": "git/index.html",
    "revision": "9eebf1b2a23d3cec6f4c8f582cf6b306"
  },
  {
    "url": "index.html",
    "revision": "eb81d8cd81155ae66d9d44f6a59fd014"
  },
  {
    "url": "issue/h5.html",
    "revision": "28a762e7743513b607d9af229d5d53fa"
  },
  {
    "url": "issue/pc.html",
    "revision": "0898085770d301345a1b5b2559f6b113"
  },
  {
    "url": "node/npm.html",
    "revision": "28c501502be37f1787e60fd355c292af"
  },
  {
    "url": "node/toolkit.html",
    "revision": "ac1fbc23b3e3e7a7cd8cb283b590883a"
  },
  {
    "url": "online-tools/bookmark-scripts.html",
    "revision": "0e5bf8b0d34fc2e0b13b97a0037e6461"
  },
  {
    "url": "online-tools/index.html",
    "revision": "dd46ad1f3cb7f5178d838fc3abbaf5aa"
  },
  {
    "url": "software/browser.html",
    "revision": "4ec2922061367c06bb4883f37139577d"
  },
  {
    "url": "software/cross-platform.html",
    "revision": "b474ecc4f89f48e9094c99a50b1d6c38"
  },
  {
    "url": "software/mac.html",
    "revision": "76ebf4a9dc81a2dd5fd114a387060bb0"
  },
  {
    "url": "software/vscode.html",
    "revision": "ce76dc6a53264275c91b4aae16006af1"
  },
  {
    "url": "software/webstorm.html",
    "revision": "43395eac40db22b4d9673656c9208d65"
  },
  {
    "url": "software/windows.html",
    "revision": "4a818a2cb30039d83627ee93c91a959e"
  },
  {
    "url": "software/zsh.html",
    "revision": "855ec214c3fcdc42716bea3514e76595"
  },
  {
    "url": "utils/function.html",
    "revision": "cbc7350876311192feb1d83635516402"
  },
  {
    "url": "utils/regexp.html",
    "revision": "66378dd039a2d14aa1ea774573c9d1d9"
  },
  {
    "url": "vue/index.html",
    "revision": "28889bef587d0bf2d5e0a8ebb318067a"
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
