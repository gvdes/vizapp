if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let c=Promise.resolve();return s[e]||(c=new Promise(async c=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=c}else importScripts(e),c()})),c.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},c=(c,s)=>{Promise.all(c.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(c)};self.define=(c,f,i)=>{s[c]||(s[c]=Promise.resolve().then(()=>{let s={};const d={uri:location.origin+c.slice(1)};return Promise.all(f.map(c=>{switch(c){case"exports":return s;case"module":return d;default:return e(c)}})).then(e=>{const c=i(...e);return s.default||(s.default=c),s})}))}}define("./service-worker.js",["./workbox-e170c028"],(function(e){"use strict";e.setCacheNameDetails({prefix:"vizapp"}),self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"css/10.b957fa89.css",revision:"fca73a6d2ed8698b3b6d6b9e5eb16650"},{url:"css/11.b957fa89.css",revision:"fca73a6d2ed8698b3b6d6b9e5eb16650"},{url:"css/12.b957fa89.css",revision:"fca73a6d2ed8698b3b6d6b9e5eb16650"},{url:"css/13.bc152c4a.css",revision:"2a0cb9434da4a6d9e11e9d82424012de"},{url:"css/2.cbb5101c.css",revision:"07f97efee23f12483012021ec24c3cb3"},{url:"css/3.f5d94e61.css",revision:"926aded488ba84c063eebaeae29af9e9"},{url:"css/4.7dde04e1.css",revision:"fee5b8dfc7a7ef53af8004e8365c5044"},{url:"css/5.e04f7fca.css",revision:"16b158b1d7fe0e4004ce3f6e2037d8cd"},{url:"css/6.0431a87e.css",revision:"ee09726309e4a1d44a299333eff9a830"},{url:"css/9.b957fa89.css",revision:"fca73a6d2ed8698b3b6d6b9e5eb16650"},{url:"css/app.25d3f73a.css",revision:"b4f69a4a98954cc28d850a37b2b4b330"},{url:"css/vendor.963f570a.css",revision:"3a5d4246df38696896c59f8f9c451083"},{url:"favicon.ico",revision:"cca57181d4f4087df27cc717ee7ada04"},{url:"fonts/Exo-Medium.c62d38a6.ttf",revision:"e0b3d3f90e5a48d3d39cc02ee4bf8ccd"},{url:"fonts/Exo-Regular.607fce0f.ttf",revision:"6e791eba0cf1288733c585acae26033b"},{url:"fonts/Exo-Thin.89d1899c.ttf",revision:"68aecd09d23ec6c5fea9b219ad65eaef"},{url:"fonts/KFOkCnqEu92Fr1MmgVxIIzQ.a45108d3.woff",revision:"5cb7edfceb233100075dc9a1e12e8da3"},{url:"fonts/KFOlCnqEu92Fr1MmEU9fBBc-.cea99d3e.woff",revision:"87284894879f5b1c229cb49c8ff6decc"},{url:"fonts/KFOlCnqEu92Fr1MmSU5fBBc-.865f928c.woff",revision:"b00849e00f4c2331cddd8ffb44a6720b"},{url:"fonts/KFOlCnqEu92Fr1MmWUlfBBc-.2267169e.woff",revision:"adcde98f1d584de52060ad7b16373da3"},{url:"fonts/KFOlCnqEu92Fr1MmYUtfBBc-.bac8362e.woff",revision:"bb1e4dc6333675d11ada2e857e7f95d7"},{url:"fonts/KFOmCnqEu92Fr1Mu4mxM.49ae34d4.woff",revision:"60fa3c0614b8fb2f394fa29944c21540"},{url:"fonts/fa-brands-400.c967a94c.woff2",revision:"f075c50f89795e4cdb4d45b51f1a6800"},{url:"fonts/fa-brands-400.dc2cbadd.woff",revision:"ad527cc5ec23d6da66e8a1d6772ea6d3"},{url:"fonts/fa-regular-400.1008b522.woff2",revision:"4a74738e7728e93c4394b8604081da62"},{url:"fonts/fa-regular-400.1069ea55.woff",revision:"3c6879c4f342203d099bdd66dce6d396"},{url:"fonts/fa-solid-900.3ceb50e7.woff2",revision:"8e1ed89b6ccb8ce41faf5cb672677105"},{url:"fonts/fa-solid-900.46fdbd2d.woff",revision:"4451e1d86df7491dd874f2c41eee1053"},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.1811d381.woff",revision:"84a37de85c17f186652a179b1145392f"},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.fa3334fe.woff2",revision:"703cf8f274fbb265d49c6262825780e1"},{url:"icons/apple-icon-120x120.png",revision:"e0837e846375541b3688ae84c62d1eb8"},{url:"icons/apple-icon-152x152.png",revision:"4b288d45be15a0df092e720b74630966"},{url:"icons/apple-icon-167x167.png",revision:"bcc5ee1752c50a90e275ed61341bbea4"},{url:"icons/apple-icon-180x180.png",revision:"1ff4f442ea31ef203757beedeae03d7c"},{url:"icons/apple-launch-1125x2436.png",revision:"56545a5f0902de46176bc57e3e1900cb"},{url:"icons/apple-launch-1242x2208.png",revision:"7e0cb5035d1055cfb0d79b12f8ef79f8"},{url:"icons/apple-launch-1242x2688.png",revision:"2fd54990113f685936639a7acd7e78e4"},{url:"icons/apple-launch-1536x2048.png",revision:"8948a6ca07c632c2afe22e03cc196dd4"},{url:"icons/apple-launch-1668x2224.png",revision:"fb972936ad7f66f42e5fe31d0523fb8d"},{url:"icons/apple-launch-1668x2388.png",revision:"2941554ff78e90abff06733463dc5b94"},{url:"icons/apple-launch-2048x2732.png",revision:"2e07100937b5933e67c5e9e2bf77dafd"},{url:"icons/apple-launch-640x1136.png",revision:"1a137cbaffec596614db9548c4e9c761"},{url:"icons/apple-launch-750x1334.png",revision:"aa5a19dee9575df393a91c2febca4d71"},{url:"icons/apple-launch-828x1792.png",revision:"0ac03587ed2cd1f346e16575ab087277"},{url:"icons/favicon-128x128.png",revision:"5c80f7365c264c074e3442957db3f308"},{url:"icons/favicon-16x16.png",revision:"092abd6178e25a6d6d369fdd7f368dcc"},{url:"icons/favicon-32x32.png",revision:"1c1466eec8ba022c6abac693313c612e"},{url:"icons/favicon-96x96.png",revision:"58e0185cfcc269ee3bf06f0b6d78c2b3"},{url:"icons/icon-128x128.png",revision:"5c80f7365c264c074e3442957db3f308"},{url:"icons/icon-192x192.png",revision:"63265b76509b92202f88f282cb63d0c9"},{url:"icons/icon-256x256.png",revision:"b8703327404da766ee630f17f0569db1"},{url:"icons/icon-384x384.png",revision:"c8ee2f692c648f5780052339ddde9a4d"},{url:"icons/icon-512x512.png",revision:"676136f917afc1bd5b29a9ed51c1cbab"},{url:"icons/ms-icon-144x144.png",revision:"de389e70c9cc4f0a9af2dd699cf4c137"},{url:"icons/safari-pinned-tab.svg",revision:"c5b298164887ea557798b2194bcb6146"},{url:"img/logo.2bb91c8d.png",revision:"ab10a6c66d4af16a27a00522f1ea23ec"},{url:"index.html",revision:"6d835c490b4f63b7857af9b6ce995b1c"},{url:"js/10.ef158592.js",revision:"eeded68122b0fe6544768a4256d02859"},{url:"js/11.75eed9ca.js",revision:"35f7c3152ca67d51ae938b0ac8afc746"},{url:"js/12.c99b301e.js",revision:"619568a04ef4c6cdca709295a29c0190"},{url:"js/13.140bbef1.js",revision:"8116306ed23840690672c1483ce49146"},{url:"js/14.63c0ec5d.js",revision:"12f7ff4eaa99b1021557da253ef581a5"},{url:"js/15.76c845fa.js",revision:"19092a23e9cf722b80d617428d2004ef"},{url:"js/16.35e636b8.js",revision:"3e5cc0cd0e8386c0133bf837e9a37357"},{url:"js/17.077b09c1.js",revision:"b8fb3c7b5ed2f24ffbf14224abb99fb9"},{url:"js/18.3261c0b3.js",revision:"832f4af501bbfe276a872a5ccbf3a079"},{url:"js/19.04555c1b.js",revision:"978d10b28a2712aa21ec4241a5c619d8"},{url:"js/2.88091d19.js",revision:"8b32e7202838a26b1f553010de89b218"},{url:"js/20.84b7a6ab.js",revision:"613726ffe4acaa6ac1c343702e947feb"},{url:"js/21.908883d3.js",revision:"d9b6097b21da279ebc1e94537dd5bf99"},{url:"js/3.ae341fe1.js",revision:"7ed69ddcce4cf6ed53817feafd9d1b2f"},{url:"js/4.f12c10f2.js",revision:"22943cfb4d07b120bf4fb6ad1ae38add"},{url:"js/5.e9129555.js",revision:"48d13eda496652ff9d400fbd96f78991"},{url:"js/6.e93da51a.js",revision:"35d0b3aabaae68abf93fd7881f7102b8"},{url:"js/7.11c32f81.js",revision:"774d8d9dcbe9f336561555d60edd9671"},{url:"js/8.0241a312.js",revision:"6886bcdb8488e2761994b289804f4672"},{url:"js/9.78e555a7.js",revision:"6e55724c24c8288c8e2a316eff7bcd85"},{url:"js/app.c50bcfce.js",revision:"0d22830072092750b81c127fa8f0533f"},{url:"js/vendor.c448f67e.js",revision:"6b8b6ea41f77796ab4d1d5e94aab55bf"},{url:"manifest.json",revision:"e9d8d0d0a21510dbc421776fa1ad99db"},{url:"sounds/all-eyes-on-me-465.mp3",revision:"cd39bb9e1e8a3181bfe686919e431e3c"},{url:"sounds/anexing.mp3",revision:"85ba590f5e368cc59e38c9542d0cf021"},{url:"sounds/creating.mp3",revision:"8a8b917c0093f1626079b8a28c530893"},{url:"sounds/moved.mp3",revision:"adf13fb1a986d568c8d453b4f2cc5c2d"},{url:"sounds/ntf_2.mp3",revision:"122b5e083e6397720b8739507b85f92b"},{url:"sounds/orderwait_new.mp3",revision:"fc88c3c8bafcf7d9d6120eaed6697795"},{url:"sounds/oringz-w427-371.mp3",revision:"e36a7515f6ad098a2a7b6c6e6c939ef4"},{url:"sounds/pop1.mp3",revision:"b7c19a69352c86e2c9f8c0beb80fdc18"},{url:"sounds/removed.mp3",revision:"dfc3d74dd948d66801d67bfb62a2ffc4"},{url:"sounds/waiting.mp3",revision:"6f1026d5070cdd85c4fdd58408d41827"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/service-worker\.js$/,/workbox-(.)*\.js$/]}))}));
