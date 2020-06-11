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
    "revision": "12386ef7dfe174948ce3b3ee223a70b5"
  },
  {
    "url": "assets/css/0.styles.e3808d4c.css",
    "revision": "d99ca45e02c38f35b230dd51ae2cc037"
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
    "url": "assets/js/10.3ba27e37.js",
    "revision": "41b610632fb22e23a72ba7a60813ccf5"
  },
  {
    "url": "assets/js/11.43df6ed5.js",
    "revision": "22316d1ff96228cf89bfb54288b566ba"
  },
  {
    "url": "assets/js/12.c124b3f3.js",
    "revision": "b964e7a759ca18b0931fca45e7bab0da"
  },
  {
    "url": "assets/js/13.4bc23f51.js",
    "revision": "dd11bf2d6f6366b87efc2c12210f479a"
  },
  {
    "url": "assets/js/14.bdfa1c48.js",
    "revision": "be227d7c94aba23661fe29e1f269ea71"
  },
  {
    "url": "assets/js/15.2d3703f0.js",
    "revision": "af2789484a436cfd258edb6fee7e5f6e"
  },
  {
    "url": "assets/js/16.ee65bf76.js",
    "revision": "1581f2ab14402089789448e5448f74ab"
  },
  {
    "url": "assets/js/17.e00d6f2c.js",
    "revision": "dc3e22c9a15d32ab9d620c364f07bcd4"
  },
  {
    "url": "assets/js/18.7f5e7b9b.js",
    "revision": "487986682f4b21df6c30c4286392efc7"
  },
  {
    "url": "assets/js/19.eb401718.js",
    "revision": "5f32719037f2c108533b3c64c3a5c39b"
  },
  {
    "url": "assets/js/2.3da6ca1a.js",
    "revision": "826779dce117630240123d987202e2e3"
  },
  {
    "url": "assets/js/20.104115cc.js",
    "revision": "b29ae0641c0fb7f9e28202ae4203e2b3"
  },
  {
    "url": "assets/js/21.780c3352.js",
    "revision": "9342398f6a036988c6e23b7976140b2f"
  },
  {
    "url": "assets/js/22.d66751e5.js",
    "revision": "a2c221dd2a643215373d1d6870532064"
  },
  {
    "url": "assets/js/23.9039fcc0.js",
    "revision": "3bdf6e96add670e535e7684fc6d9a54e"
  },
  {
    "url": "assets/js/24.1780097a.js",
    "revision": "5f9540b262bdafe63e420eab5945261e"
  },
  {
    "url": "assets/js/25.3e19f3aa.js",
    "revision": "05c9daf9ab3793c5f8604e102ce93c81"
  },
  {
    "url": "assets/js/3.7cdaebe4.js",
    "revision": "8fe6f72f7435b88b6607d5d80322bf08"
  },
  {
    "url": "assets/js/4.df3f5b24.js",
    "revision": "971d2d1edc574a9759a4e374656fa038"
  },
  {
    "url": "assets/js/5.64443de1.js",
    "revision": "d7326ca9c4b067379db4ccbcd399f0c2"
  },
  {
    "url": "assets/js/6.601c31eb.js",
    "revision": "e3d95388e221086fdaedaf4f0e51448a"
  },
  {
    "url": "assets/js/7.c187c09e.js",
    "revision": "cbd00b9f1106d3cf7dd29c10dba3f669"
  },
  {
    "url": "assets/js/8.2f63192b.js",
    "revision": "50c47c93b19999f58e2c07b718124105"
  },
  {
    "url": "assets/js/9.48e74ad2.js",
    "revision": "e287ef2639795d6ca27e3897ae4c9d1f"
  },
  {
    "url": "assets/js/app.5a914ea2.js",
    "revision": "814287ab05d5bb76324b78f69703fc4a"
  },
  {
    "url": "css/index.html",
    "revision": "89168846ada9581ba775e087b48d76b3"
  },
  {
    "url": "css/scss.html",
    "revision": "05c3c3e782fe3f47a96589db80c89e71"
  },
  {
    "url": "css/skill.html",
    "revision": "c364a3dc9c48f526c457e1ecd6183656"
  },
  {
    "url": "git/command.html",
    "revision": "18e61ff691c21c8fb02b0fabc4d683fd"
  },
  {
    "url": "git/index.html",
    "revision": "f5f440793c72873a054fc433ff2571b2"
  },
  {
    "url": "index.html",
    "revision": "23f1780323b6b510854fe07952810f15"
  },
  {
    "url": "issue/h5.html",
    "revision": "53e1d2db21e400c151c0105c37b3f2a1"
  },
  {
    "url": "issue/pc.html",
    "revision": "981564d8be61968ea9567a5038d8d127"
  },
  {
    "url": "node/depend.html",
    "revision": "dad5e370574c4e669531dfc262d14d4e"
  },
  {
    "url": "node/npm.html",
    "revision": "084f0e617d524e42d8c2c654bcf86724"
  },
  {
    "url": "software/browser.html",
    "revision": "3e1ee839d1dbcb7f37f894f8fdcb324c"
  },
  {
    "url": "software/mac.html",
    "revision": "f16295899f622255bf534d7006fb5db2"
  },
  {
    "url": "software/vscode.html",
    "revision": "fbb05d78d795d7181b3bd386ee9f8e9e"
  },
  {
    "url": "software/webstorm.html",
    "revision": "0a4f298016940ac0538078163b7f028a"
  },
  {
    "url": "software/windows.html",
    "revision": "07d137b1fd7165264e954ebfa138f604"
  },
  {
    "url": "utils/function.html",
    "revision": "8a07c56de4fc4e1f18de0e7194fc2f79"
  },
  {
    "url": "utils/regexp.html",
    "revision": "308d9b13ebdf6773c8677dbeeefd2621"
  },
  {
    "url": "vue/index.html",
    "revision": "deebe360e9360ef9484ec8c42d305f4e"
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
