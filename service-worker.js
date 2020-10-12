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
    "revision": "afe32b98c325a211302995edf2745a1f"
  },
  {
    "url": "assets/css/0.styles.43227326.css",
    "revision": "2a90e6b936dbc3bd0fa46a6a0528fe55"
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
    "url": "assets/js/10.ff3a5b27.js",
    "revision": "668a13e7de40f00f3cee51c4dc755a03"
  },
  {
    "url": "assets/js/11.939615c4.js",
    "revision": "668c91bfe6727c50e9d6aad8f751d167"
  },
  {
    "url": "assets/js/12.03ad3031.js",
    "revision": "de6c3ec6f078f7615a5bfff369c48c12"
  },
  {
    "url": "assets/js/13.27cf5cb4.js",
    "revision": "84d81160a70d2eb22c2e4c796fae4e2e"
  },
  {
    "url": "assets/js/14.4f33494e.js",
    "revision": "9102ae2edfcffdc9c6b28c93b7e77ada"
  },
  {
    "url": "assets/js/15.9798b2f7.js",
    "revision": "8112bd0c109c34134f9f4cba6b1a58f5"
  },
  {
    "url": "assets/js/16.f00bbc75.js",
    "revision": "37dcd3677f987a6c015d60025fb19810"
  },
  {
    "url": "assets/js/17.df668bbe.js",
    "revision": "8d3c7459d7b3530a90af7e095fa71b68"
  },
  {
    "url": "assets/js/18.58b9b81f.js",
    "revision": "81e8f8b7a13fc518f5f4010fa72e387e"
  },
  {
    "url": "assets/js/19.02727c2c.js",
    "revision": "141cd2fb7f3106f8112016387f61f163"
  },
  {
    "url": "assets/js/2.ed6b9bf9.js",
    "revision": "0640f6fb2d3ddb8e717346cf64577e54"
  },
  {
    "url": "assets/js/20.ada8d96a.js",
    "revision": "c6ee7f74316b399365abf5c33b311f71"
  },
  {
    "url": "assets/js/21.baafd7f7.js",
    "revision": "fab96eae9f1cf66d43e939fdff4ca977"
  },
  {
    "url": "assets/js/22.003f9b7f.js",
    "revision": "de77d234cc2448e778506c9026a723dc"
  },
  {
    "url": "assets/js/23.7aa2883e.js",
    "revision": "c34114d774e15b77ede7c514c2d57139"
  },
  {
    "url": "assets/js/24.ec293ef5.js",
    "revision": "c1b725cbd576d90c1e2b3c3db91db062"
  },
  {
    "url": "assets/js/25.38bf699b.js",
    "revision": "1dc094ca470a9ca501ae4cccccd28b29"
  },
  {
    "url": "assets/js/26.fe71acbd.js",
    "revision": "f263a0e1f87833f3574fb81ad5b64742"
  },
  {
    "url": "assets/js/27.ebbda331.js",
    "revision": "983bbb5aa2b8aebe7b2e4f92b49d5ff0"
  },
  {
    "url": "assets/js/28.5990580b.js",
    "revision": "b0c2405284434f81c7289edce14e116e"
  },
  {
    "url": "assets/js/29.de605af8.js",
    "revision": "be8170aada4e25b8ec633cd649430137"
  },
  {
    "url": "assets/js/3.8ace11c9.js",
    "revision": "56d1cdb04451e5416cb9274369d82dd9"
  },
  {
    "url": "assets/js/30.2f5e03a2.js",
    "revision": "c2b87a448f2313275a984752112f02f9"
  },
  {
    "url": "assets/js/4.fec73527.js",
    "revision": "224abc2398b3ffa1810c463f2a596b32"
  },
  {
    "url": "assets/js/5.033fa329.js",
    "revision": "dedd907df6e1059aee5e43543f40ecef"
  },
  {
    "url": "assets/js/6.9a9cde2f.js",
    "revision": "1869cd2ddca83a03ab1ba5cc92d71039"
  },
  {
    "url": "assets/js/7.b34382b4.js",
    "revision": "64f8f3b5b2402ac4d9d2b1a533e768f9"
  },
  {
    "url": "assets/js/8.d52e0cd8.js",
    "revision": "97eb7a4f4328118aa73c04da18d4f4c8"
  },
  {
    "url": "assets/js/9.3f61a6ca.js",
    "revision": "8fd8f7cda73434580f9443b13b6ee1c9"
  },
  {
    "url": "assets/js/app.7cb9ca10.js",
    "revision": "579c80214d877dd0510d279ee6d7418e"
  },
  {
    "url": "css/index.html",
    "revision": "66267f16ed79c46ad6f5d3efcde01654"
  },
  {
    "url": "css/scss.html",
    "revision": "619fd86bf58928f5b51b3d0e3e5f4553"
  },
  {
    "url": "css/skill.html",
    "revision": "4d149ac41b361619d80acce617d97d80"
  },
  {
    "url": "git/command.html",
    "revision": "db733040baf0fb53571be62de7327c90"
  },
  {
    "url": "git/index.html",
    "revision": "058ad15385f8a5bf277ea655f1b50cd2"
  },
  {
    "url": "index.html",
    "revision": "a728414c0bae574cb0325893487cc5f5"
  },
  {
    "url": "issue/h5.html",
    "revision": "5a9370060b00f64ad307c38dd5cf2188"
  },
  {
    "url": "issue/pc.html",
    "revision": "4fd14accd1f86361181c5fa69d704461"
  },
  {
    "url": "node/npm.html",
    "revision": "35453cd7ac9a455f873b4ed404f1740c"
  },
  {
    "url": "node/toolkit.html",
    "revision": "6a95f12ceb39fb059ac6d5dafada5647"
  },
  {
    "url": "online-tools/bookmark-scripts.html",
    "revision": "0b3b7534f246327e2fad32cea0360086"
  },
  {
    "url": "software/browser.html",
    "revision": "6ff01ecb8419372d88cbcedfec7fa63a"
  },
  {
    "url": "software/cross-platform.html",
    "revision": "bcdb4d4b8d0572526e9f42de0de6cfd7"
  },
  {
    "url": "software/mac.html",
    "revision": "4c7a55adbb49147ee34ab930b3739ecb"
  },
  {
    "url": "software/vscode.html",
    "revision": "082d1dfbe1ff0ebdc9beb4bdefb88ff3"
  },
  {
    "url": "software/webstorm.html",
    "revision": "40c3ed07bbac6b6765b2645a6fb724b1"
  },
  {
    "url": "software/windows.html",
    "revision": "073c06663b918b085ea1503c547aa5db"
  },
  {
    "url": "software/zsh.html",
    "revision": "cab7d9d53fb360c52b50c7a89dd019c9"
  },
  {
    "url": "utils/function.html",
    "revision": "d650d9bffc9b1dc90954742dd3d32358"
  },
  {
    "url": "utils/regexp.html",
    "revision": "32242e1652a48b346ef64c7d346c680f"
  },
  {
    "url": "vue/index.html",
    "revision": "6add8f7bfbbf839a7beed4002360ae02"
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
