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
    "revision": "a233d41ce503ccee9b2cff879bd4ffc0"
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
    "url": "assets/js/11.125672eb.js",
    "revision": "27ddb7a1765b5ecbf96c0b795d255b24"
  },
  {
    "url": "assets/js/12.d6764f21.js",
    "revision": "29890f1863b9b68cd39913f63144e4ff"
  },
  {
    "url": "assets/js/13.659a730e.js",
    "revision": "d64dc096953ca6b40cfb6e9c3a4cf42d"
  },
  {
    "url": "assets/js/14.1e62530b.js",
    "revision": "4c7e4b16870664300deb2a613c83850b"
  },
  {
    "url": "assets/js/15.9829b2a3.js",
    "revision": "9c5defb392f14a5acd18d3010f315564"
  },
  {
    "url": "assets/js/16.8d5d987b.js",
    "revision": "6e97bce437ca6a1e79f5a41506ee652a"
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
    "url": "assets/js/7.e22f5ac8.js",
    "revision": "6fa59a1c5467ebfd720bc81947a99134"
  },
  {
    "url": "assets/js/8.e4b9dfe3.js",
    "revision": "fbb4e870b6e6d6c88d294ee36d95640c"
  },
  {
    "url": "assets/js/9.11a67b21.js",
    "revision": "eb1915d085845bf4d0ee47f3984aa2bc"
  },
  {
    "url": "assets/js/app.78241884.js",
    "revision": "6a307604f75c4e43098c5e857e72a419"
  },
  {
    "url": "css/index.html",
    "revision": "1ac7c8ca728d0ef38f3f2db0f0c77760"
  },
  {
    "url": "css/scss.html",
    "revision": "b5e7357c9e215c9763295a746e374dee"
  },
  {
    "url": "css/skill.html",
    "revision": "2cf7500e9c7990b37db30c74aec743e3"
  },
  {
    "url": "git/index.html",
    "revision": "e2edfe67190f173c1cfda50c8fd450a2"
  },
  {
    "url": "index.html",
    "revision": "03b7a39a6cdf4392c051509547ceeb0a"
  },
  {
    "url": "node/depend.html",
    "revision": "ea75fb2e8328c68de7f077d1708c1a69"
  },
  {
    "url": "node/npm.html",
    "revision": "94498914e6c7c7857e4ab8f7fd1944dc"
  },
  {
    "url": "utils/function.html",
    "revision": "b8fb25fe8fba94f9986598696cc3e25d"
  },
  {
    "url": "utils/regexp.html",
    "revision": "e1bbc8e6f722e17ec66fc4745024a363"
  },
  {
    "url": "vue/index.html",
    "revision": "4c27312d5d66a1a7a9adffd7099cd303"
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
