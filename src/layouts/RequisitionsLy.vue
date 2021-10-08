<template>
  <!-- // quasar dev -p24700 -->
  <q-layout view="lHh Lpr lFf">
    <q-page-container class="exo bg-darkl0 text-grey-5">
      <q-header class="bg-none" v-if="layout.header.state">
        <q-card class="bg-darkl1">
          <HeaderApp :title="layout.header.title" />
          <div class="bg-darkl1 q-pa-sm col row justify-between">
            <div
              v-show="checkPermissions"
              class="col-md-4 col-xs-4 q-pr-sm items-start"
              style="max-width: 15rem"
            >
              <q-select
                transition-show="scale"
                transition-hide="scale"
                v-model="selectWorkpoint"
                color="green-13"
                :disable="flag"
                label="Sucursal"
                :options="workpoints"
                dark
                @input="searchMarket"
                options-selected-class="text-green-13"
              >
                <template v-slot:prepend>
                  <q-icon class="text-green-13" name="filter_alt" />
                </template>
              </q-select>
            </div>
            <div
              :class="
                checkPermissions
                  ? 'col-md-9 col-auto items-end justify-end'
                  : 'col-md-12 col-xs-12 items-end justify-end col'
              "
            >
              <RangeDates @inputRanges="loadView" />
            </div>
          </div>
        </q-card>
      </q-header>

      <router-view />

      <div>
        <q-dialog v-model="dialog">
          <q-card dark class="exo bg-darkl0 text-grey-5">
            <q-card-section class="bg-darkl11 text-white">
              <div class="text-h6">{{ this.layout.header.title }}</div>
            </q-card-section>
            <q-separator color="green-13" />
            <q-card-section>
              <div class="column items-center justify-center">
                <div class="col-md-4 col-4 text-center">
                  <img
                    width="100%"
                    src="https://www.huratips.com/wp-content/uploads/2019/04/empty-cart.png"
                    alt=""
                  />
                </div>
                <div class="col-md-8 col-8 text-center">
                  <div class="text-subtitle1">
                    No se encontraron resultados.
                  </div>
                </div>
              </div>
            </q-card-section>

            <q-card-actions align="right">
              <q-btn flat label="OK" color="green-13" v-close-popup />
            </q-card-actions>
          </q-card>
        </q-dialog>
      </div>

      <q-footer reveal class="bg-darktransl0" v-if="layout.footer.state">
        <ToolbarModule :with_home="true" />
      </q-footer>
    </q-page-container>
  </q-layout>
</template>

<script>
import ToolbarModule from "../components/Global/ToolbarModule.vue";
import RangeDates from "../components/Global/RangeDates.vue";
import HeaderApp from "../components/Global/HeaderApp.vue";
import dbworpoints from "../API/workpoint";
import RequisitionsDB from "../API/requisitions.js";

