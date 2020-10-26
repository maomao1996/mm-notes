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
    "revision": "67810cf600e57dd2b449bbede8153365"
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
    "url": "assets/js/2.b8988f26.js",
    "revision": "bda608f31b4e7c25aaef203a2cfcc388"
  },
  {
    "url": "assets/js/20.784208dc.js",
    "revision": "6622e0be41fad740050af8664492e85c"
  },
  {
    "url": "assets/js/21.d4ab5b22.js",
    "revision": "558846db503c05efdd52ec9007ed19bf"
  },
  {
    "url": "assets/js/22.ce5d926a.js",
    "revision": "4706e671db73371ae59c534cbf375c35"
  },
  {
    "url": "assets/js/23.65613e21.js",
    "revision": "0efa1d81f39016d757e2701286fee6d4"
  },
  {
    "url": "assets/js/24.0b6cd904.js",
    "revision": "3190dd8c43e5f63d3bb0507180d09c48"
  },
  {
    "url": "assets/js/25.aafeedd7.js",
    "revision": "280177e51411e155f09a6965ba1e5d0b"
  },
  {
    "url": "assets/js/26.03535c38.js",
    "revision": "42fd5b69bd085cdb29227bf2af5f8df3"
  },
  {
    "url": "assets/js/27.80e3d5fe.js",
    "revision": "f59fdaa51b136192e8281476762286f4"
  },
  {
    "url": "assets/js/28.0cd08fa1.js",
    "revision": "90871a95a7730f64333e81240d973831"
  },
  {
    "url": "assets/js/29.85e38fd8.js",
    "revision": "0b964e226e60026ba6fea21a26d20561"
  },
  {
    "url": "assets/js/3.1d758506.js",
    "revision": "aa7394738a3c085bd7e5ae8d610ac2a6"
  },
  {
    "url": "assets/js/30.4b57b0ff.js",
    "revision": "c9c15f963a7ab8e959d3dc95ad2f5c8f"
  },
  {
    "url": "assets/js/4.d85ff407.js",
    "revision": "b669e18326cc55fa3a4f89f0c413e8b2"
  },
  {
    "url": "assets/js/5.ccd82667.js",
    "revision": "a6ea47b2babc391bad8ff44b3c97ef96"
  },
  {
    "url": "assets/js/6.81ed3eb3.js",
    "revision": "e60110339210ca9bf2b530e234e080f7"
  },
  {
    "url": "assets/js/7.2ba7c462.js",
    "revision": "516b681ea587c88a15cd813ab023107a"
  },
  {
    "url": "assets/js/8.22d528b9.js",
    "revision": "8e8feeae05ed8edeebbcc3c00a1fe9ed"
  },
  {
    "url": "assets/js/9.62d55845.js",
    "revision": "fd8539ebe8e8713a8a0f84beaa31e379"
  },
  {
    "url": "assets/js/app.c9c165e2.js",
    "revision": "4a22014c867ff8ddfcb89520c110cc7d"
  },
  {
    "url": "css/index.html",
    "revision": "f5b31e61fd7b536d05bdefe1b9ebab9e"
  },
  {
    "url": "css/scss.html",
    "revision": "52a54822e06080d8e1cb714cbd75f126"
  },
  {
    "url": "css/skill.html",
    "revision": "c3f0fc5f4238f1ad99113e76afde235a"
  },
  {
    "url": "git/command.html",
    "revision": "1f750e5cf699f94a697f7cbee91f6afc"
  },
  {
    "url": "git/index.html",
    "revision": "c0969366b26dfc74f38bcfb7a0869357"
  },
  {
    "url": "index.html",
    "revision": "578a31aad01c9ca9c6f99ff0329b27d2"
  },
  {
    "url": "issue/h5.html",
    "revision": "419bb664537582cfb359855d74212a08"
  },
  {
    "url": "issue/pc.html",
    "revision": "4cb704bb318d0c7bafdafe8c293e039f"
  },
  {
    "url": "node/npm.html",
    "revision": "d492799df82a95127e7f094699f586fa"
  },
  {
    "url": "node/toolkit.html",
    "revision": "6172702a0bc189cd05dcbec4845b251a"
  },
  {
    "url": "online-tools/bookmark-scripts.html",
    "revision": "cf6a459d2468f4bb173a43aed32e97d6"
  },
  {
    "url": "software/browser.html",
    "revision": "24ea6f3be1e77f1da7050f98cf189cb1"
  },
  {
    "url": "software/cross-platform.html",
    "revision": "dc67662a9d08f5800dd070904f659c1a"
  },
  {
    "url": "software/mac.html",
    "revision": "2c7dc7a6cc1c127ba4a673591b2c92a4"
  },
  {
    "url": "software/vscode.html",
    "revision": "f6191355e5155a0a93152ab5074f34ee"
  },
  {
    "url": "software/webstorm.html",
    "revision": "b999f9a1ecaf5eea4c73d80763baee13"
  },
  {
    "url": "software/windows.html",
    "revision": "3cdd45499e04ac3d2f397d71a7bb6cb9"
  },
  {
    "url": "software/zsh.html",
    "revision": "629e4bb78883deef50abdf7b8d720862"
  },
  {
    "url": "utils/function.html",
    "revision": "5c60f35568dd68df3adc1edb8bc976f8"
  },
  {
    "url": "utils/regexp.html",
    "revision": "bf9a0774ed702c44a5f4d810d47d1a06"
  },
  {
    "url": "vue/index.html",
    "revision": "a9f6b6f63e9cd7d0a6933e87e92dfcb5"
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
