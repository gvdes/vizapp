<template>
  <q-page padding>
    <OrderListRequisitions :orders="orders" @clicked="orderclicked" />
    <!-- @clicked="orderclicked" -->

    <q-dialog v-model="wndSetOrder.state" position="bottom">
      <q-card class="bg-darkl0 text-grey-6 exo">
        <q-toolbar class="text-white">Nuevo Pedido</q-toolbar>
        <q-card-section>
          <div class="row q-gutter-md items-center">
            <q-select
              class="col"
              dark
              color="green-13"
              label="Tipo"
              v-model="neworder.type"
              :options="comboreqstypes"
              :disable="comboreqstypes.length == 1"
            />
            <q-select
              class="col"
              dark
              color="green-13"
              label="Destino"
              v-model="neworder.dest"
              :options="combowkps"
            />
          </div>
          <div class="row items-center q-gutter-md" v-if="neworder.type.value == 3">
            <q-select
              class="col"
              dark
              color="green-13"
              v-show="soldValidate.length"
              label="Origen"
              v-model="neworder.origin"
              :options="combowkpsorigin"
            />
            <q-input
              class="col"
              dark
              type="text"
              color="green-13"
              label="Folio"
              v-model="neworder.folio"
            />
          </div>
          <div class="row items-center q-gutter-md" v-if="neworder.type.value == 4">
            <q-input
              class="col"
              dark
              type="text"
              color="green-13"
              label="Folio"
              v-model="neworder.folio"
            />
          </div>
          <q-input
            dark
            color="green-13"
            label="notas"
            type="text"
            @keyup.enter="tryCreate"
            v-model="neworder.notes"
            autofocus
          />
        </q-card-section>
        <q-card-actions align="right">
          <q-btn
            dark
            flat
            color="green-13"
            class="bg-darkl1 shadow-1"
            icon="done"
            @click="tryCreate"
            :loading="wndSetOrder.creating"
            :disable="wndSetOrder.creating"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
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
    <q-page-sticky position="bottom-right" :offset="[10, 5]">
      <q-btn
        rounded
        flat
        class="bg-darkl1 shadow-1"
        color="green-13"
        icon="add"
        @click="wndSetOrder.state = true"
      />
    </q-page-sticky>
  </q-page>
</template>

<script>
import dbreqs from "../../API/requisitions";
import { date } from "quasar";
import { QSpinnerGrid } from "quasar";
import OrderListRequisitions from "../../components/Requisition/OrderListRequisitions.vue";

