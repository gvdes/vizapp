if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let c=Promise.resolve();return s[e]||(c=new Promise(async c=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=c}else importScripts(e),c()})),c.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},c=(c,s)=>{Promise.all(c.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(c)};self.define=(c,f,i)=>{s[c]||(s[c]=Promise.resolve().then(()=>{let s={};const a={uri:location.origin+c.slice(1)};return Promise.all(f.map(c=>{switch(c){case"exports":return s;case"module":return a;default:return e(c)}})).then(e=>{const c=i(...e);return s.default||(s.default=c),s})}))}}define("./service-worker.js",["./workbox-e170c028"],(function(e){"use strict";e.setCacheNameDetails({prefix:"vizapp"}),self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"css/10.d19d84ea.css",revision:"64e345ccbaee8575cabb952c93bcbbac"},{url:"css/11.75f9034f.css",revision:"a570b06ee6213e7d840692b390ec66b4"},{url:"css/12.3064e617.css",revision:"34d80e9ef4d0eca151e51135162c4019"},{url:"css/13.1c1a8f3c.css",revision:"fee5b8dfc7a7ef53af8004e8365c5044"},{url:"css/14.b43534f5.css",revision:"11f91227f02153b8ceb0dc0876202f91"},{url:"css/15.30bd4534.css",revision:"1eeac8434dfe0fbae8913ccfc6bf86ee"},{url:"css/3.fbff1b82.css",revision:"2a0cb9434da4a6d9e11e9d82424012de"},{url:"css/4.714847a3.css",revision:"926aded488ba84c063eebaeae29af9e9"},{url:"css/5.93e3a926.css",revision:"fca73a6d2ed8698b3b6d6b9e5eb16650"},{url:"css/6.7ad9a3e9.css",revision:"b78044c459ee334ede29d7558541c46c"},{url:"css/7.93e3a926.css",revision:"fca73a6d2ed8698b3b6d6b9e5eb16650"},{url:"css/8.93e3a926.css",revision:"fca73a6d2ed8698b3b6d6b9e5eb16650"},{url:"css/9.93e3a926.css",revision:"fca73a6d2ed8698b3b6d6b9e5eb16650"},{url:"css/app.348f30bd.css",revision:"b4f69a4a98954cc28d850a37b2b4b330"},{url:"css/vendor.63710508.css",revision:"cdac7c153058e8ecf090d276cc6cf8de"},{url:"favicon.ico",revision:"cca57181d4f4087df27cc717ee7ada04"},{url:"fonts/Exo-Medium.c62d38a6.ttf",revision:"e0b3d3f90e5a48d3d39cc02ee4bf8ccd"},{url:"fonts/Exo-Regular.607fce0f.ttf",revision:"6e791eba0cf1288733c585acae26033b"},{url:"fonts/Exo-Thin.89d1899c.ttf",revision:"68aecd09d23ec6c5fea9b219ad65eaef"},{url:"fonts/KFOkCnqEu92Fr1MmgVxIIzQ.9391e6e2.woff",revision:"04b7fd97f88b82dccce5ec446ccc29e6"},{url:"fonts/KFOlCnqEu92Fr1MmEU9fBBc-.ddd11dab.woff",revision:"da2721c68b4bc80db8d4c404f76b118c"},{url:"fonts/KFOlCnqEu92Fr1MmSU5fBBc-.877b9231.woff",revision:"bf0f407102faf3a0b521d3b545f547a5"},{url:"fonts/KFOlCnqEu92Fr1MmWUlfBBc-.0344cc3c.woff",revision:"68d6dabfe54e245e7d5d5c16c3c4b1a9"},{url:"fonts/KFOlCnqEu92Fr1MmYUtfBBc-.b555d228.woff",revision:"64bba9c4e8156c152050c657e9d24bf1"},{url:"fonts/KFOmCnqEu92Fr1Mu4mxM.9b78ea3b.woff",revision:"dc3e086fc0c5addc09702e111d2adb42"},{url:"fonts/fa-brands-400.329a95a9.woff",revision:"099a9556e1a63ece24f8a99859c94c7d"},{url:"fonts/fa-brands-400.c1210e5e.woff2",revision:"f7307680c7fe85959f3ecf122493ea7d"},{url:"fonts/fa-regular-400.36722648.woff",revision:"7124eb50fc8227c78269f2d995637ff5"},{url:"fonts/fa-regular-400.68c5af1f.woff2",revision:"f0f8230116992e521526097a28f54066"},{url:"fonts/fa-solid-900.ada6e6df.woff2",revision:"e8a427e15cc502bef99cfd722b37ea98"},{url:"fonts/fa-solid-900.c6ec0800.woff",revision:"9fe5a17c8ab036d20e6c5ba3fd2ac511"},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.55e9c550.woff",revision:"852cf9255305bdf184a8b38cd38691ae"},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.c934fe77.woff2",revision:"8bf5ee9f803346f0b0de2c97f649f97f"},{url:"icons/apple-icon-120x120.png",revision:"e0837e846375541b3688ae84c62d1eb8"},{url:"icons/apple-icon-152x152.png",revision:"4b288d45be15a0df092e720b74630966"},{url:"icons/apple-icon-167x167.png",revision:"bcc5ee1752c50a90e275ed61341bbea4"},{url:"icons/apple-icon-180x180.png",revision:"1ff4f442ea31ef203757beedeae03d7c"},{url:"icons/apple-launch-1125x2436.png",revision:"56545a5f0902de46176bc57e3e1900cb"},{url:"icons/apple-launch-1242x2208.png",revision:"7e0cb5035d1055cfb0d79b12f8ef79f8"},{url:"icons/apple-launch-1242x2688.png",revision:"2fd54990113f685936639a7acd7e78e4"},{url:"icons/apple-launch-1536x2048.png",revision:"8948a6ca07c632c2afe22e03cc196dd4"},{url:"icons/apple-launch-1668x2224.png",revision:"fb972936ad7f66f42e5fe31d0523fb8d"},{url:"icons/apple-launch-1668x2388.png",revision:"2941554ff78e90abff06733463dc5b94"},{url:"icons/apple-launch-2048x2732.png",revision:"2e07100937b5933e67c5e9e2bf77dafd"},{url:"icons/apple-launch-640x1136.png",revision:"1a137cbaffec596614db9548c4e9c761"},{url:"icons/apple-launch-750x1334.png",revision:"aa5a19dee9575df393a91c2febca4d71"},{url:"icons/apple-launch-828x1792.png",revision:"0ac03587ed2cd1f346e16575ab087277"},{url:"icons/favicon-128x128.png",revision:"5c80f7365c264c074e3442957db3f308"},{url:"icons/favicon-16x16.png",revision:"092abd6178e25a6d6d369fdd7f368dcc"},{url:"icons/favicon-32x32.png",revision:"1c1466eec8ba022c6abac693313c612e"},{url:"icons/favicon-96x96.png",revision:"58e0185cfcc269ee3bf06f0b6d78c2b3"},{url:"icons/icon-128x128.png",revision:"5c80f7365c264c074e3442957db3f308"},{url:"icons/icon-192x192.png",revision:"63265b76509b92202f88f282cb63d0c9"},{url:"icons/icon-256x256.png",revision:"b8703327404da766ee630f17f0569db1"},{url:"icons/icon-384x384.png",revision:"c8ee2f692c648f5780052339ddde9a4d"},{url:"icons/icon-512x512.png",revision:"676136f917afc1bd5b29a9ed51c1cbab"},{url:"icons/ms-icon-144x144.png",revision:"de389e70c9cc4f0a9af2dd699cf4c137"},{url:"icons/safari-pinned-tab.svg",revision:"c5b298164887ea557798b2194bcb6146"},{url:"img/logo.2bb91c8d.png",revision:"ab10a6c66d4af16a27a00522f1ea23ec"},{url:"index.html",revision:"d5690b2d42d103f27808170f7824b025"},{url:"js/10.bdf67cfc.js",revision:"94ccb6a6d974c316b2f80c42d2ae4c45"},{url:"js/11.fd03f869.js",revision:"3a1725f5c3842c330ddca31f85fe63f4"},{url:"js/12.78ae3788.js",revision:"6e73f97c216d05a5460dd2546789302e"},{url:"js/13.c29b65ad.js",revision:"48df61e8ef6083106eb9e9f6d3fc5e6d"},{url:"js/14.2cf6cc64.js",revision:"00bbff73dedad12184d8444e0d9a5309"},{url:"js/15.72f10ef3.js",revision:"1a0ac2cfbe51c33959c3be1c2dc692f0"},{url:"js/16.48809372.js",revision:"32465a14cf976c72751d0345c6413085"},{url:"js/17.a809cecf.js",revision:"f1466684a923fec18266af08555cc56e"},{url:"js/18.256e4c79.js",revision:"c4b1edb13f8ba5d203aaef0983395a25"},{url:"js/19.44db74da.js",revision:"3265f8ad8013d01856952cf373db6ced"},{url:"js/20.fc7a072b.js",revision:"1a7f325d1cba708ada1663744a76788c"},{url:"js/21.f2162b6c.js",revision:"7785673ef7a1cdf2c171e046c4de921e"},{url:"js/22.3b014127.js",revision:"7898cfa7f9921cb1c7fc010ac8a65f4c"},{url:"js/23.99c2fab0.js",revision:"c65921502dd820039ae4775a68c98b75"},{url:"js/24.90d6de1c.js",revision:"30057e0325d854de70902ab410d9f27d"},{url:"js/25.feb2e188.js",revision:"5788f02695731ab2e5ed9b411b877925"},{url:"js/26.c9faa45f.js",revision:"0ac667b44a8c793ffa86e5d53171e716"},{url:"js/27.c0aba998.js",revision:"d2e64127b1eae1698780fec9c05300ac"},{url:"js/28.3c482817.js",revision:"f178c5e2d77e740c6934b265672e408d"},{url:"js/29.d0e7b77c.js",revision:"0f6d37c53dbfc8db2c1354a50c48905b"},{url:"js/3.fd89a05f.js",revision:"e9cb5aa5015ac382a7998e67fdb622c2"},{url:"js/30.d3b745b5.js",revision:"eabbf586dd1060c61fe85c94c0907b8c"},{url:"js/31.8c9b81c3.js",revision:"34d73d57163c053233634ae351a15017"},{url:"js/4.cb1d2421.js",revision:"487adcaa81283f2082cd662a2aae9d6a"},{url:"js/5.bbd83de2.js",revision:"a41da039e0ae286ccea1b897ad3bafcb"},{url:"js/6.aebc90bc.js",revision:"51e89f2fa6f611d9fc0353b53a46eeaf"},{url:"js/7.1cd05502.js",revision:"85fa3d46d7c5dd3c8971530a62870edb"},{url:"js/8.e34c1db7.js",revision:"f1fdace3601fbda63baaf085e2e0b4bb"},{url:"js/9.b426b77a.js",revision:"b0ed2936166319a380b5824affe50d3c"},{url:"js/app.6f81c3aa.js",revision:"0347d135a574165059441f54da3acbec"},{url:"js/chunk-common.f2b35ce2.js",revision:"9482be92fb2df6782b1cc9884b961056"},{url:"manifest.json",revision:"e9d8d0d0a21510dbc421776fa1ad99db"},{url:"pdf/ParadroidMono-Light.ttf",revision:"d26272c551eff27de7bb7f2d324cdc6a"},{url:"pdf/logo_org.png",revision:"01a5b9d6d7030d84f8468d7149ad05d4"},{url:"pdf/rsi.png",revision:"422f73cbf3edc97a4147a0f19679fd24"},{url:"sounds/all-eyes-on-me-465.mp3",revision:"cd39bb9e1e8a3181bfe686919e431e3c"},{url:"sounds/anexing.mp3",revision:"85ba590f5e368cc59e38c9542d0cf021"},{url:"sounds/creating.mp3",revision:"8a8b917c0093f1626079b8a28c530893"},{url:"sounds/done.mp3",revision:"e36a7515f6ad098a2a7b6c6e6c939ef4"},{url:"sounds/moved.mp3",revision:"adf13fb1a986d568c8d453b4f2cc5c2d"},{url:"sounds/ntf_2.mp3",revision:"122b5e083e6397720b8739507b85f92b"},{url:"sounds/orderwait_new.mp3",revision:"fc88c3c8bafcf7d9d6120eaed6697795"},{url:"sounds/pop1.mp3",revision:"b7c19a69352c86e2c9f8c0beb80fdc18"},{url:"sounds/removed.mp3",revision:"dfc3d74dd948d66801d67bfb62a2ffc4"},{url:"sounds/waiting.mp3",revision:"6f1026d5070cdd85c4fdd58408d41827"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/service-worker\.js$/,/workbox-(.)*\.js$/]}))}));
