<!--
    /**
     * @App VizApp <org.grupovizcarra.vizapp>
     * @copyright Grupo Vizacarra - 2020-2021
     * @version v.1.0.0
     * @Description 
     *  Recibe las ordenes de surtido que generan en cada Sucursal,
     *  gestiona y da seguimiento al flujo de cada estado para poder
     *  culminar un proceso de surtido a Sucursal.
     *  Gestiona la disponibilidad de los encargados en realizar el 
     *  surtido, hasta el transporte que lo enviara.
     */
-->
<template>
  <q-page
    :class="ismobile ? '' : 'q-pb-md overflow-hidden'"
    :style="ismobile ? '' : 'max-width:100%;max-height:70vh;'"
  >
    <div class="q-pa-md">
      <div class="col-md-12 col-xs-12 col-12 row self-center items-center">
        <div class="col-md-3 col-3 q-pr-lg">
          <q-select
            class="exo"
            transition-show="jump-up"
            transition-hide="jump-down"
            dark
            color="green-13"
            v-model="visibleColumns"
            multiple
            outlined
            dense
            options-dense
            display-value="Configuración"
            emit-value
            map-options
            :options="columns"
            option-value="name"
            style="min-width: 150px"
          >
            <template v-slot:prepend>
              <q-icon class="text-green-13" name="settings" />
            </template>
          </q-select>
        </div>
        <div class="col-md-3 col-3">
          <template>
            <q-input
              dense
              color="green-13"
              dark
              debounce="0"
              v-model="searchID"
              placeholder="Buscar Folio"
            >
              <template v-slot:prepend><q-icon name="search" /></template>
            </q-input>
          </template>
        </div>
      </div>

      <q-table
        dark
        grid
        flat
        :data="index"
        :columns="columns"
        row-key="id"
        :rows-per-page-options="[0]"
        :visible-columns="visibleColumns"
        :pagination="dashboardPagination"
        :filter="searchID"
      >
        <template v-slot:top>
          <div class="row justify-between full-width q-ma-sm">
            <div
              class="col q-pa-xs"
              v-for="(header, key) in visibleColumns"
              :key="key"
            >
              <q-card class="bg-none">
                <q-toolbar
                  class="
                    q-mb-sm
                    text-green-13
                    bg-darkl1
                    text-uppercase text-thin
                    subtitle1
                  "
                >
                  {{ header }}
                  <q-space />
                  <span class="text-white items-end q-pr-sm text-weight-bold">{{
                    orderManagement(header).length
                  }}</span>
                  <q-avatar class="q-pl-sm" size="sm" rounded>
                    <img :src="avatar(key, 'toolbar')" />
                  </q-avatar>
                </q-toolbar>
              </q-card>

              <q-scroll-area
                :thumb-style="thumbStyle"
                :bar-style="barStyle"
                style="height: 70vh; max-width: 100%"
              >
                <transition-group
                  appear
                  enter-active-class="animated zoomIn"
                  leave-active-class="animated zoomOut"
                >
                  <q-card
                    v-for="order in orderManagement(header)"
                    :key="order.id"
                    class="column bg-darkl1 q-mb-sm"
                    v-ripple
                    clickable
                    @click="showLog(order.id)"
                  >
                    <q-card-section>
                      <!-- <div class="row justify-between items-center col-sm-3 col-md-4 col-xs-6"> -->
                      <div
                        :class="
                          visibleColumns.length < 8
                            ? 'row justify-between items-center col-sm-3 col-md-4 col-xs-6'
                            : 'column justify-between text-center items-center col-sm-3 col-md-4 col-xs-6'
                        "
                      >
                        <div class="col-3">
                          <div class="text-h5 text-white">{{ order.id }}</div>
                          <div class="text-h6 text-light-blue">
                            {{ order.from.alias }}
                          </div>
                          <div class="text-amber-13">{{ order.notes }}</div>
                        </div>
                        <div class="text-center col-auto">
                          <div>
                            <q-avatar class="q-ma-sm" size="5rem" square
                              ><img
                                transition="slide-up"
                                :src="buildlog(order, 'avatar')"
                            /></q-avatar>
                          </div>
                          <div>{{ buildlog(order, "resp") }}</div>
                          <div>
                            <span class="text-white text-bold">{{
                              buildlog(order, "time")
                            }}</span>
                          </div>
                        </div>
                      </div>
                    </q-card-section>
                  </q-card>
                </transition-group>
              </q-scroll-area>
            </div>
          </div>
        </template>
      </q-table>
    </div>

    <q-dialog v-model="wndLog.state">
      <q-card
        v-if="wndLog.order"
        class="exo bg-darkl0 text-grey-5"
        style="width: 500px"
      >
        <q-card-section>
          <div class="row text-white justify-between items-center">
            <div class="text-h3">
              {{ wndLog.order.from.alias }} {{ wndLog.order.id }}
            </div>
            <div class="text-h6">
              <div>
                {{ ordersize(wndLog.order.products)[0] }}m
                {{ ordersize(wndLog.order.products)[1] }}p
              </div>
              <q-btn
                icon="print"
                flat
                color="green-13"
                v-if="wndLog.order && wndLog.order.status.id > 1"
                @click="reprint"
                :loading="print.state"
                :disable="print.state"
              />
            </div>
          </div>
          <q-timeline dark color="green-13">
            <q-timeline-entry
              v-for="log in wndLog.order.log"
              :key="log.id"
              :subtitle="
                wndLog.order.status.id > 2 ? log.details.responsable : ''
              "
              :title="log.name"
            >
              <div
                :class="
                  log.id == 3 && log.details.actors
                    ? 'q-pb-sm col row text-weight-bold text-body1'
                    : ''
                "
              >
                <div class="col-auto q-pr-sm">
                  <span class="text-green-13">
                    <q-icon
                      class="q-pr-sm"
                      v-if="log.id == 3 && log.details.actors.managerState"
                      color="blue-grey-7"
                      name="fas fa-truck-loading"
                    />
                    {{
                      log.id == 3 && log.details.actors
                        ? log.details.actors.complete_name
                        : ""
                    }}
                  </span>
                </div>
                <div class="col-auto text-right">
                  <span class="text-white">{{
                    log.id == 3 && log.details.actors.managerState
                      ? humantime(log.details.actors.managerState.updateChanges)
                      : ""
                  }}</span>
                </div>
              </div>
              <div class="row text-center">
                <div class="col row items-center">
                  <q-icon name="fas fa-hourglass-start" color="blue-grey-7" />
                  <span class="text-white q-px-sm">{{
                    humantime(log.created_at)
                  }}</span>
                </div>
                <div class="col row items-center">
                  <q-icon name="fas fa-hourglass-end" color="blue-grey-7" />
                  <span class="text-white q-px-sm">{{
                    log.updated_at == log.created_at
                      ? "--"
                      : humantime(log.updated_at)
                  }}</span>
                </div>
                <div class="col row items-center">
                  <q-icon name="fas fa-stopwatch" color="blue-grey-7" />
                  <span class="text-white q-px-sm">{{ duration(log) }}</span>
                </div>
              </div>
              <div class="text-right">
                <div
                  class="q-pt-md"
                  v-if="
                    validateMarket(
                      wndLog.order.status.id,
                      wndLog.order.from.id
                    ) && wndLog.order.status.id == log.id
                  "
                >
                  <q-btn
                    outline
                    color="green-13"
                    label="iniciar surtido"
                    @click="wndStore.state = !wndStore.state"
                    v-show="!wndStore.state"
                    :disable="moving"
                    :loading="moving"
                  />
                </div>
                <div
                  class="q-pt-md"
                  v-if="
                    validateCEDIS(wndLog.order.status.id, log.id) &&
                    wndLog.order.status.id == log.id
                  "
                >
                  <q-btn
                    outline
                    color="teal-13"
                    :label="msgCEDIS"
                    @click="
                      checkState(wndLog.order.status.id)
                        ? ((wndStore.state = !wndStore.state),
                          (wndLog.state = !wndLog.state))
                        : changeState(
                            wndLog.order.status.id == 3
                              ? 7
                              : wndLog.order.status.id + 1
                          )
                    "
                    :disable="moving"
                    :loading="moving"
                  />
                </div>
              </div>
            </q-timeline-entry>
          </q-timeline>

          <div
            v-if="wndLog.order.status.id == 10"
            class="text-h6 text-light-blue-13 text-center text-"
          >
            Pedido completado en {{ totalduration(wndLog.order.log) }}
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
    <q-dialog v-model="wndStore.state">
      <DeliveryOpt
        v-show="wndStore.state && checkState(wndLog.order.status.id)"
        :orders="wndLog.order"
        @change="stateDxDiag"
        :data="grocerAccnt"
        :ordersAll="ordersdb"
        :state="1"
      />
    </q-dialog>
  </q-page>
