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
    "revision": "cf07429ea42d47e8af499e48e15a91c4"
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
    "url": "assets/js/2.93548260.js",
    "revision": "4210d3b364279bbd8555df074064ac30"
  },
  {
    "url": "assets/js/20.7f301ac9.js",
    "revision": "e87f68b4606ebdd80d92b9c2879d3d99"
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
    "url": "assets/js/app.2a427ede.js",
    "revision": "1fd78432f6a929f19a017954d6fcd2f2"
  },
  {
    "url": "css/index.html",
    "revision": "efe08edb2cb074d33ff4cb10927ac012"
  },
  {
    "url": "css/scss.html",
    "revision": "721f883c8c43ea84a7a47063b009474d"
  },
  {
    "url": "css/skill.html",
    "revision": "fdf714fd4c30ddba96aea74eb08dac4f"
  },
  {
    "url": "git/command.html",
    "revision": "0d201a35f13d9180d7c6c32070700a80"
  },
  {
    "url": "git/index.html",
    "revision": "0ec0e10113782ada1f574558de094862"
  },
  {
    "url": "index.html",
    "revision": "eae0f1d28b805a0e358a0812c038d08b"
  },
  {
    "url": "issue/h5.html",
    "revision": "609a7d5662b27a72907fb3d41fa1c07d"
  },
  {
    "url": "issue/pc.html",
    "revision": "f579a41c1f696754950fa43d5fccf02d"
  },
  {
    "url": "node/npm.html",
    "revision": "256af2c2ea73c903cbfd79d392358b61"
  },
  {
    "url": "node/toolkit.html",
    "revision": "553ec50f39de41b3ca800489a8830af4"
  },
  {
    "url": "online-tools/bookmark-scripts.html",
    "revision": "b28d1d3426ed33bf0aa1b3dcae900a3e"
  },
  {
    "url": "online-tools/index.html",
    "revision": "954d236d4a122f0c52476a63530b8525"
  },
  {
    "url": "software/browser.html",
    "revision": "f269de3fdeff3d6025493d2374871191"
  },
  {
    "url": "software/cross-platform.html",
    "revision": "667a1a36f0d82418b6e69607f544ac66"
  },
  {
    "url": "software/mac.html",
    "revision": "670d40bd943b41c6d61c4f109d2780d8"
  },
  {
    "url": "software/vscode.html",
    "revision": "030df9429fd518c7774b270a00c13ca9"
  },
  {
    "url": "software/webstorm.html",
    "revision": "5180d3d83dae8bb7f44a1bf648f290b8"
  },
  {
    "url": "software/windows.html",
    "revision": "d3ed6197d186f78f5bb42a2f9b957b9c"
  },
  {
    "url": "software/zsh.html",
    "revision": "a64cde45c7b1b4653d6a65ff31d5f720"
  },
  {
    "url": "utils/function.html",
    "revision": "badd10d1684cb3c6f3012df9efb22e09"
  },
  {
    "url": "utils/library.html",
    "revision": "13f131e19ed2171117784793e7306d52"
  },
  {
    "url": "utils/regexp.html",
    "revision": "3bf78327c04a036c2bad5901c7d35f6d"
  },
  {
    "url": "vue/index.html",
    "revision": "51bbfa1f66e36d37e31f8a06d9433c33"
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
