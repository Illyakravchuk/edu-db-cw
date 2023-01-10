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
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "6ccdde6eb47f42a607412e8a0a37855c"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.7dc41fd3.css",
    "revision": "69a34608151b20ea97479189d9b22533"
  },
  {
    "url": "assets/img/anno_model.16452301.png",
    "revision": "16452301f77b0bed3281a1d5598f4e0f"
  },
  {
    "url": "assets/img/Screenshot_1.c888d17f.png",
    "revision": "c888d17f101fee6e45c8517624f1331e"
  },
  {
    "url": "assets/img/Screenshot_2.83054b7d.png",
    "revision": "83054b7d51aec040f7bce8f67886c07d"
  },
  {
    "url": "assets/img/Screenshot_3.4233bd62.png",
    "revision": "4233bd629f85e7557c0c0370cf60c373"
  },
  {
    "url": "assets/img/Screenshot_4.b9247d4e.png",
    "revision": "b9247d4e0538b5eeed1d7e5c2bf1957d"
  },
  {
    "url": "assets/img/Screenshot_5.fbf16123.png",
    "revision": "fbf1612352871b8bdbfd341e506bd037"
  },
  {
    "url": "assets/img/Screenshot_6.21ca32cd.png",
    "revision": "21ca32cda25bceb78b51aa401b2e591b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.4a9756ed.js",
    "revision": "00e2dd50eb9543b3dbadfd51baaf2ee0"
  },
  {
    "url": "assets/js/11.54be560d.js",
    "revision": "1f05fd6baf860f1b8f4017c3848e2de6"
  },
  {
    "url": "assets/js/12.5d0e7ac3.js",
    "revision": "b0eac9f17931522f4ad3b2ff6d862b16"
  },
  {
    "url": "assets/js/13.58732d68.js",
    "revision": "b21774b2cfb0347e0d256d38e597b6ea"
  },
  {
    "url": "assets/js/14.1a2a9bd5.js",
    "revision": "841605ed8126c7d5d7c782bfc0663768"
  },
  {
    "url": "assets/js/15.d0ef4059.js",
    "revision": "4cc2c1dfcb753168e7f083cc525deaa2"
  },
  {
    "url": "assets/js/16.7125cc5d.js",
    "revision": "de2ae36072695e7d6cdc8a91858361fd"
  },
  {
    "url": "assets/js/17.07ee2677.js",
    "revision": "fe0028158167e55c8167aef393b5ef50"
  },
  {
    "url": "assets/js/18.15c5de33.js",
    "revision": "8d45c4341be4993e26a2467b995503d7"
  },
  {
    "url": "assets/js/19.b4d5d4af.js",
    "revision": "008f5060945497517f8bb34d4676fd17"
  },
  {
    "url": "assets/js/2.19056e0d.js",
    "revision": "3b592b2563bcfa12416190a5f1b502ea"
  },
  {
    "url": "assets/js/20.654a8275.js",
    "revision": "8c63205f76fd0d62df15cbf0bccc5942"
  },
  {
    "url": "assets/js/21.555c4d14.js",
    "revision": "e58fa2bd41c8b45eca086c8bef5e22ef"
  },
  {
    "url": "assets/js/22.48ca9b74.js",
    "revision": "507afc93adbbd5f13c19fc6a4c7f9b51"
  },
  {
    "url": "assets/js/23.077fa612.js",
    "revision": "f77f0b34963e9dca6dfc27373c2f26f5"
  },
  {
    "url": "assets/js/24.178ee269.js",
    "revision": "db66a139b8c68923503971fdc061bfa3"
  },
  {
    "url": "assets/js/26.2b0de4dc.js",
    "revision": "2c521cf0c927c0ff4dfaf4a726093c46"
  },
  {
    "url": "assets/js/3.cbb55279.js",
    "revision": "e84b9a289616b6ccd5d87caeb31c6bc4"
  },
  {
    "url": "assets/js/4.610144b0.js",
    "revision": "f47dbe97140b56c10347f09f723ca27f"
  },
  {
    "url": "assets/js/5.aaf482e3.js",
    "revision": "9e45ef267aae8d5bc3616dc5a52cc01f"
  },
  {
    "url": "assets/js/6.828e704b.js",
    "revision": "48caebd5441cc1b03a5eb8d9796a8768"
  },
  {
    "url": "assets/js/7.52aee813.js",
    "revision": "b9ca15d211f26222e6d5b9a5241cb883"
  },
  {
    "url": "assets/js/8.196aa57e.js",
    "revision": "571ec7c8105ed281c1835d301c099cac"
  },
  {
    "url": "assets/js/9.4acc3a91.js",
    "revision": "60013c5413306bbfef0d23d7cd2fef9d"
  },
  {
    "url": "assets/js/app.f01804fb.js",
    "revision": "fe8a38f872abbfcf4edc771d361a1a39"
  },
  {
    "url": "conclusion/index.html",
    "revision": "19d4d86779a9a1db6625346cfeb15981"
  },
  {
    "url": "design/index.html",
    "revision": "137c54a32b5ef1e7d52a1ae075a90290"
  },
  {
    "url": "index.html",
    "revision": "91c4a700dd93204783750a654c0db26c"
  },
  {
    "url": "intro/index.html",
    "revision": "7faec711519512201b0f3258bb49de8a"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "af8ad719515c2967a2847590920a7de5"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "cae71e18c3e0e8894068a9a176d3d383"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "b763a021e2a296e99e8d4e372cec2515"
  },
  {
    "url": "software/index.html",
    "revision": "589c5c7ff9421d1513427dcdc1f48527"
  },
  {
    "url": "test/index.html",
    "revision": "2481d3d9deceddd51ab2e635e06105d4"
  },
  {
    "url": "use cases/index.html",
    "revision": "04bd559c1d24b39b9d53ddabb4df6991"
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
