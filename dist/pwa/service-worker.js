if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let c=Promise.resolve();return f[e]||(c=new Promise(async c=>{if("document"in self){const f=document.createElement("script");f.src=e,document.head.appendChild(f),f.onload=c}else importScripts(e),c()})),c.then(()=>{if(!f[e])throw new Error(`Module ${e} didn’t register its module`);return f[e]})},c=(c,f)=>{Promise.all(c.map(e)).then(e=>f(1===e.length?e[0]:e))},f={require:Promise.resolve(c)};self.define=(c,s,i)=>{f[c]||(f[c]=Promise.resolve().then(()=>{let f={};const d={uri:location.origin+c.slice(1)};return Promise.all(s.map(c=>{switch(c){case"exports":return f;case"module":return d;default:return e(c)}})).then(e=>{const c=i(...e);return f.default||(f.default=c),f})}))}}define("./service-worker.js",["./workbox-e170c028"],(function(e){"use strict";e.setCacheNameDetails({prefix:"vizapp"}),self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"css/10.77b13e1a.css",revision:"2c1f3101e7559525678432a71f7ecfae"},{url:"css/11.93e3a926.css",revision:"fca73a6d2ed8698b3b6d6b9e5eb16650"},{url:"css/12.93e3a926.css",revision:"fca73a6d2ed8698b3b6d6b9e5eb16650"},{url:"css/13.3e83f0e6.css",revision:"b8b87cee412ce3f3af03d79a321903d4"},{url:"css/14.c9b2fc20.css",revision:"2bd83d0c5e1bdaae35c1c58f9b378be6"},{url:"css/15.24afb93a.css",revision:"f35d8332d669319b5c761b4657eeed1b"},{url:"css/16.7838362e.css",revision:"bdf1361de9112cc6fb2d54593f39050a"},{url:"css/17.539aecb4.css",revision:"42639ccbb5926eb8276732a687a512e9"},{url:"css/18.bce878bf.css",revision:"7d552d642c9622965602f39eb33c849e"},{url:"css/19.b43534f5.css",revision:"11f91227f02153b8ceb0dc0876202f91"},{url:"css/2.89a7d40c.css",revision:"192566740d2e921ab9e2f5f78715757f"},{url:"css/20.30bd4534.css",revision:"1eeac8434dfe0fbae8913ccfc6bf86ee"},{url:"css/5.b87d5112.css",revision:"f5f376c99eed0357507047cca12fe909"},{url:"css/6.91b98b70.css",revision:"0bbe586291e6a8982e3c57c4a57a0b26"},{url:"css/7.74f9154a.css",revision:"5994f4e348e9dfd71a5bde1db0a0d89b"},{url:"css/8.fbff1b82.css",revision:"2a0cb9434da4a6d9e11e9d82424012de"},{url:"css/9.93e3a926.css",revision:"fca73a6d2ed8698b3b6d6b9e5eb16650"},{url:"css/app.34013a51.css",revision:"fa244f330e1020efff8b8cc1b0b42133"},{url:"css/chunk-common.f6009c27.css",revision:"e118dc8f72ced33ac39484a207b9548d"},{url:"css/vendor.03094ac1.css",revision:"2a7dc84a7974023359c32e43565d9fa4"},{url:"favicon.ico",revision:"53bd8070d2bf171938945ad62a0d9c28"},{url:"fonts/Exo-Medium.c62d38a6.ttf",revision:"e0b3d3f90e5a48d3d39cc02ee4bf8ccd"},{url:"fonts/Exo-Regular.607fce0f.ttf",revision:"6e791eba0cf1288733c585acae26033b"},{url:"fonts/Exo-Thin.89d1899c.ttf",revision:"68aecd09d23ec6c5fea9b219ad65eaef"},{url:"fonts/KFOkCnqEu92Fr1MmgVxIIzQ.68bb21d0.woff",revision:"4aa2e69855e3b83110a251c47fdd05fc"},{url:"fonts/KFOlCnqEu92Fr1MmEU9fBBc-.48af7707.woff",revision:"40bcb2b8cc5ed94c4c21d06128e0e532"},{url:"fonts/KFOlCnqEu92Fr1MmSU5fBBc-.c2f7ab22.woff",revision:"ea60988be8d6faebb4bc2a55b1f76e22"},{url:"fonts/KFOlCnqEu92Fr1MmWUlfBBc-.77ecb942.woff",revision:"0774a8b7ca338dc1aba5a0ec8f2b9454"},{url:"fonts/KFOlCnqEu92Fr1MmYUtfBBc-.f5677eb2.woff",revision:"bcb7c7e2499a055f0e2f93203bdb282b"},{url:"fonts/KFOmCnqEu92Fr1Mu4mxM.f1e2a767.woff",revision:"d3907d0ccd03b1134c24d3bcaf05b698"},{url:"fonts/QuickRgl.109d09e5.ttf",revision:"6cbafd2cb6e973c96ade779edc39c62a"},{url:"fonts/fa-brands-400.2285773e.woff",revision:"1a575a4138e5f366474f0e7c5bd614a5"},{url:"fonts/fa-brands-400.d878b0a6.woff2",revision:"ed311c7a0ade9a75bb3ebf5a7670f31d"},{url:"fonts/fa-regular-400.7a333762.woff2",revision:"b91d376b8d7646d671cd820950d5f7f1"},{url:"fonts/fa-regular-400.bb58e57c.woff",revision:"d1d7e3b4c219fde0f7376c6facfd7149"},{url:"fonts/fa-solid-900.1551f4f6.woff2",revision:"d824df7eb2e268626a2dd9a6a741ac4e"},{url:"fonts/fa-solid-900.eeccf4f6.woff",revision:"d745348d289b149026921f197929a893"},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.99f5f787.woff",revision:"e7ee6642f9771137444ed489b12f99cc"},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.c08197a9.woff2",revision:"4525df77e6f46e1ed85e150ea763d185"},{url:"fonts/uber.ffd4e7c1.otf",revision:"55170d1c9e41c752658980e5ea3f4283"},{url:"icons/apple-icon-120x120.png",revision:"148ed27ded611ea477fbbb686912eae7"},{url:"icons/apple-icon-152x152.png",revision:"3687e181d0321af088cde8c5f4d36855"},{url:"icons/apple-icon-167x167.png",revision:"540bae59d5ed8c9450674d551517d588"},{url:"icons/apple-icon-180x180.png",revision:"180774678e4010f1a7430a3a69a9271d"},{url:"icons/apple-launch-1125x2436.png",revision:"fefc63a9714619151f68ba85a411a72b"},{url:"icons/apple-launch-1170x2532.png",revision:"e88b8c7e726bb292f5d982a5f3191de2"},{url:"icons/apple-launch-1242x2208.png",revision:"ea00eb701cb6e467b5a2d2c1a1d71bd4"},{url:"icons/apple-launch-1242x2688.png",revision:"f5bf6894fd298d7203d2df18d6f237c6"},{url:"icons/apple-launch-1284x2778.png",revision:"b4076100b92cbe1975717f94b135a59e"},{url:"icons/apple-launch-1536x2048.png",revision:"477c5deee007a57e8754212984c0c96e"},{url:"icons/apple-launch-1620x2160.png",revision:"e6a82f47a8c4357ffa60d66e5697c715"},{url:"icons/apple-launch-1668x2224.png",revision:"c03a0018eb4301df904f3dea11370604"},{url:"icons/apple-launch-1668x2388.png",revision:"06d178e9e2a46f606ebd89bcab1b8358"},{url:"icons/apple-launch-2048x2732.png",revision:"fcef8bcdb538ddd185a1324612a43a1b"},{url:"icons/apple-launch-640x1136.png",revision:"1a137cbaffec596614db9548c4e9c761"},{url:"icons/apple-launch-750x1334.png",revision:"d6029ef0ee09b712f67a5578ae881ce8"},{url:"icons/apple-launch-828x1792.png",revision:"f086ec182b3e77fa5735eb02b28f7c83"},{url:"icons/favicon-128x128.png",revision:"945da0a2cd0254abb93189b866bc65d4"},{url:"icons/favicon-16x16.png",revision:"8299fa3c65ec2a7c3a06d4f598f9ac79"},{url:"icons/favicon-32x32.png",revision:"aa72746580073da94740ee3711bc574f"},{url:"icons/favicon-96x96.png",revision:"9b59a0188a29838151b5ab20a15a87be"},{url:"icons/icon-128x128.png",revision:"945da0a2cd0254abb93189b866bc65d4"},{url:"icons/icon-192x192.png",revision:"cf80f0db176f7ede550c2acb9cc7cade"},{url:"icons/icon-256x256.png",revision:"6bb41654b0eddf84d931a7d48dd5e6c7"},{url:"icons/icon-384x384.png",revision:"1eeafe5d311a42a6fdce2a1094e97e05"},{url:"icons/icon-512x512.png",revision:"85bc2f407b22cd44e6983925bab09e17"},{url:"icons/ms-icon-144x144.png",revision:"f4eafe3ed24c855ca3e3286e7756d62a"},{url:"icons/safari-pinned-tab.svg",revision:"298fe38a19cf6b63ffcb34f8503009ca"},{url:"img/_boxprod.7a251309.png",revision:"526844026782174b5866398bdc932963"},{url:"img/_defprod_.2073f27f.png",revision:"ff257fab6a22d76f980cd6a6566bac9d"},{url:"img/_usdeftchris.a92e8e85.png",revision:"fbd7acfa6e1f0defc54fe7b8df379d1e"},{url:"img/baiabaia.08a1d061.png",revision:"d516ceb6fd6e44c0268f31f077274094"},{url:"img/chihuacry.d9aa33d2.png",revision:"32a54351337960cdd0142f91ba391cca"},{url:"img/chris1.6fed09c8.png",revision:"e45273c66e08d57e194c192e68ec2fff"},{url:"img/logo.2bb91c8d.png",revision:"ab10a6c66d4af16a27a00522f1ea23ec"},{url:"img/not_found_prices.8b4a3970.webp",revision:"421ff9713afb88c76447ccee0b170ce4"},{url:"img/rocket.de0c370c.gif",revision:"e6d25d0a5262b475fbe0feeb868c78ef"},{url:"img/success.14ee10ec.gif",revision:"6c38c27c03e502f14815d6992b9d28e1"},{url:"img/user1.c84b8fcf.png",revision:"44f7030746650e914aff8b8d96597e62"},{url:"index.html",revision:"96780cb0ddcd5dbcdfe4cad00a3f6eb3"},{url:"js/10.73ce1e5c.js",revision:"688b994e010d3cf9aeb853087888f838"},{url:"js/11.abb55e2d.js",revision:"438d8d5f9189ac326fb8b98808f9c098"},{url:"js/12.8aa821f8.js",revision:"e1b92fb64c13220e2cb8f76b9e015d97"},{url:"js/13.ad385c48.js",revision:"11f06d044a5c877398e32dd59772894e"},{url:"js/14.0e4bfe82.js",revision:"821e67752adea84273df9eda74597386"},{url:"js/15.206351fc.js",revision:"36e72e9039d2a86b6d4d58f0ea0fed4f"},{url:"js/16.48d3c475.js",revision:"56ca5b4dced9f3f9fd51a9c00efde537"},{url:"js/17.68ae0cae.js",revision:"f9e63a7cfca7ca62638fda21b9266a41"},{url:"js/18.764a6b0e.js",revision:"062f04a65c93e431528938f0b67f3ccc"},{url:"js/19.12fe5482.js",revision:"d6caf7416783f8d54a394b53346007da"},{url:"js/2.29f1dbd3.js",revision:"dd29eb8cf8bc668fcc5817f00fd55186"},{url:"js/20.405b9dcf.js",revision:"006fad4c726445f6d5c3865cb3887207"},{url:"js/21.026257b1.js",revision:"bb04294b17661f0f69ec135f1423d1c0"},{url:"js/22.7c203116.js",revision:"d7bfda6984da1c151f3ebbda5a6f418a"},{url:"js/23.55ee91ca.js",revision:"7158e51b7551a0f18892a834afa1adb9"},{url:"js/24.a223c6ab.js",revision:"a4d880c232865dab8b3e5fb80f0e8a6e"},{url:"js/25.8176edb6.js",revision:"2c4951416c55477c7a00a5faea57d4bd"},{url:"js/26.a135f6a7.js",revision:"e612324d33915b2ffbc53a1116fab8f0"},{url:"js/27.e4b00f6c.js",revision:"3293b78f841fab6beb28cd7d224f2610"},{url:"js/28.aa64468d.js",revision:"0e075b9d474e3fe1ae4627fe243c7e4c"},{url:"js/29.f926f34c.js",revision:"f9f45cfafbdfe9fbdccb2d5aa2d76d18"},{url:"js/3.5e23e39e.js",revision:"7c89d501bbbc323a2824c0e7ce2e4a84"},{url:"js/30.bc9bd7ae.js",revision:"d20328e21718c786d74ee0d1b1cfa845"},{url:"js/31.c2053d04.js",revision:"62ca8f1717021528f167f58de488da47"},{url:"js/32.8f524b20.js",revision:"c44a03f8df2f058fa3e24ca4dfa780fc"},{url:"js/33.09642891.js",revision:"8cc7c159a23453abdb311edff1b5b000"},{url:"js/34.2258b8ff.js",revision:"2dd37ccef9bc5049ee46236accde5beb"},{url:"js/35.cf9d1d16.js",revision:"68b4c114fa24648faf3953d579c1a556"},{url:"js/36.60d9f081.js",revision:"faa8b794290fb1b4b622e81e974b35e8"},{url:"js/37.6d502f5f.js",revision:"1106aae277a70b28ca2f51f507482728"},{url:"js/38.c5c6d008.js",revision:"c7612a333368c9087b4b3cbdfc4b61d0"},{url:"js/39.864fa2e7.js",revision:"3753cff6049851575bb028a3c10ca257"},{url:"js/5.989d63cb.js",revision:"d3d5a71b052bd6904eb48a4c8cc3caf7"},{url:"js/6.156384da.js",revision:"118593d82cb57c6e3520882b9eb319d2"},{url:"js/7.e8236caa.js",revision:"5bc42445b106a18bcef21dd247de0de1"},{url:"js/8.7e103322.js",revision:"17d1e1e46e267a50be3234382bfabe2c"},{url:"js/9.5c8d6b18.js",revision:"6ab64849c80ce3e09bb897c9e483a0ca"},{url:"js/app.9e069748.js",revision:"8cec8e4b82e7a9034aa224beb3e9d1e6"},{url:"js/chunk-common.f1d811b5.js",revision:"4be1651f0c835c64725ef6dc7a18ee62"},{url:"manifest.json",revision:"e9d8d0d0a21510dbc421776fa1ad99db"},{url:"pdf/Montserrat-ExtraBold.ttf",revision:"19ba7aa52a78c3896558ac1c0a5fb4c7"},{url:"pdf/Montserrat-Regular.ttf",revision:"ee6539921d713482b8ccd4d0d23961bb"},{url:"pdf/Montserrat-SemiBold.ttf",revision:"c641dbee1d75892e4d88bdc31560c91b"},{url:"pdf/ParadroidMono-Light.ttf",revision:"d26272c551eff27de7bb7f2d324cdc6a"},{url:"pdf/img/STAR10.png",revision:"0c6e623108dec3469b10b313cda40757"},{url:"pdf/img/STAR10_v2.png",revision:"f79dc0f254d9f81b5c8df450c7e1412a"},{url:"pdf/img/STAR12.png",revision:"b6883d655e840341fa386e8c18f341f8"},{url:"pdf/img/STAR12_1.png",revision:"b8d8d3438e66f5bc96cab0f825fb9da6"},{url:"pdf/img/STAR12_2.png",revision:"f304afef10371ce8beafced67f5f302d"},{url:"pdf/img/banner.png",revision:"8ced6b30eeb37b5bc1d3a325ffae724e"},{url:"pdf/img/banner_1.png",revision:"426c117223047136976963d71353ea70"},{url:"pdf/img/banner_2.png",revision:"462cd88d06c139d9324e2fe1ff9d1af6"},{url:"pdf/img/circle.jpg",revision:"f0a71888ddbac982ddeea26670b26ac0"},{url:"pdf/img/circle.png",revision:"600602a5d75773398bae9894e1ca8e0c"},{url:"pdf/img/es.jpeg",revision:"06ed2e6df959e288adce0454e24377e3"},{url:"pdf/img/esfera.png",revision:"5b37ff6aeb5a6c5575673ef562f464b4"},{url:"pdf/img/not_found_prices.webp",revision:"421ff9713afb88c76447ccee0b170ce4"},{url:"pdf/img/wood.png",revision:"3841820cca03b4dce994065ebd2ba20f"},{url:"pdf/img/wood2.png",revision:"72004756e0696fbede59d48da0fcb75f"},{url:"pdf/logo_org.png",revision:"01a5b9d6d7030d84f8468d7149ad05d4"},{url:"pdf/rsi.png",revision:"422f73cbf3edc97a4147a0f19679fd24"},{url:"serie.png",revision:"abe81ec505a8bbfd2b17638544cf9d07"},{url:"sounds/anexing.mp3",revision:"85ba590f5e368cc59e38c9542d0cf021"},{url:"sounds/creating.mp3",revision:"8a8b917c0093f1626079b8a28c530893"},{url:"sounds/done.mp3",revision:"e36a7515f6ad098a2a7b6c6e6c939ef4"},{url:"sounds/done.wav",revision:"feb29173be911eeaa2c1312491acc565"},{url:"sounds/download.mp3",revision:"aaea53e676837a9cf8770ea6e1920615"},{url:"sounds/download_label.mp3",revision:"a70c4654bf20b28d3e48d62073b47559"},{url:"sounds/duply.mp3",revision:"51968488112879c984dda6704bb7275c"},{url:"sounds/goal.mp3",revision:"448745d5273e7cc27bc9bac8920c3746"},{url:"sounds/moved.mp3",revision:"adf13fb1a986d568c8d453b4f2cc5c2d"},{url:"sounds/ntf_2.mp3",revision:"122b5e083e6397720b8739507b85f92b"},{url:"sounds/orderwait_new.mp3",revision:"fc88c3c8bafcf7d9d6120eaed6697795"},{url:"sounds/pop1.mp3",revision:"b7c19a69352c86e2c9f8c0beb80fdc18"},{url:"sounds/removed.mp3",revision:"dfc3d74dd948d66801d67bfb62a2ffc4"},{url:"sounds/success01.mp3",revision:"0c17d0808a992fcf6c465542c04bba69"},{url:"sounds/waiting.mp3",revision:"6f1026d5070cdd85c4fdd58408d41827"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/service-worker\.js$/,/workbox-(.)*\.js$/]}))}));
