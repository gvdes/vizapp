(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{"6b46":function(e,t,o){},"74d7":function(e,t,o){"use strict";o("6b46")},cc6a:function(e,t,o){"use strict";o.r(t);var s=function(){var e=this,t=e._self._c;return t("q-layout",{attrs:{view:"lHh Lpr lFf"}},[t("q-page-container",{staticClass:"exo bg-darkl0 text-white"},[e.layout.header.state?t("q-header",{staticClass:"bg-none"},[t("q-card",{staticClass:"bg-darkl1"},[t("HeaderApp",{attrs:{title:e.layout.header.title}}),e.layout.viewsection?t("div",{staticClass:"bg-darkl1 q-pa-sm row"},[t("div",{staticClass:"col-md col-xs-12"},[t("RangeDates",{on:{inputRanges:e.loadView}})],1)]):e._e()],1)],1):e._e(),t("router-view"),e.layout.footer.state?t("q-footer",{staticClass:"bg-darktransl0",attrs:{reveal:""}},[t("ToolbarModule",{attrs:{with_home:e.inc_home}})],1):e._e()],1)],1)},a=[],r=o("b0fc"),i=o("7538"),n=o("1670"),d=o("5542"),c=o("c4e4");console.log("%c Layout Preventa Loaded!!","font-size:2em; color:yellow;");var l={name:"Preventa",components:{ToolbarModule:r["a"],RangeDates:i["a"],HeaderApp:n["a"]},data(){return{psocket:this.$sktPreventa,mainsocket:this.$vSocket}},created(){this.psocket.disconnect(),this.psocket.connect(),this.psocket.on("socketid",(e=>this.sktId(e))),this.psocket.on("joinedat",(e=>this.sktJoinedAt(e))),this.psocket.on("newjoin",(e=>this.sktNewJoin(e))),this.psocket.on("order_add",(e=>this.sktOrderAdd(e))),this.psocket.on("order_update",(e=>this.sktOrderUpdate(e))),this.psocket.on("order_aou",(e=>this.sktAOU(e))),this.psocket.on("module_update",(e=>this.sktModuleUpdate(e))),this.psocket.on("cash_update",(e=>this.sktCashUpdate(e)));let e=null;switch(this.profile.me._rol){case 1:case 2:case 3:e="admins";break;case 4:e="sales";break;case 6:case 7:e="supply";break;case 9:e="checkout";break}this.psocket.emit("join",{profile:this.profile,workpoint:this.workin.workpoint,room:e}),this.psocket.emit("join",{profile:this.profile,workpoint:this.workin.workpoint,room:"cfg"})},methods:{async loadView(e){this.$q.loading.show({message:"Cargando vista..."});let t={date_from:e.dbranges.from,date_to:e.dbranges.to},o=await d["a"].index(t),s=await c["a"].get({_rol:[4]});this.$store.commit("Preventa/startState",{index:o,agents:s}),this.$q.loading.hide()},sktId(e){console.log(`%cidSktPreventa: ${e}`,"background:#273c75;color:#f5f6fa;border-radius:10px;padding:10px;font-size:1.3em;")},sktJoinedAt(e){console.log(`%cUnion a ${e.room} OK!!`,"background:#3d3d3d;color:#3ae374;border-radius:10px;padding:10px;")},sktNewJoin(e){console.log(`%c${e.profile.me.nick} se unio a ${e.room}`,"background:#3ae374;color:#3d3d3d;border-radius:10px;padding:10px;"),console.log(e)},sktOrderAdd(e){console.log(e);let t=e.order,o=e.user.me;console.log(`%c${o.nick} inicio la orden ${t.id}`,"background:#303952;color:#e66767;border-radius:10px;padding:8px;"),this.$store.commit("Preventa/newOrder",t)},sktOrderUpdate(e){let t=e.order,o=e.newstate;console.log(`%cLa orden ${e.order.id} cambio su status a ${e.newstate.name}`,"background:#7158e2;color:#fffa65;border-radius:10px;padding:8px;"),this.$store.commit("Preventa/updateState",{order:t,newstate:o}),"/preventa/bodega"==this.$router.currentRoute.path?(console.log("El sonido ha sonado porque estoy en la bodega"),this.appsounds.supply.play()):console.log("El sonido no sono, porque no estoy en la bodega")},sktModuleUpdate({by:e,_msgstate:t,state:o}){this.$store.commit("Preventa/setState",o),console.log(`%c--❯ ${e} ${t} el modulo ${o.name}`,"background:#fbc531;color:#2f3640;border-radius:10px;padding:10px;font-size:1.3em;"),this.appsounds.alert1.play(),this.$q.notify({message:`${e} <b>${t}</b> el modulo <b>${o.name}</b>`,type:"warning",closeBtn:"Ok",timeout:1e4,position:"center",html:!0})},sktAOU(e){console.log(e),console.log(`%cAveriguando existencia de pedido ${e.order.id} para crear o actualizar!!`),this.$store.commit("Preventa/orderAOU",e)},sktCashUpdate({by:e,cash:t,newstate:o}){let s=1==o.id?"encendio":"apago";this.$store.commit("Preventa/setCashState",{cash:t,newstate:o}),this.$q.notify({message:`<b>${e}</b> ${s} la <b>${t.name}</b>`,type:"warning",closeBtn:"Ok",timeout:1e4,position:"center",html:!0})}},destroyed(){console.log("%cDesconectando de preventa...","background:#F97F51;color:#2C3A47;border-radius:10px;padding:6px;"),this.psocket.emit("unjoin",{profile:this.profile,workpoint:this.workin.workpoint,room:"admins"}),this.psocket.off("admins"),this.psocket.off("orders"),this.psocket.disconnect()},computed:{workin(){return this.$store.getters["Account/workin"]},profile(){return this.$store.getters["Account/profile"]},layout(){return this.$store.state.Preventa.layout},inc_home(){return this.profile.me._rol<=3},appsounds(){return this.$store.getters["Multimediapp/sounds"]}}},p=l,u=(o("74d7"),o("2877")),h=o("4d5a"),k=o("09e3"),g=o("e359"),m=o("f09f"),b=o("7ff0"),f=o("eebe"),w=o.n(f),$=Object(u["a"])(p,s,a,!1,null,null,null);t["default"]=$.exports;w()($,"components",{QLayout:h["a"],QPageContainer:k["a"],QHeader:g["a"],QCard:m["a"],QFooter:b["a"]})}}]);