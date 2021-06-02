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
    "revision": "75d5a0063fc84d063d0aa7734d059d2e"
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
    "url": "assets/js/10.36940b99.js",
    "revision": "50a5d7e6dff4cf8631e4dc9ca02cafca"
  },
  {
    "url": "assets/js/11.ca2c06d1.js",
    "revision": "f7cceef90ad0cece468e20f2f45a8eb0"
  },
  {
    "url": "assets/js/12.32de1929.js",
    "revision": "f0dcb0b803e0c8b13f835742585618de"
  },
  {
    "url": "assets/js/13.6b43c81c.js",
    "revision": "daec6bd26b344c50e5a4be45c2136da1"
  },
  {
    "url": "assets/js/14.c6668fc0.js",
    "revision": "19560d96580ca6cb662087ff4e260d90"
  },
  {
    "url": "assets/js/15.f0cb5fb4.js",
    "revision": "b5eea002b17142400df7980106cd1dc3"
  },
  {
    "url": "assets/js/16.e8c1e245.js",
    "revision": "ad7b05cd9191070201c7831fa523d1dd"
  },
  {
    "url": "assets/js/17.fe01de6e.js",
    "revision": "3166120800e35a1626c8934909bb854c"
  },
  {
    "url": "assets/js/18.cf765f91.js",
    "revision": "57a5cb45897860350a89121c47ba11d4"
  },
  {
    "url": "assets/js/19.997386cf.js",
    "revision": "086703e4685975ed8783fbf9984b03ee"
  },
  {
    "url": "assets/js/2.ce93414b.js",
    "revision": "8893814c7c5b8c92af52f1197b369c85"
  },
  {
    "url": "assets/js/20.c3257bc6.js",
    "revision": "651d07155932bc9be4e3314d8d4e9985"
  },
  {
    "url": "assets/js/21.c3868ab7.js",
    "revision": "f4747a9c5b042083d373372e45ad2f99"
  },
  {
    "url": "assets/js/22.1a06aede.js",
    "revision": "c2c3435e6d50e81ae2264a76a76a5a93"
  },
  {
    "url": "assets/js/23.29cfa4c2.js",
    "revision": "2a10514b4773b0452579a4f9a2913286"
  },
  {
    "url": "assets/js/24.a303322f.js",
    "revision": "7adad9b42c13bc646809d756d1536892"
  },
  {
    "url": "assets/js/25.bb32dea0.js",
    "revision": "f53f6ca46eb1085369a03b310e505b2f"
  },
  {
    "url": "assets/js/26.d84cc2b1.js",
    "revision": "cbdbb7080e30184aaf9540340519aeb3"
  },
  {
    "url": "assets/js/27.79278535.js",
    "revision": "99c0827bf105e7c0c7d9db75693dbf90"
  },
  {
    "url": "assets/js/28.e9e3262c.js",
    "revision": "93e4c611bde36c6b4649c50eb393ac02"
  },
  {
    "url": "assets/js/29.849c3115.js",
    "revision": "025f19b470e343b9c02f7c2f262eeadc"
  },
  {
    "url": "assets/js/3.8e2520c6.js",
    "revision": "ba4ce212c8f3d57f2e92b35988aaff8e"
  },
  {
    "url": "assets/js/30.9a45acd7.js",
    "revision": "04e24fe5729a833f336ba32a49b976f6"
  },
  {
    "url": "assets/js/31.bea7fd93.js",
    "revision": "ed7bfc9e98529c388959531457020254"
  },
  {
    "url": "assets/js/32.26ddcd68.js",
    "revision": "2ce15ff3c5ea4acffe2b07f57088cd97"
  },
  {
    "url": "assets/js/4.110db0ab.js",
    "revision": "5fe8090d09f93ff767c743bd4c6900b4"
  },
  {
    "url": "assets/js/5.6545db83.js",
    "revision": "c73ae8475fa116f99fbd62523e16c15a"
  },
  {
    "url": "assets/js/6.41805f68.js",
    "revision": "16391095a932380d41d8fd943d426265"
  },
  {
    "url": "assets/js/7.c1c1947e.js",
    "revision": "c63105264bbd048da76ab3a647cfe4d9"
  },
  {
    "url": "assets/js/8.7d78d546.js",
    "revision": "4b8d1ab5a92d814867ed73e52075f78a"
  },
  {
    "url": "assets/js/9.4cbcfe55.js",
    "revision": "dc1cd615a47f830379d5cac821a501a0"
  },
  {
    "url": "assets/js/app.5d8e94ef.js",
    "revision": "8c96f66c9c8859f419dafe96b848db0f"
  },
  {
    "url": "css/index.html",
    "revision": "5147173b90a4a8a9ee6f457c5bd1f075"
  },
  {
    "url": "css/scss.html",
    "revision": "aeeb66cdcc59f6d6477e02a41755416d"
  },
  {
    "url": "css/skill.html",
    "revision": "99bd3bc76cc00987012bcf54ee7b162b"
  },
  {
    "url": "git/command.html",
    "revision": "9db9acc88d09e93570c6031f0025ce5f"
  },
  {
    "url": "git/index.html",
    "revision": "e772efb749c99f1696fdb7f3c97b5b46"
  },
  {
    "url": "index.html",
    "revision": "970eea6d39cadf8ac91638f7d9380544"
  },
  {
    "url": "issue/h5.html",
    "revision": "f320433e56554fde2641d57006265566"
  },
  {
    "url": "issue/pc.html",
    "revision": "02727626832fb580930f84293bcd9820"
  },
  {
    "url": "node/npm.html",
    "revision": "b958068835fd7ab953b0cf92c3364b37"
  },
  {
    "url": "node/toolkit.html",
    "revision": "92c4a0c57b48c13633a577d6e474c422"
  },
  {
    "url": "online-tools/bookmark-scripts.html",
    "revision": "55a787e9b55edf2fe10667f8b2841f36"
  },
  {
    "url": "online-tools/index.html",
    "revision": "838fcd8c4882d71b149cf517664ccd9d"
  },
  {
    "url": "software/browser.html",
    "revision": "7a404dd20a585444af90847d1eb70747"
  },
  {
    "url": "software/cross-platform.html",
    "revision": "83eaf4975409eb9a9fd6ed7d081e5e91"
  },
  {
    "url": "software/mac.html",
    "revision": "f3e7451cf90716666b5c4cf4be1987b1"
  },
  {
    "url": "software/vscode.html",
    "revision": "a3c2ce3f20efc6fc5956dba5b01593c9"
  },
  {
    "url": "software/webstorm.html",
    "revision": "4f4364dc069b3b31543711c5ffbfa446"
  },
  {
    "url": "software/windows.html",
    "revision": "8cab96b7ff33c4bfc5384a8119ae39b1"
  },
  {
    "url": "software/zsh.html",
    "revision": "8bdda4e31160c64090969e1c86560acf"
  },
  {
    "url": "utils/function.html",
    "revision": "bbc477347c26b882704f73ba7b6b9e36"
  },
  {
    "url": "utils/library.html",
    "revision": "ada8dbc94b8143377cd7b611353f5bf6"
  },
  {
    "url": "utils/regexp.html",
    "revision": "999cc8b9b382d2347301a92295aaa21e"
  },
  {
    "url": "vue/index.html",
    "revision": "785a55a781311283ec2a6ad72f3f397a"
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
