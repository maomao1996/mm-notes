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
    "revision": "ec560349fae5a9adb4390f7dc0313302"
  },
  {
    "url": "assets/css/0.styles.0a898669.css",
    "revision": "3fc68cc48aad85375e6e4dae341b37d3"
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
    "url": "assets/js/13.5e648046.js",
    "revision": "78091bfc5d3090b7a0a71333df4ecbba"
  },
  {
    "url": "assets/js/14.1c5a532c.js",
    "revision": "dd2286cb7b28fec233af2eb8a8896c20"
  },
  {
    "url": "assets/js/15.9ec7c1ce.js",
    "revision": "9e80e3ec6d3937a8bf56236e1af1191d"
  },
  {
    "url": "assets/js/16.cd8bc896.js",
    "revision": "459f0ed7d4952d63efa20305be8d6b3c"
  },
  {
    "url": "assets/js/17.54765eee.js",
    "revision": "710b3b7cc2fe724546dba2fcca44d3e7"
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
    "url": "assets/js/app.4085f17f.js",
    "revision": "af9f465fd0c2bb7c1f035963bc29004d"
  },
  {
    "url": "css/index.html",
    "revision": "03826636042769b8e31f86e5239f1957"
  },
  {
    "url": "css/scss.html",
    "revision": "488480e3abdebeaa100edf41db53a5dd"
  },
  {
    "url": "css/skill.html",
    "revision": "199630fc23cedec4ad603aa76d37ad9f"
  },
  {
    "url": "git/command.html",
    "revision": "374e4353f1b83d4b591256b226ad98dc"
  },
  {
    "url": "git/index.html",
    "revision": "68a7f59aa99a4c2c3c57b34d3b558442"
  },
  {
    "url": "index.html",
    "revision": "5017bcedb3732e2f0d9952e0fb190f55"
  },
  {
    "url": "issue/h5.html",
    "revision": "d1ffd0aa02b3498daeee764839eac488"
  },
  {
    "url": "issue/pc.html",
    "revision": "aa981b4691e1bfb0b08b21a2a9b05e6c"
  },
  {
    "url": "node/npm.html",
    "revision": "3a683c7c4db0643f9eeb0b5b150f7578"
  },
  {
    "url": "node/toolkit.html",
    "revision": "f66a841156bb8c885eb72e599e8ffab9"
  },
  {
    "url": "online-tools/bookmark-scripts.html",
    "revision": "156834f8d321c86003f58b012c25c09c"
  },
  {
    "url": "online-tools/index.html",
    "revision": "fa55fdd44f6bee93087639b118884a9d"
  },
  {
    "url": "software/browser.html",
    "revision": "d38d0dccbd2648406c5e8e80277ac0a3"
  },
  {
    "url": "software/cross-platform.html",
    "revision": "f4075272b4300372d777f6c796f0be60"
  },
  {
    "url": "software/mac.html",
    "revision": "79860c7b0fbb83d708efc3a430489dd3"
  },
  {
    "url": "software/vscode.html",
    "revision": "cdffc91f623dfffdba32c740e1859b27"
  },
  {
    "url": "software/webstorm.html",
    "revision": "5d6698f4fc3c9bb3ac8e25306a309359"
  },
  {
    "url": "software/windows.html",
    "revision": "190d9956f591d95b61c9c2a1933d1ff5"
  },
  {
    "url": "software/zsh.html",
    "revision": "04957fa6a2cefb88197fb0b63ac172fe"
  },
  {
    "url": "utils/function.html",
    "revision": "68b031f0ccf885688ebb46fe29d9c832"
  },
  {
    "url": "utils/library.html",
    "revision": "b05d388bd64134646deb9c45b9888300"
  },
  {
    "url": "utils/regexp.html",
    "revision": "5f016ba350415720cee243d33a32f95d"
  },
  {
    "url": "vue/index.html",
    "revision": "9fdce1ed6d39b95c89c76c2a3e82223c"
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
