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
    "revision": "638a2e5834e73bc8f2796922a297d2e8"
  },
  {
    "url": "assets/css/0.styles.eaaebaf1.css",
    "revision": "0ef924d7fbe505ba3040737f0a7635f4"
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
    "url": "assets/js/10.50b1dd36.js",
    "revision": "1a882f61040be9b098eb67bfecfb7318"
  },
  {
    "url": "assets/js/11.1a7c5400.js",
    "revision": "c62380275cebe9befed2ceed76d8d53e"
  },
  {
    "url": "assets/js/12.933bda25.js",
    "revision": "febbde934fbfbf946845b58fa7b1d9cd"
  },
  {
    "url": "assets/js/13.b71085ca.js",
    "revision": "a070670fada88fbd17e2bd906d9d513e"
  },
  {
    "url": "assets/js/14.a2ebfab4.js",
    "revision": "ec29aac8881840bd0640ec6aa794c147"
  },
  {
    "url": "assets/js/15.d0eef558.js",
    "revision": "79f0b31cd717e15510a68bff7e5cd764"
  },
  {
    "url": "assets/js/16.471146c7.js",
    "revision": "ac344eb7c555457da9334ece92d6a1c6"
  },
  {
    "url": "assets/js/17.7f90b9bb.js",
    "revision": "52c55478346d30d7af6f794be49f3d5c"
  },
  {
    "url": "assets/js/18.4228a5ac.js",
    "revision": "ba61fa838903257955203dd7e282d98b"
  },
  {
    "url": "assets/js/19.aca0707c.js",
    "revision": "f1fed65dd4d8a148b7c7f144bd56a2b7"
  },
  {
    "url": "assets/js/2.1d66d02f.js",
    "revision": "fba9a8b4eadeaa27ad7022599bf07fbb"
  },
  {
    "url": "assets/js/20.3f80e32b.js",
    "revision": "c75732dfd10d98ee76b2ca978636dab8"
  },
  {
    "url": "assets/js/21.53b791c5.js",
    "revision": "4e33e09758ebcb3d1d0162df06cdd64c"
  },
  {
    "url": "assets/js/22.00a8f8d7.js",
    "revision": "e112cf1a6bfde14724baa5e946052732"
  },
  {
    "url": "assets/js/23.959acf4c.js",
    "revision": "4e451d5c3df5beab015b7e627d72bec9"
  },
  {
    "url": "assets/js/24.78f7e992.js",
    "revision": "a221c83709d692d1bb681f543dda768a"
  },
  {
    "url": "assets/js/25.04456514.js",
    "revision": "1e30a551e77a9463693903a437676408"
  },
  {
    "url": "assets/js/26.1d6d0178.js",
    "revision": "71cd1e83bc3082713a2d96c481a5f47e"
  },
  {
    "url": "assets/js/3.e1ff2eb7.js",
    "revision": "6e3dad5e1c7d705cb07023c52173bce1"
  },
  {
    "url": "assets/js/4.2dae253f.js",
    "revision": "4a6c141b012082f63d9705715e120c92"
  },
  {
    "url": "assets/js/5.96dd6dc7.js",
    "revision": "11846c07e4a9d3af9a9dfd44c11dc4cd"
  },
  {
    "url": "assets/js/6.88845739.js",
    "revision": "cc2ddebe805a06b48dee85f1e5530db8"
  },
  {
    "url": "assets/js/7.ce73c736.js",
    "revision": "8690027961796efada5b4a4ec3ccf9ba"
  },
  {
    "url": "assets/js/8.84a1ff70.js",
    "revision": "4abbdc226c4290f393ade857ea4ce185"
  },
  {
    "url": "assets/js/9.821aa6b5.js",
    "revision": "c9b072102ac4cd4e97172f506e38e0fc"
  },
  {
    "url": "assets/js/app.b0bd6754.js",
    "revision": "fec82caebf635d3b968bd034e0553a0a"
  },
  {
    "url": "css/index.html",
    "revision": "0768681be431aaba46c9f308f47730e7"
  },
  {
    "url": "css/scss.html",
    "revision": "d4356218964a24ef30c64efdfb6afd8f"
  },
  {
    "url": "css/skill.html",
    "revision": "736251705e183d3a4c3d76ec4d7bdb30"
  },
  {
    "url": "git/command.html",
    "revision": "b793ff72d9694eb8f324a076254824c9"
  },
  {
    "url": "git/index.html",
    "revision": "a0188d70b882e150f9a1be033bd40c01"
  },
  {
    "url": "index.html",
    "revision": "4c7467da71dadc8223d4f4fe1e8ae978"
  },
  {
    "url": "issue/h5.html",
    "revision": "be3edd9be5c2e576449b2fa9495f92f3"
  },
  {
    "url": "issue/pc.html",
    "revision": "cff2a8a16fa82f9f5c99871f475ad252"
  },
  {
    "url": "node/depend.html",
    "revision": "a52cb49ce9dc7ec9092f145549782253"
  },
  {
    "url": "node/npm.html",
    "revision": "e9c00639b0db629a5d6154e6d4b6a516"
  },
  {
    "url": "software/browser.html",
    "revision": "2037d3c410cdb20bc7b3c485b59cb2f0"
  },
  {
    "url": "software/mac.html",
    "revision": "dd14deaa55c99f4f5ae5a041e00bf8dc"
  },
  {
    "url": "software/vscode.html",
    "revision": "1569fbe9019ddeac467ea93bd98b9aa1"
  },
  {
    "url": "software/webstorm.html",
    "revision": "283a87df06a04df9d7269d922e8f8cf3"
  },
  {
    "url": "software/windows.html",
    "revision": "c3d92dd4614429323f525b4423e9d7f6"
  },
  {
    "url": "utils/function.html",
    "revision": "010c44be963427d4528a4fa4210e3619"
  },
  {
    "url": "utils/regexp.html",
    "revision": "5835884440472948426a51fd04131722"
  },
  {
    "url": "vue/index.html",
    "revision": "8fd9e2d0e8b946dd75e3538bbcd41e4b"
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