</template>

<script>
import { date } from "quasar";
import dbreqs from "../../API/requisitions";
import ToolbarAccount from "../../components/Global/ToolbarAccount.vue";
import dbAccount from "../../API/account";
import DeliveryOpt from "../../components/Requisition/DeliveryOpt.vue";

export default {
  components: { ToolbarAccount, DeliveryOpt },
  data() {
    return {
      tab: "mails",
      dataOrder: [],
      splitterModel: 20,
      msgCEDIS: "",
      grocerAccnt: [],
      thumbStyle: {
        right: "4px",
        borderRadius: "5px",
        backgroundColor: "#00e676",
        width: "5px",
        opacity: 0.75,
      },
      wndStore: {
        state: false,
        order: undefined,
      },
      searchID: "",
      barStyle: {
        right: "2px",
        borderRadius: "9px",
        backgroundColor: "#00e676",
        width: "9px",
        opacity: 0.2,
      },
      visibleColumns: [],
      columns: [],
      data: [],
      dashboardPagination: {
        descending: false,
        page: 1,
        rowsPerPage: 5,
      },
      step: 1,
      selectDelivery: undefined,
      selectWarehouse: undefined,
      selectMovil: undefined,
      optDeliveryDisplay: [
        {
          id: 0,
          name: "Carlos Mejia Ramos",
          state: "Disponible",
          icon: "verified",
          color: "text-green-13",
          disable: false,
        },
        {
          id: 1,
          name: "Daniel Jacobo Vite",
          state: "Entregando",
          icon: "not_interested",
          color: "text-red-13",
          disable: true,
        },
        {
          id: 2,
          name: "Jose Luis Martinez",
          state: "Entregando",
          icon: "not_interested",
          color: "text-red-13",
          disable: true,
        },
        {
          id: 3,
          name: "Ignacio Ambriz",
          state: "Entregando",
          icon: "not_interested",
          color: "text-red-13",
          disable: true,
        },
        {
          id: 4,
          name: "Uriel Moreno",
          state: "Disponible",
          icon: "not_interested",
          color: "text-green-13",
          disable: false,
        },
      ],
      optMovilDisplay: [
        {
          id: 0,
          name: "Moto",
          state: "Disponible",
          icon: "verified",
          color: "text-green-13",
          disable: false,
        },
        {
          id: 1,
          name: "Motorratona",
          state: "Entregando",
          icon: "not_interested",
          color: "text-red-13",
          disable: true,
        },
        {
          id: 2,
          name: "Camioneta",
          state: "Entregando",
          icon: "not_interested",
          color: "text-red-13",
          disable: true,
        },
        {
          id: 3,
          name: "Diablito de Carga",
          state: "Entregando",
          icon: "not_interested",
          color: "text-red-13",
          disable: true,
        },
        {
          id: 4,
          name: "Plataforma de Carga",
          state: "Disponible",
          icon: "not_interested",
          color: "text-green-13",
          disable: false,
        },
      ],
      title: "Resurtido | Dashboard",
      filtdash: {
        searcher: "",
        view: [],
        crude: null,
      },
      index: undefined,
      sounds: {
        creating: new Audio("sounds/creating.mp3"),
        created: new Audio("sounds/waiting.mp3"),
        moved: new Audio("sounds/moved.mp3"),
        removed: new Audio("sounds/removed.mp3"),
        done: new Audio("sounds/done.mp3"),
      },
      wndLog: {
        state: false,
        order: undefined,
      },
      store: "",
      moving: false,
      print: { state: false },
    };
  },
  async beforeMount() {
    let params = { _rol: [7] };
    this.grocerAccnt = await dbAccount.get(params);
    this.index = this.orders;
    this.$store.commit("Requisitions/setHeaderTitle", this.title);
    let aux = 0;
    let blocked = [3, 4, 5, 7, 8, 10, 11];

    for (let index = 0; index < this.getStatesLog.length; index++) {
      aux = this.checkPermissions ? this.isCEDIS(index) : this.isMarket(index);
      this.visibleColumns.push(this.getStatesLog[aux].name);
      this.columns.push({
        name: this.getStatesLog[index].name,
        align: "left",
        label: this.getStatesLog[index].name,
        field: (row) => this.buildlog(row, "resp"),
        sortable: true,
        disable: blocked.includes(index) ? true : false,
      });
    }
    this.visibleColumns = this.visibleColumns.filter((item, pos, self) => {
      return self.indexOf(item) == pos;
    });

    if (this.visibleColumns.length > 0) {
      localStorage.setItem("setup", JSON.stringify(this.visibleColumns));
      localStorage.setItem("setupTable", JSON.stringify(this.columns));
    } else {
      this.visibleColumns = JSON.parse(localStorage.getItem("setup"));
      this.columns = JSON.parse(localStorage.getItem("setupTable"));
    }
  },
  beforeDestroy() {
    this.$sktRestock.emit("leave", {
      room: this.socketroom,
      user: this.profile,
    });
  },
  methods: {
    /**
     * @description Recibe la data del componente 'DeliveryOpt' y la transforma para gestionar los cambios estado.
     * @param { Object[] } newState - Objeto que recibe la data del componente DeliveryOpt
     */
    stateDxDiag(newState) {
      // console.log();
      if (newState._data.id == undefined) {
        this.wndStore.state = newState._state;
        this.wndLog.state = !this.wndStore.state;
      } else {
        this.wndStore.state = newState._state;
        this.wndLog.state = !this.wndStore.state;
        let actor = newState._data ? newState._data : [];
        console.log(actor);
        this.dataOrder = actor;
        this.changeState();
      }
    },
    /**
     * Aun no se utiliza.
     * @description Asigna un valor dependiendo su estado y retorna un objeto.
     * @param { string } storage - Valor que obtenemos del componente DeliveryOpt
     * @param { number } step - Valor que obtenemos del componente DeliveryOpt
     * @returns Object[]
     */
    setStorage(storage, step) {
      this.step = step;
      console.log(step);
      step == 3 ? (this.selectWarehouse = storage) : undefined;
      step == 4 ? (this.selectDelivery = storage) : undefined;
      step == 5 ? (this.selectMovil = storage) : undefined;

      return this.getObject();
    },
    /**
     * Aun no se utiliza.
     * @description Asigna valor y agrega a un nuevo objeto que retornara del componente DeliveryOpt.
     * @returns Object[]
     */
    getObject() {
      let object = {
        store: this.selectWarehouse,
        delivery: this.selectDelivery,
        movil: this.selectMovil,
      };
      console.log(object);
      return object;
    },
    /**
     * @description Función que reimprime un ticket.
     */
    reprint() {
      console.log("reimprimiendo");
      let data = { _requisition: this.wndLog.order.id };

      this.print.state = true;
      dbreqs
        .reprint(data)
        .then((success) => {
          console.log(success);
          this.print.state = false;
          let idx = this.ordersdb.findIndex((item) => {
            return item.id == this.wndLog.order.id;
          });
          this.ordersdb[idx].printed += 1;
        })
        .catch((fail) => {
          console.log(fail);
        });
    },
    /**
     * @description Mostramos el timeline del flujo de surtido a Sucursal.
     * @param { number } orderid ID de la orden
     */
    showLog(orderid) {
      let idx = this.ordersdb.findIndex((item) => {
        return item.id == orderid;
      });
      this.wndLog.order = this.ordersdb[idx];
      if (this.wndLog.order.log.length > 2) {
        let index = this.grocerAccnt.findIndex((item) => {
          return item.id == this.wndLog.order.log[2].details.actors.id;
        });
        let ord = this.structuredDataDelivery(
          this.wndLog.order,
          this.grocerAccnt[index],
          0
        );
        this.dataOrder = ord;
      }
      console.log(this.wndLog.order);
      this.wndLog.state = true;
    },
    changeState(_atstate = null) {
      this.moving = true;
      // debugger
      let atstate = _atstate
        ? _atstate
        : parseInt(this.wndLog.order.status.id) + 1;
      let data = {
        id: this.wndLog.order.id,
        _status: atstate,
        _actors: this.dataOrder,
      };
      let message = "";
      let newstatus = { id: atstate, name: undefined };
      let ntfsound = this.sounds.moved;

      this.wndStore.state = this.wndLog.order.id == 2 ? true : false;

      switch (atstate) {
        case 3:
          console.log("Moviendo a surtiendo...");
          newstatus.name = "Surtiendo";
          message = "Surtido iniciado";
          break;

        case 5:
          console.log("Moviendo a En camino...");
          newstatus.name = "En camino";
          message = "Envio iniciado";
          break;
      }

      dbreqs
        .nextstep(data)
        .then((success) => {
          let resp = success.data.updates;
          this.wndLog.state = false;
          this.moving = false;

          let idx = this.ordersdb.findIndex((item) => {
            return item.id == this.wndLog.order.id;
          });
          // debugger
          let newStateLog = [];
          let settingsOrder = [];
          let newStateSend = undefined;
          // settingsOrder = this.ordersdb[idx];
          newStateSend = resp.status;
          newStateLog = this.ordersdb[idx].log.concat(resp.log);
          console.log(newStateLog);
          // this.ordersdb[idx].log = newStateLog;
          // this.ordersdb[idx].status = newStateSend;
          // console.log(settingsOrder);
          // this.ordersdb[idx] = settingsOrder;
          this.$q.notify({
            message: message,
            color: "positive",
            icon: "done",
            position: "bottom-right",
          });

          this.sounds.moved.play();
          this.$sktRestock.emit("order_changestate", {
            state: newStateSend,
            profile: this.profile,
            log: newStateLog,
            order: this.ordersdb[idx],
            from: this.workin,
            room: this.socketroom,
          });
          // this.$store.commit("Requisitions/updateState", { settingsOrder, newStateSend });

          // this.$sktRestock.emit('order_changestate',{ state:newstatus, profile:this.profile, order:this.ordersdb[idx] });
        })
        .catch((fail) => {
          console.log(fail);
        });
    },
  },
  computed: {
    workin() {
      return this.$store.getters["Account/workin"];
    },
    orders() {
      return this.$store.getters["Requisitions/getOrders"];
    },
    profile() {
      return this.$store.getters["Account/profile"];
    },
    appconnected() {
      return this.$sktRestock ? this.$sktRestock.connected : false;
    },
    /**
     * @description Nos retorna el Objeto del Actor para el Campo Libre
     * @param { Object } Orden Order
     * @param { Object } Objeto_Bodegueros OptDelivery
     * @param { Number } State Estado de Disponibilidad
     */
    structuredDataDelivery() {
      return (order, optDelivery, state) => {
        let date = this.$moment();
        console.log(optDelivery);
        let profile = localStorage.getItem("profile");
        profile = JSON.parse(profile);
        let newState = "";
        switch (state) {
          case 0:
            newState = "Disponible";
            break;
          case 1:
            newState = "Surtiendo";
            break;
          case 2:
            newState = "En uso";
          default:
            newState = "No Disponible";
            break;
        }
        let data = {
          id: optDelivery.id,
          name: optDelivery.names,
          surname_mat: optDelivery.surname_mat,
          surname_pat: optDelivery.surname_pat,
          complete_name: `${optDelivery.names} ${optDelivery.surname_mat} ${optDelivery.surname_pat}`,
          state: newState,
          update: date.format("YYYY-MM-DD HH:mm"),
          products: order.products,
          managerState: {
            id: profile.me.id,
            manager_name: profile.me.names,
            manager_mat: profile.me.surname_mat,
            manager_pat: profile.me.surname_pat,
            complete_name: `${profile.me.names} ${profile.me.surname_mat} ${profile.me.surname_pat}`,
            workpoint: profile.workpoint.id,
            workpoint_alias: profile.workpoint.name,
            updateChanges: date.format("YYYY-MM-DD HH:mm"),
          },
          to: order.to,
        };
        return data;
      };
    },
    ordersdb() {
      return this.orders.length ? this.orders : [];
    },
    getStatesLog() {
      return this.$store.getters["Requisitions/getStates"];
    },
    orderManagement() {
      return (str) => {
        return this.ordersdb.filter(
          (order) =>
            order.id.toString().includes(this.searchID) &&
            order.status.name == str
        );
      };
    },
    noprinteds() {
      return this.orderForSupply.filter((order) => order.printed);
    },
    ismobile() {
      return this.$q.platform.is.mobile;
    },
    avatar() {
      return (order) => {
        let validate = [4, 8];
        let quiz = [5, 9];
        let requisition = [1];
        let delivery = [10];
        let supply = [2];
        let drive = [7];
        let send = [6];
        let suppling = [3];
        let id = order + 1;
        // console.log(order);
        return validate.includes(id)
          ? "https://cdn-icons-png.flaticon.com/512/3329/3329534.png"
          : quiz.includes(id)
          ? "https://cdn-icons-png.flaticon.com/512/2979/2979677.png"
          : delivery.includes(id)
          ? "https://cdn-icons-png.flaticon.com/512/3595/3595827.png"
          : supply.includes(id)
          ? "https://cdn-icons-png.flaticon.com/512/1632/1632670.png"
          : suppling.includes(id)
          ? "https://cdn-icons-png.flaticon.com/512/639/639339.png"
          : drive.includes(id)
          ? "https://cdn-icons-png.flaticon.com/512/609/609361.png"
          : send.includes(id)
          ? "https://cdn-icons-png.flaticon.com/512/2936/2936949.png"
          : requisition.includes(id)
          ? "https://cdn-icons-png.flaticon.com/512/1570/1570717.png"
          : "https://image.flaticon.com/icons/png/512/1674/1674229.png";
      };
    },
    buildlog() {
      return (order, data) => {
        let idx = order.log.findIndex((log) => {
          return order.status.id == log.id ? log.id : 101;
        });
        let resp = undefined;

        switch (data) {
          case "time":
            let timecalc = Date.parse(order.log[idx].created_at);
            resp = date.formatDate(timecalc, "hh:mm a");
            break;

          case "avatar":
            return this.verifyStations;
            // return "https://cdn-icons-png.flaticon.com/512/1674/1674234.png";
            break;
          case "resp":
            // console.log(this.getStatesLog);
            return order.log[idx].details.responsable;
            break;
        }

        return resp;
      };
    },
    humantime() {
      return (time) => {
        let now = Date.now();
        let timecalc = Date.parse(time);
        let diff = date.getDateDiff(now, timecalc, "days");

        switch (diff) {
          case 0:
            return "Hoy, " + date.formatDate(timecalc, "hh:mm a");
            break;
          case 1:
            return "Ayer, " + date.formatDate(timecalc, "hh:mm a");
            break;
          default:
            return `Hace ${diff} dias, ` + date.formatDate(timecalc, "hh:mm a");
            break;
        }
      };
    },
    duration() {
      return (log) => {
        let t_ini = Date.parse(log.created_at);
        let t_end = Date.parse(log.updated_at);

        let mins = date.getDateDiff(t_end, t_ini, "minutes");

        if (mins <= 59) {
          return mins + "m";
        } else {
          let t = parseFloat(mins / 60)
            .toFixed(2)
            .split(".");
          return `${t[0]}h ${t[1]}m`;
        }
      };
    },
    ordersize() {
      return (products) => {
        // console.log(products);
        let sizeprod = this.checkPermissions ? products.length : 0;
        if (sizeprod) {
          let labelpzs = products.reduce((ammount, item) => {
            return parseInt(item.ordered.amount) + ammount;
          }, 0);
          return [sizeprod, labelpzs];
        }
        return [0, 0];
      };
    },
    totalduration() {
      return (log) => {
        let t_ini = Date.parse(
          log.filter((_log) => {
            return _log.id == 1;
          })[0].created_at
        );
        let t_end = Date.parse(
          log.filter((_log) => {
            return _log.id == 10;
          })[0].created_at
        );

        let mins = date.getDateDiff(t_end, t_ini, "minutes");

        if (mins <= 59) {
          return mins + "m";
        } else {
          let t = parseFloat(mins / 60)
            .toFixed(2)
            .split(".");
          return `${t[0]}h ${t[1]}m`;
        }
      };
    },
    socketroom() {
      return `${this.workin.workpoint.alias}`;
    },
    validateMarket() {
      return (status, checkin) => {
        let statesMarket = [1, 8, 9];
        let done = [1, 2, 16, 18];
        // console.log(checkin);
        return done.includes(checkin) ? statesMarket.includes(status) : false;
      };
    },
    validateCEDIS() {
      return (status, log) => {
        // let stateCEDIS = [2, 3, 4, 5, 6, 7];
        // let msgDisplay = [
        //   "Iniciar surtido",
        //   "Enviar a validación",
        //   "Validar Embarque",
        //   "Enviando Embarque",
        //   "Enviar",
        //   "Entregar",
        // ];
        let stateCEDIS = [2, 3, 9];
        let msgDisplay = [
          "Iniciar surtido",
          // "Enviar a validación",
          // "Validar Embarque",
          // "Enviando Embarque",
          "Entregar",
          // "Entregar",
        ];
        this.msgCEDIS = stateCEDIS.includes(status)
          ? msgDisplay[stateCEDIS.indexOf(status)]
          : "";
        // console.log(this.msgDisplay)
        return stateCEDIS.includes(status);
      };
    },
    /**
     * @description Obtenemos la evaluacion de la condición para mostrar DxDialog de la Seleccioón de Bodegueros, Vehículos y Respartidores.
     * @returns Retorna Booleano
     * @param { number }  Id
     */
    checkState() {
      return (state) => {
        let resp = state == 2 || state == 6;
        return resp;
      };
    },
    /**
     * @description Retorna la configuración del tablero si solo es CEDIS
     * @returns Configuración del tablero por selección de items
     * @param {number} index
     */
    isCEDIS() {
      return (index) => {
        let settings =
          index == 1 || index == 2 || index == 6 || index == 9
            ? // index == 6
              index
            : 0;
        return settings;
      };
    },
    /**
     * @description Retorna la configuración del tablero si solo es Sucursal
     * @returns Configuración del tablero por selección de items
     * @param {number} index
     */
    isMarket() {
      return (index) => {
        let settings =
          index == 0 || index == 1 || index == 7 || index == 8 || index == 9
            ? index
            : 0;
        return settings;
      };
    },
    checkPermissions() {
      let workpoint = JSON.parse(localStorage.getItem("workin"));
      let done = [1, 2, 16, 18];
      // console.log(workpoint.workpoint.id)
      return done.includes(workpoint.workpoint.id) ? true : false;
    },
    verifyStations() {
      let season = [
        {
          name: "Navidad",
          img: "https://cdn-icons-png.flaticon.com/512/1674/1674274.png",
          months: [1, 10, 11, 12],
        },
        {
          name: "Mes Patrio",
          img: "https://cdn-icons-png.flaticon.com/512/1674/1674234.png",
          months: [9],
        },
        {
          name: "Normal",
          img: "https://cdn-icons-png.flaticon.com/512/1674/1674229.png",
          months: [2, 3, 4, 5, 6, 7, 8],
        },
      ];
      let date = this.$moment();

      let idx = season.find((item) => {
        return item.months.includes(date.month() + 1) ? item.img : "";
      });
      return idx.img;
    },
  },
};
</script>

<style lang="scss" scoped>
.noprinted {
  border: 2px solid #fe982a !important;
}
.my-card {
  width: 100%;
  max-width: 250px;
}
</style>