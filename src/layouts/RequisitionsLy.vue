<!--
    /**
     * @App VizApp <org.grupovizcarra.vizapp>
     * @copyright Grupo Vizacarra - 2020-2021
     * @version v.1.0.0
     * @Description 
     *  Esqueleto y composición general del modulo de Resurtido
     *  Este Layout se compone de 3 principales componentes:
     *  - Nav Header => Cabecera dinamica que se activa o desactiva mediante states de VUEX
     *  - Vue-Router => Pages que juegan un rol cada que son invocadas mediante la nevagación dentro del modulo
     *  - Bar Footer => Al igual que el Header, se invoca con el VUEx y se puede ocultar.
     */
-->

<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container class="exo bg-darkl0 text-grey-5">
      <!-- <q-header class="bg-none" v-if="layout.header.state">
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
      
      <q-footer reveal class="bg-darktransl0" v-if="layout.footer.state">
        <ToolbarModule :with_home="true" />
      </q-footer> -->
      <q-page class=" row items-center justify-center" padding>
				<div class="text-center">
					<q-img src="~/src/assets/jhony.gif" style="width:200px"></q-img>
					<h6>El resurtido no esta disponible de forma local.</h6>
					<q-btn icon="fas fa-arrow-left" color="primary" @click="$router.replace('/')"></q-btn>
				</div>
			</q-page>
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

    this.rsocket.on("joineddashreq", data => { this.sktJoinatRes(data); });
    this.rsocket.on("creating", data => { this.sktCreateOrd(data); });
    this.rsocket.on("order_update", data => { this.sktUpdateOrd(data); });
    this.rsocket.on("order_changestate", data => { this.sktChangeState(data); });

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
      this.index = await RequisitionsDB.index();  
      this.$store.commit("Requisitions/startState", this.index);

      if(this.dashAccess){
        console.log("USUARIO CON ACCESO AL DASHBOARD, OBTENIENDO PEDIDOS");
        let ordersreq = await RequisitionsDB.dashboard(data);
        // console.log(ordersreq.requisitions);
        this.$store.commit("Requisitions/setOrdersIn",ordersreq.requisitions);
      }

      // if (this.checkPermissions) {
      //   let arr = await RequisitionsDB.dashboard(data);
      //   this.index.requisitions = [];
      //   arr.requisitions.forEach(element => {
      //     return this.index.requisitions.push(element);
      //   });

      //   this.flag = validateOrders.length > 0 ? false : true;

      //   if (validateOrders.length <= 0) {
      //     this.dialog = true;
      //     this.$store.commit("Requisitions/startState", this.index);
      //   } else {
      //     this.dialog = false;
      //     this.$store.commit("Requisitions/startState", this.index);
      //   }
      // } else {
      //   // arr.requisitions.forEach(element => {
      //   //   return this.index.requisitions.push(element);
      //   // });

      //   this.flag = validateOrders.length > 0 ? false : true;

      //   if (validateOrders.length <= 0) {
      //     this.dialog = true;
      //     this.$store.commit("Requisitions/startState", this.index);
      //   } else {
      //     this.dialog = false;
      //     this.$store.commit("Requisitions/startState", this.index);
      //   }
      // }

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
        this.appsounds.added.play();
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
    dashAccess(){
      let workpoint = JSON.parse(localStorage.getItem("workin"));
      console.log(workpoint);
      return workpoint.module.submodules.find( s => s.id == 19 ) ?? false;
    },
    checkPermissions() {
      let workpoint = JSON.parse(localStorage.getItem("workin"));
      let done = [1, 2, 16, 18, 13];
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