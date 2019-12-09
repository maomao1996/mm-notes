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
    "revision": "f09d49d29cd0028b814d92fc24508e06"
  },
  {
    "url": "assets/css/0.styles.7c9ac58b.css",
    "revision": "0a8fb13806774b7687289c0e81467170"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.5ddfaa57.js",
    "revision": "1c9a10bae82fb9cc1d6bd42020aedd82"
  },
  {
    "url": "assets/js/11.c679d9be.js",
    "revision": "cc76fef1f9ef4b75108154958586ace2"
  },
  {
    "url": "assets/js/12.487da938.js",
    "revision": "6d2f35af79c6eb0ecfafc622f7902278"
  },
  {
    "url": "assets/js/13.e67da581.js",
    "revision": "4d2ef9f4ee397ce4193d346dfbae32d0"
  },
  {
    "url": "assets/js/14.d42c88fc.js",
    "revision": "b8c5e7167ebe5d5c0a0337e64dfcfd4c"
  },
  {
    "url": "assets/js/15.d42a67b1.js",
    "revision": "c43132a62382bd044d626bbcf4375f47"
  },
  {
    "url": "assets/js/16.c97da4c3.js",
    "revision": "78645739eaaa27aa27063903f7093d47"
  },
  {
    "url": "assets/js/17.f1498e1f.js",
    "revision": "b60b6bf8b8e9bd6a766b83c4814b8e16"
  },
  {
    "url": "assets/js/2.05f7b9eb.js",
    "revision": "d641e3da02d3738c33c06573382db90d"
  },
  {
    "url": "assets/js/3.1dc900e5.js",
    "revision": "34cc6f74cf6a7ccf33f240da4d5c6152"
  },
  {
    "url": "assets/js/4.40fdd9ab.js",
    "revision": "45673508825dda9c8359e6988221ee87"
  },
  {
    "url": "assets/js/5.1fb16d2a.js",
    "revision": "da1d60b8d72a901eb1cbc8d88a46e84e"
  },
  {
    "url": "assets/js/6.de5e72eb.js",
    "revision": "959a0b9ed72de8cf3fdd95d804fb7978"
  },
  {
    "url": "assets/js/7.8d944362.js",
    "revision": "9f0b11162b0bf56a35236e8344b75c86"
  },
  {
    "url": "assets/js/8.e4b9dfe3.js",
    "revision": "fbb4e870b6e6d6c88d294ee36d95640c"
  },
  {
    "url": "assets/js/9.3332d6fd.js",
    "revision": "ad133769ee6dd482e673df203229becc"
  },
  {
    "url": "assets/js/app.8223cc09.js",
    "revision": "6f0826410e84aee9c7e354d6402267a0"
  },
  {
    "url": "css/index.html",
    "revision": "c4646e80e4fc97bd644b6bd7f2ef9d3c"
  },
  {
    "url": "css/scss.html",
    "revision": "cb1d62f22d516936163b8af96a098d20"
  },
  {
    "url": "css/skill.html",
    "revision": "472207af987a77e5ef8f86115002cac6"
  },
  {
    "url": "git/index.html",
    "revision": "ac21ef21cabecf5f67d83f674f6d5177"
  },
  {
    "url": "index.html",
    "revision": "1e4268589b10a7c3efef68e609f61837"
  },
  {
    "url": "node/depend.html",
    "revision": "ededa37b8e925bf4be1480ac411cf0a5"
  },
  {
    "url": "node/npm.html",
    "revision": "535b174409d1f246bc17e2868330baca"
  },
  {
    "url": "utils/function.html",
    "revision": "769e3a89f72414f3cdf9e56e0f3ec210"
  },
  {
    "url": "utils/regexp.html",
    "revision": "31f250a02784af22d61a6ed8ad2589b3"
  },
  {
    "url": "vue/index.html",
    "revision": "99e105028fc44d356fc78f94d923bd60"
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
