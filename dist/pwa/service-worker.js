if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let c=Promise.resolve();return s[e]||(c=new Promise(async c=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=c}else importScripts(e),c()})),c.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},c=(c,s)=>{Promise.all(c.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(c)};self.define=(c,f,a)=>{s[c]||(s[c]=Promise.resolve().then(()=>{let s={};const i={uri:location.origin+c.slice(1)};return Promise.all(f.map(c=>{switch(c){case"exports":return s;case"module":return i;default:return e(c)}})).then(e=>{const c=a(...e);return s.default||(s.default=c),s})}))}}define("./service-worker.js",["./workbox-e170c028"],(function(e){"use strict";e.setCacheNameDetails({prefix:"vizapp"}),self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"css/10.d19d84ea.css",revision:"64e345ccbaee8575cabb952c93bcbbac"},{url:"css/11.7b5c4667.css",revision:"0ee1a396296bd67fbb6fe3c7ff59891d"},{url:"css/12.1c1a8f3c.css",revision:"fee5b8dfc7a7ef53af8004e8365c5044"},{url:"css/13.b43534f5.css",revision:"11f91227f02153b8ceb0dc0876202f91"},{url:"css/14.30bd4534.css",revision:"1eeac8434dfe0fbae8913ccfc6bf86ee"},{url:"css/3.fbff1b82.css",revision:"2a0cb9434da4a6d9e11e9d82424012de"},{url:"css/4.714847a3.css",revision:"926aded488ba84c063eebaeae29af9e9"},{url:"css/5.93e3a926.css",revision:"fca73a6d2ed8698b3b6d6b9e5eb16650"},{url:"css/6.6fe7184a.css",revision:"b3bc5fdd73f0d47057169343c5263687"},{url:"css/7.93e3a926.css",revision:"fca73a6d2ed8698b3b6d6b9e5eb16650"},{url:"css/8.93e3a926.css",revision:"fca73a6d2ed8698b3b6d6b9e5eb16650"},{url:"css/9.93e3a926.css",revision:"fca73a6d2ed8698b3b6d6b9e5eb16650"},{url:"css/app.348f30bd.css",revision:"b4f69a4a98954cc28d850a37b2b4b330"},{url:"css/vendor.23e8e1d3.css",revision:"e2a14dc22715c6e1c170bf19dadb432b"},{url:"favicon.ico",revision:"cca57181d4f4087df27cc717ee7ada04"},{url:"fonts/Exo-Medium.c62d38a6.ttf",revision:"e0b3d3f90e5a48d3d39cc02ee4bf8ccd"},{url:"fonts/Exo-Regular.607fce0f.ttf",revision:"6e791eba0cf1288733c585acae26033b"},{url:"fonts/Exo-Thin.89d1899c.ttf",revision:"68aecd09d23ec6c5fea9b219ad65eaef"},{url:"fonts/KFOkCnqEu92Fr1MmgVxIIzQ.a45108d3.woff",revision:"5cb7edfceb233100075dc9a1e12e8da3"},{url:"fonts/KFOlCnqEu92Fr1MmEU9fBBc-.cea99d3e.woff",revision:"87284894879f5b1c229cb49c8ff6decc"},{url:"fonts/KFOlCnqEu92Fr1MmSU5fBBc-.865f928c.woff",revision:"b00849e00f4c2331cddd8ffb44a6720b"},{url:"fonts/KFOlCnqEu92Fr1MmWUlfBBc-.2267169e.woff",revision:"adcde98f1d584de52060ad7b16373da3"},{url:"fonts/KFOlCnqEu92Fr1MmYUtfBBc-.bac8362e.woff",revision:"bb1e4dc6333675d11ada2e857e7f95d7"},{url:"fonts/KFOmCnqEu92Fr1Mu4mxM.49ae34d4.woff",revision:"60fa3c0614b8fb2f394fa29944c21540"},{url:"fonts/fa-brands-400.329a95a9.woff",revision:"099a9556e1a63ece24f8a99859c94c7d"},{url:"fonts/fa-brands-400.c1210e5e.woff2",revision:"f7307680c7fe85959f3ecf122493ea7d"},{url:"fonts/fa-regular-400.36722648.woff",revision:"7124eb50fc8227c78269f2d995637ff5"},{url:"fonts/fa-regular-400.68c5af1f.woff2",revision:"f0f8230116992e521526097a28f54066"},{url:"fonts/fa-solid-900.ada6e6df.woff2",revision:"e8a427e15cc502bef99cfd722b37ea98"},{url:"fonts/fa-solid-900.c6ec0800.woff",revision:"9fe5a17c8ab036d20e6c5ba3fd2ac511"},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.f9e3a827.woff",revision:"1a05986ec7181461674cfdacf4502b8a"},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.a563f825.woff2",revision:"47abd1b169a850b18ede9c9590cdb35d"},{url:"icons/apple-icon-120x120.png",revision:"e0837e846375541b3688ae84c62d1eb8"},{url:"icons/apple-icon-152x152.png",revision:"4b288d45be15a0df092e720b74630966"},{url:"icons/apple-icon-167x167.png",revision:"bcc5ee1752c50a90e275ed61341bbea4"},{url:"icons/apple-icon-180x180.png",revision:"1ff4f442ea31ef203757beedeae03d7c"},{url:"icons/apple-launch-1125x2436.png",revision:"56545a5f0902de46176bc57e3e1900cb"},{url:"icons/apple-launch-1242x2208.png",revision:"7e0cb5035d1055cfb0d79b12f8ef79f8"},{url:"icons/apple-launch-1242x2688.png",revision:"2fd54990113f685936639a7acd7e78e4"},{url:"icons/apple-launch-1536x2048.png",revision:"8948a6ca07c632c2afe22e03cc196dd4"},{url:"icons/apple-launch-1668x2224.png",revision:"fb972936ad7f66f42e5fe31d0523fb8d"},{url:"icons/apple-launch-1668x2388.png",revision:"2941554ff78e90abff06733463dc5b94"},{url:"icons/apple-launch-2048x2732.png",revision:"2e07100937b5933e67c5e9e2bf77dafd"},{url:"icons/apple-launch-640x1136.png",revision:"1a137cbaffec596614db9548c4e9c761"},{url:"icons/apple-launch-750x1334.png",revision:"aa5a19dee9575df393a91c2febca4d71"},{url:"icons/apple-launch-828x1792.png",revision:"0ac03587ed2cd1f346e16575ab087277"},{url:"icons/favicon-128x128.png",revision:"5c80f7365c264c074e3442957db3f308"},{url:"icons/favicon-16x16.png",revision:"092abd6178e25a6d6d369fdd7f368dcc"},{url:"icons/favicon-32x32.png",revision:"1c1466eec8ba022c6abac693313c612e"},{url:"icons/favicon-96x96.png",revision:"58e0185cfcc269ee3bf06f0b6d78c2b3"},{url:"icons/icon-128x128.png",revision:"5c80f7365c264c074e3442957db3f308"},{url:"icons/icon-192x192.png",revision:"63265b76509b92202f88f282cb63d0c9"},{url:"icons/icon-256x256.png",revision:"b8703327404da766ee630f17f0569db1"},{url:"icons/icon-384x384.png",revision:"c8ee2f692c648f5780052339ddde9a4d"},{url:"icons/icon-512x512.png",revision:"676136f917afc1bd5b29a9ed51c1cbab"},{url:"icons/ms-icon-144x144.png",revision:"de389e70c9cc4f0a9af2dd699cf4c137"},{url:"icons/safari-pinned-tab.svg",revision:"c5b298164887ea557798b2194bcb6146"},{url:"img/logo.2bb91c8d.png",revision:"ab10a6c66d4af16a27a00522f1ea23ec"},{url:"index.html",revision:"3dc2b5888e73c9c8780fea3476efb029"},{url:"js/10.10f5b2bd.js",revision:"7ac25d6393ea4c1c6bd1ee25f69cb26f"},{url:"js/11.e0534ff8.js",revision:"8088283cebbb861c788923ceb718cc52"},{url:"js/12.265f5393.js",revision:"c1347893182c7da71f8a11ba3e7efafe"},{url:"js/13.84f91477.js",revision:"b35fca8b32d10e8be3eb9547b44ddf60"},{url:"js/14.fff911c4.js",revision:"a435b108ab3bab89b2698f89c72d3826"},{url:"js/15.da0d2873.js",revision:"960e93891960dde55f0c5a14003ecd36"},{url:"js/16.1a24d3c6.js",revision:"468292e982a9789300367e4713dba791"},{url:"js/17.60c157c8.js",revision:"cfe7d743af48a8b0b34d2371bcd423b9"},{url:"js/18.6d5350c2.js",revision:"86ed2a2cbf5972b3bd017e04a312b8b2"},{url:"js/19.062b80e4.js",revision:"e9736a015bf98d62ecbcf6ff28aac37b"},{url:"js/20.98ab7607.js",revision:"5b983a4cb6ca5968c71b40926ce43257"},{url:"js/21.435d77e1.js",revision:"42d1e2e80cb6020b0dab14a6e43b4346"},{url:"js/22.63d23504.js",revision:"2d029042f200ea897ea1cab050ea23f0"},{url:"js/23.bc3ce5fd.js",revision:"7b9cb71799418124a36f6d1ee24a3c95"},{url:"js/24.5315de4d.js",revision:"ac95021d772df516c262df78d30859a7"},{url:"js/25.18889b4f.js",revision:"ba320417b0b86da3ccefddbd11d2fb83"},{url:"js/26.5677f7ea.js",revision:"68ba9912e925895c2e3ca8f8e9d4438d"},{url:"js/27.8b02d6d5.js",revision:"d565b763ec878f0fbc689e825f4c6328"},{url:"js/28.b42f3082.js",revision:"81ac462d8d7d9a8862a264ad2ae6792b"},{url:"js/29.e2a4ce8e.js",revision:"dafc87b7d222e8926dada9acd2777663"},{url:"js/3.b6dedd03.js",revision:"e9cb5aa5015ac382a7998e67fdb622c2"},{url:"js/30.bfb63ef6.js",revision:"5dac343cb4752c1286e87ab3ded171e5"},{url:"js/31.b6fdcf8d.js",revision:"21c477a46c59d61594cc0e9325a2135d"},{url:"js/4.a828c403.js",revision:"ea0267f5a62c82da3cfe8bc535b3d183"},{url:"js/5.f5a231c5.js",revision:"a41da039e0ae286ccea1b897ad3bafcb"},{url:"js/6.7e76d2c4.js",revision:"9c52cd48c4bf7a606e074efc709a9955"},{url:"js/7.fa3cdbb3.js",revision:"85fa3d46d7c5dd3c8971530a62870edb"},{url:"js/8.0904c65d.js",revision:"f1fdace3601fbda63baaf085e2e0b4bb"},{url:"js/9.8ea33679.js",revision:"b0ed2936166319a380b5824affe50d3c"},{url:"js/app.64b84fce.js",revision:"7cea06f6ff9856be8ce138b88fa0853c"},{url:"js/chunk-common.e37e3bbb.js",revision:"8a27e7f32f4ffac04959c5c49bcbcd05"},{url:"manifest.json",revision:"e9d8d0d0a21510dbc421776fa1ad99db"},{url:"pdf/ParadroidMono-Light.ttf",revision:"d26272c551eff27de7bb7f2d324cdc6a"},{url:"pdf/logo_org.png",revision:"01a5b9d6d7030d84f8468d7149ad05d4"},{url:"pdf/rsi.png",revision:"422f73cbf3edc97a4147a0f19679fd24"},{url:"sounds/all-eyes-on-me-465.mp3",revision:"cd39bb9e1e8a3181bfe686919e431e3c"},{url:"sounds/anexing.mp3",revision:"85ba590f5e368cc59e38c9542d0cf021"},{url:"sounds/creating.mp3",revision:"8a8b917c0093f1626079b8a28c530893"},{url:"sounds/done.mp3",revision:"e36a7515f6ad098a2a7b6c6e6c939ef4"},{url:"sounds/moved.mp3",revision:"adf13fb1a986d568c8d453b4f2cc5c2d"},{url:"sounds/ntf_2.mp3",revision:"122b5e083e6397720b8739507b85f92b"},{url:"sounds/orderwait_new.mp3",revision:"fc88c3c8bafcf7d9d6120eaed6697795"},{url:"sounds/pop1.mp3",revision:"b7c19a69352c86e2c9f8c0beb80fdc18"},{url:"sounds/removed.mp3",revision:"dfc3d74dd948d66801d67bfb62a2ffc4"},{url:"sounds/waiting.mp3",revision:"6f1026d5070cdd85c4fdd58408d41827"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/service-worker\.js$/,/workbox-(.)*\.js$/]}))}));
