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
    "revision": "21179d73a27410cce9d6d77520d60da9"
  },
  {
    "url": "assets/css/0.styles.f691032f.css",
    "revision": "25d6101dee0ee9d1e1238a3dad04c886"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.5efaf9d6.js",
    "revision": "4a4bd29cf097b50715ae15a8f2c00eb5"
  },
  {
    "url": "assets/js/11.f16dde4e.js",
    "revision": "b692ba2e4695d4e176e0bde71f8c7703"
  },
  {
    "url": "assets/js/12.5f777764.js",
    "revision": "8ec8282b3816f9ac44d4869488cf9b54"
  },
  {
    "url": "assets/js/13.ce6b7a7d.js",
    "revision": "d2f1a87a9b1d0acd7d668ed78fd18795"
  },
  {
    "url": "assets/js/14.b7483d15.js",
    "revision": "246c8017d6cdfd1e1bc4a91f575c4d0d"
  },
  {
    "url": "assets/js/15.b505eb41.js",
    "revision": "64271896f637022f55b5c3d84e73f44b"
  },
  {
    "url": "assets/js/16.a91c5782.js",
    "revision": "5886c319b76f75f4575485124c615fad"
  },
  {
    "url": "assets/js/17.2039ae21.js",
    "revision": "0acd5190911846090f7c26db1df5d841"
  },
  {
    "url": "assets/js/18.8ab5a148.js",
    "revision": "5bcfeda813b06938021c8e9cc1bcf6b2"
  },
  {
    "url": "assets/js/19.2b153970.js",
    "revision": "49e550124b1427c2819870e932c9f59a"
  },
  {
    "url": "assets/js/2.efb942e3.js",
    "revision": "093f3843fb73994024df773845bed087"
  },
  {
    "url": "assets/js/20.09c28a4c.js",
    "revision": "7bf70154033b8c4190743b6ee1d3fe00"
  },
  {
    "url": "assets/js/21.7c9c0411.js",
    "revision": "15b1b2d445f13e10b0912bb6583f0269"
  },
  {
    "url": "assets/js/22.ff86084a.js",
    "revision": "043f2730849b6632664c8985385f707a"
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
    "url": "assets/js/5.f5480d4b.js",
    "revision": "992c2ad257a87a752c61880b2b735d85"
  },
  {
    "url": "assets/js/6.de5e72eb.js",
    "revision": "959a0b9ed72de8cf3fdd95d804fb7978"
  },
  {
    "url": "assets/js/7.6df0cb5a.js",
    "revision": "2c4907acc5d2aa87da7166292b5b0cbe"
  },
  {
    "url": "assets/js/8.fefb1abc.js",
    "revision": "76acaca907af03b1c5689ea9c4062784"
  },
  {
    "url": "assets/js/9.34b45f1e.js",
    "revision": "c28ded72e152203ced07a72467708a61"
  },
  {
    "url": "assets/js/app.af8e9fef.js",
    "revision": "6f2f15e02b860fdba004d933691285b4"
  },
  {
    "url": "css/index.html",
    "revision": "2eee5c4a603a48eb97fe5cb4a6a0dbab"
  },
  {
    "url": "css/scss.html",
    "revision": "b44d3eab63b6dffdb6d6682b7a4f5f3a"
  },
  {
    "url": "css/skill.html",
    "revision": "c65e0a5d83bbf34d21567c1403ef82f0"
  },
  {
    "url": "git/command.html",
    "revision": "e6c8c6f5f6e5a92e49c327ae0c37514c"
  },
  {
    "url": "git/index.html",
    "revision": "f30666d84ba6a64c0c74ece61acb4a71"
  },
  {
    "url": "index.html",
    "revision": "e38dd7588cec766e880392a31ef420a3"
  },
  {
    "url": "node/depend.html",
    "revision": "809a841c79a099c5f0ca8a0c0844595b"
  },
  {
    "url": "node/npm.html",
    "revision": "2e637781ac6fb5c23beeab1e34225caf"
  },
  {
    "url": "software/browser.html",
    "revision": "1a5429f6899924ae50dbe7834403d917"
  },
  {
    "url": "software/mac.html",
    "revision": "8ef5667569ed89d7632b19d94474e058"
  },
  {
    "url": "software/vscode.html",
    "revision": "3ebd2d5e449f7568737b5cb7302d4a4e"
  },
  {
    "url": "software/windows.html",
    "revision": "cf995651de94a6b0b44388314e2373f7"
  },
  {
    "url": "utils/function.html",
    "revision": "3d867db2299b7fc7622a9dc1dfd56748"
  },
  {
    "url": "utils/regexp.html",
    "revision": "c03a3f1ae7e97a4b7adace29e53f0963"
  },
  {
    "url": "vue/index.html",
    "revision": "76c08c7512ae76bf6d926bad91d13599"
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
