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
    "revision": "b0c9b6e27e9f3fd79c394062f70e3951"
  },
  {
    "url": "assets/css/0.styles.8b6df087.css",
    "revision": "7d254739aa9e3b7e5779390276977473"
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
    "url": "assets/js/10.e70814b6.js",
    "revision": "cc6b2c4900faab393a2b5b5b35982940"
  },
  {
    "url": "assets/js/11.72080b8b.js",
    "revision": "3218c1e416640532499f2e426c31b854"
  },
  {
    "url": "assets/js/12.be0d9a9f.js",
    "revision": "85431d621b381077ee3bf13c014cb4bd"
  },
  {
    "url": "assets/js/13.46ffc2d0.js",
    "revision": "9be2834333b901111c6b86774a6c33aa"
  },
  {
    "url": "assets/js/14.b2b3e65d.js",
    "revision": "5de7242efad5595f7af0bd828fda466f"
  },
  {
    "url": "assets/js/15.8bf580b7.js",
    "revision": "3b66505bfaa684635c48e865201c133e"
  },
  {
    "url": "assets/js/16.179d23e1.js",
    "revision": "27a22e2ff7df89d4379a7ea760e0f6fc"
  },
  {
    "url": "assets/js/17.42d79347.js",
    "revision": "32ea3673f0702732c7f2018419ebd4e2"
  },
  {
    "url": "assets/js/18.14ea437e.js",
    "revision": "b2dead4f944d2d62ed7434e3de38ea6e"
  },
  {
    "url": "assets/js/19.87f75f74.js",
    "revision": "59ff01c6dbdfc5c244a18e2e829f3265"
  },
  {
    "url": "assets/js/2.d4d459be.js",
    "revision": "c2759538bf8be39bff270b9842707754"
  },
  {
    "url": "assets/js/20.bf7e1275.js",
    "revision": "74addbe3ed173710f9757d5f242ead0a"
  },
  {
    "url": "assets/js/21.ea4f2f68.js",
    "revision": "5e686ba4881054405f7569dd594516b5"
  },
  {
    "url": "assets/js/22.48ba464f.js",
    "revision": "603d26748196932672c5b75c9d1804b3"
  },
  {
    "url": "assets/js/23.bdccb318.js",
    "revision": "d8bb0fc177331219c1b71e6f4f8fafd9"
  },
  {
    "url": "assets/js/24.9cb15766.js",
    "revision": "326dc5ea630d666acf7b4e3180cf5961"
  },
  {
    "url": "assets/js/25.15b23695.js",
    "revision": "51006e8191da8e7073c9acd1a58e284c"
  },
  {
    "url": "assets/js/26.7abe3f3f.js",
    "revision": "9d4bb100251a6b45cf46c4284143dfa1"
  },
  {
    "url": "assets/js/27.994ee403.js",
    "revision": "5802ea83c941f58ca4563d6321cb7a87"
  },
  {
    "url": "assets/js/28.8129c4e7.js",
    "revision": "da9a1014af0f48dd593e6007bf09fa64"
  },
  {
    "url": "assets/js/29.b6c623d3.js",
    "revision": "da8b0698cba75e9e5bb9bc120a7f98f2"
  },
  {
    "url": "assets/js/3.d3f6c347.js",
    "revision": "a93621185237ac13440ed62674c8de62"
  },
  {
    "url": "assets/js/30.21d02e62.js",
    "revision": "45f6bd7937353297e1bcbb72d094ac87"
  },
  {
    "url": "assets/js/31.8b4e09db.js",
    "revision": "cc78bd4c74c38b4c5536619a8e709a62"
  },
  {
    "url": "assets/js/32.c737f9c8.js",
    "revision": "2190f1540555c29849c1e8207edef2a2"
  },
  {
    "url": "assets/js/4.e5a67cfd.js",
    "revision": "3ad2841f6191dde333764db55da97a48"
  },
  {
    "url": "assets/js/5.c3f75469.js",
    "revision": "4f1a98c057eddb191464666bd5686e5f"
  },
  {
    "url": "assets/js/6.17c885dc.js",
    "revision": "38f69538fd26cf078874a7ef35a6395b"
  },
  {
    "url": "assets/js/7.1f7e9659.js",
    "revision": "d7a32040a27be88cc4a25075b8fc4817"
  },
  {
    "url": "assets/js/8.39576667.js",
    "revision": "6bc3cab36ab75a1656223d20e375d443"
  },
  {
    "url": "assets/js/9.0b31ea69.js",
    "revision": "3721afe1a9836741e2d3aedb3580c7ea"
  },
  {
    "url": "assets/js/app.755a5432.js",
    "revision": "4f539f3f1066e532a560af8e637d4754"
  },
  {
    "url": "css/index.html",
    "revision": "bc40b48c29d0cd3d576763e1d1c3466d"
  },
  {
    "url": "css/scss.html",
    "revision": "8900f371d141bcfc6c68ed74f9d22c3a"
  },
  {
    "url": "css/skill.html",
    "revision": "4295d331a20f902c8c41656cb3a44585"
  },
  {
    "url": "git/command.html",
    "revision": "ab5e7092dcdd38b958f633ba74e4b0ff"
  },
  {
    "url": "git/index.html",
    "revision": "17740676d519e5676d6188df3f1005dd"
  },
  {
    "url": "index.html",
    "revision": "8f6a81ca0acfe313a7733494fd07a370"
  },
  {
    "url": "issue/h5.html",
    "revision": "6c134e449cc6517671fe7a1ee7d014d4"
  },
  {
    "url": "issue/pc.html",
    "revision": "2de037b56f66b256b570a45e3399f3a2"
  },
  {
    "url": "node/npm.html",
    "revision": "abec4c5a956f509e6da721f793b08fd9"
  },
  {
    "url": "node/toolkit.html",
    "revision": "e21f6c9d3b2a236cb1686b93059c7056"
  },
  {
    "url": "online-tools/bookmark-scripts.html",
    "revision": "ec312a2964279266f28e422732f2cd22"
  },
  {
    "url": "online-tools/index.html",
    "revision": "f6e3def5fbdde21f840dad7c7891b3d3"
  },
  {
    "url": "software/browser.html",
    "revision": "7c4ae37b6a3d324c722f1cddaadece8e"
  },
  {
    "url": "software/cross-platform.html",
    "revision": "f9f2f748b2f881985db39b93dd136c9b"
  },
  {
    "url": "software/mac.html",
    "revision": "903b172ab4221bc2ce02af2ef2050f12"
  },
  {
    "url": "software/vscode.html",
    "revision": "051ec54958ebe308b702192abce2e274"
  },
  {
    "url": "software/webstorm.html",
    "revision": "6a5aebcfd300d0cd6a75f3e4eadfbdfc"
  },
  {
    "url": "software/windows.html",
    "revision": "d51d88b41fb0805574316d14680120c3"
  },
  {
    "url": "software/zsh.html",
    "revision": "e56c7a5704f6830e121e04247b0c46a2"
  },
  {
    "url": "utils/function.html",
    "revision": "59f2d235324ae33b90e085e91e6df1cd"
  },
  {
    "url": "utils/library.html",
    "revision": "0bdc1ca4f4ab54f5a666aa66e85ca74c"
  },
  {
    "url": "utils/regexp.html",
    "revision": "eaa9787ac7ca1080655bb211f0a02f5f"
  },
  {
    "url": "vue/index.html",
    "revision": "231dc6d41e2f6cd0ffd7ad413bff9e68"
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
