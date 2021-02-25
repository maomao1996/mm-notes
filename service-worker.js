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
    "revision": "25002bd71678346c18e92b9dc1dfedda"
  },
  {
    "url": "assets/css/0.styles.5d1861b4.css",
    "revision": "31b228ddfa99f4f616185a51a8183057"
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
    "url": "assets/js/app.3f205e48.js",
    "revision": "d56afe1724b04c5414db9c2db4dc8ab8"
  },
  {
    "url": "css/index.html",
    "revision": "269af606d11216b8a03ea0c66f393424"
  },
  {
    "url": "css/scss.html",
    "revision": "fabad52e232642709f9220094886740f"
  },
  {
    "url": "css/skill.html",
    "revision": "996aafaee1ae4a04fd02dbf8cb9ed22e"
  },
  {
    "url": "git/command.html",
    "revision": "f40a3f681374254b2788f1c47aa5fbdd"
  },
  {
    "url": "git/index.html",
    "revision": "336715783909a46e5b763196a10db62e"
  },
  {
    "url": "index.html",
    "revision": "46d014cd454b5184c742971ba3eaab68"
  },
  {
    "url": "issue/h5.html",
    "revision": "874ac1995745f6d6d86e6ae0c8e285ae"
  },
  {
    "url": "issue/pc.html",
    "revision": "8659c368f6347d546618ca89d5ef8c04"
  },
  {
    "url": "node/npm.html",
    "revision": "465e4490f563a885793d0cdff18011fb"
  },
  {
    "url": "node/toolkit.html",
    "revision": "f344c7ca9c45c645aa0995aad1c72956"
  },
  {
    "url": "online-tools/bookmark-scripts.html",
    "revision": "333f1869cbdccdfde89ffa1be2c3c9aa"
  },
  {
    "url": "online-tools/index.html",
    "revision": "3902c8068570906c5a749d72a3ed4411"
  },
  {
    "url": "software/browser.html",
    "revision": "63811bc95383481c2a22a5ee8ebed085"
  },
  {
    "url": "software/cross-platform.html",
    "revision": "831701983e88c4e07465d27105a8ea4f"
  },
  {
    "url": "software/mac.html",
    "revision": "9459bcfaed973b118202db0a0814f391"
  },
  {
    "url": "software/vscode.html",
    "revision": "c52bf8f2b3ddd0e6c5f48837a533b2bc"
  },
  {
    "url": "software/webstorm.html",
    "revision": "b53f82de942e48cce20d8117a9660ac8"
  },
  {
    "url": "software/windows.html",
    "revision": "ed4437e1a57999ec41da99f91e30869d"
  },
  {
    "url": "software/zsh.html",
    "revision": "41b6d132af3da79f630f36edfb1eccb8"
  },
  {
    "url": "utils/function.html",
    "revision": "e3c92fb7bce74782cc35ef216d69f120"
  },
  {
    "url": "utils/library.html",
    "revision": "b66e89f635d4cd5ec1affe790f7e217c"
  },
  {
    "url": "utils/regexp.html",
    "revision": "470fbae50d8ab6284c6fc062fdbc8beb"
  },
  {
    "url": "vue/index.html",
    "revision": "fc47e5509963c367fa6a5021a2185221"
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
