(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[32],{f673:function(e,t,o){"use strict";o.r(t);var r=function(){var e=this,t=e._self._c;return t("q-page",{attrs:{padding:""}},[t("OrderListRequisitions",{attrs:{orders:e.orders},on:{clicked:e.orderclicked}}),t("q-dialog",{attrs:{position:"bottom"},model:{value:e.wndSetOrder.state,callback:function(t){e.$set(e.wndSetOrder,"state",t)},expression:"wndSetOrder.state"}},[t("q-card",{staticClass:"bg-darkl0 text-grey-6 exo"},[t("q-toolbar",{staticClass:"text-white"},[e._v("Nuevo Pedido")]),t("q-card-section",[t("div",{staticClass:"row q-gutter-md items-center"},[t("q-select",{staticClass:"col",attrs:{dark:"",color:"green-13",label:"Tipo",options:e.comboreqstypes,disable:1==e.comboreqstypes.length},model:{value:e.neworder.type,callback:function(t){e.$set(e.neworder,"type",t)},expression:"neworder.type"}}),t("q-select",{staticClass:"col",attrs:{dark:"",color:"green-13",label:"Destino",options:e.combowkps},model:{value:e.neworder.dest,callback:function(t){e.$set(e.neworder,"dest",t)},expression:"neworder.dest"}})],1),3==e.neworder.type.value?t("div",{staticClass:"row items-center q-gutter-md"},[t("q-select",{directives:[{name:"show",rawName:"v-show",value:e.soldValidate.length,expression:"soldValidate.length"}],staticClass:"col",attrs:{dark:"",color:"green-13",label:"Origen",options:e.combowkpsorigin},model:{value:e.neworder.origin,callback:function(t){e.$set(e.neworder,"origin",t)},expression:"neworder.origin"}}),t("q-input",{staticClass:"col",attrs:{dark:"",type:"text",color:"green-13",label:"Folio"},model:{value:e.neworder.folio,callback:function(t){e.$set(e.neworder,"folio",t)},expression:"neworder.folio"}})],1):e._e(),4==e.neworder.type.value?t("div",{staticClass:"row items-center q-gutter-md"},[t("q-input",{staticClass:"col",attrs:{dark:"",type:"text",color:"green-13",label:"Folio"},model:{value:e.neworder.folio,callback:function(t){e.$set(e.neworder,"folio",t)},expression:"neworder.folio"}})],1):e._e(),t("q-input",{attrs:{dark:"",color:"green-13",label:"notas",type:"text",autofocus:""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.tryCreate.apply(null,arguments)}},model:{value:e.neworder.notes,callback:function(t){e.$set(e.neworder,"notes",t)},expression:"neworder.notes"}})],1),t("q-card-actions",{attrs:{align:"right"}},[t("q-btn",{staticClass:"bg-darkl1 shadow-1",attrs:{dark:"",flat:"",color:"green-13",icon:"done",loading:e.wndSetOrder.creating,disable:e.wndSetOrder.creating},on:{click:e.tryCreate}})],1)],1)],1),t("q-page-sticky",{attrs:{position:"bottom-right",offset:[10,5]}},[t("q-btn",{staticClass:"bg-darkl1 shadow-1",attrs:{rounded:"",flat:"",color:"green-13",icon:"add"},on:{click:function(t){e.wndSetOrder.state=!0}}})],1)],1)},s=[],a=(o("14d9"),o("bd9f")),i=o("bd4c"),n=o("981c"),l=function(){var e=this,t=e._self._c;return t("div",[t("q-table",{attrs:{grid:"",flat:"",dark:"","row-key":"id",columns:e.tableorders.columns,"visible-columns":e.visibleColumns,data:e.orders,pagination:e.initpagination,filter:e.tableorders.filtrator},scopedSlots:e._u([e.orders.length?{key:"top-right",fn:function(){return[t("q-input",{attrs:{dense:"",color:"green-13",dark:"",debounce:"0",placeholder:"Buscar (folio o nombre)"},scopedSlots:e._u([{key:"prepend",fn:function(){return[t("q-icon",{attrs:{name:"search"}})]},proxy:!0}],null,!1,2901929698),model:{value:e.tableorders.filtrator,callback:function(t){e.$set(e.tableorders,"filtrator",t)},expression:"tableorders.filtrator"}})]},proxy:!0}:null,{key:"item",fn:function(o){return[t("div",{staticClass:"q-pa-sm col-xs-12 text-grey-4 col-sm-6 col-md-4 col-lg-3"},[t("q-card",{class:`bg-darkl1 cardDesign-${o.row.status.id}`,attrs:{flat:""},on:{click:function(t){return e.clicked(o.row)}}},[t("div",{staticClass:"row items-center q-pa-xs"},[t("span",{staticClass:"q-ml-sm text-h6"},[e._v(e._s(o.row.id))]),t("span",{staticClass:"q-ml-md"},[e._v(e._s(o.row.name))])]),t("q-separator"),t("div",{staticClass:"col column text--1 q-pa-sm"},[t("div",[e._v("Creacion: "+e._s(o.row.created_at))]),t("div",[e._v("Agente: "+e._s(o.row.created_by.nick))]),t("div",{staticClass:"text-amber-13"},[e._v("Nota: "+e._s(""!=o.row.notes?o.row.notes:"Sin Notas"))]),t("div",{staticClass:"text--2 text-right text-grey-6"},[e._v("\n              "+e._s(o.row.status.name)+"\n            ")])])],1)],1)]}},{key:"bottom",fn:function(o){return[e.orders.length>10?t("q-page-sticky",{attrs:{position:"bottom-left",offset:[10,3]}},[t("q-btn-group",{staticClass:"bg-dark text-white",attrs:{rounded:""}},[o.pagesNumber>2?t("q-btn",{staticClass:"q-px-sm",attrs:{icon:"first_page",round:"",dense:"",flat:"",disable:o.isFirstPage},on:{click:o.firstPage}}):e._e(),t("q-btn",{staticClass:"q-px-sm",attrs:{icon:"chevron_left",round:"",dense:"",flat:"",disable:o.isFirstPage},on:{click:o.prevPage}}),t("q-btn",{attrs:{flat:"",disable:"","no-caps":""}},[e._v(e._s(o.pagination.page)+" / "+e._s(o.pagesNumber))]),t("q-btn",{staticClass:"q-px-sm",attrs:{icon:"chevron_right",round:"",dense:"",flat:"",disable:o.isLastPage},on:{click:o.nextPage}}),o.pagesNumber>2?t("q-btn",{staticClass:"q-px-sm",attrs:{icon:"last_page",round:"",dense:"",flat:""},on:{click:o.lastPage}}):e._e()],1)],1):e._e()]}}],null,!0)})],1)},d=[],c={name:"RequistionsOrdersTable",props:{orders:{type:Array,default:[]}},data(){return{tableorders:{columns:[{name:"id",align:"left",label:"Folio",field:"id",sortable:!0},{name:"client",align:"left",label:"Cliente",field:"name",sortable:!0},{name:"cstate",align:"center",label:"Estado",field:e=>e.status.name,sortable:!0},{name:"timestart",align:"center",label:"Hora",field:"created_at",sortable:!0},{name:"createdby",align:"center",label:"Agente",field:e=>e.created_by.nick,sortable:!0},{name:"notes",align:"center",label:"Notas",field:"notes",sortable:!0}],filtrator:""},initpagination:{sortBy:"id",descending:!1,page:1,rowsPerPage:10}}},methods:{clicked(e){console.log(e),this.$emit("clicked",e)}},computed:{profile(){return this.$store.getters["Account/profile"]},visibleColumns(){let e=this.profile.me._rol;return 1==e||2==e||3==e?["id","client","cstate","timestart","createdby","notes"]:["id","client","cstate","timestart"]}}},u=c,p=o("2877"),g=o("eaac"),m=o("27f9"),f=o("0016"),b=o("f09f"),h=o("eb85"),w=o("de5e"),k=o("e7a9"),v=o("9c40"),y=o("eebe"),q=o.n(y),x=Object(p["a"])(u,l,d,!1,null,"13850e02",null),$=x.exports;q()(x,"components",{QTable:g["a"],QInput:m["a"],QIcon:f["a"],QCard:b["a"],QSeparator:h["a"],QPageSticky:w["a"],QBtnGroup:k["a"],QBtn:v["a"]});var _={components:{OrderListRequisitions:$},data(){return{dialog:!1,name:"Resurtido / Inicio",initpagination:{sortBy:"id",descending:!1,page:1,rowsPerPage:20},status:[],index:void 0,wndSetOrder:{state:!1,creating:!1},neworder:{notes:"",type:{label:"Manual",value:1},dest:{label:"CEDISSAP",value:1},origin:{label:"---",value:null},"folio:":void 0},sounds:{moved:new Audio("sounds/moved.mp3")},socket:this.$sktRestock}},async beforeMount(){this.index=await this.loadIndex()},mounted(){this.$store.commit("Requisitions/setHeaderState",!0),this.$store.commit("Requisitions/setFooterState",!0),this.$store.commit("Requisitions/setHeaderTitle",this.name)},methods:{skt_order_created(e){let t=e.order,o=e.user.me;console.log(`%c${o.nick} esta creando la orden ${t.id}`,"background:#303952;color:#e66767;border-radius:10px;padding:8px;"),console.log(e),this.$store.commit("Requisitions/newOrder",t)},skt_order_changestate(e){console.log(e);let t=e.state.name,o=e.order;o.log=e.log,o.status=e.state,console.log(`%cLa orden ${e.order.id} cambio su status a ${e.state.name}`,"background:#7158e2;color:#fffa65;border-radius:10px;padding:8px;"),this.$store.commit("Requisitions/updateState",{order:o,newState:t})},loadIndex(){return a["a"].index()},orderclicked(e){this.$router.push(`/pedidos/${e.id}`)},open(e){console.log("editar "+e),this.$router.push("/pedidos/"+e)},tryCreate(){this.appsounds.creating.play(),console.log("Creando pedido!!");let e=new Object;e._workpoint_to=this.neworder.dest.value,e._type=this.neworder.type.value,e.notes=this.neworder.notes;let t=!1;switch(console.log(e),console.log(this.neworder.type.value),this.neworder.type.value){case 2:this.$q.loading.show({spinner:n["a"],spinnerColor:"green-13",message:"Tu pedido se esta generando, por favor espera mientras consultamos existencias"}),t=!0;break;case 3:e.folio=this.neworder.folio,e.store=this.soldValidate.length?this.neworder.origin.value:this.workin.workpoint.id,console.log(e),e.folio||e.store?(t=!0,this.$q.loading.show({spinner:n["a"],spinnerColor:"green-13",message:`Buscando folio <b class="text-green-13">${e.folio}</b> en <b class="text-green-13">${e.folio}</b>, porfavor espera`,html:!0})):(t=!1,this.$q.notify({icon:"fas fa-exclamation-circle",color:"red",message:"Sucursal y folio son obligatorios"}));break;case 4:e.folio=this.neworder.folio,e.store=this.neworder.origin.value,e.folio?(t=!0,this.$q.loading.show({spinner:n["a"],spinnerColor:"green-13",message:`Buscando folio <b class="text-green-13">${e.folio}</b> en <b class="text-green-13">${e.folio}</b>, porfavor espera`,html:!0})):(t=!1,this.$q.notify({icon:"fas fa-exclamation-circle",color:"red",message:"Sucursal y folio son obligatorios"}));break;default:t=!0,this.wndSetOrder.creating=!0;break}t&&a["a"].create(e).then((e=>{let t=e.data;console.log(t),this.$q.loading.hide(),this.wndSetOrder.creating=!1,this.wndSetOrder.state=!1,this.$q.notify({message:`Pedido ${t.order.id} creado!`,color:"positive",position:"center",timeout:1500}),this.$sktRestock.emit("creating",{user:this.profile,from:this.workin,order:t.order,to:this.neworder.dest}),this.$router.push("/pedidos/"+t.order.id)})).catch((e=>{console.log(e),this.$q.notify({message:"Rayos!!, esto no ha funcionado!",icon:"bug",color:"negative"})}))}},computed:{orders(){return this.$store.state.Requisitions.orders.filter((e=>e.from.id==this.workin.workpoint.id))},soldValidate(){return[this.workin].filter((e=>1==e.workpoint.id||2==e.workpoint.id||16==e.workpoint.id))},appsounds(){return this.$store.getters["Multimediapp/sounds"]},workpoints(){return this.$store.state.Requisitions.printers},profile(){return this.$store.getters["Account/profile"]},workin(){return this.$store.getters["Account/workin"]},socketroom(){return this.profile.me._rol<=3?"admin":"orders"},combowkps(){return this.index?this.index.workpoints.map((e=>1==e.id||2==e.id||16==e.id||13==e.id?{label:e.alias,value:e.id}:null)).filter((e=>null!=e)):[]},combowkpsorigin(){return this.workpoints?this.workpoints.filter((e=>"VIZ"!=e.alias)).map((e=>({label:e.alias,value:e.id}))):[]},comboreqstypes(){if(this.index){let e=this.index.types.map((e=>({label:e.name,value:e.id})));return e}return[]},labelstate(){return e=>{let t=e.log.findIndex((t=>t.id==e.status.id));return e.log[t].name}},timestate(){return e=>{let t=e.log.findIndex((t=>t.id==e.status.id)),o=e.log[t].created_at;return this.humantime(o)}},humantime(){return e=>{let t=Date.now(),o=Date.parse(e),r=i["b"].getDateDiff(t,o,"days");switch(r){case 0:return"Hoy a las "+i["b"].formatDate(o,"hh:mm a");case 1:return"Ayer a las "+i["b"].formatDate(o,"hh:mm a");default:return`Hace ${r} dias, a las `+i["b"].formatDate(o,"hh:mm a")}}},ordersize(){return e=>{let t=e.length;if(t){let o=e.reduce(((e,t)=>t.ordered.amount+e),0);return`M:${t}, P:${o}`}return"--"}},layout(){return this.$store.state.Requisitions.layout}}},C=_,S=o("9989"),O=o("24e8"),P=o("65c6"),Q=o("a370"),R=o("ddd8"),D=o("4b7e"),A=o("7f67"),I=Object(p["a"])(C,r,s,!1,null,null,null);t["default"]=I.exports;q()(I,"components",{QPage:S["a"],QDialog:O["a"],QCard:b["a"],QToolbar:P["a"],QCardSection:Q["a"],QSelect:R["a"],QInput:m["a"],QCardActions:D["a"],QBtn:v["a"],QSeparator:h["a"],QPageSticky:w["a"]}),q()(I,"directives",{ClosePopup:A["a"]})}}]);