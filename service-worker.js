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
    "revision": "d7f013d4ee89c167cb3b53e96d5011be"
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
    "url": "assets/js/19.3df8edfc.js",
    "revision": "cb39c764b48643f51747321edfae3149"
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
    "url": "assets/js/app.3445a93e.js",
    "revision": "0fcfd8c983503a2e5f8a9336489e06cd"
  },
  {
    "url": "css/index.html",
    "revision": "70c1af1545aa1d6a1ac574e577e2030f"
  },
  {
    "url": "css/scss.html",
    "revision": "e54f5f0406ce0dd880fb3d30af413b1b"
  },
  {
    "url": "css/skill.html",
    "revision": "11e12fc772edb753abed3039b8300103"
  },
  {
    "url": "git/command.html",
    "revision": "234050c577531c752782a1f5eef92207"
  },
  {
    "url": "git/index.html",
    "revision": "3b037bebfe53a364547adaa238adc27d"
  },
  {
    "url": "index.html",
    "revision": "8c085d1a9376e14daa4cf3751f3d28f1"
  },
  {
    "url": "issue/h5.html",
    "revision": "3be569b82833b7a52aedde60cafdda27"
  },
  {
    "url": "issue/pc.html",
    "revision": "e98d7b52dc93a4ffd744a9721bd0892a"
  },
  {
    "url": "node/npm.html",
    "revision": "369c889258a2a41cdfb8be65dd999977"
  },
  {
    "url": "node/toolkit.html",
    "revision": "fed9d14356ef5f473e95382f72205f42"
  },
  {
    "url": "online-tools/bookmark-scripts.html",
    "revision": "5695fb6d5129681025761c0b9aa4c6d5"
  },
  {
    "url": "online-tools/index.html",
    "revision": "ab239450c27c26afbe8020add877c909"
  },
  {
    "url": "software/browser.html",
    "revision": "5bfacc7af6cb8ee3658d1f3da878308e"
  },
  {
    "url": "software/cross-platform.html",
    "revision": "18eda702364a790db0cc1f2c0e7dd442"
  },
  {
    "url": "software/mac.html",
    "revision": "6fe28024950fac8b334cf87626c1eb4d"
  },
  {
    "url": "software/vscode.html",
    "revision": "66b54134904f82cdbffddee17cf51d22"
  },
  {
    "url": "software/webstorm.html",
    "revision": "7927606e47a5b91e621b9890be9a3204"
  },
  {
    "url": "software/windows.html",
    "revision": "280041922fc259b8c111f64d7efbee83"
  },
  {
    "url": "software/zsh.html",
    "revision": "77e797a01aa3cd16395bf41c336fd536"
  },
  {
    "url": "utils/function.html",
    "revision": "8b7812ad977958cb9a7ed7f93fdcbe2d"
  },
  {
    "url": "utils/library.html",
    "revision": "8be0a8df814b75eaf676cc132ee274c3"
  },
  {
    "url": "utils/regexp.html",
    "revision": "68148c8c3430f05d0b043f8a744a4437"
  },
  {
    "url": "vue/index.html",
    "revision": "fbf8e149aff36f7ff14a3cd85f5dee11"
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
