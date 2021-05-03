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
    "revision": "b2c60e2d413d9c233698cef7a8cc0057"
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
    "url": "assets/js/2.05f07b84.js",
    "revision": "259cc62924e7333b32e20a974990e820"
  },
  {
    "url": "assets/js/20.0c532ef6.js",
    "revision": "40d1b18ee05b8e311986043ec4a89fec"
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
    "url": "assets/js/3.9edd121e.js",
    "revision": "8b228f9e1247f8bd35f6956db403dc2a"
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
    "url": "assets/js/7.8b243d44.js",
    "revision": "d3f1bead1aef807eb105a92fe031dffd"
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
    "url": "assets/js/app.00697469.js",
    "revision": "641f72b8c3e0820bee6795c0728778ef"
  },
  {
    "url": "css/index.html",
    "revision": "a56224b49bf9368afab4e974079441b0"
  },
  {
    "url": "css/scss.html",
    "revision": "137b34bb22e908afd1b6826bd1d15d4a"
  },
  {
    "url": "css/skill.html",
    "revision": "1d7c11ff2ab9baceac3f2b21198d7359"
  },
  {
    "url": "git/command.html",
    "revision": "8b73489b12799db716ce1c84691f7de3"
  },
  {
    "url": "git/index.html",
    "revision": "a270769b857403590fd1d2635a128577"
  },
  {
    "url": "index.html",
    "revision": "812f2ea1cbb04c9fe2bfb3320cd9507b"
  },
  {
    "url": "issue/h5.html",
    "revision": "f21552fb9db251aa035e298c595fa461"
  },
  {
    "url": "issue/pc.html",
    "revision": "485f8e77b167f9ff20489e0db65b4b74"
  },
  {
    "url": "node/npm.html",
    "revision": "b50db3a4fd83ef5b4db43adf2024562a"
  },
  {
    "url": "node/toolkit.html",
    "revision": "7ccf2c587943dd0b818e44831c3acef5"
  },
  {
    "url": "online-tools/bookmark-scripts.html",
    "revision": "51ca885e952ec2cb7286cbf3cfcd11a4"
  },
  {
    "url": "online-tools/index.html",
    "revision": "e640577d2778fe51fd69155dc5c55c58"
  },
  {
    "url": "software/browser.html",
    "revision": "373e4ca865067534f96c679b3228e955"
  },
  {
    "url": "software/cross-platform.html",
    "revision": "eef66c51fc55d95c2012b5cd7e2d49ec"
  },
  {
    "url": "software/mac.html",
    "revision": "b8ab35179f9da1a1de6e421025815493"
  },
  {
    "url": "software/vscode.html",
    "revision": "0818840e321f24bee4321e1e54a24309"
  },
  {
    "url": "software/webstorm.html",
    "revision": "ecb3481639d34716c14edba32dbecc0b"
  },
  {
    "url": "software/windows.html",
    "revision": "0fd67b137c204355f8a4b69ea58409d1"
  },
  {
    "url": "software/zsh.html",
    "revision": "f9a3c4c848392efe639bed9eb6ec764a"
  },
  {
    "url": "utils/function.html",
    "revision": "d75b75d44e56696bdb1f77ab1248fe93"
  },
  {
    "url": "utils/library.html",
    "revision": "a5a195754098909ebf6b700749913566"
  },
  {
    "url": "utils/regexp.html",
    "revision": "181923b6530c51b02fbb6f6a95a41220"
  },
  {
    "url": "vue/index.html",
    "revision": "2331a37011d74fbb4ec01347716d5e36"
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
