(function(e){function t(t){for(var o,r,d=t[0],s=t[1],c=t[2],u=0,l=[];u<d.length;u++)r=d[u],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&l.push(a[r][0]),a[r]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);f&&f(t);while(l.length)l.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,r=1;r<n.length;r++){var d=n[r];0!==a[d]&&(o=!1)}o&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},r={4:0},a={4:0},i=[];function d(e){return s.p+"js/"+({1:"chunk-common"}[e]||e)+"."+{1:"f9620bfb",2:"ff524fd0",3:"0b2eeeb1",5:"fc9bc892",6:"dc39b918",7:"8a74b251",8:"c667ecd8",9:"6290d5dd",10:"1ef17f55",11:"00c334bb",12:"985bce94",13:"58faf65a",14:"15f00b96",15:"6df30dd6",16:"5c2876ab",17:"69adfbdf",18:"81bd0845",19:"1d7e8859",20:"2fff240e",21:"f443f1cd",22:"a5407100",23:"d03615c5",24:"bcb12271",25:"f397664a",26:"d177a14b",27:"0cc385b7",28:"70d73e9c",29:"c7d769da",30:"b069607d",31:"55a45547",32:"007820b8",33:"86da30da",34:"78289723",35:"f1a5b0d9",36:"b350aea6",37:"11837c2a",38:"a8bd3e07",39:"71f3dec6"}[e]+".js"}function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={1:1,2:1,5:1,6:1,7:1,8:1,9:1,10:1,11:1,12:1,13:1,14:1,15:1,16:1,17:1,18:1,19:1,20:1,21:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({1:"chunk-common"}[e]||e)+"."+{1:"98b482fa",2:"68ac957a",3:"31d6cfe0",5:"7f4b67ee",6:"fbff1b82",7:"93e3a926",8:"6af971ee",9:"93e3a926",10:"93e3a926",11:"d19d84ea",12:"83f904c6",13:"a8f0e5d8",14:"0f71c055",15:"c5bd21a4",16:"0634d66b",17:"a323badb",18:"5145fb7c",19:"1c1a8f3c",20:"b43534f5",21:"30bd4534",22:"31d6cfe0",23:"31d6cfe0",24:"31d6cfe0",25:"31d6cfe0",26:"31d6cfe0",27:"31d6cfe0",28:"31d6cfe0",29:"31d6cfe0",30:"31d6cfe0",31:"31d6cfe0",32:"31d6cfe0",33:"31d6cfe0",34:"31d6cfe0",35:"31d6cfe0",36:"31d6cfe0",37:"31d6cfe0",38:"31d6cfe0",39:"31d6cfe0"}[e]+".css",a=s.p+o,i=document.getElementsByTagName("link"),d=0;d<i.length;d++){var c=i[d],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===o||u===a))return t()}var l=document.getElementsByTagName("style");for(d=0;d<l.length;d++){c=l[d],u=c.getAttribute("data-href");if(u===o||u===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var o=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete r[e],f.parentNode.removeChild(f),n(i)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){r[e]=0})));var o=a[e];if(0!==o)if(o)t.push(o[2]);else{var i=new Promise((function(t,n){o=a[e]=[t,n]}));t.push(o[2]=i);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=d(e);var l=new Error;c=function(t){u.onerror=u.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",l.name="ChunkLoadError",l.type=o,l.request=r,n[1](l)}a[e]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(t)},s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var f=u;i.push([0,0]),n()})({0:function(e,t,n){e.exports=n("2f39")},"286c":function(e,t){},"2f39":function(e,t,n){"use strict";n.r(t);var o={};n.r(o),n.d(o,"workpoints_size",(function(){return E})),n.d(o,"toolbarModule",(function(){return L})),n.d(o,"profile",(function(){return M})),n.d(o,"moduleauths",(function(){return $})),n.d(o,"workin",(function(){return N}));var r={};n.r(r),n.d(r,"setsession",(function(){return J})),n.d(r,"unsetsession",(function(){return z})),n.d(r,"setworkpoint",(function(){return T})),n.d(r,"join",(function(){return q}));var a={};n.r(a),n.d(a,"initAddSection",(function(){return V})),n.d(a,"cancelAddSection",(function(){return H})),n.d(a,"addChildren",(function(){return U})),n.d(a,"set",(function(){return W})),n.d(a,"cleanModule",(function(){return G}));var i={};n.r(i),n.d(i,"showToolbarModule",(function(){return Y})),n.d(i,"hideToolbarModule",(function(){return ee})),n.d(i,"toggleToolbarModule",(function(){return te}));var d={};n.r(d),n.d(d,"OrdersWarehouse",(function(){return ae})),n.d(d,"OrdersCheckIn",(function(){return ie})),n.d(d,"OrdersCheckout",(function(){return de})),n.d(d,"process",(function(){return se})),n.d(d,"printers",(function(){return ce})),n.d(d,"printersSale",(function(){return ue})),n.d(d,"printersWarehouse",(function(){return le})),n.d(d,"agents_orders",(function(){return fe})),n.d(d,"cashdesks",(function(){return pe})),n.d(d,"keepProcess",(function(){return he}));var s={};n.r(s),n.d(s,"startState",(function(){return me})),n.d(s,"setState",(function(){return be})),n.d(s,"setCashState",(function(){return ge})),n.d(s,"newOrder",(function(){return we})),n.d(s,"updateState",(function(){return ve})),n.d(s,"setHeaderTitle",(function(){return ke})),n.d(s,"setHeaderState",(function(){return ye})),n.d(s,"setFooterState",(function(){return Se})),n.d(s,"setViewSection",(function(){return Pe})),n.d(s,"setStatusSktUser",(function(){return Ae})),n.d(s,"orderAOU",(function(){return xe}));var c={};n.r(c),n.d(c,"sounds",(function(){return Ce}));var u={};n.r(u),n.d(u,"getCopies",(function(){return $e}));var l={};n.r(l),n.d(l,"setHeaderTitle",(function(){return Ne})),n.d(l,"setHeaderState",(function(){return Je})),n.d(l,"setFooterState",(function(){return ze})),n.d(l,"addLabels",(function(){return Te})),n.d(l,"addCopies",(function(){return qe}));var f={};n.r(f),n.d(f,"ordersRequisitions",(function(){return Re})),n.d(f,"getOrders",(function(){return Ve})),n.d(f,"getStates",(function(){return He})),n.d(f,"ordersCheckIn",(function(){return Ue})),n.d(f,"printers",(function(){return We})),n.d(f,"printersSale",(function(){return Ge})),n.d(f,"printersRequisition",(function(){return Ke}));var p={};n.r(p),n.d(p,"startState",(function(){return Qe})),n.d(p,"newOrder",(function(){return Xe})),n.d(p,"printed",(function(){return Ze})),n.d(p,"updateState",(function(){return Ye})),n.d(p,"getCleanDuplicates",(function(){return et})),n.d(p,"getAllCleanDuplicates",(function(){return tt})),n.d(p,"setHeaderTitle",(function(){return nt})),n.d(p,"setHeaderState",(function(){return ot})),n.d(p,"setFooterState",(function(){return rt}));n("ddb0"),n("5319"),n("573e"),n("7d6e"),n("e54f"),n("4439"),n("4605"),n("f580"),n("5b2b"),n("8753"),n("2967"),n("7e67"),n("d770"),n("dd82"),n("922c"),n("d7fb"),n("a533"),n("c32e"),n("a151"),n("8bc7"),n("e80f"),n("5fec"),n("e42f"),n("57fc"),n("d67f"),n("880e"),n("1c10"),n("9482"),n("e797"),n("4848"),n("53d0"),n("63b1"),n("e9fd"),n("195c"),n("64e9"),n("33c5"),n("4f62"),n("0dbc"),n("7c38"),n("0756"),n("4953"),n("81db"),n("2e52"),n("22485"),n("7797"),n("12a1"),n("ce96"),n("70ca"),n("2318"),n("24bd"),n("8f27"),n("3064"),n("c9a2"),n("8767"),n("4a8e"),n("b828"),n("3c1c"),n("21cb"),n("c00e"),n("e4a8"),n("e4d3"),n("f4d9"),n("fffd"),n("f645"),n("639e"),n("34ee"),n("b794"),n("af24"),n("7c9c"),n("7bb2"),n("64f7"),n("c382"),n("053c"),n("c48f"),n("f5d1"),n("3cec"),n("c00ee"),n("d450"),n("ca07"),n("14e3"),n("9393"),n("9227"),n("1dba"),n("674a"),n("de26"),n("6721"),n("9cb5"),n("ed9b"),n("fc83"),n("98e5"),n("605a"),n("ba60"),n("df07"),n("7903"),n("e046"),n("58af"),n("7713"),n("0571"),n("3e27"),n("6837"),n("3fc9"),n("0693"),n("bf41"),n("985d"),n("31cd");var h=n("2b0e"),m=n("df1a"),b=n("42d2"),g=n("b05d"),w=n("714f"),v=n("2a19"),k=n("f508"),y=n("436b");h["a"].use(g["a"],{config:{},lang:m["a"],iconSet:b["a"],directives:{Ripple:w["a"]},plugins:{Notify:v["a"],Loading:k["a"],Dialog:y["a"]}});var S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},P=[],A={name:"App",mounted(){console.log("%cVizApp OK! (App.vue)","background:#2C3A47;color:#55E6C1;padding:10px;border-radius:10px;font-size:1.5em;")}},x=A,O=n("2877"),I=Object(O["a"])(x,S,P,!1,null,null,null),_=I.exports,C=n("2f62"),j=function(){return{profile:{me:void 0,rol:void 0,workpoint:void 0},token:void 0,modules:void 0,auths:void 0,workpoints:void 0,workin:{workpoint:void 0,module:void 0}}};function E(e){return e.workpoints.length}function L(e){let t={admin:"fas fa-wrench",configuracion:"fas fa-wrench",informes:"fas fa-chart-line",reportes:"fas fa-chart-line",contador:"fas fa-clipboard-list",ubicador:"fas fa-compass",minymax:"fas fa-balance-scale",dashboard:"dashboard",solicitud:"fas fa-clipboard-list",existencias:"grading",bodega:"fas fa-warehouse",checkin:"fas fa-sign-in-alt",checkout:"fact_check",caja:"fas fa-cash-register",pedidos:"receipt_long"},n=e.workin.module.path,o=e.workin.module.submodules,r=o.map((e=>({path:`/${n}/${e.path}`,icon:t[e.path],name:e.name,alias:e.path})));return{paths:r,prefix:n}}function M(e){return e.profile}function $(e){return e.workin.module}function N(e){return e.workin}function J(e,t){e.profile.me=t.account.me,e.profile.rol=t.account.rol,e.profile.workpoint=t.account.workpoint,e.token=t.account.token,e.workpoints=t.workpoints,t.stock&&(localStorage.setItem("token",e.token),localStorage.setItem("profile",JSON.stringify(e.profile)),localStorage.setItem("workpoints",JSON.stringify(e.workpoints)))}function z(e){localStorage.removeItem("token"),localStorage.removeItem("profile"),localStorage.removeItem("workpoints"),e.profile.me=void 0,e.profile.rol=void 0,e.profile.workpoint=void 0,e.token=void 0,e.workpoints=void 0}function T(e,t){localStorage.setItem("workin",JSON.stringify(t)),e.workin.workpoint=t.workpoint,e.workin.module=t.module}function q(e,t){e.token=t.token,localStorage.setItem("token",e.token)}var F=n("f749"),B={namespaced:!0,state:j,getters:o,mutations:r,actions:F},D=function(){return{wndAddSections:{state:!1,parent:void 0,loading:!1},warehouses:[],in:{warehouse:null,sections:[],path:[]}}},R=n("286c");function V(e,t){e.wndAddSections.parent=t,e.wndAddSections.state=!0}function H(e){e.wndAddSections.parent=void 0,e.wndAddSections.state=!1}function U(e,t){console.log("Agregando elementos"),console.log(t),t.forEach((t=>{t.children=[],e.wndAddSections.parent.children.push(t)}))}function W(e,t){e.warehouses.push(t)}function G(e){e.warehouses=[],e.wndAddSections.parent=void 0,e.wndAddSections.state=!1}var K=n("5648"),Q={namespaced:!0,state:D,getters:R,mutations:a,actions:K},X=function(){return{bottom_toolbar:!0}},Z=n("7ed2");function Y(e){e.bottom_toolbar=!0}function ee(e){e.bottom_toolbar=!1}function te(e){e.bottom_toolbar=!e.bottom_toolbar}var ne=n("e32a"),oe={namespaced:!0,state:X,getters:Z,mutations:i,actions:ne},re=function(){return{orders:[],printers:[],process:[],layout:{header:{state:!0,title:""},footer:{state:!0},viewsection:!0},agents:[],cashdesks:[]}};n("0481");function ae(e){return e.orders.filter((e=>4==e.status.id||5==e.status.id))}function ie(e){return e.orders.filter((e=>3==e.status.id))}function de(e){return e.orders.filter((e=>5==e.status.id||6==e.status.id||7==e.status.id))}function se(e){return e.process}function ce(e){return e.printers.map((e=>e.printers)).flat()}function ue(e){return e.printers.length?e.printers.find((e=>1==e.id)).printers:[]}function le(e){return e.printers.length?e.printers.find((e=>2==e.id)).printers:[]}function fe(e){return e.agents.map((t=>(t.orders=e.orders.filter((e=>t.id==e.created_by.id)),t.ordersize=t.orders.length,t)))}function pe(e){return e.cashdesks}function he(e){return t=>!!e.process.length&&e.process.find((e=>e.id==t)).state}function me(e,t){let n={1:{on:"",off:""},2:{on:"",off:""},3:{on:'Los pedidos esperan en el proceso de "CheckIn".',off:"Los pedidos llegan a Bodega."},4:{on:"Los pedidos esperaran la asistencia del personal de Bodega para iniciar proceso de surtido.",off:"El sistema asignara al personal responsable del surtido, y se iniciara el proceso de surtido."},5:{on:"",off:""},6:{on:"",off:""},7:{on:"Los pedidos llegarán a validación y se insertaran en Factusol",off:"Los pedidos deberan de capturarse en caja."},8:{on:"",off:""},9:{on:"",off:""}};e.orders=t.index.orders,e.printers=t.index.printers,e.agents=t.agents.map((e=>(e.rt={cnx:!1,id:null},e))),e.process=t.index.status.map((e=>(e.state=!!e.active,e.descs=n[e.id],e))),e.cashdesks=t.index.cash_register,localStorage.setItem("printers",JSON.stringify(t))}function be(e,t){let n=e.process.findIndex((e=>e.id==t.id));e.process[n].state=!e.process[n].state}function ge(e,t){let n=e.cashdesks.findIndex((e=>e.id==t.cash.id));e.cashdesks[n].status=t.newstate}function we(e,t){e.orders.push(t)}function ve(e,{order:t,newstate:n}){let o=e.orders.findIndex((e=>t.id==e.id));e.orders[o].status=n,e.orders[o].updated_at=n.created_at}function ke(e,t){e.layout.header.title=t}function ye(e,t){e.layout.header.state=t}function Se(e,t){e.layout.footer.state=t}function Pe(e,t){e.layout.viewsection=t}function Ae(e,t){let n=t.id,o=t.state,r=e.agents.findIndex((e=>e.id==n));!(r<0)&&(e.agents[r].rt.cnx=o)}function xe(e,t){let n=t.order,o=e.orders.findIndex((e=>e.id==n.id));o>=0?(console.log("El pedido EXISTE, hay que ACTUALIZARLO!!"),e.orders[o].status=t.newstate,e.orders[o].updated_at=t.newstate.created_at):(console.log("El pedido NO existe, hay que AGREGARLO!!"),e.orders.push(n))}var Oe=n("ff8a"),Ie={namespaced:!0,state:re,getters:d,mutations:s,actions:Oe},_e=function(){return{sounds:{creating:new Audio("sounds/creating.mp3"),created:new Audio("sounds/waiting.mp3"),moved:new Audio("sounds/moved.mp3"),removed:new Audio("sounds/removed.mp3"),done:new Audio("sounds/done.mp3"),added:new Audio("sounds/done.wav"),ok:new Audio("sounds/goal.mp3"),duply:new Audio("sounds/duply.mp3"),alert1:new Audio("sounds/orderwait_new.mp3"),download:new Audio("sounds/download.mp3"),download_label:new Audio("sounds/download_label.mp3")}}};function Ce(e){return e.sounds}var je=n("4b19"),Ee=n("d114"),Le={namespaced:!0,state:_e,getters:c,mutations:je,actions:Ee},Me=function(){return{labels:[],printers:[],process:[],layout:{header:{state:!0,title:""},footer:{state:!0}}}};function $e(e){return t=>{let n=e.labels.findIndex((e=>e.code==t));return e.labels[n].copies}}function Ne(e,t){e.layout.header.title=t}function Je(e,t){e.layout.header.state=t}function ze(e,t){e.layout.footer.state=t}function Te(e,t){e.labels.length<=0?e.labels=t:e.labels.push(t)}function qe(e,{code:t,opt:n}){let o=e.labels.findIndex((e=>e.code==t));switch(n){case"d":e.labels[o].copies>1?e.labels[o].copies--:e.labels[o].copies=1;break;default:e.labels[o].copies++;break}}var Fe=n("cb0e"),Be={namespaced:!0,state:Me,getters:u,mutations:l,actions:Fe},De=function(){return{orders:[],printers:[],process:[],layout:{header:{state:!0,title:""},footer:{state:!0}}}};function Re(e){return t=>{let n=t?t.value:{};return e.orders.filter((e=>e.from.id==n))}}function Ve(e){return e.orders}function He(e){return e.process}function Ue(e){return e.orders.filter((e=>{e.status.id}))}function We(e){return e.printers.map((e=>{e.printers})).flat()}function Ge(e){return e.printers.length?e.printers.find((e=>{e.id})).printers:[]}function Ke(e){return e.printers.length?e.printers.find((e=>{e.id})).printers:[]}function Qe(e,t){e.orders=t.requisitions,e.printers=t.workpoints,e.process=t.status}function Xe(e,t){console.log(`%cOrden ${t.id} creada!`,"background:#3ae374;color:#3d3d3d;border-radius:10px;padding:6px;"),e.orders.push(t)}function Ze(e,t){let n=e.orders.findIndex((e=>t.id==e.id));e.orders[n].printed+=1}function Ye(e,{order:t,newState:n}){console.log(t),console.log(`Buscando orden ${t.id} para actualizarla...`);let o=e.orders.findIndex((e=>t.id==e.id));console.log(o),e.orders[o].status=n.state,e.orders[o].log=n.log}function et(e,t){let n=[];t.log.map(((e,t)=>2==e.id?n.push(t):""));n=n.filter((e=>1!=e));let o=e.orders.findIndex((e=>t.id==e.id));e.orders[o].log=e.orders[o].log.filter(((e,t)=>!n.includes(t)))}function tt(e,t){for(let n=0;n<t.length;n++){let o=[];t[n].log.map(((e,t)=>2==e.id?o.push(t):""));o=o.filter((e=>1!=e)),e.orders[n].log=e.orders[n].log.filter(((e,t)=>!o.includes(t)))}}function nt(e,t){e.layout.header.title=t}function ot(e,t){e.layout.header.state=t}function rt(e,t){e.layout.footer.state=t}var at=n("4e9c"),it={namespaced:!0,state:De,getters:f,mutations:p,actions:at};h["a"].use(C["a"]);var dt=function(){const e=new C["a"].Store({modules:{Account:B,Warehouse:Q,Layout:oe,Preventa:Ie,Multimediapp:Le,Requisitions:it,Labels:Be},strict:!1});return e},st=n("8c4f");const ct=[{path:"/",redirect:"/lanzador"},{path:"/lanzador",component:()=>Promise.all([n.e(0),n.e(1),n.e(23)]).then(n.bind(null,"4d4a"))},{path:"/acceso",component:()=>Promise.all([n.e(0),n.e(6)]).then(n.bind(null,"15a9"))},{path:"/almacen",component:()=>Promise.all([n.e(0),n.e(1),n.e(10)]).then(n.bind(null,"ed9f")),children:[{path:"contador",component:()=>Promise.all([n.e(0),n.e(1),n.e(19)]).then(n.bind(null,"1b91"))},{path:"contador/config/:id",component:()=>Promise.all([n.e(0),n.e(1),n.e(35)]).then(n.bind(null,"c738"))},{path:"contador/:id",component:()=>Promise.all([n.e(0),n.e(1),n.e(36)]).then(n.bind(null,"2648"))},{path:"ubicador",component:()=>Promise.all([n.e(0),n.e(1),n.e(22)]).then(n.bind(null,"17f9"))},{path:"minymax",component:()=>Promise.all([n.e(0),n.e(1),n.e(38)]).then(n.bind(null,"028d"))},{path:"existencias",component:()=>Promise.all([n.e(0),n.e(1),n.e(20)]).then(n.bind(null,"047b"))},{path:"informes",component:()=>Promise.all([n.e(0),n.e(1),n.e(21)]).then(n.bind(null,"a714"))},{path:"",component:()=>Promise.all([n.e(0),n.e(1),n.e(37)]).then(n.bind(null,"24b7")),name:"warehouseidx"},{path:":idwrh/",component:()=>Promise.all([n.e(0),n.e(1),n.e(39)]).then(n.bind(null,"0c4f"))}]},{path:"/pedidos",component:()=>Promise.all([n.e(0),n.e(1),n.e(9)]).then(n.bind(null,"ab74")),children:[{path:"",component:()=>Promise.all([n.e(0),n.e(1),n.e(33)]).then(n.bind(null,"f673"))},{path:"dashboard",component:()=>Promise.all([n.e(0),n.e(1),n.e(17)]).then(n.bind(null,"b6ba"))},{path:":id",component:()=>Promise.all([n.e(0),n.e(1),n.e(18)]).then(n.bind(null,"30f2"))},{path:"checkin/:id",component:()=>Promise.all([n.e(0),n.e(1),n.e(15)]).then(n.bind(null,"b429"))},{path:"checkout/:id",component:()=>Promise.all([n.e(0),n.e(1),n.e(16)]).then(n.bind(null,"2b3a"))}]},{path:"/preventa",component:()=>Promise.all([n.e(0),n.e(1),n.e(8)]).then(n.bind(null,"cc6a")),children:[{path:"",component:()=>Promise.all([n.e(0),n.e(1),n.e(14)]).then(n.bind(null,"0694"))},{path:"pedidos",component:()=>Promise.all([n.e(0),n.e(1),n.e(31)]).then(n.bind(null,"1add"))},{path:"pedidos/:id",component:()=>Promise.all([n.e(0),n.e(1),n.e(2)]).then(n.bind(null,"42c0"))},{path:"checkin",component:()=>Promise.all([n.e(0),n.e(1),n.e(12)]).then(n.bind(null,"fa13"))},{path:"bodega",component:()=>Promise.all([n.e(0),n.e(1),n.e(32)]).then(n.bind(null,"a458"))},{path:"checkout",component:()=>Promise.all([n.e(0),n.e(1),n.e(30)]).then(n.bind(null,"7fd9"))},{path:"checkout/:id",component:()=>Promise.all([n.e(0),n.e(1),n.e(13)]).then(n.bind(null,"c36e"))},{path:"cobro",component:()=>Promise.all([n.e(0),n.e(1),n.e(2)]).then(n.bind(null,"42c0"))},{path:"admin",component:()=>Promise.all([n.e(0),n.e(1),n.e(3)]).then(n.bind(null,"611d"))},{path:"reporteria",component:()=>Promise.all([n.e(0),n.e(1),n.e(3)]).then(n.bind(null,"611d"))}]},{path:"/cluster",component:()=>Promise.all([n.e(0),n.e(7)]).then(n.bind(null,"7b58")),children:[{path:"ventas",component:()=>Promise.all([n.e(0),n.e(1),n.e(11)]).then(n.bind(null,"2b4c"))},{path:"productos",component:()=>Promise.all([n.e(0),n.e(1),n.e(25)]).then(n.bind(null,"1d06")),children:[{path:"",redirect:"top"},{path:"top",component:()=>Promise.all([n.e(0),n.e(1),n.e(27)]).then(n.bind(null,"404d"))},{path:"vs",component:()=>Promise.all([n.e(0),n.e(1),n.e(28)]).then(n.bind(null,"752be"))},{path:"cat",component:()=>n.e(26).then(n.bind(null,"0f54"))}]}]},{path:"/perfil",component:()=>Promise.all([n.e(0),n.e(24)]).then(n.bind(null,"88a5"))},{path:"/etiquetas",component:()=>Promise.all([n.e(0),n.e(1),n.e(5)]).then(n.bind(null,"615c"))},{path:"/qdev",component:()=>Promise.all([n.e(0),n.e(34)]).then(n.bind(null,"60f2"))},{path:"*",component:()=>Promise.all([n.e(0),n.e(29)]).then(n.bind(null,"e51e"))}];var ut=ct;h["a"].use(st["a"]);var lt=function(){const e=new st["a"]({scrollBehavior:()=>({x:0,y:0}),routes:ut,mode:"hash",base:""});return e},ft=async function(){const e="function"===typeof dt?await dt({Vue:h["a"]}):dt,t="function"===typeof lt?await lt({Vue:h["a"],store:e}):lt;e.$router=t;const n={router:t,store:e,render:e=>e(_),el:"#q-app"};return{app:n,store:e,router:t}},pt=n("9483");Object(pt["a"])("service-worker.js",{ready(){},registered(){},cached(){},updatefound(){},updated(){},offline(){},error(){}});var ht=n("31b8"),mt=async({router:e,store:t})=>{e.beforeEach(((e,n,o)=>{console.log("%cProtecting routes...","font-size:1.5em;color:#40739e;");let r=localStorage.getItem("token");if(r){ht["b"].defaults.headers.common["Authorization"]="Bearer "+r;let e=JSON.parse(localStorage.getItem("profile")),n=JSON.parse(localStorage.getItem("workpoints")),o=JSON.parse(localStorage.getItem("workin")),a={account:{me:e.me,rol:e.rol,workpoint:e.workpoint,token:r},workpoints:n,stock:!1};t.commit("Account/setsession",a),o&&t.commit("Account/setworkpoint",o)}"/acceso"!=e.path?r?o():o("/acceso"):r?o("/lanzador"):o()}))},bt=n("bc3a"),gt=n.n(bt);h["a"].prototype.$axios=gt.a;var wt=n("5254"),vt=n.n(wt),kt=n("2ead"),yt=n.n(kt);h["a"].use(yt.a),h["a"].moment.updateLocale("es",{months:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],monthsShort:["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"],weekdays:["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"],weekdaysShort:["Do","Lu","Ma","Mi","Ju","Vi","Sa"],week:{dow:1}});var St=n("daa8");const Pt="http://192.168.10.15:7171";var At=({Vue:e})=>{let t=JSON.parse(localStorage.getItem("profile"));e.prototype.$vSocket=Object(St["a"])(`${Pt}`,{autoConnect:!1}),e.prototype.$sktCounters=Object(St["a"])(`${Pt}/counters`,{autoConnect:!1}),e.prototype.$sktPreventa=Object(St["a"])(`${Pt}/preventa`,{autoConnect:!1}),e.prototype.$sktRestock=Object(St["a"])(`${Pt}/resurtidos`,{autoConnect:!1}),console.log("%cInstancias de socket listas para conexion: (boot/sockets.js)","font-size:1.2em;background:#58B19F;border-radius:10px;color:white;padding:5px;"),t?e.prototype.$vSocket.disconnected&&(e.prototype.$vSocket.connect(),console.log("%cUnido al canal global (by bootfile)","background:#1B9CFC;color:white;border-radius:10px;padding:6px;")):console.log("%cNo hay sesion activa, union a socket cancelada","background:#F97F51;color:#2C3A47;border-radius:10px;padding:6px;")};/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&window.navigator.standalone&&n.e(0).then(n.t.bind(null,"a0db",7));const xt="";async function Ot(){const{app:e,store:t,router:n}=await ft();let o=!1;const r=e=>{o=!0;const t=Object(e)===e?n.resolve(e).route.fullPath:e;window.location.href=t},a=window.location.href.replace(window.location.origin,""),i=[mt,void 0,ht["default"],vt.a,void 0,At];for(let s=0;!1===o&&s<i.length;s++)if("function"===typeof i[s])try{await i[s]({app:e,router:n,store:t,Vue:h["a"],ssrContext:null,redirect:r,urlPath:a,publicPath:xt})}catch(d){return d&&d.url?void(window.location.href=d.url):void console.error("[Quasar] boot error:",d)}!0!==o&&new h["a"](e)}Ot()},"31b8":function(e,t,n){"use strict";n.d(t,"b",(function(){return s}));var o=n("2b0e"),r=n("bc3a"),a=n.n(r);const i="http://192.168.10.15/vizapi_master/public",d="http://192.168.10.15/vizapi_master/files",s=a.a.create({baseURL:i});o["a"].prototype.$vizapi=s,o["a"].prototype.$routefiles=d},"31cd":function(e,t,n){},"4b19":function(e,t){},"4e9c":function(e,t){},5254:function(e,t){},5648:function(e,t){},"7ed2":function(e,t){},cb0e:function(e,t){},d114:function(e,t){},e32a:function(e,t){},f749:function(e,t){},ff8a:function(e,t){}});