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
    "revision": "1f0c5803e0e3282f0603c3f4b4abfd8d"
  },
  {
    "url": "assets/css/0.styles.bd861a71.css",
    "revision": "2c3ea350de2a92c0977b2c6554184f4c"
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
    "url": "assets/js/10.6ff33996.js",
    "revision": "668a13e7de40f00f3cee51c4dc755a03"
  },
  {
    "url": "assets/js/11.a0c82c68.js",
    "revision": "668c91bfe6727c50e9d6aad8f751d167"
  },
  {
    "url": "assets/js/12.5ca0ee4b.js",
    "revision": "8d03a494b7a91cd96c374d2e69e148c7"
  },
  {
    "url": "assets/js/13.c74a33d3.js",
    "revision": "794acf04f0237d43e0acbda55a07d28f"
  },
  {
    "url": "assets/js/14.a514a342.js",
    "revision": "3df1e9dd7010b70fc839bfbbe41ea319"
  },
  {
    "url": "assets/js/15.0febb2a8.js",
    "revision": "8ab926090abe68747ecf7defc1a9363d"
  },
  {
    "url": "assets/js/16.0420ca69.js",
    "revision": "c05aa7398a005dd6dbe2188e6ce3b256"
  },
  {
    "url": "assets/js/17.cc650ddf.js",
    "revision": "8d3c7459d7b3530a90af7e095fa71b68"
  },
  {
    "url": "assets/js/18.94ea3f02.js",
    "revision": "81e8f8b7a13fc518f5f4010fa72e387e"
  },
  {
    "url": "assets/js/19.6b73210e.js",
    "revision": "141cd2fb7f3106f8112016387f61f163"
  },
  {
    "url": "assets/js/2.92942b7b.js",
    "revision": "0640f6fb2d3ddb8e717346cf64577e54"
  },
  {
    "url": "assets/js/20.3f1811f7.js",
    "revision": "c6ee7f74316b399365abf5c33b311f71"
  },
  {
    "url": "assets/js/21.d2186447.js",
    "revision": "fab96eae9f1cf66d43e939fdff4ca977"
  },
  {
    "url": "assets/js/22.e094d64d.js",
    "revision": "de77d234cc2448e778506c9026a723dc"
  },
  {
    "url": "assets/js/23.5251aef8.js",
    "revision": "c34114d774e15b77ede7c514c2d57139"
  },
  {
    "url": "assets/js/24.5e65999b.js",
    "revision": "c1b725cbd576d90c1e2b3c3db91db062"
  },
  {
    "url": "assets/js/25.d203ff69.js",
    "revision": "ee1f69eaa90107c74fea2a0bbc991c35"
  },
  {
    "url": "assets/js/26.4a64adcf.js",
    "revision": "2ebe8867fc1ac706d985548ee5c1fa4d"
  },
  {
    "url": "assets/js/27.d0e2393d.js",
    "revision": "983bbb5aa2b8aebe7b2e4f92b49d5ff0"
  },
  {
    "url": "assets/js/28.21f8894e.js",
    "revision": "b0c2405284434f81c7289edce14e116e"
  },
  {
    "url": "assets/js/29.d227dfcd.js",
    "revision": "be8170aada4e25b8ec633cd649430137"
  },
  {
    "url": "assets/js/3.4d1c5b91.js",
    "revision": "56d1cdb04451e5416cb9274369d82dd9"
  },
  {
    "url": "assets/js/30.2f5e03a2.js",
    "revision": "c2b87a448f2313275a984752112f02f9"
  },
  {
    "url": "assets/js/4.e2a2af66.js",
    "revision": "259e7b6fdb80fe5af828ecb42709a08a"
  },
  {
    "url": "assets/js/5.033fa329.js",
    "revision": "dedd907df6e1059aee5e43543f40ecef"
  },
  {
    "url": "assets/js/6.75868ed5.js",
    "revision": "1869cd2ddca83a03ab1ba5cc92d71039"
  },
  {
    "url": "assets/js/7.1c60e2b8.js",
    "revision": "102aaf686c4957f134a05e8eb8f161fa"
  },
  {
    "url": "assets/js/8.24d2b580.js",
    "revision": "f7ca17dd243fbbece95637dbd1409526"
  },
  {
    "url": "assets/js/9.3e366c39.js",
    "revision": "8fd8f7cda73434580f9443b13b6ee1c9"
  },
  {
    "url": "assets/js/app.c03af02e.js",
    "revision": "b707428b7f0b884a927055b4e3e77c7f"
  },
  {
    "url": "css/index.html",
    "revision": "378ba2011e01f5614f5e88a3483ed9c2"
  },
  {
    "url": "css/scss.html",
    "revision": "51be73d2974c7d8b0a9afaf2420b6eab"
  },
  {
    "url": "css/skill.html",
    "revision": "ba3cd1ae8e4fe3aaf3cd66fcef099b26"
  },
  {
    "url": "git/command.html",
    "revision": "65f379f62a85cfcb889728d9e132a5e5"
  },
  {
    "url": "git/index.html",
    "revision": "01163ac7cfe3acb981d6f359d04285e2"
  },
  {
    "url": "index.html",
    "revision": "34781d5e70be395a807fbb20dd212c60"
  },
  {
    "url": "issue/h5.html",
    "revision": "ccebcdd67deb39df66de7dda54375283"
  },
  {
    "url": "issue/pc.html",
    "revision": "ee88d154c3383ba4a286ddfee78aa393"
  },
  {
    "url": "node/npm.html",
    "revision": "395ebb0fc8e700a3f0838b4895cc3ad1"
  },
  {
    "url": "node/toolkit.html",
    "revision": "7d2e3d1ceacd7f69f2cbf7a540738373"
  },
  {
    "url": "online-tools/bookmark-scripts.html",
    "revision": "ff368f28ea1efbc2d85abbc368a6270f"
  },
  {
    "url": "software/browser.html",
    "revision": "39cbface4fdbba77a6abfb3f7b6c46fb"
  },
  {
    "url": "software/cross-platform.html",
    "revision": "e5020acfd78168cdbca8acd3f2d1bb0f"
  },
  {
    "url": "software/mac.html",
    "revision": "fd9d76f95424e1397e6e400d91e60b92"
  },
  {
    "url": "software/vscode.html",
    "revision": "c4e314d4363512ca7c49a11e15dabe52"
  },
  {
    "url": "software/webstorm.html",
    "revision": "facdafcc1ac0321338eeb3c0c807b095"
  },
  {
    "url": "software/windows.html",
    "revision": "20ce3409233560eb75b507b563e32f15"
  },
  {
    "url": "software/zsh.html",
    "revision": "2e91cc2c71f5ef44cf3d8009a2b05bc2"
  },
  {
    "url": "utils/function.html",
    "revision": "5e6e55f1b0f3402acae18d26de299529"
  },
  {
    "url": "utils/regexp.html",
    "revision": "8107657d0fd0520b51ec9066796da006"
  },
  {
    "url": "vue/index.html",
    "revision": "e0920c0a27c88eee1593ac65c1b56009"
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
