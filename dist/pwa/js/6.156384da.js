(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"03f6":function(e,t,r){},"0694":function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e._self._c;return t("q-page",[t("div",{staticClass:"row"},[t("router-view"),t("div",{staticClass:"col-md-6 col-xs-12 q-pa-sm"},[t("q-table",{attrs:{dark:"",data:e.orders,columns:e.tableorders.columns,filter:e.tableorders.filtrator,pagination:e.tableorders.pagination,"card-class":"bg-darkl1",separator:"none"},scopedSlots:e._u([{key:"top-left",fn:function(){return[t("span",{staticClass:"text-overline QuickRegular"},[e._v("PEDIDOS")])]},proxy:!0},{key:"top-right",fn:function(){return[t("q-input",{attrs:{borderless:"",dark:"",filled:"",dense:"","fill-input":"",color:"green-13",debounce:"0",placeholder:"Buscar..."},scopedSlots:e._u([{key:"prepend",fn:function(){return[t("q-icon",{attrs:{name:"search"}})]},proxy:!0}]),model:{value:e.tableorders.filtrator,callback:function(t){e.$set(e.tableorders,"filtrator",t)},expression:"tableorders.filtrator"}})]},proxy:!0},{key:"no-data",fn:function(){return[t("div",{staticClass:"full-width row flex-center q-gutter-sm q-pa-md"},[t("q-icon",{attrs:{size:"2em",name:"sentiment_dissatisfied"}}),t("span",[e._v("Nada por aqui.")])],1)]},proxy:!0},{key:"body",fn:function(s){return[t("q-tr",{staticStyle:{"border-color":"1px solid green"}},[t("q-td",{key:"id"},[t("div",[e._v(e._s(s.row.id))]),t("div",{staticClass:"text--1 text-grey-5"},[e._v(e._s(e.filltkt(s.row.num_ticket)))])]),t("q-td",{key:"client"},[e._v(e._s(s.row.name))]),t("q-td",{key:"cstate",class:`st-${s.row.status.id}`,attrs:{align:"center"}},[t("div",{staticClass:"text--2"},[e._v(e._s(s.row.status.name))])]),t("q-td",{key:"createdby",attrs:{align:"center"}},[t("div",[t("q-img",{staticClass:"imguser2",attrs:{src:r("5a5b"),width:"20px",height:"20px"}})],1),t("div",{staticClass:"text--1"},[e._v(e._s(s.row.created_by.nick))])])],1)]}}])})],1),t("div",{staticClass:"col-md-6 col-xs-12 q-pa-sm"},[t("q-table",{attrs:{dark:"",data:e.agents_orders,columns:e.tableagents.columns,filter:e.tableagents.filtrator,pagination:e.tableagents.pagination,"card-class":"bg-darkl1",separator:"none","visible-columns":e.tableagents.colsview},scopedSlots:e._u([{key:"top-left",fn:function(){return[t("span",{staticClass:"text-overline QuickRegular"},[e._v("AGENTES")])]},proxy:!0},{key:"top-right",fn:function(){return[t("q-input",{attrs:{borderless:"",dark:"",filled:"",dense:"","fill-input":"",color:"green-13",debounce:"0",placeholder:"Buscar..."},scopedSlots:e._u([{key:"prepend",fn:function(){return[t("q-icon",{attrs:{name:"search"}})]},proxy:!0}]),model:{value:e.tableagents.filtrator,callback:function(t){e.$set(e.tableagents,"filtrator",t)},expression:"tableagents.filtrator"}})]},proxy:!0},{key:"no-data",fn:function(){return[t("div",{staticClass:"full-width row flex-center q-gutter-sm q-pa-md"},[t("q-icon",{attrs:{size:"2em",name:"sentiment_dissatisfied"}}),t("span",[e._v("Nada por aqui.")])],1)]},proxy:!0},{key:"body",fn:function(s){return[t("q-tr",[t("q-td",{key:"nick"},[t("div",{staticClass:"row items-center overflow-hidden"},[t("q-img",{class:s.row.socket?"useron":"useroff",attrs:{src:r("5a5b"),width:"40px",height:"40px"}}),t("div",{staticClass:"q-pl-md"},[t("div",[e._v(e._s(s.row.profile.nick))]),t("div",{staticClass:"text--2 row items-center",class:s.row.salesib?"text-light-blue-3":"text-grey-6"},[e._v("\n\t\t\t\t\t\t\t\t\t\t"+e._s(s.row.profile.id)+" "),t("q-icon",{attrs:{name:"fas fa-angle-right",color:"white"}}),e._v(" "+e._s(s.row.profile.names)+" "+e._s(s.row.profile.surname_pat)+"\n\t\t\t\t\t\t\t\t\t")],1)])],1)]),t("q-td",{key:"ordersize",attrs:{align:"center"}},[e._v("\n\t\t\t\t\t\t\t"+e._s(s.row.ordersize)+"\n\t\t\t\t\t\t\t"),t("BarOrdersAgent",{attrs:{orders:s.row.orders}})],1)],1)]}}])})],1)],1)])},a=[],i=function(){var e=this,t=e._self._c;return t("div",{staticClass:"full-width"},[e.orders.length?[t("div",{staticClass:"text--3 row bg-dark wrapperChunk"},e._l(e.chunks,(function(r,s){return t("div",{key:s,staticClass:"text-center",class:r.bg,style:`width:${e.widthChunk(r.orders.length)}%;`},[r.orders.length?t("span",{staticClass:"chunk"},[e._v("\n                    "+e._s(r.alias)+" "+e._s(r.orders.length)+"\n                ")]):e._e()])})),0)]:e._e()],2)},n=[],o={props:{orders:{type:Array,default:[]}},computed:{creating(){return{serie:"Levantando",alias:"LV",bg:"sbg-1",orders:this.orders.filter((e=>1==e.status.id))}},cashasign(){return{serie:"Asignar Caja",alias:"AC",bg:"sbg-2",orders:this.orders.filter((e=>2==e.status.id))}},forcheckin(){return{serie:"CheckIn",alias:"CKI",bg:"sbg-3",orders:this.orders.filter((e=>3==e.status.id))}},forsupply(){return{serie:"Por Surtir",alias:"PS",bg:"sbg-4",orders:this.orders.filter((e=>4==e.status.id))}},onsupply(){return{serie:"Surtiendo",alias:"SU",bg:"sbg-5",orders:this.orders.filter((e=>5==e.status.id))}},checkout(){return{serie:"CheckOut",alias:"CKO",bg:"sbg-7",orders:this.orders.filter((e=>7==e.status.id))}},oncash(){return{serie:"En Caja",alias:"EC",bg:"sbg-8",orders:this.orders.filter((e=>8==e.status.id))}},dones(){return{serie:"CheckOut",alias:"FZ",bg:"sbg-10",orders:this.orders.filter((e=>10==e.status.id))}},archives(){return{serie:"CheckOut",alias:"CN",bg:"sbg-100",orders:this.orders.filter((e=>100==e.status.id))}},chunks(){return[this.creating,this.cashasign,this.forcheckin,this.forsupply,this.onsupply,this.checkout,this.oncash,this.dones,this.archives]},widthChunk(){return e=>100*e/parseInt(this.orders.length)}}},l=o,d=(r("18b8"),r("2877")),c=Object(d["a"])(l,i,n,!1,null,"d2accb94",null),u=c.exports,f={components:{BarOrdersAgent:u},data(){return{windCreate:{state:!1,blocked:!1,ipt:{dis:!0,load:!1,client:""}},tableagents:{filtrator:"",columns:[{name:"id",field:"id",sortable:!0,label:"ID",align:"center"},{name:"nick",field:"nick",sortable:!0,label:"Agente",align:"center"},{name:"ordersize",field:"ordersize",sortable:!0,label:"Pedidos",align:"center"}],colsview:["nick","ordersize"],pagination:{sortBy:"ordersize",descending:!0,rowsPerPage:null}},tableorders:{filtrator:"",columns:[{name:"id",field:"id",sortable:!0,label:"Folio",align:"center"},{name:"client",field:"name",sortable:!0,label:"Cliente",align:"center"},{name:"cstate",field:e=>e.status.id,sortable:!0,label:"Estado",align:"center"},{name:"createdby",field:e=>e.created_by.nick,sortable:!0,label:"Agente",align:"center"}],pagination:{sortBy:"id",descending:!0,rowsPerPage:5}}}},created(){switch(console.log(this.agents_orders),this.profile.me._rol){case 1:case 2:case 3:console.log("Te quedaste en el INDEX"),this.$store.commit("Preventa/setHeaderTitle","Preventa");break;case 4:console.log("Direccionando a PEDIDOS!!"),this.$router.push("/preventa/pedidos/");break;case 6:case 7:console.log("Direccionando a SURTIDO!!"),this.$router.push("/preventa/bodega/");break;case 9:console.log("Direccionando a CHECKOUT!!"),this.$router.push("/preventa/checkout/");break}},beforeDestroy(){console.log("%cEl Index será destruido!!","background:#40739e;color:#f5f6fa;border-radius:10px;padding:6px;")},methods:{},computed:{profile(){return this.$store.getters["Account/profile"]},workin(){return this.$store.getters["Account/workin"]},orders(){return this.$store.state.Preventa.orders},agents_orders(){return this.$store.getters["Preventa/agents_orders"]},filltkt(){return e=>{let t=4,r=e.toString().length,s="";for(t;r<t;t--)s+="0";return`${s}${e}`}}}},g=f,p=(r("af50"),r("9989")),b=r("eaac"),h=r("27f9"),k=r("0016"),m=r("bd08"),v=r("db86"),_=r("068f"),w=r("eebe"),y=r.n(w),C=Object(d["a"])(g,s,a,!1,null,"4953c8d6",null);t["default"]=C.exports;y()(C,"components",{QPage:p["a"],QTable:b["a"],QInput:h["a"],QIcon:k["a"],QTr:m["a"],QTd:v["a"],QImg:_["a"]})},"18b8":function(e,t,r){"use strict";r("6c75")},"6c75":function(e,t,r){},af50:function(e,t,r){"use strict";r("03f6")}}]);