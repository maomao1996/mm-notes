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
    "revision": "1866658df239ae36c05572086ceeaa88"
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
    "url": "assets/js/10.72b47051.js",
    "revision": "3fa78d706da840d267eadb5aa80613e1"
  },
  {
    "url": "assets/js/11.a56d63fb.js",
    "revision": "04587cc873702f64e6d0753a74ab6b99"
  },
  {
    "url": "assets/js/12.5fba6416.js",
    "revision": "0ac8bf104bf205591e20f3e4ead00d3d"
  },
  {
    "url": "assets/js/13.5574a4a1.js",
    "revision": "b2a39b993e8dbea4287ee4acbb0bc851"
  },
  {
    "url": "assets/js/14.cec86043.js",
    "revision": "19c3b5a164af5f593d6f292fcae6d3e4"
  },
  {
    "url": "assets/js/15.ff323c9a.js",
    "revision": "69838fc908e8c52ce21fa246568615c7"
  },
  {
    "url": "assets/js/16.ec41ad04.js",
    "revision": "f126be5a74fca07d3be41982c7f01d75"
  },
  {
    "url": "assets/js/17.cac951e3.js",
    "revision": "1ac6b942b672ed3d4240a01c4c6f54af"
  },
  {
    "url": "assets/js/18.a40fa35c.js",
    "revision": "9f2b5152cb82d6a74e3f7ca3ad56c273"
  },
  {
    "url": "assets/js/19.080da409.js",
    "revision": "83e3db2c69d98775793cd18f2aa524ee"
  },
  {
    "url": "assets/js/2.6a4b1204.js",
    "revision": "afd836148e223fc8d3aa8345e0055606"
  },
  {
    "url": "assets/js/20.808eb14d.js",
    "revision": "52dd6b576e157cf6a39eb7e1a8d3df4c"
  },
  {
    "url": "assets/js/21.22b38bff.js",
    "revision": "ae78356a09217520428e11adfb8097c3"
  },
  {
    "url": "assets/js/22.2be42ac3.js",
    "revision": "45967e2e7e5b7193bcc897efd38b0c1a"
  },
  {
    "url": "assets/js/23.7ad047dd.js",
    "revision": "28fce4b9944182e448ebfcac0751605a"
  },
  {
    "url": "assets/js/24.3ae1cd24.js",
    "revision": "adfa588c222fede08e89a9f8d3656958"
  },
  {
    "url": "assets/js/25.804b8dcf.js",
    "revision": "34d52e96c5c58ac75454cfe5067722a9"
  },
  {
    "url": "assets/js/26.0c30606b.js",
    "revision": "69f031b99dcb4d5461e2606704b49c02"
  },
  {
    "url": "assets/js/27.e28f7429.js",
    "revision": "3f1bf6033edeea6ebadab91023386c50"
  },
  {
    "url": "assets/js/28.7ea03ede.js",
    "revision": "de5885a84766a1f013506fe1db027a1b"
  },
  {
    "url": "assets/js/29.e7151c3c.js",
    "revision": "6101720356d538af73fee809702f5172"
  },
  {
    "url": "assets/js/3.f16d9d4e.js",
    "revision": "66196a692b73c9384f7777f2be8a0c0d"
  },
  {
    "url": "assets/js/30.3138a375.js",
    "revision": "b9e65d2c4d16c0f688cae643bc5d9806"
  },
  {
    "url": "assets/js/31.af5da6df.js",
    "revision": "9a2decb8a763b7ea5b288d5e9bed26e1"
  },
  {
    "url": "assets/js/32.ad5d6188.js",
    "revision": "e4f334042796bc862c2fd811fc8d498d"
  },
  {
    "url": "assets/js/4.df4e6048.js",
    "revision": "3cfd10b05d67ee723bb83f61665e70d5"
  },
  {
    "url": "assets/js/5.2339c75e.js",
    "revision": "13e3e0577242eae7ffa19e858413df62"
  },
  {
    "url": "assets/js/6.a6c78384.js",
    "revision": "b742b30955bc5001e087b652a5bcef83"
  },
  {
    "url": "assets/js/7.0284df69.js",
    "revision": "e0c2f1306bedbdf1c397d4014ccdc860"
  },
  {
    "url": "assets/js/8.c4cc7471.js",
    "revision": "bc681c5004b778bf79559e80f1863feb"
  },
  {
    "url": "assets/js/9.bd15fb6f.js",
    "revision": "5dd4f80abce349a7d3f2d8f7875094c7"
  },
  {
    "url": "assets/js/app.adcf8101.js",
    "revision": "9bb4d90aa2ad0fe4b7e0b4c75c0dfc36"
  },
  {
    "url": "css/index.html",
    "revision": "e9e8e479bbc7798f055450743f927e24"
  },
  {
    "url": "css/scss.html",
    "revision": "8459ff2cd77e62573f59930798c5883f"
  },
  {
    "url": "css/skill.html",
    "revision": "14afc43636e58d514e60e2c3b867a17c"
  },
  {
    "url": "git/command.html",
    "revision": "5f43a7046582ad2439aa93e1707586a6"
  },
  {
    "url": "git/index.html",
    "revision": "93d337349584b9aec6e1ae05e0d0cf53"
  },
  {
    "url": "index.html",
    "revision": "2e44f22ad86361ed699d7c360f11e8ae"
  },
  {
    "url": "issue/h5.html",
    "revision": "fcac8c240e483429bfab537a8c6c1d71"
  },
  {
    "url": "issue/pc.html",
    "revision": "948b7755b58c8a0b7e9a1770cd324461"
  },
  {
    "url": "node/npm.html",
    "revision": "dda115f822710c3b8f76b88f49666b41"
  },
  {
    "url": "node/toolkit.html",
    "revision": "a2233fd4f514065b083ef32e81ac0ae9"
  },
  {
    "url": "online-tools/bookmark-scripts.html",
    "revision": "e14d32905a415e6ba5bce0b8a2d36ca8"
  },
  {
    "url": "online-tools/index.html",
    "revision": "e2733d66fa5b96e595906cb9b3a456cc"
  },
  {
    "url": "software/browser.html",
    "revision": "3514b09a3d53f943978bec5fb850c81a"
  },
  {
    "url": "software/cross-platform.html",
    "revision": "c4a3f5700481dc7aa01d2f5ad911c8e0"
  },
  {
    "url": "software/mac.html",
    "revision": "317a1c368ea04ea034361f6a25921f80"
  },
  {
    "url": "software/vscode.html",
    "revision": "b780ebb2c93fa1aaf539fb8ecf3d6594"
  },
  {
    "url": "software/webstorm.html",
    "revision": "a76e1b51896dcc266e98fce2a296d3f3"
  },
  {
    "url": "software/windows.html",
    "revision": "62a70192a6ce027739a1716abdc587db"
  },
  {
    "url": "software/zsh.html",
    "revision": "a9c0a33483d856519a1ae2885d06210f"
  },
  {
    "url": "utils/function.html",
    "revision": "4cf20ae923321c841b6fca036584f4a0"
  },
  {
    "url": "utils/library.html",
    "revision": "a1871c39bc2f4e2cb954522642776dd7"
  },
  {
    "url": "utils/regexp.html",
    "revision": "55e215799127bfd1f8b614ed0030044f"
  },
  {
    "url": "vue/index.html",
    "revision": "a851da7c4c6d98c14fa264e783af706b"
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
