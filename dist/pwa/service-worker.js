if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let c=Promise.resolve();return a[e]||(c=new Promise(async c=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=c}else importScripts(e),c()})),c.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},c=(c,a)=>{Promise.all(c.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(c)};self.define=(c,s,f)=>{a[c]||(a[c]=Promise.resolve().then(()=>{let a={};const i={uri:location.origin+c.slice(1)};return Promise.all(s.map(c=>{switch(c){case"exports":return a;case"module":return i;default:return e(c)}})).then(e=>{const c=f(...e);return a.default||(a.default=c),a})}))}}define("./service-worker.js",["./workbox-a04dde82"],(function(e){"use strict";e.setCacheNameDetails({prefix:"vizapp"}),self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"css/10.77b13e1a.css",revision:"2c1f3101e7559525678432a71f7ecfae"},{url:"css/11.93e3a926.css",revision:"fca73a6d2ed8698b3b6d6b9e5eb16650"},{url:"css/12.93e3a926.css",revision:"fca73a6d2ed8698b3b6d6b9e5eb16650"},{url:"css/13.3e83f0e6.css",revision:"b8b87cee412ce3f3af03d79a321903d4"},{url:"css/14.076bad1d.css",revision:"0c5ac920e7083c9ad9dffc1741cd55c0"},{url:"css/15.24afb93a.css",revision:"f35d8332d669319b5c761b4657eeed1b"},{url:"css/16.7838362e.css",revision:"bdf1361de9112cc6fb2d54593f39050a"},{url:"css/17.5d2fe3f4.css",revision:"c2e339a1b13206ead4f0c2e3b8b9daa6"},{url:"css/18.bce878bf.css",revision:"7d552d642c9622965602f39eb33c849e"},{url:"css/19.b43534f5.css",revision:"11f91227f02153b8ceb0dc0876202f91"},{url:"css/2.e9635e38.css",revision:"1314ce45ecdf9b1cb694c6534e70ad2b"},{url:"css/20.30bd4534.css",revision:"1eeac8434dfe0fbae8913ccfc6bf86ee"},{url:"css/5.d22fe7f3.css",revision:"dec709278a56a3b254d057c3f4fc392e"},{url:"css/6.73c6aa02.css",revision:"068f85bb97f7607a9dc48b7fc3f35e22"},{url:"css/7.ba3a9ced.css",revision:"0b430ca47c89a0a805c26fd3ad420ac5"},{url:"css/8.fbff1b82.css",revision:"2a0cb9434da4a6d9e11e9d82424012de"},{url:"css/9.93e3a926.css",revision:"fca73a6d2ed8698b3b6d6b9e5eb16650"},{url:"css/app.34013a51.css",revision:"fa244f330e1020efff8b8cc1b0b42133"},{url:"css/chunk-common.c8070e15.css",revision:"8d258a2b2cb5cedae4203c15e0adf550"},{url:"css/vendor.aac6d277.css",revision:"d9db470a27bb3ec9a0e7d45ea7ede6c5"},{url:"favicon.ico",revision:"53bd8070d2bf171938945ad62a0d9c28"},{url:"fonts/Exo-Medium.c62d38a6.ttf",revision:"e0b3d3f90e5a48d3d39cc02ee4bf8ccd"},{url:"fonts/Exo-Regular.607fce0f.ttf",revision:"6e791eba0cf1288733c585acae26033b"},{url:"fonts/Exo-Thin.89d1899c.ttf",revision:"68aecd09d23ec6c5fea9b219ad65eaef"},{url:"fonts/KFOkCnqEu92Fr1MmgVxIIzQ.68bb21d0.woff",revision:"4aa2e69855e3b83110a251c47fdd05fc"},{url:"fonts/KFOlCnqEu92Fr1MmEU9fBBc-.48af7707.woff",revision:"40bcb2b8cc5ed94c4c21d06128e0e532"},{url:"fonts/KFOlCnqEu92Fr1MmSU5fBBc-.c2f7ab22.woff",revision:"ea60988be8d6faebb4bc2a55b1f76e22"},{url:"fonts/KFOlCnqEu92Fr1MmWUlfBBc-.77ecb942.woff",revision:"0774a8b7ca338dc1aba5a0ec8f2b9454"},{url:"fonts/KFOlCnqEu92Fr1MmYUtfBBc-.f5677eb2.woff",revision:"bcb7c7e2499a055f0e2f93203bdb282b"},{url:"fonts/KFOmCnqEu92Fr1Mu4mxM.f1e2a767.woff",revision:"d3907d0ccd03b1134c24d3bcaf05b698"},{url:"fonts/QuickRgl.109d09e5.ttf",revision:"6cbafd2cb6e973c96ade779edc39c62a"},{url:"fonts/fa-brands-400.2285773e.woff",revision:"1a575a4138e5f366474f0e7c5bd614a5"},{url:"fonts/fa-brands-400.d878b0a6.woff2",revision:"ed311c7a0ade9a75bb3ebf5a7670f31d"},{url:"fonts/fa-regular-400.7a333762.woff2",revision:"b91d376b8d7646d671cd820950d5f7f1"},{url:"fonts/fa-regular-400.bb58e57c.woff",revision:"d1d7e3b4c219fde0f7376c6facfd7149"},{url:"fonts/fa-solid-900.1551f4f6.woff2",revision:"d824df7eb2e268626a2dd9a6a741ac4e"},{url:"fonts/fa-solid-900.eeccf4f6.woff",revision:"d745348d289b149026921f197929a893"},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.4d73cb90.woff",revision:"3e1afe59fa075c9e04c436606b77f640"},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.c5371cfb.woff2",revision:"a4160421d2605545f69a4cd6cd642902"},{url:"fonts/uber.ffd4e7c1.otf",revision:"55170d1c9e41c752658980e5ea3f4283"},{url:"icons/apple-icon-120x120.png",revision:"148ed27ded611ea477fbbb686912eae7"},{url:"icons/apple-icon-152x152.png",revision:"3687e181d0321af088cde8c5f4d36855"},{url:"icons/apple-icon-167x167.png",revision:"540bae59d5ed8c9450674d551517d588"},{url:"icons/apple-icon-180x180.png",revision:"180774678e4010f1a7430a3a69a9271d"},{url:"icons/apple-launch-1125x2436.png",revision:"fefc63a9714619151f68ba85a411a72b"},{url:"icons/apple-launch-1170x2532.png",revision:"e88b8c7e726bb292f5d982a5f3191de2"},{url:"icons/apple-launch-1242x2208.png",revision:"ea00eb701cb6e467b5a2d2c1a1d71bd4"},{url:"icons/apple-launch-1242x2688.png",revision:"f5bf6894fd298d7203d2df18d6f237c6"},{url:"icons/apple-launch-1284x2778.png",revision:"b4076100b92cbe1975717f94b135a59e"},{url:"icons/apple-launch-1536x2048.png",revision:"477c5deee007a57e8754212984c0c96e"},{url:"icons/apple-launch-1620x2160.png",revision:"e6a82f47a8c4357ffa60d66e5697c715"},{url:"icons/apple-launch-1668x2224.png",revision:"c03a0018eb4301df904f3dea11370604"},{url:"icons/apple-launch-1668x2388.png",revision:"06d178e9e2a46f606ebd89bcab1b8358"},{url:"icons/apple-launch-2048x2732.png",revision:"fcef8bcdb538ddd185a1324612a43a1b"},{url:"icons/apple-launch-640x1136.png",revision:"1a137cbaffec596614db9548c4e9c761"},{url:"icons/apple-launch-750x1334.png",revision:"d6029ef0ee09b712f67a5578ae881ce8"},{url:"icons/apple-launch-828x1792.png",revision:"f086ec182b3e77fa5735eb02b28f7c83"},{url:"icons/favicon-128x128.png",revision:"945da0a2cd0254abb93189b866bc65d4"},{url:"icons/favicon-16x16.png",revision:"8299fa3c65ec2a7c3a06d4f598f9ac79"},{url:"icons/favicon-32x32.png",revision:"aa72746580073da94740ee3711bc574f"},{url:"icons/favicon-96x96.png",revision:"9b59a0188a29838151b5ab20a15a87be"},{url:"icons/icon-128x128.png",revision:"945da0a2cd0254abb93189b866bc65d4"},{url:"icons/icon-192x192.png",revision:"cf80f0db176f7ede550c2acb9cc7cade"},{url:"icons/icon-256x256.png",revision:"6bb41654b0eddf84d931a7d48dd5e6c7"},{url:"icons/icon-384x384.png",revision:"1eeafe5d311a42a6fdce2a1094e97e05"},{url:"icons/icon-512x512.png",revision:"85bc2f407b22cd44e6983925bab09e17"},{url:"icons/ms-icon-144x144.png",revision:"f4eafe3ed24c855ca3e3286e7756d62a"},{url:"icons/safari-pinned-tab.svg",revision:"298fe38a19cf6b63ffcb34f8503009ca"},{url:"img/_boxprod.7a251309.png",revision:"526844026782174b5866398bdc932963"},{url:"img/_defprod_.2073f27f.png",revision:"ff257fab6a22d76f980cd6a6566bac9d"},{url:"img/_usdeftchris.a92e8e85.png",revision:"fbd7acfa6e1f0defc54fe7b8df379d1e"},{url:"img/baiabaia.08a1d061.png",revision:"d516ceb6fd6e44c0268f31f077274094"},{url:"img/chihuacry.d9aa33d2.png",revision:"32a54351337960cdd0142f91ba391cca"},{url:"img/iconbag.37d8e9c5.png",revision:"1ca8a60b1cb28f00786cca774d131ecd"},{url:"img/logo.2bb91c8d.png",revision:"ab10a6c66d4af16a27a00522f1ea23ec"},{url:"img/not_found_prices.8b4a3970.webp",revision:"421ff9713afb88c76447ccee0b170ce4"},{url:"img/rocket.de0c370c.gif",revision:"e6d25d0a5262b475fbe0feeb868c78ef"},{url:"img/success.14ee10ec.gif",revision:"6c38c27c03e502f14815d6992b9d28e1"},{url:"img/user1.c84b8fcf.png",revision:"44f7030746650e914aff8b8d96597e62"},{url:"index.html",revision:"f4b41baeb661f18bfd55e146df8a9ed5"},{url:"js/10.73984729.js",revision:"3f838a19600da046ec5bb5a92d13aa30"},{url:"js/11.b44eed1b.js",revision:"fa1b89ae171414df4a83c8513059b41d"},{url:"js/12.d4b6de4e.js",revision:"e1b92fb64c13220e2cb8f76b9e015d97"},{url:"js/13.a7a90327.js",revision:"19b7ac91424450866f1aae02dc79efb5"},{url:"js/14.462ca08f.js",revision:"c35e6d9c6e54ec30e019a3f58c910944"},{url:"js/15.3fbf17ec.js",revision:"6d48e094b6732fd8e541452179b0be3d"},{url:"js/16.e7be449f.js",revision:"c64b954fd2b40306884fb5f8593f7710"},{url:"js/17.5a09b192.js",revision:"90459c78c26bf40cbc90521093182884"},{url:"js/18.057fd1f9.js",revision:"dd00dbae82ec2555b1a486472c8f1951"},{url:"js/19.141d1bf0.js",revision:"1268331c3c0a1528a0cc39482bb986e3"},{url:"js/2.55a68436.js",revision:"7d640e08950548d4a4274a1e5c4d97c9"},{url:"js/20.175261f0.js",revision:"dde1a63277aa6ba24f9431a9613168d2"},{url:"js/21.300aa6a1.js",revision:"82e16c19d12ab509d25148de50622685"},{url:"js/22.64b25e84.js",revision:"e3c9a1e41dcf2360eca5a9dcdd89859a"},{url:"js/23.bde126f8.js",revision:"7158e51b7551a0f18892a834afa1adb9"},{url:"js/24.03963a31.js",revision:"a4d880c232865dab8b3e5fb80f0e8a6e"},{url:"js/25.5b7f6929.js",revision:"2c4951416c55477c7a00a5faea57d4bd"},{url:"js/26.c8907768.js",revision:"e612324d33915b2ffbc53a1116fab8f0"},{url:"js/27.2ddd2e76.js",revision:"189ce1a0b9a84efb34eed080685c6d82"},{url:"js/28.06acc17b.js",revision:"0e075b9d474e3fe1ae4627fe243c7e4c"},{url:"js/29.7466a8cc.js",revision:"c6f3fe087c3953bdd71b96e57b942db5"},{url:"js/3.706f487c.js",revision:"7c89d501bbbc323a2824c0e7ce2e4a84"},{url:"js/30.79dc080d.js",revision:"16e12f427e68dab4c5a328c746bfb7de"},{url:"js/31.e1b303b6.js",revision:"62ca8f1717021528f167f58de488da47"},{url:"js/32.e33c2f2b.js",revision:"7888978930c5930ca1489e2568fc50b7"},{url:"js/33.401182ec.js",revision:"b641602dafaa14c39b014fb4b8518044"},{url:"js/34.08730c67.js",revision:"fdf438cc871a1334f289401407c1c785"},{url:"js/35.fa51c397.js",revision:"054265ac6aac5b56e5880fe15d80ab29"},{url:"js/36.9c38a57f.js",revision:"e6a28f27c281cabaac4b20dc15f18b7d"},{url:"js/37.32a325a8.js",revision:"16a2fd4e104422980e2662d921283368"},{url:"js/38.283f456d.js",revision:"83bd563200ebfb886f4cbb921cef8e75"},{url:"js/39.019eab6f.js",revision:"85352f3208d94e00b99ecea64e76b2d4"},{url:"js/5.05bb5720.js",revision:"3f3245c4ae64a7cfc6f21ac47b90f463"},{url:"js/6.6df3e879.js",revision:"0d84c231d6fd2b135836e993ebd826f0"},{url:"js/7.d88dbee3.js",revision:"caee276fdb3eac10b2cb2ced24df900e"},{url:"js/8.a0e62c55.js",revision:"27967a5b1249f71af49931a6b011ba67"},{url:"js/9.5015a2ac.js",revision:"6ab64849c80ce3e09bb897c9e483a0ca"},{url:"js/app.5d88d0bb.js",revision:"047aaf6d642d0ad5aea4230abb335275"},{url:"js/chunk-common.f5546eda.js",revision:"16d38f399f7a0a6e76f896d9b7cf21a0"},{url:"manifest.json",revision:"e9d8d0d0a21510dbc421776fa1ad99db"},{url:"pdf/Montserrat-ExtraBold.ttf",revision:"19ba7aa52a78c3896558ac1c0a5fb4c7"},{url:"pdf/Montserrat-Regular.ttf",revision:"ee6539921d713482b8ccd4d0d23961bb"},{url:"pdf/Montserrat-SemiBold.ttf",revision:"c641dbee1d75892e4d88bdc31560c91b"},{url:"pdf/ParadroidMono-Light.ttf",revision:"d26272c551eff27de7bb7f2d324cdc6a"},{url:"pdf/img/STAR10.png",revision:"0c6e623108dec3469b10b313cda40757"},{url:"pdf/img/STAR10_v2.png",revision:"f79dc0f254d9f81b5c8df450c7e1412a"},{url:"pdf/img/STAR12.png",revision:"b6883d655e840341fa386e8c18f341f8"},{url:"pdf/img/STAR12_1.png",revision:"b8d8d3438e66f5bc96cab0f825fb9da6"},{url:"pdf/img/STAR12_2.png",revision:"f304afef10371ce8beafced67f5f302d"},{url:"pdf/img/banner.png",revision:"8ced6b30eeb37b5bc1d3a325ffae724e"},{url:"pdf/img/banner_1.png",revision:"426c117223047136976963d71353ea70"},{url:"pdf/img/banner_2.png",revision:"462cd88d06c139d9324e2fe1ff9d1af6"},{url:"pdf/img/circle.jpg",revision:"f0a71888ddbac982ddeea26670b26ac0"},{url:"pdf/img/circle.png",revision:"600602a5d75773398bae9894e1ca8e0c"},{url:"pdf/img/es.jpeg",revision:"06ed2e6df959e288adce0454e24377e3"},{url:"pdf/img/esfera.png",revision:"5b37ff6aeb5a6c5575673ef562f464b4"},{url:"pdf/img/not_found_prices.webp",revision:"421ff9713afb88c76447ccee0b170ce4"},{url:"pdf/img/wood.png",revision:"3841820cca03b4dce994065ebd2ba20f"},{url:"pdf/img/wood2.png",revision:"72004756e0696fbede59d48da0fcb75f"},{url:"pdf/logo_org.png",revision:"01a5b9d6d7030d84f8468d7149ad05d4"},{url:"pdf/rsi.png",revision:"422f73cbf3edc97a4147a0f19679fd24"},{url:"serie.png",revision:"abe81ec505a8bbfd2b17638544cf9d07"},{url:"sounds/anexing.mp3",revision:"85ba590f5e368cc59e38c9542d0cf021"},{url:"sounds/creating.mp3",revision:"8a8b917c0093f1626079b8a28c530893"},{url:"sounds/done.mp3",revision:"e36a7515f6ad098a2a7b6c6e6c939ef4"},{url:"sounds/done.wav",revision:"feb29173be911eeaa2c1312491acc565"},{url:"sounds/download.mp3",revision:"aaea53e676837a9cf8770ea6e1920615"},{url:"sounds/download_label.mp3",revision:"a70c4654bf20b28d3e48d62073b47559"},{url:"sounds/duply.mp3",revision:"51968488112879c984dda6704bb7275c"},{url:"sounds/goal.mp3",revision:"448745d5273e7cc27bc9bac8920c3746"},{url:"sounds/moved.mp3",revision:"adf13fb1a986d568c8d453b4f2cc5c2d"},{url:"sounds/ntf_2.mp3",revision:"122b5e083e6397720b8739507b85f92b"},{url:"sounds/orderwait_new.mp3",revision:"fc88c3c8bafcf7d9d6120eaed6697795"},{url:"sounds/pop1.mp3",revision:"b7c19a69352c86e2c9f8c0beb80fdc18"},{url:"sounds/removed.mp3",revision:"dfc3d74dd948d66801d67bfb62a2ffc4"},{url:"sounds/success01.mp3",revision:"0c17d0808a992fcf6c465542c04bba69"},{url:"sounds/waiting.mp3",revision:"6f1026d5070cdd85c4fdd58408d41827"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/service-worker\.js$/,/workbox-(.)*\.js$/]}))}));
