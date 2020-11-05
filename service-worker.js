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
    "revision": "580c58430902860b1efeddbd5ef601b5"
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
    "url": "assets/js/12.89af23da.js",
    "revision": "f3b6903289dfaffb74ff211a90806aa0"
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
    "url": "assets/js/21.af6c9887.js",
    "revision": "69f0bb94f89e290cf28aa5d342c4a4ce"
  },
  {
    "url": "assets/js/22.3d05c0da.js",
    "revision": "2c7224d3cefc9530a496a397f65aa5b2"
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
    "url": "assets/js/app.c65b4146.js",
    "revision": "0b2b359c94a2c5327f11369c8797c3d1"
  },
  {
    "url": "css/index.html",
    "revision": "62b0eaf5d3c07582e5d6bd11f994790e"
  },
  {
    "url": "css/scss.html",
    "revision": "808b95acdc11a908d1015bab01c37d83"
  },
  {
    "url": "css/skill.html",
    "revision": "4c5d5d04608a36a5ea3f242d78eca3d6"
  },
  {
    "url": "git/command.html",
    "revision": "85bffad79cb51992cc837a5ee49fc21b"
  },
  {
    "url": "git/index.html",
    "revision": "2230bf6564d7cc4fcecd9f3523d8dea6"
  },
  {
    "url": "index.html",
    "revision": "1da59895e274a25e2542bad91ebbf2e1"
  },
  {
    "url": "issue/h5.html",
    "revision": "13f2a300571e13d8a9b5fca09f3bf520"
  },
  {
    "url": "issue/pc.html",
    "revision": "99748d2af08db4a600adba9732a9967d"
  },
  {
    "url": "node/npm.html",
    "revision": "b56cfa857c4f2055173e66d35ea248e1"
  },
  {
    "url": "node/toolkit.html",
    "revision": "c3af7669ae7e073ce1d7ca77138c6110"
  },
  {
    "url": "online-tools/bookmark-scripts.html",
    "revision": "dea19579d1c943c42c1ca9e49f069460"
  },
  {
    "url": "online-tools/index.html",
    "revision": "b34c780ed81428e588ad19bbbfd9b1be"
  },
  {
    "url": "software/browser.html",
    "revision": "40dfddbe942ea10241c064214c86000a"
  },
  {
    "url": "software/cross-platform.html",
    "revision": "a5af5f3457ad920ec197a8e7224ff016"
  },
  {
    "url": "software/mac.html",
    "revision": "bad888ef3baa513cadcdfb656a99e291"
  },
  {
    "url": "software/vscode.html",
    "revision": "d3671163073dc0cf1e99db50693201f5"
  },
  {
    "url": "software/webstorm.html",
    "revision": "46f907ba2667bc270dd6d6da31d0689b"
  },
  {
    "url": "software/windows.html",
    "revision": "ed4a53f6c442cfeb8ec645a198834861"
  },
  {
    "url": "software/zsh.html",
    "revision": "d25ca6e9010ad2c09e73747fdf313a1e"
  },
  {
    "url": "utils/function.html",
    "revision": "d581f3ec4061c502df1b617497e4b552"
  },
  {
    "url": "utils/regexp.html",
    "revision": "0d5a91e8ec479f1210adc9ce935028b3"
  },
  {
    "url": "vue/index.html",
    "revision": "5b49786ee3f6b6158e34a3c892076953"
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
