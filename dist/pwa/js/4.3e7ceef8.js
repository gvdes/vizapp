(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"1d6c":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-toolbar",{staticClass:"row justify-between items-center"},[s("span",[t.iconlauncher?s("q-btn",{attrs:{dense:"",rounded:"",flat:"",icon:"fab fa-atlassian fa-rotate-180"},on:{click:function(e){return t.$router.push("/")}}}):s("q-icon",{attrs:{name:"fab fa-atlassian fa-rotate-180",size:"25px"}})],1),s("span",{staticClass:"col text-center"},[s("span",[t._v(t._s(t.workin.workpoint.alias))]),s("br"),s("span",[t._v(t._s(t.title))])]),s("span",{staticClass:"text-right"},[s("q-btn",{attrs:{rounded:"",dense:"",color:t.sockstate?"green-13":""}},[s("q-img",{staticStyle:{height:"30px",width:"30px"},attrs:{src:t.picnick,"spinner-color":"white"}}),s("q-menu",{attrs:{dark:"","transition-show":"flip-right","transition-hide":"flip-left"}},[s("q-list",{staticClass:"exo text-grey-6",staticStyle:{"min-width":"150px"}},[s("q-item",{attrs:{clickable:""},on:{click:function(e){return t.$router.push("/perfil")}}},[s("q-item-section",{attrs:{avatar:""}},[s("q-icon",{attrs:{name:"fas fa-user-astronaut"}})],1),s("q-item-section",[t._v("Hola "+t._s(t.session.me.nick))])],1),s("q-separator"),s("q-item",{attrs:{clickable:""},on:{click:t.sessionDestroy}},[s("q-item-section",{attrs:{avatar:""}},[s("q-icon",{attrs:{name:"meeting_room"}})],1),s("q-item-section",[t._v("Salir")])],1)],1)],1)],1)],1)])},i=[],o={name:"ToolbarAccount",props:{title:{type:String,default:""},iconlauncher:{type:Boolean,default:!0},sockstate:{type:Boolean,default:!1}},methods:{sessionDestroy(){this.$store.commit("Account/unsetsession"),this.$router.push("/acceso")}},computed:{session:{get(){return this.$store.state.Account.profile}},workin:{get(){return this.$store.state.Account.workin}},workpoints:{get(){return this.$store.state.Account.workpoints}},picnick(){return this.session.me.pictures?this.session.me.pictures:"https://www.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png"}}},n=o,r=s("2877"),l=s("65c6"),c=s("9c40"),d=s("0016"),p=s("068f"),u=s("4e73"),f=s("1c1c"),h=s("66e5"),m=s("4074"),g=s("eb85"),b=s("eebe"),v=s.n(b),x=Object(r["a"])(n,a,i,!1,null,null,null);e["a"]=x.exports;v()(x,"components",{QToolbar:l["a"],QBtn:c["a"],QIcon:d["a"],QImg:p["a"],QMenu:u["a"],QList:f["a"],QItem:h["a"],QItemSection:m["a"],QSeparator:g["a"]})},"615c":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-layout",{staticClass:"exo",attrs:{view:"hHh Lpr fFf"}},[s("q-header",{staticClass:"bg-darkl0 text-grey-5 q-pa-sm"},[s("q-card",{staticClass:"bg-darkl1"},[s("toolbar-account"),s("div",{staticClass:"q-pa-sm row text-center"},[s("div",{staticClass:"col"},[s("div",{staticClass:"text--2 text-grey-6"},[t._v("Modelos")]),s("div",{staticClass:"text-light-blue-13 text-h6"},[t._v(t._s(this.labels.length))])]),s("div",{staticClass:"col"},[s("div",{staticClass:"text--2 text-grey-6"},[t._v("Etiquetas")]),s("div",{staticClass:"text-light-blue-13 text-h6"},[t._v(t._s(this.labels_size))])]),s("div",{staticClass:"col"},[s("div",{staticClass:"text--2 text-grey-6"},[t._v("Estandar")]),s("div",{staticClass:"text-green-13 text-h6"},[t._v(t._s(this.labels_standar))])]),s("div",{staticClass:"col"},[s("div",{staticClass:"text--2 text-grey-6"},[t._v("Ofertas")]),s("div",{staticClass:"text-orange text-h6"},[t._v(t._s(this.labels_offers))])])])],1)],1),s("q-dialog",{staticClass:"text-grey-6",attrs:{position:"bottom"},model:{value:t.wndAddProduct.state,callback:function(e){t.$set(t.wndAddProduct,"state",e)},expression:"wndAddProduct.state"}},[s("q-card",{staticClass:"bg-darkl1 text-grey-6"},[s("ProductAutocomplete",{attrs:{checkState:!1},on:{input:t.add}})],1)],1),s("q-dialog",{attrs:{persistent:""},model:{value:t.wndImport.state,callback:function(e){t.$set(t.wndImport,"state",e)},expression:"wndImport.state"}},[s("q-card",{staticClass:"bg-darkl0 text-grey-5 exo"},[s("q-card-section",[t._v("\n\t\t\t\tSe preocesaron "+t._s(t.wndImport.rows)+" filas, "+t._s(t.wndImport.goals.length)+" modelos fueron encontrados y agregados a la lista pero;\n\t\t\t")]),t.wndImport.notfound.length?s("q-card-section",[s("div",[t._v("No encontramos estos "+t._s(t.wndImport.notfound.length)+" modelos:")]),t._l(t.wndImport.notfound,(function(e,a){return s("div",{key:"cnf_"+a,staticClass:"text-uppercase"},[t._v("\n\t\t\t\t\t"+t._s(e)+"\n\t\t\t\t")])}))],2):t._e(),t.wndImport.repeat.length?s("q-card-section",[s("div",[t._v("Se repitieron estos "+t._s(t.wndImport.repeat.length)+" codigos:")]),t._l(t.wndImport.repeat,(function(e,a){return s("div",{key:"crp_"+a,staticClass:"text-uppercase"},[t._v(t._s(e))])}))],2):t._e(),s("q-card-actions",{attrs:{align:"center"}},[s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Ok",color:"green-13"}})],1)],1)],1),s("q-dialog",{attrs:{position:"bottom"},model:{value:t.wndGenPdf.state,callback:function(e){t.$set(t.wndGenPdf,"state",e)},expression:"wndGenPdf.state"}},[s("q-card",{staticClass:"bg-darkl0 exo text-grey-6"},[s("q-card-section",[t._v("Seleccione un formato")]),s("div",{staticClass:"row"},t._l(t.wndGenPdf.formatts,(function(e){return s("q-btn",{key:e.id,staticClass:"col-6",staticStyle:{"min-height":"80px"},attrs:{flat:"",color:"grey-5",label:e.name},on:{click:function(s){return t.genPdf(e.id)}}})})),1)],1)],1),s("q-drawer",{attrs:{side:"left","content-class":"bg-darkl0 text-grey-6"},model:{value:t.leftDrawer,callback:function(e){t.leftDrawer=e},expression:"leftDrawer"}},[s("q-scroll-area",{staticClass:"fit"},[s("div",{staticClass:"column q-gutter-md q-pt-md"},[s("div",{staticClass:"q-px-md"},[s("div",[s("q-checkbox",{attrs:{dark:"",label:"Incluir piezas por Caja",color:"green-13"},on:{input:t.updateCacheLabels},model:{value:t.useIpack,callback:function(e){t.useIpack=e},expression:"useIpack"}})],1)]),s("div",{staticClass:"q-px-md"},[s("div",{staticClass:"text-overline"},[t._v("Precios")]),s("div",{staticClass:"column"},t._l(t.labelsPrices,(function(e,a){return s("q-checkbox",{key:a,attrs:{dark:"",val:e.id,label:e.fullname,color:"green-13"},on:{input:t.updateCacheLabels},model:{value:t.usingPrices,callback:function(e){t.usingPrices=e},expression:"usingPrices"}})})),1)]),s("div",{staticClass:"q-px-md"},[s("div",{staticClass:"text-overline"},[t._v("Opciones")]),s("div",[s("q-btn-group",{staticClass:"bg-darkl1",attrs:{spread:""}},[s("q-btn",{attrs:{dark:"",icon:"publish"},on:{click:t.triggerInputFile}}),t.labels.length?[s("q-btn",{attrs:{dark:"",icon:"delete_sweep"},on:{click:t.confirmDrop}}),s("q-btn",{attrs:{dark:"",icon:"fas fa-file-download"},on:{click:function(e){t.wndGenPdf.state=!0}}})]:t._e()],2)],1),s("input",{ref:"blobfile",attrs:{type:"file",id:"blobfile",hidden:"",accept:".xlsx"},on:{input:t.readFile}})])])])],1),s("q-page-container",[s("q-page",{staticClass:"bg-darkl0 text-grey-5",attrs:{padding:""}},[s("div",{staticClass:"q-gutter-sm q-pb-xl"},t._l(t.labels,(function(e,a){return s("q-card",{key:a,staticClass:"bg-darkl1"},[s("q-card-section",[s("div",{staticClass:"row items-center"},[s("q-chip",{staticClass:"fixed-right absolute-right text-bold text-white text-uppercase",attrs:{size:"sm",color:t.colorLabel(e.type)}},[t._v(t._s(e.type))]),s("div",{staticClass:"col text-center"},[s("div",{staticClass:"text-h5"},[t._v(t._s(e.code))]),s("div",{staticClass:"text-bold"},[t._v(t._s(e.name))]),s("div",{staticClass:"text--2"},[t._v(t._s(e.description))])])],1)]),s("q-card-section",[s("div",{staticClass:"row items-start text-white"},t._l(e.usedPrices,(function(e,a){return s("div",{key:a,staticClass:"col text-center"},[s("div",[t._v(t._s(e.alias))]),s("div",[t._v(t._s(e.price))])])})),0)]),s("q-btn-group",{staticClass:"text-grey-5",attrs:{spread:""}},[s("q-btn",{attrs:{flat:"",color:"negative",icon:"delete"},on:{click:function(e){return t.remove(a)}}}),s("q-btn",{attrs:{flat:"",icon:"settings",disable:""}}),s("q-btn",{attrs:{flat:"",icon:"remove"},on:{click:function(e){return t.updateCopies(a,"d")}}}),s("span",{staticClass:"text-center self-center q-px-md"},[s("div",{staticClass:"text-caption text--2 "},[t._v("copias")]),s("div",{staticClass:"text-bold q-pb-sm"},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(e.copies)+"\n\t\t\t\t\t\t\t")])]),s("q-btn",{attrs:{flat:"",icon:"add"},on:{click:function(e){return t.updateCopies(a,"u")}}})],1)],1)})),1)]),s("q-page-sticky",{attrs:{position:"bottom-right",offset:[10,10]}},[s("div",{staticClass:"column q-gutter-sm"},[s("q-btn",{staticClass:"bg-darkl1 shadow-2",attrs:{color:"green-13",flat:"",rounded:"",icon:"add"},on:{click:function(e){t.wndAddProduct.state=!0}}})],1)]),s("q-page-sticky",{attrs:{position:"bottom-left",offset:[10,10]}},[s("div",{staticClass:"column q-gutter-sm"},[s("q-btn",{attrs:{color:"green-13",dense:"",flat:"",rounded:"",icon:"settings"},on:{click:function(e){t.leftDrawer=!0}}})],1)])],1)],1)},i=[],o=(s("e01a"),s("13d5"),s("a434"),s("e6cf"),s("ddb0"),s("31b8")),n={index(){return o["b"].get("/pdf").then((t=>{let e=t.data;return e})).catch((t=>{console.log(t)}))},generate(t){return o["b"].post("pdf/etiquetas",t)}},r=s("e8ae"),l=s.n(r),c=s("f7cb"),d=s("1d6c"),p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("q-select",{staticClass:"text-uppercase",attrs:{dark:"",dense:"",filled:"","fill-input":"",color:"green-13","use-input":"","hide-dropdown-icon":"","input-debounce":"0","option-value":"id","option-label":"code","hide-selected":"",behavior:"menu",autofocus:"",value:t.autocom.model,options:t.autocom.options,type:t.iptsearch.type},on:{filter:t.autocomplete,input:t.selItem},scopedSlots:t._u([{key:"no-option",fn:function(){return[s("q-item",[s("q-item-section",{staticClass:"text-grey"},[t._v("Sin coincidencias")])],1)]},proxy:!0},{key:"prepend",fn:function(){return[s("q-btn",{attrs:{type:"button",dense:"",size:"sm",flat:"",icon:t.iptsearch.icon,color:"grey-6"},on:{click:t.toogleIptSearch}})]},proxy:!0},{key:"option",fn:function(e){return[e.opt.status.id>1?s("div",t._b({staticClass:"text-grey-7 q-pa-sm"},"div",e.itemProps,!1),[s("div",{staticClass:"text-bold"},[t._v("\n                    "+t._s(e.opt.code)+" - "+t._s(e.opt.name)+"\n                    "),s("q-chip",{staticClass:"text--2",attrs:{color:"red","text-color":"white",icon:"warning",label:e.opt.status.name}})],1),s("div",{staticClass:"text--2",attrs:{caption:""}},[t._v(t._s(e.opt.description))])]):s("div",t._g(t._b({staticClass:"q-pa-sm q-mb-sm"},"div",e.itemProps,!1),e.itemEvents),[s("div",{staticClass:"text-body1 text-bold"},[t._v("\n                    "+t._s(e.opt.code)+" - "+t._s(e.opt.name)+"\n                ")]),s("div",{staticClass:"text--2",attrs:{caption:""}},[t._v(t._s(e.opt.description))])])]}}]),model:{value:t.autocom.model,callback:function(e){t.$set(t.autocom,"model",e)},expression:"autocom.model"}})],1)},u=[],f=(s("498a"),{props:{checkState:{default:!1,type:Boolean},image:{default:!1,type:Boolean}},data(){return{autocom:{model:null,options:void 0},iptsearch:{processing:!1,type:"text",icon:"fas fa-hashtag"}}},methods:{autocomplete(t,e,s){let a={params:{code:t.trim()}};c["a"].autocomplete(a).then((t=>{let s=t.data;e((()=>{this.autocom.options=s}))})).catch((t=>{console.log(t)}))},toogleIptSearch(){switch(this.iptsearch.type){case"text":this.iptsearch.type="number",this.iptsearch.icon="fas fa-font";break;case"number":this.iptsearch.type="text",this.iptsearch.icon="fas fa-hashtag";break}this.$refs.iptsearch.focus()},selItem(t){this.$emit("input",t),setTimeout((()=>{this.autocom.model=null}),100)}}}),h=f,m=s("2877"),g=s("ddd8"),b=s("66e5"),v=s("4074"),x=s("9c40"),q=s("b047"),k=s("eebe"),_=s.n(k),y=Object(m["a"])(h,p,u,!1,null,null,null),C=y.exports;_()(y,"components",{QSelect:g["a"],QItem:b["a"],QItemSection:v["a"],QBtn:x["a"],QChip:q["a"]});var w={components:{ToolbarAccount:d["a"],ProductAutocomplete:C},data(){return{leftDrawer:!1,labelsPage:[],labelsPrices:[{id:1,fullname:"Menudeo",shortname:"MEN"},{id:2,fullname:"Mayoreo",shortname:"MAY"},{id:3,fullname:"Docena",shortname:"DOC"},{id:4,fullname:"Caja",shortname:"CAJ"}],usingPrices:[2],useIpack:!1,wndAddProduct:{state:!1},index:void 0,wndGenPdf:{state:!1,formatts:[]},wndImport:{state:!1,goals:[],notfound:[],repeat:[],rows:0}}},async beforeMount(){this.$store.commit("Layout/hideToolbarModule"),this.index=await n.index(),this.wndGenPdf.formatts=this.index.types;let t=JSON.parse(localStorage.getItem("applabels"));t?(this.usingPrices=t.settings.usingPrices,this.useIpack=t.settings.useIpack,this.labelsPage=t.labels):(t={settings:{usingPrices:[1,2],useIpack:!1},labels:[]},localStorage.setItem("applabels",JSON.stringify(t)))},methods:{add(t){let e=JSON.parse(JSON.stringify(t));if(this.labelsPage.findIndex((t=>t.id==e.id))>=0)this.$q.notify({icon:"fas fa-grin-beam-sweat",color:"info",message:`<b>${e.code}</b> ya existe en la lista`,html:!0});else{console.log("Agregar Etiqueta");let t=this.labelType(e.prices);console.log(t),e.copies=1,e.type=t.type,e.usedPrices=t.prices,this.labelsPage.unshift(e),this.updateCacheLabels()}},remove(t){this.labelsPage.splice(t,1),this.updateCacheLabels()},confirmDrop(){this.$q.dialog({message:"Quieres eliminar todas las etiquetas?",cancel:!0,persistent:!0}).onOk((()=>{this.labelsPage=[],this.updateCacheLabels(),this.$q.notify({message:"Etiquetas eliminadas.",icon:"done",color:"positive",position:"center",timeout:1e3}),this.leftDrawer=!1}))},updateCacheLabels(){let t={settings:{usingPrices:this.usingPrices,useIpack:this.useIpack},labels:this.labelsPage};localStorage.setItem("applabels",JSON.stringify(t))},updateCopies(t,e){switch(e){case"d":this.labels[t].copies>1?this.labelsPage[t].copies--:this.labels[t].copies=1;break;default:this.labels[t].copies++;break}this.updateCacheLabels()},genPdf(t){console.log("Generando PDF en formato: "+t),this.$q.loading.show({message:"Generando documento, espera.."});let e=this.labelsPage.map((t=>(console.log(t),{id:t.id,code:t.code,name:t.name,description:t.description,type:t.type,copies:t.copies,prices:t.usedPrices}))),s={_pdf:t,isInnerPack:this.useIpack,products:e};n.generate(s).then((t=>{let e=t.data;console.log(e),this.$q.loading.hide(),window.open(`${this.$routefiles}/${e.file}`),this.$q.notify({message:"Documento generado",icon:"done",color:"positive"}),this.wndGenPdf.state=!1})).catch((t=>{console.log(t)}))},labelType(t){let e=[...t],s=[...t],a=e.filter((t=>1==t.id||2==t.id||3==t.id)),i=e.filter((t=>2==t.id||3==t.id)),o=a.reduce(((t,e)=>t+e.price),0)/3;if(o==a[0].price){console.log("Es oferta");let t={alias:"OFERTA",id:0,name:"Oferta",price:s[0].price,used:!0};return{type:"off",prices:[t]}}return i[0].price==i[1].price?(console.log("Es Mayoreo"),{type:"may",prices:i}):(console.log("Es standard"),s.map((t=>(t.used=!!this.usingPrices.includes(t.id),t))),{type:"std",prices:s.filter((t=>t.used))})},triggerInputFile(){this.$refs.blobfile.click()},readFile(){let t=document.getElementById("blobfile").files[0],e=new l.a.Workbook,s=[];e.xlsx.load(t).then((t=>{let a=e.getWorksheet("Sheet1"),i=a.getColumn("A");if(i.eachCell({includeEmpty:!0},(function(t,e){t.value&&s.push(t.value)})),s.length){console.log(s);let t={codes:s};this.wndImport.rows=s.length,this.$q.loading.show({message:"Procesando archivo, espera.."}),c["a"].getMassive(t).then((t=>{let e=t.data;console.log(e);let s=0;e.products.forEach((t=>{this.add(t),this.wndImport.goals.unshift(t),s++})),this.$q.loading.hide(),!s||e.fails.notFound.length||e.fails.repeat.length?(this.wndImport.notfound=e.fails.notFound,this.wndImport.repeat=e.fails.repeat,this.wndImport.state=!0):this.$q.notify({message:"Etiquetas generadas: "+s,color:"positive",icon:"done",timeout:1e3})})).catch((t=>{console.log(t)}))}else this.$q.notify({message:"Vaya!! Al parecer este archivo esta vacio.",icon:"fas fa-grin-beam-sweat",color:"negative"});document.getElementById("blobfile").value=""}))}},computed:{labels(){return this.labelsPage.length?this.labelsPage:[]},labels_size(){return this.labels.reduce(((t,e)=>e.copies+t),0)},labels_standar(){return this.labels.filter((t=>"std"==t.type||"may"==t.type)).reduce(((t,e)=>e.copies+t),0)},labels_offers(){return this.labels.filter((t=>"off"==t.type)).reduce(((t,e)=>e.copies+t),0)},colorLabel(){return t=>{switch(t){case"off":return"orange-9";case"may":return"light-blue-9";case"std":return"green-9"}}}}},P=w,I=(s("958e"),s("4d5a")),S=s("e359"),$=s("f09f"),Q=s("24e8"),A=s("a370"),E=s("4b7e"),D=s("9404"),O=s("4983"),L=s("8f8e"),M=s("e7a9"),G=s("09e3"),B=s("9989"),F=s("27f9"),N=s("de5e"),J=s("7f67"),T=Object(m["a"])(P,a,i,!1,null,"1c34b56e",null);e["default"]=T.exports;_()(T,"components",{QLayout:I["a"],QHeader:S["a"],QCard:$["a"],QDialog:Q["a"],QCardSection:A["a"],QCardActions:E["a"],QBtn:x["a"],QDrawer:D["a"],QScrollArea:O["a"],QCheckbox:L["a"],QBtnGroup:M["a"],QPageContainer:G["a"],QPage:B["a"],QChip:q["a"],QInput:F["a"],QPageSticky:N["a"]}),_()(T,"directives",{ClosePopup:J["a"]})},"6d22":function(t,e,s){},"958e":function(t,e,s){"use strict";var a=s("6d22"),i=s.n(a);i.a},f7cb:function(t,e,s){"use strict";var a=s("31b8");e["a"]={autocomplete(t){return a["b"].get("/product/autocomplete",t)},getMassive(t){return a["b"].post("/product/getMassive",t)},labelStates(){return a["b"].get("/product/getStatus").then((t=>t.data.status)).catch((t=>{console.log(t)}))},updateState(t){return a["b"].post("/product/updateStatus",t)}}}}]);