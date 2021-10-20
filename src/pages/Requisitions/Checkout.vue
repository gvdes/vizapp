<template>
  <q-page>
    <q-header unelevated class="bg-darkl1">
      <div class="row items-stretch justify-between" v-show="stateDelete">
        <q-btn @click="$router.push('/pedidos/')" flat icon="close" />

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
      </div>
    </q-header>
    <div class="q-mb-xl">
      <q-list bordered class="rounded-borders">
        <q-expansion-item
          expand-separator
          header-class="bg-indigo-5"
          icon="content_paste"
          :label="`Productos Solicitados: ${b_prodToCheckOut.length}`"
          :caption="`Costo Total $ ${bucketCostInput}`"
          dark
        >
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
                  v-for="prod in b_prodToCheckOut"
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
                    <div class="text-right text-green-13">$ {{ prod.cost }}</div>
                  </div>
                </div>
              </transition-group>
            </q-scroll-area>
          </div>
        </q-expansion-item>
        <q-expansion-item
          expand-separator
          header-class="bg-teal-10"
          icon="content_paste_go"
          :label="`Contados: ${b_delivered.length}`"
          :caption="`Costo Total $ ${bucketCostDelivered}`"
          dark
          expand-icon-class="text-white"
        >
          <!-- LISTA DE PRODUCTOS CONFIRMADOS -->
          <div>
            <q-scroll-area
              :thumb-style="thumbStyle.delivered"
              :bar-style="barStyle.delivered"
              style="height: 50vh; max-width: 100%"
            >
              <transition-group
                appear
                enter-active-class="animated zoomIn"
                leave-active-class="animated zoomOut"
              >
                <div
                  v-for="prod in b_delivered"
                  :key="prod.id"
                  @click="edit(prod)"
                  class="q-py-md q-px-sm wrapper_prod"
                >
                  docker
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
                      <div class="col text--2">
                        {{ prod.metsupply.name }} {{ prod.ordered.amount
                        }}{{
                        prod.metsupply.id != 1 ? ` (${prod.units} pzs)` : ``
                        }}
                        <!-- PU: ${{ prod.usedprice.price }}< -->
                      </div>
                    </div>
                    <div class="text-right text-green-13">$ {{ prod.total }}</div>
                  </div>
                </div>
              </transition-group>
            </q-scroll-area>
          </div>
        </q-expansion-item>
      </q-list>
    </div>
    <!-- VENTADA DE PRODUCTOS A CONFIRMAR -->
    <q-dialog v-model="wndCounter.state" position="bottom">
      <template v-if="wndCounter.product">
        <q-card class="bg-darkl1 text-white exo">
          <q-card-section class="bg-blue-grey-9 text-white text-overline">CONFIRMAR PRODUCTO</q-card-section>
          <q-separator />
          <ProductAOE
            :product="wndCounter.product"
            :client="{}"
            blockunitsupply
            @cancel="wndCounter.state = !wndCounter.state"
            @confirm="confirmCheckOut"
            @remove="wndCounter.state = !wndCounter.state"
          />
        </q-card>
      </template>
    </q-dialog>
    <q-footer class="bg-darkl1 text-white">
      <div v-if="finish.state">
        <q-btn-group spread>
          <q-btn label="Enviar a Caja" icon="done" class="q-py-md" color="positive" />
          <q-btn label="Cancelar" icon="cancel" color="amber-14" />
        </q-btn-group>
      </div>
      <div class="q-pa-xs row items-center" v-else>
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
              <q-btn dense flat rounded :icon="iptsearch.icon" />
            </template>

            <template v-slot:append>
              <q-btn icon="close" dense rounded flat v-if="definitor.length" />
            </template>
          </q-input>
        </div>
        <q-btn flat icon="fas fa-plus" stack no-caps color="green-13" />
        <q-btn flat icon="fas fa-arrow-right" stack no-caps color="green-13" />
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
      finish: { state: false },
      wndCounter: { state: false, product: undefined },
      definitor: "",
      iptsearch: { processing: false, type: "number", icon: "fas fa-font" },
      params: { id: "", data: Array },
      order: undefined,
      setupToolbar: { destiny: "", verify: "" },
      stateDelete: true,
      flag: true,
      configToolbar: [],
      flagArchive: false,
      rsocket: this.$sktRestock,
      pStrBucket: {
        bktInput: [],
        bktOutput: [],
        bktChekOut: [],
        bktCounter: 0
      },
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
      ]
    };
  },
  async beforeMount() {
    this.$store.commit("Requisitions/setHeaderState", false);
    this.$store.commit("Requisitions/setFooterState", false);

    this.params.id = this.$route.params.id;
    this.$store.commit("Layout/hideToolbarModule");
    this.$q.loading.show({ message: "..." });
    this.order = await dbreqs.find(this.params.id);
    console.log(this.order);
    this.setupToolbar.destiny = this.order.from.name;
    this.setupToolbar.verify = this.order.id;
    this.pStrBucket.bktInput = this.order.products;
    this.pStrBucket.bktChekOut = this.getCheckOut;
    this.$q.loading.hide();
  },
  destroyed() {},
  methods: {
    updateCache() {
      let products = JSON.parse(localStorage.getItem("checkout"));
      let idx = products.findIndex(
        item => (this.wndCounter.product.id = item.id)
      );
      products[idx] = this.wndCounter.product;
      localStorage.setItem("checkout", JSON.stringify(products));
    },
    confirm(prod) {
      this.wndCounter.product = prod;
      this.wndCounter.state = true;
    },
    confirmCheckOut(params) {
      console.log(params);
      let data = new Object();
      // data = params.product;
      data.amount = params.amount;
      data.comments = params.comments;
      data.cost = this.wndCounter.product.cost;
      data.total = this.wndCounter.product.cost * params.amount;
      data.units = params.units;
      data._supply_by = params.metsupply.id;
      // let ordered = {ordered : {data}}
      // console.log(data);
      let idx = this.pStrBucket.bktChekOut.findIndex(item => (item.id == params.product.id));
      // this.pStrBucket.bktChekOut[idx] = Object.assign(this.pStrBucket.bktChekOut[idx], ordered.data);
      console.log(this.structuredBucket(params)[idx].ordered);
      this.wndCounter.state = false;
      // data.ordered.amount =
      // this.wndCounter.product
      // console.log(params);
      // console.log(this.structuredBucket(data));
      // this.updateCache();
    }
  },
  computed: {
    structuredBucket() {
      return (params) => {
        let idx = this.pStrBucket.bktChekOut.findIndex(
          item => item.id == params.product.id
        );
        return this.pStrBucket.bktChekOut.map((p, am) => {
          // console.log(idx , am);
          if (am == idx) {
            console.log("Entro", idx);
            p.ordered = (p => {
              p.ordered.amount = params.amount;
              p.ordered.comments = params.comments;
              p.ordered.cost = p.cost;
              p.ordered.stock = p.ordered.stock;
              p.ordered.total = params.amount * p.cost;
              p.ordered.units = params.units;
              p.ordered._supply_by = params.metsupply.id;
              return p.ordered;
            })(p);
            console.log(p.ordered);
          } else {
            return p;
          }
          return p;
        });
      };
    },
    getCheckOut() {
      let products = JSON.parse(localStorage.getItem("checkout"));
      if (products) {
        let products = JSON.parse(localStorage.getItem("checkout"));
        let idx = products.findIndex(
          item => (this.wndCounter.product.id = item.id)
        );
        return products[idx];
      } else {
        return this.pStrBucket.bktInput;
      }
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
      return this.b_products.map(item => {
        item.pieces = item.pieces;
        item.boxes = item.ordered.amount;
        return item;
      });
    },
    b_products() {
      if (this.pStrBucket.bktInput) {
        return this.pStrBucket.bktInput.map(p => {
          p.ipack = p.pieces ? p.pieces : 1;
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
          return p;
        });
      } else {
        return [];
      }
    },
    b_prodToCheckOut() {
      if (this.getCheckOut) {
        return this.getCheckOut.map(p => {
          p.ordered = (p => {
            p.ordered.amount = 0;
            p.ordered.comments = "";
            p.ordered.cost = p.cost;
            p.ordered.stock = p.ordered.stock;
            p.ordered.total = p.cost * 0;
            p.ordered.units = 0;
            p.ordered._supply_by = p.ordered._supply_by;
            return p.ordered;
          })(p);
          p.ipack = p.pieces ? p.pieces : 1;
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
          return p;
        });
      } else {
        return [];
      }
    },
    b_delivered() {
      if (this.pStrBucket.bktInput) {
        return this.pStrBucket.bktOutput.map(p => {
          p.ipack = p.pieces ? p.pieces : 1;
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
          return p;
        });
      } else {
        return [];
      }
    },
    b_counter() {
      return this.b_delivered.map(aux => this.b_delivered++);
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
      return this.b_products.reduce((a, b) => parseInt(b.cost) + a, 0);
    },
    bucketCostDelivered() {
      return this.b_delivered.reduce((a, b) => parseInt(b.cost) + a, 0);
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
  height: calc(100vh - 250px);
}
</style>