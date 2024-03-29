<!--
    /**
     * @App VizApp <org.grupovizcarra.vizapp>
     * @copyright Grupo Vizacarra - 2020-2021
     * @version v.1.0.0
     * @Description 
     *  Recibe la orden para generar una Salida de productos, asi mismo se evalua la cantidad solicitada
     *  contra la que se contabiliza. Este proceso nos genera una Factura a cliente que recibimos de manera  
     *  de folio. Y lo presentamos en pantalla, siempre y cuando viaje del servicio Back-end que conecta a FactuSOL.
     *  Para poder obtener el pedido a cliente desde FactuSOL debemos hacer lo siguiente:
     *  - Ir a la opcion de COMERCIAL => FACTURAS => Nueva Factura
     *  - Despues en la opcion de CLIENTE => REFERENCIA  y Validamos por ultimo
     *  - Culminamos con buscar el folio de Pedido a Cliente.
     */
-->

<template>
  <q-page>
    <q-header unelevated class="bg-darkl1">
      <div class="row items-stretch justify-between" v-show="stateDelete">
        <q-btn @click="$router.push('/pedidos/dashboard')" flat icon="close" />

        <div class="row items-center col bg-dark divlcient">
          <div class="q-pa-sm col text-center">
            <div class="text--2">Destino:</div>
            <div class="text-uppercase">{{ setupToolbar.destiny }}</div>
          </div>

          <div class="q-pa-sm col text-center">
            <div class="text--2">Folio:</div>
            <div class="text-bold">{{ setupToolbar.verify }}</div>
          </div>
        </div>
      </div>
      <div class="row items-center justify-between q-mt-sm">
        <div class="row text-center">
          <div class="q-px-md">
            <div class="text--2">Modelos</div>
            <span class="text-green-13 text-bold">
              {{
              bucketToolbar.length
              }}
            </span>
          </div>

          <div class="q-px-md">
            <div class="text--2">Unidades</div>
            <span class="text-green-13 text-bold">{{ unityBucket }}</span>
          </div>

          <div class="q-px-md">
            <div class="text--2">Cajas</div>
            <span class="text-green-13 text-bold">{{ boxesBucket }}</span>
          </div>
        </div>
        <div class="col-md-6 col-xs-4 q-ma-xs" style="max-width: 20rem">
          <q-select
            transition-show="scale"
            transition-hide="scale"
            v-model="selectAvailable"
            color="green-13"
            label="Validación"
            :options="available"
            @click="filterAvailable"
            dark
            options-selected-class="text-green-13"
          >
            <template v-slot:prepend>
              <q-icon class="text-green-13" name="filter_alt" />
            </template>
          </q-select>
        </div>
      </div>
    </q-header>
    <div class="q-mb-xl">
      <q-list bordered class="rounded-borders">
        <q-expansion-item
          expand-separator
          v-model="selectedInput"
          header-class="bg-indigo-5"
          icon="content_paste"
          :label="`Productos Solicitados: ${inBucket.length} con un total de ${pzsInBucket} pzs`"
          :caption="`Costo Total $ ${bucketCostInput}`"
          dark
        >
          <!-- <div class="text--2">{{outbasket.length}} productos <q-icon name="fas fa-caret-right" /> {{pzsOutBasket}} pzs</div> -->
          <!-- LISTA INICIAL DE PRODUCTOS -->
          <div>
            <q-scroll-area
              :thumb-style="thumbStyle.input"
              :bar-style="barStyle.input"
              class="fill-window"
            >
              <transition-group
                appear
                enter-active-class="animated zoomIn"
                leave-active-class="animated zoomOut"
              >
                <div
                  v-for="prod in inBucket"
                  :key="prod.id"
                  @click="confirm(prod)"
                  class="q-py-md q-px-sm wrapper_prod"
                >
                  <div class="row items-center">
                    <div class="q-pr-sm">
                      <q-img src="~/assets/_defprod_.png" width="50px" />
                    </div>
                    <div class="col q-pr-sm">
                      <div>
                        <span>{{ prod.code }}</span> --
                        <span>{{ prod.name }}</span>
                      </div>
                      <div class="text--2 text-grey-5">{{ prod.description }}</div>
                      <div class="text--2 text-amber-13">{{ prod.ordered.comments }}</div>
                    </div>
                    <div
                      class="text-right text-green-13"
                    >$ {{ Math.floor(prod.ordered.amount * prod.cost) }}</div>
                  </div>
                </div>
              </transition-group>
            </q-scroll-area>
          </div>
        </q-expansion-item>
        <q-expansion-item
          expand-separator
          v-model="selectedOutput"
          header-class="bg-teal-10"
          icon="content_paste_go"
          :label="`Contados: ${outBucket.length} con un total de ${pzsOutBucket} pzs`"
          :caption="`Costo Total $ ${bucketCostDelivered}`"
          dark
          expand-icon-class="text-white"
        >
          <!-- LISTA DE PRODUCTOS CONFIRMADOS -->
          <div v-if="currentStep&&currentStep.id <= 5">
            <q-scroll-area
              :thumb-style="thumbStyle.input"
              :bar-style="barStyle.input"
              class="fill-window"
            >
              <transition-group
                appear
                enter-active-class="animated zoomIn"
                leave-active-class="animated zoomOut"
              >
                <div
                  v-for="prod in outBucket"
                  :key="prod.id"
                  @click="edit(prod)"
                  class="q-py-md q-px-sm wrapper_prod"
                >
                  <div class="row items-center">
                    <div class="q-pr-sm">
                      <q-img src="~/assets/_defprod_.png" width="50px" />
                    </div>
                    <div class="col q-pr-sm">
                      <div class="text-weight-bold">
                        <span>{{ prod.code }}</span> --
                        <span>{{ prod.name }}</span>
                      </div>
                      <div class="text--2 text-grey-5">{{ prod.description }}</div>
                      <div class="text--2 text-amber-13">{{ prod.ordered.comments }}</div>
                      <div
                        class="col text--2"
                      >{{prod.metsupply.name}} {{prod.ordered.amount}}{{ prod.metsupply.id!=1 ? ` (${prod.units} pzs)`:``}}, PU: ${{prod.cost}}</div>
                    </div>
                    <div
                      class="text-right text-green-13"
                    >$ {{ Math.floor(prod.ordered.amount * prod.cost) }}</div>
                  </div>
                </div>
              </transition-group>
            </q-scroll-area>
          </div>
          <div class="q-ma-xs col col-12 col-md-6 col-xs-4" v-else>
            <span class="text-h6 text-grey-5 text-weight-bold">
              Folio:
              <span class="text-green-13">{{ getTicket }}</span>
            </span>
            <q-scroll-area
              :thumb-style="thumbStyle.input"
              :bar-style="barStyle.input"
              style="height: 70vh; max-width: 100%"
            >
              <div v-if="ismobile">
                <q-markup-table class="bg-darkl0" separator="vertical" dark flat bordered>
                  <thead class="bg-dark">
                    <tr>
                      <th class="text-center">Solicitado</th>
                      <th class="text-center">Contado</th>
                      <th class="text-center">Estado</th>
                    </tr>
                  </thead>
                  <tbody v-for="prod in outBucket" :key="prod.id" @click="edit(prod)">
                    <tr>
                      <td class="q-pa-xs-xs no-margin" colspan="3">
                        <div class="row items-center text-left justify-center">
                          <div class="q-pr-sm">
                            <q-img src="~/assets/_defprod_.png" width="2rem" />
                          </div>
                          <div class="q-pr-sm">
                            <div>
                              <span>{{ prod.code }}</span> --
                              <span>{{ prod.name }}</span>
                            </div>
                            <div class="text--2 text-grey-5">{{ prod.description }}</div>
                            <div class="text--2 text-amber-13">{{ prod.ordered.comments }}</div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="q-pa-xs-xs no-margin" colspan="1">
                        <div class="column items-left text-left justify-left">
                          <div class>
                            <div
                              class="text-subtitle2 text-weight-bold"
                            >{{prod.metsupply.name}} {{Math.round(prod.ordered.units / prod.ipack)}}</div>
                            <div
                              class="text--2 text-weight-bold"
                            >{{ prod.metsupply.id!=1 ? ` (${prod.ordered.units} pzs)`:``}}, PU: ${{prod.cost}}</div>
                          </div>
                        </div>
                      </td>
                      <td class="q-pa-xs-xs no-margin" colspan="1">
                        <div class="column items-left text-left justify-left no-wrap">
                          <div class>
                            <div
                              class="text-subtitle2 text-weight-bold"
                            >{{prod.metsupply.name}} {{prod.ordered.amount}}</div>
                            <div
                              class="text--2 text-weight-bold"
                            >{{ prod.metsupply.id!=1 ? ` (${prod.units} pzs)`:``}}, PU: ${{prod.cost}}</div>
                          </div>
                        </div>
                      </td>
                      <td class="q-pa-xs-xs no-margin" colspan="1">
                        <div class="row text-left items-left justify-left">
                          <div class>
                            <q-avatar
                              size="md"
                              :class="stateChangesDelivery(prod) == 0 ? 'text-red-13' : 'text-green-13'"
                              :icon="stateChangesDelivery(prod) == 0 ? 'fas fa-exclamation-triangle' : 'far fa-check-circle'"
                            />
                          </div>
                          <div>
                            <span
                              class="text--3"
                            >{{ stateChangesDelivery(prod) == 0 ? 'Cantidades Diferentes' : 'Cantidades Exactas' }}</span>
                            <div
                              class="text--2 text-amber-13 text-weight-bolder"
                            >{{prod.metsupply.name}} {{prod.ordered.amount}}{{ prod.metsupply.id!=1 ? ` (${prod.units} pzs)`:``}}</div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </q-markup-table>
              </div>
              <div v-else>
                <q-markup-table class="bg-darkl0" dark flat bordered>
                  <thead class="bg-dark">
                    <tr>
                      <th class="text-center">Solicitado</th>
                      <th class="text-center">Contado</th>
                      <th class="text-center">Estado</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="prod in outBucket" :key="prod.id" @click="edit(prod)">
                      <td style="max-width:15%" class="q-pa-xs-xs no-margin">
                        <div class="row items-left no-wrap justify-left">
                          <div class="q-pr-sm">
                            <q-img src="~/assets/_defprod_.png" width="3rem" />
                          </div>
                          <div class="q-pr-sm">
                            <div>
                              <span>{{ prod.code }}</span> --
                              <span>{{ prod.name }}</span>
                            </div>
                            <div class="text--2 text-grey-5">{{ prod.description }}</div>
                            <div class="text--2 text-amber-13">{{ prod.ordered.comments }}</div>
                            <div
                              class="text-subtitle2 text-weight-medium"
                            >{{prod.metsupply.name}} {{Math.round(prod.ordered.units / prod.ipack)}}{{ prod.metsupply.id!=1 ? ` (${prod.ordered.units} pzs)`:``}}, PU: ${{prod.cost}}</div>
                          </div>
                          <div>
                            <span>Stock: {{prod.ordered.stock}}</span>
                          </div>
                        </div>
                      </td>
                      <td style="max-width:15%" class="q-pa-xs-xs no-margin">
                        <div class="row items-left no-wrap justify-left">
                          <div class="q-pr-sm">
                            <q-img src="~/assets/_defprod_.png" width="3rem" />
                          </div>
                          <div class="q-pr-sm">
                            <div>
                              <span>{{ prod.code }}</span> --
                              <span>{{ prod.name }}</span>
                            </div>
                            <div class="text--2 text-grey-5">{{ prod.description }}</div>
                            <div class="text--2 text-amber-13">{{ prod.ordered.comments }}</div>
                            <div
                              class="text-subtitle2 text-weight-medium"
                            >{{prod.metsupply.name}} {{prod.ordered.amount}}{{ prod.metsupply.id!=1 ? ` (${prod.units} pzs)`:``}}, PU: ${{prod.cost}}</div>
                          </div>
                        </div>
                      </td>
                      <td style="max-width:8%" class="q-pa-xs-xs no-margin">
                        <div class="row text-left items-left justify-left">
                          <div class="self-center">
                            <q-avatar
                              :class="stateChangesDelivery(prod) == 0 ? 'text-red-13' : 'text-green-13'"
                              :icon="stateChangesDelivery(prod) == 0 ? 'fas fa-exclamation-triangle' : 'far fa-check-circle'"
                            />
                          </div>
                          <div class="text-left self-center">
                            <q-separator vertical color="grey-8" class="q-ma-xs" />
                            <span>{{ stateChangesDelivery(prod) == 0 ? 'Cantidades Diferentes' : 'Cantidades Exactas' }}</span>
                            <div
                              class="text-amber-13 text-weight-bold"
                            >{{prod.metsupply.name}} {{prod.ordered.amount}}{{ prod.metsupply.id!=1 ? ` (${prod.units} pzs)`:``}}</div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </q-markup-table>
              </div>
            </q-scroll-area>
          </div>
        </q-expansion-item>
      </q-list>
    </div>
    <!-- VENTADA DE PRODUCTOS A CONFIRMAR -->
    <q-dialog v-model="wndCounter.state" v-if="currentStep&&currentStep.id == 5" position="bottom">
      <template v-if="wndCounter.product">
        <q-card class="bg-darkl1 text-white exo">
          <q-card-section class="bg-blue-grey-9 text-white text-overline">CONFIRMAR PRODUCTO</q-card-section>
          <q-separator />
          <ProductAOE
            :product="wndCounter.product"
            :client="{}"
            blockunitsupply
            @cancel="cancelAOEs"
            @confirm="productConfirm"
            @remove="wndCounter.state = !wndCounter.state"
            allow_innerpack
          />
        </q-card>
      </template>
    </q-dialog>

    <!-- VENTANA DE PRODUCTOS CONFIRMADOS / PARA EDITAR -->
    <q-dialog
      v-model="wndEditor.state"
      v-if="currentStep&&currentStep.id == 5"
      position="bottom"
      @hide="cancelAOEs"
      class="exo"
    >
      <template v-if="wndEditor.product">
        <q-card class="bg-darkl1 text-white exo">
          <q-card-section class="bg-blue-grey-9 text-white text-overline">EDITAR PRODUCTO</q-card-section>
          <q-separator />
          <ProductAOE
            :product="wndEditor.product"
            :client="{}"
            blockunitsupply
            @confirm="productEdit"
            @cancel="cancelAOEs"
            @remove="productDelete"
            allow_innerpack
          />
        </q-card>
      </template>
    </q-dialog>

    <!-- DIALOGO EN CASO DE QUE EL AMOUNT VIAJE EN CERO -->
    <q-dialog v-model="alert.state" persistent>
      <q-card dark class="exo bg-darkl0 text-grey-5">
        <q-card-section class="bg-darkl11 text-white">
          <div class="text-h6">{{ alert.titleMessage }}</div>
        </q-card-section>
        <q-separator color="green-13" />
        <q-card-section>
          <div class="row items-center justify-center">
            <div class="col-md-6 col-6 text-center">
              <img width="40%" src="../../assets/success.gif" alt />
            </div>
            <div class="col-md-4 col-4 text-left">
              <div class="text-h5 exo-med text-green-13">{{ alert.messageAlert }}</div>
            </div>
          </div>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat @click="wndCounter.state = true" label="OK" color="green-13" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <!-- DIALOGO EN CASO DE QUE LA ORDEN YA SE HAYA VALIDADO -->
    <q-dialog v-model="dialogState.state" persistent>
      <q-card dark class="exo text-grey-5" style="background: #0f2126">
        <q-card-section class="bg-darkl11 text-white">
          <div class="text-h6">CheckOut | Resurtido</div>
        </q-card-section>
        <q-separator color="green-13" />
        <q-card-section>
          <div class="column items-center justify-center">
            <div class="col-md-12 col-12 text-center">
              <img width="100%" src="../../assets/rocket.gif" alt />
            </div>
            <div class="col-md-4 col-4 text-left">
              <div class="text-subtitle1 exo-med text-center">{{ dialogState.message }}</div>
            </div>
          </div>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn
            flat
            @click="wndCounter.state = true, $router.push('/pedidos/dashboard')"
            label="OK"
            color="green-13"
            v-close-popup
          />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-dialog v-model="wndSending.state" :persistent="wndSending.persistent" position="bottom">
      <q-card class="bg-darkl1 text-white exo">
        <q-card-section class="text-h6 bfv">Confirmar Pedido...</q-card-section>
        <q-btn-group spread>
          <q-btn flat label="Confirmar" class="q-py-md" color="positive" @click="nextStep" />
          <q-btn flat label="Cancelar" @click="wndSending.state=false" color="amber-14" />
        </q-btn-group>
      </q-card>
    </q-dialog>

    <q-footer class="bg-darkl1 text-white">
      <div class="q-pa-xs row items-center">
        <div class="col text-center">
          <q-input
            filled
            dark
            autofocus
            dense
            label
            color="green-13"
            v-model="definitor"
            @keypress.enter="codeDefine"
            class="text-uppercase"
            :type="iptsearch.type"
            ref="searcher"
          >
            <template v-slot:prepend>
              <q-btn dense flat rounded :icon="iptsearch.icon" @click="toogleIptSearch" />
            </template>

            <template v-slot:append>
              <q-btn icon="close" dense rounded flat v-if="definitor.length" @click="definitor=''" />
            </template>
          </q-input>
        </div>
        <q-btn
          flat
          v-if="currentStep&&currentStep.id <= 5 && outBucket.length"
          icon="fas fa-arrow-right"
          stack
          no-caps
          color="green-13"
          @click="wndSending.state=true"
        />
      </div>
    </q-footer>
  </q-page>
