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
    "url": "assets/css/0.styles.4163db96.css",
    "revision": "7d15ce407242318b6536b40c29999060"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.15d9a63d.js",
    "revision": "cefbfad8d638ac4318b5d77441bd2ba9"
  },
  {
    "url": "assets/js/11.9af9f3c6.js",
    "revision": "4011f50dec90f16efe24baed5461cf13"
  },
  {
    "url": "assets/js/12.70641ec6.js",
    "revision": "b487c75e23b7bd1ee1c7477a4822c467"
  },
  {
    "url": "assets/js/13.13fbe49b.js",
    "revision": "b920116c562b25f828fb0494cb963897"
  },
  {
    "url": "assets/js/14.24cdc0a0.js",
    "revision": "76292f8aa77003f75da8bbb1a414a575"
  },
  {
    "url": "assets/js/15.9023d050.js",
    "revision": "dfd34bfc17b63208d8c37de612729ff8"
  },
  {
    "url": "assets/js/16.fca1e327.js",
    "revision": "8943203b3fb218a468e72fa75398ba78"
  },
  {
    "url": "assets/js/17.10f34b41.js",
    "revision": "f881c254f004a1a3796c5ea9369bc4f3"
  },
  {
    "url": "assets/js/18.24cffe4a.js",
    "revision": "8f7b1e686d2c2e7a2290b68afc24cac5"
  },
  {
    "url": "assets/js/19.10a8fe3f.js",
    "revision": "ab6af6409b18cbf92c52bb72d3a07c5c"
  },
  {
    "url": "assets/js/2.44b1b3ef.js",
    "revision": "3f4e8c0444f0a243bba14fa2d6d5d9b4"
  },
  {
    "url": "assets/js/20.7687f2aa.js",
    "revision": "579feddc63860fde6b97acf99dd576e8"
  },
  {
    "url": "assets/js/21.87467a12.js",
    "revision": "d3f95d38cbd2e2e273aab9786e093658"
  },
  {
    "url": "assets/js/22.782e4c6b.js",
    "revision": "24f7e7009d977cf984eea4fb09e9607d"
  },
  {
    "url": "assets/js/23.99d6891d.js",
    "revision": "f7110ff53fdbfd1035e90ea6d2cfc899"
  },
  {
    "url": "assets/js/3.33ff8c49.js",
    "revision": "c2c2896a1212993394e0f0694d3e2cbf"
  },
  {
    "url": "assets/js/4.f9b8ae4f.js",
    "revision": "818da26846d3ffae2fd909561618fcf3"
  },
  {
    "url": "assets/js/5.24f8da31.js",
    "revision": "41341eeaa13188a42cd8ed3442e632c3"
  },
  {
    "url": "assets/js/6.0a2b126a.js",
    "revision": "86516d353bbf66dfa3b9d39e5bf86b03"
  },
  {
    "url": "assets/js/7.616586c5.js",
    "revision": "d26ae206e772a9ec77f971b8e4f8c260"
  },
  {
    "url": "assets/js/8.cee76d85.js",
    "revision": "25dc83bad22e901fc77ef783da212fd3"
  },
  {
    "url": "assets/js/9.46bfeefd.js",
    "revision": "7d451fd4d057eda2886fa27bf79f41f8"
  },
  {
    "url": "assets/js/app.2d19264c.js",
    "revision": "03f9ce45cc4121e8b1a0c5f7695f2df7"
  },
  {
    "url": "css/index.html",
    "revision": "359dc9351e59894d9fb7a4fab182580f"
  },
  {
    "url": "css/scss.html",
    "revision": "9edad60456b63a46e1eaac232b3c0433"
  },
  {
    "url": "css/skill.html",
    "revision": "f1525cf4586739389fd804457e294602"
  },
  {
    "url": "git/command.html",
    "revision": "0288aa5e31b8b27c77a3a39f10d4c4fc"
  },
  {
    "url": "git/index.html",
    "revision": "613f63e27ba22b271a70077f3ead8712"
  },
  {
    "url": "index.html",
    "revision": "5d19b0e377ea577808fc6c2af2384c26"
  },
  {
    "url": "node/depend.html",
    "revision": "44592239f25e9944c75d874c2c4a0315"
  },
  {
    "url": "node/npm.html",
    "revision": "7cd4fd06a23680e5f622576ba5f0c056"
  },
  {
    "url": "software/browser.html",
    "revision": "a87aa49d6f9934ef2f0b51269582a5c7"
  },
  {
    "url": "software/mac.html",
    "revision": "44a221080ffd4c2a476e6e1861cde04a"
  },
  {
    "url": "software/vscode.html",
    "revision": "72ca1c34c3ab83519f71c78af1a28ced"
  },
  {
    "url": "software/windows.html",
    "revision": "8b9d7124662de77e66d7155ef1e602c4"
  },
  {
    "url": "utils/function.html",
    "revision": "f57c97b4384314b64c8a9930aa8dc172"
  },
  {
    "url": "utils/regexp.html",
    "revision": "cf2072c716d944e7473f21134f469a61"
  },
  {
    "url": "vue/index.html",
    "revision": "05d45dfb77ee494fe949c98c90ef5a80"
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
