(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[29],{"7fd9":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t._self._c;return e("q-page",[e("div",{staticClass:"row q-pt-sm q-pb-xl"},[e("div",{staticClass:"col-md-6 col-xs-12 q-pa-sm"},[e("q-table",{attrs:{flat:"",dark:"",data:t.orders,columns:t.tableorders.columns,filter:t.tableorders.filtrator,pagination:t.tableorders.pagination,"card-class":"bg-darkl1",separator:"none"},scopedSlots:t._u([{key:"top",fn:function(){return[e("div",{staticClass:"full-width row items-center"},[e("div",{staticClass:"col"},[e("q-input",{attrs:{autofocus:"",borderless:"",dark:"",filled:"",dense:"","fill-input":"",color:"green-13",debounce:"0",placeholder:"Buscar...",disable:t.tableorders.blocksearch},on:{keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.preCheckout()}},scopedSlots:t._u([{key:"prepend",fn:function(){return[e("q-icon",{attrs:{name:"search"}})]},proxy:!0}]),model:{value:t.tableorders.filtrator,callback:function(e){t.$set(t.tableorders,"filtrator",e)},expression:"tableorders.filtrator"}})],1)])]},proxy:!0},{key:"no-data",fn:function(){return[e("div",{staticClass:"full-width row flex-center q-gutter-sm q-pa-md"},[e("q-icon",{attrs:{size:"2em",name:"sentiment_dissatisfied"}}),e("span",[t._v("Nada por aqui.")])],1)]},proxy:!0},{key:"body",fn:function(a){return[e("q-tr",{on:{click:function(e){return t.preCheckout(a.row.id)}}},[e("q-td",{key:"id"},[e("div",[e("span",{class:a.row._order?"ord_anx":""},[t._v(t._s(a.row.id))])]),e("div",{staticClass:"text--1 text-grey-5"},[t._v(t._s(t.filltkt(a.row.num_ticket)))])]),e("q-td",{key:"client"},[t._v(t._s(a.row.name))]),e("q-td",{key:"cstate",class:`st-${a.row.status.id}`,attrs:{align:"center"}},[e("div",{staticClass:"text--1"},[t._v(t._s(a.row.status.name))]),e("div",{staticClass:"text--2 text-grey-5"},[t._v(t._s(t.humantime(a.row.updated_at)))])]),e("q-td",{key:"createdby",attrs:{align:"center"}},[e("div",[e("q-img",{staticClass:"imguser2",attrs:{src:s("5a5b"),width:"20px",height:"20px"}})],1),e("div",{staticClass:"text--1"},[t._v(t._s(a.row.created_by.nick))])])],1)]}}])})],1)]),e("q-dialog",{staticClass:"exo",attrs:{position:"bottom"},model:{value:t.wndInit.state,callback:function(e){t.$set(t.wndInit,"state",e)},expression:"wndInit.state"}},[e("q-btn-group",{staticClass:"exo",attrs:{spread:""}},[e("q-btn",{staticClass:"q-py-md",attrs:{color:"primary",label:"Iniciar Checkout",icon:"fas fa-check",autofocus:"",stack:"","no-caps":""},on:{click:t.initCheckout}}),e("q-btn",{attrs:{color:"negative",label:"Archivar Pedido",icon:"fas fa-archive",autofocus:"",stack:"","no-caps":""}})],1)],1)],1)},r=[],o=(s("14d9"),s("bd4c")),i=s("5542"),n={data(){return{psocket:this.$sktPreventa,tableorders:{blocksearch:!1,filtrator:"",columns:[{name:"id",field:"id",sortable:!0,label:"Folio",align:"center"},{name:"client",field:"name",sortable:!0,label:"Cliente",align:"center"},{name:"cstate",field:t=>t.status.id,sortable:!0,label:"Estado",align:"center"},{name:"createdby",field:t=>t.created_by.nick,sortable:!0,label:"Agente",align:"center"}],pagination:{sortBy:"id",descending:!0,rowsPerPage:10}},wndInit:{state:!1},ordersend:null}},beforeMount(){this.$store.commit("Preventa/setHeaderTitle","Preventa | CehckOut")},methods:{preCheckout(t=null){let e=null,s=null;if(t?(e=this.orders.find((e=>e.id==t)),s=t):(e=this.orders.find((t=>t.id==this.tableorders.filtrator)),s=this.tableorders.filtrator),e)switch(this.ordersend=e,this.ordersend.status.id){case 7:this.$router.push(`/preventa/checkout/${e.id}`);break;case 5:case 6:this.wndInit.state=!0;break}else this.$q.notify({message:`Folio <b>${s}</b> no encontrado`,color:"negative",position:"center",icon:"fas fa-times",html:!0}),this.tableorders.filtrator=""},async initCheckout(){this.wndInit.state=!1,this.tableorders.blocksearch=!0,this.$q.loading.show({message:"Iniciando checkout..."});let t={_order:this.ordersend.id};console.log("Enviar el pedido"),console.log(t);let e=await i["a"].nextStep(t);if(console.log(e),e.err)this.$q.notify({message:e.err,color:"negative",icon:"fas fa-exclamation-triangle"});else{let t=e.status[e.status.length-1];this.psocket.emit("order_update",{newstate:t,order:this.ordersend,update:"state"}),this.appsounds.ok.play(),this.$router.push(`/preventa/checkout/${this.ordersend.id}`),this.$q.notify({message:"Checkout iniciado",color:"positive",icon:"done",position:"top",timeout:1e3}),this.$q.loading.hide()}}},computed:{orders(){return this.$store.getters["Preventa/OrdersCheckout"]},onsuply(){return this.orders.filter((t=>5==t.status.id))},oncheckout(){return this.orders.filter((t=>7==t.status.id))},profile(){return this.$store.getters["Account/profile"]},workin(){return this.$store.getters["Account/workin"]},filltkt(){return t=>{let e=4,s=t.toString().length,a="";for(e;s<e;e--)a+="0";return`${a}${t}`}},humantime(){return t=>{let e=Date.now(),s=Date.parse(t),a=o["b"].getDateDiff(e,s,"days");switch(a){case 0:return o["b"].formatDate(s,"hh:mm a");case 1:return"Ayer, "+o["b"].formatDate(s,"hh:mm a");default:return`Hace ${a} dias, `+o["b"].formatDate(s,"hh:mm a")}}},appsounds(){return this.$store.getters["Multimediapp/sounds"]}}},l=n,d=s("2877"),c=s("9989"),u=s("eaac"),h=s("27f9"),p=s("0016"),f=s("bd08"),b=s("db86"),m=s("068f"),k=s("24e8"),g=s("e7a9"),w=s("9c40"),v=s("eebe"),y=s.n(v),q=Object(d["a"])(l,a,r,!1,null,null,null);e["default"]=q.exports;y()(q,"components",{QPage:c["a"],QTable:u["a"],QInput:h["a"],QIcon:p["a"],QTr:f["a"],QTd:b["a"],QImg:m["a"],QDialog:k["a"],QBtnGroup:g["a"],QBtn:w["a"]})}}]);