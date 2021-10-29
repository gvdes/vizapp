<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container class="exo bg-darkl0 text-grey-5">
      <q-header class="bg-none" v-if="layout.header.state">
        <q-card class="bg-darkl1">
          <HeaderApp :title="layout.header.title" />
          <div class="bg-darkl1 q-pa-sm col row justify-between">
            <div class="col-md-12 col-xs-12 items-end justify-end col">
              <RangeDates @inputRanges="loadView" />
            </div>
          </div>
        </q-card>
      </q-header>

      <router-view />

      <!-- <div>
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
                    alt
                  />
                </div>
                <div class="col-md-8 col-8 text-center">
                  <div class="text-subtitle1">No se encontraron resultados.</div>
                </div>
              </div>
            </q-card-section>

            <q-card-actions align="right">
              <q-btn flat label="OK" color="green-13" v-close-popup />
            </q-card-actions>
          </q-card>
        </q-dialog>
      </div>-->

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
      index: [],
      rsocket: this.$sktRestock
    };
  },
  created() {
    this.rsocket.disconnect();
    this.rsocket.connect();

    this.rsocket.on("joineddashreq", data => {
      this.sktJoinatRes(data);
    });
    this.rsocket.on("creating", data => {
      this.sktCreateOrd(data);
    });
    this.rsocket.on("order_update", data => {
      this.sktUpdateOrd(data);
    });
    this.rsocket.on("order_changestate", data => {
      this.sktChangeState(data);
    });

    this.rsocket.emit("joinat", {
      profile: this.profile,
      workpoint: this.workin.workpoint,
      room: this.socketroom
    });
  },
  methods: {
    async loadView(ranges) {
      this.$q.loading.show({ message: "Cargando vista..." });

      let dbranges = {
        date_from: ranges.dbranges.from,
        date_to: ranges.dbranges.to
      };
      this.$store.commit(
        "Requisitions/todayState",
        this.timeToday(ranges.ranges.date.from)
      );

      let data = { params: dbranges };
      console.log(data);
      this.index = await RequisitionsDB.index(data);
      let validateOrders = this.index.requisitions;
      console.log(this.index);
      let arr = await RequisitionsDB.dashboard(data);

      if (arr.requisitions.length >= 0 && this.checkPermissions) {
        this.index.requisitions = [];
        arr.requisitions.forEach(element => {
          return this.index.requisitions.push(element);
        });

        this.flag = validateOrders.length > 0 ? false : true;

        if (validateOrders.length <= 0) {
          this.dialog = true;
          this.$store.commit("Requisitions/startState", this.index);
        } else {
          this.dialog = false;
          this.$store.commit("Requisitions/startState", this.index);
        }
      } else {
        arr.requisitions.forEach(element => {
          return this.index.requisitions.push(element);
        });

        this.flag = validateOrders.length > 0 ? false : true;

        if (validateOrders.length <= 0) {
          this.dialog = true;
          this.$store.commit("Requisitions/startState", this.index);
        } else {
          this.dialog = false;
          this.$store.commit("Requisitions/startState", this.index);
        }
      }

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
      // this.appsounds.created.play();
      console.log(
        `%c${by.nick} esta creando la orden ${order.id}`,
        "background:#303952;color:#e66767;border-radius:10px;padding:8px;"
      );
      let flag = false;
      // console.log(data.order.from.id == this.workin.workpoint.id);
      console.log(this.cedisValidate(this.workin).length);
      data.order.status.id == 1 && this.getValidateSounds(data.order) != -1
        ? this.appsounds.ok.play()
        : "";
      if (data.order.from.id == this.workin.workpoint.id) {
        this.$store.commit("Requisitions/newOrder", order);
        flag = true;
      } else {
        [];
      }
      this.cedisValidate(this.workin).length && !flag
        ? this.$store.commit("Requisitions/newOrder", order)
        : [];
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
      console.log(data.order.from.id);
      console.log(data.from.workpoint.id);
      // console.log(this.getValidateSounds(data.order));
      console.log(
        data.state.id <= 9 && data.order.from.id == data.from.workpoint.id
      );
      data.state.id == 10 && this.getValidateSounds(data.order) != -1
        ? this.appsounds.ok.play()
        : "";
      data.state.id == 2 && this.getValidateSounds(data.order) != -1
        ? this.appsounds.created.play()
        : "";
      // data.state.id <= 9 && this.getValidateSounds(data.order) != -1 ? this.appsounds.moved.play() : "";
      if (
        data.state.id >= 3 &&
        data.state.id <= 9 &&
        this.getValidateSounds(data.order) != -1
      ) {
        this.appsounds.added.play()
        this.$q.notify({
          message: `La Orden ${data.order.id} ha cambiado su estatus a ${data.state.name}.`,
          color: "positive",
          icon: "done",
          position: "top-right"
        });
      }
      console.log(
        `%cLa orden ${data.order.id} cambio su status a ${data.state.name}`,
        "background:#7158e2;color:#fffa65;border-radius:10px;padding:8px;"
      );
      this.$store.commit("Requisitions/updateState", { order, newState });
    },
    sktUpdateOrd(data) {
      console.log(data);
      if (data.product == null) {
        let order = data.order;
        console.log(
          `%cLa orden ${order.id} no añadio el producto seleccionado.`,
          "background:#7158e2;color:#fffa65;border-radius:10px;padding:8px;"
        );
      } else {
        let order = data.order;
        let product = data.product;
        let cmd = data.cmd == "remove" ? "removio" : "añadio";
        console.log(
          `%cLa orden ${order.id} ${cmd} ${product.description}`,
          "background:#7158e2;color:#fffa65;border-radius:10px;padding:8px;"
        );
      }

      // this.$store.commit("Requisitions/updateState", { order, newState });
    }
  },
  beforeDestroy() {
    console.log(
      "%cDesconectando de resurtido...",
      "background:#F97F51;color:#2C3A47;border-radius:10px;padding:6px;"
    );
    this.rsocket.emit("unjoin", {
      profile: this.profile,
      workpoint: this.workin.workpoint,
      room: "main"
    });
    this.rsocket.off();
  },
  computed: {
    timeToday() {
      return ranges => this.$moment().format("YYYY-MM-DD") === ranges;
    },
    cedisValidate() {
      // return this.workin;
      return order =>
        [order].filter(
          item =>
            item.workpoint.id == 1 ||
            item.workpoint.id == 2 ||
            item.workpoint.id == 16
        );
    },
    getValidateSounds() {
      return order => this.$store.getters["Requisitions/getIDX"](order);
    },
    appsounds() {
      return this.$store.getters["Multimediapp/sounds"];
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
    }
  }
};
</script>

<style lang="scss">
.text--2 {
  font-size: 0.8em !important;
}
</style>