</template>

<script>
import dbreqs from "../../API/requisitions";
import ProductAOE from "../../components/Global/ProductAOE.vue";
export default {
  components: { ProductAOE },
  data() {
    return {
      available: [
        { label: "Todos", value: 1 },
        { label: "Sin Contabilizar", value: 2 },
        { label: "Sin Stock", value: 3 },
        { label: "Con Stock", value: 4 },
        { label: "Contabilizado Indistinto", value: 5 },
      ],
      selectAvailable: "Todos",
      alert: {
        messageAlert: "",
        titleMessage: "",
        state: false
      },
      dialogState: {
        state: false,
        message: ""
      },
      wndSending: {
        state: false,
        step: 1,
        serie: undefined,
        folio: undefined,
        persistent: false
      },
      finish: { state: false },
      wndCounter: { state: false, product: undefined },
      wndEditor: { state: false, product: undefined },
      definitor: "",
      iptsearch: { processing: false, type: "number", icon: "fas fa-font" },
      params: { id: "", data: Array },
      order: undefined,
      toDelivered: undefined,
      products: [],
      checkout: [],
      setupToolbar: { destiny: "", verify: "" },
      stateDelete: true,
      flag: true,
      configToolbar: [],
      flagArchive: false,
      rsocket: this.$sktRestock,
      thumbStyle: {
        input: {
          right: "4px",
          borderRadius: "5px",
          backgroundColor: "#5C6BC0",
          width: "5px",
          opacity: 0.75
        },
        delivered: {
          right: "4px",
          borderRadius: "5px",
          backgroundColor: "#004D40",
          width: "5px",
          opacity: 0.75
        }
      },
      barStyle: {
        input: {
          right: "2px",
          borderRadius: "9px",
          backgroundColor: "#5C6BC0",
          width: "9px",
          opacity: 0.2
        },
        delivered: {
          right: "2px",
          borderRadius: "9px",
          backgroundColor: "#004D40",
          width: "9px",
          opacity: 0.2
        }
      },
      metsupplies: [
        { name: "Piezas", id: 1, alias: "pzs" },
        { name: "Docenas", id: 2, alias: "dcs" },
        { name: "Cajas", id: 3, alias: "cjs" }
      ],
      selectedInput: false,
      selectedOutput: false
    };
  },
  async beforeMount() {
    this.$store.commit("Requisitions/setHeaderState", false);
    this.$store.commit("Requisitions/setFooterState", false);
    this.$store.commit("Layout/hideToolbarModule");

    this.params.id = this.$route.params.id;
    this.$q.loading.show({ message: "..." });
    let data = {id: this.params.id};
    this.products = await dbreqs.updateStocks(data);
    this.order = await dbreqs.find(this.params.id);
    if (this.products) {
      this.order.products = this.products.products;
    }
    this.dialogState.state =
      this.order.log[this.order.log.length - 1].id <= 4 ? true : false;
    this.dialogState.message = `Esta orden no puede generar salidas. La orden se encuentra ${
      this.order.log[this.order.log.length - 1].name
    }.`;
    this.setupToolbar.destiny = this.order.from.name;
    this.setupToolbar.verify = this.order.id;
    this.selectedInput = this.inBucket.length ? true : false;
    this.selectedOutput = this.outBucket.length ? true : false;
    // console.log(this.currentStep);
    this.$q.loading.hide();
  },
  beforeDestroy() {
    this.$store.commit("Requisitions/setHeaderState", true);
    this.$store.commit("Requisitions/setFooterState", true);
    this.$store.commit("Layout/showToolbarModule");
  },
  beforeUpdate() {
    this.selectedInput = this.inBucket.length ? true : false;
    this.selectedOutput = this.outBucket.length ? true : false;
  },
  methods: {
    codeDefine() {
      if (this.definitor.trim().length) {
        switch (this.listProducts.length) {
          case 0:
            console.log("sin coincidencias, abrir el buscador");
            break;

          case 1:
            console.log(
              "Excelente, una coincidencia, validar en que lista esta..."
            );
            let product = this.listProducts[0];
            product.ordered.toDelivered
              ? this.edit(product)
              : this.confirm(product);
            break;

          default:
            let _product = this.listProducts[0];
            _product.ordered.toDelivered
              ? this.edit(_product)
              : this.confirm(_product);
            console.log("Hay mas de una coincidencia, agregaras el primero");
            break;
        }
      } else {
        console.log("Abrir buscador...");
        this.definitor = "";
      }
    },
    toogleIptSearch() {
      switch (this.iptsearch.type) {
        case "text":
          this.iptsearch.type = "number";
          this.iptsearch.icon = "fas fa-font";
          break;
        case "number":
          this.iptsearch.type = "text";
          this.iptsearch.icon = "fas fa-hashtag";
          break;
      }

      this.$refs.searcher.focus();

      // localStorage.setItem('typeiptsearch',JSON.stringify(this.iptsearch));
    },
    confirm(prod) {
      console.log(prod);
      this.wndCounter.product = prod;
      this.wndCounter.state = true;
    },
    edit(prod) {
      console.log(prod);
      this.wndEditor.product = prod;
      this.wndEditor.state = true;
    },
    async productConfirm(params) {
      console.log(params);
      if (params.amount == 0) {
        this.$q.notify({
          message:
            "El producto no puede quedar en cero. Favor de validar la cantidad adecuada.",
          titleMessage: "Seguimiento CheckOut",
          color: "negative",
          timeout: 1000,
          icon: "report_problem",
          position: "center"
        });
        // this.wndCounter.state = false;
      } else {
        this.$q.loading.show({
          message: `Confirmando ${params.product.code}...`
        });
        let product = this.wndCounter.product;

        let data = {
          _product: params.product.id,
          _requisition: this.params.id,
          _supply_by: params.metsupply.id,
          amount: params.amount,
          comments: params.comments,
          pieces: params.innerpack
        };

        // console.log(JSON.stringify(data));

        let result = await dbreqs.toDelivered(data);

        console.log(result);

        if (result.success == false) {
          this.$q.notify({
            message: result.msg,
            icon: "close",
            color: "negative",
            timeout: 1000,
            position: "top"
          });
        } else {
          product.ordered.amount = params.amount;
          product.ordered.toDelivered = params.amount;
          product.ordered.comments = params.comments;
          product.pieces = params.innerpack;
          product.ordered._supply_by = params.metsupply.id;
          console.log(product);
          this.appsounds.ok.play();
          this.$q.notify({
            message: "Producto Confirmado!!",
            position: "center",
            color: "positive",
            icon: "done",
            timeout: 1000
          });
          this.wndCounter.state = false;
          this.wndCounter.product = undefined;
        }
        this.definitor = "";
        this.$q.loading.hide();
      }
    },
    async productEdit(params) {
      this.$q.loading.show({
        message: `Aplicando cambios ${params.product.code}...`
      });
      console.log(params);
      let product = this.wndEditor.product;

      let data = {
        _product: params.product.id,
        _requisition: this.params.id,
        _supply_by: params.metsupply.id,
        amount: params.amount,
        comments: params.comments,
        pieces: params.innerpack
      };
      // console.log(data);

      let result = await dbreqs.toDelivered(data);

      console.log(result.data);

      if (result.success == false) {
        console.log(result.success);
        this.$q.notify({
          message: result.msg,
          icon: "close",
          color: "negative",
          timeout: 1000
        });
      } else {
        // let idx = this.toDelivered.findIndex(item => item.id == result.data.id);
        // this.toDelivered[idx] = result.data;
        product.ordered.amount = parseInt(params.amount);
        product.ordered.comments = params.comments;
        product.ordered.toDelivered = parseInt(params.amount);
        product.ordered._supply_by = params.metsupply.id;
        product.pieces = params.innerpack;
        this.appsounds.ok.play();
        this.$q.notify({
          message: "Producto Actualizado!!",
          position: "top",
          color: "positive",
          icon: "done",
          timeout: 1000
        });
        // this.selectedInput = this.inBucket.length > 0 ? true : false;
        // this.selectedOutput = this.outBucket.length ? true : false;
        this.wndEditor.state = false;
        this.wndEditor.product = undefined;
      }
      this.$q.loading.hide();
    },
    async productDelete(params) {
      console.log(params);
      this.$q.loading.show({
        message: `Devolviendo ${params.product.code}...`
      });

      let product = this.wndEditor.product;

      let data = {
        _product: params.product.id,
        _requisition: this.params.id,
        _supply_by: params.metsupply.id,
        amount: 0,
        comments: params.comments
      };

      // console.log(JSON.stringify(data));

      let result = await dbreqs.toDelivered(data);
      this.appsounds.done.play();
      if (result.success == false) {
        console.log("No se pudo devolver el producto");
      } else {
        console.log(result.data);
        product.ordered.toDelivered = null;
        product.pieces = result.data.pieces;
        this.wndEditor.product = undefined;
        this.wndEditor.state = false;
        // this.selectedInput = this.inBucket.length ? true : false;
        // this.selectedOutput = this.outBucket.length ? true : false;
      }

      this.$q.loading.hide();
    },
    cancelAOEs() {
      this.wndEditor.product = undefined;
      this.wndEditor.state = false;

      this.wndCounter.product = undefined;
      this.wndCounter.state = false;

      this.$refs.searcher.focus();
      this.definitor = "";
    },
    async nextStep() {
      this.$q.loading.show({ message: "Creando folio..." });

      let data = {
        id: this.params.id,
        _status: 6
      };

      dbreqs
        .nextstep(data)
        .then(success => {
          console.log(success);
          let resp = success.data.updates;
          if (success.success == false) {
            this.$q.notify({
              message: resp.msg,
              color: "negative",
              icon: "fas fa-exclamation-triangle"
            });
            this.$q.loading.hide();
          } else {
            if (resp.log[0].details.order) {
              let folio = `Folio ${resp.log[0].details.order.serie}-${resp.log[0].details.order.ticket}`;
              this.alert.state = true;
              this.alert.titleMessage = "Folio Generado";
              this.alert.messageAlert = folio;
              this.wndSending.state = false;
              let idx = this.ordersdb.findIndex(item => {
                return item.id == this.params.id;
              });
              let newStateLog = [];
              let newStateSend = undefined;
              newStateSend = resp.status;
              newStateLog = this.ordersdb[idx].log.concat(resp.log);
              // console.log(newStateLog);
              this.$sktRestock.emit("order_changestate", {
                state: newStateSend,
                profile: this.profile,
                log: newStateLog,
                order: this.ordersdb[idx],
                from: this.workin,
                room: this.socketroom
              });
              this.$q.notify({
                message: `OK!!!`,
                color: "positive",
                icon: "done"
              });
              this.$q.loading.hide();
            } else {
              this.$q.notify({
                message: `No se ha podido generar el folio!!!`,
                color: "negative",
                icon: "report_problem"
              });
              this.wndSending.state = false;
              this.$q.loading.hide();
            }
          }
          // this.$store.commit("Requisitions/updateState", { settingsOrder, newStateSend });

          // this.$sktRestock.emit('order_changestate',{ state:newstatus, profile:this.profile, order:this.ordersdb[idx] });
        })
        .catch(fail => {
          this.$q.notify({
            message: "Algo salio mal",
            icon: "fas fa-bug",
            color: "negative",
            position: "center"
          });
          this.$q.loading.hide();
          console.log(fail);
        });
    }
  },
  computed: {
    ismobile() {
      return this.$q.platform.is.mobile;
    },
    orders() {
      return this.$store.getters["Requisitions/getOrders"];
    },
    ordersdb() {
      return this.orders.length ? this.orders : [];
    },
    originProducts() {
      if (this.order) {
        return this.order.products.map(p => {
          p.ipack = p.pieces ? p.pieces : 1;
          p.ordered.amount = p.ordered.toDelivered ? p.ordered.amount : 0;
          // p.pieces = p.ordered.toDelivered ? p.ordered.toDelivered : p.pieces;
          p.metsupply = (p =>
            this.metsupplies.find(ms => ms.id == p.ordered._supply_by))(p);
          p.units = (p => {
            switch (p.ordered._supply_by) {
              case 2:
                return p.ordered.amount * 12; //cantidad * 12
              case 3:
                return p.ordered.amount * p.ipack; //cantidad por piezas por caja
              default:
                return p.ordered.amount; // retornar cantidad
            }
          })(p);
          p.boxes = (p => (p.units / p.ipack).toFixed(1))(p);
          return p;
        });
      } else {
        return [];
      }
    },
    listProducts() {
      if (this.definitor.length) {
        let _target = this.definitor.toUpperCase().trim();
        let similars = this.originProducts.filter(
          p =>
            p.code.match(_target) ||
            p.barcode.match(_target) ||
            p.name.match(_target) ||
            p.description.match(_target)
        );
        return similars.length ? similars : [];
      } else {
        return this.originProducts;
      }
    },
    filterAvailable() {
      switch (this.selectAvailable.value) {
        case 2:
          return this.listProducts.filter(stock => !stock.ordered.toDelivered);
        case 3:
          return this.listProducts.filter(stock => stock.stocks[0].stock <= 0);
        case 4:
          return this.listProducts.filter(stock => stock.stocks[0].stock > 0);
        case 5:
          return this.listProducts.filter(stock => (stock.stocks[0].stock <= stock.ordered.amount) && (stock.stocks[0].stock > 0));  
        default:
          return this.listProducts;
      }
    },
    inBucket() {
      return this.filterAvailable.filter(prod => !prod.ordered.toDelivered);
    },
    outBucket() {
      return this.filterAvailable.filter(prod => prod.ordered.toDelivered);
    },
    appsounds() {
      return this.$store.getters["Multimediapp/sounds"];
    },
    profile() {
      return this.$store.getters["Account/profile"];
    },
    workin() {
      return this.$store.getters["Account/workin"];
    },
    socketroom() {
      return `${this.workin.workpoint.alias}`;
    },
    bucketToolbar() {
      return this.outBucket.map(item => {
        item.pieces = item.pieces;
        item.boxes = item.ordered.amount;
        return item;
      });
    },
    unityBucket() {
      return this.bucketToolbar.reduce((amm, item) => {
        return (amm += parseInt(item.pieces * item.boxes));
      }, 0);
    },
    boxesBucket() {
      return this.bucketToolbar.reduce((amm, item) => {
        return (amm += parseInt(item.boxes));
      }, 0);
    },
    bucketCostInput() {
      return this.inBucket.reduce(
        (a, b) => parseInt(b.cost * b.ordered.amount) + a,
        0
      );
    },
    bucketCostDelivered() {
      return this.outBucket.reduce(
        (a, b) => parseInt(b.cost * b.ordered.amount) + a,
        0
      );
    },
    currentStep() {
      let idx = this.ordersdb.findIndex(item => item.id == this.params.id);
      return this.ordersdb[idx] ? this.ordersdb[idx].status : null;
    },
    stateChangesDelivery() {
      return prod => ((prod.ordered.units / prod.ipack) === prod.ordered.amount ? 1 : 0);
    },
    getTicket() {
      let idx = this.ordersdb.findIndex(item => item.id == this.params.id);
      return this.currentStep &&
        this.currentStep.id >= 4 &&
        this.ordersdb[idx].log[4].details.order
        ? `${this.ordersdb[idx].log[4].details.order.serie} - ${this.ordersdb[idx].log[4].details.order.ticket}`
        : "Error al Generar Folio";
    },
    pzsInBucket() {
      return this.inBucket.length
        ? this.inBucket.reduce((am, p) => parseInt(p.units) + am, 0)
        : 0;
    },
    pzsOutBucket() {
      return this.outBucket.length
        ? this.outBucket.reduce((am, p) => parseInt(p.units) + am, 0)
        : 0;
    }
  }
};
</script>

<style lang="scss" scoped>
.wrapper_prod {
  border-bottom: 1px solid #4b4b4b;
}
.divlcient {
  border-radius: 0px 0px 20px 20px;
}

.fill-window {
  height: calc(60vh - 250px);
}
</style>