<template>
  <div
    class="col-md col-xs-12 row items-end"
    :class="$q.screen.lt.md ? 'justify-between' : 'justify-end'"
  >
    <q-select
      dark
      color="green-13"
      label="Vista"
      :options="selectViews.opts"
      v-model="selectViews.selected"
      @input="setDates"
    />
    <!-- :label="`${this.ranges.date.from} ${this.ranges.time.from}`" -->
    <div class="q-pl-md row">
      <template v-if="selectViews.selected.value == 'c'">
        <div class="row q-gutter-md q-pr-lg">
          <div class="text-right">
            <div class="text--1 text-grey-3">{{ this.ranges.date.display.from }}</div>
            <div class="text--2">{{ this.ranges.time.display.from }}</div>
          </div>
          <div class="text-right">
            <div class="text--1 text-grey-3">{{ this.ranges.date.display.to }}</div>
            <div class="text--2">{{ this.ranges.time.display.to }}</div>
          </div>
        </div>
        <q-btn rounded color="primary" padding icon="fas fa-calendar-day" no-caps>
          <q-popup-proxy>
            <q-card class="bg-darkl1 text-grey-5 exo">
              <q-card-section>Seleccione periodo</q-card-section>
              <q-tabs
                v-model="tab"
                align="justify"
                class="bg-dark text-white shadow-2"
                :breakpoint="0"
              >
                <q-tab
                  name="f"
                  :label="`${this.ranges.date.from} ${meridian(
                    this.times.from.h
                  )}:${meridian(this.times.from.m)}:00 - ${this.ranges.date.to} ${meridian(
                    this.times.to.h
                  )}:${meridian(this.times.to.m)}:00`"
                  no-caps
                />
              </q-tabs>

              <q-tab-panels v-model="tab" animated class="text-center bg-darkl1">
                <q-tab-panel name="f">
                  <q-date v-model="rangePicker" range minimal flat dark />
                </q-tab-panel>
              </q-tab-panels>

              <q-card-actions align="right">
                <q-btn flat round v-close-popup color="green-13" label="OK" @click="setDates"></q-btn>
              </q-card-actions>
            </q-card>
          </q-popup-proxy>
        </q-btn>
      </template>
      <template v-else>
        <div class="row q-gutter-md">
          <div class="text-right">
            <div class="text--1 text-grey-3">{{ this.ranges.date.display.from }}</div>
            <div class="text--2">{{ this.ranges.time.display.from }}</div>
          </div>
          <div class="text-right">
            <div class="text--1 text-grey-3">{{ this.ranges.date.display.to }}</div>
            <div class="text--2">{{ this.ranges.time.display.to }}</div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { date } from "quasar";
export default {
  name: "RangeDates",
  props: {
    label: { type: String, default: "Vista" },
    useTime: { type: Boolean, default: false }
  },
  data() {
    return {
      selectViews: {
        opts: [
          { label: "Diaria", value: "t" },
          { label: "Semanal", value: "w" },
          { label: "Mensual", value: "m" },
          { label: "Anual", value: "y", disable: true },
          { label: "Personalizada", value: "c", disable: false }
        ],
        selected: { label: "Diaria", value: "t" }
      },
      ranges: {
        date: {
          from: null,
          to: null,
          display: { from: null, to: null }
        },
        time: {
          from: null,
          to: null,
          display: { from: null, to: null }
        }
      },
      rangePicker: undefined,
      tab: "f",
      times: {
        from: {
          h: this.$moment().hour(),
          m: this.$moment().minute()
        },
        to: {
          h: this.$moment().hour(),
          m: this.$moment().minute()
        }
      }
    };
  },
  beforeMount() {
    let getDBRanges = JSON.parse(localStorage.getItem("dbranges"));
    if (getDBRanges) {
      let dbStorageDate = this.$moment().format("YYYY/MM/DD");
      let dbAllDateToday = getDBRanges.ranges.date.from;
      console.log(this.todayState(dbStorageDate, dbAllDateToday));
      this.selectViews.selected = getDBRanges.option;
      this.ranges.date.from =  
      this.todayState(dbStorageDate, dbAllDateToday) > 0 ? this.$moment().format("YYYY-MM-DD") : getDBRanges.ranges.date.from;
      this.ranges.date.to =  
      this.todayState(dbStorageDate, dbAllDateToday) > 0 ? this.$moment().format("YYYY-MM-DD") : getDBRanges.ranges.date.to;

      this.ranges.date.display.from =  
      this.todayState(dbStorageDate, dbAllDateToday) > 0 ? this.$moment().format("YYYY/MM/DD") : getDBRanges.ranges.date.display.from;
      this.ranges.date.display.to = 
      this.todayState(dbStorageDate, dbAllDateToday) > 0 ? this.$moment().format("YYYY/MM/DD") : getDBRanges.ranges.date.display.to;

      this.ranges.time.from = this.$moment()
        .startOf("day")
        .add(8, "h")
        .format("HH:mm:ss");
      this.ranges.time.to = this.$moment()
        .endOf("day")
        .format("HH:mm:ss");

      this.ranges.time.display.from = this.$moment()
        .startOf("day")
        .add(8, "h")
        .format("hh:mm a");
      this.ranges.time.display.to = this.$moment()
        .endOf("day")
        .format("hh:mm a");

      localStorage.setItem(
        "dbranges",
        JSON.stringify({
          ranges: this.ranges,
          option: this.selectViews.selected,
          dbranges: this.dbranges
        })
      );
      this.$emit("inputRanges", { ranges: this.ranges, option: this.selectViews.selected, dbranges: this.dbranges });
    } else {
      this.setDates();
    }
  },
  methods: {
    setDates() {
      let opt = this.selectViews.selected;
      let dstart = this.$moment();
      let send = true;

      switch (opt.value) {
        case "w":
          // this.ranges.date.from = this.rangePicker&&this.rangePicker.from ? this.rangePicker.from : this.ranges.date.from;
          this.ranges.date.from = dstart.startOf("week").format("YYYY-MM-DD");
          this.ranges.date.display.from = dstart
            .startOf("week")
            .format("YYYY/MM/DD");
          console.log(this.ranges.date.from);
          break;

        case "m":
          // this.ranges.date.from = this.rangePicker&&this.rangePicker.from ? this.rangePicker.from : this.ranges.date.from;
          this.ranges.date.from = dstart.startOf("month").format("YYYY-MM-DD");
          this.ranges.date.display.from = dstart
            .startOf("month")
            .format("YYYY/MM/DD");
          break;

        case "y":
          // this.ranges.date.from = this.rangePicker&&this.rangePicker.from ? this.rangePicker.from : this.ranges.date.from;
          this.ranges.date.from = dstart.startOf("year").format("YYYY-MM-DD");
          this.ranges.date.display.from = dstart
            .startOf("year")
            .format("YYYY/MM/DD");
          break;

        case "c":
          console.log("Esperando rango de fechas...");
          this.ranges.date.from = this.rangePicker&&this.rangePicker.from ? this.rangePicker.from : this.ranges.date.from;
          this.ranges.date.to = this.rangePicker&&this.rangePicker.to ? this.rangePicker.to : this.ranges.date.to;
          this.ranges.date.display.from = this.rangePicker&&this.rangePicker.from ? this.rangePicker.from : this.ranges.date.display.from;
          this.ranges.date.display.to = this.rangePicker&&this.rangePicker.to ? this.rangePicker.to : this.ranges.date.display.to;

          this.ranges.date.display.from = this.$moment(
            this.getRanges.From.getDateFrom,
            "YYYY-MM-DD"
          ).format("YYYY/MM/DD");
          this.ranges.date.display.to = this.$moment(
            this.getRanges.To.getDateTo,
            "YYYY-MM-DD"
          ).format("YYYY/MM/DD");

          this.ranges.time.from = dstart
            .set("hour", 8)
            .set("minute", 0)
            .set("second", "00")
            .format("HH:mm:ss");

          this.ranges.time.to = dstart
            .set("hour", 23)
            .set("minute", 59)
            .set("second", "59")
            .format("HH:mm:ss");

          this.ranges.time.display.from = this.$moment(
            this.ranges.time.from,
            "HH:mm:ss"
          ).format("hh:mm A");
          this.ranges.time.display.to = this.$moment(
            this.ranges.time.to,
            "HH:mm:ss"
          ).format("hh:mm A");
          //   send = true;

          break;

        default:
          /** times for send */
          this.ranges.date.from = this.$moment().format("YYYY-MM-DD");
          this.ranges.date.to = this.$moment().format("YYYY-MM-DD");

          this.ranges.time.from = this.$moment()
            .startOf("day")
            .add(8, "h")
            .format("HH:mm:ss");
          this.ranges.time.to = this.$moment()
            .endOf("day")
            .format("HH:mm:ss");

          /** times for display */
          this.ranges.date.display.from = this.$moment().format("YYYY/MM/DD");
          this.ranges.date.display.to = this.$moment().format("YYYY/MM/DD");

          this.ranges.time.display.from = this.$moment()
            .startOf("day")
            .add(8, "h")
            .format("hh:mm a");
          this.ranges.time.display.to = this.$moment()
            .endOf("day")
            .format("hh:mm a");
          break;
      }
      localStorage.setItem(
        "dbranges",
        JSON.stringify({
          ranges: this.ranges,
          option: this.selectViews.selected,
          dbranges: this.dbranges
        })
      );
      // console.log(this.dbranges);
      send
        ? this.$emit("inputRanges", {
            ranges: this.ranges,
            option: this.selectViews.selected,
            dbranges: this.dbranges
          })
        : null;
    },
    meridian(key) {
      return key <= 9 ? "0" + key : key;
    }
  },
  computed: {
    todayState() {
      return (storage, today) => {
        let dbStorageDate = Date.parse(storage);
        let dbAllDateToday = Date.parse(today);
        let diff = date.getDateDiff(dbStorageDate, dbAllDateToday, "days");
        return diff;
      };
    },
    dbranges() {
      return {
        from: `${this.ranges.date.from} ${this.ranges.time.from}`,
        to: `${this.ranges.date.to} ${this.ranges.time.from}`
      };
    },
    getRanges() {
      return {
        From: {
          getDateFrom: this.ranges.date.from,
          getTimeFrom: this.ranges.time.from
        },
        To: {
          getDateTo: this.ranges.date.to,
          getTimeTo: this.ranges.time.to
        }
      };
    },
    meridianKey(key) {
      return key <= 9 ? "0" + key : key;
    }
  }
};
</script>
