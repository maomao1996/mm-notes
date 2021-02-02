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
    "revision": "43cf93cf6f1dd0edc08835edfcc76800"
  },
  {
    "url": "assets/css/0.styles.0863ccb6.css",
    "revision": "dba48543870a8df973331cfa5405ae1c"
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
    "url": "assets/js/25.dffb99c3.js",
    "revision": "f09ae7450b38fac2fd7c7c98ed7ced6a"
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
    "url": "assets/js/3.5cc64b85.js",
    "revision": "ee1170f2c27a3395a2a77d02cf10d364"
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
    "url": "assets/js/app.90031507.js",
    "revision": "449f654f4e54af45a3a6a4e0b707abec"
  },
  {
    "url": "css/index.html",
    "revision": "e70aff1ae246b354c43189706fdc8316"
  },
  {
    "url": "css/scss.html",
    "revision": "7bb47c67fb6c92465970e8e6999af06f"
  },
  {
    "url": "css/skill.html",
    "revision": "ca917ba8e7293eeaa3941678da7cf96f"
  },
  {
    "url": "git/command.html",
    "revision": "756048419a218483954ea9ae0d38a376"
  },
  {
    "url": "git/index.html",
    "revision": "2892c52392a29c2529f05bdc0a53099f"
  },
  {
    "url": "index.html",
    "revision": "bfcd076574cd97810f05d9b361d5fd10"
  },
  {
    "url": "issue/h5.html",
    "revision": "021e233a9be1ce7e4576341539cba3a7"
  },
  {
    "url": "issue/pc.html",
    "revision": "0d4d95a5561b5455734ed95d5565aa4c"
  },
  {
    "url": "node/npm.html",
    "revision": "6d551dcc76ee4ddbd167083b8437d4ae"
  },
  {
    "url": "node/toolkit.html",
    "revision": "ebbb28df52a3b4166e306891b9bcffa6"
  },
  {
    "url": "online-tools/bookmark-scripts.html",
    "revision": "1b88d531f6479efedae2cb16acc0c7e2"
  },
  {
    "url": "online-tools/index.html",
    "revision": "b50859d8c706fd5cefd3244100a8a25f"
  },
  {
    "url": "software/browser.html",
    "revision": "b00ec763afd42ff02d2189b37f09a923"
  },
  {
    "url": "software/cross-platform.html",
    "revision": "3d1a48866b04468d597e274203fd27f2"
  },
  {
    "url": "software/mac.html",
    "revision": "c6a9a047f06ec839a8bb0da61bdd5b1a"
  },
  {
    "url": "software/vscode.html",
    "revision": "24b7173eaeffb15eba378066b599d1cf"
  },
  {
    "url": "software/webstorm.html",
    "revision": "00188d07a65add1f13159cda130cd065"
  },
  {
    "url": "software/windows.html",
    "revision": "47d2180352e1f3e21a68fd1fe034630a"
  },
  {
    "url": "software/zsh.html",
    "revision": "f1fc31552b7941a8214f383db1aa620c"
  },
  {
    "url": "utils/function.html",
    "revision": "70076797df5796f88c2fbfeb4056127d"
  },
  {
    "url": "utils/library.html",
    "revision": "5a7717128114a515373448025e93065d"
  },
  {
    "url": "utils/regexp.html",
    "revision": "cffc223550c52d4609f085927bbdc9b0"
  },
  {
    "url": "vue/index.html",
    "revision": "b09fb0e4c48a35c4687fb87b7873f152"
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
