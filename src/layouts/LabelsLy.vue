<!--
    /**
     * @App VizApp <org.grupovizcarra.vizapp>
     * @copyright Grupo Vizacarra - 2020-2021
     * @version v.1.0.0
     * @Description 
     *  Este modulo genera las etiquetas de los productos que se añaden para su posterior impresión
     *  existen diferentes modelos de etiquetas, todo de acuerdo a lo que la sucursal
     *  requiera. El almacenamiento de las etiquetas ya no tiene relacion con el Back-End, si no con 
     *  el Storage del navegador, todas las etiquetas se generan en el Front-End
     *  
     *  
     */
-->

<template>
  <q-layout class="exo" view="hHh Lpr fFf">

    <q-header class="bg-none" v-if="layout.header.state">
      <q-card class="bg-darkl1 no-border-radius">
        <HeaderApp :title="layout.header.title" />
        <div class="q-pa-sm row text-center">
          <div class="col">
            <div class="text--2 text-grey-6">Modelos</div>
            <div class="text-light-blue-13 text-h6">
              {{ this.labels.length }}
            </div>
          </div>

          <div class="col">
            <div class="text--2 text-grey-6">Etiquetas</div>
            <div class="text-light-blue-13 text-h6">{{ this.labels_size }}</div>
          </div>

          <div class="col">
            <div class="text--2 text-grey-6">Estandar</div>
            <div class="text-green-13 text-h6">{{ this.labels_standar }}</div>
          </div>

          <div class="col">
            <div class="text--2 text-grey-6">Ofertas</div>
            <div class="text-orange text-h6">{{ this.labels_offers }}</div>
          </div>
        </div>
      </q-card>
      <q-slide-transition>
        <div v-show="flagDuplicate">
          <q-banner class="bg-orange-8">
            <template v-slot:avatar>
              <img
                src="../../public/pdf/img/not_found_prices.webp"
                width="80px"
              />
            </template>
            <span v-if="dataBanner.length != 0" class="text-subtitle1 text-dark exo-med">
              El producto <strong>{{dataBanner.description}}</strong> con código <strong>{{dataBanner.code}}</strong> no tiene precio.
            </span>
            <span v-else class="text-subtitle1 text-dark text-weight-bold">
              {{ messageDuplicate }}
            </span>
            <template v-slot:action>
              <q-btn
                rounded
                flat
                color="dark"
                label="Entendido"
                icon-right="double_arrow"
                class="text-weight-bold"
                @click="(filteringItems = ''), (flagDuplicate = !flagDuplicate), dataBanner = [];"
              />
            </template>
          </q-banner>
        </div>
      </q-slide-transition>
    </q-header>

    <q-dialog
      v-model="wndAddProduct.state"
      class="text-grey-6"
      position="bottom"
    >
      <q-card class="bg-darkl1 text-grey-6 col col">
        <ProductAutocomplete
          :checkState="false"
          @input="add"
          with_prices
          with_image
        />
      </q-card>
    </q-dialog>

    <q-dialog v-model="wndImportJSON.state" persistent>
      <q-card class="bg-darkl0 text-grey-5 exo text-subtitle1">
        <q-card-section>
          Se procesarón
          <span class="text-green-13 text-weight-bold">{{
            wndImportJSON.wndTotal
          }}</span>
          filas,
          <span class="text-green-13 text-weight-bold">{{
            wndImportJSON.wndGetRows
          }}</span>
          modelos fueron encontrados y agregados a la lista{{`${wndImportJSON.wndNoDataFound.length != 0 ? ", sin embargo;": "."}`}}
        </q-card-section>
        <q-card-section v-if="wndImportJSON.wndNoDataFound.length">
          <div>
            No encontramos estos
            <span class="text-red-6 text-weight-bold">{{
              wndImportJSON.wndNoDataFound.length
            }}</span>
            modelos:
          </div>
          <div
            class="text-uppercase"
            v-for="(code, idx) in wndImportJSON.wndNoDataFound"
            :key="idx"
          >
            <q-avatar size="xs" class="text-red-6" icon="fas fa-circle" />
            <span class="text--2 exo-med">Producto: {{ code.description}} | Código: {{ code.code}}</span>
          </div>
          <div class="text--2 text-amber-13">Nota: {{ wndImportJSON.message }}</div>
          <div class="text--2 text-amber-13" v-show="wndImportJSON.messageRepeat.length != 0">Nota: {{ wndImportJSON.messageRepeat }}</div>
        </q-card-section>
        <q-card-actions align="center">
          <q-btn
            class="full-width"
            flat
            label="Ok"
            color="green-13"
            v-close-popup
          />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-dialog v-model="exportstate.state">
      <q-card class="bg-darkl0 text-grey-5 exo text-subtitle1">
        <q-card-section>
          <span class="text-h5">Etiquetas generadas</span>
          <q-space />
          <span class="text-h6 exo-med text-orange-6"><q-avatar icon="description" /> {{ `Hojas Naranjas: ${exportstate.data[0]}`  }}</span>
          <q-space />
          <span class="text-h6 exo-med text-green-6"><q-avatar icon="description" /> {{ `Hojas Verdes: ${exportstate.data[1]}`  }}</span>
        </q-card-section>
        <q-card-actions align="center">
          <q-btn
            class="full-width"
            flat
            label="Ok"
            @click="exportstate.data = []"
            color="green-13"
            v-close-popup
          />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-dialog v-model="wndImport.state" persistent>
      <q-card class="bg-darkl0 text-grey-5 exo">
        <q-card-section>
          Se preocesaron {{ wndImport.rows }} filas,
          {{ wndImport.goals.length }} modelos fueron encontrados y agregados a
          la lista pero;
        </q-card-section>
        <q-card-section v-if="wndImport.notfound.length">
          <div>
            No encontramos estos {{ wndImport.notfound.length }} modelos:
          </div>
          <div
            class="text-uppercase"
            v-for="(code, idx) in wndImport.notfound"
            :key="'cnf_' + idx"
          >
            {{ code }}
          </div>
        </q-card-section>
        <q-card-section v-if="wndImport.repeat.length">
          <div>Se repitieron estos {{ wndImport.repeat.length }} codigos:</div>
          <div
            class="text-uppercase"
            v-for="(code, idx) in wndImport.repeat"
            :key="'crp_' + idx"
          >
            
          </div>
        </q-card-section>
        <q-card-actions align="center">
          <q-btn flat label="Ok" color="green-13" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-dialog position="bottom" v-model="wndGenPdf.state">
      <q-card class="bg-darkl0 exo text-grey-6">
        <q-card-section>Seleccione un formato</q-card-section>
        <div class="row justify-center text-center">
          <q-btn
            v-for="format in printerCatalog"
            :key="format.id"
            flat
            color="grey-5"
            class="col-6"
            style="font-size: 12px; min-height: 80px"
            icon="fas fa-file-alt"
            :label="format.name"
            @click="buildPDF(format.id)"
          />
          <q-space />
          <!-- <span>{{format.name}}</span> -->
        </div>
      </q-card>
    </q-dialog>

    <q-drawer
      v-model="leftDrawer"
      side="left"
      content-class="bg-darkl0 text-grey-6"
    >
      <q-scroll-area class="fit">
        <div class="column q-gutter-md q-pt-md">
          <div class="q-px-md">
            <div>
              <q-checkbox
                dark
                v-model="useIpack"
                label="Incluir Código de Barras"
                color="green-13"
                @input="updateCacheLabels"
              />
            </div>
          </div>

          <div class="q-px-md">
            <div class="text-overline">Precios</div>
            <div class="column">
              <q-checkbox
                dark
                v-model="usingPrices"
                v-for="(lprice, idx) in labelsPrices"
                :key="idx"
                :val="lprice.id"
                :label="lprice.fullname"
                color="green-13"
                @input="updateCacheLabels"
              />
            </div>
          </div>

          <div class="q-px-md">
            <div class="text-overline">Opciones</div>
            <div>
              <q-btn-group spread class="bg-darkl1">
                <q-btn dark icon="publish" @click="triggerInputFile" />
                <template v-if="labels.length">
                  <q-btn dark icon="delete_sweep" @click="confirmDrop" />
                  <q-btn
                    dark
                    icon="fas fa-file-download"
                    @click="wndGenPdf.state = true"
                  />
                </template>
              </q-btn-group>
            </div>
            <input
              type="file"
              ref="blobfile"
              id="blobfile"
              @input="readFile"
              hidden
              accept=".xlsx,.xls"
            />
          </div>
        </div>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <!-- This is where pages get injected -->
      <q-page padding class="bg-darkl0 text-grey-5">
        <!-- <div class="col col-6 col-md-4 q-mb-md">
          <template>
            <q-input
              dense
              color="green-13"
              dark
              debounce="0"
              v-model="filteringItems"
              placeholder="Buscar Folio, Código o Descripción"
            >
              <template v-slot:prepend><q-icon name="search" /></template>
            </q-input>
          </template>
        </div> -->
        <div class="q-gutter-lg">
          <q-table
            grid
            flat
            dark
            row-key="id"
            :data.sync="labels"
            :columns="columns"
            :pagination="pagination"
            :filter="filteringItems"
          >
            <template v-slot:item="labels">
              <div
                class="col-xs-6 text-grey-4 col-sm-6 col-md-4 col-lg-3 q-mb-sm"
              >
                <q-card class="bg-darkl1 full-height" style="margin-right: 5px">
                  <q-card-section>
                    <div class="row items-center">
                      <q-chip
                        size="sm"
                        class="
                          fixed-right
                          absolute-right
                          text-bold text-white text-uppercase
                        "
                        :color="colorLabel(labels.row.type)"
                        >{{ labels.row.type }}</q-chip
                      >
                      <div class="col text-center">
                        <div class="text-h5">{{ labels.row.code }}</div>
                        <div class="text-bold">{{ labels.row.name }}</div>
                        <div class="text--2">{{ labels.row.description }}</div>
                        <div class="text-bold" v-if="useIpack">
                          <div><q-icon size="lg" name="fas fa-barcode" /></div>
                          <div>
                            <span>{{ labels.row.barcode }}</span>
                          </div>
                        </div>
                        <div class="text--2 text-bold" v-if="labels.row.large">
                          {{ `Longitud: ${labels.row.large}` }}
                        </div>
                      </div>
                    </div>
                  </q-card-section>
                  <q-card-section>
                    <div class="row items-start text-white">
                      <div
                        class="col text-center"
                        v-for="(price, idx) in labels.row.usedPrices"
                        :key="idx"
                      >
                        <div>{{ price.alias }}</div>
                        <div>{{ price.price }}</div>
                      </div>
                    </div>
                  </q-card-section>
                  <q-card-section>
                    <div class="row items-start text-white">
                      <div class="col text-center">
                        <div>{{ labels.row.usedPrices.alias }}</div>
                        <div>{{ labels.row.usedPrices.price }}</div>
                        <div class="justify-around">
                          <q-btn-group
                            spread
                            class="text-grey-5 no-shadow q-mt-xs q-mb-none"
                          >
                            <q-btn
                              flat
                              color="negative"
                              icon="delete"
                              @click="remove(labels.row.code)"
                            />
                            <q-btn flat icon="settings" disable />
                            <q-btn
                              flat
                              icon="remove"
                              @click="updateCopies(labels.row.code, 'd')"
                            />
                            <span class="text-center self-center">
                              <div class="text-caption text--2">copias</div>
                              <div class="text-bold q-pb-sm">
                                {{ labels.row.copies }}
                              </div>
                            </span>
                            <q-btn
                              flat
                              icon="add"
                              @click="updateCopies(labels.row.code, 'u')"
                            />
                          </q-btn-group>
                        </div>
                      </div>
                    </div>
                  </q-card-section>
                </q-card>
              </div>
            </template>
            <template v-slot:bottom="scope">
              <q-page-sticky
                position="bottom"
                class="full-width"
                :offset="[0, 18]"
              >
                <div class="row q-pt-xs">
                  <q-btn-group rounded class="bg-dark text-white">
                    <q-btn
                      v-if="scope.pagesNumber > 2"
                      icon="first_page"
                      round
                      dense
                      flat
                      :disable="scope.isFirstPage"
                      @click="scope.firstPage"
                      class="q-px-sm"
                    />
                    <q-btn
                      icon="chevron_left"
                      round
                      dense
                      flat
                      :disable="scope.isFirstPage"
                      @click="scope.prevPage"
                      class="q-px-sm"
                    />
                    <q-btn flat disable no-caps
                      >{{ scope.pagination.page }} /
                      {{ scope.pagesNumber }}</q-btn
                    >
                    <q-btn
                      icon="chevron_right"
                      round
                      dense
                      flat
                      :disable="scope.isLastPage"
                      @click="scope.nextPage"
                      class="q-px-sm"
                    />
                    <q-btn
                      v-if="scope.pagesNumber > 2"
                      icon="last_page"
                      round
                      dense
                      flat
                      @click="scope.lastPage"
                      class="q-px-sm"
                    />
                  </q-btn-group>
                </div>
              </q-page-sticky>
            </template>
          </q-table>
        </div>
      </q-page>

      <q-page-sticky position="bottom-right" :offset="[10, 10]">
        <div class="column q-gutter-sm">
          <q-btn
            color="green-13"
            class="bg-darkl1 shadow-2"
            flat
            rounded
            icon="add"
            @click="wndAddProduct.state = true"
          />
        </div>
      </q-page-sticky>

      <q-page-sticky position="bottom-left" :offset="[10, 10]">
        <div class="column q-gutter-sm">
          <q-btn
            color="green-13"
            dense
            flat
            rounded
            icon="settings"
            @click="leftDrawer = !leftDrawer"
          />
        </div>
      </q-page-sticky>
    </q-page-container>
  </q-layout>
</template>

<script>
import dblabels from "../API/labels.js";
import ExcelJS from "exceljs";
import dbproduct from "../API/Product";
import ToolbarAccount from "../components/Global/ToolbarAccount.vue";
import ProductAutocomplete from "../components/Global/ProductAutocomplete.vue";
import HeaderApp from "../components/Global/HeaderApp.vue";
import { jsPDF } from "jspdf";
import JsBarcode from "jsbarcode";

