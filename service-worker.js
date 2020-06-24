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
    "revision": "8158056efba9896022d48008d608733f"
  },
  {
    "url": "assets/css/0.styles.f1ecd4b0.css",
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
    "url": "assets/js/10.ca90b8d1.js",
    "revision": "c2c43ec026a32e255183e3f8cf4f258f"
  },
  {
    "url": "assets/js/11.1f6f412b.js",
    "revision": "6f5ca3c00178f973c115f97d18b47536"
  },
  {
    "url": "assets/js/12.4f697739.js",
    "revision": "be75caee51cbcd7287629cdbb6f7800a"
  },
  {
    "url": "assets/js/13.5f312216.js",
    "revision": "5d0a1c2e9f4e6d9ef47252beac5c8b2e"
  },
  {
    "url": "assets/js/14.cbf01481.js",
    "revision": "ed737521f8ca08e294ca63ad4d449ac6"
  },
  {
    "url": "assets/js/15.43072c8a.js",
    "revision": "1ab19f046d7e57cadc1e95dd5d90e649"
  },
  {
    "url": "assets/js/16.73812152.js",
    "revision": "7a52ab3065c5b9602bf45aff1d944552"
  },
  {
    "url": "assets/js/17.f3173b43.js",
    "revision": "95ccd7bce5a85af9eb5808fc99cb588a"
  },
  {
    "url": "assets/js/18.25de88bb.js",
    "revision": "a37883b26c9d9785a88e5ea9dd7964cf"
  },
  {
    "url": "assets/js/19.c4cd8d21.js",
    "revision": "45bfa5e78230247cceab6983965f2d7b"
  },
  {
    "url": "assets/js/2.007004f9.js",
    "revision": "bcc2b93c3a9b2ebf882945287dbcd801"
  },
  {
    "url": "assets/js/20.4ea0a8a0.js",
    "revision": "e5670778215c39ddf9e68741fa7d43ce"
  },
  {
    "url": "assets/js/21.7395c68b.js",
    "revision": "77b766edeb527c107f7f8a3627ee4c63"
  },
  {
    "url": "assets/js/22.2338cd7c.js",
    "revision": "de67aa47ad7ca7a6b4286e7315248892"
  },
  {
    "url": "assets/js/23.36ab1f7d.js",
    "revision": "5efbe86256497fcd3a7c864e60e9fc91"
  },
  {
    "url": "assets/js/24.94a02eb2.js",
    "revision": "742bcc4c9ed52764e7a7e346c03e1bb0"
  },
  {
    "url": "assets/js/25.f3919237.js",
    "revision": "e3f417a770db168f98c8421ea6c51601"
  },
  {
    "url": "assets/js/3.51c8b2fa.js",
    "revision": "ebf83ffef6c4b78ac802f77ffb3f305d"
  },
  {
    "url": "assets/js/4.3486c7c1.js",
    "revision": "0a935ee58fc378fd5fc6bdb21c244970"
  },
  {
    "url": "assets/js/5.9e3d97e8.js",
    "revision": "6e925e478f93e0dc3de243a8eec84de7"
  },
  {
    "url": "assets/js/6.c187c35b.js",
    "revision": "875d80a22146e45d48e739c631ba98bc"
  },
  {
    "url": "assets/js/7.faafe814.js",
    "revision": "2cbe1d4b4f9eb040cf3595cb9feb53c3"
  },
  {
    "url": "assets/js/8.df0444fa.js",
    "revision": "4438957f59f6a0d50967a2381d9b003c"
  },
  {
    "url": "assets/js/9.76e782fb.js",
    "revision": "532f84fa650160f9e43cc27e96f5651c"
  },
  {
    "url": "assets/js/app.af3f203c.js",
    "revision": "46d5f9b78ca2b4d5e540d774344e2af0"
  },
  {
    "url": "css/index.html",
    "revision": "fcd04487c5f8ae6550187ebc7bf09dfd"
  },
  {
    "url": "css/scss.html",
    "revision": "206b0df5a4568fc137b5f467a082aadc"
  },
  {
    "url": "css/skill.html",
    "revision": "ce1148493a30f299ec407bf3260dd2c8"
  },
  {
    "url": "git/command.html",
    "revision": "12e4b60f203f2b35e324efadd77a2140"
  },
  {
    "url": "git/index.html",
    "revision": "301938ce34f90a3005d7482b1324ffef"
  },
  {
    "url": "index.html",
    "revision": "12422ae6c6a04576953d48521b619b8b"
  },
  {
    "url": "issue/h5.html",
    "revision": "05d972aee9c718f48ce683e4ad8268d9"
  },
  {
    "url": "issue/pc.html",
    "revision": "550fb76438d0e094aeb174c7a4871f21"
  },
  {
    "url": "node/depend.html",
    "revision": "feaa3e510da7f75bc7f063e0cef25191"
  },
  {
    "url": "node/npm.html",
    "revision": "0ba90e171d25d133ef5aaa639594fbe1"
  },
  {
    "url": "software/browser.html",
    "revision": "872061e73e0042a159ec3f97804a583a"
  },
  {
    "url": "software/mac.html",
    "revision": "3ee52b53ad0366b3b068dcbd16fcb982"
  },
  {
    "url": "software/vscode.html",
    "revision": "3e353c430ba5d4039bbe49278de369ee"
  },
  {
    "url": "software/webstorm.html",
    "revision": "0b576cce3fd4d74d3b3d7d8edead935c"
  },
  {
    "url": "software/windows.html",
    "revision": "5f48c460d33177da154b974d94ed4417"
  },
  {
    "url": "utils/function.html",
    "revision": "cdd61ae090bcf089f9cdfb018abe3e4c"
  },
  {
    "url": "utils/regexp.html",
    "revision": "e01c842a83e9445550ead69bc50d49ab"
  },
  {
    "url": "vue/index.html",
    "revision": "ce676d6fec7672ca22e655a923cbb8a3"
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
