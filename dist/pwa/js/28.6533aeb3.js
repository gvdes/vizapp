(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[28],{a458:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("q-page",[r("div",{staticClass:"row"},[r("div",{staticClass:"col q-pa-md"},[r("q-card",{staticClass:"bg-darkl1"},[r("q-card-section",{staticClass:"text-h6 text-green-13 text-uppercase"},[e._v("\n\t\t\t\t\t\tPor surtir "),r("span",{staticClass:"text-light-blue-14"},[e._v("[ "+e._s(e.forsuply.length)+" ]")])])],1),r("OrdersList",{attrs:{orders:e.forsuply},on:{clicked:e.orderclicked}})],1),r("div",{staticClass:"col-8 q-pa-md"},[r("q-card",{staticClass:"bg-darkl1"},[r("q-card-section",{staticClass:"text-h6 text-green-13 text-uppercase"},[e._v("\n\t\t\t\t\t\tSurtiendo "),r("span",{staticClass:"text-light-blue-14"},[e._v("[ "+e._s(e.onsuply.length)+" ]")])])],1),r("OrdersList",{attrs:{orders:e.onsuply},on:{clicked:e.orderclicked}})],1)]),r("q-dialog",{attrs:{position:"bottom"},model:{value:e.wndPrinters.state,callback:function(t){e.$set(e.wndPrinters,"state",t)},expression:"wndPrinters.state"}},[r("PrinterSelect",{attrs:{options:e.printers},on:{clicked:e.reprint}})],1)],1)},o=[],i=r("5542"),a=r("bd4c"),n=r("6d5d"),d=r("a1a1"),l={name:"PreventaWarehouse",components:{OrdersList:n["a"],PrinterSelect:d["a"]},data(){return{wndPrinters:{state:!1},orderselected:null,printerselected:null,socket:this.$sktPreventa}},beforeMount(){this.$store.commit("Preventa/setHeaderTitle","Preventa | Surtido"),this.socket.emit("join",{profile:this.profile,workpoint:this.workin.workpoint,room:"warehouse"}),this.socket.on("order_changestate",(e=>this.skt_add_update_order(e)))},methods:{skt_add_update_order(e){console.log(e);let t=e.order;console.log(t);let r=this.orders.findIndex((e=>{e.id,t.id}));r>=0?(console.log(`%cActualizar la orden ${t.id}...`,"background:#7158e2;color:#fffa65;border-radius:10px;padding:8px;"),this.appsounds.created.play()):(console.log(`%cAgregar la orden ${t.id}...`,"background:#7158e2;color:#fffa65;border-radius:10px;padding:8px;"),this.appsounds.created.play(),this.$store.commit("Preventa/newOrder",t))},orderclicked(e){this.orderselected=e,this.wndPrinters.state=!0},async reprint(e){console.log(e),this.printerselected=e,this.$q.loading.show({message:"Reimprimiendo..."});let t={_order:this.orderselected.id,_printer:e.id},r=await i["a"].reprint(t);r.err?this.$q.notify({message:r.err,color:"negative",icon:"fas fa-exclamation-triangle"}):(this.$q.loading.hide(),this.wndPrinters.state=!1,this.$q.notify({message:"Impresion correcta.",color:"positive",icon:"done"}))}},beforeDestroy(){this.socket.emit("unjoin",{profile:this.profile,workpoint:this.workin.workpoint,room:"warehouse"})},computed:{orders(){return this.$store.getters["Preventa/OrdersWarehouse"]},forsuply(){return this.orders.filter((e=>4==e.status.id))},onsuply(){return this.orders.filter((e=>5==e.status.id))},profile(){return this.$store.getters["Account/profile"]},workin(){return this.$store.getters["Account/workin"]},printers(){return this.$store.getters["Preventa/printersWarehouse"]},humantime(){return e=>{let t=Date.now(),r=Date.parse(e),s=a["b"].getDateDiff(t,r,"days");switch(s){case 0:return a["b"].formatDate(r,"hh:mm a");case 1:return"Ayer, "+a["b"].formatDate(r,"hh:mm a");default:return`Hace ${s} dias, `+a["b"].formatDate(r,"hh:mm a")}}},appsounds(){return this.$store.getters["Multimediapp/sounds"]}}},c=l,p=r("2877"),u=r("9989"),h=r("f09f"),f=r("a370"),g=r("24e8"),m=r("eebe"),k=r.n(m),w=Object(p["a"])(c,s,o,!1,null,null,null);t["default"]=w.exports;k()(w,"components",{QPage:u["a"],QCard:h["a"],QCardSection:f["a"],QDialog:g["a"]})}}]);