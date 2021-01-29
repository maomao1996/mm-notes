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
    "revision": "3ec55d692f6525559e7e5757ca1cbb1e"
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
    "url": "assets/js/14.13e8bcd2.js",
    "revision": "546f728fa82e980a7c476712c4005103"
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
    "url": "assets/js/app.f1b30a89.js",
    "revision": "5a7b231a4a86742aebbaa273d4dd8e34"
  },
  {
    "url": "css/index.html",
    "revision": "5f7cd06ea6ef796b81ee0efe0f0c1127"
  },
  {
    "url": "css/scss.html",
    "revision": "11dda5f0989e61831dc49c8ad3797901"
  },
  {
    "url": "css/skill.html",
    "revision": "9cd6a405030dc0cb7fd5a83aed1d7478"
  },
  {
    "url": "git/command.html",
    "revision": "ec2fd2e1b728cb5b6973416ae6e9182f"
  },
  {
    "url": "git/index.html",
    "revision": "1f32652acf70a25669b03ac5665e1ed5"
  },
  {
    "url": "index.html",
    "revision": "91b07dddb9d7c3e3e5e91a90a3f21f5c"
  },
  {
    "url": "issue/h5.html",
    "revision": "d7aa7d715a031fd4d3dce781ace78ce0"
  },
  {
    "url": "issue/pc.html",
    "revision": "25048d0e7f23dbd9867accaf5e6a5b95"
  },
  {
    "url": "node/npm.html",
    "revision": "8f917b39b98c731ddef1a08a02537743"
  },
  {
    "url": "node/toolkit.html",
    "revision": "0539250b890615caef9c68d5d84f8795"
  },
  {
    "url": "online-tools/bookmark-scripts.html",
    "revision": "38e053ccabfde1b6a90fb83282cc8903"
  },
  {
    "url": "online-tools/index.html",
    "revision": "463c6fb25f4094d99adb78058794c956"
  },
  {
    "url": "software/browser.html",
    "revision": "5dd43d8bc93d6ac86378ad19462facd3"
  },
  {
    "url": "software/cross-platform.html",
    "revision": "420478c8d2209ca8aec8ab0512cdd4d0"
  },
  {
    "url": "software/mac.html",
    "revision": "f7abb63ba873bb914cd310688cfa7fab"
  },
  {
    "url": "software/vscode.html",
    "revision": "0d4cfeb88cdc7ae6b059defd4fdfd80e"
  },
  {
    "url": "software/webstorm.html",
    "revision": "0b6b4937f3121a594a14192feea4616d"
  },
  {
    "url": "software/windows.html",
    "revision": "55c2f5e524f586041c200178332186f4"
  },
  {
    "url": "software/zsh.html",
    "revision": "061e37a325c25953a98154e9a469c29f"
  },
  {
    "url": "utils/function.html",
    "revision": "8b1e3d244e3d5318f7998f58675c7335"
  },
  {
    "url": "utils/library.html",
    "revision": "83be71550a2c0bd17b2cea419910a273"
  },
  {
    "url": "utils/regexp.html",
    "revision": "effb911961910c4b7d76e373e18b0089"
  },
  {
    "url": "vue/index.html",
    "revision": "8c4ff374ff57c05eedefa8b313c135ba"
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
