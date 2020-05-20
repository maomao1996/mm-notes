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
    "revision": "7aa77291a2a5be4754c8ab4597d0062f"
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
    "url": "assets/js/10.d5527948.js",
    "revision": "41b610632fb22e23a72ba7a60813ccf5"
  },
  {
    "url": "assets/js/11.4d9e5372.js",
    "revision": "22316d1ff96228cf89bfb54288b566ba"
  },
  {
    "url": "assets/js/12.45f14cba.js",
    "revision": "2c93c77344468c39f191c877f9142fb5"
  },
  {
    "url": "assets/js/13.c3a0bceb.js",
    "revision": "35e5ac2d72aa093cf40205c357079743"
  },
  {
    "url": "assets/js/14.e29e6aba.js",
    "revision": "191776c857eaf211b3058f7424a549b5"
  },
  {
    "url": "assets/js/15.cc40627a.js",
    "revision": "d899c886c8dd579243d43a5710e990c7"
  },
  {
    "url": "assets/js/16.7bb54df1.js",
    "revision": "1581f2ab14402089789448e5448f74ab"
  },
  {
    "url": "assets/js/17.66307fa4.js",
    "revision": "dc3e22c9a15d32ab9d620c364f07bcd4"
  },
  {
    "url": "assets/js/18.8ef9e635.js",
    "revision": "487986682f4b21df6c30c4286392efc7"
  },
  {
    "url": "assets/js/19.30628153.js",
    "revision": "1384b46001b97b67409dd93a87fcdfb1"
  },
  {
    "url": "assets/js/2.66c6543e.js",
    "revision": "826779dce117630240123d987202e2e3"
  },
  {
    "url": "assets/js/20.55c560b0.js",
    "revision": "8a86a10ecdcfdc2d293377d7908557bb"
  },
  {
    "url": "assets/js/21.983c8538.js",
    "revision": "9342398f6a036988c6e23b7976140b2f"
  },
  {
    "url": "assets/js/22.c0154d30.js",
    "revision": "a2c221dd2a643215373d1d6870532064"
  },
  {
    "url": "assets/js/23.125bd49c.js",
    "revision": "3bdf6e96add670e535e7684fc6d9a54e"
  },
  {
    "url": "assets/js/24.24f029bf.js",
    "revision": "5f9540b262bdafe63e420eab5945261e"
  },
  {
    "url": "assets/js/25.3e19f3aa.js",
    "revision": "05c9daf9ab3793c5f8604e102ce93c81"
  },
  {
    "url": "assets/js/3.cc50ac46.js",
    "revision": "8fe6f72f7435b88b6607d5d80322bf08"
  },
  {
    "url": "assets/js/4.9d016c8c.js",
    "revision": "971d2d1edc574a9759a4e374656fa038"
  },
  {
    "url": "assets/js/5.64443de1.js",
    "revision": "d7326ca9c4b067379db4ccbcd399f0c2"
  },
  {
    "url": "assets/js/6.d93b686c.js",
    "revision": "fef424a2a6729901fe70e65bf73bb8fd"
  },
  {
    "url": "assets/js/7.5e2c1f42.js",
    "revision": "cbd00b9f1106d3cf7dd29c10dba3f669"
  },
  {
    "url": "assets/js/8.52c00ad5.js",
    "revision": "50c47c93b19999f58e2c07b718124105"
  },
  {
    "url": "assets/js/9.3d70bca9.js",
    "revision": "e287ef2639795d6ca27e3897ae4c9d1f"
  },
  {
    "url": "assets/js/app.14d7bdb5.js",
    "revision": "a30ef25c40884b62eb05ce5bfbfd7a48"
  },
  {
    "url": "css/index.html",
    "revision": "74504565936e43a8cb3caebe242c639b"
  },
  {
    "url": "css/scss.html",
    "revision": "678a47ed2b29a9096c689d5b1392b7d5"
  },
  {
    "url": "css/skill.html",
    "revision": "3a1aa6847c24e58d4470110a4977f4b6"
  },
  {
    "url": "git/command.html",
    "revision": "83e72a32d747f738ef0ff5e439025e89"
  },
  {
    "url": "git/index.html",
    "revision": "7f7bc7827a30dbfd17554e62bad4f80c"
  },
  {
    "url": "index.html",
    "revision": "dbdee215780de3ce1b4bc56ef31c5dc1"
  },
  {
    "url": "issue/h5.html",
    "revision": "a21678e1955ea925436d8a61f3f77a96"
  },
  {
    "url": "issue/pc.html",
    "revision": "df083a0d4f7e1386a9fa1b20b2c0d2d8"
  },
  {
    "url": "node/depend.html",
    "revision": "c81b857e88875c264ad07b54aacc75e3"
  },
  {
    "url": "node/npm.html",
    "revision": "d058d5a7780ebef5ee412fcaf06e27de"
  },
  {
    "url": "software/browser.html",
    "revision": "458b2cb4ef391714a3d03cf3eee86b12"
  },
  {
    "url": "software/mac.html",
    "revision": "d55c53d6e13d858ac904fe4f572c997e"
  },
  {
    "url": "software/vscode.html",
    "revision": "3b73bf9daaa0c1ae934761298c388c2e"
  },
  {
    "url": "software/webstorm.html",
    "revision": "6de7d052174564fc1cee91ea8f50694d"
  },
  {
    "url": "software/windows.html",
    "revision": "0154a6a61b4aa963a979cf006d85a673"
  },
  {
    "url": "utils/function.html",
    "revision": "a0fa59b503380fdd70b557781dc5f0ad"
  },
  {
    "url": "utils/regexp.html",
    "revision": "2ecfd1ed474ea56e3ce233635e975a62"
  },
  {
    "url": "vue/index.html",
    "revision": "0878abd4089a093944ae82fd56cdb7e1"
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
