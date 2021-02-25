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
    "revision": "41cb2f0005729f32dc05b5afa29ccb4f"
  },
  {
    "url": "assets/css/0.styles.f0ae8c5e.css",
    "revision": "96f60976a4dfe5d7a7b8ed39c443a75f"
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
    "url": "assets/js/10.e73ae8c4.js",
    "revision": "0206775c20b330619ca0776fbdc90077"
  },
  {
    "url": "assets/js/11.c8034e36.js",
    "revision": "228fc5cda8560682701658488f33c1ea"
  },
  {
    "url": "assets/js/12.aa439354.js",
    "revision": "441f48cfec95c289597057fb73f855ad"
  },
  {
    "url": "assets/js/13.7fb43355.js",
    "revision": "2e6ee65750709e0a1b332ddbd8c29071"
  },
  {
    "url": "assets/js/14.b27c91b8.js",
    "revision": "cdfd5aa35773f49b5166b32c362b106c"
  },
  {
    "url": "assets/js/15.1418fe3e.js",
    "revision": "816cc6825773614cbedfa1d8dc49a3f5"
  },
  {
    "url": "assets/js/16.80cdebce.js",
    "revision": "e48a71acff77680dee8109d3f906b4de"
  },
  {
    "url": "assets/js/17.a5d5610b.js",
    "revision": "40248f3753d698010ac696e6b930eca6"
  },
  {
    "url": "assets/js/18.73a726b3.js",
    "revision": "acaccbdd214cd6e3e3930ca3377cd97d"
  },
  {
    "url": "assets/js/19.609ebbde.js",
    "revision": "52061f8676c76cf493916f2f94a75d26"
  },
  {
    "url": "assets/js/2.e523d3fe.js",
    "revision": "7b1b2ece363f0df93bad121b8f2e4cf1"
  },
  {
    "url": "assets/js/20.b359f522.js",
    "revision": "ed598cc9edd66b4834e895e6cd089afe"
  },
  {
    "url": "assets/js/21.285652fb.js",
    "revision": "7a05aa97c74facb1d25c5d24e6695282"
  },
  {
    "url": "assets/js/22.2a6fbd73.js",
    "revision": "58a1110ae403a812a0de11f84e3b21a4"
  },
  {
    "url": "assets/js/23.1d6d85b0.js",
    "revision": "f82c85de78d60347b882966a6d91f177"
  },
  {
    "url": "assets/js/24.be453489.js",
    "revision": "fda6cd5f51e5d71e0f29019be163bdba"
  },
  {
    "url": "assets/js/25.c2f3959a.js",
    "revision": "bf405aca7e8f07832525f15920d370f9"
  },
  {
    "url": "assets/js/26.1915fa95.js",
    "revision": "fd60fc497a3a37ba1661faaf30f54df5"
  },
  {
    "url": "assets/js/27.3a202708.js",
    "revision": "40dc1cf18e1da74a74f222fbf5f6e653"
  },
  {
    "url": "assets/js/28.9b79276f.js",
    "revision": "9970c46b9cfcb92eb71f09984a96af79"
  },
  {
    "url": "assets/js/29.bd616240.js",
    "revision": "f1ae54ffe483e40a7111549df30daaee"
  },
  {
    "url": "assets/js/3.f6a5112d.js",
    "revision": "271578391ab560e11357898fceb6965d"
  },
  {
    "url": "assets/js/30.23a67c9d.js",
    "revision": "9f16352e3a934c43814f8df569d76844"
  },
  {
    "url": "assets/js/31.eb1873d3.js",
    "revision": "b7a8e768a8a744cd4034d340c766e55e"
  },
  {
    "url": "assets/js/32.f220ad48.js",
    "revision": "866bbeab67cd5c2abce4fc9f9cd21634"
  },
  {
    "url": "assets/js/4.96a34e61.js",
    "revision": "59e543ea16d4f20d2d56172d98c1ba03"
  },
  {
    "url": "assets/js/5.4eb8d20d.js",
    "revision": "a1719ac92d4a8327d6cf7f08c9003a50"
  },
  {
    "url": "assets/js/6.8e07b620.js",
    "revision": "24431a5422b86dff4b0179f609eafc52"
  },
  {
    "url": "assets/js/7.97be237b.js",
    "revision": "1e98b2bed04db24bfb616de910103008"
  },
  {
    "url": "assets/js/8.51475912.js",
    "revision": "b5226d366e0cebc5d9d6ed6f1f7ced00"
  },
  {
    "url": "assets/js/9.daccdbe2.js",
    "revision": "6fc90e8d39b30c888aa9392fa8f70540"
  },
  {
    "url": "assets/js/app.299118d4.js",
    "revision": "0cad9aa91fdcd90905ec1c04f4d11691"
  },
  {
    "url": "css/index.html",
    "revision": "f407773154c7a9b9ccc6ddc7a1b26e39"
  },
  {
    "url": "css/scss.html",
    "revision": "dce6e53ba90ed9a4e55b0f0e651012e8"
  },
  {
    "url": "css/skill.html",
    "revision": "58ee5dbb748040459337e21e7dcfe670"
  },
  {
    "url": "git/command.html",
    "revision": "f2757cb0484641e492b157cd5a036848"
  },
  {
    "url": "git/index.html",
    "revision": "28f7301cd52404405a01c198368c359b"
  },
  {
    "url": "index.html",
    "revision": "42f22b8bd4922bca377a1778963bf818"
  },
  {
    "url": "issue/h5.html",
    "revision": "243054097f1197d16c7f3248d016119f"
  },
  {
    "url": "issue/pc.html",
    "revision": "ee9536e992f6f11055f6174c79c49c23"
  },
  {
    "url": "node/npm.html",
    "revision": "05b0c5b4d2c4daa5ab95886c19b99096"
  },
  {
    "url": "node/toolkit.html",
    "revision": "f1ed6528405f528d60320819b48e5fb2"
  },
  {
    "url": "online-tools/bookmark-scripts.html",
    "revision": "1ed673abbc95a8febc00fc4d8b2801fb"
  },
  {
    "url": "online-tools/index.html",
    "revision": "39193519c030732235b3a89ca8c458a3"
  },
  {
    "url": "software/browser.html",
    "revision": "537ba2f9740278f2ca4491a99051db97"
  },
  {
    "url": "software/cross-platform.html",
    "revision": "053d42eaf1bf98db83c16ed2ad59b640"
  },
  {
    "url": "software/mac.html",
    "revision": "2ccf25a1398a3f51976039e30a4d6a16"
  },
  {
    "url": "software/vscode.html",
    "revision": "7d9c6bb3a0a3680b330e1fe4b1cc03eb"
  },
  {
    "url": "software/webstorm.html",
    "revision": "6fb993bc5107080c03b80481d2dfbb36"
  },
  {
    "url": "software/windows.html",
    "revision": "5bde3000a081e37d40182d94a8ab7a95"
  },
  {
    "url": "software/zsh.html",
    "revision": "b8146a6263037d54d6b2f175838f4b40"
  },
  {
    "url": "utils/function.html",
    "revision": "d1ddbe500fc5823773344696d12ec5d3"
  },
  {
    "url": "utils/library.html",
    "revision": "9d51f5b577785b9827b70c8e3e9d4c80"
  },
  {
    "url": "utils/regexp.html",
    "revision": "c259b2d016179d24f1019a4586ae9f9d"
  },
  {
    "url": "vue/index.html",
    "revision": "0f398f788b8a5daeeb9739fea136a2b1"
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
