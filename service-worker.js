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
    "revision": "51d1e00985d64049355cf0af07ce6e08"
  },
  {
    "url": "assets/css/0.styles.7daa908e.css",
    "revision": "7f66a9ecda88c9ff93bff0eb07ba881d"
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
    "url": "assets/js/3.eec2d0a2.js",
    "revision": "3f89aa2295946211b194122671962390"
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
    "url": "assets/js/app.e7e5580f.js",
    "revision": "e74c1fc73a8d9d4cb099fdaa2a3dc469"
  },
  {
    "url": "css/index.html",
    "revision": "fa94b5604b8745ff2fe8abeeaa038e45"
  },
  {
    "url": "css/scss.html",
    "revision": "1e2337c1105a4578be662df0e86227a2"
  },
  {
    "url": "css/skill.html",
    "revision": "b33d1ca56d51c5013aae67929f797f4e"
  },
  {
    "url": "git/command.html",
    "revision": "46ddaa55b950076b389994f9f58a8a77"
  },
  {
    "url": "git/index.html",
    "revision": "87abb969203061a0dd07746e03f948cb"
  },
  {
    "url": "index.html",
    "revision": "f2d36410bd5aafcf7c74f8be3b9a75ef"
  },
  {
    "url": "issue/h5.html",
    "revision": "c2cabd10218f6ecb877ced4a588049bd"
  },
  {
    "url": "issue/pc.html",
    "revision": "abca5f4c628a1eaba05a537f25e09520"
  },
  {
    "url": "node/npm.html",
    "revision": "dbcb66839c8abf55e387350200cd20dd"
  },
  {
    "url": "node/toolkit.html",
    "revision": "94b9e80f5594046155cc3b6fb542665a"
  },
  {
    "url": "online-tools/bookmark-scripts.html",
    "revision": "cb61802f158dfc63af650ee369e580d0"
  },
  {
    "url": "online-tools/index.html",
    "revision": "ffd464336b89dec6570ce12e78939aaa"
  },
  {
    "url": "software/browser.html",
    "revision": "9d969c66d61d4f462abf8ab3fb2d6489"
  },
  {
    "url": "software/cross-platform.html",
    "revision": "a236f6ecad89279b35717a67e6839c4e"
  },
  {
    "url": "software/mac.html",
    "revision": "5dc69a46e5a1032c693c7dd09f96949e"
  },
  {
    "url": "software/vscode.html",
    "revision": "5f8d5c5170321218ee69ebeded6a6fd5"
  },
  {
    "url": "software/webstorm.html",
    "revision": "ca3c4ed0ab5e893a77dfedd3a496055d"
  },
  {
    "url": "software/windows.html",
    "revision": "785d0beac9ec1ee3a72766bfa786914a"
  },
  {
    "url": "software/zsh.html",
    "revision": "f5625d0aa3603e8d70f6b945aebb2a55"
  },
  {
    "url": "utils/function.html",
    "revision": "9a4fc56f6422b1986b6d2ebe3d1dcae5"
  },
  {
    "url": "utils/library.html",
    "revision": "810f64c191d0d6277a57c0115c57b6c4"
  },
  {
    "url": "utils/regexp.html",
    "revision": "1ba590f9106c4d845f9a590b8120a67e"
  },
  {
    "url": "vue/index.html",
    "revision": "abc80668d44667be3cf8cb1649074d99"
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
