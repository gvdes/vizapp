<template>
  <q-slide-transition
    class="q-ma-sm full-height"
    transition-show="slide-right"
    transition-hide="slide-left"
  >
    <div style="width: 600px">
      <q-card class="exo bg-darkl0 text-grey-5 full-height">
        <q-card-section>
          <q-btn
            icon="fas fa-arrow-circle-left"
            color="green-13"
            flat
            roun
            label="Regresar"
            @click="returnState(false, {}, {}, {})"
          />
          <q-input
            class="q-pa-md"
            dense
            color="green-13"
            dark
            debounce="0"
            v-model="selectWarehouse"
            placeholder="Buscar (Disponibilidad ó Nombre)"
          >
            <template v-slot:prepend
              ><q-icon class="text-green-13" name="filter_alt"
            /></template>
          </q-input>
          <q-scroll-area
            :thumb-style="thumbStyle"
            :bar-style="barStyle"
            style="height: 80vh; max-width: 100%"
          >
            <q-table
              grid
              :rows-per-page-options="[0]"
              dark
              row-key="id"
              :columns="tableorders.columns"
              :data="destructuringData(this.data)"
              :filter="selectWarehouse"
            >
              <template v-slot:item="props">
                <div class="col col-xs-12 col-sm-6">
                  <q-card
                    class="
                      justify-center
                      items-center
                      text-justify
                      bg-darkl0
                      shadow-1
                      q-ma-sm
                    "
                  >
                    <div class="col items-center text-center">
                      <q-avatar class="bg-none" size="100px">
                        <q-img
                          class="bg-darkl0 q-pa-md"
                          transition="slide-up"
                          ratio="1"
                          :src="
                            props.row.state == 'Surtiendo'
                              ? 'https://image.flaticon.com/icons/png/512/3595/3595827.png'
                              : 'https://image.flaticon.com/icons/png/512/1108/1108334.png'
                          "
                        >
                        </q-img>
                      </q-avatar>
                    </div>
                    <q-card-actions>
                      <div
                        class="
                          col-12
                          text-h6 text-center text-grey-12 text-subtitle1
                        "
                        style="height: 50px"
                      >
                        {{ props.row.complete_name.trim() }}
                      </div>
                      <div
                        :class="`col-auto text-subtitle2 ${props.row.color}`"
                      >
                        <q-icon
                          :class="props.row.color"
                          :name="props.row.icon"
                        ></q-icon>
                        {{ props.row.state }}
                      </div>
                      <q-space />
                      <q-stepper-navigation>
                        <q-btn
                          rounded
                          flat
                          :class="`self-end ${props.row.color}`"
                          icon="double_arrow"
                          :disable="props.row.disable"
                          @click="returnState(false, orders, props.row, state)"
                        ></q-btn>
                      </q-stepper-navigation>
                    </q-card-actions>
                  </q-card>
                </div>
              </template>
            </q-table>
          </q-scroll-area>
        </q-card-section>
      </q-card>
    </div>
  </q-slide-transition>
</template>

<script>
export default {
  props: {
    data: { type: Array, default: [] },
    orders: { type: Object, default: [] },
    state: { type: Number, default: 0 },
    ordersAll: { type: Array, default: [] },
  },
  data() {
    return {
      thumbStyle: {
        right: "4px",
        borderRadius: "5px",
        backgroundColor: "#00e676",
        width: "5px",
        opacity: 0.75,
      },
      barStyle: {
        right: "2px",
        borderRadius: "9px",
        backgroundColor: "#00e676",
        width: "9px",
        opacity: 0.2,
      },
      optStoreDisplay: [],
      selectWarehouse: undefined,
      tableorders: {
        columns: [
          {
            name: "id",
            align: "left",
            label: "Folio",
            field: (row) => row.id,
            sortable: true,
          },
          {
            name: "name",
            align: "left",
            label: "Nombre",
            field: (row) => row.complete_name.trim(),
            sortable: true,
          },
          {
            name: "state",
            align: "center",
            label: "Estado",
            field: "state",
            sortable: true,
          },
        ],
      },
      initpagination: {
        sortBy: "id",
        descending: false,
        rowsPerPage: 6,
      },
      newState: false,
    };
  },
  methods: {
    returnState(_state, order, delivery, state) {
      let data = {
        _state: _state,
        _data: this.structuredDataDelivery(order, delivery, state),
      };
      this.$emit("change", data);
    },
    print(order, delivery, state) {
      console.log(order);
      console.log(this.structuredDataDelivery(order, delivery, state));
    },
  },
  computed: {
    destructuringData() {
      return (account) => {
        let grocer = account;
        let aux = [];
        let structured = 0;
        for (let i = 0; i < grocer.length; i++) {
          structured = this.ordersAll.findIndex((item, idx) => {
            // console.log(idx);
            return item.log.length == 3 && item.log[2].details.actors.id == grocer[i].id;
          });
          console.log(structured);
          if (structured > 0) {
            aux.push({
              id: grocer[i].id,
              name: grocer[i].names,
              surname_mat: grocer[i].surname_mat,
              surname_pat: grocer[i].surname_pat,
              complete_name: `${grocer[i].names} ${grocer[i].surname_pat} ${grocer[i].surname_mat}`,
              state:
                this.ordersAll[structured].log[2].details.actors.id ==
                grocer[i].id
                  ? this.ordersAll[structured].log[2].details.actors.state
                  : "",
              icon: "not_interested",
              color: "text-red-13",
              disable: true,
            });
          } else {
            aux.push({
              id: grocer[i].id,
              name: grocer[i].names,
              surname_mat: grocer[i].surname_mat,
              surname_pat: grocer[i].surname_pat,
              complete_name: `${grocer[i].names} ${grocer[i].surname_pat} ${grocer[i].surname_mat}`,
              state: "Disponible",
              icon: "verified",
              color: "text-green-13",
              disable: false,
            });
          }
          structured = 0;
        }
        return aux;
      };
    },
    structuredDataDelivery() {
      return (order, optDelivery, state) => {
        let date = this.$moment();
        // console.log(optDelivery);
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
          name: optDelivery.name,
          surname_mat: optDelivery.surname_mat,
          surname_pat: optDelivery.surname_pat,
          complete_name: `${optDelivery.name} ${optDelivery.surname_mat} ${optDelivery.surname_pat}`,
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
  },
};
</script>