export default {
  name: "Resurtido",
  components: { ToolbarModule, RangeDates, HeaderApp },
  data() {
    return {
      flagPermissions: true,
      flag: true,
      dialog: false,
      date: undefined,
      workpointsOpc: undefined,
      workpoints: [],
      selectWorkpoint: undefined,
      index: [],
      rsocket: this.$sktRestock,
    };
  },
  async beforeMount() {
    let getMarkets = await dbworpoints.index();
    this.workpointsOpc = this.markets(getMarkets);
    this.workpoints.push({ label: "Todos", value: -1 });
    this.workpointsOpc.map((idx) => {
      return this.workpoints.push({ label: idx.name, value: idx.id });
    });
  },
  created() {
    this.rsocket.disconnect();
    this.rsocket.connect();

    this.rsocket.on("joineddashreq", (data) => {
      this.sktJoinatRes(data);
    });
    this.rsocket.on("creating", (data) => {
      this.sktCreateOrd(data);
    });
    this.rsocket.on("order_update", (data) => {
      this.sktUpdateOrd(data);
    });
    this.rsocket.on("order_changestate", (data) => {
      this.sktChangeState(data);
    });

    this.rsocket.emit("joinat", {
      profile: this.profile,
      workpoint: this.workin.workpoint,
      room: this.socketroom,
    });
  },
  methods: {
    async loadView(ranges) {
      this.$q.loading.show({ message: "Cargando vista..." });

      let dbranges = {
        date_from: ranges.dbranges.from,
        date_to: ranges.dbranges.to,
      };

      let data = { params: dbranges };

      this.index = await RequisitionsDB.index(data);
      // console.log(this.index);

      let arr = await RequisitionsDB.dashboard(data);
      // console.log(arr.requisitions.length);
      // console.log(arr.requisitions);
      if (arr.requisitions.length >= 0 && this.checkPermissions) {
        this.index.requisitions = [];
        arr.requisitions.forEach((element) => {
          return this.index.requisitions.push(element);
        });
        // console.log(this.index.requisitions);
        localStorage.removeItem("dashboard");
        //   console.log(filtering)
        localStorage.setItem("dashboard", JSON.stringify(this.index));

        this.flag = this.index.requisitions.length > 0 ? false : true;

        if (this.index.requisitions.length <= 0) {
          this.dialog = true;
          this.$store.commit("Requisitions/startState", this.index);
        } else {
          this.dialog = false;
          this.$store.commit("Requisitions/startState", this.index);
        }
      } else {
        arr.requisitions.forEach((element) => {
          return this.index.requisitions.push(element);
        });
        // console.log(this.index.requisitions);
        localStorage.removeItem("dashboard");
        //   console.log(filtering)
        localStorage.setItem("dashboard", JSON.stringify(this.index));

        this.flag = this.index.requisitions.length > 0 ? false : true;

        if (this.index.requisitions.length <= 0) {
          this.dialog = true;
          this.$store.commit("Requisitions/startState", this.index);
        } else {
          this.dialog = false;
          this.$store.commit("Requisitions/startState", this.index);
        }
      }

      this.$q.loading.hide();
    },
    async searchMarket() {
      this.$q.loading.show({ message: "Cargando vista..." });
      let data = JSON.parse(localStorage.getItem("dashboard"));
      this.index.requisitions = [];
      this.index.requisitions = this.ordersRequisitions(
        data,
        this.selectWorkpoint
      );
      this.$store.commit("Requisitions/startState", this.index);
      this.$q.loading.hide();
    },
    sktJoinatRes(data) {
      console.log(
        `%cSe unio a Resurtido ${data.user.me.nick}`,
        "background:#076F3E;color:#f5f6fa;border-radius:10px;padding:10px;font-size:1.1em;"
      );
    },
    sktCreateOrd(data) {
      let order = data.order;
      let by = data.user.me;

      console.log(
        `%c${by.nick} esta creando la orden ${order.id}`,
        "background:#303952;color:#e66767;border-radius:10px;padding:8px;"
      );
      // console.log(data);
      this.$store.commit("Requisitions/newOrder", order);
    },
    sktChangeState(data) {
      console.log(data);
      let newState = {
        state: data.state,
        log: data.log
      };
      let order = data.order;
      order.log = data.log;
      order.status = data.state;

      console.log(
        `%cLa orden ${data.order.id} cambio su status a ${data.state.name}`,
        "background:#7158e2;color:#fffa65;border-radius:10px;padding:8px;"
      );
      this.$store.commit("Requisitions/updateState", { order, newState });
    },
    sktUpdateOrd(data) {
      console.log(data);
      let order = data.order;
      let product = data.product;

      console.log(
        `%cLa orden ${order.id} añadio ${product.description}`,
        "background:#7158e2;color:#fffa65;border-radius:10px;padding:8px;"
      );
      // this.$store.commit("Requisitions/updateState", { order, newState });
    },
    markets(api) {
      let apiRest = api.filter((idx) => {
        return idx.type.id == 2;
      });
      return apiRest;
    },
  },
  beforeDestroy() {
    console.log(
      "%cDesconectando de resurtido...",
      "background:#F97F51;color:#2C3A47;border-radius:10px;padding:6px;"
    );
    this.rsocket.emit("unjoin", {
      profile: this.profile,
      workpoint: this.workin.workpoint,
      room: "main",
    });
    this.rsocket.off();
  },
  computed: {
    ordersRequisitions() {
      return (arr, by) => {
        let storage = by ? by.value : {};
        return arr.requisitions.filter((order) => {
          return storage > 0 ? order.from.id == storage : order;
        });
      };
    },
    workin() {
      return this.$store.getters["Account/workin"];
    },
    socketroom() {
      return this.profile.me._rol <= 3 ? "admin" : "orders";
    },
    profile() {
      return this.$store.getters["Account/profile"];
    },
    layout() {
      return this.$store.state.Requisitions.layout;
    },
    checkPermissions() {
      let workpoint = JSON.parse(localStorage.getItem("workin"));
      let done = [1, 2, 16, 18];
      // console.log(workpoint.workpoint.id)
      return done.includes(workpoint.workpoint.id) ? true : false;
    },
  },
};
</script>

<style lang="scss">
.text--2 {
  font-size: 0.8em !important;
}
</style>