export default {
  components: { OrderListRequisitions },
  data() {
    return {
      dialog: false,
      name: "Resurtido / Inicio",
      initpagination: {
        sortBy: "id",
        descending: false,
        page: 1,
        rowsPerPage: 20
      },
      status: [],
      index: undefined,
      wndSetOrder: { state: false, creating: false },
      neworder: {
        notes: "",
        type: { label: "Manual", value: 1 },
        dest: { label: "CEDISSAP", value: 1 },
        origin: { label: "---", value: null },
        "folio:": undefined
      },
      sounds: {
        moved: new Audio("sounds/moved.mp3")
      },
      socket: this.$sktRestock
    };
  },
  async beforeMount() {
    this.index = await this.loadIndex();
    this.dialog = this.index.requisitions.length <= 0 ? true : false;
  },
  async mounted() {
    this.$store.commit("Requisitions/setHeaderState", true);
    this.$store.commit("Requisitions/setFooterState", true);
    this.$store.commit("Requisitions/setHeaderTitle", this.name);
    console.log(this.workin);
  },
  beforeDestroy() {
    // this.socket.emit("unjoin", {
    //   profile: this.profile,
    //   workpoint: this.workin,
    //   room: this.sktroom,
    // });
    // // this.orders = [];
    // console.log("desconectado del socket");
  },
  methods: {
    skt_order_created(data) {
      let order = data.order;
      let by = data.user.me;
      debugger;

      console.log(
        `%c${by.nick} esta creando la orden ${order.id}`,
        "background:#303952;color:#e66767;border-radius:10px;padding:8px;"
      );
      console.log(data);
      this.$store.commit("Requisitions/newOrder", order);
    },
    skt_order_changestate(data) {
      console.log(data);
      let newState = data.state.name;
      let order = data.order;
      order.log = data.log;
      order.status = data.state;

      console.log(
        `%cLa orden ${data.order.id} cambio su status a ${data.state.name}`,
        "background:#7158e2;color:#fffa65;border-radius:10px;padding:8px;"
      );
      this.$store.commit("Requisitions/updateState", { order, newState });
    },
    loadIndex() {
      return dbreqs.index();
    },
    orderclicked(order) {
      this.$router.push(`/pedidos/${order.id}`);
    },
    open(id) {
      console.log("editar " + id);
      this.$router.push("/pedidos/" + id);
    },
    tryCreate() {
      this.appsounds.creating.play();
      console.log("Creando pedido!!");
      let data = new Object();
      data._workpoint_to = this.neworder.dest.value;
      data._type = this.neworder.type.value;
      data.notes = this.neworder.notes;
      let cancreate = false;

      console.log(data);
      console.log(this.neworder.type.value);

      switch (this.neworder.type.value) {
        case 2:
          this.$q.loading.show({
            spinner: QSpinnerGrid,
            spinnerColor: "green-13",
            message:
              "Tu pedido se esta generando, por favor espera mientras consultamos existencias"
          });
          cancreate = true;
          break;

        case 3:
          data.folio = this.neworder.folio;
          data.store = this.soldValidate.length
            ? this.neworder.origin.value
            : this.workin.workpoint.id;
          console.log(data);

          if (data.folio || data.store) {
            cancreate = true;
            this.$q.loading.show({
              spinner: QSpinnerGrid,
              spinnerColor: "green-13",
              message: `Buscando folio <b class="text-green-13">${data.folio}</b> en <b class="text-green-13">${data.folio}</b>, porfavor espera`,
              html: true
            });
          } else {
            cancreate = false;
            this.$q.notify({
              icon: "fas fa-exclamation-circle",
              color: "red",
              message: `Sucursal y folio son obligatorios`
            });
          }
        case 4:
          data.folio = this.neworder.folio;
          data.store = this.neworder.origin.value;

          if (data.folio) {
            cancreate = true;
            this.$q.loading.show({
              spinner: QSpinnerGrid,
              spinnerColor: "green-13",
              message: `Buscando folio <b class="text-green-13">${data.folio}</b> en <b class="text-green-13">${data.folio}</b>, porfavor espera`,
              html: true
            });
          } else {
            cancreate = false;
            this.$q.notify({
              icon: "fas fa-exclamation-circle",
              color: "red",
              message: `Sucursal y folio son obligatorios`
            });
          }
          break;

        default:
          cancreate = true;
          this.wndSetOrder.creating = true;
          break;
      }

      if (cancreate) {
        dbreqs
          .create(data)
          .then(success => {
            let resp = success.data;
            console.log(resp);
            this.$q.loading.hide();
            this.wndSetOrder.creating = false;
            this.wndSetOrder.state = false;

            this.$q.notify({
              message: `Pedido ${resp.order.id} creado!`,
              color: "positive",
              position: "center",
              timeout: 1500
            });

            this.$sktRestock.emit("creating", {
              user: this.profile,
              from: this.workin,
              order: resp.order,
              to: this.neworder.dest
            });
            this.$router.push("/pedidos/" + resp.order.id);
          })
          .catch(fail => {
            console.log(fail);
            this.$q.notify({
              message: `Rayos!!, esto no ha funcionado!`,
              icon: "bug",
              color: "negative"
            });
          });
      }
    }
  },
  computed: {
    orders() {
      return this.$store.state.Requisitions.orders.filter(
        i => i.from.id == this.workin.workpoint.id
      );
    },
    soldValidate() {
      // return this.workin;
      return [this.workin].filter(
        item =>
          item.workpoint.id == 1 ||
          item.workpoint.id == 2 ||
          item.workpoint.id == 16
      );
    },
    appsounds() {
      return this.$store.getters["Multimediapp/sounds"];
    },
    workpoints() {
      return this.$store.state.Requisitions.printers;
    },
    profile() {
      return this.$store.getters["Account/profile"];
    },
    workin() {
      return this.$store.getters["Account/workin"];
    },
    socketroom() {
      return this.profile.me._rol <= 3 ? "admin" : "orders";
    },
    combowkps() {
      if (this.index) {
        return this.index.workpoints
          .map(item => {
            // console.log(item);
            return item.id == 1 || item.id == 2 || item.id == 16
              ? { label: item.alias, value: item.id }
              : null;
          })
          .filter(i => i != null);
      } else {
        return [];
      }
    },
    combowkpsorigin() {
      if (this.workpoints) {
        return this.workpoints
          .filter(item => {
            // return item.type.id>1&&item.alias!="VIZ";
            return item.alias != "VIZ";
          })
          .map(item => {
            return { label: item.alias, value: item.id };
          });
      } else {
        return [];
      }
    },
    comboreqstypes() {
      if (this.index) {
        let options = this.index.types.map(item => {
          return { label: item.name, value: item.id };
        });
        return options;
      } else {
        return [];
      }
    },
    labelstate() {
      return row => {
        let idx = row.log.findIndex(item => item.id == row.status.id);
        return row.log[idx].name;
      };
    },
    timestate() {
      return row => {
        let idx = row.log.findIndex(item => item.id == row.status.id);
        let time = row.log[idx].created_at;
        return this.humantime(time);
      };
    },
    humantime() {
      return time => {
        let now = Date.now();
        let timecalc = Date.parse(time);
        let diff = date.getDateDiff(now, timecalc, "days");

        switch (diff) {
          case 0:
            return "Hoy a las " + date.formatDate(timecalc, "hh:mm a");
            break;
          case 1:
            return "Ayer a las " + date.formatDate(timecalc, "hh:mm a");
            break;
          default:
            return (
              `Hace ${diff} dias, a las ` + date.formatDate(timecalc, "hh:mm a")
            );
            break;
        }
      };
    },
    ordersize() {
      return products => {
        let sizeprod = products.length;
        if (sizeprod) {
          let labelpzs = products.reduce((ammount, item) => {
            return item.ordered.amount + ammount;
          }, 0);
          return `M:${sizeprod}, P:${labelpzs}`;
        }
        return "--";
      };
    },
    layout() {
      return this.$store.state.Requisitions.layout;
    },
  }
};
</script>
