(function(e){function t(t){for(var o,r,d=t[0],s=t[1],c=t[2],u=0,l=[];u<d.length;u++)r=d[u],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&l.push(a[r][0]),a[r]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);f&&f(t);while(l.length)l.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,r=1;r<n.length;r++){var d=n[r];0!==a[d]&&(o=!1)}o&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},r={4:0},a={4:0},i=[];function d(e){return s.p+"js/"+({1:"chunk-common"}[e]||e)+"."+{1:"f1d811b5",2:"29f1dbd3",3:"5e23e39e",5:"989d63cb",6:"156384da",7:"e8236caa",8:"7e103322",9:"5c8d6b18",10:"73ce1e5c",11:"e35d8252",12:"8aa821f8",13:"ad385c48",14:"ca4463f0",15:"206351fc",16:"48d3c475",17:"68ae0cae",18:"764a6b0e",19:"12fe5482",20:"405b9dcf",21:"ab5f4090",22:"7c203116",23:"55ee91ca",24:"a223c6ab",25:"8176edb6",26:"a135f6a7",27:"e4b00f6c",28:"aa64468d",29:"f926f34c",30:"bc9bd7ae",31:"c2053d04",32:"8f524b20",33:"00e0888e",34:"2258b8ff",35:"cf9d1d16",36:"60d9f081",37:"6d502f5f",38:"c5c6d008",39:"864fa2e7"}[e]+".js"}function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={1:1,2:1,5:1,6:1,7:1,8:1,9:1,10:1,11:1,12:1,13:1,14:1,15:1,16:1,17:1,18:1,19:1,20:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({1:"chunk-common"}[e]||e)+"."+{1:"f6009c27",2:"89a7d40c",3:"31d6cfe0",5:"b87d5112",6:"91b98b70",7:"74f9154a",8:"fbff1b82",9:"93e3a926",10:"77b13e1a",11:"93e3a926",12:"93e3a926",13:"3e83f0e6",14:"e1daf470",15:"24afb93a",16:"7838362e",17:"539aecb4",18:"bce878bf",19:"b43534f5",20:"30bd4534",21:"31d6cfe0",22:"31d6cfe0",23:"31d6cfe0",24:"31d6cfe0",25:"31d6cfe0",26:"31d6cfe0",27:"31d6cfe0",28:"31d6cfe0",29:"31d6cfe0",30:"31d6cfe0",31:"31d6cfe0",32:"31d6cfe0",33:"31d6cfe0",34:"31d6cfe0",35:"31d6cfe0",36:"31d6cfe0",37:"31d6cfe0",38:"31d6cfe0",39:"31d6cfe0"}[e]+".css",a=s.p+o,i=document.getElementsByTagName("link"),d=0;d<i.length;d++){var c=i[d],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===o||u===a))return t()}var l=document.getElementsByTagName("style");for(d=0;d<l.length;d++){c=l[d],u=c.getAttribute("data-href");if(u===o||u===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var o=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete r[e],f.parentNode.removeChild(f),n(i)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){r[e]=0})));var o=a[e];if(0!==o)if(o)t.push(o[2]);else{var i=new Promise((function(t,n){o=a[e]=[t,n]}));t.push(o[2]=i);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=d(e);var l=new Error;c=function(t){u.onerror=u.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",l.name="ChunkLoadError",l.type=o,l.request=r,n[1](l)}a[e]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(t)},s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var f=u;i.push([0,0]),n()})({0:function(e,t,n){e.exports=n("2f39")},"26f2":function(e,t){},"286c":function(e,t){},"2f39":function(e,t,n){"use strict";n.r(t);var o={};n.r(o),n.d(o,"workpoints_size",(function(){return M})),n.d(o,"toolbarModule",(function(){return N})),n.d(o,"profile",(function(){return z})),n.d(o,"moduleauths",(function(){return $})),n.d(o,"workin",(function(){return D}));var r={};n.r(r),n.d(r,"setsession",(function(){return J})),n.d(r,"unsetsession",(function(){return q})),n.d(r,"setworkpoint",(function(){return T})),n.d(r,"join",(function(){return F}));var a={};n.r(a),n.d(a,"initAddSection",(function(){return U})),n.d(a,"cancelAddSection",(function(){return W})),n.d(a,"addChildren",(function(){return G})),n.d(a,"set",(function(){return K})),n.d(a,"cleanModule",(function(){return X}));var i={};n.r(i),n.d(i,"showToolbarModule",(function(){return te})),n.d(i,"hideToolbarModule",(function(){return ne})),n.d(i,"toggleToolbarModule",(function(){return oe}));var d={};n.r(d),n.d(d,"OrdersWarehouse",(function(){return de})),n.d(d,"OrdersCheckIn",(function(){return se})),n.d(d,"OrdersCheckout",(function(){return ce})),n.d(d,"process",(function(){return ue})),n.d(d,"printers",(function(){return le})),n.d(d,"printersSale",(function(){return fe})),n.d(d,"printersWarehouse",(function(){return pe})),n.d(d,"agents_orders",(function(){return me})),n.d(d,"cashdesks",(function(){return he})),n.d(d,"keepProcess",(function(){return be}));var s={};n.r(s),n.d(s,"startState",(function(){return ge})),n.d(s,"setState",(function(){return ve})),n.d(s,"setCashState",(function(){return we})),n.d(s,"newOrder",(function(){return ke})),n.d(s,"updateState",(function(){return ye})),n.d(s,"setHeaderTitle",(function(){return Se})),n.d(s,"setHeaderState",(function(){return Pe})),n.d(s,"setFooterState",(function(){return Ae})),n.d(s,"setViewSection",(function(){return xe})),n.d(s,"setStatusSktUser",(function(){return Oe})),n.d(s,"orderAOU",(function(){return _e}));var c={};n.r(c),n.d(c,"sounds",(function(){return Le}));var u={};n.r(u),n.d(u,"getCopies",(function(){return $e}));var l={};n.r(l),n.d(l,"setHeaderTitle",(function(){return De})),n.d(l,"setHeaderState",(function(){return Je})),n.d(l,"setFooterState",(function(){return qe})),n.d(l,"addLabels",(function(){return Te})),n.d(l,"addCopies",(function(){return Fe}));var f={};n.r(f),n.d(f,"ordersRequisitions",(function(){return He})),n.d(f,"getIDX",(function(){return Ue})),n.d(f,"getOrders",(function(){return We})),n.d(f,"ordersDash",(function(){return Ge})),n.d(f,"getStates",(function(){return Ke})),n.d(f,"ordersCheckIn",(function(){return Xe})),n.d(f,"printers",(function(){return Qe})),n.d(f,"printersSale",(function(){return Ze})),n.d(f,"printersRequisition",(function(){return Ye}));var p={};n.r(p),n.d(p,"startState",(function(){return et})),n.d(p,"setOrdersIn",(function(){return tt})),n.d(p,"newOrder",(function(){return nt})),n.d(p,"todayState",(function(){return ot})),n.d(p,"printed",(function(){return rt})),n.d(p,"updateState",(function(){return at})),n.d(p,"getCleanDuplicates",(function(){return it})),n.d(p,"getAllCleanDuplicates",(function(){return dt})),n.d(p,"setHeaderTitle",(function(){return st})),n.d(p,"setHeaderState",(function(){return ct})),n.d(p,"setFooterState",(function(){return ut}));var m={};n.r(m),n.d(m,"printers",(function(){return mt})),n.d(m,"All",(function(){return ht}));var h={};n.r(h),n.d(h,"setNativeData",(function(){return bt}));n("ddb0"),n("5319"),n("573e"),n("7d6e"),n("e54f"),n("4439"),n("4605"),n("f580"),n("5b2b"),n("8753"),n("2967"),n("7e67"),n("d770"),n("dd82"),n("922c"),n("d7fb"),n("a533"),n("c32e"),n("a151"),n("8bc7"),n("e80f"),n("5fec"),n("e42f"),n("57fc"),n("d67f"),n("880e"),n("1c10"),n("9482"),n("e797"),n("4848"),n("53d0"),n("63b1"),n("e9fd"),n("195c"),n("64e9"),n("33c5"),n("4f62"),n("0dbc"),n("7c38"),n("0756"),n("4953"),n("81db"),n("2e52"),n("22485"),n("7797"),n("12a1"),n("ce96"),n("70ca"),n("2318"),n("24bd"),n("8f27"),n("3064"),n("c9a2"),n("8767"),n("4a8e"),n("b828"),n("3c1c"),n("21cb"),n("c00e"),n("e4a8"),n("e4d3"),n("f4d9"),n("fffd"),n("f645"),n("639e"),n("34ee"),n("b794"),n("af24"),n("7c9c"),n("7bb2"),n("64f7"),n("c382"),n("053c"),n("c48f"),n("f5d1"),n("3cec"),n("c00ee"),n("d450"),n("ca07"),n("14e3"),n("9393"),n("9227"),n("1dba"),n("674a"),n("de26"),n("6721"),n("9cb5"),n("ed9b"),n("fc83"),n("98e5"),n("605a"),n("ba60"),n("df07"),n("7903"),n("e046"),n("58af"),n("7713"),n("0571"),n("3e27"),n("6837"),n("3fc9"),n("0693"),n("bf41"),n("985d"),n("31cd");var b=n("2b0e"),g=n("df1a"),v=n("42d2"),w=n("b05d"),k=n("714f"),y=n("2a19"),S=n("f508"),P=n("436b");b["a"].use(w["a"],{config:{},lang:g["a"],iconSet:v["a"],directives:{Ripple:k["a"]},plugins:{Notify:y["a"],Loading:S["a"],Dialog:P["a"]}});var A=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"q-app"}},[t("router-view")],1)},x=[],O={name:"App",mounted(){console.log("%cVizApp OK! (App.vue)","background:#2C3A47;color:#55E6C1;padding:10px;border-radius:10px;font-size:1.5em;")}},_=O,I=n("2877"),C=Object(I["a"])(_,A,x,!1,null,null,null),j=C.exports,L=n("2f62"),E=function(){return{profile:{me:void 0,rol:void 0,workpoint:void 0},token:void 0,modules:void 0,auths:void 0,workpoints:void 0,workin:{workpoint:void 0,module:void 0}}};function M(e){return e.workpoints.length}function N(e){let t={admin:"fas fa-wrench",configuracion:"fas fa-wrench",informes:"fas fa-chart-line",reportes:"fas fa-chart-line",contador:"fas fa-clipboard-list",ubicador:"fas fa-compass",minymax:"fas fa-balance-scale",dashboard:"dashboard",solicitud:"fas fa-clipboard-list",existencias:"grading",bodega:"fas fa-warehouse",checkin:"fas fa-sign-in-alt",checkout:"fact_check",caja:"fas fa-cash-register",pedidos:"receipt_long"},n=e.workin.module.path,o=e.workin.module.submodules,r=o.map((e=>({path:`/${n}/${e.path}`,icon:t[e.path],name:e.name,alias:e.path})));return{paths:r,prefix:n}}function z(e){return e.profile}function $(e){return e.workin.module}function D(e){return e.workin}function J(e,t){e.profile.me=t.account.me,e.profile.rol=t.account.rol,e.profile.workpoint=t.account.workpoint,e.token=t.account.token,e.workpoints=t.workpoints,t.stock&&(localStorage.setItem("token",e.token),localStorage.setItem("profile",JSON.stringify(e.profile)),localStorage.setItem("workpoints",JSON.stringify(e.workpoints)))}function q(e){localStorage.removeItem("token"),localStorage.removeItem("profile"),localStorage.removeItem("workpoints"),localStorage.removeItem("printers_native"),e.profile.me=void 0,e.profile.rol=void 0,e.profile.workpoint=void 0,e.token=void 0,e.workpoints=void 0}function T(e,t){localStorage.setItem("workin",JSON.stringify(t)),e.workin.workpoint=t.workpoint,e.workin.module=t.module}function F(e,t){e.token=t.token,localStorage.setItem("token",e.token)}var B=n("f749"),R={namespaced:!0,state:E,getters:o,mutations:r,actions:B},V=function(){return{wndAddSections:{state:!1,parent:void 0,loading:!1},warehouses:[],in:{warehouse:null,sections:[],path:[]}}},H=n("286c");function U(e,t){e.wndAddSections.parent=t,e.wndAddSections.state=!0}function W(e){e.wndAddSections.parent=void 0,e.wndAddSections.state=!1}function G(e,t){console.log("Agregando elementos"),console.log(t),t.forEach((t=>{t.children=[],e.wndAddSections.parent.children.push(t)}))}function K(e,t){e.warehouses.push(t)}function X(e){e.warehouses=[],e.wndAddSections.parent=void 0,e.wndAddSections.state=!1}var Q=n("5648"),Z={namespaced:!0,state:V,getters:H,mutations:a,actions:Q},Y=function(){return{bottom_toolbar:!0}},ee=n("7ed2");function te(e){e.bottom_toolbar=!0}function ne(e){e.bottom_toolbar=!1}function oe(e){e.bottom_toolbar=!e.bottom_toolbar}var re=n("e32a"),ae={namespaced:!0,state:Y,getters:ee,mutations:i,actions:re},ie=function(){return{orders:[],printers:[],process:[],layout:{header:{state:!0,title:""},footer:{state:!0},viewsection:!0},agents:[],agentsView:[],cashdesks:[]}};function de(e){return e.orders.filter((e=>4==e.status.id||5==e.status.id))}function se(e){return e.orders.filter((e=>3==e.status.id))}function ce(e){return e.orders.filter((e=>e.status.id>=5&&e.status.id<=8))}function ue(e){return e.process}function le(e){return e.printers.map((e=>e.printers)).flat()}function fe(e){return e.printers.length?e.printers.find((e=>1==e.id)).printers:[]}function pe(e){return e.printers.length?e.printers.find((e=>2==e.id)).printers:[]}function me(e){return e.agents.map((t=>(t.orders=e.orders.filter((e=>t.profile.id==e.created_by.id)),t.ordersize=t.orders.length,t)))}function he(e){return e.cashdesks}function be(e){return t=>!!e.process.length&&e.process.find((e=>e.id==t)).state}function ge(e,t){let n={1:{on:"",off:""},2:{on:"",off:""},3:{on:'Los pedidos esperan en el proceso de "CheckIn".',off:"Los pedidos llegan a Bodega."},4:{on:"Los pedidos esperaran la asistencia del personal de Bodega para iniciar proceso de surtido.",off:"El sistema asignara al personal responsable del surtido, y se iniciara el proceso de surtido."},5:{on:"",off:""},6:{on:"",off:""},7:{on:"Los pedidos llegarán a validación y se insertaran en Factusol",off:"Los pedidos deberan de capturarse en caja."},8:{on:"",off:""},9:{on:"",off:""}};e.orders=t.index.orders;let o=e.orders.map((e=>e.created_by)),r=[...new Set(o.map((e=>e.id)))],a=t.agents.map((e=>e.id)),i=a.concat(r),d=[...new Set(i)];e.agents=d.map((e=>{let n=new Object;n.socket=null;let r=t.agents.find((t=>t.id==e));return r?(n.profile=r,n.salesib=!0):(n.profile=o.find((t=>t.id==e)),n.salesib=!1),n})),e.process=t.index.status.map((e=>(e.state=!!e.active,e.descs=n[e.id],e))),e.cashdesks=t.index.cash_register}function ve(e,t){let n=e.process.findIndex((e=>e.id==t.id));e.process[n].state=!e.process[n].state}function we(e,t){let n=e.cashdesks.findIndex((e=>e.id==t.cash.id));e.cashdesks[n].status=t.newstate}function ke(e,t){e.orders.push(t)}function ye(e,{order:t,newstate:n}){let o=e.orders.findIndex((e=>t.id==e.id));e.orders[o].status=n,e.orders[o].updated_at=n.created_at}function Se(e,t){e.layout.header.title=t}function Pe(e,t){e.layout.header.state=t}function Ae(e,t){e.layout.footer.state=t}function xe(e,t){e.layout.viewsection=t}function Oe(e,t){let n=t.id,o=t.state,r=e.agents.findIndex((e=>e.id==n));!(r<0)&&(e.agents[r].rt.cnx=o)}function _e(e,t){let n=t.order,o=e.orders.findIndex((e=>e.id==n.id));o>=0?(console.log("El pedido EXISTE, hay que ACTUALIZARLO!!"),e.orders[o].status=t.newstate,e.orders[o].updated_at=t.newstate.created_at):(console.log("El pedido NO existe, hay que AGREGARLO!!"),e.orders.push(n))}var Ie=n("ff8a"),Ce={namespaced:!0,state:ie,getters:d,mutations:s,actions:Ie},je=function(){return{sounds:{creating:new Audio("sounds/creating.mp3"),created:new Audio("sounds/waiting.mp3"),moved:new Audio("sounds/moved.mp3"),removed:new Audio("sounds/removed.mp3"),done:new Audio("sounds/done.mp3"),added:new Audio("sounds/done.wav"),ok:new Audio("sounds/goal.mp3"),duply:new Audio("sounds/duply.mp3"),alert1:new Audio("sounds/orderwait_new.mp3"),download:new Audio("sounds/download.mp3"),download_label:new Audio("sounds/download_label.mp3"),supply:new Audio("sounds/success01.mp3")}}};function Le(e){return e.sounds}var Ee=n("4b19"),Me=n("d114"),Ne={namespaced:!0,state:je,getters:c,mutations:Ee,actions:Me},ze=function(){return{labels:[],printers:[],process:[],layout:{header:{state:!0,title:""},footer:{state:!0}}}};function $e(e){return t=>{let n=e.labels.findIndex((e=>e.code==t));return e.labels[n].copies}}function De(e,t){e.layout.header.title=t}function Je(e,t){e.layout.header.state=t}function qe(e,t){e.layout.footer.state=t}function Te(e,t){e.labels.length<=0?e.labels=t:e.labels.push(t)}function Fe(e,{code:t,opt:n}){let o=e.labels.findIndex((e=>e.code==t));switch(n){case"d":e.labels[o].copies>1?e.labels[o].copies--:e.labels[o].copies=1;break;default:e.labels[o].copies++;break}}var Be=n("cb0e"),Re={namespaced:!0,state:ze,getters:u,mutations:l,actions:Be},Ve=function(){return{orders:[],orders_in:[],printers:[],process:[],today:!1,layout:{header:{state:!0,title:""},footer:{state:!0}}}};function He(e){return t=>{let n=t?t.value:{};return e.orders.filter((e=>e.from.id==n))}}function Ue(e){return t=>e.orders.find((e=>t.id==e.id))}function We(e){return e.orders}function Ge(e){return e.orders_in}function Ke(e){return e.process}function Xe(e){return e.orders.filter((e=>{e.status.id}))}function Qe(e){return e.printers.map((e=>{e.printers})).flat()}function Ze(e){return e.printers.length?e.printers.find((e=>{e.id})).printers:[]}function Ye(e){return e.printers.length?e.printers.find((e=>{e.id})).printers:[]}n("caad");function et(e,t){e.orders=t.requisitions,e.printers=t.workpoints,e.process=t.status}function tt(e,t){e.orders_in=t}function nt(e,t){console.log(`%cOrden ${t.id} creada!`,"background:#3ae374;color:#3d3d3d;border-radius:10px;padding:6px;"),e.orders_in.push(t),console.log("%cOrden agregada a la lista!","background:#3ae374;color:#3d3d3d;border-radius:10px;padding:6px;")}function ot(e,t){e.today=t}function rt(e,t){let n=e.orders.findIndex((e=>t.id==e.id));e.orders[n].printed+=1}function at(e,{order:t,newState:n}){console.log(n),console.log(`Buscando orden ${t.id} para actualizarla...`);let o=e.orders.findIndex((e=>t.id==e.id));console.log(o),-1!=o&&(e.orders[o].status=n.state,e.orders[o].log=n.log,e.orders[o].products=t.products)}function it(e,t){let n=[];t.log.map(((e,t)=>2==e.id?n.push(t):""));n=n.filter((e=>1!=e));let o=e.orders.findIndex((e=>t.id==e.id));e.orders[o].log=e.orders[o].log.filter(((e,t)=>!n.includes(t)))}function dt(e,t){for(let n=0;n<t.length;n++){let t=[];t=t.filter((e=>1!=e)),e.orders[n].log=e.orders[n].log.filter(((e,n)=>!t.includes(n)))}}function st(e,t){e.layout.header.title=t}function ct(e,t){e.layout.header.state=t}function ut(e,t){e.layout.footer.state=t}var lt=n("4e9c"),ft={namespaced:!0,state:Ve,getters:f,mutations:p,actions:lt},pt=function(){return{nativeData:void 0}};function mt(e){return e.nativeData}function ht(e,t=null){return t=>{let n=e.nativeData;if(console.log(n),n.length>1)return n.map((e=>({id:e.id,name:e.name,alias:e.alias,groups:e.printers,selected:t==e.id})));{let e=n[0];return{id:e.id,name:e.name,alias:e.alias,groups:e.printers,selected:!0}}}}function bt(e,t){localStorage.setItem("printers_native",JSON.stringify(t)),console.log("Impresoras nativas seteadas en LS"),e.nativeData=t}var gt=n("26f2"),vt={namespaced:!0,state:pt,getters:m,mutations:h,actions:gt};b["a"].use(L["a"]);var wt=function(){const e=new L["a"].Store({modules:{Account:R,Warehouse:Z,Layout:ae,Preventa:Ce,Multimediapp:Ne,Requisitions:ft,Labels:Re,Printers:vt},strict:!1});return e},kt=n("8c4f");const yt=[{path:"/",redirect:"/lanzador"},{path:"/lanzador",component:()=>Promise.all([n.e(0),n.e(1),n.e(21)]).then(n.bind(null,"4d4a"))},{path:"/acceso",component:()=>Promise.all([n.e(0),n.e(8)]).then(n.bind(null,"15a9"))},{path:"/almacen",component:()=>Promise.all([n.e(0),n.e(1),n.e(12)]).then(n.bind(null,"ed9f")),children:[{path:"contador",component:()=>Promise.all([n.e(0),n.e(1),n.e(18)]).then(n.bind(null,"1b91"))},{path:"contador/config/:id",component:()=>Promise.all([n.e(0),n.e(1),n.e(35)]).then(n.bind(null,"c738"))},{path:"contador/:id",component:()=>Promise.all([n.e(0),n.e(1),n.e(36)]).then(n.bind(null,"2648"))},{path:"ubicador",component:()=>Promise.all([n.e(0),n.e(1),n.e(22)]).then(n.bind(null,"17f9"))},{path:"minymax",component:()=>Promise.all([n.e(0),n.e(1),n.e(38)]).then(n.bind(null,"028d"))},{path:"existencias",component:()=>Promise.all([n.e(0),n.e(1),n.e(19)]).then(n.bind(null,"047b"))},{path:"informes",component:()=>Promise.all([n.e(0),n.e(1),n.e(20)]).then(n.bind(null,"a714"))},{path:"",component:()=>Promise.all([n.e(0),n.e(1),n.e(37)]).then(n.bind(null,"24b7")),name:"warehouseidx"},{path:":idwrh/",component:()=>Promise.all([n.e(0),n.e(1),n.e(39)]).then(n.bind(null,"0c4f"))}]},{path:"/pedidos",component:()=>Promise.all([n.e(0),n.e(1),n.e(11)]).then(n.bind(null,"ab74")),children:[{path:"",component:()=>Promise.all([n.e(0),n.e(1),n.e(32)]).then(n.bind(null,"f673"))},{path:"dashboard",component:()=>Promise.all([n.e(0),n.e(1),n.e(17)]).then(n.bind(null,"b6ba"))},{path:":id",component:()=>Promise.all([n.e(0),n.e(1),n.e(33)]).then(n.bind(null,"30f2"))},{path:"checkin/:id",component:()=>Promise.all([n.e(0),n.e(1),n.e(15)]).then(n.bind(null,"b429"))},{path:"checkout/:id",component:()=>Promise.all([n.e(0),n.e(1),n.e(16)]).then(n.bind(null,"2b3a"))}]},{path:"/preventa",component:()=>Promise.all([n.e(0),n.e(1),n.e(10)]).then(n.bind(null,"cc6a")),children:[{path:"",component:()=>Promise.all([n.e(0),n.e(1),n.e(6)]).then(n.bind(null,"0694"))},{path:"pedidos",component:()=>Promise.all([n.e(0),n.e(1),n.e(30)]).then(n.bind(null,"1add"))},{path:"pedidos/:id",component:()=>Promise.all([n.e(0),n.e(1),n.e(2)]).then(n.bind(null,"42c0"))},{path:"checkin",component:()=>Promise.all([n.e(0),n.e(1),n.e(14)]).then(n.bind(null,"fa13"))},{path:"bodega",component:()=>Promise.all([n.e(0),n.e(1),n.e(31)]).then(n.bind(null,"a458"))},{path:"checkout",component:()=>Promise.all([n.e(0),n.e(1),n.e(29)]).then(n.bind(null,"7fd9"))},{path:"checkout/:id",component:()=>Promise.all([n.e(0),n.e(1),n.e(5)]).then(n.bind(null,"c36e"))},{path:"cobro",component:()=>Promise.all([n.e(0),n.e(1),n.e(2)]).then(n.bind(null,"42c0"))},{path:"admin",component:()=>Promise.all([n.e(0),n.e(1),n.e(3)]).then(n.bind(null,"611d"))},{path:"reporteria",component:()=>Promise.all([n.e(0),n.e(1),n.e(3)]).then(n.bind(null,"611d"))}]},{path:"/cluster",component:()=>Promise.all([n.e(0),n.e(9)]).then(n.bind(null,"7b58")),children:[{path:"ventas",component:()=>Promise.all([n.e(0),n.e(1),n.e(13)]).then(n.bind(null,"2b4c"))},{path:"productos",component:()=>Promise.all([n.e(0),n.e(1),n.e(24)]).then(n.bind(null,"1d06")),children:[{path:"",redirect:"top"},{path:"top",component:()=>Promise.all([n.e(0),n.e(1),n.e(26)]).then(n.bind(null,"404d"))},{path:"vs",component:()=>Promise.all([n.e(0),n.e(1),n.e(27)]).then(n.bind(null,"752be"))},{path:"cat",component:()=>n.e(25).then(n.bind(null,"0f54"))}]}]},{path:"/perfil",component:()=>Promise.all([n.e(0),n.e(23)]).then(n.bind(null,"88a5"))},{path:"/etiquetas",component:()=>Promise.all([n.e(0),n.e(1),n.e(7)]).then(n.bind(null,"615c"))},{path:"/qdev",component:()=>Promise.all([n.e(0),n.e(34)]).then(n.bind(null,"60f2"))},{path:"*",component:()=>Promise.all([n.e(0),n.e(28)]).then(n.bind(null,"e51e"))}];var St=yt;b["a"].use(kt["a"]);var Pt=function(){const e=new kt["a"]({scrollBehavior:()=>({x:0,y:0}),routes:St,mode:"hash",base:""});return e},At=async function(){const e="function"===typeof wt?await wt({Vue:b["a"]}):wt,t="function"===typeof Pt?await Pt({Vue:b["a"],store:e}):Pt;e.$router=t;const n={router:t,store:e,render:e=>e(j),el:"#q-app"};return{app:n,store:e,router:t}},xt=n("9483");Object(xt["a"])("service-worker.js",{ready(){},registered(){},cached(){},updatefound(){},updated(){},offline(){},error(){}});var Ot=n("31b8"),_t=async({router:e,store:t})=>{e.beforeEach(((e,n,o)=>{console.log("%cProtecting routes...","font-size:1.5em;color:#40739e;");let r=localStorage.getItem("token");if(r){Ot["b"].defaults.headers.common["Authorization"]="Bearer "+r;let e=JSON.parse(localStorage.getItem("profile")),n=JSON.parse(localStorage.getItem("workpoints")),o=JSON.parse(localStorage.getItem("workin")),a={account:{me:e.me,rol:e.rol,workpoint:e.workpoint,token:r},workpoints:n,stock:!1};t.commit("Account/setsession",a),o&&t.commit("Account/setworkpoint",o)}"/acceso"!=e.path?r?o():o("/acceso"):r?o("/lanzador"):o()}))},It=n("2ead"),Ct=n.n(It);b["a"].use(Ct.a),b["a"].moment.updateLocale("es",{months:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],monthsShort:["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"],weekdays:["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"],weekdaysShort:["Do","Lu","Ma","Mi","Ju","Vi","Sa"],week:{dow:1}});var jt=n("daa8");const Lt="http://mx100-cedis-mkrqpwcczk.dynamic-m.com:4548";var Et=({Vue:e})=>{let t=JSON.parse(localStorage.getItem("profile"));e.prototype.$vSocket=Object(jt["a"])(`${Lt}`,{autoConnect:!1}),e.prototype.$sktCounters=Object(jt["a"])(`${Lt}/counters`,{autoConnect:!1}),e.prototype.$sktPreventa=Object(jt["a"])(`${Lt}/preventa`,{autoConnect:!1}),e.prototype.$sktRestock=Object(jt["a"])(`${Lt}/resurtidos`,{autoConnect:!1}),console.log("%cInstancias de socket listas para conexion: (boot/sockets.js)","font-size:1.2em;background:#58B19F;border-radius:10px;color:white;padding:5px;"),t?e.prototype.$vSocket.disconnected&&(e.prototype.$vSocket.connect(),console.log("%cUnido al canal global (by bootfile)","background:#1B9CFC;color:white;border-radius:10px;padding:6px;")):console.log("%cNo hay sesion activa, union a socket cancelada","background:#F97F51;color:#2C3A47;border-radius:10px;padding:6px;")};/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&window.navigator.standalone&&n.e(0).then(n.t.bind(null,"a0db",7));const Mt="";async function Nt(){const{app:e,store:t,router:n}=await At();let o=!1;const r=e=>{o=!0;const t=Object(e)===e?n.resolve(e).route.fullPath:e;window.location.href=t},a=window.location.href.replace(window.location.origin,""),i=[_t,Ot["default"],void 0,Et];for(let s=0;!1===o&&s<i.length;s++)if("function"===typeof i[s])try{await i[s]({app:e,router:n,store:t,Vue:b["a"],ssrContext:null,redirect:r,urlPath:a,publicPath:Mt})}catch(d){return d&&d.url?void(window.location.href=d.url):void console.error("[Quasar] boot error:",d)}!0!==o&&new b["a"](e)}Nt()},"31b8":function(e,t,n){"use strict";n.d(t,"b",(function(){return s}));var o=n("2b0e"),r=n("bc3a"),a=n.n(r);const i="http://mx100-cedis-mkrqpwcczk.dynamic-m.com:4547/vizapi/public",d="http://mx100-cedis-mkrqpwcczk.dynamic-m.com:4547/vizapi/files",s=a.a.create({baseURL:i});o["a"].prototype.$vizapi=s,o["a"].prototype.$routefiles=d},"31cd":function(e,t,n){},"4b19":function(e,t){},"4e9c":function(e,t){},5648:function(e,t){},"7ed2":function(e,t){},cb0e:function(e,t){},d114:function(e,t){},e32a:function(e,t){},f749:function(e,t){},ff8a:function(e,t){}});