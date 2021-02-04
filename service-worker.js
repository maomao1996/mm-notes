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
    "revision": "aa488640f1baa1686df8679ff5ff3366"
  },
  {
    "url": "assets/css/0.styles.8c605646.css",
    "revision": "b482b3435b90728ee61d466f0e7b4299"
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
    "url": "assets/js/10.bdfe7c21.js",
    "revision": "87d5247664ef5e401ab91e06296c1064"
  },
  {
    "url": "assets/js/11.f74ef641.js",
    "revision": "b6a4eb8243d91e71791c03a314c46fbe"
  },
  {
    "url": "assets/js/12.868b989d.js",
    "revision": "fa9ddf99736ebcc00ee5b1aec3adffd4"
  },
  {
    "url": "assets/js/13.a16b8204.js",
    "revision": "8b3ebfb5955d8f59c4f58c4249ef8dc2"
  },
  {
    "url": "assets/js/14.552e5b60.js",
    "revision": "9c6c83c2aaeb73326e4d7f56b4f85803"
  },
  {
    "url": "assets/js/15.add8a221.js",
    "revision": "c75e95bcd01a10b472acf81f5cca15d4"
  },
  {
    "url": "assets/js/16.b53450b0.js",
    "revision": "c179c45c5d12d7813da56343f5bc3b90"
  },
  {
    "url": "assets/js/17.4dc10ba3.js",
    "revision": "67aa61843a2a9e197a5050b390fb349e"
  },
  {
    "url": "assets/js/18.5e1bece4.js",
    "revision": "d5457bacd677c2f2d74533c1b764a673"
  },
  {
    "url": "assets/js/19.2f83eab6.js",
    "revision": "9d32d4a67b1bf13c0d1a5c52e830e680"
  },
  {
    "url": "assets/js/2.7577256f.js",
    "revision": "2ad10d27ba4ec28226c4ade6f1364b53"
  },
  {
    "url": "assets/js/20.f738146b.js",
    "revision": "093d189af81266b0510f048b596114e0"
  },
  {
    "url": "assets/js/21.eb4e1161.js",
    "revision": "22c6d027243b538fa48101be963f56bf"
  },
  {
    "url": "assets/js/22.4a4c1aaf.js",
    "revision": "ad39f9542844c998dafc465ce6f6150b"
  },
  {
    "url": "assets/js/23.ea545490.js",
    "revision": "9bad6ac87e9b0c3cf8d64ed4321fef9f"
  },
  {
    "url": "assets/js/24.8ef8a0a6.js",
    "revision": "054e58c42b47217a39e2a40e1b580336"
  },
  {
    "url": "assets/js/25.24f60f26.js",
    "revision": "bce7cb8e67f59ec1dcfc318d2b8bc638"
  },
  {
    "url": "assets/js/26.ebe3f630.js",
    "revision": "c16ff985851ca725e09c1c5fb84407f9"
  },
  {
    "url": "assets/js/27.6bb1690d.js",
    "revision": "44935182a154ae2264f0dbcf4e4fc3f6"
  },
  {
    "url": "assets/js/28.5f78396c.js",
    "revision": "eeb41ff0a84a997e02160c7430659c54"
  },
  {
    "url": "assets/js/29.63334187.js",
    "revision": "51a57dac3314b7f0bb02e8e00d5a5465"
  },
  {
    "url": "assets/js/3.8b54fa61.js",
    "revision": "480c84bbf660b0fe74b679f90e2de8e6"
  },
  {
    "url": "assets/js/30.e9f93c8d.js",
    "revision": "f47011f7cd98722c06a386648399286f"
  },
  {
    "url": "assets/js/31.ae827e3c.js",
    "revision": "641c508375d6c0019763b75f39fce4d5"
  },
  {
    "url": "assets/js/32.26ddcd68.js",
    "revision": "2ce15ff3c5ea4acffe2b07f57088cd97"
  },
  {
    "url": "assets/js/4.f3cd7445.js",
    "revision": "a50b81da55d7e55ce20284a4e964b600"
  },
  {
    "url": "assets/js/5.a3874afe.js",
    "revision": "6e514370a0dd241df2008fc0332867c9"
  },
  {
    "url": "assets/js/6.2815ef61.js",
    "revision": "3ed9afd2f21d40338c2f1ff28248a280"
  },
  {
    "url": "assets/js/7.cced52c5.js",
    "revision": "6bbfcd543b04b3d758978e28c0083206"
  },
  {
    "url": "assets/js/8.7c45385a.js",
    "revision": "c021580d1d7abbe7dfdddc3e839fa1d0"
  },
  {
    "url": "assets/js/9.90497fea.js",
    "revision": "77e7242ccec96d15b83b02d35bd7c491"
  },
  {
    "url": "assets/js/app.4dce0cf9.js",
    "revision": "4e5fd779c5a6190900600f95ddd75dc7"
  },
  {
    "url": "css/index.html",
    "revision": "15aa1244ce1799468c31a64573458ce9"
  },
  {
    "url": "css/scss.html",
    "revision": "7eb8c04aef2ea9ea0f1f4c575375e4b4"
  },
  {
    "url": "css/skill.html",
    "revision": "155068a1fdc47b8cd9338eb5e47392e6"
  },
  {
    "url": "git/command.html",
    "revision": "d62cc36b08b722d5d7f0e946f737fc7f"
  },
  {
    "url": "git/index.html",
    "revision": "2135f61b2ad3351d191b9685fcb8c70b"
  },
  {
    "url": "index.html",
    "revision": "1b8133b7ab759462e0635c0f207c45a9"
  },
  {
    "url": "issue/h5.html",
    "revision": "935d6b4b93a11703e4f9ab8cef7f710d"
  },
  {
    "url": "issue/pc.html",
    "revision": "cfda7af8f248524a1ef18dbe604c1e37"
  },
  {
    "url": "node/npm.html",
    "revision": "6f22c10b8c6019cd4eb8b94691eb0aa9"
  },
  {
    "url": "node/toolkit.html",
    "revision": "7162a8276e385ebcf97029b0f00b9847"
  },
  {
    "url": "online-tools/bookmark-scripts.html",
    "revision": "19f54c50b710c99becc7efa028a63055"
  },
  {
    "url": "online-tools/index.html",
    "revision": "bf799e30c13929ab4b943880948dca84"
  },
  {
    "url": "software/browser.html",
    "revision": "a6cb056b371297c41070a2192073617d"
  },
  {
    "url": "software/cross-platform.html",
    "revision": "75ee48b0cc31e09ba614c14f1ef88547"
  },
  {
    "url": "software/mac.html",
    "revision": "b4dd397b393f7f30b6bb2cd5320a87c9"
  },
  {
    "url": "software/vscode.html",
    "revision": "c408533fc36944e75c1dbd41ec66bb9f"
  },
  {
    "url": "software/webstorm.html",
    "revision": "e7c60cf610ab8c9700502c28cad7fdbd"
  },
  {
    "url": "software/windows.html",
    "revision": "cf0c5143c687fdd2c7247636101ffa46"
  },
  {
    "url": "software/zsh.html",
    "revision": "70e2cffe7634ca142e0fe1cb206cee25"
  },
  {
    "url": "utils/function.html",
    "revision": "0cbcba8d41664ac9b562aac953fb9a63"
  },
  {
    "url": "utils/library.html",
    "revision": "44eb32a28642e35a18dc02cd20d68054"
  },
  {
    "url": "utils/regexp.html",
    "revision": "1ef028f52661f7c4c00b5111d807d8d7"
  },
  {
    "url": "vue/index.html",
    "revision": "aaf4d0fd12dadeb6d9f967ec269b0848"
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
