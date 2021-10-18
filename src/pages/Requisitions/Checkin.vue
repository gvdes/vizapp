<template>
  <q-page>
    <q-header unelevated class="bg-darkl1">
      <div class="row items-stretch justify-between" v-show="stateDelete">
        <q-btn @click="$router.push('/pedidos/')" flat icon="close" />

        <div class="row items-center col bg-dark divlcient">
          <div class="q-pa-sm col text-center">
            <div class="text--2">Proveniente:</div>
            <div class="text-uppercase">
              {{ setupToolbar.destiny }}
            </div>
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
            <span class="text-green-13 text-bold">{{
              bucketToolbar.length
            }}</span>
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
  </q-page>
</template>

<script>
import dbreqs from "../../API/requisitions";
export default {
  data() {
    return {
      params: {
        id: "",
        data: Array,
      },
      order: undefined,
      setupToolbar: {
        destiny: "",
        verify: "",
      },
      stateDelete: true,
      flag: true,
      configToolbar: [],
      flagArchive: false,
      rsocket: this.$sktRestock,
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
    this.setupToolbar.destiny = this.order.to.name;
    this.setupToolbar.verify = this.order.id;
    this.products = this.order.products;
    this.$q.loading.hide();
  },
  destroyed() {},
  methods: {},
  computed: {
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
      return this.b_products.map((item) => {
        item.pieces = item.pieces;
        item.boxes = item.ordered.amount;
        return item;
      });
    },
    b_products() {
      if (this.products) {
        return this.products;
      } else {
        return [];
      }
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
  },
};
</script>

<style lang="scss" scoped>
    .wrapper_prod{ border-bottom:1px solid #4b4b4b; }
    .divlcient{ border-radius:0px 0px 20px 20px; }
</style>