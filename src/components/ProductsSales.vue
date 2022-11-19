<template>
  <div v-if="loadingSales" class="q-pa-md text-center text-green-13">
    Cargando productos...
  </div>
  <div v-else class="q-mt-md">
    <q-separator dark />
    <!-- <div class="row items-start justify-between q-pt-md">
      <div class="text-h6">Ventas</div>
      <div class="row">
        <q-btn flat color="green-13" icon="sync" />
        <q-select dense v-model="range" dark :options="optRanges" label="Vista" filled />
      </div>
    </div> -->

    <div class="row q-pa-md q-gutter-md justify-center">
      <q-card class="bg-darkl1">
        <q-table dark flat class="transparent"
          row-key="id"
          :data="sales"
          :columns="table1.columns"
          :pagination="table1.pagination"
          :visible-columns="table1.viewcols"
          :filter="table1.filter"
          ref="tablesales"
        >
          <template v-slot:top>
            <div class="full-width row items-center">
              <div class="col text-grey-5">ARTICULOS CON VENTAS ({{sales.length}})</div>
              <div class="row">
                <q-btn flat icon="fas fa-file-excel" color="green-13" rounded @click="downSales"/>
                <q-input rounded dark color="green-13" dense v-model="table1.filter" type="text" label="Buscar" />
              </div>
            </div>
          </template>
        </q-table>
      </q-card>

      <q-card class="bg-darkl1">
        <q-table dark flat class="transparent"
          row-key="id"
          :data="nosales"
          :columns="table1.columns"
          :pagination="table1.pagination"
          :visible-columns="table1.viewcols"
          :filter="table1.filter"
          ref="tablenosales"
        >
          <template v-slot:top>
            <div class="full-width row items-center">
              <div class="col text-grey-5">ARTICULOS SIN VENTAS ({{nosales.length}})</div>
              <div class="row">
                <q-btn flat icon="fas fa-file-excel" color="green-13" rounded @click="downNoSales"/>
                <q-input rounded dark color="green-13" dense v-model="table1.filter" type="text" label="Buscar" />
              </div>
            </div>
          </template>
        </q-table>
      </q-card>
    </div>
  </div>
</template>

<script>
import ReportsApi from 'src/API/Reports.js';
import ExcelJS  from 'exceljs';
import FileSaver from "file-saver";
import { date as $qdate } from 'quasar';

export default {
  // name: 'ComponentName',
  data () {
    return {
      loadingSales:true,
      optRanges:[
        { id:"day", label:"Dia" },
        { id:"week", label:"Semana" },
        { id:"month", label:"Mes" },
      ],
      range: { id:"day", label:"Dia" },
      tablesales:null,
      tablenosales:null,
      table1:{
        viewcols:["code", "descript", "sale", "stock", "min", "max"],
        columns:[
          { name:"id", label:"ID", field:"id", sortable:true, align:"center" },
          { name:"shortcode", label:"CodigoCorto", field:"name", sortable:true, align:"center" },
          {
            name:"code",
            label:"Codigo",
            field:"code",
            sortable:true,
            align:"center",
            classes: row => {
              if(row.STO<=0){
                return "text-bold text-red";
              }else if(row.STO>0&&(row.STO<=row.MIN)){ return "text-orange-13"; }
            }
          },
          { name:"descript", label:"Descripcion", field:"description", align:"left" },
          { name:"sale", label:"Venta (pzs)", field:"VEN", sortable:true, align:"center" },
          {
            name:"stock",
            label:"Stock (pzs)",
            field:"STO",
            sortable:true,
            align:"center",
            classes: row => {
              if(row.STO<=0){
                return "text-bold text-red";
              }else if(row.STO>0&&(row.STO<=row.MIN)){ return "text-orange-13"; }
            }
          },
          { name:"min", label:"min (pzs)", field:"MIN", sortable:true, align:"center" },
          { name:"max", label:"max (pzs)", field:"MAX", sortable:true, align:"center" },
          { name:"sect", label:"Seccion", field:"SECCION", sortable:true },
          { name:"fam", label:"Familia", field:"FAMILIA", sortable:true },
          { name:"cat", label:"Categoria", field:"CATEGORIA", sortable:true }
        ],
        filter:"",
        pagination:{
          sortBy: 'sale',
          descending:true,
          rowsPerPage:20
        }
      },
      productsdb:[]
    }
  },
  mounted() {
    console.log("Ooli");
    this.getSales();
  },
  methods: {
    async getSales(){
      this.loadingSales = true;
      console.log("Vamo a traer las ventas");
      const response = await ReportsApi.salesStore();
      console.log(response);

      if(response.status==200){
        let data = response.data;
        this.loadingSales = false;
        this.productsdb = data.rows;
      }else{
        console.error(response);
        alert(`Error ${response.status}: ${response.data}`);
      }
    },
    async downSales(){
      this.$q.loading.show({ message:"Generando documento, espera..." });
      let atdatetime = $qdate.formatDate(Date.now(), 'YYMMDD_HHmmss');
      let filename = `Ventas_${this.workin.workpoint.alias}_${atdatetime}.xlsx`;
      let rows = this.$refs.tablesales.data;
      const wb = new ExcelJS.Workbook();
      const sheet = wb.addWorksheet('Venta x Producto');
      let nrow = 2;

      sheet.columns = this.table1.columns.map( c => { return { header: c.label, key: c.name }; });
      rows.forEach( row => {
        sheet.getRow(nrow).values = [row.id, row.name, row.code, row.description, row.VEN, row.STO, row.MIN, row.MAX, row.SECCION, row.FAMILIA, row.CATEGORIA ];
        nrow++;
      });

      await wb.xlsx.writeBuffer().then( buffer => {
        FileSaver(new Blob([buffer], { type: "application/octet-stream" }), filename);
        this.$q.loading.hide();
      }).catch( err => {
        console.error(err);
      });
    },
    async downNoSales(){
      this.$q.loading.show({ message:"Generando documento, espera..." });
      let atdatetime = $qdate.formatDate(Date.now(), 'YYMMDD_HHmmss');
      let filename = `NoVentas_${this.workin.workpoint.alias}_${atdatetime}.xlsx`;
      let rows = this.$refs.tablenosales.data;
      const wb = new ExcelJS.Workbook();
      const sheet = wb.addWorksheet('Sin Venta x Producto');
      let nrow = 2;

      sheet.columns = this.table1.columns.map( c => { return { header: c.label, key: c.name }; });
      rows.forEach( row => {
        sheet.getRow(nrow).values = [row.id, row.name, row.code, row.description, row.VEN, row.STO, row.MIN, row.MAX, row.SECCION, row.FAMILIA, row.CATEGORIA ];
        nrow++;
      });

      await wb.xlsx.writeBuffer().then( buffer => {
        FileSaver(new Blob([buffer], { type: "application/octet-stream" }), filename);
        this.$q.loading.hide();
      }).catch( err => {
        console.error(err);
      });
    }
  },
  computed: {
    sales(){ return this.productsdb.filter( p => p.VEN); },
    nosales(){ return this.productsdb.filter( p => !p.VEN); },
    workin() { return this.$store.getters["Account/workin"] },
  },
}
</script>
