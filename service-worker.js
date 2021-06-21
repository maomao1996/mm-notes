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
    "revision": "e81f1155a9d0342763cd286669db209a"
  },
  {
    "url": "assets/css/0.styles.f0ae8c5e.css",
    "revision": "96f60976a4dfe5d7a7b8ed39c443a75f"
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
    "url": "assets/js/10.9b043d01.js",
    "revision": "e9fbfeaac0c65f4a5aa879b2fb21c4be"
  },
  {
    "url": "assets/js/11.76cda4ff.js",
    "revision": "b55a845311ad12519de2006268adbbc2"
  },
  {
    "url": "assets/js/12.7b0aacd4.js",
    "revision": "e67c6cae0a50c8864efe816bf8a442f1"
  },
  {
    "url": "assets/js/13.bba53369.js",
    "revision": "55ba19989378132a397f003473b1079e"
  },
  {
    "url": "assets/js/14.37204b2c.js",
    "revision": "d2af32b7241c5156f03a721ca2ef2a01"
  },
  {
    "url": "assets/js/15.2dc8e8da.js",
    "revision": "dd15bcb5583390f9a9281b75a249fff8"
  },
  {
    "url": "assets/js/16.17aa52ce.js",
    "revision": "65dc2ea8e5e1536e84adcddd99b11a1d"
  },
  {
    "url": "assets/js/17.a1e239df.js",
    "revision": "1149c12ef8f16cd4fa30c96cec665eb0"
  },
  {
    "url": "assets/js/18.52bee490.js",
    "revision": "7d4bbd0ceba13febb9060391db493a1d"
  },
  {
    "url": "assets/js/19.f1ac7b3b.js",
    "revision": "b44257b1ae1a1fa4750146d68238233f"
  },
  {
    "url": "assets/js/2.cc6a9b05.js",
    "revision": "da120da39e697333dacc09371f005e49"
  },
  {
    "url": "assets/js/20.ba29d99e.js",
    "revision": "1854b14be864a8d444dc328dffc1c0df"
  },
  {
    "url": "assets/js/21.7266c257.js",
    "revision": "e8fad67d8cd761bd05f9953d08283d0e"
  },
  {
    "url": "assets/js/22.bafee729.js",
    "revision": "9ad4189b522be5986656c3fd4d624a94"
  },
  {
    "url": "assets/js/23.0db596dd.js",
    "revision": "e8e63046a007e3115806b62c8773769f"
  },
  {
    "url": "assets/js/24.aef1937e.js",
    "revision": "90db0cd79559e9b3206bafdd362a6a99"
  },
  {
    "url": "assets/js/25.e8341dd7.js",
    "revision": "be72a582b0b61140e1058437aada4cdb"
  },
  {
    "url": "assets/js/26.87942733.js",
    "revision": "b8b8ce3eab9f205ee2b0a3eeab25d047"
  },
  {
    "url": "assets/js/27.34b67f93.js",
    "revision": "704cb99543b9041b9648b3f36b82ad0e"
  },
  {
    "url": "assets/js/28.17ce9dcd.js",
    "revision": "228b914f66ebf14518598514ddc56faf"
  },
  {
    "url": "assets/js/29.1e0dbcf7.js",
    "revision": "8674bfcfe9d0de653f0b1f0745063324"
  },
  {
    "url": "assets/js/3.819b7bf1.js",
    "revision": "b77f6122ec6f84ceb6f0c2c950def553"
  },
  {
    "url": "assets/js/30.e559123e.js",
    "revision": "92843eb9731812c8310fb78db85fad3f"
  },
  {
    "url": "assets/js/31.2f82700a.js",
    "revision": "062ea2eed9d7602c29a1da5269676042"
  },
  {
    "url": "assets/js/32.2523a8d2.js",
    "revision": "534c806929377f9aa405b70d70daeed9"
  },
  {
    "url": "assets/js/4.42b9297a.js",
    "revision": "658469963b2d9a069bbeb456c955ac04"
  },
  {
    "url": "assets/js/5.a6536030.js",
    "revision": "3004fb617adc3d848c6785e86053d204"
  },
  {
    "url": "assets/js/6.37d619c9.js",
    "revision": "06701dc420e3102306c404e2ed74fc7d"
  },
  {
    "url": "assets/js/7.6db37436.js",
    "revision": "bed9296b888b67e0e13d329a38d53e78"
  },
  {
    "url": "assets/js/8.6410305c.js",
    "revision": "cefe509f09924f5cc3dfbbe0c434e55e"
  },
  {
    "url": "assets/js/9.da83ba26.js",
    "revision": "e35929be25568a2e549ef9cc3f6a5ed9"
  },
  {
    "url": "assets/js/app.d23c40a4.js",
    "revision": "290eb9b6cefbc20c9929ae4263f64e05"
  },
  {
    "url": "css/index.html",
    "revision": "51569c52c699bf5dfe8c3f5f5089d17c"
  },
  {
    "url": "css/scss.html",
    "revision": "ecd78d758cf96da4ab9fe5895d6d739d"
  },
  {
    "url": "css/skill.html",
    "revision": "f241ad86e942de5a15a48a43259e212a"
  },
  {
    "url": "git/command.html",
    "revision": "13c217e24a7f7d0d8a08636d11b0b813"
  },
  {
    "url": "git/index.html",
    "revision": "cae871e32f87784844bebad31028fd81"
  },
  {
    "url": "index.html",
    "revision": "ba6b7207e319331d2e0f9f0389229360"
  },
  {
    "url": "issue/h5.html",
    "revision": "49b5023402d13c324a5db989538278ad"
  },
  {
    "url": "issue/pc.html",
    "revision": "029804bbad0cfa7c4875bc68e48d1d9e"
  },
  {
    "url": "node/npm.html",
    "revision": "51a82ff5a9e949514a60fb9d9d0ba465"
  },
  {
    "url": "node/toolkit.html",
    "revision": "fb60e1ae89fa6c39f2c441ca9668c9e8"
  },
  {
    "url": "online-tools/bookmark-scripts.html",
    "revision": "bcc81523d83425a6ff07ca5877d19da6"
  },
  {
    "url": "online-tools/index.html",
    "revision": "877e29cd6b2ab894d32ea2986b65f1e3"
  },
  {
    "url": "software/browser.html",
    "revision": "66d573ebac938ed79a87d46884759308"
  },
  {
    "url": "software/cross-platform.html",
    "revision": "8062b8fe5e980879e992400bf8554807"
  },
  {
    "url": "software/mac.html",
    "revision": "c554e7605b8abc12bf6f36c910c108c3"
  },
  {
    "url": "software/vscode.html",
    "revision": "3eb78babed71ff33cc132d93e2a48eb9"
  },
  {
    "url": "software/webstorm.html",
    "revision": "30df55e7bcaa08945c10dcf8e791e954"
  },
  {
    "url": "software/windows.html",
    "revision": "52fc275949eabd0319b75f7566703a79"
  },
  {
    "url": "software/zsh.html",
    "revision": "b795d474a4eade0167ac46d777735c21"
  },
  {
    "url": "utils/function.html",
    "revision": "0b386f1bdfc862092502c610dee6351b"
  },
  {
    "url": "utils/library.html",
    "revision": "5f94211f57e634782e8c1ae722405f99"
  },
  {
    "url": "utils/regexp.html",
    "revision": "205c1065565d2e4b875886626ef03817"
  },
  {
    "url": "vue/index.html",
    "revision": "532852cb60a52f1df8fa669ec65e1698"
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
