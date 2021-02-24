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
    "revision": "c871b91d220ee95f532d9ac9cdaabaf5"
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
    "url": "assets/js/12.9b11770a.js",
    "revision": "6e415e3414b82a22bc0b2ffce737f4e2"
  },
  {
    "url": "assets/js/13.96329845.js",
    "revision": "fbc940ac82e713faa7c13e2d8a8a7ca1"
  },
  {
    "url": "assets/js/14.2dee03c8.js",
    "revision": "ace4f03b025cf13b99aeca4ecc0e5fde"
  },
  {
    "url": "assets/js/15.3b869417.js",
    "revision": "e84373b048c4e21a15c1d820075c55da"
  },
  {
    "url": "assets/js/16.7aa13127.js",
    "revision": "4230e4f537a93e0a15d6985f2affc1f1"
  },
  {
    "url": "assets/js/17.7eaa8535.js",
    "revision": "0eec68521cd53af04793ed82b124a634"
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
    "url": "assets/js/app.9155d2e8.js",
    "revision": "ccc7326bc08d7855f404cc8c6b9a08ae"
  },
  {
    "url": "css/index.html",
    "revision": "e775a4350872fcfb5987065e5d15efed"
  },
  {
    "url": "css/scss.html",
    "revision": "17d2611c3c1396267e4a782973515526"
  },
  {
    "url": "css/skill.html",
    "revision": "c5a392ef8f514974da4e92bd8da36e83"
  },
  {
    "url": "git/command.html",
    "revision": "2f173ef58d165b6177d08bc9d807353a"
  },
  {
    "url": "git/index.html",
    "revision": "53bcf7e3e54b4213e085e0d7ed56b601"
  },
  {
    "url": "index.html",
    "revision": "6c0fe0726b3f1e0480044d37d62df191"
  },
  {
    "url": "issue/h5.html",
    "revision": "c586d5ac92d4deda54b65c4c9b8b211e"
  },
  {
    "url": "issue/pc.html",
    "revision": "a016b178a1e3ac7bc3e1425cd1977d1a"
  },
  {
    "url": "node/npm.html",
    "revision": "2be9bca3f8306236b312de4c8fa36f11"
  },
  {
    "url": "node/toolkit.html",
    "revision": "dee8f7deb2e8c2767805811b0f0911db"
  },
  {
    "url": "online-tools/bookmark-scripts.html",
    "revision": "9900b439be39140a1c415dab6fdffcc7"
  },
  {
    "url": "online-tools/index.html",
    "revision": "0f3511549b41798c47ae1623e568b589"
  },
  {
    "url": "software/browser.html",
    "revision": "6c8cb2201cefe90cbd3fbb325bcbbd0a"
  },
  {
    "url": "software/cross-platform.html",
    "revision": "47808e8d1341ae8dabd965870c7c85ba"
  },
  {
    "url": "software/mac.html",
    "revision": "4b0d49487a419550f0d2ff7e1d7412a0"
  },
  {
    "url": "software/vscode.html",
    "revision": "058adcf544135ad27c027d2eb42bc76b"
  },
  {
    "url": "software/webstorm.html",
    "revision": "998c745debd8cb35c62bb022b5a4d153"
  },
  {
    "url": "software/windows.html",
    "revision": "4d6fc1740262435ebdc31b47487e09ce"
  },
  {
    "url": "software/zsh.html",
    "revision": "096eb5654981a7c3a8946d59a5e88527"
  },
  {
    "url": "utils/function.html",
    "revision": "b73d15123d002c13b19163d9db06d474"
  },
  {
    "url": "utils/library.html",
    "revision": "a62abfdc2a5d6a6df23abd98dde94639"
  },
  {
    "url": "utils/regexp.html",
    "revision": "3b8b5d96f978fb68e6ff980ae4e60b2d"
  },
  {
    "url": "vue/index.html",
    "revision": "fe8029928791b9c9123bf98373ec2cf3"
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
