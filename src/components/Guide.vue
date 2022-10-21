<template>
  <q-card class="bg-darkl0 exo text-grey-5">
    <!-- <img src="https://cdn.quasar.dev/img/mountains.jpg"> -->
    <!-- <q-card-section>
      <div class="text-h6 text-grey-2">Guia de Luces</div>
    </q-card-section> -->
    <q-table
      title="Guia de luces"
      :data="rows"
      :columns="columns"
      row-key="name"
      class="transparent text-white"
      :filter="filter"
      table-header-class="text-green-13"
    >
      <template v-slot:top-right>
        <q-input debounce="100" dense dark v-model="filter" placeholder="Buscar" color="green-13">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
    </q-table>
  </q-card>
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {
      filter: '',
      rows:[
          {
              "code": "JL7208",
              "typebulb": "LED",
              "colors": "A/B/V/R/RJ/M/CAL/C/ARC/COMB/BIC",
              "cable": "VERDE/TRANSPARENTE",
              "attrs": "MAGICA",
              "cat": "SERIE LINEAL ",
              "lights": "30",
              "long": "1.5 MTS"
          },
          {
              "code": "JL1004",
              "typebulb": "LED",
              "colors": "A/B/V/R/RJ/M/CAL/C/ARC/COMB/BIC",
              "cable": "VERDE/TRANSPARENTE",
              "attrs": "MAGICA",
              "cat": "SERIE LINEAL ",
              "lights": "50",
              "long": "2.5 MTS"
          },
          {
              "code": "JL7003",
              "typebulb": "V8",
              "colors": "A/B/CAL/C/COMB/BIC ",
              "cable": "VERDE/TRANSPARENTE/BLANCO",
              "attrs": "MAGICA",
              "cat": "SERIE LINEAL ",
              "lights": "50",
              "long": "2.5 MTS"
          },
          {
              "code": "FA0504V",
              "typebulb": "V3",
              "colors": "B/CAL/C",
              "cable": "NEGRO",
              "attrs": "DESTELLO Y MÁGICA",
              "cat": "SERIE LINEAL ",
              "lights": "50",
              "long": "2.5 MTS"
          },
          {
              "code": "JL1454",
              "typebulb": "V9",
              "colors": "B/CAL/C/COMB",
              "cable": "NEGRO",
              "attrs": "MAGICA",
              "cat": "SERIE LINEAL ",
              "lights": "50",
              "long": "2.5 MTS"
          },
          {
              "code": "JL1431",
              "typebulb": "V9 ESMERILADO",
              "colors": "B/CAL/C",
              "cable": "NEGRO",
              "attrs": "MAGICA",
              "cat": "SERIE LINEAL ",
              "lights": "50",
              "long": "2.5 MTS"
          },
          {
              "code": "JL0004",
              "typebulb": "MICROLED",
              "colors": "B/CAL/C",
              "cable": "ALAMBRE COBRIZO",
              "attrs": "MAGICA",
              "cat": "SERIE LINEAL ",
              "lights": "50",
              "long": "2.5 MTS"
          },
          {
              "code": "JL1700",
              "typebulb": "50 L",
              "colors": "B/CAL/C",
              "cable": "CBL (CABLE FORRADO)",
              "attrs": "MAGICA",
              "cat": "SERIE LINEAL ",
              "lights": "50",
              "long": "2.5 MTS"
          },
          {
              "code": "JL9502",
              "typebulb": "LED",
              "colors": "A/B/V/R/RJ/M/CAL/C/ARC/COMB/BIC",
              "cable": "VERDE/TRANSPARENTE",
              "attrs": "LUZ FIJA, MAGICA",
              "cat": "SERIE LINEAL ",
              "lights": "100",
              "long": "5 MTS"
          },
          {
              "code": "JL1009",
              "typebulb": "LED",
              "colors": "A/B/V/R/RJ/M/CAL/C/ARC/COMB/BIC",
              "cable": "VERDE/TRANSPARENTE",
              "attrs": "MAGICA",
              "cat": "SERIE LINEAL ",
              "lights": "100",
              "long": "5 MTS"
          },
          {
              "code": "JL7013",
              "typebulb": "V8",
              "colors": "A/B/CAL/C/COMB/BIC ",
              "cable": "VERDE/TRANSPARENTE/BLANCO",
              "attrs": "MAGICA",
              "cat": "SERIE LINEAL ",
              "lights": "100",
              "long": "5 MTS"
          },
          {
              "code": "JL1873",
              "typebulb": "V8",
              "colors": "A/B/CAL/C/COMB",
              "cable": "VERDE/TRANSPARENTE",
              "attrs": "MAGICA",
              "cat": "SERIE LINEAL ",
              "lights": "100",
              "long": "5 MTS"
          },
          {
              "code": "JL1262",
              "typebulb": "V3",
              "colors": "B/CAL/C",
              "cable": "NEGRO",
              "attrs": "DESTELLO Y MÁGICA",
              "cat": "SERIE LINEAL ",
              "lights": "100",
              "long": "5 MTS"
          },
          {
              "code": "JL1457",
              "typebulb": "V9",
              "colors": "B/CAL/C/COMB",
              "cable": "NEGRO",
              "attrs": "MAGICA",
              "cat": "SERIE LINEAL ",
              "lights": "100",
              "long": "5 MTS"
          },
          {
              "code": "JL1435",
              "typebulb": "V9 ESME",
              "colors": "B/CAL/C",
              "cable": "NEGRO",
              "attrs": "MAGICA",
              "cat": "SERIE LINEAL ",
              "lights": "100",
              "long": "5 MTS"
          },
          {
              "code": "AP98101",
              "typebulb": "V7",
              "colors": "B/CAL/C",
              "cable": "NEGRO/TRANSPARENTE",
              "attrs": "MAGICA",
              "cat": "SERIE LINEAL ",
              "lights": "100",
              "long": "5 MTS"
          },
          {
              "code": "JL7600",
              "typebulb": "MICROLED",
              "colors": "B/CAL/C",
              "cable": "ALAMBRE COBRIZO",
              "attrs": "MAGICA",
              "cat": "SERIE LINEAL ",
              "lights": "100",
              "long": "5 MTS"
          },
          {
              "code": "JL1701",
              "typebulb": "MICROLED",
              "colors": "B/CAL/C",
              "cable": "CBL (CABLE FORRADO)",
              "attrs": "MAGICA",
              "cat": "SERIE LINEAL ",
              "lights": "100",
              "long": "5 MTS"
          },
          {
              "code": "JL1543",
              "typebulb": "SUPERBRILLANTE",
              "colors": "B/CAL/C",
              "cable": "VERDE Y TRANSPARENTE",
              "attrs": "MAGICA",
              "cat": "SERIE LINEAL ",
              "lights": "100",
              "long": "5 MTS"
          },
          {
              "code": "JL7220",
              "typebulb": "DIAMANTE",
              "colors": "B/CAL/C/COMB/BC/AQUA",
              "cable": "VERDE",
              "attrs": "MAGICA",
              "cat": "SERIE LINEAL ",
              "lights": "100",
              "long": "5 MTS"
          },
          {
              "code": "TS5370C",
              "typebulb": "MICRODIAMANTE",
              "colors": "B/CAL/C",
              "cable": "VERDE",
              "attrs": "MAGICA",
              "cat": "SERIE LINEAL ",
              "lights": "100",
              "long": "5 MTS"
          },
          {
              "code": "JL9006",
              "typebulb": "NORMAL",
              "colors": "C",
              "cable": "VERDE",
              "attrs": "SENCILLO/MAGICO",
              "cat": "SERIE LINEAL ",
              "lights": "100",
              "long": "5 MTS"
          },
          {
              "code": "JL9505",
              "typebulb": "LED",
              "colors": "A/B/V/R/RJ/M/CAL/C/ARC/COMB/BIC",
              "cable": "VERDE/TRANSPARENTE",
              "attrs": "MAGICA Y MUSICAL",
              "cat": "SERIE LINEAL ",
              "lights": "140",
              "long": "7 MTS"
          },
          {
              "code": "JL9302",
              "typebulb": "LED",
              "colors": "A/B/V/R/RJ/M/CAL/C/ARC/COMB/BIC",
              "cable": "VERDE/TRANSPARENTE",
              "attrs": "MAGICA Y MUSICAL",
              "cat": "SERIE LINEAL ",
              "lights": "140",
              "long": "7 MTS"
          },
          {
              "code": "JL1839A",
              "typebulb": "V8",
              "colors": "A/B/CAL/C/COMB",
              "cable": "VERDE/TRANSPARENTE",
              "attrs": "MAGICA, MUSICAL",
              "cat": "SERIE LINEAL ",
              "lights": "140",
              "long": "7 MTS"
          },
          {
              "code": "JL9008",
              "typebulb": "NORMAL",
              "colors": "C",
              "cable": "VERDE",
              "attrs": "PIÑA MUSICAL",
              "cat": "SERIE LINEAL ",
              "lights": "140",
              "long": "7 MTS"
          },
          {
              "code": "JL9507",
              "typebulb": "LED",
              "colors": "A/B/V/R/RJ/M/CAL/C/ARC/COMB/BIC",
              "cable": "VERDE/TRANSPARENTE",
              "attrs": "MAGICA",
              "cat": "SERIE LINEAL ",
              "lights": "200",
              "long": "10 MTS"
          },
          {
              "code": "JL1242",
              "typebulb": "LED",
              "colors": "A/B/V/R/RJ/M/CAL/C/ARC/COMB/BIC",
              "cable": "VERDE/TRANSPARENTE",
              "attrs": "MAGICA",
              "cat": "SERIE LINEAL ",
              "lights": "200",
              "long": "10 MTS"
          },
          {
              "code": "JL7023",
              "typebulb": "V8",
              "colors": "A/B/CAL/C/COMB/BIC ",
              "cable": "VERDE/TRANSPARENTE/BLANCO",
              "attrs": "MAGICA",
              "cat": "SERIE LINEAL ",
              "lights": "200",
              "long": "10 MTS"
          },
          {
              "code": "JL1271",
              "typebulb": "V3",
              "colors": "B/CAL/C",
              "cable": "NEGRO",
              "attrs": "DESTELLO Y MAGICA",
              "cat": "SERIE LINEAL ",
              "lights": "200",
              "long": "10 MTS"
          },
          {
              "code": "JL1462",
              "typebulb": "V9",
              "colors": "B/CAL/C/COMB",
              "cable": "NEGRO",
              "attrs": "MAGICA",
              "cat": "SERIE LINEAL ",
              "lights": "200",
              "long": "10 MTS"
          },
          {
              "code": "JL1438",
              "typebulb": "V9 ESMERILADO",
              "colors": "B/CAL/C",
              "cable": "NEGRO",
              "attrs": "MAGICA",
              "cat": "SERIE LINEAL ",
              "lights": "200",
              "long": "10 MTS"
          },
          {
              "code": "AP98201",
              "typebulb": "V7",
              "colors": "B/CAL/C",
              "cable": "NEGRO/TRANSPARENTE",
              "attrs": "MAGICA",
              "cat": "SERIE LINEAL ",
              "lights": "200",
              "long": "10 MTS"
          },
          {
              "code": "JL7604",
              "typebulb": "MICROLED",
              "colors": "B/CAL/C",
              "cable": "ALAMBRE COBRIZO",
              "attrs": "MAGICA",
              "cat": "SERIE LINEAL ",
              "lights": "200",
              "long": "10 MTS"
          },
          {
              "code": "JL1702",
              "typebulb": "MICROLED",
              "colors": "B/CAL/C",
              "cable": "CBL (CABLE FORRADO)",
              "attrs": "MAGICA",
              "cat": "SERIE LINEAL ",
              "lights": "200",
              "long": "10 MTS"
          },
          {
              "code": "JL1546",
              "typebulb": "SUPER BRILLANTE",
              "colors": "B/CAL/C",
              "cable": "VERDE Y TRANSPARENTE",
              "attrs": "MAGICA",
              "cat": "SERIE LINEAL ",
              "lights": "200",
              "long": "10 MTS"
          },
          {
              "code": "JL7220BD",
              "typebulb": "DIAMANTE/GRANIZO",
              "colors": "B/CAL/C/COMB/BC/AQUA",
              "cable": "VERDE",
              "attrs": "MAGICA",
              "cat": "SERIE LINEAL ",
              "lights": "200",
              "long": "10 MTS"
          },
          {
              "code": "TS5375C",
              "typebulb": "MICRODIAMANTE",
              "colors": "B/CAL/C",
              "cable": "VERDE",
              "attrs": "MAGICA",
              "cat": "SERIE LINEAL ",
              "lights": "200",
              "long": "10 MTS"
          },
          {
              "code": "JL1035",
              "typebulb": "LED",
              "colors": "A/B/V/R/RJ/M/CAL/C/ARC/COMB/BIC",
              "cable": "VERDE/TRANSPARENTE",
              "attrs": "MAGICA",
              "cat": "SERIE LINEAL ",
              "lights": "300",
              "long": "15 MTS"
          },
          {
              "code": "JL1164",
              "typebulb": "LED",
              "colors": "A/B/V/R/RJ/M/CAL/C/ARC/COMB/BIC",
              "cable": "VERDE/TRANSPARENTE",
              "attrs": "MAGICA",
              "cat": "SERIE LINEAL ",
              "lights": "300",
              "long": "15 MTS"
          },
          {
              "code": "JL7033",
              "typebulb": "V8",
              "colors": "A/B/CAL/C/COMB/BIC ",
              "cable": "VERDE/TRANSPARENTE/BLANCO",
              "attrs": "MAGICA",
              "cat": "SERIE LINEAL ",
              "lights": "300",
              "long": "15 MTS"
          },
          {
              "code": "JL1888A",
              "typebulb": "V8",
              "colors": "A/B/CAL/C/COMB",
              "cable": "VERDE/TRANSPARENTE",
              "attrs": "MAGICA",
              "cat": "SERIE LINEAL ",
              "lights": "300",
              "long": "15 MTS"
          },
          {
              "code": "JL1275",
              "typebulb": "V3",
              "colors": "B/CAL/C",
              "cable": "NEGRO",
              "attrs": "DESTELLO Y MAGICA",
              "cat": "SERIE LINEAL ",
              "lights": "300",
              "long": "15 MTS"
          },
          {
              "code": "TS6601SC",
              "typebulb": "V3",
              "colors": "B/CAL/C",
              "cable": "NEGRO",
              "attrs": "DESTELLO",
              "cat": "SERIE LINEAL ",
              "lights": "300",
              "long": "15 MTS"
          },
          {
              "code": "JL1466",
              "typebulb": "V9",
              "colors": "B/CAL/C/COMB",
              "cable": "NEGRO",
              "attrs": "MAGICA",
              "cat": "SERIE LINEAL ",
              "lights": "300",
              "long": "15 MTS"
          },
          {
              "code": "JL1443",
              "typebulb": "V9 ESMERILADO",
              "colors": "B/CAL/C",
              "cable": "NEGRO",
              "attrs": "MAGICA",
              "cat": "SERIE LINEAL ",
              "lights": "300",
              "long": "15 MTS"
          },
          {
              "code": "AP98301",
              "typebulb": "V7",
              "colors": "B/CAL/C",
              "cable": "NEGRO/TRANSPARENTE",
              "attrs": "MAGICA",
              "cat": "SERIE LINEAL ",
              "lights": "300",
              "long": "15 MTS"
          },
          {
              "code": "JL7608",
              "typebulb": "MICROLED",
              "colors": "B/CAL/C",
              "cable": "ALAMBRE COBRIZO",
              "attrs": "MAGICA",
              "cat": "SERIE LINEAL ",
              "lights": "300",
              "long": "15 MTS"
          },
          {
              "code": "JL1703",
              "typebulb": "MICROLED",
              "colors": "B/CAL/C",
              "cable": "CBL (CABLE FORRADO)",
              "attrs": "MAGICA",
              "cat": "SERIE LINEAL ",
              "lights": "300",
              "long": "15 MTS"
          },
          {
              "code": "JL1550",
              "typebulb": "SUPER BRILLANTE",
              "colors": "B/CAL/C",
              "cable": "VERDE Y TRANSPARENTE",
              "attrs": "MAGICA",
              "cat": "SERIE LINEAL ",
              "lights": "300",
              "long": "15 MTS"
          },
          {
              "code": "JL7224",
              "typebulb": "DIAMANTE/GRANIZO",
              "colors": "B/CAL/C/BC",
              "cable": "VERDE",
              "attrs": "MAGICA",
              "cat": "SERIE LINEAL ",
              "lights": "300",
              "long": "15 MTS"
          },
          {
              "code": "TS5376C",
              "typebulb": "MICRODIAMANTE",
              "colors": "B/CAL/C",
              "cable": "VERDE",
              "attrs": "MAGICA",
              "cat": "SERIE LINEAL ",
              "lights": "300",
              "long": "15 MTS"
          },
          {
              "code": "JL1041",
              "typebulb": "LED",
              "colors": "A/B/V/R/RJ/M/CAL/C/ARC/COMB/BIC",
              "cable": "VERDE/TRANSPARENTE",
              "attrs": "MAGICA",
              "cat": "SERIE LINEAL ",
              "lights": "400",
              "long": "20 MTS"
          },
          {
              "code": "JL1247",
              "typebulb": "LED",
              "colors": "A/B/V/R/RJ/M/CAL/C/ARC/COMB/BIC",
              "cable": "VERDE/TRANSPARENTE",
              "attrs": "MAGICA",
              "cat": "SERIE LINEAL ",
              "lights": "400",
              "long": "20 MTS"
          },
          {
              "code": "AP90097B",
              "typebulb": "V8",
              "colors": "A/B/CAL/C",
              "cable": "VERDE",
              "attrs": "MAGICA",
              "cat": "SERIE LINEAL ",
              "lights": "400",
              "long": "20 MTS"
          },
          {
              "code": "JL1469",
              "typebulb": "V9",
              "colors": "B/CAL/C",
              "cable": "NEGRO",
              "attrs": "MAGICA",
              "cat": "SERIE LINEAL ",
              "lights": "400",
              "long": "20 MTS"
          },
          {
              "code": "TS2072C",
              "typebulb": "V9 ESMERILADO",
              "colors": "B/CAL/C",
              "cable": "NEGRO",
              "attrs": "MAGICA",
              "cat": "SERIE LINEAL ",
              "lights": "400",
              "long": "20 MTS"
          },
          {
              "code": "JL7612",
              "typebulb": "MICROLED",
              "colors": "B/CAL/C",
              "cable": "ALAMBRE COBRIZO",
              "attrs": "MAGICA",
              "cat": "SERIE LINEAL ",
              "lights": "400",
              "long": "20 MTS"
          },
          {
              "code": "JL1075",
              "typebulb": "LED",
              "colors": "A/B/V/R/RJ/M/CAL/C/ARC/COMB/BIC",
              "cable": "VERDE/TRANSPARENTE",
              "attrs": "MAGICA",
              "cat": "SERIE LINEAL ",
              "lights": "500",
              "long": "25 MTS"
          },
          {
              "code": "JL1172",
              "typebulb": "LED",
              "colors": "A/B/V/R/RJ/M/CAL/C/ARC/COMB/BIC",
              "cable": "VERDE/TRANSPARENTE",
              "attrs": "MAGICA",
              "cat": "SERIE LINEAL ",
              "lights": "500",
              "long": "25 MTS"
          },
          {
              "code": "JL7073",
              "typebulb": "V8",
              "colors": "A/B/CAL/C",
              "cable": "VERDE",
              "attrs": "MAGICA",
              "cat": "SERIE LINEAL ",
              "lights": "500",
              "long": "25 MTS"
          },
          {
              "code": "JL1282",
              "typebulb": "V3",
              "colors": "B/CAL/C",
              "cable": "NEGRO",
              "attrs": "DESTELLO Y MA GICA",
              "cat": "SERIE LINEAL ",
              "lights": "500",
              "long": "25 MTS"
          },
          {
              "code": "TS8602SC",
              "typebulb": "V3",
              "colors": "B/CAL/C",
              "cable": "NEGRO",
              "attrs": "DESTELLO",
              "cat": "SERIE LINEAL ",
              "lights": "500",
              "long": "25 MTS"
          },
          {
              "code": "19950C",
              "typebulb": "V9",
              "colors": "B/CAL/C",
              "cable": "NEGRO",
              "attrs": "MAGICA",
              "cat": "SERIE LINEAL ",
              "lights": "500",
              "long": "25 MTS"
          },
          {
              "code": "JL1490",
              "typebulb": "V9 ESMERILADO",
              "colors": "B/CAL/C",
              "cable": "NEGRO",
              "attrs": "MAGICA",
              "cat": "SERIE LINEAL ",
              "lights": "500",
              "long": "25 MTS"
          },
          {
              "code": "JL1705",
              "typebulb": "MICROLED",
              "colors": "B/CAL/C",
              "cable": "CBL (CABLE FORRADO)",
              "attrs": "MAGICA",
              "cat": "SERIE LINEAL ",
              "lights": "500",
              "long": "25 MTS"
          },
          {
              "code": "JL1554",
              "typebulb": "SUPER BRILLANTE",
              "colors": "B/CAL/C",
              "cable": "VERDE Y TRANSPARENTE",
              "attrs": "MAGICA",
              "cat": "SERIE LINEAL ",
              "lights": "500",
              "long": "25 MTS"
          },
          {
              "code": "JL7228",
              "typebulb": "DIAMANTE/GRANIZO",
              "colors": "B/CAL/C/BC",
              "cable": "VERDE",
              "attrs": "MAGICA",
              "cat": "SERIE LINEAL ",
              "lights": "500",
              "long": "25 MTS"
          },
          {
              "code": "JL1106",
              "typebulb": "LED",
              "colors": "A/B/CAL/C",
              "cable": "TRANSPARENTE",
              "attrs": "MAGICA",
              "cat": "SERIE LINEAL ",
              "lights": "600",
              "long": "30 MTS"
          },
          {
              "code": "JL1250",
              "typebulb": "LED",
              "colors": "A/B/CAL/C",
              "cable": "TRANSPARENTE",
              "attrs": "MAGICA",
              "cat": "SERIE LINEAL ",
              "lights": "600",
              "long": "30 MTS"
          },
          {
              "code": "JL7084",
              "typebulb": "V8",
              "colors": "A/B/CAL/C",
              "cable": "VERDE",
              "attrs": "MAGICA",
              "cat": "SERIE LINEAL ",
              "lights": "600",
              "long": "30 MTS"
          },
          {
              "code": "JL1200",
              "typebulb": "LED",
              "colors": "A/B/CAL/C",
              "cable": "TRANSPARENTE",
              "attrs": "MAGICA",
              "cat": "SERIE LINEAL ",
              "lights": "700",
              "long": "35 MTS"
          },
          {
              "code": "JL1253",
              "typebulb": "LED",
              "colors": "A/B/CAL/C",
              "cable": "TRANSPARENTE",
              "attrs": "MAGICA",
              "cat": "SERIE LINEAL ",
              "lights": "700",
              "long": "35 MTS"
          },
          {
              "code": "TS8806C",
              "typebulb": "V8",
              "colors": "A/B/CAL/C",
              "cable": "VERDE",
              "attrs": "MAGICA",
              "cat": "SERIE LINEAL ",
              "lights": "700",
              "long": "35 MTS"
          },
          {
              "code": "TS2055C",
              "typebulb": "DIAMANTE/GRANIZO",
              "colors": "B/CAL/C",
              "cable": "VERDE",
              "attrs": "MAGICA",
              "cat": "SERIE LINEAL ",
              "lights": "700",
              "long": "35 MTS"
          },
          {
              "code": "JL1203",
              "typebulb": "LED",
              "colors": "A/B/CAL/C",
              "cable": "TRANSPARENTE",
              "attrs": "MAGICA",
              "cat": "SERIE LINEAL ",
              "lights": "800",
              "long": "40 MTS"
          },
          {
              "code": "JL1256",
              "typebulb": "LED",
              "colors": "A/B/CAL/C",
              "cable": "TRANSPARENTE",
              "attrs": "MAGICA",
              "cat": "SERIE LINEAL ",
              "lights": "800",
              "long": "40 MTS"
          },
          {
              "code": "JL7091",
              "typebulb": "V8",
              "colors": "A/B/CAL/C",
              "cable": "VERDE",
              "attrs": "MAGICA",
              "cat": "SERIE LINEAL ",
              "lights": "800",
              "long": "40 MTS"
          },
          {
              "code": "JL1213",
              "typebulb": "LED",
              "colors": "A/B/CAL/C",
              "cable": "TRANSPARENTE",
              "attrs": "MAGICA",
              "cat": "SERIE LINEAL ",
              "lights": "1000",
              "long": "50 MTS"
          },
          {
              "code": "JL1181",
              "typebulb": "LED",
              "colors": "A/B/CAL/C",
              "cable": "TRANSPARENTE",
              "attrs": "MAGICA",
              "cat": "SERIE LINEAL ",
              "lights": "1000",
              "long": "50 MTS"
          },
          {
              "code": "JL7094",
              "typebulb": "V8",
              "colors": "A/B/CAL/C",
              "cable": "VERDE",
              "attrs": "MAGICA",
              "cat": "SERIE LINEAL ",
              "lights": "1000",
              "long": "50 MTS"
          },
          {
              "code": "JL7095",
              "typebulb": "V3",
              "colors": "B/CAL/C",
              "cable": "NEGRO",
              "attrs": "DESTELLO Y MAGICA",
              "cat": "SERIE LINEAL ",
              "lights": "1000",
              "long": "50 MTS"
          },
          {
              "code": "JL1221",
              "typebulb": "V9",
              "colors": "B/CAL/C",
              "cable": "NEGRO",
              "attrs": "MAGICA",
              "cat": "SERIE LINEAL ",
              "lights": "1000",
              "long": "50 MTS"
          },
          {
              "code": "JL1493",
              "typebulb": "V9 ESMERILADO",
              "colors": "B/CAL/C",
              "cable": "NEGRO",
              "attrs": "MAGICA",
              "cat": "SERIE LINEAL ",
              "lights": "1000",
              "long": "50 MTS"
          },
          {
              "code": "YH160B",
              "typebulb": "LED",
              "colors": "A/B/CAL/C ",
              "cable": "VERDE/TRANSPARENTE",
              "attrs": "MAGICA",
              "cat": "RED",
              "lights": "160",
              "long": "1.20 X 1.40"
          },
          {
              "code": "JL9513",
              "typebulb": "LED",
              "colors": "A/B/M/CAL/C",
              "cable": "VERDE/TRANSPARENTE",
              "attrs": "MAGICA",
              "cat": "RED",
              "lights": "320",
              "long": "1.70 X 1.80 MTS"
          },
          {
              "code": "JL1860A",
              "typebulb": "V8",
              "colors": "B/CAL/C/BIC",
              "cable": "VERDE",
              "attrs": "MAGICA",
              "cat": "RED",
              "lights": "320",
              "long": "1.70 X 1.80 MTS"
          },
          {
              "code": "JL1855",
              "typebulb": "V9",
              "colors": "B/CAL/C",
              "cable": "NEGRO",
              "attrs": "MAGICA",
              "cat": "RED",
              "lights": "320",
              "long": "1.70 X 1.80 MTS"
          },
          {
              "code": "AP99321",
              "typebulb": "V7",
              "colors": "B/CAL/C",
              "cable": "TRANSPARENTE",
              "attrs": "MAGICA",
              "cat": "RED",
              "lights": "320",
              "long": "1.70 X 1.80 MTS"
          },
          {
              "code": "HZ8085",
              "typebulb": "480 L",
              "colors": "A/B/CAL/C",
              "cable": "VERDE/TRANSPARENTE",
              "attrs": "MAGICA",
              "cat": "RED",
              "lights": "480",
              "long": "3 X3 MTS"
          },
          {
              "code": "JL1014",
              "typebulb": "LED",
              "colors": "A/B/CAL/C/COMB/BIC",
              "cable": "TRANSPARENTE",
              "attrs": "MAGICA",
              "cat": "CASCADA",
              "lights": "200",
              "long": "4 MTS"
          },
          {
              "code": "JL1848B",
              "typebulb": "V8",
              "colors": "A/B/CAL/C",
              "cable": "VERDE/TRANSPARENTE",
              "attrs": "MAGICA",
              "cat": "CASCADA",
              "lights": "200",
              "long": "4 MTS"
          },
          {
              "code": "JL1301",
              "typebulb": "V9 ESMERILADO",
              "colors": "B/CAL/C",
              "cable": "VERDE/TRANSPARENTE",
              "attrs": "MAGICA",
              "cat": "CASCADA",
              "lights": "200",
              "long": "4 MTS"
          },
          {
              "code": "AP99201",
              "typebulb": "V7",
              "colors": "B/CAL/C",
              "cable": "NEGRO/TRANSPARENTE",
              "attrs": "MAGICA",
              "cat": "CASCADA",
              "lights": "200",
              "long": "4 MTS"
          },
          {
              "code": "JL1732",
              "typebulb": "MICROLED",
              "colors": "B/CAL/C",
              "cable": "CBL (CABLE FORRADO)",
              "attrs": "MAGICA",
              "cat": "CASCADA",
              "lights": "200",
              "long": "4 MTS"
          },
          {
              "code": "JL1018",
              "typebulb": "SUPER BRILLANTE",
              "colors": "B/CAL/C",
              "cable": "VERDE Y TRANSPARENTE",
              "attrs": "MAGICA",
              "cat": "CASCADA",
              "lights": "200",
              "long": "4 MTS"
          },
          {
              "code": "JL7245",
              "typebulb": "V3",
              "colors": "B/CAL/C",
              "cable": "NEGRO",
              "attrs": "DESTELLO",
              "cat": "CASCADA",
              "lights": "240",
              "long": "3.50 MTS"
          },
          {
              "code": "JL1017",
              "typebulb": "LED",
              "colors": "A/B/CAL/C/COMB/BIC",
              "cable": "TRANSPARENTE",
              "attrs": "MAGICA",
              "cat": "CASCADA",
              "lights": "300",
              "long": "5 MTS"
          },
          {
              "code": "JL1851B",
              "typebulb": "V8",
              "colors": "A/B/CAL/C",
              "cable": "VERDE/TRANSPARENTE",
              "attrs": "MAGICA",
              "cat": "CASCADA",
              "lights": "300",
              "long": "5 MTS"
          },
          {
              "code": "AP91074",
              "typebulb": "V3",
              "colors": "B/CAL/C",
              "cable": "NEGRO",
              "attrs": "DESTELLO",
              "cat": "CASCADA",
              "lights": "300",
              "long": "5 MTS"
          },
          {
              "code": "JL1304",
              "typebulb": "V9 ESMERILADO",
              "colors": "B/CAL/C",
              "cable": "VERDE/TRANSPARENTE",
              "attrs": "MAGICA",
              "cat": "CASCADA",
              "lights": "300",
              "long": "5 MTS"
          },
          {
              "code": "AP99301",
              "typebulb": "V7",
              "colors": "B/CAL/C",
              "cable": "NEGRO/TRANSPARENTE",
              "attrs": "MAGICA",
              "cat": "CASCADA",
              "lights": "300",
              "long": "5 MTS"
          },
          {
              "code": "JL1733",
              "typebulb": "MICROLED",
              "colors": "B/CAL/C",
              "cable": "CBL (CABLE FORRADO)",
              "attrs": "MAGICA",
              "cat": "CASCADA",
              "lights": "300",
              "long": "5 MTS"
          },
          {
              "code": "JL1019",
              "typebulb": "SUPER BRILLANTE",
              "colors": "B/CAL/C",
              "cable": "VERDE Y TRANSPARENTE",
              "attrs": "MAGICA",
              "cat": "CASCADA",
              "lights": "300",
              "long": "5 MTS"
          },
          {
              "code": "JL1045C",
              "typebulb": "LED",
              "colors": "A/B/CAL/C/COMB",
              "cable": "TRANSPARENTE",
              "attrs": "MAGICA",
              "cat": "CASCADA",
              "lights": "400",
              "long": "6 MTS"
          },
          {
              "code": "JL7248",
              "typebulb": "V3",
              "colors": "B/CAL/C",
              "cable": "NEGRO",
              "attrs": "DESTELLO",
              "cat": "CASCADA",
              "lights": "480",
              "long": "7 MTS"
          },
          {
              "code": "JL1072",
              "typebulb": "LED",
              "colors": "A/B/CAL/C/COMB",
              "cable": "TRANSPARENTE",
              "attrs": "MAGICA",
              "cat": "CASCADA",
              "lights": "500",
              "long": "10 MTS"
          },
          {
              "code": "JL1863",
              "typebulb": "V8",
              "colors": "A/B/CAL/C",
              "cable": "VERDE/TRANSPARENTE",
              "attrs": "MAGICA",
              "cat": "CASCADA",
              "lights": "500",
              "long": "10 MTS"
          },
          {
              "code": "JL1307",
              "typebulb": "V9 ESMERILADO",
              "colors": "B/CAL/C",
              "cable": "VERDE/TRANSPARENTE",
              "attrs": "MAGICA",
              "cat": "CASCADA",
              "lights": "500",
              "long": "10 MTS"
          },
          {
              "code": "JL1060",
              "typebulb": "SUPER BRILLANTE",
              "colors": "B/CAL/C",
              "cable": "VERDE/TRANSPARENTE",
              "attrs": "MAGICA",
              "cat": "CASCADA",
              "lights": "500",
              "long": "10 MTS"
          },
          {
              "code": "JL1206",
              "typebulb": "LED",
              "colors": "A/B/CAL/C",
              "cable": "TRANSPARENTE",
              "attrs": "MAGICA",
              "cat": "CASCADA",
              "lights": "600",
              "long": "12 mts"
          },
          {
              "code": "JL1209",
              "typebulb": "LED",
              "colors": "A/B/CAL/C",
              "cable": "TRANSPARENTE",
              "attrs": "MAGICA",
              "cat": "CASCADA",
              "lights": "800",
              "long": "16 mts"
          },
          {
              "code": "JL1215",
              "typebulb": "LED",
              "colors": "A/B/CAL/C",
              "cable": "TRANSPARENTE",
              "attrs": "MAGICA",
              "cat": "CASCADA",
              "lights": "1000",
              "long": "17 MTS"
          },
          {
              "code": "JL1225",
              "typebulb": "LED",
              "colors": "A/B/CAL/C",
              "cable": "TRANSPARENTE",
              "attrs": "MAGICA",
              "cat": "CASCADA",
              "lights": "1200",
              "long": "20 MTS"
          },
          {
              "code": "JL1137",
              "typebulb": "320 L",
              "colors": "A/B/CAL/C ",
              "cable": "VERDE/TRANSPARENTE",
              "attrs": "MAGICA",
              "cat": "CORTINA",
              "lights": "320",
              "long": "2.30 X 1.60 MTS"
          },
          {
              "code": "AP80800",
              "typebulb": "380 L",
              "colors": "A/B/CAL/C ",
              "cable": "VERDE/TRANSPARENTE",
              "attrs": "MAGICA",
              "cat": "CORTINA",
              "lights": "380",
              "long": "2 X 2 MTS"
          },
          {
              "code": "AP93841",
              "typebulb": "V7",
              "colors": "B/CAL/C",
              "cable": "TRANSPARENTE",
              "attrs": "MAGICA",
              "cat": "CORTINA",
              "lights": "384",
              "long": "3 X3 MTS"
          },
          {
              "code": "JL1760",
              "typebulb": "MICROLED",
              "colors": "B/CAL/C",
              "cable": "CBL (CABLE FORRADO)",
              "attrs": "MAGICA",
              "cat": "CORTINA",
              "lights": "384",
              "long": "3 X3 MTS"
          },
          {
              "code": "HZ8084",
              "typebulb": "480 L",
              "colors": "A/B/CAL/C ",
              "cable": "VERDE/TRANSPARENTE",
              "attrs": "MAGICA",
              "cat": "CORTINA",
              "lights": "480",
              "long": "3 X3 MTS"
          },
          {
              "code": "AP70482",
              "typebulb": "480 L",
              "colors": "B/CAL/C",
              "cable": "CBL (CABLE FORRADO)",
              "attrs": "MAGICA",
              "cat": "CORTINA",
              "lights": "480",
              "long": "3 X3 MTS"
          },
          {
              "code": "JL1093",
              "typebulb": "LED",
              "colors": "A/B/CAL/C ",
              "cable": "VERDE/TRANSPARENTE",
              "attrs": "MAGICA",
              "cat": "CORTINA",
              "lights": "560",
              "long": "3 X3 MTS"
          },
          {
              "code": "JL1527",
              "typebulb": "LED",
              "colors": "BICOLOR",
              "cable": "NEGRO",
              "attrs": "ESTRELLA / MAGICA",
              "cat": "SERIE DE FIGURAS",
              "lights": "100",
              "long": "5 MTS"
          },
          {
              "code": "JL1894",
              "typebulb": "LED",
              "colors": "B/C/CAL",
              "cable": "NEGRO",
              "attrs": "MACARRÓN / MAGICA",
              "cat": "SERIE DE FIGURAS",
              "lights": "100",
              "long": "5 MTS"
          },
          {
              "code": "JL1600",
              "typebulb": "LED",
              "colors": "B/BC/CAL",
              "cable": "NEGRO",
              "attrs": "BALA / MAGICA",
              "cat": "SERIE DE FIGURAS",
              "lights": "100",
              "long": "5 MTS"
          },
          {
              "code": "TS5350",
              "typebulb": "LED",
              "colors": "B/BC/CAL",
              "cable": "NEGRO",
              "attrs": "RETRO / MAGICA",
              "cat": "SERIE DE FIGURAS",
              "lights": "100",
              "long": "5 MTS"
          },
          {
              "code": "JL1564",
              "typebulb": "LED",
              "colors": "B/BC/CAL",
              "cable": "NEGRO",
              "attrs": "PIBOTE / MAGICA",
              "cat": "SERIE DE FIGURAS",
              "lights": "100",
              "long": "5 MTS"
          },
          {
              "code": "AP90312",
              "typebulb": "LED",
              "colors": "B/BC/CAL",
              "cable": "NEGRO",
              "attrs": "CANICA/ MAGICA",
              "cat": "SERIE DE FIGURAS",
              "lights": "100",
              "long": "5 MTS"
          },
          {
              "code": "JL1491",
              "typebulb": "LED",
              "colors": "B/BC/CAL",
              "cable": "NEGRO",
              "attrs": "CÓNICO/ MAGICA",
              "cat": "SERIE DE FIGURAS",
              "lights": "100",
              "long": "5 MTS"
          },
          {
              "code": "JL1908",
              "typebulb": "LED",
              "colors": "C, B, CAL",
              "cable": "TRANSPARENTE",
              "attrs": "ESFERA",
              "cat": "CORTINA DE FIGURAS",
              "lights": "138",
              "long": "3.60 X .90"
          },
          {
              "code": "JL1905",
              "typebulb": "LED",
              "colors": "C, B, CAL",
              "cable": "3.60 X .90",
              "attrs": "ESTRELLA",
              "cat": "CORTINA DE FIGURAS",
              "lights": "138",
              "long": "3.60 X .90"
          },
          {
              "code": "JL1911",
              "typebulb": "LED",
              "colors": "C, B, CAL",
              "cable": "3.60 X .90",
              "attrs": "LUNA",
              "cat": "CORTINA DE FIGURAS",
              "lights": "138",
              "long": "3.60 X .90"
          },
          {
              "code": "JL1907",
              "typebulb": "LED",
              "colors": "C, B, CAL",
              "cable": "3.60 X .90",
              "attrs": "LUNA CON ESTRELLA",
              "cat": "CORTINA DE FIGURAS",
              "lights": "138",
              "long": "3.60 X .90"
          },
          {
              "code": "JL7401",
              "typebulb": "LED",
              "colors": "C, B, CAL",
              "cable": "3.60 X .90",
              "attrs": "CAMPANA",
              "cat": "CORTINA DE FIGURAS",
              "lights": "138",
              "long": "3.60 X .90"
          },
          {
              "code": "JL7424",
              "typebulb": "LED",
              "colors": "C, B, CAL",
              "cable": "ALAMBRE COBRIZO",
              "attrs": "COPO",
              "cat": "CORTINA DE FIGURAS",
              "lights": "138",
              "long": "3.60 X .90"
          },
          {
              "code": "JL7300",
              "typebulb": "LED 300 LUCES",
              "colors": "C, B, CAL",
              "cable": "ALAMBRE COBRIZO",
              "attrs": "CANICA",
              "cat": "CORTINA DE FIGURAS",
              "lights": "138",
              "long": "3 X 3 MTS"
          },
          {
              "code": "TS6067",
              "typebulb": "LED",
              "colors": "RJ",
              "attrs": "NOCHE BUENA",
              "cat": "SERIE DE FLORES, FAROL Y BOMBILLA",
              "lights": "24",
              "long": "2 MTS"
          },
          {
              "code": "JL1197",
              "typebulb": "LED",
              "colors": "RJ",
              "attrs": "ROSA 3 PETALOS",
              "cat": "SERIE DE FLORES, FAROL Y BOMBILLA",
              "lights": "24",
              "long": "2 MTS"
          },
          {
              "code": "TS7225",
              "typebulb": "LED",
              "colors": "C, RJ",
              "attrs": "ROSA CHICA (20 LUCES)",
              "cat": "SERIE DE FLORES, FAROL Y BOMBILLA",
              "lights": "24",
              "long": "2 MTS"
          },
          {
              "code": "JL1191C",
              "typebulb": "LED",
              "colors": "RJ",
              "attrs": "ROSA GRANDE",
              "cat": "SERIE DE FLORES, FAROL Y BOMBILLA",
              "lights": "24",
              "long": "2 MTS"
          },
          {
              "code": "JL1050",
              "typebulb": "LED",
              "colors": "B, BIC",
              "attrs": "FLOR ACRILICO",
              "cat": "SERIE DE FLORES, FAROL Y BOMBILLA",
              "lights": "24",
              "long": "2 MTS"
          },
          {
              "code": "JL1058",
              "typebulb": "LED",
              "colors": "BIC, COMB",
              "attrs": "FAROL (30 LUCES)",
              "cat": "SERIE DE FLORES, FAROL Y BOMBILLA",
              "lights": "24",
              "long": "2 MTS"
          },
          {
              "code": "JL1529",
              "typebulb": "LED",
              "colors": "B, CAL, C",
              "attrs": "BOMBILLA",
              "cat": "SERIE DE FLORES, FAROL Y BOMBILLA",
              "lights": "24",
              "long": "2 MTS"
          },
          {
              "code": "HZ5051",
              "colors": "B, CAL, C, V, RJ, D, R, M, A",
              "attrs": "TIRA NEON/TIRA DE CONTROL",
              "cat": "MANGUERA",
              "long": "5 MTS"
          },
          {
              "code": "JL5013",
              "colors": "B, CAL, C, V, A, RJ,D,AM,A,M,ARC,COMB,BC",
              "attrs": "CORRUGADA/HUECA O CONCAVA/PLANA/DE GEL",
              "cat": "MANGUERA",
              "long": "10 MTS"
          },
          {
              "code": "JL5052",
              "colors": "B, CAL,C,V,A,RJ,D,AM,A,M,COMB",
              "attrs": "DE GEL",
              "cat": "MANGUERA",
              "long": "100 MTS"
          }
      ],
      columns:[
        { name:'cat', label:'Categoria', field:'cat', align:'center' },
        { name:'code', label:'Codigo', field:'code', align:'center' },
        { name:'long', label:'Long. Aprox', field:'long', align:'center' },
        { name:'lights', label:'# Luces', field:'lights', align:'center' },
        { name:'typebulb', label:'Tipo de Foco', field:'typebulb', align:'center' },
        { name:'colors', label:'Colores', field:'colors', align:'left' },
        { name:'cable', label:'Tipo de Cable', field:'cable', align:'center' },
        { name:'attrs', label:'Caracteristicas', field:'attrs', align:'left' },
      ]
    }
  },
}
</script>
