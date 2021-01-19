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
    "revision": "86dbcd3837a48de589e61678d835defa"
  },
  {
    "url": "assets/css/0.styles.8ca156ec.css",
    "revision": "756e019f3f2ab89fba1bf4327404b557"
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
    "url": "assets/js/10.88de23cd.js",
    "revision": "651b283355a8b87824fb4c9369a93c3f"
  },
  {
    "url": "assets/js/11.c998b5d0.js",
    "revision": "e127c29552d714a8774a052fada69b3b"
  },
  {
    "url": "assets/js/12.665b2476.js",
    "revision": "2866ac0087c45cb30c7c55003274f51a"
  },
  {
    "url": "assets/js/13.d4cdf51e.js",
    "revision": "d94f2cc3a0689242f9c502395e419a0b"
  },
  {
    "url": "assets/js/14.a4189c6e.js",
    "revision": "ff39e93eb1518ee9849cd69ceec062df"
  },
  {
    "url": "assets/js/15.9ec7c1ce.js",
    "revision": "9e80e3ec6d3937a8bf56236e1af1191d"
  },
  {
    "url": "assets/js/16.cd8bc896.js",
    "revision": "459f0ed7d4952d63efa20305be8d6b3c"
  },
  {
    "url": "assets/js/17.54765eee.js",
    "revision": "710b3b7cc2fe724546dba2fcca44d3e7"
  },
  {
    "url": "assets/js/18.ff81caf8.js",
    "revision": "86f722ec0139b72909ed23e02d164976"
  },
  {
    "url": "assets/js/19.34c5325f.js",
    "revision": "89628dbd1cf3e99675670aa46154efee"
  },
  {
    "url": "assets/js/2.f3b76fdd.js",
    "revision": "5e756f49a80a5f100a7a2f09458190e0"
  },
  {
    "url": "assets/js/20.63bfa574.js",
    "revision": "bb9a0f37104257da30990bc875ea8386"
  },
  {
    "url": "assets/js/21.2906d5a0.js",
    "revision": "9508577c27e37d3762e9e409d44ade1d"
  },
  {
    "url": "assets/js/22.8f17f584.js",
    "revision": "94a3ae9c2ed3309f76e5e3c9118ad781"
  },
  {
    "url": "assets/js/23.b62f3273.js",
    "revision": "0e8d2485391ea2ab39c1cddb04ee7f23"
  },
  {
    "url": "assets/js/24.29fec404.js",
    "revision": "a37fc6bca0e7752d465eca4e258135d2"
  },
  {
    "url": "assets/js/25.60da1f66.js",
    "revision": "5f78758232f669abe9dedbb0305674ff"
  },
  {
    "url": "assets/js/26.e316ce89.js",
    "revision": "17ed922b0416cf8948c6d332e09b412d"
  },
  {
    "url": "assets/js/27.a36111d1.js",
    "revision": "a82bf7ef2654f3578315cd39420ce929"
  },
  {
    "url": "assets/js/28.1105932b.js",
    "revision": "907121226a8f8f13f342db1789dbd647"
  },
  {
    "url": "assets/js/29.39379e8b.js",
    "revision": "8f23c39f23d9ee643de756453e1a633d"
  },
  {
    "url": "assets/js/3.f05f2f69.js",
    "revision": "6d8e7b92984daa7fefe26fb144ab6d4f"
  },
  {
    "url": "assets/js/30.8d304e68.js",
    "revision": "72e35ea2ead10027f197726187e027ab"
  },
  {
    "url": "assets/js/31.de4c009c.js",
    "revision": "269665fac9425b1f27c9a1e3335f7365"
  },
  {
    "url": "assets/js/32.ad5d6188.js",
    "revision": "e4f334042796bc862c2fd811fc8d498d"
  },
  {
    "url": "assets/js/4.710ea90d.js",
    "revision": "a2af0a553fe76a0db57a033da262b1da"
  },
  {
    "url": "assets/js/5.491b5c16.js",
    "revision": "8604e12889f202bc861d1e881585020a"
  },
  {
    "url": "assets/js/6.fb8a76e4.js",
    "revision": "686e666f26b942a0a2334983d66d48dc"
  },
  {
    "url": "assets/js/7.39c1ff06.js",
    "revision": "7f1709795959efd21baac797c1cdf69a"
  },
  {
    "url": "assets/js/8.6f5df962.js",
    "revision": "e9add2860f57a0599399f3b296ca388e"
  },
  {
    "url": "assets/js/9.827f182a.js",
    "revision": "6d08e9823ea4e880e4dfc62503b130c8"
  },
  {
    "url": "assets/js/app.434b3b2a.js",
    "revision": "e7f3b7654b3e0652ee3c169df0d6c768"
  },
  {
    "url": "css/index.html",
    "revision": "4cabbbe499bf9daf651a07a24a9eae82"
  },
  {
    "url": "css/scss.html",
    "revision": "c4773b3cb37178fa81c3d4088d3dde84"
  },
  {
    "url": "css/skill.html",
    "revision": "94dfe6b2f66632d83d7bce41877f2a2b"
  },
  {
    "url": "git/command.html",
    "revision": "f2c44dac0d8d1992abc55f05b7a517b4"
  },
  {
    "url": "git/index.html",
    "revision": "e1d05868a7d62b489f2b570190d923b3"
  },
  {
    "url": "index.html",
    "revision": "5f0e6e9dcad28135d08246bc6bb50805"
  },
  {
    "url": "issue/h5.html",
    "revision": "cfb60cd52d1d837e58ae0e5f37befbdc"
  },
  {
    "url": "issue/pc.html",
    "revision": "4da22d26c979135a79427f0e4ef7d5bb"
  },
  {
    "url": "node/npm.html",
    "revision": "24369cf6175604b63379b16ed9fd82f9"
  },
  {
    "url": "node/toolkit.html",
    "revision": "c4d898ace4aab2681bb7867622065883"
  },
  {
    "url": "online-tools/bookmark-scripts.html",
    "revision": "cdb98ad913a404a80d44c3e85bcf2519"
  },
  {
    "url": "online-tools/index.html",
    "revision": "7023197e923f14cc894e3ebda60b8c46"
  },
  {
    "url": "software/browser.html",
    "revision": "2f02e40fe2312158d42ffe1ef2ef13ac"
  },
  {
    "url": "software/cross-platform.html",
    "revision": "7cc7d82cd5bb68ad8490d570f4d66626"
  },
  {
    "url": "software/mac.html",
    "revision": "46ca5cd7b96a9b93407b45c91c052494"
  },
  {
    "url": "software/vscode.html",
    "revision": "3c361e1529af417bd9020fa2494c72b6"
  },
  {
    "url": "software/webstorm.html",
    "revision": "30c546bbb07cd5598541fec3bdf3bd42"
  },
  {
    "url": "software/windows.html",
    "revision": "db659cc46f810d6b68812e4dfd3aa301"
  },
  {
    "url": "software/zsh.html",
    "revision": "2470961881dbe90127283d05f374ba38"
  },
  {
    "url": "utils/function.html",
    "revision": "03b65f7f678c92dbceac94bb4005c719"
  },
  {
    "url": "utils/library.html",
    "revision": "f65aec559a9f535248fc7a1b5f67554a"
  },
  {
    "url": "utils/regexp.html",
    "revision": "761124a012442c295d2cc22fd8ad0764"
  },
  {
    "url": "vue/index.html",
    "revision": "10a12a034265ba55c3ab3ee8777650fe"
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
