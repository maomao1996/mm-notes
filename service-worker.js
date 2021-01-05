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
    "revision": "b901c15913b1b8bd2bcd70f9fe8df039"
  },
  {
    "url": "assets/css/0.styles.8ca156ec.css",
    "revision": "756e019f3f2ab89fba1bf4327404b557"
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
    "url": "assets/js/10.88de23cd.js",
    "revision": "651b283355a8b87824fb4c9369a93c3f"
  },
  {
    "url": "assets/js/11.c998b5d0.js",
    "revision": "e127c29552d714a8774a052fada69b3b"
  },
  {
    "url": "assets/js/12.665b2476.js",
    "revision": "2866ac0087c45cb30c7c55003274f51a"
  },
  {
    "url": "assets/js/13.d4cdf51e.js",
    "revision": "d94f2cc3a0689242f9c502395e419a0b"
  },
  {
    "url": "assets/js/14.a4189c6e.js",
    "revision": "ff39e93eb1518ee9849cd69ceec062df"
  },
  {
    "url": "assets/js/15.9ec7c1ce.js",
    "revision": "9e80e3ec6d3937a8bf56236e1af1191d"
  },
  {
    "url": "assets/js/16.cd8bc896.js",
    "revision": "459f0ed7d4952d63efa20305be8d6b3c"
  },
  {
    "url": "assets/js/17.54765eee.js",
    "revision": "710b3b7cc2fe724546dba2fcca44d3e7"
  },
  {
    "url": "assets/js/18.ff81caf8.js",
    "revision": "86f722ec0139b72909ed23e02d164976"
  },
  {
    "url": "assets/js/19.34c5325f.js",
    "revision": "89628dbd1cf3e99675670aa46154efee"
  },
  {
    "url": "assets/js/2.93548260.js",
    "revision": "4210d3b364279bbd8555df074064ac30"
  },
  {
    "url": "assets/js/20.7f301ac9.js",
    "revision": "e87f68b4606ebdd80d92b9c2879d3d99"
  },
  {
    "url": "assets/js/21.2906d5a0.js",
    "revision": "9508577c27e37d3762e9e409d44ade1d"
  },
  {
    "url": "assets/js/22.6079492a.js",
    "revision": "e7f9336f1da0602a98693f7e1d8b218c"
  },
  {
    "url": "assets/js/23.a6ee4eee.js",
    "revision": "8406d96a3575fdd4e34ce090d55feeab"
  },
  {
    "url": "assets/js/24.5344e434.js",
    "revision": "3c139886285efde7b08077ce8b7ae56d"
  },
  {
    "url": "assets/js/25.60da1f66.js",
    "revision": "5f78758232f669abe9dedbb0305674ff"
  },
  {
    "url": "assets/js/26.e316ce89.js",
    "revision": "17ed922b0416cf8948c6d332e09b412d"
  },
  {
    "url": "assets/js/27.a36111d1.js",
    "revision": "a82bf7ef2654f3578315cd39420ce929"
  },
  {
    "url": "assets/js/28.1105932b.js",
    "revision": "907121226a8f8f13f342db1789dbd647"
  },
  {
    "url": "assets/js/29.39379e8b.js",
    "revision": "8f23c39f23d9ee643de756453e1a633d"
  },
  {
    "url": "assets/js/3.f05f2f69.js",
    "revision": "6d8e7b92984daa7fefe26fb144ab6d4f"
  },
  {
    "url": "assets/js/30.8d304e68.js",
    "revision": "72e35ea2ead10027f197726187e027ab"
  },
  {
    "url": "assets/js/31.de4c009c.js",
    "revision": "269665fac9425b1f27c9a1e3335f7365"
  },
  {
    "url": "assets/js/32.ad5d6188.js",
    "revision": "e4f334042796bc862c2fd811fc8d498d"
  },
  {
    "url": "assets/js/4.710ea90d.js",
    "revision": "a2af0a553fe76a0db57a033da262b1da"
  },
  {
    "url": "assets/js/5.491b5c16.js",
    "revision": "8604e12889f202bc861d1e881585020a"
  },
  {
    "url": "assets/js/6.fb8a76e4.js",
    "revision": "686e666f26b942a0a2334983d66d48dc"
  },
  {
    "url": "assets/js/7.39c1ff06.js",
    "revision": "7f1709795959efd21baac797c1cdf69a"
  },
  {
    "url": "assets/js/8.6f5df962.js",
    "revision": "e9add2860f57a0599399f3b296ca388e"
  },
  {
    "url": "assets/js/9.827f182a.js",
    "revision": "6d08e9823ea4e880e4dfc62503b130c8"
  },
  {
    "url": "assets/js/app.1c2c7326.js",
    "revision": "9fa0fc3c3e14e1b0bfa232573b675acb"
  },
  {
    "url": "css/index.html",
    "revision": "4417f350bba6fb4bb15d6bdcfe297afc"
  },
  {
    "url": "css/scss.html",
    "revision": "f0581b11b1e9601e21f4c9c666a63730"
  },
  {
    "url": "css/skill.html",
    "revision": "de1dbfce0378788cd6d8d2f4a45ee856"
  },
  {
    "url": "git/command.html",
    "revision": "c61c90764ed52632d96e10e7f07fbdd4"
  },
  {
    "url": "git/index.html",
    "revision": "7fecb1b0667730e4876e4851ecf07484"
  },
  {
    "url": "index.html",
    "revision": "55d63c33c7a062572ad01b8964a5004c"
  },
  {
    "url": "issue/h5.html",
    "revision": "b71417136fe94828312c397a7196c0f0"
  },
  {
    "url": "issue/pc.html",
    "revision": "41ff06c639bbfde09b6aee2343465ff0"
  },
  {
    "url": "node/npm.html",
    "revision": "3d397779bda3932c209cff411cbd8e7b"
  },
  {
    "url": "node/toolkit.html",
    "revision": "c829ee357ddaf44802aa5734ed8dc346"
  },
  {
    "url": "online-tools/bookmark-scripts.html",
    "revision": "b01aabb013ccf599bf269f375c602056"
  },
  {
    "url": "online-tools/index.html",
    "revision": "0eb2374d33a8717abfe58c9eba4ef2b8"
  },
  {
    "url": "software/browser.html",
    "revision": "fa4e72845ae665a31094886b80336ba9"
  },
  {
    "url": "software/cross-platform.html",
    "revision": "fb086a3ff21decba57ff8bce187389ab"
  },
  {
    "url": "software/mac.html",
    "revision": "0282e207f47cda7b1c178531cc77e6a7"
  },
  {
    "url": "software/vscode.html",
    "revision": "4df1bf2b7b5da1f255ac6db72661669b"
  },
  {
    "url": "software/webstorm.html",
    "revision": "1e2fc8b98a044966adeb39e32e583200"
  },
  {
    "url": "software/windows.html",
    "revision": "d5a203a85e7e3b1ce6890b360134e119"
  },
  {
    "url": "software/zsh.html",
    "revision": "f70adac8d7d92fd328273faa98a36a6e"
  },
  {
    "url": "utils/function.html",
    "revision": "0a783df1a7d9a7f2cb2ac4a28afb6dd5"
  },
  {
    "url": "utils/library.html",
    "revision": "0238a2062cd9e601dbafd0dd1fcee34b"
  },
  {
    "url": "utils/regexp.html",
    "revision": "0a017d60e0211de01c2bf8c1f64a128c"
  },
  {
    "url": "vue/index.html",
    "revision": "12bd3168378d2f209fc6936d49342168"
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
