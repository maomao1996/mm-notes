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
    "revision": "153d6fbae91e5e256c1cda1f7be254b6"
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
    "url": "assets/js/14.bf26e5bb.js",
    "revision": "aaf4c6af09ec109c8ac628693b11d7e0"
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
    "url": "assets/js/2.9326c45c.js",
    "revision": "790788a4a47dab8c567de5946cdb6bc6"
  },
  {
    "url": "assets/js/20.6493a97f.js",
    "revision": "055d57b07fbd5d8cab986e1acf34e820"
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
    "url": "assets/js/4.70ce27f1.js",
    "revision": "0f6eeab02dd63e4e3aa61e1ddd263fd4"
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
    "url": "assets/js/app.04dc94fe.js",
    "revision": "8eec10354979f38d9c003da403b4ed37"
  },
  {
    "url": "css/index.html",
    "revision": "bf1738e7a719d09470ed924e32d9727c"
  },
  {
    "url": "css/scss.html",
    "revision": "b22b1e320d1c938cf724bb72bfcc2dd2"
  },
  {
    "url": "css/skill.html",
    "revision": "95da2ca13692b78c919c0c080050b943"
  },
  {
    "url": "git/command.html",
    "revision": "0828ab4a870a4278ea90d39335108618"
  },
  {
    "url": "git/index.html",
    "revision": "fd3d7ca93d73c3494c5fe2e94f20842d"
  },
  {
    "url": "index.html",
    "revision": "22a6a3d7e7bc7afa9432bc68e1caa1f9"
  },
  {
    "url": "issue/h5.html",
    "revision": "7a376a31eaafcee7870117b856145252"
  },
  {
    "url": "issue/pc.html",
    "revision": "13bfc9edfa987ceddc317d001ab772c0"
  },
  {
    "url": "node/npm.html",
    "revision": "fafe602cba520b5c4ee6ec2c1ae64bc7"
  },
  {
    "url": "node/toolkit.html",
    "revision": "f02141dfc5885838da7bed7a6d8f81b6"
  },
  {
    "url": "online-tools/bookmark-scripts.html",
    "revision": "143db05ba0167af080fa5e490763530b"
  },
  {
    "url": "online-tools/index.html",
    "revision": "135eaa4f86c820db8f7d75c997e9714f"
  },
  {
    "url": "software/browser.html",
    "revision": "c8466e3e33062f80369112c6462b7a8a"
  },
  {
    "url": "software/cross-platform.html",
    "revision": "45f33a58de0a635625b7fc0f64795978"
  },
  {
    "url": "software/mac.html",
    "revision": "df4c1595e0093a16ac5276d1d6e291ca"
  },
  {
    "url": "software/vscode.html",
    "revision": "d227dfe4069eeeae101ad445c589cd3c"
  },
  {
    "url": "software/webstorm.html",
    "revision": "3230a3c414d1a1b55f783dd24a0bc4d4"
  },
  {
    "url": "software/windows.html",
    "revision": "b9992d03a3b42ffb7f0bef5877fba90b"
  },
  {
    "url": "software/zsh.html",
    "revision": "d1ad74ac6d0e679120b2b389835cc6f6"
  },
  {
    "url": "utils/function.html",
    "revision": "a6852ce655e86e002ab3a677bccce78c"
  },
  {
    "url": "utils/library.html",
    "revision": "0b0d2fdc16df1d432865a7e4294e1c5c"
  },
  {
    "url": "utils/regexp.html",
    "revision": "c545691e4422a2aaea31dc522668f3bf"
  },
  {
    "url": "vue/index.html",
    "revision": "4527cb992ddc461e4ec7930f844ce910"
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
