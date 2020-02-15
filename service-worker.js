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
    "revision": "c8eadbbb920f91ca2e2d56c19df5f3dc"
  },
  {
    "url": "assets/css/0.styles.c68e6def.css",
    "revision": "c53d0ea9ecebce97a80983e960157f9f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.9695ffba.js",
    "revision": "a40b8247ff60a5d19f69326b225b7d96"
  },
  {
    "url": "assets/js/11.db20d083.js",
    "revision": "45f4d596006971bea4ccb3b4745e86d0"
  },
  {
    "url": "assets/js/12.414f285c.js",
    "revision": "4208a18ac67cd193da746db8498e6311"
  },
  {
    "url": "assets/js/13.362b9aec.js",
    "revision": "67e40ad33145b18d901accb451685299"
  },
  {
    "url": "assets/js/14.4c0e70ed.js",
    "revision": "8b4a1ccf6bed2fd6c5e98d3be31790a4"
  },
  {
    "url": "assets/js/15.d862ccaf.js",
    "revision": "e7f6ee6178ccc88b64abd73836771fb2"
  },
  {
    "url": "assets/js/16.f58fc663.js",
    "revision": "0c8f56ed8860b78ddbd0c568abe2a1c9"
  },
  {
    "url": "assets/js/17.372e12f0.js",
    "revision": "85ab6228d9333dd43056ac9c3ba9fcfe"
  },
  {
    "url": "assets/js/18.0cf1e9fb.js",
    "revision": "98c89682cb9de2c79ca2e45607a63827"
  },
  {
    "url": "assets/js/19.6ab4a1e3.js",
    "revision": "922100095b7479a3128fe21f38bcde9c"
  },
  {
    "url": "assets/js/2.efb942e3.js",
    "revision": "093f3843fb73994024df773845bed087"
  },
  {
    "url": "assets/js/20.8ca7d1cd.js",
    "revision": "f43c1a36ba1477b99f69594b2c096a03"
  },
  {
    "url": "assets/js/3.ea75f2f5.js",
    "revision": "0d2f06855cc059411d34f2fb02a87548"
  },
  {
    "url": "assets/js/4.40fdd9ab.js",
    "revision": "45673508825dda9c8359e6988221ee87"
  },
  {
    "url": "assets/js/5.fe261025.js",
    "revision": "61776cc8fe3405d23bd359f43964b8f7"
  },
  {
    "url": "assets/js/6.de5e72eb.js",
    "revision": "959a0b9ed72de8cf3fdd95d804fb7978"
  },
  {
    "url": "assets/js/7.0b6244fb.js",
    "revision": "707c3a8d8e9413817faecb8c902da70b"
  },
  {
    "url": "assets/js/8.fefb1abc.js",
    "revision": "76acaca907af03b1c5689ea9c4062784"
  },
  {
    "url": "assets/js/9.a7cbf51f.js",
    "revision": "9eda0ff56e4eaef5a2ee65269282d128"
  },
  {
    "url": "assets/js/app.5ef888fa.js",
    "revision": "94df6bb9a0545c11eea3859c0e18d3da"
  },
  {
    "url": "css/index.html",
    "revision": "920ce6cb7cca7645e2b944dd1cac1b0f"
  },
  {
    "url": "css/scss.html",
    "revision": "98361a60742988d39e1ba8087d34e75e"
  },
  {
    "url": "css/skill.html",
    "revision": "3a0ffc2eb33cbf35759209430b85bcff"
  },
  {
    "url": "git/command.html",
    "revision": "3be74c4cd5d494764b5a16ab0ef14af0"
  },
  {
    "url": "git/index.html",
    "revision": "579e06512efde188412d6b07823a2b7f"
  },
  {
    "url": "index.html",
    "revision": "ee4174e206d953b06c852b27228d9586"
  },
  {
    "url": "node/depend.html",
    "revision": "7938d102b2115ecad6abef517b144ff5"
  },
  {
    "url": "node/npm.html",
    "revision": "255ca2cd2d8b4cc913acfa6c657c879e"
  },
  {
    "url": "software/browser.html",
    "revision": "296942a8824413928efa70ab7440a9e8"
  },
  {
    "url": "software/mac.html",
    "revision": "3995662c292b713663992519560e0f52"
  },
  {
    "url": "utils/function.html",
    "revision": "1757489add11bc0d3c6f3e1cf692eb7c"
  },
  {
    "url": "utils/regexp.html",
    "revision": "a925376e83696b6d82d19801edb8589b"
  },
  {
    "url": "vue/index.html",
    "revision": "ae149732f8a777df26febefab1bd516d"
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
