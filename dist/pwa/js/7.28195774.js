(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"615c":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("q-layout",{staticClass:"exo",attrs:{view:"hHh Lpr fFf"}},[s("q-header",{staticClass:"bg-darkl0 text-grey-5 q-pa-sm"},[s("q-card",{staticClass:"bg-darkl1"},[s("toolbar-account"),s("div",{staticClass:"q-pa-sm row text-center"},[s("div",{staticClass:"col"},[s("div",{staticClass:"text--2 text-grey-6"},[e._v("Modelos")]),s("div",{staticClass:"text-light-blue-13 text-h6"},[e._v(e._s(this.labels.length))])]),s("div",{staticClass:"col"},[s("div",{staticClass:"text--2 text-grey-6"},[e._v("Etiquetas")]),s("div",{staticClass:"text-light-blue-13 text-h6"},[e._v(e._s(this.labels_size))])]),s("div",{staticClass:"col"},[s("div",{staticClass:"text--2 text-grey-6"},[e._v("Estandar")]),s("div",{staticClass:"text-green-13 text-h6"},[e._v(e._s(this.labels_standar))])]),s("div",{staticClass:"col"},[s("div",{staticClass:"text--2 text-grey-6"},[e._v("Ofertas")]),s("div",{staticClass:"text-orange text-h6"},[e._v(e._s(this.labels_offers))])])])],1)],1),s("q-dialog",{staticClass:"text-grey-6",attrs:{position:"bottom"},model:{value:e.wndAddProduct.state,callback:function(t){e.$set(e.wndAddProduct,"state",t)},expression:"wndAddProduct.state"}},[s("q-card",{staticClass:"bg-darkl1 text-grey-6"},[s("ProductAutocomplete",{attrs:{checkState:!1},on:{input:e.add}})],1)],1),s("q-dialog",{attrs:{persistent:""},model:{value:e.wndImport.state,callback:function(t){e.$set(e.wndImport,"state",t)},expression:"wndImport.state"}},[s("q-card",{staticClass:"bg-darkl0 text-grey-5 exo"},[s("q-card-section",[e._v("\n\t\t\t\tSe preocesaron "+e._s(e.wndImport.rows)+" filas, "+e._s(e.wndImport.goals.length)+" modelos fueron encontrados y agregados a la lista pero;\n\t\t\t")]),e.wndImport.notfound.length?s("q-card-section",[s("div",[e._v("No encontramos estos "+e._s(e.wndImport.notfound.length)+" modelos:")]),e._l(e.wndImport.notfound,(function(t,a){return s("div",{key:"cnf_"+a,staticClass:"text-uppercase"},[e._v("\n\t\t\t\t\t"+e._s(t)+"\n\t\t\t\t")])}))],2):e._e(),e.wndImport.repeat.length?s("q-card-section",[s("div",[e._v("Se repitieron estos "+e._s(e.wndImport.repeat.length)+" codigos:")]),e._l(e.wndImport.repeat,(function(t,a){return s("div",{key:"crp_"+a,staticClass:"text-uppercase"},[e._v(e._s(t))])}))],2):e._e(),s("q-card-actions",{attrs:{align:"center"}},[s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Ok",color:"green-13"}})],1)],1)],1),s("q-dialog",{attrs:{position:"bottom"},model:{value:e.wndGenPdf.state,callback:function(t){e.$set(e.wndGenPdf,"state",t)},expression:"wndGenPdf.state"}},[s("q-card",{staticClass:"bg-darkl0 exo text-grey-6"},[s("q-card-section",[e._v("Seleccione un formato")]),s("div",{staticClass:"row"},e._l(e.wndGenPdf.formatts,(function(t){return s("q-btn",{key:t.id,staticClass:"col-6",staticStyle:{"min-height":"80px"},attrs:{flat:"",color:"grey-5",label:t.name},on:{click:function(s){return e.genPdf(t.id)}}})})),1)],1)],1),s("q-drawer",{attrs:{side:"left","content-class":"bg-darkl0 text-grey-6"},model:{value:e.leftDrawer,callback:function(t){e.leftDrawer=t},expression:"leftDrawer"}},[s("q-scroll-area",{staticClass:"fit"},[s("div",{staticClass:"column q-gutter-md q-pt-md"},[s("div",{staticClass:"q-px-md"},[s("div",[s("q-checkbox",{attrs:{dark:"",label:"Incluir piezas por Caja",color:"green-13"},on:{input:e.updateCacheLabels},model:{value:e.useIpack,callback:function(t){e.useIpack=t},expression:"useIpack"}})],1)]),s("div",{staticClass:"q-px-md"},[s("div",{staticClass:"text-overline"},[e._v("Precios")]),s("div",{staticClass:"column"},e._l(e.labelsPrices,(function(t,a){return s("q-checkbox",{key:a,attrs:{dark:"",val:t.id,label:t.fullname,color:"green-13"},on:{input:e.updateCacheLabels},model:{value:e.usingPrices,callback:function(t){e.usingPrices=t},expression:"usingPrices"}})})),1)]),s("div",{staticClass:"q-px-md"},[s("div",{staticClass:"text-overline"},[e._v("Opciones")]),s("div",[s("q-btn-group",{staticClass:"bg-darkl1",attrs:{spread:""}},[s("q-btn",{attrs:{dark:"",icon:"publish"},on:{click:e.triggerInputFile}}),e.labels.length?[s("q-btn",{attrs:{dark:"",icon:"delete_sweep"},on:{click:e.confirmDrop}}),s("q-btn",{attrs:{dark:"",icon:"fas fa-file-download"},on:{click:function(t){e.wndGenPdf.state=!0}}})]:e._e()],2)],1),s("input",{ref:"blobfile",attrs:{type:"file",id:"blobfile",hidden:"",accept:".xlsx,.xls"},on:{input:e.readFile}})])])])],1),s("q-page-container",[s("q-page",{staticClass:"bg-darkl0 text-grey-5",attrs:{padding:""}},[s("div",{staticClass:"q-gutter-sm q-pb-xl"},e._l(e.labels,(function(t,a){return s("q-card",{key:a,staticClass:"bg-darkl1"},[s("q-card-section",[s("div",{staticClass:"row items-center"},[s("q-chip",{staticClass:"fixed-right absolute-right text-bold text-white text-uppercase",attrs:{size:"sm",color:e.colorLabel(t.type)}},[e._v(e._s(t.type))]),s("div",{staticClass:"col text-center"},[s("div",{staticClass:"text-h5"},[e._v(e._s(t.code))]),s("div",{staticClass:"text-bold"},[e._v(e._s(t.name))]),s("div",{staticClass:"text--2"},[e._v(e._s(t.description))]),e.useIpack?s("div",{staticClass:"text-bold"},[e._v(e._s(t.pieces)+" pzs")]):e._e()])],1)]),s("q-card-section",[s("div",{staticClass:"row items-start text-white"},e._l(t.usedPrices,(function(t,a){return s("div",{key:a,staticClass:"col text-center"},[s("div",[e._v(e._s(t.alias))]),s("div",[e._v(e._s(t.price))])])})),0)]),s("q-btn-group",{staticClass:"text-grey-5",attrs:{spread:""}},[s("q-btn",{attrs:{flat:"",color:"negative",icon:"delete"},on:{click:function(t){return e.remove(a)}}}),s("q-btn",{attrs:{flat:"",icon:"settings",disable:""}}),s("q-btn",{attrs:{flat:"",icon:"remove"},on:{click:function(t){return e.updateCopies(a,"d")}}}),s("span",{staticClass:"text-center self-center q-px-md"},[s("div",{staticClass:"text-caption text--2 "},[e._v("copias")]),s("div",{staticClass:"text-bold q-pb-sm"},[e._v("\n\t\t\t\t\t\t\t\t"+e._s(t.copies)+"\n\t\t\t\t\t\t\t")])]),s("q-btn",{attrs:{flat:"",icon:"add"},on:{click:function(t){return e.updateCopies(a,"u")}}})],1)],1)})),1)]),s("q-page-sticky",{attrs:{position:"bottom-right",offset:[10,10]}},[s("div",{staticClass:"column q-gutter-sm"},[s("q-btn",{staticClass:"bg-darkl1 shadow-2",attrs:{color:"green-13",flat:"",rounded:"",icon:"add"},on:{click:function(t){e.wndAddProduct.state=!0}}})],1)]),s("q-page-sticky",{attrs:{position:"bottom-left",offset:[10,10]}},[s("div",{staticClass:"column q-gutter-sm"},[s("q-btn",{attrs:{color:"green-13",dense:"",flat:"",rounded:"",icon:"settings"},on:{click:function(t){e.leftDrawer=!0}}})],1)])],1)],1)},i=[],o=(s("e01a"),s("ddb0"),s("13d5"),s("31b8")),l={index(){return o["b"].get("/pdf").then((e=>{let t=e.data;return t})).catch((e=>{console.log(e)}))},generate(e){return o["b"].post("pdf/etiquetas",e)}},n=s("e8ae"),r=s.n(n),c=s("f7cb"),d=s("1d6c"),p=s("b293"),u={components:{ToolbarAccount:d["a"],ProductAutocomplete:p["a"]},data(){return{leftDrawer:!1,labelsPage:[],labelsPrices:[{id:1,fullname:"Menudeo",shortname:"MEN"},{id:2,fullname:"Mayoreo",shortname:"MAY"},{id:3,fullname:"Docena",shortname:"DOC"},{id:4,fullname:"Caja",shortname:"CAJ"}],usingPrices:[2],useIpack:!1,wndAddProduct:{state:!1},index:void 0,wndGenPdf:{state:!1,formatts:[]},wndImport:{state:!1,goals:[],notfound:[],repeat:[],rows:0}}},async beforeMount(){this.$store.commit("Layout/hideToolbarModule"),this.index=await l.index(),this.wndGenPdf.formatts=this.index.types;let e=JSON.parse(localStorage.getItem("applabels"));e?(this.usingPrices=e.settings.usingPrices,this.useIpack=e.settings.useIpack,this.labelsPage=e.labels):(e={settings:{usingPrices:[1,2],useIpack:!1},labels:[]},localStorage.setItem("applabels",JSON.stringify(e)))},methods:{add(e){let t=JSON.parse(JSON.stringify(e));if(console.log(t),this.labelsPage.findIndex((e=>e.id==t.id))>=0)this.$q.notify({icon:"fas fa-grin-beam-sweat",color:"info",message:`<b>${t.code}</b> ya existe en la lista`,html:!0});else{console.log("Agregar Etiqueta");let e=this.labelType(t.prices,t.pieces);console.log(e),t.copies=1,t.type=e.type,t.usedPrices=e.prices,this.labelsPage.unshift(t),this.updateCacheLabels()}},remove(e){this.labelsPage.splice(e,1),this.updateCacheLabels()},confirmDrop(){this.$q.dialog({message:"Quieres eliminar todas las etiquetas?",cancel:!0,persistent:!0}).onOk((()=>{this.labelsPage=[],this.updateCacheLabels(),this.$q.notify({message:"Etiquetas eliminadas.",icon:"done",color:"positive",position:"center",timeout:1e3}),this.leftDrawer=!1}))},updateCacheLabels(){let e={settings:{usingPrices:this.usingPrices,useIpack:this.useIpack},labels:this.labelsPage};localStorage.setItem("applabels",JSON.stringify(e))},updateCopies(e,t){switch(t){case"d":this.labels[e].copies>1?this.labelsPage[e].copies--:this.labels[e].copies=1;break;default:this.labels[e].copies++;break}this.updateCacheLabels()},genPdf(e){console.log("Generando PDF en formato: "+e),this.$q.loading.show({message:"Generando documento, espera.."});let t=this.labelsPage.map((e=>(console.log(e),{id:e.id,code:e.code,name:e.name,description:e.description,type:e.type,copies:e.copies,prices:e.usedPrices,pieces:e.pieces}))),s={_pdf:e,isInnerPack:this.useIpack,products:t};l.generate(s).then((e=>{let t=e.data;console.log(t),this.$q.loading.hide(),window.open(`${this.$routefiles}/${t.file}`),this.$q.notify({message:"Documento generado",icon:"done",color:"positive"}),this.wndGenPdf.state=!1})).catch((e=>{console.log(e)}))},labelType(e,t){let s=[...e],a=[...e],i=s.filter((e=>1==e.id||2==e.id||3==e.id||4==e.id)),o=s.filter((e=>2==e.id||3==e.id||4==e.id)),l=i.filter((e=>i[0].price==e.price)),n=(i.map(((e,t)=>e+t.price),0),o.reduce(((e,t)=>e+t.price),0)/3);if(l.length==i.length){console.log("Es oferta");let e={id:0,alias:"OFERTA",name:"Oferta",price:a[0].price,used:!0};return{type:"off",prices:[e]}}if(n==o[0].price&&s[0].price!=n)return console.log("Es May/Men"),{type:"may",prices:s.filter((e=>1==e.id||2==e.id))};if(console.log("Es standard"),console.log(`ipack: ${t}`),t<4){console.log("hay que omitir el precio de caja, aunque este seleccionado");let e=a.findIndex((e=>4==e.id));a.splice(e,1),console.log(a)}return a.map((e=>(e.used=!!this.usingPrices.includes(e.id),e))),{type:"std",prices:a.filter((e=>e.used))}},triggerInputFile(){this.$refs.blobfile.click()},readFile(){let e=document.getElementById("blobfile").files[0],t=new r.a.Workbook,s=[];t.xlsx.load(e).then((e=>{let a=t.worksheets[0],i=a.getColumn("A");if(i.eachCell({includeEmpty:!0},(function(e,t){e.value&&s.push(e.value)})),s.length){console.log(s);let e={codes:s};this.wndImport.rows=s.length,this.$q.loading.show({message:"Procesando archivo, espera.."}),c["a"].getMassive(e).then((e=>{let t=e.data;console.log(t);let s=0;t.products.forEach((e=>{this.add(e),this.wndImport.goals.unshift(e),s++})),this.$q.loading.hide(),!s||t.fails.notFound.length||t.fails.repeat.length?(this.wndImport.notfound=t.fails.notFound,this.wndImport.repeat=t.fails.repeat,this.wndImport.state=!0):this.$q.notify({message:`Etiquetas generadas: ${s}`,color:"positive",icon:"done",timeout:1e3})})).catch((e=>{console.log(e)}))}else this.$q.notify({message:"Vaya!! Al parecer este archivo esta vacio.",icon:"fas fa-grin-beam-sweat",color:"negative"});document.getElementById("blobfile").value=""}))}},computed:{labels(){return this.labelsPage.length?this.labelsPage:[]},labels_size(){return this.labels.reduce(((e,t)=>t.copies+e),0)},labels_standar(){return this.labels.filter((e=>"std"==e.type||"may"==e.type)).reduce(((e,t)=>t.copies+e),0)},labels_offers(){return this.labels.filter((e=>"off"==e.type)).reduce(((e,t)=>t.copies+e),0)},colorLabel(){return e=>{switch(e){case"off":return"orange-9";case"may":return"light-blue-9";case"std":return"green-9"}}}}},g=u,f=(s("9f26"),s("2877")),h=s("4d5a"),b=s("e359"),m=s("f09f"),v=s("24e8"),x=s("a370"),C=s("4b7e"),q=s("9c40"),w=s("9404"),k=s("4983"),_=s("8f8e"),y=s("e7a9"),P=s("09e3"),I=s("9989"),$=s("b047"),Q=s("27f9"),A=s("de5e"),S=s("7f67"),E=s("eebe"),D=s.n(E),O=Object(f["a"])(g,a,i,!1,null,"28453b10",null);t["default"]=O.exports;D()(O,"components",{QLayout:h["a"],QHeader:b["a"],QCard:m["a"],QDialog:v["a"],QCardSection:x["a"],QCardActions:C["a"],QBtn:q["a"],QDrawer:w["a"],QScrollArea:k["a"],QCheckbox:_["a"],QBtnGroup:y["a"],QPageContainer:P["a"],QPage:I["a"],QChip:$["a"],QInput:Q["a"],QPageSticky:A["a"]}),D()(O,"directives",{ClosePopup:S["a"]})},"9f26":function(e,t,s){"use strict";s("a6f4")},a6f4:function(e,t,s){}}]);