export default {
  components: {
    ToolbarAccount: ToolbarAccount,
    ProductAutocomplete: ProductAutocomplete,
    HeaderApp: HeaderApp,
  },
  data() {
    return {
      exportstate: {
        state: false,
        data: [],
        type: "",
      },
      dataBanner: [],
      flagDuplicate: false,
      messageDuplicate: "",
      filteringItems: undefined,
      pagination: {
        descending: false,
        page: 1,
        rowsPerPage: 15,
      },
      columns: [
        {
          name: "id",
          align: "left",
          label: "ID",
          field: "id",
          sortable: true,
        },
        {
          name: "code",
          align: "left",
          label: "Codigo",
          field: "code",
          sortable: true,
        },
        {
          name: "name",
          align: "center",
          label: "Codigo Corto",
          field: "name",
          sortable: false,
        },
        {
          name: "description",
          align: "center",
          label: "Description",
          field: "description",
          sortable: false,
        },
        {
          name: "prices",
          align: "center",
          label: "Cantidad",
          field: "usedPrices",
          sortable: true,
        },
        {
          name: "pieces",
          align: "center",
          label: "PzsXCaj",
          field: "pieces",
          sortable: true,
        },
        {
          name: "prices",
          align: "center",
          label: "Disponibles",
          field: "prices",
          sortable: true,
        },
      ],
      name: "Etiquetas / Inicio",
      leftDrawer: false,
      labelsPage: [],
      labelsPrices: [
        { id: 1, fullname: "Menudeo", shortname: "MEN" },
        { id: 2, fullname: "Mayoreo", shortname: "MAY" },
        { id: 3, fullname: "Docena", shortname: "DOC" },
        { id: 4, fullname: "Caja", shortname: "CAJ" },
      ],
      usingPrices: [1, 2],
      useIpack: true,
      wndAddProduct: { state: false },
      index: undefined,
      wndGenPdf: { state: false, formatts: [] },
      wndImport: { state: false, goals: [], notfound: [], repeat: [], rows: 0 },
      printerCatalog: [
        {
          id: 1,
          name: "Navidad Mediana (8 Etiquetas)",
        },
        {
          id: 2,
          name: "Navidad Pequeña (15 Etiquetas)",
        },
        {
          id: 3,
          name: "Navidad Grande (6 Etiquetas)",
        },
        {
          id: 4,
          name: "Navidad Vertical (12 Etiquetas)",
        },
        {
          id: 5,
          name: "Bodega (18 Etiquetas)",
        },
        {
          id: 6,
          name: "Estrella (2 Etiquetas)",
        },
        {
          id: 7,
          name: "Rectangular (18 Etiquetas)",
        },
        {
          id: 8,
          name: "Estrella Pequeña (24 Etiquetas)",
        },
        {
          id: 9,
          name: "Estrella Mediana (12 Etiquetas)",
        },
      ],
      wndImportJSON: {
        state: false,
        wndGetRows: [],
        wndNoDataFound: [],
        wndTotal: [],
        wndGetAdded: [],
        _supply_by: 0,
        message: "",
        messageRepeat: "",
      },
    };
  },
  async beforeMount() {
    this.$store.commit("Labels/setHeaderState", true);
    this.$store.commit("Labels/setFooterState", false);
    this.$store.commit("Labels/setHeaderTitle", this.name);
    this.index = await dblabels.index();

    let applabels = JSON.parse(localStorage.getItem("applabels"));
    console.log(applabels);
    if (applabels) {
      this.usingPrices = applabels.settings.usingPrices;
      this.useIpack = applabels.settings.useIpack;
      this.labelsPage = applabels.labels;
    } else {
      applabels = {
        settings: {
          usingPrices: [1, 2],
          useIpack: true,
        },
        labels: [],
      };
      localStorage.setItem("applabels", JSON.stringify(applabels));
    }
  },
  methods: {
    /**
     * @param { Object[] } opt Objeto del producto seleccionado.
     * @description Añade el producto al bucket de las etiquetas.
     */
    add(opt) {
      let newLabel = JSON.parse(JSON.stringify(opt));
      console.log(newLabel);
      let flag =
        newLabel.prices[0].price == 0 &&
        newLabel.prices[1].price == 0 &&
        newLabel.prices[2].price == 0 &&
        newLabel.prices[3].price == 0
          ? true
          : false;
      console.log(true);
      if (
        this.labelsPage.findIndex((item) => {
          return item.id == newLabel.id;
        }) >= 0 ||
        flag
      ) {
        this.flagDuplicate = !this.flagDuplicate;
        this.filteringItems = newLabel.code;
        if (flag) {
          let obj = new Object();
          obj.description = newLabel.description;
          obj.code = newLabel.code;
          this.dataBanner = obj;
        } else {
          this.messageDuplicate =
            "Haz seleccionado este producto dos veces, te sugiero que ingreses el código correcto.";
        }
        this.wndAddProduct.state = !this.wndAddProduct.state;
      } else {
        console.log("Agregar Etiqueta");
        if (this.execptionBarcode(newLabel.barcode)) {
          let _labelType = this.labelType(newLabel.prices, newLabel.pieces);
          console.log(_labelType);

          newLabel.copies = 1;
          newLabel.type = _labelType.type;
          newLabel.usedPrices = _labelType.prices;

          this.labelsPage.unshift(newLabel);
          this.updateCacheLabels();
          this.$q.notify({
            message: `Se añadio una nueva etiqueta.!`,
            color: "positive",
            icon: "done",
            position: "center",
            timeout: 1000,
          });
          this.appsounds.download.play();
        } else {
          this.flagDuplicate = !this.flagDuplicate;
          this.messageDuplicate = "La etiqueta no cuenta con código de barras";
          this.wndAddProduct.state = !this.wndAddProduct.state;
          this.filteringItems = newLabel.code;
          let _labelType = this.labelType(newLabel.prices, newLabel.pieces);
          console.log(_labelType);

          newLabel.copies = 1;
          newLabel.type = _labelType.type;
          newLabel.usedPrices = _labelType.prices;

          this.labelsPage.unshift(newLabel);
          this.updateCacheLabels();
          this.$q.notify({
            message: `Se añadio una nueva etiqueta.!`,
            color: "positive",
            icon: "done",
            position: "center",
            timeout: 1000,
          });
          this.appsounds.download.play();
        }
      }
    },
    /**
     * @param { number } code ID del producto.
     * @description Elimina el producto del bucket de las etiqeutas.
     */
    remove(code) {
      let idx = this.labelsPage.findIndex((item) => {
        return item.code == code;
      });
      this.labelsPage.splice(idx, 1);
      this.updateCacheLabels();
    },
    /**
     * @description Dialogo para remover todas las etiquetas.
     */
    confirmDrop() {
      this.$q
        .dialog({
          message: "Quieres eliminar todas las etiquetas?",
          cancel: true,
          persistent: true,
        })
        .onOk(() => {
          this.labelsPage = [];
          this.updateCacheLabels();
          this.$q.notify({
            message: "Etiquetas eliminadas.",
            icon: "done",
            color: "positive",
            position: "center",
            timeout: 1000,
          });
          this.leftDrawer = false;
        });
    },
    /**
     * @description Actualiza el cache de las etiquetas.
     */
    updateCacheLabels() {
      let applabels = {
        settings: {
          usingPrices: this.usingPrices,
          useIpack: this.useIpack,
        },
        labels: this.labelsPage,
      };
      localStorage.setItem("applabels", JSON.stringify(applabels));
    },
    /**
     * @param { number } code ID del producto.
     * @param { string } opt Opción para añadir o decrementar copias. 
     * @description Actualiza las copias del producto.
     */
    updateCopies(code, opt) {
      let idx = this.labelsPage.findIndex((item) => {
        return item.code == code;
      });
      switch (opt) {
        case "d":
          this.labels[idx].copies > 1
            ? this.labelsPage[idx].copies--
            : (this.labels[idx].copies = 1);
          break;
        default:
          this.labels[idx].copies++;
          break;
      }
      this.updateCacheLabels();
    },
    /**
     * @param { Object[] } _prices Precios del producto.
     * @param { Object[] } ipack Piezas del producto.
     * @description Realiza el procedimiento.
     * @returns { Object[] } Tipo de precios que se le asigna al producto (STD/OFF).
     * 
     */
    labelType(_prices, ipack) {
      let natprices = [..._prices];
      let prices = [..._prices];

      let pricesToOffer = natprices.filter((item) => {
        return item.id == 1 || item.id == 2 || item.id == 3 || item.id == 4;
      }); //precios para validar oferta
      let pricesToMayMen = natprices.filter((item) => {
        return item.id == 2 || item.id == 3 || item.id == 4;
      }); //precios pra poner solo mayoreo

      let isOffer = pricesToOffer.filter((item) => {
        return pricesToOffer[0].price == item.price;
      });
      let avgOffer =
        pricesToOffer.map((amm, price) => amm + price.price, 0) / 4; //sumatoria de los precios del producto
      let avgMenMay =
        pricesToMayMen.reduce((amm, price) => amm + price.price, 0) / 3; //sumatoria de los precios del producto

      if (isOffer.length == pricesToOffer.length) {
        console.log("Es oferta");
        let _prices_ = {
          id: 0,
          alias: "OFERTA",
          name: "Oferta",
          price: prices[0].price,
          used: true,
        };
        return { type: "off", prices: [_prices_] };
      } else if (
        avgMenMay == pricesToMayMen[0].price &&
        natprices[0].price != avgMenMay
      ) {
        console.log("Es May/Men");
        return {
          type: "may",
          prices: natprices.filter((item) => {
            return item.id == 1 || item.id == 2 || item.id == 3 || item.id == 4;
          }),
        };
      } else {
        console.log("Es standard");
        console.log(`ipack: ${ipack}`);

        if (ipack < 4) {
          console.log(
            "hay que omitir el precio de caja, aunque este seleccionado"
          );
          let idx = prices.findIndex((item) => item.id == 4);
          prices.splice(idx, 1);
          console.log(prices);
        }
        prices.map((item) => {
          item.used = this.usingPrices.includes(item.id) ? true : false;
          return item;
        });
        return {
          type: "std",
          prices: prices.filter((item) => {
            return item.used;
          }),
        };
      }
    },
    /**
     * @description Dispara la funcion para obtener archivo Excel.
     */
    triggerInputFile() {
      this.$refs.blobfile.click();
    },
    /**
     * @description Obtiene toda la información de los productos y los añade al bucket de etiquetas.
     */
    async readFile() {
      let inputFile = document.getElementById("blobfile").files[0];
      let workbook = new ExcelJS.Workbook();
      let codesToSend = [];
      let diference = [];
      let convert = 0;

      workbook.xlsx.load(inputFile).then((data) => {
        let worksheet = workbook.worksheets[0];
        let column = worksheet.getColumn("A");
        column.eachCell({ includeEmpty: true }, function (cell, rowNumber) {
          cell.value ? codesToSend.push(cell.value) : null;
        });

        diference = codesToSend.filter((item, pos, self) => {
          return self.indexOf(item) == pos;
        });

        if (codesToSend.length) {
          let data = { codes: codesToSend };
          this.wndImportJSON.wndTotal  = codesToSend.length;
          this.$q.loading.show({ message: "Procesando archivo, espera.." });
          dbproduct
            .getMassive(data)
            .then((success) => {
              let resp = success.data;
              let addeds = 0;
              let _data = this.checkPrices(resp);
              this.wndImportJSON.wndGetRows = _data.add.length;
              this.wndImportJSON.state = !this.wndImportJSON.state;
              this.wndImportJSON.wndGetAdded = data.add;
              this.wndImportJSON.wndNoDataFound = _data.notFound;
              
              if (this.wndImportJSON.wndNoDataFound.length > 0) {
                let long = this.wndImportJSON.wndNoDataFound.length;
                this.wndImportJSON.message = long <= 1 ? "El producto no contiene precios." : "Los productos no contienen precios."
              } 
              _data.add.map((item) => {
                let _labelType = this.labelType(item.prices, item.pieces);
                item.copies = 1;
                item.type = _labelType.type;
                item.usedPrices = _labelType.prices;
                this.labelsPage.unshift(item);
                // this.add(item);
                this.wndImport.goals.unshift(item);
                addeds++;
              });
              this.$q.loading.hide();

              //al menos una etiqueta fue agregada, y no hay errores
              if (
                addeds &&
                !resp.fails.notFound.length &&
                diference.length == codesToSend.length
              ) {
                this.$q.notify({
                  message: `Etiquetas generadas: ${addeds}`,
                  color: "positive",
                  icon: "done",
                  timeout: 1000,
                });
                this.updateCacheLabels();
              } else {
                convert = codesToSend.length - diference.length;
                this.wndImportJSON.messageRepeat = convert <= 1 ? `${convert} producto se repitio. Favor de validar su documento antes de subirlo.` : `${convert} productos se repitieron. Favor de validar su documento antes de subirlo.`
                this.updateCacheLabels();
              }
            })
            .catch((fail) => {
              console.log(fail);
            });
        } else {
          this.$q.notify({
            message: "Vaya!! Al parecer este archivo esta vacio.",
            icon: "fas fa-grin-beam-sweat",
            color: "negative",
          });
        }

        document.getElementById("blobfile").value = "";
      });
    },
    /**
     * @param { number } type Valor de etiqueta seleccionada.
     * @description Contryue el PDF para imprimir etiquetas.
     */
    buildPDF(type) {
      let labels = JSON.parse(localStorage.getItem("applabels"));
      let settingsRND = [15];
      console.log(labels.settings.usingPrices);
      let flag = labels.settings.usingPrices.length != 0 ? true : false;
      if (flag) {
        console.log("Generando PDF en formato: " + type);
        this.$q.loading.show({ message: "Generando Reporte..." });
        let nick = JSON.parse(localStorage.getItem("profile"));
        nick = `${nick.me.names} ${nick.me.surname_pat} ${nick.me.surname_mat}`;
        let products = this.labelsPage.map((item, id) => {
          return {
            id: item.id,
            code: item.code,
            name: item.name,
            description:
              item.description != undefined ||
              item.description != null ||
              item.description != ""
                ? item.description
                : "",
            type: item.type,
            copies: item.copies,
            prices: labels.settings.usingPrices.map((idx) => {
              return this.labelsPage[id].prices[idx - 1];
            }),
            pieces: item.pieces,
            variants: item.variants,
            discount: settingsRND[0],
            large: item.large,
            label: item.label,
          };
        });
        products.prices = products.map((item) => {
          return item.prices.sort((a, b) => b.id - a.id);
        });
        let stdProduts = [];
        let offProducts = [];

        stdProduts = this.getSTD(products);
        offProducts = this.getOFF(products);
        stdProduts = stdProduts.map((item) => {
             if (item.pieces <= 1) {
               item.prices = item.prices.filter(i => i.alias == "MAY" || i.alias == "MEN");
               return item;
             } else {
               return item;
             }
          }
        );

        let newObject = [];
        if (stdProduts.length == 0 && offProducts.length != 0) {
          newObject = [
            {
              manager: offProducts,
            },
          ];
          this.exportstate.type = "off";
        } else if (stdProduts.length != 0 && offProducts.length == 0) {
          newObject = [
            {
              manager: stdProduts,
            },
          ];
          this.exportstate.type = "std";
        } else {
          newObject = [
            {
              manager: offProducts,
            },
            {
              manager: stdProduts,
            },
          ];
          this.exportstate.type = "two";
        }

        let folio = Math.floor(Math.random() * 1000000);
        let getDate = new Date();
        let docname = `${this.$moment(getDate).format("YYMMDD")}_${folio}.pdf`;

        const pdf = new jsPDF({ unit: "pt", format: "letter" });
        let count = 1;
        // /*----------  FUENTES AÑADIDAS AL STORE DEL REPORTE  -----------*/
        pdf.addFont("pdf/Montserrat-Regular.ttf", "Montserrat", "normal");
        pdf.addFont(
          "pdf/Montserrat-ExtraBold.ttf",
          "Montserrat-Bold",
          "normal"
        );
        pdf.addFont("pdf/Montserrat-SemiBold.ttf", "Montserrat-Semi", "normal");
        pdf.setFont("Montserrat");
        pdf.setFontSize(12);

        if (type != 5) {
          this.appsounds.download_label.play();
          this.methodStructuredOFFSTD(
            pdf,
            count,
            newObject,
            docname,
            nick,
            type
          );
        } else {
          this.appsounds.download_label.play();
          this.methodStructuredOFFSTD(
            pdf,
            count,
            products,
            docname,
            nick,
            type
          );
        }
        this.wndGenPdf.state = !this.wndGenPdf.state;
        this.$q.loading.hide();
      } else {
        this.flagDuplicate = !this.flagDuplicate;
        this.messageDuplicate =
            "Selecciona por lo menos 1 precio para generar el formato solicitado.";
        this.wndGenPdf.state = !this.wndGenPdf.state;
        this.leftDrawer = !this.leftDrawer;
      }
    },
    /**
     * @param { any } pdf Instancia de PDF.
     * @param { number } count Contador de hojas.
     * @param { Object[] } products Productos.
     * @param { string } docname Nombre de PDF.
     * @param { string } nick Autor.
     * @param { number } type Tipo de Etiquetas.
     * @description Metodo contructor del PDF de las etiquetas.
     */
    methodStructuredOFFSTD(pdf, count, products, docname, nick, type) {
      this.exportstate.data = []
      let _delete = undefined;
      let zip = 0; // paginador
      let counter = 0;
      let aux = 0; // valor auxiliar para añadir o eiminar hojas
      switch (type) {
        case 1:
          zip = 0;
          counter = 0;
          for (let i = 0; i < products.length; i++) {
            counter += this.methodSquareToysLabel2x4(
              pdf,
              count,
              products[i].manager,
              nick,
              zip
            );
            aux = counter - aux;
            if (products.length <= 1 && this.exportstate.type == "std" && this.exportstate.type != "off") {
              this.exportstate.data.push(0);
              this.exportstate.data.push(aux);
            } else if (products.length <= 1 && this.exportstate.type != "std" && this.exportstate.type == "off") {
              this.exportstate.data.push(aux);
              this.exportstate.data.push(0);
            } else {
              this.exportstate.data.push(aux);
            }
            counter < pdf.internal.getNumberOfPages() ? null : pdf.addPage();
          }
          this.exportstate.state = !this.exportstate.state;
          _delete =
            counter < pdf.internal.getNumberOfPages()
              ? pdf.internal.getNumberOfPages()
              : 0;
          pdf.deletePage(_delete);
          break;
        case 2:
          zip = 0;
          counter = 0;
          aux = 0;
          for (let i = 0; i < products.length; i++) {
            counter += this.methodSquareToysLabel3x5(
              pdf,
              count,
              products[i].manager,
              nick,
              zip
            );
            aux = counter - aux;
            if (products.length <= 1 && this.exportstate.type == "std" && this.exportstate.type != "off") {
              this.exportstate.data.push(0);
              this.exportstate.data.push(aux);
            } else if (products.length <= 1 && this.exportstate.type != "std" && this.exportstate.type == "off") {
              this.exportstate.data.push(aux);
              this.exportstate.data.push(0);
            } else {
              this.exportstate.data.push(aux);
            }
            counter < pdf.internal.getNumberOfPages() ? null : pdf.addPage();
          }
          this.exportstate.state = !this.exportstate.state;
          _delete =
            counter < pdf.internal.getNumberOfPages()
              ? pdf.internal.getNumberOfPages()
              : 0;
          pdf.deletePage(_delete);
          break;
        case 3:
          zip = 0;
          counter = 0;
          aux = 0;
          for (let i = 0; i < products.length; i++) {
            counter += this.methodSquareToysLabel2x3(
              pdf,
              count,
              products[i].manager,
              nick,
              zip
            );
            aux = counter - aux;
            if (products.length <= 1 && this.exportstate.type == "std" && this.exportstate.type != "off") {
              this.exportstate.data.push(0);
              this.exportstate.data.push(aux);
            } else if (products.length <= 1 && this.exportstate.type != "std" && this.exportstate.type == "off") {
              this.exportstate.data.push(aux);
              this.exportstate.data.push(0);
            } else {
              this.exportstate.data.push(aux);
            }
            counter < pdf.internal.getNumberOfPages() ? null : pdf.addPage();
          }
          this.exportstate.state = !this.exportstate.state;
          _delete =
            counter < pdf.internal.getNumberOfPages()
              ? pdf.internal.getNumberOfPages()
              : 0;
          pdf.deletePage(_delete);
          break;
        case 4:
          zip = 0;
          counter = 0;
          aux = 0;
          for (let i = 0; i < products.length; i++) {
            counter += this.methodSquareToysLabel4x3(
              pdf,
              count,
              products[i].manager,
              nick,
              zip
            );
            aux = counter - aux;
            if (products.length <= 1 && this.exportstate.type == "std" && this.exportstate.type != "off") {
              this.exportstate.data.push(0);
              this.exportstate.data.push(aux);
            } else if (products.length <= 1 && this.exportstate.type != "std" && this.exportstate.type == "off") {
              this.exportstate.data.push(aux);
              this.exportstate.data.push(0);
            } else {
              this.exportstate.data.push(aux);
            }
            counter < pdf.internal.getNumberOfPages() ? null : pdf.addPage();
          }
          this.exportstate.state = !this.exportstate.state;
          _delete =
            counter < pdf.internal.getNumberOfPages()
              ? pdf.internal.getNumberOfPages()
              : 0;
          pdf.deletePage(_delete);
          break;
        case 5:
          zip = 0;
          counter = 0;
          counter += this.methodSquareToysLabel9x2(
            pdf,
            count,
            products,
            nick,
            zip
          );
          _delete =
            counter < pdf.internal.getNumberOfPages()
              ? pdf.internal.getNumberOfPages()
              : 0;
          pdf.deletePage(_delete);
          break;
        case 6:
          zip = 0;
          counter = 0;
          aux = 0;
          for (let i = 0; i < products.length; i++) {
            counter += this.methodGiantStarPrint(
              pdf,
              count,
              products[i].manager,
              nick,
              zip
            );
            aux = Math.round(counter / 2) - aux;
            if (products.length <= 1 && this.exportstate.type == "std" && this.exportstate.type != "off") {
              this.exportstate.data.push(0);
              this.exportstate.data.push(aux);
            } else if (products.length <= 1 && this.exportstate.type != "std" && this.exportstate.type == "off") {
              this.exportstate.data.push(aux);
              this.exportstate.data.push(0);
            } else {
              this.exportstate.data.push(aux);
            }
            console.log(pdf.internal.getNumberOfPages());
            Math.round(counter / 2) < pdf.internal.getNumberOfPages() ? null : pdf.addPage();
          }
          this.exportstate.state = !this.exportstate.state;
          
          _delete =
            Math.round(counter / 2) < pdf.internal.getNumberOfPages()
              ? pdf.internal.getNumberOfPages()
              : 0;
          pdf.deletePage(_delete);
          break;
        case 7:
          zip = 0;
          counter = 0;
          aux = 0;
          for (let i = 0; i < products.length; i++) {
            counter += this.methodSquareToysLabel3x6(
              pdf,
              count,
              products[i].manager,
              nick,
              zip
            );
            aux = counter - aux;
            if (products.length <= 1 && this.exportstate.type == "std" && this.exportstate.type != "off") {
              this.exportstate.data.push(0);
              this.exportstate.data.push(aux);
            } else if (products.length <= 1 && this.exportstate.type != "std" && this.exportstate.type == "off") {
              this.exportstate.data.push(aux);
              this.exportstate.data.push(0);
            } else {
              this.exportstate.data.push(aux);
            }
            counter < pdf.internal.getNumberOfPages() ? null : pdf.addPage();
          }
          this.exportstate.state = !this.exportstate.state;
          _delete =
            counter < pdf.internal.getNumberOfPages()
              ? pdf.internal.getNumberOfPages()
              : 0;
          let rest = pdf.internal.getNumberOfPages() - counter;
          // console.log(pdf.internal.getNumberOfPages());
          if (rest != 0) {
            for (let j = 0; j < rest; j++) {
              pdf.deletePage(pdf.internal.getNumberOfPages());
            }
          } else {
            pdf.deletePage(_delete);
          }
          break;
        case 8:
          zip = 0;
          counter = 0;
          aux = 0;
          for (let i = 0; i < products.length; i++) {
            counter += this.methodStarToysLabel4x6(
              pdf,
              count,
              products[i].manager,
              nick,
              zip
            );
            aux = counter - aux;
            if (products.length <= 1 && this.exportstate.type == "std" && this.exportstate.type != "off") {
              this.exportstate.data.push(0);
              this.exportstate.data.push(aux);
            } else if (products.length <= 1 && this.exportstate.type != "std" && this.exportstate.type == "off") {
              this.exportstate.data.push(aux);
              this.exportstate.data.push(0);
            } else {
              this.exportstate.data.push(aux);
            }
            counter < pdf.internal.getNumberOfPages() ? null : pdf.addPage();
          }
          this.exportstate.state = !this.exportstate.state;
          _delete =
            counter < pdf.internal.getNumberOfPages()
              ? pdf.internal.getNumberOfPages()
              : 0;
          pdf.deletePage(_delete);
          break;
        case 9:
          zip = 0;
          counter = 0;
          aux = 0;
          for (let i = 0; i < products.length; i++) {
            counter += this.methodStarToysLabel3x4(
              pdf,
              count,
              products[i].manager,
              nick,
              zip
            );
            aux = counter - aux;
            if (products.length <= 1 && this.exportstate.type == "std" && this.exportstate.type != "off") {
              this.exportstate.data.push(0);
              this.exportstate.data.push(aux);
            } else if (products.length <= 1 && this.exportstate.type != "std" && this.exportstate.type == "off") {
              this.exportstate.data.push(aux);
              this.exportstate.data.push(0);
            } else {
              this.exportstate.data.push(aux);
            }
            counter < pdf.internal.getNumberOfPages() ? null : pdf.addPage();
          }
          console.log(this.exportstate.data);
          this.exportstate.state = !this.exportstate.state;
          _delete =
            counter < pdf.internal.getNumberOfPages()
              ? pdf.internal.getNumberOfPages()
              : 0;
          pdf.deletePage(_delete);
          break;
        default:
          break;
      }
      // this.exportstate.data = [];
      pdf.save(docname);
    },
    /**
     * @param { any } pdf Instancia de PDF.
     * @param { number } count Contador de hojas.
     * @param { Object[] } products Productos.
     * @param { string } nick Autor.
     * @param { number } zip Paginador.
     * @description Metodo que construye las etiquetas de Estrella Gigante (2x1).
     */
    methodGiantStarPrint(pdf, count, products, nick, zip) {
      let width = pdf.internal.pageSize.getWidth() / 2;
      let height = pdf.internal.pageSize.getHeight() / 2.2;
      let newProducts = [];
      let counterCodeShort = 0;
      products.map((item) => {
        for (let i = 0; i < item.copies; i++) {
          newProducts.push(item);
        }
        return newProducts;
      });
      products = newProducts;
      for (let i = 0; i < products.length; i++) {
        if (i % 2 == 0) {
          pdf.setFont("Montserrat");
          pdf.setFontSize(12);
          pdf.text(3, 10, `Se generó ${count} plantilla, creador: ${nick}`);
          pdf.addImage(
            "pdf/img/STAR12_1.png",
            "PNG",
            15,
            30,
            width * 2 - 30,
            height
          );
          pdf.setFont("Montserrat-Bold");
          pdf.setFontSize(70);
          pdf.text(products[i].name, width, 120, null, null, "center");
          pdf.setFont("Montserrat-Semi");
          pdf.setFontSize(50);
          pdf.text(products[i].code, width, 160, null, null, "center");
          pdf.setFontSize(15);
          let splitter = pdf.splitTextToSize(products[i].label, 300);
          pdf.text(
            splitter,
            width / 3.5,
            180 + counterCodeShort,
            null,
            null,
            "left"
          );
          let aux = 0;
          if (products[i].type == "off") {
            pdf.setFont("Montserrat-Bold");
            pdf.setFontSize(30);
            let convert =
              products[i].prices[0].price +
              (products[i].prices[0].price * products[i].discount) / 100;
            convert =
              Math.floor(convert) == products[i].prices[0].price
                ? convert + 1
                : convert;
            pdf.text(
              `De $${Math.floor(convert) + 1} a`,
              width / 2,
              290 + counterCodeShort,
              null,
              null,
              "center"
            );
            pdf.setFont("Montserrat-Bold");
            pdf.setFontSize(35);
            pdf.text(
              `¡¡OFERTA!!`,
              width,
              225 + counterCodeShort,
              null,
              null,
              "center"
            );
            pdf.setFontSize(60);
            pdf.text(
              `$${parseFloat(
                products[i].prices[0].price != 0
                  ? products[i].prices[0].price
                  : 1
              )}`,
              width - 50,
              280 + counterCodeShort,
              null,
              null,
              "left"
            );
            pdf.setFontSize(40);
            pdf.text(
              `-${products[i].discount}%`,
              width / 2,
              260 + counterCodeShort,
              null,
              null,
              "center"
            );
            // pdf.text(products[i].prices[0].alias, width / 3.8, 140 + (countY == 1 ? 0 : counterCodeShort) + aux, null, null, 'left');
            pdf.setFontSize(30);
            pdf.setFont("Montserrat-Semi");
            // pdf.text(`$${parseFloat(products[i].prices[0].price).toFixed(2)}`, width / 1.8, 140 + (countY == 1 ? 0 : counterCodeShort) + aux, null, null, 'left');
            aux += aux + 30;
          } else {
            switch (products[i].prices.length) {
              case 1:
                pdf.setFont("Montserrat");
                pdf.setFontSize(50);
                pdf.text(
                  products[i].prices[0].alias,
                  width / 1.3,
                  260 + counterCodeShort,
                  null,
                  null,
                  "center"
                );
                pdf.setFontSize(60);
                pdf.setFont("Montserrat-Bold");
                pdf.text(
                  `$${parseFloat(products[i].prices[0].price)}`,
                  width,
                  260 + counterCodeShort,
                  null,
                  null,
                  "left"
                );
                break;
              case 2:
                for (let z = 0; z < products[i].prices.length; z++) {
                  pdf.setFont("Montserrat");
                  pdf.setFontSize(40);
                  pdf.text(
                    products[i].prices[z].alias,
                    width / 1.3,
                    240 + aux + counterCodeShort,
                    null,
                    null,
                    "center"
                  );
                  pdf.setFontSize(50);
                  pdf.setFont("Montserrat-Bold");
                  pdf.text(
                    `$${parseFloat(products[i].prices[z].price)}`,
                    width,
                    240 + aux + counterCodeShort,
                    null,
                    null,
                    "left"
                  );
                  aux += aux + 50;
                }
                break;
              case 3:
                for (let z = 0; z < products[i].prices.length; z++) {
                  pdf.setFont("Montserrat");
                  pdf.setFontSize(28);
                  pdf.text(
                    products[i].prices[z].alias,
                    width / 1.2,
                    220 + aux + counterCodeShort,
                    null,
                    null,
                    "center"
                  );
                  pdf.setFontSize(38);
                  pdf.setFont("Montserrat-Bold");
                  pdf.text(
                    `$${parseFloat(products[i].prices[z].price)}`,
                    width,
                    220 + aux + counterCodeShort,
                    null,
                    null,
                    "left"
                  );
                  aux += 40;
                }
                break;
              case 4:
                for (let z = 0; z < products[i].prices.length; z++) {
                  // console.log(prices.reverse());
                  if (z == 1) {
                    aux = 0;
                  }
                  if (z == 1 || z == 3) {
                    pdf.setFont("Montserrat");
                    pdf.setFontSize(35);
                    pdf.text(
                      products[i].prices[z].alias,
                      width + 20,
                      240 + aux + counterCodeShort,
                      null,
                      null,
                      "left"
                    );
                    pdf.setFontSize(38);
                    pdf.setFont("Montserrat-Bold");
                    pdf.text(
                      `$${parseFloat(products[i].prices[z].price)}`,
                      width * 1.35,
                      240 + aux + counterCodeShort,
                      null,
                      null,
                      "left"
                    );
                    aux += 50;
                  } else if (z == 0 || z == 2) {
                    pdf.setFont("Montserrat");
                    pdf.setFontSize(35);
                    pdf.text(
                      products[i].prices[z].alias,
                      width / 3,
                      240 + aux + counterCodeShort,
                      null,
                      null,
                      "left"
                    );
                    pdf.setFontSize(38);
                    pdf.setFont("Montserrat-Bold");
                    pdf.text(
                      `$${parseFloat(products[i].prices[z].price)}`,
                      width / 1.55,
                      240 + aux + counterCodeShort,
                      null,
                      null,
                      "left"
                    );
                  }
                }
                break;
            }
          }
          pdf.setFont("Montserrat");
          pdf.setFontSize(20);
          pdf.text(
            `${products[i].pieces}pz`,
            width + 80,
            325 + counterCodeShort,
            null,
            null,
            "left"
          );
          pdf.setFont("Montserrat-Bold");
          pdf.text(
            products[i].large,
            width + 80,
            350 + counterCodeShort,
            null,
            null,
            "left"
          );
          this.useIpack
            ? pdf.addImage(
                this.convertTextToBase64Barcode(products[i].name),
                "PNG",
                width - 80,
                310 + counterCodeShort,
                150,
                40
              )
            : "";
          // i % 2 == 0 ? zip++ : 1;
          zip++;
        } else {
          count++;
          counterCodeShort += 360;
          pdf.addImage(
            "pdf/img/STAR12_1.png",
            "PNG",
            15,
            390,
            width * 2 - 30,
            height
          );
          pdf.setFont("Montserrat-Bold");
          pdf.setFontSize(70);
          pdf.text(products[i].name, width, height + 120, null, null, "center");
          pdf.setFont("Montserrat-Semi");
          pdf.setFontSize(50);
          pdf.text(products[i].code, width, height + 160, null, null, "center");
          pdf.setFontSize(15);
          let splitter = pdf.splitTextToSize(products[i].label, 300);
          pdf.text(
            splitter,
            width / 3.5,
            180 + counterCodeShort,
            null,
            null,
            "left"
          );
          let aux = 0;
          if (products[i].type == "off") {
            pdf.setFont("Montserrat-Bold");
            pdf.setFontSize(30);
            let convert =
              products[i].prices[0].price +
              (products[i].prices[0].price * products[i].discount) / 100;
            convert =
              Math.floor(convert) == products[i].prices[0].price
                ? convert + 1
                : convert;
            pdf.text(
              `De $${Math.floor(convert) + 1} a`,
              width / 2,
              290 + counterCodeShort,
              null,
              null,
              "center"
            );
            pdf.setFont("Montserrat-Bold");
            pdf.setFontSize(35);
            pdf.text(
              `¡¡OFERTA!!`,
              width,
              225 + counterCodeShort,
              null,
              null,
              "center"
            );
            pdf.setFontSize(60);
            pdf.text(
              `$${parseFloat(
                products[i].prices[0].price != 0
                  ? products[i].prices[0].price
                  : 1
              )}`,
              width - 50,
              280 + counterCodeShort,
              null,
              null,
              "left"
            );
            pdf.setFontSize(40);
            pdf.text(
              `-${products[i].discount}%`,
              width / 2,
              260 + counterCodeShort,
              null,
              null,
              "center"
            );
            // pdf.text(products[i].prices[0].alias, width / 3.8, 140 + (countY == 1 ? 0 : counterCodeShort) + aux, null, null, 'left');
            pdf.setFontSize(30);
            pdf.setFont("Montserrat-Semi");
            // pdf.text(`$${parseFloat(products[i].prices[0].price).toFixed(2)}`, width / 1.8, 140 + (countY == 1 ? 0 : counterCodeShort) + aux, null, null, 'left');
            aux += aux + 30;
          } else {
            switch (products[i].prices.length) {
              case 1:
                pdf.setFont("Montserrat");
                pdf.setFontSize(50);
                pdf.text(
                  products[i].prices[0].alias,
                  width / 1.3,
                  260 + counterCodeShort,
                  null,
                  null,
                  "center"
                );
                pdf.setFontSize(60);
                pdf.setFont("Montserrat-Bold");
                pdf.text(
                  `$${parseFloat(products[i].prices[0].price)}`,
                  width,
                  260 + counterCodeShort,
                  null,
                  null,
                  "left"
                );
                break;
              case 2:
                for (let z = 0; z < products[i].prices.length; z++) {
                  pdf.setFont("Montserrat");
                  pdf.setFontSize(40);
                  pdf.text(
                    products[i].prices[z].alias,
                    width / 1.3,
                    240 + aux + counterCodeShort,
                    null,
                    null,
                    "center"
                  );
                  pdf.setFontSize(50);
                  pdf.setFont("Montserrat-Bold");
                  pdf.text(
                    `$${parseFloat(products[i].prices[z].price)}`,
                    width,
                    240 + aux + counterCodeShort,
                    null,
                    null,
                    "left"
                  );
                  aux += aux + 50;
                }
                break;
              case 3:
                for (let z = 0; z < products[i].prices.length; z++) {
                  pdf.setFont("Montserrat");
                  pdf.setFontSize(28);
                  pdf.text(
                    products[i].prices[z].alias,
                    width / 1.2,
                    220 + aux + counterCodeShort,
                    null,
                    null,
                    "center"
                  );
                  pdf.setFontSize(38);
                  pdf.setFont("Montserrat-Bold");
                  pdf.text(
                    `$${parseFloat(products[i].prices[z].price)}`,
                    width,
                    220 + aux + counterCodeShort,
                    null,
                    null,
                    "left"
                  );
                  aux += 40;
                }
                break;
              case 4:
                for (let z = 0; z < products[i].prices.length; z++) {
                  // console.log(prices.reverse());
                  if (z == 1) {
                    aux = 0;
                  }
                  if (z == 1 || z == 3) {
                    pdf.setFont("Montserrat");
                    pdf.setFontSize(35);
                    pdf.text(
                      products[i].prices[z].alias,
                      width / 3,
                      240 + aux + counterCodeShort,
                      null,
                      null,
                      "left"
                    );
                    pdf.setFontSize(38);
                    pdf.setFont("Montserrat-Bold");
                    pdf.text(
                      `$${parseFloat(products[i].prices[z].price)}`,
                      width / 1.55,
                      240 + aux + counterCodeShort,
                      null,
                      null,
                      "left"
                    );
                    aux += 50;
                  } else if (z == 0 || z == 2) {
                    pdf.setFont("Montserrat");
                    pdf.setFontSize(35);
                    pdf.text(
                      products[i].prices[z].alias,
                      width + 20,
                      240 + aux + counterCodeShort,
                      null,
                      null,
                      "left"
                    );
                    pdf.setFontSize(38);
                    pdf.setFont("Montserrat-Bold");
                    pdf.text(
                      `$${parseFloat(products[i].prices[z].price)}`,
                      width * 1.35,
                      240 + aux + counterCodeShort,
                      null,
                      null,
                      "left"
                    );
                  }
                }
                break;
            }
          }
          pdf.setFont("Montserrat");
          pdf.setFontSize(20);
          pdf.text(
            `${products[i].pieces}pz`,
            width + 80,
            325 + counterCodeShort,
            null,
            null,
            "left"
          );
          pdf.setFont("Montserrat-Bold");
          pdf.text(
            products[i].large,
            width + 80,
            350 + counterCodeShort,
            null,
            null,
            "left"
          );
          this.useIpack
            ? pdf.addImage(
                this.convertTextToBase64Barcode(products[i].name),
                "PNG",
                width - 80,
                310 + counterCodeShort,
                150,
                40
              )
            : "";
          pdf.addPage();
          counterCodeShort = 0;
          zip++;
        }
      }
      return zip;
    },
    /**
     * @param { any } pdf Instancia de PDF.
     * @param { number } count Contador de hojas.
     * @param { Object[] } products Productos.
     * @param { string } nick Autor.
     * @param { number } zip Paginador.
     * @description Metodo que construye las etiquetas rectangulares de Navidad Pequeña (3x5).
     */
    methodSquareToysLabel3x5(pdf, count, products, nick, zip) {
      // DECLARACION DE VARIABLES SIGUIENDO EL CONTEXTO DE SCOPE
      let width = pdf.internal.pageSize.getWidth() / 3.2;
      let height = pdf.internal.pageSize.getHeight() / 5.3;
      let countY = 1;
      let counterCodeShort = 0;
      let forCounterX = 5;
      let forCounterY = 3;
      let productXY = forCounterY * forCounterX;
      let _y = 0;
      let newProducts = [];
      let i = 0;
      let x = 0;
      let y = 0;
      // ITERAMOS LAS COPIAS Y AGREGAMOS EL MISMO PRODUCTO DE ACUERDO AL TOTAL DE COPIAS
      products.map((item) => {
        for (let i = 0; i < item.copies; i++) {
          newProducts.push(item);
        }
        return newProducts;
      });
      // PASAMOS EL NUEVO ARREGLO AL QUE TENEMOS POR PARAMETRO DE LA FUNCION
      products = newProducts;
      // ITERAMOS EN LA MATRIZ, LA ESTRUCTURA DE LAS ETIQUETAS SEPARADAS POR OFERTA (OFF) Y ESTANDAR (STD)
      for (x = 0; x < forCounterX; x++) {
        for (y = 0; y < forCounterY; y++) {
          i = _y;
          // BREAKPOINT (_y) => EL NUMERO DE ITERACIONES IGUAL A LA LONGITUD DEL ARREGLO Y SALE DEL BUCLE
          if (_y - 1 === products.length - 1) {
            break;
          } else {
            // ASIGNAMOS EL TAMAÑO DEL TEXTO
            pdf.setFontSize(10);
            // ASIGNAMOS LA FUENTE DEL PDF
            pdf.setFont("Montserrat-Semi");
            // DIBUJAMOS UN RECTANGULO CON 20 DE MARGEN
            pdf.rect(20, 20, width * (y + 1), height * countY);
            // TEXTO DE LA EMPRESA ESTABLECIDO EN LA PARTE TOP DEL RECTANGULO
            pdf.text(
              "Grupo Vizcarra",
              width * (y == 0 ? 0 : y) + 120,
              32 + (countY == 1 ? 0 : counterCodeShort),
              null,
              null,
              "center"
            );
            pdf.setFont("Montserrat-Bold");
            pdf.setFontSize(25);
            // SI EL CHECK DE BARCODE ESTA SELECCIONADO POSICIONARA EL CODIGO CORTO, SI NO, LO CENTRARA
            this.useIpack
              ? pdf.text(
                  products[i].name,
                  width * (y == 0 ? 0 : y) + 25,
                  60 + (countY == 1 ? 0 : counterCodeShort),
                  null,
                  null,
                  "left"
                )
              : pdf.text(
                  products[i].name,
                  width * (y == 0 ? 0 : y) + 120,
                  60 + (countY == 1 ? 0 : counterCodeShort),
                  null,
                  null,
                  "center"
                );
            pdf.setFontSize(9);
            pdf.setFont("Montserrat");
            // ESTA VARIABLE ALMACENA EL TEXTO SPLITEADO, LA CANTIDAD ES EL TAMAÑO MAXIMO DE LONGITUD
            let splitter = pdf.splitTextToSize(products[i].label, 180);
            // POSICIONAMOS EL TEXTO SPLITEADO
            pdf.text(
              splitter,
              width * (y == 0 ? 0 : y) + 25,
              78 + (countY == 1 ? 0 : counterCodeShort),
              null,
              null,
              "left"
            );
            let aux = 0;
            // LA CONDICION SEPARA LAS OFERTAS Y LOS PRODUCTOS ESTANDAR
            if (products[i].type == "off") {
              pdf.setFont("Montserrat-Semi");
              pdf.setFontSize(9);
              // pdf.addImage(
              //   "pdf/img/banner.png",
              //   "PNG",
              //   width * (y == 0 ? 0 : y) + 50,
              //   75 + (countY == 1 ? 0 : counterCodeShort) + aux,
              //   140,
              //   95
              // ); //210,140
              // REALIZAMOS LA CONVERSION A PORCENTAJE Y LE AUMENTAMOS AL PRECIO AGREGADO 
              let convert =
                products[i].prices[0].price +
                (products[i].prices[0].price * products[i].discount) / 100;
              convert =
                Math.floor(convert) == products[i].prices[0].price
                  ? convert + 1
                  : convert;
              // CREAMOS UNA OFERTA CON DESCUENTO DEL PRECIO AGREGADO
              pdf.text(
                `De $${Math.floor(convert) + 1} a`,
                width * (y == 0 ? 0 : y) + 95,
                105 + (countY == 1 ? 0 : counterCodeShort) + aux,
                null,
                null,
                "left"
              );
              pdf.setTextColor(0);
              pdf.setFont("Montserrat-Bold");
              pdf.setFontSize(10);
              pdf.text( //pinta la palabra OFERTA
                `¡¡OFERTA!!`,
                width * (y == 0 ? 0 : y) + 87,
                95 + (countY == 1 ? 0 : counterCodeShort) + aux,
                null,
                null,
                "left"
              );
              pdf.setFontSize(35);
              pdf.text( // pinta el precio de la oferta
                `$${parseFloat(
                  products[i].prices[0].price != 0
                    ? products[i].prices[0].price
                    : 1
                )}`,
                width * (y == 0 ? 0 : y) + 80,
                140 + (countY == 1 ? 0 : counterCodeShort) + aux,
                null,
                null,
                "left"
              );
              pdf.setFontSize(15);
              pdf.text( // pinta la leyeda del porcentade descuento; -15% || -10% || -5% etc.
                `-${products[i].discount}%`,
                width * (y == 0 ? 0 : y) + 45,
                125 + (countY == 1 ? 0 : counterCodeShort) + aux,
                null,
                null,
                "left"
              );
              pdf.setFontSize(30);
              pdf.setFont("Montserrat-Semi");
              aux += aux + 30;
            } else {
              // ESTA CONDICION AHORA EVALUA EL TIPO DE PRECIO QUE SE IMPRIMIRA EN LAS ETIQUETAS,
              // LA CANTIDAD QUE SE LE PASA AL SWITCH ES LA LONGITUD DE LOS PRECIOS
              switch (products[i].prices.length) {
                // PUEDE SER CUALQUIER TIPO DE PRECIO (MEN, MAY, DOC, CAJ) LO CENTRA Y AUMENTA EL TEXTO A 20
                // EL MARGEN ES VARIABLE ENTRE EL ALIAS DEL PRECIO Y LA CANTIDAD
                case 1:
                  pdf.setFont("Montserrat");
                  pdf.setFontSize(20);
                  pdf.text(
                    products[i].prices[0].alias,
                    width * (y == 0 ? 0 : y) + 60,
                    125 + (countY == 1 ? 0 : counterCodeShort) + aux,
                    null,
                    null,
                    "left"
                  );
                  pdf.setFontSize(20);
                  pdf.setFont("Montserrat-Semi");
                  pdf.text(
                    `$${parseFloat(products[i].prices[0].price)}`,
                    width * (y == 0 ? 0 : y) + 110,
                    125 + (countY == 1 ? 0 : counterCodeShort) + aux,
                    null,
                    null,
                    "left"
                  );
                  aux += aux + 30;
                  break;
                case 2:
                  for (let z = 0; z < products[i].prices.length; z++) {
                    pdf.setFont("Montserrat");
                    pdf.setFontSize(17);
                    pdf.text(
                      products[i].prices[z].alias,
                      width * (y == 0 ? 0 : y) + 60,
                      110 + (countY == 1 ? 0 : counterCodeShort) + aux,
                      null,
                      null,
                      "left"
                    );
                    pdf.setFontSize(19);
                    pdf.setFont("Montserrat-Semi");
                    pdf.text(
                      `$${parseFloat(products[i].prices[z].price)}`,
                      width * (y == 0 ? 0 : y) + 110,
                      110 + (countY == 1 ? 0 : counterCodeShort) + aux,
                      null,
                      null,
                      "left"
                    );
                    aux += aux + 25;
                  }
                  break;
                case 3:
                  for (let z = 0; z < products[i].prices.length; z++) {
                    pdf.setFont("Montserrat");
                    pdf.setFontSize(14);
                    pdf.text(
                      products[i].prices[z].alias,
                      width * (y == 0 ? 0 : y) + 60,
                      105 + (countY == 1 ? 0 : counterCodeShort) + aux,
                      null,
                      null,
                      "left"
                    );
                    pdf.setFontSize(18);
                    pdf.setFont("Montserrat-Semi");
                    pdf.text(
                      `$${parseFloat(products[i].prices[z].price)}`,
                      width * (y == 0 ? 0 : y) + 110,
                      105 + (countY == 1 ? 0 : counterCodeShort) + aux,
                      null,
                      null,
                      "left"
                    );
                    aux += 20;
                  }
                  break;
                case 4:
                  for (let z = 0; z < products[i].prices.length; z++) {
                    if (z == 1) {
                      aux = 0;
                    }
                    if (z == 1 || z == 3) {
                      pdf.setFont("Montserrat");
                      pdf.setFontSize(12);
                      pdf.text(
                        products[i].prices[z].alias,
                        width * (y == 0 ? 0 : y) + 120,
                        110 + (countY == 1 ? 0 : counterCodeShort) + aux,
                        null,
                        null,
                        "left"
                      );
                      pdf.setFontSize(13);
                      pdf.setFont("Montserrat-Semi");
                      pdf.text(
                        `$${parseFloat(products[i].prices[z].price)}`,
                        width * (y == 0 ? 0 : y) + 150,
                        110 + (countY == 1 ? 0 : counterCodeShort) + aux,
                        null,
                        null,
                        "left"
                      );
                      aux += aux + 30;
                    } else if (z == 0 || z == 2) {
                      pdf.setFont("Montserrat");
                      pdf.setFontSize(12);
                      pdf.text(
                        products[i].prices[z].alias,
                        width * (y == 0 ? 0 : y) + 30,
                        110 + (countY == 1 ? 0 : counterCodeShort) + aux,
                        null,
                        null,
                        "left"
                      );
                      pdf.setFontSize(13);
                      pdf.setFont("Montserrat-Semi");
                      pdf.text(
                        `$${parseFloat(products[i].prices[z].price)}`,
                        width * (y == 0 ? 0 : y) + 60,
                        110 + (countY == 1 ? 0 : counterCodeShort) + aux,
                        null,
                        null,
                        "left"
                      );
                    }
                  }
                  break;
              }
            }
            pdf.setFont("Montserrat");
            pdf.setFontSize(10);
            pdf.text(
              `${products[i].pieces}pz`,
              width * (y == 0 ? 0 : y) + 30,
              163 + (countY == 1 ? 0 : counterCodeShort),
              null,
              null,
              "left"
            );
            pdf.setFont("Montserrat-Bold");
            pdf.text(
              products[i].large,
              width * (y == 0 ? 0 : y) + 65,
              163 + (countY == 1 ? 0 : counterCodeShort),
              null,
              null,
              "left"
            );
            pdf.setFont("Montserrat-Semi");
            pdf.setFontSize(12);
            pdf.text(
              `${products[i].code}`,
              width * (y == 0 ? 0 : y) + 110,
              163 + (countY == 1 ? 0 : counterCodeShort),
              null,
              null,
              "left"
            );
            this.useIpack
              ? pdf.addImage(
                  this.convertTextToBase64Barcode(products[i].name),
                  "PNG",
                  width * (y == 0 ? 0 : y) + 125,
                  40 + (countY == 1 ? 0 : counterCodeShort),
                  80,
                  20
                )
              : "";
            if ((i + 1) % productXY == 0) {
              pdf.setFont("Montserrat");
              pdf.setFontSize(12);
              pdf.text(3, 10, `Se generó ${count} plantilla, creador: ${nick}`);
              products.length > productXY ? pdf.addPage() : "";
              count++;
              counterCodeShort = 0;
              countY = 1;
              y = -1;
              x = 0;
            }
            _y++;
          }
          i % productXY == 0 ? zip++ : 1;
        }
        if (_y - 1 === products.length - 1) {
          break;
        }
        counterCodeShort += 149;
        countY++;
      }
      return zip;
    },
    /**
     * @param { any } pdf Instancia de PDF.
     * @param { number } count Contador de hojas.
     * @param { Object[] } products Productos.
     * @param { string } nick Autor.
     * @param { number } zip Paginador.
     * @description Metodo que construye las etiquetas rectangulares * To => SPC (3x6).
     */
    methodSquareToysLabel3x6(pdf, count, products, nick, zip) {
      let width = pdf.internal.pageSize.getWidth() / 3.2;
      let countY = 1;
      let counterCodeShort = 0;
      let counterCodeShortX = 0;
      let forCounterX = 6;
      let forCounterY = 3;
      let productXY = forCounterY * forCounterX;
      let _y = 0;
      let newProducts = [];
      let i = 0;
      let x = 0;
      let y = 0;
      let aux = 0;
      let auy = 85;
      products.map((item) => {
        for (let i = 0; i < item.copies; i++) {
          newProducts.push(item);
        }
        return newProducts;
      });
      products = newProducts;
      for (x = 0; x < forCounterX; x++) {
        for (y = 0; y < forCounterY; y++) {
          i = _y;
          if (_y - 1 === products.length - 1) {
            break;
          } else {
            if (products[i].type == "off") {
              pdf.setFont("Montserrat-Bold");
              pdf.setFontSize(37);
              pdf.text(
                `$${parseFloat(
                  products[i].prices[0].price != 0
                    ? products[i].prices[0].price
                    : 1
                )}`,
                width * (y == 0 ? 0 : y) + auy + (y > 0 ? y * 15 : 0),
                78 +
                  (countY == 1 ? 0 : counterCodeShortX) +
                  aux +
                  (x <= 3 ? x * 2 : 0),
                null,
                null,
                "center"
              );
              pdf.setFont("Montserrat-Semi");
              pdf.setFontSize(12);
              pdf.text(
                `${products[i].code}`,
                width * (y == 0 ? 0 : y) + 100 + (y > 0 ? y * 15 : 0),
                100 + (countY == 1 ? 0 : counterCodeShortX + 5),
                null,
                null,
                "left"
              );
            } else {
              switch (products[i].prices.length) {
                case 1:
                  pdf.setFont("Montserrat");
                  pdf.setFontSize(20);
                  pdf.text(
                    products[i].prices[0].alias,
                    width * (y == 0 ? 0 : y) + 40 + (y > 0 ? y * 15 : 0),
                    80 + (countY == 1 ? 0 : counterCodeShort) + aux,
                    null,
                    null,
                    "left"
                  );
                  pdf.setFontSize(20);
                  pdf.setFont("Montserrat-Semi");
                  pdf.text(
                    `$${parseFloat(products[i].prices[0].price)}`,
                    width * (y == 0 ? 0 : y) + 100 + (y > 0 ? y * 15 : 0),
                    80 + (countY == 1 ? 0 : counterCodeShort) + aux,
                    null,
                    null,
                    "left"
                  );
                  // aux += aux + 30;
                  break;
                case 2:
                  let _aux = 0;
                  for (let z = 0; z < products[i].prices.length; z++) {
                    pdf.setFont("Montserrat");
                    pdf.setFontSize(16);
                    pdf.text(
                      products[i].prices[z].alias,
                      width * (y == 0 ? 0 : y) + 50 + (y > 0 ? y * 15 : 0),
                      65 + (countY == 1 ? 0 : counterCodeShort) + _aux,
                      null,
                      null,
                      "left"
                    );
                    pdf.setFontSize(18);
                    pdf.setFont("Montserrat-Semi");
                    pdf.text(
                      `$${parseFloat(products[i].prices[z].price)}`,
                      width * (y == 0 ? 0 : y) + 100 + (y > 0 ? y * 15 : 0),
                      65 + (countY == 1 ? 0 : counterCodeShort) + _aux,
                      null,
                      null,
                      "left"
                    );
                    _aux += _aux + 25;
                  }
                  break;
                case 3:
                  let __aux = 0;
                  for (let z = 0; z < products[i].prices.length; z++) {
                    pdf.setFont("Montserrat");
                    pdf.setFontSize(13);
                    pdf.text(
                      products[i].prices[z].alias,
                      width * (y == 0 ? 0 : y) + 50 + (y > 0 ? y * 15 : 0),
                      63 + (countY == 1 ? 0 : counterCodeShort) + __aux,
                      null,
                      null,
                      "left"
                    );
                    pdf.setFontSize(15);
                    pdf.setFont("Montserrat-Semi");
                    pdf.text(
                      `$${parseFloat(products[i].prices[z].price)}`,
                      width * (y == 0 ? 0 : y) + 100 + (y > 0 ? y * 15 : 0),
                      63 + (countY == 1 ? 0 : counterCodeShort) + __aux,
                      null,
                      null,
                      "left"
                    );
                    __aux += 15;
                  }
                  break;
                case 4:
                  let _aaux = 0;
                  for (let z = 0; z < products[i].prices.length; z++) {
                    // console.log(prices.reverse());
                    if (z == 1) {
                      _aaux = 0;
                    }
                    if (z == 1 || z == 3) {
                      pdf.setFont("Montserrat");
                      pdf.setFontSize(12);
                      pdf.text(
                        products[i].prices[z].alias,
                        width * (y == 0 ? 0 : y) + 105 + (y > 0 ? y * 15 : 0),
                        65 + (countY == 1 ? 0 : counterCodeShort) + _aaux,
                        null,
                        null,
                        "left"
                      );
                      pdf.setFontSize(13);
                      pdf.setFont("Montserrat-Semi");
                      pdf.text(
                        `$${parseFloat(products[i].prices[z].price)}`,
                        width * (y == 0 ? 0 : y) + 135 + (y > 0 ? y * 15 : 0),
                        65 + (countY == 1 ? 0 : counterCodeShort) + _aaux,
                        null,
                        null,
                        "left"
                      );
                      _aaux += 25;
                    } else if (z == 0 || z == 2) {
                      pdf.setFont("Montserrat");
                      pdf.setFontSize(12);
                      pdf.text(
                        products[i].prices[z].alias,
                        width * (y == 0 ? 0 : y) + 25 + (y > 0 ? y * 15 : 0),
                        65 + (countY == 1 ? 0 : counterCodeShort) + _aaux,
                        null,
                        null,
                        "left"
                      );
                      pdf.setFontSize(13);
                      pdf.setFont("Montserrat-Semi");
                      pdf.text(
                        `$${parseFloat(products[i].prices[z].price)}`,
                        width * (y == 0 ? 0 : y) + 53 + (y > 0 ? y * 15 : 0),
                        65 + (countY == 1 ? 0 : counterCodeShort) + _aaux,
                        null,
                        null,
                        "left"
                      );
                    }
                    // _aaux += 10;
                  }
                  break;
              }
              pdf.setFont("Montserrat-Semi");
              pdf.setFontSize(12);
              pdf.text(
                `${products[i].code}`,
                width * (y == 0 ? 0 : y) + 100 + (y > 0 ? y * 15 : 0),
                106 + (countY == 1 ? 0 : counterCodeShort),
                null,
                null,
                "left"
              );
            }

            if ((i + 1) % productXY == 0) {
              pdf.setFont("Montserrat");
              pdf.setFontSize(12);
              pdf.text(3, 10, `Se generó ${count} plantilla, creador: ${nick}`);
              products.length > productXY ? pdf.addPage() : "";
              count++;
              counterCodeShort = 0;
              countY = 1;
              y = -1;
              x = 0;
            }
            _y++;
          }
          i % productXY == 0 ? zip++ : 1;
        }
        if (_y - 1 === products.length - 1) {
          break;
        }
        x <= 2 ? (counterCodeShortX += 125) : (counterCodeShortX += 130);
        x < 4 ? (counterCodeShort += 125) : (counterCodeShort += 126);
        countY++;
      }
      return zip;
    },
    /**
     * @param { any } pdf Instancia de PDF.
     * @param { number } count Contador de hojas.
     * @param { Object[] } products Productos.
     * @param { string } nick Autor.
     * @param { number } zip Paginador.
     * @description Metodo que construye las etiquetas de Estrella Pequeña (4x6).
     */
    methodStarToysLabel4x6(pdf, count, products, nick, zip) {
      let width = pdf.internal.pageSize.getWidth() / 4.2;
      let countY = 1;
      let counterCodeShort = 0;
      let forCounterX = 6;
      let forCounterY = 4;
      let productXY = forCounterY * forCounterX;
      let _y = 0;
      let newProducts = [];
      let i = 0;
      let x = 0;
      let y = 0;
      products.map((item) => {
        for (let i = 0; i < item.copies; i++) {
          newProducts.push(item);
        }
        return newProducts;
      });
      products = newProducts;
      for (x = 0; x < forCounterX; x++) {
        for (y = 0; y < forCounterY; y++) {
          i = _y;
          if (_y - 1 === products.length - 1) {
            break;
          } else {
            pdf.setFontSize(8);
            pdf.setFont("Montserrat-Semi");
            pdf.addImage(
              "pdf/img/STAR10.png",
              "PNG",
              20 + y * 145,
              20 + x * 125,
              145,
              125
            );
            pdf.text(
              "Grupo Vizcarra",
              width * (y == 0 ? 0 : y) + 95,
              40 + (countY == 1 ? 0 : counterCodeShort),
              null,
              null,
              "center"
            ); //18.3 12.5 6.75
            pdf.setFont("Montserrat-Bold");
            pdf.setFontSize(18);
            pdf.text(
              products[i].name,
              width * (y == 0 ? 0 : y) + 95,
              55 + (countY == 1 ? 0 : counterCodeShort),
              null,
              null,
              "center"
            );

            let aux = 0;
            if (products[i].type == "off") {
              pdf.setTextColor(0);
              pdf.setFont("Montserrat-Bold");
              pdf.setFontSize(12);
              pdf.text(
                `¡¡OFERTA!!`,
                width * (y == 0 ? 0 : y) + 60,
                70 + (countY == 1 ? 0 : counterCodeShort) + aux,
                null,
                null,
                "left"
              );
              pdf.setFontSize(25);
              pdf.text(
                `$${parseFloat(
                  products[i].prices[0].price != 0
                    ? products[i].prices[0].price
                    : 1
                )}`,
                width * (y == 0 ? 0 : y) + 90,
                95 + (countY == 1 ? 0 : counterCodeShort) + aux,
                null,
                null,
                "center"
              );
              pdf.setFontSize(22);
              // pdf.text(`-${products[i].discount}%`, width * (y == 0 ? 0 : y) + 47, 174 + (countY == 1 ? 0 : counterCodeShort) + aux, null, null, 'left');
              aux += aux + 30;
            } else {
              switch (products[i].prices.length) {
                case 1:
                  pdf.setFont("Montserrat");
                  pdf.setFontSize(18);
                  pdf.text(
                    products[i].prices[0].alias,
                    width * (y == 0 ? 0 : y) + 90,
                    75 + (countY == 1 ? 0 : counterCodeShort) + aux,
                    null,
                    null,
                    "center"
                  );
                  pdf.setFontSize(22);
                  pdf.setFont("Montserrat-Semi");
                  pdf.text(
                    `$${parseFloat(products[i].prices[0].price)}`,
                    width * (y == 0 ? 0 : y) + 90,
                    95 + (countY == 1 ? 0 : counterCodeShort) + aux,
                    null,
                    null,
                    "center"
                  );
                  aux += aux + 30;
                  break;
                case 2:
                  for (let z = 0; z < products[i].prices.length; z++) {
                    pdf.setFont("Montserrat");
                    pdf.setFontSize(16);
                    pdf.text(
                      products[i].prices[z].alias,
                      width * (y == 0 ? 0 : y) + 50,
                      75 + (countY == 1 ? 0 : counterCodeShort) + aux,
                      null,
                      null,
                      "left"
                    );
                    pdf.setFontSize(18);
                    pdf.setFont("Montserrat-Semi");
                    pdf.text(
                      `$${parseFloat(products[i].prices[z].price)}`,
                      width * (y == 0 ? 0 : y) + 95,
                      75 + (countY == 1 ? 0 : counterCodeShort) + aux,
                      null,
                      null,
                      "left"
                    );
                    aux += aux + 20;
                  }
                  break;
                case 3:
                  for (let z = 0; z < products[i].prices.length; z++) {
                    pdf.setFont("Montserrat");
                    pdf.setFontSize(13);
                    pdf.text(
                      products[i].prices[z].alias,
                      width * (y == 0 ? 0 : y) + 55,
                      70 + (countY == 1 ? 0 : counterCodeShort) + aux,
                      null,
                      null,
                      "left"
                    );
                    pdf.setFontSize(15);
                    pdf.setFont("Montserrat-Semi");
                    pdf.text(
                      `$${parseFloat(products[i].prices[z].price)}`,
                      width * (y == 0 ? 0 : y) + 95,
                      70 + (countY == 1 ? 0 : counterCodeShort) + aux,
                      null,
                      null,
                      "left"
                    );
                    aux += 15;
                  }
                  break;
                case 4:
                  for (let z = 0; z < products[i].prices.length; z++) {
                    // console.log(prices.reverse());
                    if (z == 1) {
                      aux = 0;
                    }
                    if (z == 1 || z == 3) {
                      pdf.setFont("Montserrat");
                      pdf.setFontSize(11);
                      pdf.text(
                        products[i].prices[z].alias,
                        width * (y == 0 ? 0 : y) + 120,
                        65 + (countY == 1 ? 0 : counterCodeShort) + aux,
                        null,
                        null,
                        "center"
                      );
                      pdf.setFontSize(13);
                      pdf.setFont("Montserrat-Semi");
                      pdf.text(
                        `$${parseFloat(products[i].prices[z].price)}`,
                        width * (y == 0 ? 0 : y) + 120,
                        78 + (countY == 1 ? 0 : counterCodeShort) + aux,
                        null,
                        null,
                        "center"
                      );
                      aux += 25;
                    } else if (z == 0 || z == 2) {
                      pdf.setFont("Montserrat");
                      pdf.setFontSize(11);
                      pdf.text(
                        products[i].prices[z].alias,
                        width * (y == 0 ? 0 : y) + 60,
                        65 + (countY == 1 ? 0 : counterCodeShort) + aux,
                        null,
                        null,
                        "center"
                      );
                      pdf.setFontSize(13);
                      pdf.setFont("Montserrat-Semi");
                      pdf.text(
                        `$${parseFloat(products[i].prices[z].price)}`,
                        width * (y == 0 ? 0 : y) + 60,
                        78 + (countY == 1 ? 0 : counterCodeShort) + aux,
                        null,
                        null,
                        "center"
                      );
                    }
                  }

                  break;
              }
            }

            pdf.setFont("Montserrat");
            pdf.setFontSize(9);
            pdf.text(
              `${products[i].pieces}pz`,
              width * (y == 0 ? 0 : y) + 40,
              112 + (countY == 1 ? 0 : counterCodeShort),
              null,
              null,
              "left"
            );
            pdf.setFont("Montserrat-Bold");
            pdf.text(
              `${products[i].large}`,
              width * (y == 0 ? 0 : y) + 65,
              112 + (countY == 1 ? 0 : counterCodeShort),
              null,
              null,
              "left"
            );
            pdf.setFont("Montserrat-Semi");
            pdf.setFontSize(8);
            pdf.text(
              `${products[i].code}`,
              width * (y == 0 ? 0 : y) + 90,
              112 + (countY == 1 ? 0 : counterCodeShort),
              null,
              null,
              "left"
            );
            this.useIpack
              ? pdf.addImage(
                  this.convertTextToBase64Barcode(products[i].name),
                  "PNG",
                  width * (y == 0 ? 0 : y) + 65,
                  115 + (countY == 1 ? 0 : counterCodeShort),
                  60,
                  15
                )
              : "";
            if ((i + 1) % productXY == 0) {
              pdf.setFont("Montserrat");
              pdf.setFontSize(12);
              pdf.text(3, 10, `Se generó ${count} plantilla, creador: ${nick}`);
              products.length > productXY ? pdf.addPage() : "";
              count++;
              counterCodeShort = 0;
              countY = 1;
              y = -1;
              x = 0;
            }
            _y++;
          }
          i % productXY == 0 ? zip++ : 1;
        }
        if (_y - 1 === products.length - 1) {
          break;
        }
        counterCodeShort += 125;
        countY++;
      }
      return zip;
    },
    /**
     * @param { any } pdf Instancia de PDF.
     * @param { number } count Contador de hojas.
     * @param { Object[] } products Productos.
     * @param { string } nick Autor.
     * @param { number } zip Paginador.
     * @description Metodo que construye las etiquetas de Estrella Mediana (3x4).
     */
    methodStarToysLabel3x4(pdf, count, products, nick, zip) {
      let width = pdf.internal.pageSize.getWidth() / 3.2;
      let countY = 1;
      let counterCodeShort = 0;
      let forCounterX = 4;
      let forCounterY = 3;
      let productXY = forCounterY * forCounterX;
      let _y = 0;
      let newProducts = [];
      let i = 0;
      let x = 0;
      let y = 0;
      products.map((item) => {
        for (let i = 0; i < item.copies; i++) {
          newProducts.push(item);
        }
        return newProducts;
      });
      products = newProducts;
      for (x = 0; x < forCounterX; x++) {
        for (y = 0; y < forCounterY; y++) {
          i = _y;
          if (_y - 1 === products.length - 1) {
            break;
          } else {
            pdf.setFontSize(12);
            pdf.setFont("Montserrat-Semi");
            pdf.addImage(
              "pdf/img/STAR10.png",
              "PNG",
              20 + y * (145 * 1.3),
              20 + x * (125 * 1.5),
              145 * 1.3,
              125 * 1.5
            );
            pdf.text(
              "Grupo Vizcarra",
              width * (y == 0 ? 0 : y) + 112,
              50 + (countY == 1 ? 0 : counterCodeShort),
              null,
              null,
              "center"
            ); //18.3 12.5 6.75
            pdf.setFont("Montserrat-Bold");
            pdf.setFontSize(22);
            pdf.text(
              products[i].name,
              width * (y == 0 ? 0 : y) + 110,
              70 + (countY == 1 ? 0 : counterCodeShort),
              null,
              null,
              "center"
            );
            pdf.setFont("Montserrat-Semi");
            pdf.setFontSize(9);
            let splitter = pdf.splitTextToSize(products[i].label, 150);
            pdf.text(
              splitter,
              width * (y == 0 ? 0 : y) + 35,
              83 + (countY == 1 ? 0 : counterCodeShort),
              null,
              null,
              "left"
            );

            let aux = 0;
            if (products[i].type == "off") {
              pdf.setTextColor(0);
              pdf.setFont("Montserrat-Bold");
              pdf.setFontSize(13);
              pdf.text(
                `¡¡OFERTA!!`,
                width * (y == 0 ? 0 : y) + 70,
                110 + (countY == 1 ? 0 : counterCodeShort) + aux,
                null,
                null,
                "left"
              );
              pdf.setFontSize(35);
              pdf.text(
                `$${parseFloat(
                  products[i].prices[0].price != 0
                    ? products[i].prices[0].price
                    : 1
                )}`,
                width * (y == 0 ? 0 : y) + 110,
                145 + (countY == 1 ? 0 : counterCodeShort) + aux,
                null,
                null,
                "center"
              );
              pdf.setFontSize(22);
              // pdf.text(`-${products[i].discount}%`, width * (y == 0 ? 0 : y) + 47, 174 + (countY == 1 ? 0 : counterCodeShort) + aux, null, null, 'left');
              aux += aux + 30;
            } else {
              switch (products[i].prices.length) {
                case 1:
                  pdf.setFont("Montserrat");
                  pdf.setFontSize(18);
                  pdf.text(
                    products[i].prices[0].alias,
                    width * (y == 0 ? 0 : y) + 110,
                    110 + (countY == 1 ? 0 : counterCodeShort) + aux,
                    null,
                    null,
                    "center"
                  );
                  pdf.setFontSize(30);
                  pdf.setFont("Montserrat-Semi");
                  pdf.text(
                    `$${parseFloat(products[i].prices[0].price)}`,
                    width * (y == 0 ? 0 : y) + 110,
                    140 + (countY == 1 ? 0 : counterCodeShort) + aux,
                    null,
                    null,
                    "center"
                  );
                  aux += aux + 30;
                  break;
                case 2:
                  for (let z = 0; z < products[i].prices.length; z++) {
                    pdf.setFont("Montserrat");
                    pdf.setFontSize(18);
                    pdf.text(
                      products[i].prices[z].alias,
                      width * (y == 0 ? 0 : y) + 65,
                      115 + (countY == 1 ? 0 : counterCodeShort) + aux,
                      null,
                      null,
                      "left"
                    );
                    pdf.setFontSize(20);
                    pdf.setFont("Montserrat-Semi");
                    pdf.text(
                      `$${parseFloat(products[i].prices[z].price)}`,
                      width * (y == 0 ? 0 : y) + 120,
                      115 + (countY == 1 ? 0 : counterCodeShort) + aux,
                      null,
                      null,
                      "left"
                    );
                    aux += aux + 25;
                  }
                  break;
                case 3:
                  for (let z = 0; z < products[i].prices.length; z++) {
                    pdf.setFont("Montserrat");
                    pdf.setFontSize(16);
                    pdf.text(
                      products[i].prices[z].alias,
                      width * (y == 0 ? 0 : y) + 65,
                      110 + (countY == 1 ? 0 : counterCodeShort) + aux,
                      null,
                      null,
                      "left"
                    );
                    pdf.setFontSize(18);
                    pdf.setFont("Montserrat-Semi");
                    pdf.text(
                      `$${parseFloat(products[i].prices[z].price)}`,
                      width * (y == 0 ? 0 : y) + 120,
                      110 + (countY == 1 ? 0 : counterCodeShort) + aux,
                      null,
                      null,
                      "left"
                    );
                    aux += 18;
                  }
                  break;
                case 4:
                  for (let z = 0; z < products[i].prices.length; z++) {
                    // console.log(prices.reverse());
                    if (z == 1) {
                      aux = 0;
                    }
                    if (z == 1 || z == 3) {
                      pdf.setFont("Montserrat");
                      pdf.setFontSize(13);
                      pdf.text(
                        products[i].prices[z].alias,
                        width * (y == 0 ? 0 : y) + 145,
                        105 + (countY == 1 ? 0 : counterCodeShort) + aux,
                        null,
                        null,
                        "center"
                      );
                      pdf.setFontSize(15);
                      pdf.setFont("Montserrat-Semi");
                      pdf.text(
                        `$${parseFloat(products[i].prices[z].price)}`,
                        width * (y == 0 ? 0 : y) + 145,
                        120 + (countY == 1 ? 0 : counterCodeShort) + aux,
                        null,
                        null,
                        "center"
                      );
                      aux += 28;
                    } else if (z == 0 || z == 2) {
                      pdf.setFont("Montserrat");
                      pdf.setFontSize(13);
                      pdf.text(
                        products[i].prices[z].alias,
                        width * (y == 0 ? 0 : y) + 75,
                        105 + (countY == 1 ? 0 : counterCodeShort) + aux,
                        null,
                        null,
                        "center"
                      );
                      pdf.setFontSize(15);
                      pdf.setFont("Montserrat-Semi");
                      pdf.text(
                        `$${parseFloat(products[i].prices[z].price)}`,
                        width * (y == 0 ? 0 : y) + 75,
                        120 + (countY == 1 ? 0 : counterCodeShort) + aux,
                        null,
                        null,
                        "center"
                      );
                    }
                  }

                  break;
              }
            }

            pdf.setFont("Montserrat");
            pdf.setFontSize(11);
            pdf.text(
              `${products[i].pieces}pz`,
              width * (y == 0 ? 0 : y) + 55,
              160 + (countY == 1 ? 0 : counterCodeShort),
              null,
              null,
              "left"
            );
            pdf.setFont("Montserrat-Bold");
            pdf.text(
              `${products[i].large}`,
              width * (y == 0 ? 0 : y) + 85,
              160 + (countY == 1 ? 0 : counterCodeShort),
              null,
              null,
              "left"
            );
            pdf.setFont("Montserrat-Semi");
            pdf.setFontSize(9);
            pdf.text(
              `${products[i].code}`,
              width * (y == 0 ? 0 : y) + 115,
              160 + (countY == 1 ? 0 : counterCodeShort),
              null,
              null,
              "left"
            );
            this.useIpack
              ? pdf.addImage(
                  this.convertTextToBase64Barcode(products[i].name),
                  "PNG",
                  width * (y == 0 ? 0 : y) + 75,
                  165 + (countY == 1 ? 0 : counterCodeShort),
                  80,
                  20
                )
              : "";
            if ((i + 1) % productXY == 0) {
              pdf.setFont("Montserrat");
              pdf.setFontSize(12);
              pdf.text(3, 10, `Se generó ${count} plantilla, creador: ${nick}`);
              products.length > 24 ? pdf.addPage() : "";
              count++;
              counterCodeShort = 0;
              countY = 1;
              y = -1;
              x = 0;
            }
            _y++;
          }
          i % productXY == 0 ? zip++ : 1;
        }
        if (_y - 1 === products.length - 1) {
          break;
        }
        counterCodeShort += 188;//125
        countY++;
      }
      return zip;
    },
    /**
     * @param { any } pdf Instancia de PDF.
     * @param { number } count Contador de hojas.
     * @param { Object[] } products Productos.
     * @param { string } nick Autor.
     * @param { number } zip Paginador.
     * @description Metodo que construye las etiquetas rectangulares de Navidad Grande (2x3).
     */
    methodSquareToysLabel2x3(pdf, count, products, nick, zip) {
      let width = pdf.internal.pageSize.getWidth() / 2.1;
      let height = pdf.internal.pageSize.getHeight() / 3.2;
      let countY = 1;
      let counterCodeShort = 0;
      let forCounterX = 3;
      let forCounterY = 2;
      let productXY = forCounterY * forCounterX;
      let _y = 0;
      let newProducts = [];
      let i = 0;
      let x = 0;
      let y = 0;
      products.map((item) => {
        for (let i = 0; i < item.copies; i++) {
          newProducts.push(item);
        }
        return newProducts;
      });
      products = newProducts;
      for (x = 0; x < forCounterX; x++) {
        for (y = 0; y < forCounterY; y++) {
          i = _y;
          if (_y - 1 === products.length - 1) {
            break;
          } else {
            pdf.setFontSize(10);
            pdf.setFont("Montserrat-Semi");
            pdf.rect(20, 20, width * (y + 1), height * countY);
            pdf.text(
              "Grupo Vizcarra",
              width * (y == 0 ? 0 : y) + 170,
              32 + (countY == 1 ? 0 : counterCodeShort),
              null,
              null,
              "center"
            ); //18.3 12.5 6.75
            pdf.setFont("Montserrat-Bold");
            pdf.setFontSize(38);
            this.useIpack
              ? pdf.text(
                  products[i].name,
                  width * (y == 0 ? 0 : y) + 30,
                  70 + (countY == 1 ? 0 : counterCodeShort),
                  null,
                  null,
                  "left"
                )
              : pdf.text(
                  products[i].name,
                  width * (y == 0 ? 0 : y) + 170,
                  70 + (countY == 1 ? 0 : counterCodeShort),
                  null,
                  null,
                  "center"
                );
            pdf.setFontSize(12);
            pdf.setFont("Montserrat");
            let splitter = pdf.splitTextToSize(products[i].label, 260);
            pdf.text(
              splitter,
              width * (y == 0 ? 0 : y) + 25,
              90 + (countY == 1 ? 0 : counterCodeShort),
              null,
              null,
              "left"
            );
            let aux = 0;
            if (products[i].type == "off") {
              pdf.setFont("Montserrat-Semi");
              pdf.setFontSize(16);
              pdf.addImage(
                "pdf/img/banner.png",
                "PNG",
                width * (y == 0 ? 0 : y) + 30,
                75 + (countY == 1 ? 0 : counterCodeShort) + aux,
                270,
                180
              ); //210,140
              let convert =
                products[i].prices[0].price +
                (products[i].prices[0].price * products[i].discount) / 100;
              convert =
                Math.floor(convert) == products[i].prices[0].price
                  ? convert + 1
                  : convert;
              pdf.text(
                `De $${Math.floor(convert) + 1} a`,
                width * (y == 0 ? 0 : y) + 115,
                147 + (countY == 1 ? 0 : counterCodeShort) + aux,
                null,
                null,
                "left"
              );
              pdf.setTextColor(0);
              pdf.setFont("Montserrat-Bold");
              pdf.setFontSize(16);
              pdf.text(
                `¡¡OFERTA!!`,
                width * (y == 0 ? 0 : y) + 105,
                125 + (countY == 1 ? 0 : counterCodeShort) + aux,
                null,
                null,
                "left"
              );
              pdf.setFontSize(30);
              pdf.text(
                `$${parseFloat(
                  products[i].prices[0].price != 0
                    ? products[i].prices[0].price
                    : 1
                )}`,
                width * (y == 0 ? 0 : y) + 120,
                185 + (countY == 1 ? 0 : counterCodeShort) + aux,
                null,
                null,
                "left"
              );
              pdf.setFontSize(26);
              pdf.text(
                `-${products[i].discount}%`,
                width * (y == 0 ? 0 : y) + 47,
                174 + (countY == 1 ? 0 : counterCodeShort) + aux,
                null,
                null,
                "left"
              );
              aux += aux + 30;
            } else {
              switch (products[i].prices.length) {
                case 1:
                  pdf.setFont("Montserrat");
                  pdf.setFontSize(30);
                  pdf.text(
                    products[i].prices[0].alias,
                    width * (y == 0 ? 0 : y) + 80,
                    170 + (countY == 1 ? 0 : counterCodeShort) + aux,
                    null,
                    null,
                    "left"
                  );
                  pdf.setFontSize(35);
                  pdf.setFont("Montserrat-Semi");
                  pdf.text(
                    `$${parseFloat(products[i].prices[0].price)}`,
                    width * (y == 0 ? 0 : y) + 160,
                    170 + (countY == 1 ? 0 : counterCodeShort) + aux,
                    null,
                    null,
                    "left"
                  );
                  aux += aux + 60;
                  break;
                case 2:
                  for (let z = 0; z < products[i].prices.length; z++) {
                    pdf.setFont("Montserrat");
                    pdf.setFontSize(26);
                    pdf.text(
                      products[i].prices[z].alias,
                      width * (y == 0 ? 0 : y) + 80,
                      140 + (countY == 1 ? 0 : counterCodeShort) + aux,
                      null,
                      null,
                      "left"
                    );
                    pdf.setFontSize(30);
                    pdf.setFont("Montserrat-Semi");
                    pdf.text(
                      `$${parseFloat(products[i].prices[z].price)}`,
                      width * (y == 0 ? 0 : y) + 160,
                      140 + (countY == 1 ? 0 : counterCodeShort) + aux,
                      null,
                      null,
                      "left"
                    );
                    aux += aux + 50;
                  }
                  break;
                case 3:
                  for (let z = 0; z < products[i].prices.length; z++) {
                    pdf.setFont("Montserrat");
                    pdf.setFontSize(22);
                    pdf.text(
                      products[i].prices[z].alias,
                      width * (y == 0 ? 0 : y) + 80,
                      140 + (countY == 1 ? 0 : counterCodeShort) + aux,
                      null,
                      null,
                      "left"
                    );
                    pdf.setFontSize(25);
                    pdf.setFont("Montserrat-Semi");
                    pdf.text(
                      `$${parseFloat(products[i].prices[z].price)}`,
                      width * (y == 0 ? 0 : y) + 160,
                      140 + (countY == 1 ? 0 : counterCodeShort) + aux,
                      null,
                      null,
                      "left"
                    );
                    aux += 35;
                  }
                  break;
                case 4:
                  for (let z = 0; z < products[i].prices.length; z++) {
                    if (z == 1) {
                      aux = 0;
                    }
                    if (z == 1 || z == 3) {
                      pdf.setFont("Montserrat");
                      pdf.setFontSize(20);
                      pdf.text(
                        products[i].prices[z].alias,
                        width * (y == 0 ? 0 : y) + 165,
                        150 + (countY == 1 ? 0 : counterCodeShort) + aux,
                        null,
                        null,
                        "left"
                      );
                      pdf.setFontSize(22);
                      pdf.setFont("Montserrat-Semi");
                      pdf.text(
                        `$${parseFloat(products[i].prices[z].price)}`,
                        width * (y == 0 ? 0 : y) + 220,
                        150 + (countY == 1 ? 0 : counterCodeShort) + aux,
                        null,
                        null,
                        "left"
                      );
                      aux += aux + 50;
                    } else if (z == 0 || z == 2) {
                      pdf.setFont("Montserrat");
                      pdf.setFontSize(20);
                      pdf.text(
                        products[i].prices[z].alias,
                        width * (y == 0 ? 0 : y) + 35,
                        150 + (countY == 1 ? 0 : counterCodeShort) + aux,
                        null,
                        null,
                        "left"
                      );
                      pdf.setFontSize(22);
                      pdf.setFont("Montserrat-Semi");
                      pdf.text(
                        `$${parseFloat(products[i].prices[z].price)}`,
                        width * (y == 0 ? 0 : y) + 90,
                        150 + (countY == 1 ? 0 : counterCodeShort) + aux,
                        null,
                        null,
                        "left"
                      );
                    }
                  }
                  break;
              }
            }
            pdf.setFont("Montserrat");
            pdf.setFontSize(14);
            pdf.text(
              `${products[i].pieces}pz`,
              width * (y == 0 ? 0 : y) + 40,
              260 + (countY == 1 ? 0 : counterCodeShort),
              null,
              null,
              "left"
            );
            pdf.setFont("Montserrat-Bold");
            pdf.text(
              products[i].large,
              width * (y == 0 ? 0 : y) + 85,
              260 + (countY == 1 ? 0 : counterCodeShort),
              null,
              null,
              "left"
            );
            pdf.setFont("Montserrat-Semi");
            pdf.setFontSize(16);
            pdf.text(
              `${products[i].code}`,
              width * (y == 0 ? 0 : y) + 170,
              260 + (countY == 1 ? 0 : counterCodeShort),
              null,
              null,
              "left"
            );
            this.useIpack
              ? pdf.addImage(
                  this.convertTextToBase64Barcode(products[i].name),
                  "PNG",
                  width * (y == 0 ? 0 : y) + 200,
                  45 + (countY == 1 ? 0 : counterCodeShort),
                  100,
                  25
                )
              : "";
            if ((i + 1) % productXY == 0) {
              pdf.setFont("Montserrat");
              pdf.setFontSize(12);
              pdf.text(3, 10, `Se generó ${count} plantilla, creador: ${nick}`);
              products.length > productXY ? pdf.addPage() : "";
              count++;
              counterCodeShort = 0;
              countY = 1;
              y = -1;
              x = 0;
            }
            _y++;
          }
          i % productXY == 0 ? zip++ : 1;
        }
        if (_y - 1 === products.length - 1) {
          break;
        }
        counterCodeShort += 247;
        countY++;
      }
      return zip;
    },
    /**
     * @param { any } pdf Instancia de PDF.
     * @param { number } count Contador de hojas.
     * @param { Object[] } products Productos.
     * @param { string } nick Autor.
     * @param { number } zip Paginador.
     * @description Metodo que construye las etiquetas rectangulares de Navidad Vertical (4x3).
     */
    methodSquareToysLabel4x3(pdf, count, products, nick, zip) {
      let width = pdf.internal.pageSize.getWidth() / 4.2;
      let height = pdf.internal.pageSize.getHeight() / 3.2;
      let countY = 1;
      let counterCodeShort = 0;
      let forCounterX = 3;
      let forCounterY = 4;
      let productXY = forCounterY * forCounterX;
      let _y = 0;
      let newProducts = [];
      let i = 0;
      let x = 0;
      let y = 0;
      products.map((item) => {
        for (let i = 0; i < item.copies; i++) {
          newProducts.push(item);
        }
        return newProducts;
      });
      products = newProducts;
      for (x = 0; x < forCounterX; x++) {
        for (y = 0; y < forCounterY; y++) {
          i = _y;
          if (_y - 1 === products.length - 1) {
            break;
          } else {
            pdf.setFontSize(10);
            pdf.setFont("Montserrat-Semi");
            pdf.rect(20, 20, width * (y + 1), height * countY);
            pdf.text(
              "Grupo Vizcarra",
              width * (y == 0 ? 0 : y) + 95,
              32 + (countY == 1 ? 0 : counterCodeShort),
              null,
              null,
              "center"
            ); //18.3 12.5 6.75
            pdf.setFont("Montserrat-Bold");
            pdf.setFontSize(30);
            this.useIpack
              ? pdf.text(
                  products[i].name,
                  width * (y == 0 ? 0 : y) + 50,
                  70 + (countY == 1 ? 0 : counterCodeShort),
                  null,
                  null,
                  "left"
                )
              : pdf.text(
                  products[i].name,
                  width * (y == 0 ? 0 : y) + 50,
                  70 + (countY == 1 ? 0 : counterCodeShort),
                  null,
                  null,
                  "left"
                );
            pdf.setFontSize(9);
            pdf.setFont("Montserrat-Semi");
            let splitter = pdf.splitTextToSize(products[i].label, 120);
            pdf.text(
              splitter,
              width * (y == 0 ? 0 : y) + 30,
              90 + (countY == 1 ? 0 : counterCodeShort),
              null,
              null,
              "left"
            );
            let aux = 0;
            if (products[i].type == "off") {
              pdf.setFont("Montserrat-Semi");
              pdf.setFontSize(12);
              let convert =
                products[i].prices[0].price +
                (products[i].prices[0].price * products[i].discount) / 100;
              convert =
                Math.floor(convert) == products[i].prices[0].price
                  ? convert + 1
                  : convert;
              pdf.text(
                `De $${Math.floor(convert) + 1} a`,
                width * (y == 0 ? 0 : y) + 60,
                138 + (countY == 1 ? 0 : counterCodeShort) + aux,
                null,
                null,
                "left"
              );
              pdf.setTextColor(0);
              pdf.setFont("Montserrat-Bold");
              pdf.setFontSize(11);
              pdf.text(
                `¡¡OFERTA!!`,
                width * (y == 0 ? 0 : y) + 60,
                125 + (countY == 1 ? 0 : counterCodeShort) + aux,
                null,
                null,
                "left"
              );
              pdf.setFontSize(33);
              pdf.text(
                `$${parseFloat(
                  products[i].prices[0].price != 0
                    ? products[i].prices[0].price
                    : 1
                )}`,
                width * (y == 0 ? 0 : y) + 54,
                170 + (countY == 1 ? 0 : counterCodeShort) + aux,
                null,
                null,
                "left"
              );
              pdf.setFontSize(22);
              aux += aux + 30;
            } else {
              switch (products[i].prices.length) {
                case 1:
                  pdf.setFont("Montserrat");
                  pdf.setFontSize(24);
                  pdf.text(
                    products[i].prices[0].alias,
                    width * (y == 0 ? 0 : y) + 60,
                    130 + (countY == 1 ? 0 : counterCodeShort) + aux,
                    null,
                    null,
                    "left"
                  );
                  pdf.setFontSize(26);
                  pdf.setFont("Montserrat-Semi");
                  pdf.text(
                    `$${parseFloat(products[i].prices[0].price)}`,
                    width * (y == 0 ? 0 : y) + 55,
                    170 + (countY == 1 ? 0 : counterCodeShort) + aux,
                    null,
                    null,
                    "left"
                  );
                  aux += aux + 30;
                  break;
                case 2:
                  for (let z = 0; z < products[i].prices.length; z++) {
                    pdf.setFont("Montserrat");
                    pdf.setFontSize(17);
                    pdf.text(
                      products[i].prices[z].alias,
                      width * (y == 0 ? 0 : y) + 40,
                      130 + (countY == 1 ? 0 : counterCodeShort) + aux,
                      null,
                      null,
                      "left"
                    );
                    pdf.setFontSize(19);
                    pdf.setFont("Montserrat-Semi");
                    pdf.text(
                      `$${parseFloat(products[i].prices[z].price)}`,
                      width * (y == 0 ? 0 : y) + 85,
                      130 + (countY == 1 ? 0 : counterCodeShort) + aux,
                      null,
                      null,
                      "left"
                    );
                    aux += aux + 40;
                  }
                  break;
                case 3:
                  for (let z = 0; z < products[i].prices.length; z++) {
                    pdf.setFont("Montserrat");
                    pdf.setFontSize(17);
                    pdf.text(
                      products[i].prices[z].alias,
                      width * (y == 0 ? 0 : y) + 35,
                      130 + (countY == 1 ? 0 : counterCodeShort) + aux,
                      null,
                      null,
                      "left"
                    );
                    pdf.setFontSize(19);
                    pdf.setFont("Montserrat-Semi");
                    pdf.text(
                      `$${parseFloat(products[i].prices[z].price)}`,
                      width * (y == 0 ? 0 : y) + 85,
                      130 + (countY == 1 ? 0 : counterCodeShort) + aux,
                      null,
                      null,
                      "left"
                    );
                    aux += 25;
                  }
                  break;
                case 4:
                  for (let z = 0; z < products[i].prices.length; z++) {
                    pdf.setFont("Montserrat");
                    pdf.setFontSize(17);
                    pdf.text(
                      products[i].prices[z].alias,
                      width * (y == 0 ? 0 : y) + 35,
                      130 + (countY == 1 ? 0 : counterCodeShort) + aux,
                      null,
                      null,
                      "left"
                    );
                    pdf.setFontSize(19);
                    pdf.setFont("Montserrat-Semi");
                    pdf.text(
                      `$${parseFloat(products[i].prices[z].price)}`,
                      width * (y == 0 ? 0 : y) + 85,
                      130 + (countY == 1 ? 0 : counterCodeShort) + aux,
                      null,
                      null,
                      "left"
                    );
                    aux += 20;
                  }
                  break;
              }
            }
            pdf.rect(
              20,
              205 + (countY == 1 ? 0 : counterCodeShort),
              146 * (y + 1),
              25
            );
            pdf.setFont("Montserrat");
            if (products[i].pieces >= 100) {
              pdf.setFontSize(10);
            } else if (products[i].pieces >= 1000) {
              pdf.setFontSize(9);
            } else {
              pdf.setFontSize(11);
            }
            let large = products[i].large != undefined;
            pdf.text(
              `${products[i].pieces}PZ`,
              width * (y == 0 ? 0 : y) + (large ? 25 : 30),
              223 + (countY == 1 ? 0 : counterCodeShort),
              null,
              null,
              "left"
            );
            pdf.setFont("Montserrat-Bold");
            pdf.text(
              `${large ? products[i].large : ""}`,
              width * (y == 0 ? 0 : y) + (products[i].pieces < 100 ? 58 : 68),
              223 + (countY == 1 ? 0 : counterCodeShort),
              null,
              null,
              "left"
            );
            pdf.setFont("Montserrat-Semi");
            if (products[i].code.length > 10) {
              pdf.setFontSize(9);
            } else {
              pdf.setFontSize(10);
            }
            pdf.text(
              `${products[i].code}`,
              width * (y == 0 ? 0 : y) + (large ? 85 : 85),
              223 + (countY == 1 ? 0 : counterCodeShort),
              null,
              null,
              "left"
            );
            this.useIpack
              ? pdf.addImage(
                  this.convertTextToBase64Barcode(products[i].name),
                  "PNG",
                  width * (y == 0 ? 0 : y) + 44,
                  237 + (countY == 1 ? 0 : counterCodeShort),
                  100,
                  25
                )
              : "";
            if ((i + 1) % productXY == 0) {
              pdf.setFont("Montserrat");
              pdf.setFontSize(12);
              pdf.text(3, 10, `Se generó ${count} plantilla, creador: ${nick}`);
              products.length > 6 ? pdf.addPage() : "";
              count++;
              counterCodeShort = 0;
              countY = 1;
              y = -1;
              x = 0;
            }
            _y++;
          }
          i % productXY == 0 ? zip++ : 1;
        }
        if (_y - 1 === products.length - 1) {
          break;
        }
        counterCodeShort += 247;
        countY++;
      }
      return zip;
    },
    /**
     * @param { any } pdf Instancia de PDF.
     * @param { number } count Contador de hojas.
     * @param { Object[] } products Productos.
     * @param { string } nick Autor.
     * @param { number } zip Paginador.
     * @description Metodo que construye las etiquetas rectangulares de Bodega (9x2).
     */
    methodSquareToysLabel9x2(pdf, count, products, nick, zip) {
      let width = pdf.internal.pageSize.getWidth() / 2.1;
      let height = pdf.internal.pageSize.getHeight() / 9.4;
      let countY = 1;
      let counterCodeShort = 0;
      let forCounterX = 9;
      let forCounterY = 2;
      let productXY = forCounterY * forCounterX;
      let _y = 0;
      let newProducts = [];
      let i = 0;
      let x = 0;
      let y = 0;
      products.map((item) => {
        for (let i = 0; i < item.copies; i++) {
          newProducts.push(item);
        }
        return newProducts;
      });
      products = newProducts;
      for (x = 0; x < forCounterX; x++) {
        for (y = 0; y < forCounterY; y++) {
          i = _y;
          if (_y - 1 === products.length - 1) {
            break;
          } else {
            pdf.rect(20, 20, width * (y + 1), height * countY);
            pdf.setFont("Montserrat-Bold");
            if (products[i].code.length >= 8) {
              pdf.setFontSize(27);
            } else {
              pdf.setFontSize(33);
            }
            pdf.text(
              products[i].code,
              width * (y == 0 ? 0 : y) + 30,
              50 + (countY == 1 ? 0 : counterCodeShort),
              null,
              null,
              "left"
            );
            pdf.setFont("Montserrat-Semi");
            pdf.setFontSize(8);
            let splitter = pdf.splitTextToSize(products[i].label, 170);
            pdf.text(
              splitter,
              width * (y == 0 ? 0 : y) + 30,
              60 + (countY == 1 ? 0 : counterCodeShort),
              null,
              null,
              "left"
            );
            pdf.setFontSize(20);
            pdf.text(
              products[i].name,
              width * (y == 0 ? 0 : y) + 30,
              100 + (countY == 1 ? 0 : counterCodeShort),
              null,
              null,
              "left"
            );
            pdf.setFont("Montserrat-Semi");
            this.useIpack
              ? pdf.addImage(
                  this.convertTextToBase64Barcode(products[i].name),
                  "PNG",
                  width * (y == 0 ? 0 : y) + 195,
                  75 + (countY == 1 ? 0 : counterCodeShort),
                  110,
                  25
                )
              : "";
            if (products[i].variants.length >= 3) {
              pdf.setFontSize(10);
            } else {
              pdf.setFontSize(14);
            }
            let sum = 0;
            for (let z = 0; z < products[i].variants.length; z++) {
              pdf.text(
                `${products[i].variants[z].barcode}`,
                width * (y == 0 ? 0 : y) + 195,
                35 + sum + (countY == 1 ? 0 : counterCodeShort),
                null,
                null,
                "left"
              );
              sum += 12;
            }
            if ((i + 1) % productXY == 0) {
              pdf.setFont("Montserrat");
              pdf.setFontSize(12);
              pdf.text(3, 10, `Se generó ${count} plantilla, creador: ${nick}`);
              products.length > productXY ? pdf.addPage() : "";
              count++;
              counterCodeShort = 0;
              countY = 1;
              y = -1;
              x = 0;
            }
            _y++;
          }
          i % productXY == 0 ? zip++ : 1;
        }
        if (_y - 1 === products.length - 1) {
          break;
        }
        counterCodeShort += 84;
        countY++;
      }
      return zip;
    },
    /**
     * @param { any } pdf Instancia de PDF.
     * @param { number } count Contador de hojas.
     * @param { Object[] } products Productos.
     * @param { string } nick Autor.
     * @param { number } zip Paginador.
     * @description Metodo que construye las etiquetas rectangulares de Navidad Mediana (2x4).
     */
    methodSquareToysLabel2x4(pdf, count, products, nick, zip) {
      console.log("ESTE ES EL FORMATO!!!");
      let width = pdf.internal.pageSize.getWidth() / 2.15;
      let height = pdf.internal.pageSize.getHeight() / 4.3;
      let countX = 1;
      let countY = 1;
      let counterCodeShort = 0;
      let counterCodeShortX = 0;
      let productXY = 8;
      let newProducts = [];
      products.map((item) => {
        for (let i = 0; i < item.copies; i++) {
          newProducts.push(item);
        }
        return newProducts;
      });
      products = newProducts;
      for (let i = 0; i < products.length; i++) {
        if (i % 2 == 0) {
          pdf.setFontSize(12);
          pdf.setFont("Montserrat-Semi");
          pdf.rect(20, 20, width, height * countY);
          pdf.text(
            "Grupo Vizcarra",
            width / 1.75,
            32 + (countY == 1 ? 0 : counterCodeShort),
            null,
            null,
            "center"
          ); //18.3 12.5 6.75
          pdf.setFont("Montserrat-Bold");
          pdf.setFontSize(33);
          this.useIpack
            ? pdf.text(
                products[i].name,
                width / 10,
                70 + (countY == 1 ? 0 : counterCodeShort),
                null,
                null,
                "left"
              )
            : pdf.text(
                products[i].name,
                width / 1.75,
                70 + (countY == 1 ? 0 : counterCodeShort),
                null,
                null,
                "center"
              );
          pdf.setFontSize(10);
          pdf.setFont("Montserrat");
          let splitter = pdf.splitTextToSize(products[i].label, 270);
          pdf.text(
            splitter,
            width / 10,
            88 + (countY == 1 ? 0 : counterCodeShort),
            null,
            null,
            "left"
          );
          let aux = 0;
          if (products[i].type == "off") {
            pdf.setFont("Montserrat-Semi");
            pdf.setFontSize(12);
            // pdf.addImage(
            //   "pdf/img/banner.png",
            //   "PNG",
            //   width / 4.5,
            //   70 + (countY == 1 ? 0 : counterCodeShort) + aux,
            //   210,
            //   140
            // );
            let convert =
              products[i].prices[0].price +
              (products[i].prices[0].price * products[i].discount) / 100;
            convert =
              Math.floor(convert) == products[i].prices[0].price
                ? convert + 1
                : convert;
            pdf.text(
              `De $${Math.floor(convert) + 1} a`,
              width / 2.2,
              123 + (countY == 1 ? 0 : counterCodeShort) + aux,
              null,
              null,
              "left"
            );
            pdf.setFont("Montserrat-Bold");
            pdf.setFontSize(12);
            pdf.text(
              `¡¡OFERTA!!`,
              width / 2,
              110 + (countY == 1 ? 0 : counterCodeShort) + aux,
              null,
              null,
              "left"
            );
            pdf.setFontSize(35);
            pdf.text(
              `$${parseFloat(
                products[i].prices[0].price != 0
                  ? products[i].prices[0].price
                  : 1
              )}`,
              width / 2.2,
              155 + (countY == 1 ? 0 : counterCodeShort) + aux,
              null,
              null,
              "left"
            );
            pdf.setFontSize(20);
            pdf.text(
              `-${products[i].discount}%`,
              width / 3.6,
              145 + (countY == 1 ? 0 : counterCodeShort) + aux,
              null,
              null,
              "left"
            );
            pdf.setFontSize(30);
            pdf.setFont("Montserrat-Semi");
            aux += aux + 30;
          } else {
            switch (products[i].prices.length) {
              case 1:
                pdf.setFont("Montserrat");
                pdf.setFontSize(30);
                pdf.text(
                  products[i].prices[0].alias,
                  width / 3.8,
                  140 + (countY == 1 ? 0 : counterCodeShort) + aux,
                  null,
                  null,
                  "left"
                );
                pdf.setFontSize(30);
                pdf.setFont("Montserrat-Semi");
                pdf.text(
                  `$${parseFloat(products[i].prices[0].price)}`,
                  width / 1.8,
                  140 + (countY == 1 ? 0 : counterCodeShort) + aux,
                  null,
                  null,
                  "left"
                );
                aux += aux + 30;
                break;
              case 2:
                for (let y = 0; y < products[i].prices.length; y++) {
                  pdf.setFont("Montserrat");
                  pdf.setFontSize(20);
                  pdf.text(
                    products[i].prices[y].alias,
                    width / 3,
                    120 + (countY == 1 ? 0 : counterCodeShort) + aux,
                    null,
                    null,
                    "left"
                  );
                  pdf.setFontSize(25);
                  pdf.setFont("Montserrat-Semi");
                  pdf.text(
                    `$${parseFloat(products[i].prices[y].price)}`,
                    width / 1.8,
                    120 + (countY == 1 ? 0 : counterCodeShort) + aux,
                    null,
                    null,
                    "left"
                  );
                  aux += aux + 30;
                }
                break;
              case 3:
                for (let y = 0; y < products[i].prices.length; y++) {
                  pdf.setFont("Montserrat");
                  pdf.setFontSize(18);
                  pdf.text(
                    products[i].prices[y].alias,
                    width / 3,
                    118 + (countY == 1 ? 0 : counterCodeShort) + aux,
                    null,
                    null,
                    "left"
                  );
                  pdf.setFontSize(22);
                  pdf.setFont("Montserrat-Semi");
                  pdf.text(
                    `$${parseFloat(products[i].prices[y].price)}`,
                    width / 1.8,
                    118 + (countY == 1 ? 0 : counterCodeShort) + aux,
                    null,
                    null,
                    "left"
                  );
                  aux += 25;
                }
                break;
              case 4:
                for (let y = 0; y < products[i].prices.length; y++) {
                  if (y == 1) {
                    aux = 0;
                  }
                  if (y == 1 || y == 3) {
                    pdf.setFont("Montserrat");
                    pdf.setFontSize(15);
                    pdf.text(
                      products[i].prices[y].alias,
                      width / 1.7,
                      130 + (countY == 1 ? 0 : counterCodeShort) + aux,
                      null,
                      null,
                      "left"
                    );
                    pdf.setFontSize(18);
                    pdf.setFont("Montserrat-Semi");
                    pdf.text(
                      `$${parseFloat(products[i].prices[y].price)}`,
                      width / 1.35,
                      130 + (countY == 1 ? 0 : counterCodeShort) + aux,
                      null,
                      null,
                      "left"
                    );
                    aux += aux + 30;
                  } else if (y == 0 || y == 2) {
                    pdf.setFont("Montserrat");
                    pdf.setFontSize(15);
                    pdf.text(
                      products[i].prices[y].alias,
                      width / 7,
                      130 + (countY == 1 ? 0 : counterCodeShort) + aux,
                      null,
                      null,
                      "left"
                    );
                    pdf.setFontSize(18);
                    pdf.setFont("Montserrat-Semi");
                    pdf.text(
                      `$${parseFloat(products[i].prices[y].price)}`,
                      width / 3.3,
                      130 + (countY == 1 ? 0 : counterCodeShort) + aux,
                      null,
                      null,
                      "left"
                    );
                  }
                }
                break;
            }
          }
          pdf.setFont("Montserrat");
          pdf.setFontSize(16);
          pdf.text(
            `${products[i].pieces}pz`,
            width / 4.5,
            195 + (countY == 1 ? 0 : counterCodeShort),
            null,
            null,
            "center"
          );
          pdf.setFont("Montserrat-Bold");
          pdf.text(
            products[i].large,
            width / 3,
            195 + (countY == 1 ? 0 : counterCodeShort),
            null,
            null,
            "left"
          );
          pdf.setFont("Montserrat-Semi");
          pdf.setFontSize(16);
          pdf.text(
            `${products[i].code}`,
            width / 1.7,
            195 + (countY == 1 ? 0 : counterCodeShort),
            null,
            null,
            "left"
          );
          this.useIpack
            ? pdf.addImage(
                this.convertTextToBase64Barcode(products[i].name),
                "PNG",
                width / 1.48,
                40 + (countY == 1 ? 0 : counterCodeShort),
                100,
                25
              )
            : "";
          // /*----------  SEGMENTO DE PRECIOS SOLO SI SON SELECCIONADOS TODOS  -----------*/
          countY++;
          counterCodeShort += 182 + (i < 3 ? 4 : 2);
        } else {
          pdf.setFont("Montserrat-Semi");
          pdf.setFontSize(12);
          pdf.rect(width + 20, 20, width, height * countX);
          pdf.text(
            "Grupo Vizcarra",
            (width / 1.75) * 2.75,
            32 + (countX == 1 ? 0 : counterCodeShortX),
            null,
            null,
            "center"
          );
          pdf.setFont("Montserrat-Bold");
          pdf.setFontSize(33);
          this.useIpack
            ? pdf.text(
                products[i].name,
                width * 1.1,
                70 + (countX == 1 ? 0 : counterCodeShortX),
                null,
                null,
                "left"
              )
            : pdf.text(
                products[i].name,
                (width / 1.75) * 2.75,
                70 + (countX == 1 ? 0 : counterCodeShortX),
                null,
                null,
                "center"
              );
          pdf.setFontSize(10);
          pdf.setFont("Montserrat");
          let splitter = pdf.splitTextToSize(products[i].label, 270);
          pdf.text(
            splitter,
            width * 1.1,
            88 + (countX == 1 ? 0 : counterCodeShortX),
            null,
            null,
            "left"
          );
          let aux = 0;
          if (products[i].type == "off") {
            pdf.setFont("Montserrat-Semi");
            pdf.setFontSize(12);
            // pdf.setTextColor(255);
            // pdf.addImage(
            //   "pdf/img/banner.png",
            //   "PNG",
            //   width * 1.23,
            //   70 + (countX == 1 ? 0 : counterCodeShortX) + aux,
            //   210,
            //   140
            // );
            let convert =
              products[i].prices[0].price +
              (products[i].prices[0].price * products[i].discount) / 100;
            convert =
              Math.floor(convert) == products[i].prices[0].price
                ? convert + 1
                : convert;
            pdf.text(
              `De $${Math.floor(convert) + 1} a`,
              width * 1.46,
              123 + (countX == 1 ? 0 : counterCodeShortX) + aux,
              null,
              null,
              "left"
            );
            // pdf.setTextColor(0);
            pdf.setFont("Montserrat-Bold");
            pdf.setFontSize(12);
            pdf.text(
              `¡¡OFERTA!!`,
              width * 1.42,
              110 + (countX == 1 ? 0 : counterCodeShortX) + aux,
              null,
              null,
              "left"
            );
            pdf.setFontSize(35);
            pdf.text(
              `$${parseFloat(
                products[i].prices[0].price != 0
                  ? products[i].prices[0].price
                  : 1
              )}`,
              width * 1.48,
              160 + (countX == 1 ? 0 : counterCodeShortX) + aux,
              null,
              null,
              "left"
            );
            pdf.setFontSize(20);
            pdf.text(
              `-${products[i].discount}%`,
              width * 1.28,
              145 + (countX == 1 ? 0 : counterCodeShortX) + aux,
              null,
              null,
              "left"
            );
            // pdf.text(products[i].prices[0].alias, width / 3.8, 140 + (countY == 1 ? 0 : counterCodeShort) + aux, null, null, 'left');
            pdf.setFontSize(30);
            pdf.setFont("Montserrat-Semi");
            // pdf.text(`$${parseFloat(products[i].prices[0].price).toFixed(2)}`, width / 1.8, 140 + (countY == 1 ? 0 : counterCodeShort) + aux, null, null, 'left');
            aux += aux + 30;
          } else {
            switch (products[i].prices.length) {
              case 1:
                pdf.setFont("Montserrat");
                pdf.setFontSize(30);
                pdf.text(
                  products[i].prices[0].alias,
                  width * 1.26,
                  140 + (countX == 1 ? 0 : counterCodeShortX) + aux,
                  null,
                  null,
                  "left"
                );
                pdf.setFontSize(30);
                pdf.setFont("Montserrat-Semi");
                pdf.text(
                  `$${parseFloat(products[i].prices[0].price)}`,
                  width * 1.55,
                  140 + (countX == 1 ? 0 : counterCodeShortX) + aux,
                  null,
                  null,
                  "left"
                );
                aux += aux + 30;
                break;
              case 2:
                for (let y = 0; y < products[i].prices.length; y++) {
                  pdf.setFont("Montserrat");
                  pdf.setFontSize(20);
                  pdf.text(
                    products[i].prices[y].alias,
                    width * 1.33,
                    120 + (countX == 1 ? 0 : counterCodeShortX) + aux,
                    null,
                    null,
                    "left"
                  );
                  pdf.setFontSize(25);
                  pdf.setFont("Montserrat-Semi");
                  pdf.text(
                    `$${parseFloat(products[i].prices[y].price)}`,
                    width * 1.55,
                    120 + (countX == 1 ? 0 : counterCodeShortX) + aux,
                    null,
                    null,
                    "left"
                  );
                  aux += aux + 30;
                }
                break;
              case 3:
                for (let y = 0; y < products[i].prices.length; y++) {
                  pdf.setFont("Montserrat");
                  pdf.setFontSize(18);
                  pdf.text(
                    products[i].prices[y].alias,
                    width * 1.33,
                    118 + (countX == 1 ? 0 : counterCodeShortX) + aux,
                    null,
                    null,
                    "left"
                  );
                  pdf.setFontSize(22);
                  pdf.setFont("Montserrat-Semi");
                  pdf.text(
                    `$${parseFloat(products[i].prices[y].price)}`,
                    width * 1.55,
                    118 + (countX == 1 ? 0 : counterCodeShortX) + aux,
                    null,
                    null,
                    "left"
                  );
                  aux += 25;
                }
                break;
              case 4:
                for (let y = 0; y < products[i].prices.length; y++) {
                  if (y == 1) {
                    aux = 0;
                  }
                  if (y == 1 || y == 3) {
                    pdf.setFont("Montserrat");
                    pdf.setFontSize(15);
                    pdf.text(
                      products[i].prices[y].alias,
                      width * 1.6,
                      130 + (countX == 1 ? 0 : counterCodeShortX) + aux,
                      null,
                      null,
                      "left"
                    );
                    pdf.setFontSize(18);
                    pdf.setFont("Montserrat-Semi");
                    pdf.text(
                      `$${parseFloat(products[i].prices[y].price)}`,
                      width * 1.75,
                      130 + (countX == 1 ? 0 : counterCodeShortX) + aux,
                      null,
                      null,
                      "left"
                    );
                    aux += aux + 30;
                  } else if (y == 0 || y == 2) {
                    pdf.setFont("Montserrat");
                    pdf.setFontSize(15);
                    pdf.text(
                      products[i].prices[y].alias,
                      width * 1.15,
                      130 + (countX == 1 ? 0 : counterCodeShortX) + aux,
                      null,
                      null,
                      "left"
                    );
                    pdf.setFontSize(18);
                    pdf.setFont("Montserrat-Semi");
                    pdf.text(
                      `$${parseFloat(products[i].prices[y].price)}`,
                      width * 1.3,
                      130 + (countX == 1 ? 0 : counterCodeShortX) + aux,
                      null,
                      null,
                      "left"
                    );
                  }
                }
                break;
            }
          }
          pdf.setFont("Montserrat");
          pdf.setFontSize(16);
          pdf.text(
            `${products[i].pieces}pz`,
            (width / 4) * 5,
            195 + (countX == 1 ? 0 : counterCodeShortX),
            null,
            null,
            "center"
          );
          pdf.setFont("Montserrat-Bold");
          pdf.text(
            products[i].large,
            (width / 3.7) * 5,
            195 + (countY == 1 ? 0 : counterCodeShortX),
            null,
            null,
            "left"
          );
          pdf.setFont("Montserrat-Semi");
          pdf.setFontSize(16);
          pdf.text(
            `${products[i].code}`,
            (width / 1.34) * 2.1,
            195 + (countX == 1 ? 0 : counterCodeShortX),
            null,
            null,
            "left"
          );
          this.useIpack
            ? pdf.addImage(
                this.convertTextToBase64Barcode(products[i].name),
                "PNG",
                (width / 1.12) * 1.88,
                40 + (countX == 1 ? 0 : counterCodeShortX),
                100,
                25
              )
            : "";
          if ((i + 1) % productXY == 0) {
            pdf.setFont("Montserrat");
            pdf.setFontSize(12);
            pdf.text(3, 10, `Se generó ${count} plantilla, creador: ${nick}`);
            products.length > productXY ? pdf.addPage() : "";
            count++;
            counterCodeShort = 0;
            counterCodeShortX = 0;
            countX = 1;
            countY = 1;
          } else {
            countX++;
            counterCodeShortX += 182 + (i < 3 ? 4 : 2);
          }
        }
        i % productXY == 0 ? zip++ : 1;
      }
      return zip;
    },
    /**
     * @param { string } text Código de Barras.
     * @description Genera el código de barras y lo exporta de manera de imagen.
     */
    convertTextToBase64Barcode(text) {
      let canvas = document.createElement("canvas");
      JsBarcode(canvas, text, {
        format: "CODE128",
        width: 2,
        height: 50,
        displayValue: false,
        margin: 0,
      });
      return canvas.toDataURL("image/png");
    },
  },
  computed: {
    /**
     * @param { Object[] } data Productos.
     * @returns { Object[] } Devuelve el arreglo con los productos con precios y sin precios.
     * @description Metodo que retorna un arreglo sobre los productos con precios y sin precios.
     */
    checkPrices() {
      return (data) => {
        let notFound = [];
        let add = [];
        let resp = new Object();
        data.products.map((item) => {
          return this.getPrices(item.prices) ? notFound.push(item) : add.push(item);
        });
        resp.notFound = notFound;
        resp.add = add;
        return resp;
      };
    },
    /**
     * @param { Array } prices Precio del producto.
     * @returns { Array } Devuelve true o false dependiendo si cuenta con precio.
     * @description Metodo que retorna un valor condicional que evalua el precio del producto.
     * 
     */
    getPrices() {
      return (prices) => {
        let flag = true;
        prices.map((item, id) => {
          flag = item.price == 0 ? true : false;
        });
        return flag;
      };
    },
    /**
     * @returns { Boolean } Estado del Layout.
     * @description Retorna el estado del layout.
     */
    layout() {
      return this.$store.state.Labels.layout;
    },
    /**
     * @returns { Object[] } Objeto de etiquetas.
     * @description Valida si el bucket cuenta con etiquetas.
     */
    labels() {
      return this.labelsPage.length ? this.labelsPage : [];
    },
    /**
     * @returns { number } Cantidad de Etiquetas.
     * @description Retorna la cantidad de Etiquetas dentro del bucket.
     */
    labels_size() {
      return this.labels.reduce((ammount, item) => {
        return item.copies + ammount;
      }, 0);
    },
    /**
     * @returns { number } Cantidad de Etiquetas STD.
     * @description Retorna la cantidad de etiquetas STD dentro del bucket.
     */
    labels_standar() {
      return this.labels
        .filter((item) => item.type == "std" || item.type == "may")
        .reduce((ammount, item) => {
          return item.copies + ammount;
        }, 0);
    },
    /**
     * @returns { number } Cantidad de Etiquetas OFF.
     * @description Retorna la cantidad de etiquetas OFF dentro del bucket.
     */
    labels_offers() {
      return this.labels
        .filter((item) => item.type == "off")
        .reduce((ammount, item) => {
          return item.copies + ammount;
        }, 0);
    },
    /**
     * @returns { string } Color de Etiquetas
     * @description Retorna el color de acuerdo al tipo de Etiqueta (STD/OFF).
     */
    colorLabel() {
      return (type) => {
        switch (type) {
          case "off":
            return "orange-9";
            break;
          case "may":
            return "light-blue-9";
            break;
          case "std":
            return "green-9";
            break;
        }
      };
    },
    /**
     * @param { string } barcode Código de barras.
     * @returns { Boolean | string } Código de barras.
     * @description Evalua si contiene el producto código de barras.
     */
    execptionBarcode() {
      return (barcode) => {
        if (barcode == null || barcode == "") {
          return false;
        } else {
          return barcode;
        }
      };
    },
    /**
     * @param { Array } products Producto.
     * @returns { Array } Producto STD.
     * @description Devuelve los productos estandar (STD).
     */
    getSTD() {
      return (products) => {
        return products.filter(
          (item) => item.type == "std" || item.type == "may"
        )
      };
    },
    /**
     * @param { Array } products Producto.
     * @returns { Array } Producto OFF.
     * @description Devuelve los productos oferta (OFF).
     */
    getOFF() {
      return (products) => {
        return products.filter((item) => item.type == "off");
      };
    },
    /**
     * @returns { any } Sonido.
     * @description Devuele el store de sonidos personalizados.
     */
    appsounds() {
      return this.$store.getters["Multimediapp/sounds"];
    },
  },
};
</script>
<style lang="scss" scoped>
.labeloff {
  background: #e65329;
}
.labelstd {
  background: #558b2f;
}
</style>