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
    "revision": "7267786b137ffd1cbd84a021101aaa53"
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
    "url": "assets/js/app.ff0f6dcc.js",
    "revision": "571731cec5c9c5a987248915a33dcb70"
  },
  {
    "url": "css/index.html",
    "revision": "c9fb8e7e3770639f842be8dfb2860db1"
  },
  {
    "url": "css/scss.html",
    "revision": "77c9cc425eeed8a2df0d68593c2571cd"
  },
  {
    "url": "css/skill.html",
    "revision": "c18eedb712eee1cc9a07f120c6f32469"
  },
  {
    "url": "git/command.html",
    "revision": "e0c25c5113bce077046cc0c31c13a907"
  },
  {
    "url": "git/index.html",
    "revision": "4c0c5ccdb90237fce644d7cf3ef90302"
  },
  {
    "url": "index.html",
    "revision": "74a4a3006c6d8a54baffd25cb3cffdc3"
  },
  {
    "url": "issue/h5.html",
    "revision": "b754ff53a8f248d09d5b8eda9fd947b7"
  },
  {
    "url": "issue/pc.html",
    "revision": "e261035a306332a0bb0630d440ad73e1"
  },
  {
    "url": "node/npm.html",
    "revision": "25031877213caeb08a1ce1c60373234b"
  },
  {
    "url": "node/toolkit.html",
    "revision": "6eda7a174ab90ab52a76be2992d45273"
  },
  {
    "url": "online-tools/bookmark-scripts.html",
    "revision": "ae0a4d494ea2ebdb892f62ac34431e5c"
  },
  {
    "url": "online-tools/index.html",
    "revision": "62ab18e74c61768d0af568c5a9692cd4"
  },
  {
    "url": "software/browser.html",
    "revision": "994f3b3d4116fab2dd62c3899ec87689"
  },
  {
    "url": "software/cross-platform.html",
    "revision": "045a8452f6c412ed6339b181a37829a9"
  },
  {
    "url": "software/mac.html",
    "revision": "0b874661ffcfbf545dd3f7adb9940177"
  },
  {
    "url": "software/vscode.html",
    "revision": "3da443862c52f0faed6cc539280920e4"
  },
  {
    "url": "software/webstorm.html",
    "revision": "c75a4a9d9d1d7cd525f339a247006604"
  },
  {
    "url": "software/windows.html",
    "revision": "4c6223624ff01744bdeff57099ff0163"
  },
  {
    "url": "software/zsh.html",
    "revision": "d01304c72cce16cfb7afc98b7c11ed6e"
  },
  {
    "url": "utils/function.html",
    "revision": "4ad3057edf3a8de4f584c8ab701cdb6e"
  },
  {
    "url": "utils/library.html",
    "revision": "866b47bd5bb31f31a1b82d63cbc15351"
  },
  {
    "url": "utils/regexp.html",
    "revision": "79430f464b369f0e993a02de48723d7f"
  },
  {
    "url": "vue/index.html",
    "revision": "230620b2809f850a74f806cd53605826"
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
