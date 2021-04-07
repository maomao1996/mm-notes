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
    "revision": "dcb263eb16768f16a3afc16565914dec"
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
    "url": "assets/js/24.346c678b.js",
    "revision": "79b0cd55a2531bdf8cb2fbca69168655"
  },
  {
    "url": "assets/js/25.804b8dcf.js",
    "revision": "34d52e96c5c58ac75454cfe5067722a9"
  },
  {
    "url": "assets/js/26.c8779d4d.js",
    "revision": "ebc510e047e0bdc8d76829cb7484bfca"
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
    "url": "assets/js/app.2502e12b.js",
    "revision": "7799faf3acc5e377429d7a94834c8e17"
  },
  {
    "url": "css/index.html",
    "revision": "9ac485ed07cb8ce5c979c5c2f433c306"
  },
  {
    "url": "css/scss.html",
    "revision": "53dab7e308aef8122cbde02993883ac8"
  },
  {
    "url": "css/skill.html",
    "revision": "23f4ea4d1fb02a1555bb6c35787132c1"
  },
  {
    "url": "git/command.html",
    "revision": "65a02b2462644da3aba03a60c0290973"
  },
  {
    "url": "git/index.html",
    "revision": "93a550ecf7c5e2343d502d2331731939"
  },
  {
    "url": "index.html",
    "revision": "c3db790b773757a9eb51ad1e2d905b8f"
  },
  {
    "url": "issue/h5.html",
    "revision": "6e5a67fc3c2a14bde0b1b4bbdace8e8b"
  },
  {
    "url": "issue/pc.html",
    "revision": "fb70dc4ee08320be4ae121e701d686bc"
  },
  {
    "url": "node/npm.html",
    "revision": "4fa5420b24898f5dbbb65f6b2ea20d8c"
  },
  {
    "url": "node/toolkit.html",
    "revision": "5d312b006aefada59efe7d88d8a2dec0"
  },
  {
    "url": "online-tools/bookmark-scripts.html",
    "revision": "ed77c8776fde9b291e0e06b880039303"
  },
  {
    "url": "online-tools/index.html",
    "revision": "882c048417104abfa39057a3cb7771b6"
  },
  {
    "url": "software/browser.html",
    "revision": "97068c848053b10e1f5376cb1b9ad9c2"
  },
  {
    "url": "software/cross-platform.html",
    "revision": "24a2aca6f1b08b3fe5b8422937c89ebd"
  },
  {
    "url": "software/mac.html",
    "revision": "9a7fbb9e8b26dea35ad85b81a3f819be"
  },
  {
    "url": "software/vscode.html",
    "revision": "0b08c3d64fa520dc8f02250703bda9e9"
  },
  {
    "url": "software/webstorm.html",
    "revision": "e3129f9bdb909f79555662172d487c16"
  },
  {
    "url": "software/windows.html",
    "revision": "91e670a97cc17e3973982df7da8b1e94"
  },
  {
    "url": "software/zsh.html",
    "revision": "71c0c1b5faab94f5b9658bcd598c604b"
  },
  {
    "url": "utils/function.html",
    "revision": "528910d3568eb58bb955a2060aa458c9"
  },
  {
    "url": "utils/library.html",
    "revision": "3db99ecdbed2dda2c6b0f9410d6ef05c"
  },
  {
    "url": "utils/regexp.html",
    "revision": "11dc75e64aadbf4132e6b578b7eace48"
  },
  {
    "url": "vue/index.html",
    "revision": "a1c4b525ce5501d4ce26af08c40a86f1"
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
