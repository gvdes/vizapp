if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let c=Promise.resolve();return f[e]||(c=new Promise(async c=>{if("document"in self){const f=document.createElement("script");f.src=e,document.head.appendChild(f),f.onload=c}else importScripts(e),c()})),c.then(()=>{if(!f[e])throw new Error(`Module ${e} didn’t register its module`);return f[e]})},c=(c,f)=>{Promise.all(c.map(e)).then(e=>f(1===e.length?e[0]:e))},f={require:Promise.resolve(c)};self.define=(c,s,d)=>{f[c]||(f[c]=Promise.resolve().then(()=>{let f={};const i={uri:location.origin+c.slice(1)};return Promise.all(s.map(c=>{switch(c){case"exports":return f;case"module":return i;default:return e(c)}})).then(e=>{const c=d(...e);return f.default||(f.default=c),f})}))}}define("./service-worker.js",["./workbox-e170c028"],(function(e){"use strict";e.setCacheNameDetails({prefix:"vizapp"}),self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"css/10.77b13e1a.css",revision:"2c1f3101e7559525678432a71f7ecfae"},{url:"css/11.93e3a926.css",revision:"fca73a6d2ed8698b3b6d6b9e5eb16650"},{url:"css/12.93e3a926.css",revision:"fca73a6d2ed8698b3b6d6b9e5eb16650"},{url:"css/13.3e83f0e6.css",revision:"b8b87cee412ce3f3af03d79a321903d4"},{url:"css/14.83f904c6.css",revision:"1050fe779bfc28cbc00fca513b7a8018"},{url:"css/15.abf6c3e0.css",revision:"82200e4d458ec0ed3b919eeb41eafd28"},{url:"css/16.24afb93a.css",revision:"f35d8332d669319b5c761b4657eeed1b"},{url:"css/17.7838362e.css",revision:"bdf1361de9112cc6fb2d54593f39050a"},{url:"css/18.1c1a8f3c.css",revision:"fee5b8dfc7a7ef53af8004e8365c5044"},{url:"css/19.b43534f5.css",revision:"11f91227f02153b8ceb0dc0876202f91"},{url:"css/2.89a7d40c.css",revision:"192566740d2e921ab9e2f5f78715757f"},{url:"css/20.30bd4534.css",revision:"1eeac8434dfe0fbae8913ccfc6bf86ee"},{url:"css/5.d307e134.css",revision:"2cb358bead2648f27f3037556105c2d5"},{url:"css/6.9508d476.css",revision:"c23b125d7db5f0412914e4860943eeb4"},{url:"css/7.fbff1b82.css",revision:"2a0cb9434da4a6d9e11e9d82424012de"},{url:"css/8.1e1606ad.css",revision:"f0b7e088fcaf9157e5bf0b060a3e9371"},{url:"css/9.93e3a926.css",revision:"fca73a6d2ed8698b3b6d6b9e5eb16650"},{url:"css/app.34013a51.css",revision:"fa244f330e1020efff8b8cc1b0b42133"},{url:"css/chunk-common.f6009c27.css",revision:"e118dc8f72ced33ac39484a207b9548d"},{url:"css/vendor.66728ac0.css",revision:"f31d879e98bc049fe70e7810aee17f84"},{url:"favicon.ico",revision:"cca57181d4f4087df27cc717ee7ada04"},{url:"fonts/Exo-Medium.c62d38a6.ttf",revision:"e0b3d3f90e5a48d3d39cc02ee4bf8ccd"},{url:"fonts/Exo-Regular.607fce0f.ttf",revision:"6e791eba0cf1288733c585acae26033b"},{url:"fonts/Exo-Thin.89d1899c.ttf",revision:"68aecd09d23ec6c5fea9b219ad65eaef"},{url:"fonts/KFOkCnqEu92Fr1MmgVxIIzQ.9391e6e2.woff",revision:"04b7fd97f88b82dccce5ec446ccc29e6"},{url:"fonts/KFOlCnqEu92Fr1MmEU9fBBc-.ddd11dab.woff",revision:"da2721c68b4bc80db8d4c404f76b118c"},{url:"fonts/KFOlCnqEu92Fr1MmSU5fBBc-.877b9231.woff",revision:"bf0f407102faf3a0b521d3b545f547a5"},{url:"fonts/KFOlCnqEu92Fr1MmWUlfBBc-.0344cc3c.woff",revision:"68d6dabfe54e245e7d5d5c16c3c4b1a9"},{url:"fonts/KFOlCnqEu92Fr1MmYUtfBBc-.b555d228.woff",revision:"64bba9c4e8156c152050c657e9d24bf1"},{url:"fonts/KFOmCnqEu92Fr1Mu4mxM.9b78ea3b.woff",revision:"dc3e086fc0c5addc09702e111d2adb42"},{url:"fonts/QuickRgl.109d09e5.ttf",revision:"6cbafd2cb6e973c96ade779edc39c62a"},{url:"fonts/fa-brands-400.2285773e.woff",revision:"1a575a4138e5f366474f0e7c5bd614a5"},{url:"fonts/fa-brands-400.d878b0a6.woff2",revision:"ed311c7a0ade9a75bb3ebf5a7670f31d"},{url:"fonts/fa-regular-400.7a333762.woff2",revision:"b91d376b8d7646d671cd820950d5f7f1"},{url:"fonts/fa-regular-400.bb58e57c.woff",revision:"d1d7e3b4c219fde0f7376c6facfd7149"},{url:"fonts/fa-solid-900.1551f4f6.woff2",revision:"d824df7eb2e268626a2dd9a6a741ac4e"},{url:"fonts/fa-solid-900.eeccf4f6.woff",revision:"d745348d289b149026921f197929a893"},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.81048c6d.woff",revision:"a639499a22fe844d038c15cfb2e0c691"},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.12730e02.woff2",revision:"364c5791449a147ff1460b0e130286c5"},{url:"fonts/uber.ffd4e7c1.otf",revision:"55170d1c9e41c752658980e5ea3f4283"},{url:"icons/apple-icon-120x120.png",revision:"e0837e846375541b3688ae84c62d1eb8"},{url:"icons/apple-icon-152x152.png",revision:"4b288d45be15a0df092e720b74630966"},{url:"icons/apple-icon-167x167.png",revision:"bcc5ee1752c50a90e275ed61341bbea4"},{url:"icons/apple-icon-180x180.png",revision:"1ff4f442ea31ef203757beedeae03d7c"},{url:"icons/apple-launch-1125x2436.png",revision:"56545a5f0902de46176bc57e3e1900cb"},{url:"icons/apple-launch-1242x2208.png",revision:"7e0cb5035d1055cfb0d79b12f8ef79f8"},{url:"icons/apple-launch-1242x2688.png",revision:"2fd54990113f685936639a7acd7e78e4"},{url:"icons/apple-launch-1536x2048.png",revision:"8948a6ca07c632c2afe22e03cc196dd4"},{url:"icons/apple-launch-1668x2224.png",revision:"fb972936ad7f66f42e5fe31d0523fb8d"},{url:"icons/apple-launch-1668x2388.png",revision:"2941554ff78e90abff06733463dc5b94"},{url:"icons/apple-launch-2048x2732.png",revision:"2e07100937b5933e67c5e9e2bf77dafd"},{url:"icons/apple-launch-640x1136.png",revision:"1a137cbaffec596614db9548c4e9c761"},{url:"icons/apple-launch-750x1334.png",revision:"aa5a19dee9575df393a91c2febca4d71"},{url:"icons/apple-launch-828x1792.png",revision:"0ac03587ed2cd1f346e16575ab087277"},{url:"icons/favicon-128x128.png",revision:"5c80f7365c264c074e3442957db3f308"},{url:"icons/favicon-16x16.png",revision:"092abd6178e25a6d6d369fdd7f368dcc"},{url:"icons/favicon-32x32.png",revision:"1c1466eec8ba022c6abac693313c612e"},{url:"icons/favicon-96x96.png",revision:"58e0185cfcc269ee3bf06f0b6d78c2b3"},{url:"icons/icon-128x128.png",revision:"5c80f7365c264c074e3442957db3f308"},{url:"icons/icon-192x192.png",revision:"63265b76509b92202f88f282cb63d0c9"},{url:"icons/icon-256x256.png",revision:"b8703327404da766ee630f17f0569db1"},{url:"icons/icon-384x384.png",revision:"c8ee2f692c648f5780052339ddde9a4d"},{url:"icons/icon-512x512.png",revision:"676136f917afc1bd5b29a9ed51c1cbab"},{url:"icons/ms-icon-144x144.png",revision:"de389e70c9cc4f0a9af2dd699cf4c137"},{url:"icons/safari-pinned-tab.svg",revision:"c5b298164887ea557798b2194bcb6146"},{url:"img/_boxprod.7a251309.png",revision:"526844026782174b5866398bdc932963"},{url:"img/_defprod_.2073f27f.png",revision:"ff257fab6a22d76f980cd6a6566bac9d"},{url:"img/baiabaia.08a1d061.png",revision:"d516ceb6fd6e44c0268f31f077274094"},{url:"img/chihuacry.d9aa33d2.png",revision:"32a54351337960cdd0142f91ba391cca"},{url:"img/logo.2bb91c8d.png",revision:"ab10a6c66d4af16a27a00522f1ea23ec"},{url:"img/not_found_prices.8b4a3970.webp",revision:"421ff9713afb88c76447ccee0b170ce4"},{url:"img/rocket.de0c370c.gif",revision:"e6d25d0a5262b475fbe0feeb868c78ef"},{url:"img/success.14ee10ec.gif",revision:"6c38c27c03e502f14815d6992b9d28e1"},{url:"index.html",revision:"26819875e5d057077cd69c3dce582ac7"},{url:"js/10.4684bc1c.js",revision:"cb16981c65b84622f89b6476feda180f"},{url:"js/11.6b4aebb4.js",revision:"b48874f67bf2b4e3e67ae7819a5d08fa"},{url:"js/12.8005cb79.js",revision:"fee33ca13f76f49cb5d436d11737f481"},{url:"js/13.5cd4683c.js",revision:"9f5e07041424a6b24b4e79342f3f9ab4"},{url:"js/14.8646bf9b.js",revision:"ff33c8d6d2fc8043d93120fffa55bd86"},{url:"js/15.0da05923.js",revision:"32de0748e77f92616cb4cddb5fd2cea9"},{url:"js/16.261ebc96.js",revision:"802290f61cf192a923327a6f93dba492"},{url:"js/17.e881932a.js",revision:"5d9fc300138aad53ecf6bded4ff7421b"},{url:"js/18.e158c8aa.js",revision:"376a51e765065dfd157b91b75ec347b7"},{url:"js/19.1d7dff9f.js",revision:"47bb4bc3f0fd218cc3fbde16d4e8d394"},{url:"js/2.f0d694d4.js",revision:"17b9314612430c415f904383aef77c44"},{url:"js/20.0833b197.js",revision:"aeb92a52f62197e30984ab281fb2ca02"},{url:"js/21.9f26abe1.js",revision:"568922c8d6c4e0850f027750ba5b6219"},{url:"js/22.2c4957d4.js",revision:"3f19efb985bf589bce48482bad0f62e9"},{url:"js/23.83716d35.js",revision:"ed01ea761d124c84b2d6bc0ca24e61ed"},{url:"js/24.5854a156.js",revision:"310e7edc1d02423966ebf7568611a9a7"},{url:"js/25.3be128d9.js",revision:"6f4e4946ba065e7189ffaf3ed556aef0"},{url:"js/26.7089898d.js",revision:"cd557a571a9a3efca688e583f84ed4b7"},{url:"js/27.818bfccb.js",revision:"3c4430a0584af8e17884c0cbf2e1d5fc"},{url:"js/28.05159442.js",revision:"8f5eaa208e13f5270c18ca2d5dbf6699"},{url:"js/29.dc422c6b.js",revision:"8e8bc74403997d0ffbc6139f2aca8c98"},{url:"js/3.0b2eeeb1.js",revision:"ad4ee8777238cf76aa02d7ccd0b43165"},{url:"js/30.64f7ee84.js",revision:"260ee8737f5f023cad25255bd5eb71c6"},{url:"js/31.5c2eaf06.js",revision:"be8d5a7e4e8f230dfb72dea2210ca9a0"},{url:"js/32.3a7ec99f.js",revision:"45b66108c84b0f5d9bcab2d85a6b6272"},{url:"js/33.90bf3f74.js",revision:"d6b57744973284b538a62c007ed83ece"},{url:"js/34.78289723.js",revision:"f9d5349aed69b772e6fb247155abc9d7"},{url:"js/35.f1a5b0d9.js",revision:"2a85d16dd70a23fb4a624652ad9b0736"},{url:"js/36.b350aea6.js",revision:"f0ed85532c86f2a179fbd224a28379f4"},{url:"js/37.11837c2a.js",revision:"531ca17ff64d896f78f096003dbc2ddb"},{url:"js/38.23540167.js",revision:"9fe333842fb2f82e72eb3b3b0398a817"},{url:"js/39.71f3dec6.js",revision:"a9f115a18b3a5dd8cfda19ecbf279182"},{url:"js/5.247aed66.js",revision:"57cad48628f4edb2750ff07b7030b493"},{url:"js/6.e04e9b13.js",revision:"6afaa3743209a8f9ab493c76199d8116"},{url:"js/7.e2ddb903.js",revision:"b9269f1695fb927cc6c390a4234da0b8"},{url:"js/8.d6be6f3a.js",revision:"d8153d8eda60ec1a39a2596cdc9fecd4"},{url:"js/9.e8060af2.js",revision:"bf657bec93251937635ae8c9b96ab335"},{url:"js/app.ddbd7355.js",revision:"c53eaac258a75c7693e7245da0abd0bb"},{url:"js/chunk-common.bc4b86ab.js",revision:"b9c84bbf1d25243bed6d3c7efb171827"},{url:"manifest.json",revision:"e9d8d0d0a21510dbc421776fa1ad99db"},{url:"pdf/Montserrat-ExtraBold.ttf",revision:"19ba7aa52a78c3896558ac1c0a5fb4c7"},{url:"pdf/Montserrat-Regular.ttf",revision:"ee6539921d713482b8ccd4d0d23961bb"},{url:"pdf/Montserrat-SemiBold.ttf",revision:"c641dbee1d75892e4d88bdc31560c91b"},{url:"pdf/ParadroidMono-Light.ttf",revision:"d26272c551eff27de7bb7f2d324cdc6a"},{url:"pdf/img/STAR10.png",revision:"0c6e623108dec3469b10b313cda40757"},{url:"pdf/img/STAR10_v2.png",revision:"f79dc0f254d9f81b5c8df450c7e1412a"},{url:"pdf/img/STAR12.png",revision:"b6883d655e840341fa386e8c18f341f8"},{url:"pdf/img/STAR12_1.png",revision:"b8d8d3438e66f5bc96cab0f825fb9da6"},{url:"pdf/img/STAR12_2.png",revision:"f304afef10371ce8beafced67f5f302d"},{url:"pdf/img/banner.png",revision:"8ced6b30eeb37b5bc1d3a325ffae724e"},{url:"pdf/img/banner_1.png",revision:"426c117223047136976963d71353ea70"},{url:"pdf/img/banner_2.png",revision:"462cd88d06c139d9324e2fe1ff9d1af6"},{url:"pdf/img/circle.jpg",revision:"f0a71888ddbac982ddeea26670b26ac0"},{url:"pdf/img/circle.png",revision:"600602a5d75773398bae9894e1ca8e0c"},{url:"pdf/img/es.jpeg",revision:"06ed2e6df959e288adce0454e24377e3"},{url:"pdf/img/esfera.png",revision:"5b37ff6aeb5a6c5575673ef562f464b4"},{url:"pdf/img/not_found_prices.webp",revision:"421ff9713afb88c76447ccee0b170ce4"},{url:"pdf/img/wood.png",revision:"3841820cca03b4dce994065ebd2ba20f"},{url:"pdf/img/wood2.png",revision:"72004756e0696fbede59d48da0fcb75f"},{url:"pdf/logo_org.png",revision:"01a5b9d6d7030d84f8468d7149ad05d4"},{url:"pdf/rsi.png",revision:"422f73cbf3edc97a4147a0f19679fd24"},{url:"sounds/anexing.mp3",revision:"85ba590f5e368cc59e38c9542d0cf021"},{url:"sounds/creating.mp3",revision:"8a8b917c0093f1626079b8a28c530893"},{url:"sounds/done.mp3",revision:"e36a7515f6ad098a2a7b6c6e6c939ef4"},{url:"sounds/done.wav",revision:"feb29173be911eeaa2c1312491acc565"},{url:"sounds/download.mp3",revision:"aaea53e676837a9cf8770ea6e1920615"},{url:"sounds/download_label.mp3",revision:"a70c4654bf20b28d3e48d62073b47559"},{url:"sounds/duply.mp3",revision:"51968488112879c984dda6704bb7275c"},{url:"sounds/goal.mp3",revision:"448745d5273e7cc27bc9bac8920c3746"},{url:"sounds/moved.mp3",revision:"adf13fb1a986d568c8d453b4f2cc5c2d"},{url:"sounds/ntf_2.mp3",revision:"122b5e083e6397720b8739507b85f92b"},{url:"sounds/orderwait_new.mp3",revision:"fc88c3c8bafcf7d9d6120eaed6697795"},{url:"sounds/pop1.mp3",revision:"b7c19a69352c86e2c9f8c0beb80fdc18"},{url:"sounds/removed.mp3",revision:"dfc3d74dd948d66801d67bfb62a2ffc4"},{url:"sounds/waiting.mp3",revision:"6f1026d5070cdd85c4fdd58408d41827"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/service-worker\.js$/,/workbox-(.)*\.js$/]}))}));
