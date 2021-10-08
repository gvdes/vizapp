<template>
  <q-page padding>
    <q-header elevated class="bg-darkl0">
      <div class="row items-stretch justify-between">
        <q-btn @click="$router.go(-1)" flat icon="close" />

        <div class="row items-center col bg-dark divlcient">
          <div class="q-pa-sm col text-center">
            <div class="text--2">Destino:</div>
            <div class="text-uppercase">
              {{ setupToolbar.destiny }}
            </div>
          </div>

          <div class="q-pa-sm col text-center">
            <div class="text--2">Folio:</div>
            <div class="text-bold">{{ setupToolbar.verify }}</div>
          </div>
        </div>

        <q-btn
          v-if="flag"
          flat
          icon="menu"
          @click="ldrawer.state = !ldrawer.state"
        />
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

    <q-slide-transition>
      <div v-show="flagDuplicate">
        <q-banner class="bg-orange-8">
          <template v-slot:avatar>
            <q-icon name="pan_tool" color="dark" />
          </template>
          <span class="text-subtitle1 text-dark text-weight-bold">
            {{ messageDuplicate }}
          </span>
          <template v-slot:action>
            <q-btn
              rounded
              flat
              color="dark"
              label="Entendido"
              icon-right="double_arrow"
              class="text-weight-bold"
              @click="(filteringItems = ''), (flagDuplicate = !flagDuplicate)"
            />
          </template>
        </q-banner>
      </div>
    </q-slide-transition>

    <q-drawer
      v-model="ldrawer.state"
      side="right"
      content-class="text-grey-5 bg-darkl1"
      @hide="startremove.state = false"
    >
      <div class="q-pa-md">
        <q-btn
          class="q-mb-md"
          label="Vaciar Orden"
          icon="remove_circle_outline"
          color="red-10"
          no-caps
          @click="emptyOrder"
        />
        <q-btn
          label="Archivar Pedido"
          icon="delete"
          color="negative"
          no-caps
          @click="startremove.state = true"
          v-if="!startremove.state"
        />
        <div v-else>
          <div class="q-mb-md">Archivar pedido?</div>
          <span class="col row q-gutter-md">
            <q-btn
              no-caps
              label="Si"
              class="col"
              color="negative"
              @click="order_archive"
            />
            <q-btn
              no-caps
              label="No"
              class="col"
              color="primary"
              @click="startremove.state = false"
            />
          </span>
        </div>
      </div>
      <q-separator />
    </q-drawer>

    <div class="q-mb-xl q-mt-sm">
      <q-table
        grid
        flat
        dark
        row-key="id"
        :columns="tableproducts.columns"
        :data="products"
        :pagination="tableproducts.pagination"
        :filter="filteringItems"
      >
        <template v-slot:item="products">
          <div class="q-pa-xs col-xs-12 text-grey-4 col-sm-6 col-md-4 col-lg-3">
            <q-card
              class="bg-darkl1 q-mb-sm q-mr-sm"
              @click="selItem(products.row, 2)"
            >
              <div class="row items-center q-pt-md">
                <div class="q-px-lg">
                  <q-img
                    transition="slide-up"
                    src="https://image.flaticon.com/icons/png/512/586/586627.png"
                    style="height: 50px; width: 50px"
                  />
                </div>
                <div class="text-white col">
                  <div class="text-bold">{{ products.row.code }}</div>
                  <div>{{ products.row.name }}</div>
                  <div class="text--2 text-grey-5">
                    {{ products.row.description }}
                  </div>
                </div>
              </div>

              <div class="col q-px-md">
                <q-markup-table flat dark class="bg-none">
                  <thead>
                    <tr>
                      <th>Sol. ({{ products.row.units.name }}s)</th>
                      <th>pzs / caj</th>
                      <th>Disp. (piezas)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="text-center">
                      <td>{{ products.row.ordered.amount }}</td>
                      <td>{{ products.row.pieces }}</td>
                      <td>
                        <span
                          :class="
                            products.row.ordered.stock >= 1
                              ? 'text-green-13'
                              : 'text-pink-13'
                          "
                        >
                          {{ products.row.ordered.stock }}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </q-markup-table>
              </div>
              <q-banner
                rounded
                class="bg-orange text-white"
                v-if="products.row.ordered.comments"
                >{{ products.row.ordered.comments }}</q-banner
              >
            </q-card>
          </div>
        </template>

        <template v-slot:bottom="scope">
          <q-page-sticky position="bottom" class="full-width" :offset="[0, 18]">
            <div class="row q-pt-xs">
              <q-btn-group rounded class="bg-dark text-white">
                <q-btn
                  v-if="scope.pagesNumber > 2"
                  icon="first_page"
                  round
                  dense
                  flat
                  :disable="scope.isFirstPage"
                  @click="scope.firstPage"
                  class="q-px-sm"
                />
                <q-btn
                  icon="chevron_left"
                  round
                  dense
                  flat
                  :disable="scope.isFirstPage"
                  @click="scope.prevPage"
                  class="q-px-sm"
                />
                <q-btn flat disable no-caps
                  >{{ scope.pagination.page }} / {{ scope.pagesNumber }}</q-btn
                >
                <q-btn
                  icon="chevron_right"
                  round
                  dense
                  flat
                  :disable="scope.isLastPage"
                  @click="scope.nextPage"
                  class="q-px-sm"
                />
                <q-btn
                  v-if="scope.pagesNumber > 2"
                  icon="last_page"
                  round
                  dense
                  flat
                  @click="scope.lastPage"
                  class="q-px-sm"
                />
              </q-btn-group>
            </div>
          </q-page-sticky>
        </template>
      </q-table>
    </div>

    <q-dialog v-model="wndImportJSON.state" persistent>
      <q-card class="bg-darkl0 text-grey-5 exo text-subtitle1">
        <q-card-section>
          Se preocesarón
          <span class="text-green-13 text-weight-bold">{{
            wndImportJSON.wndTotal
          }}</span>
          filas,
          <span class="text-green-13 text-weight-bold">{{
            wndImportJSON.wndGetRows
          }}</span>
          modelos fueron encontrados y agregados a la lista pero;
        </q-card-section>
        <q-card-section v-if="wndImportJSON.wndNoDataFound.length">
          <div>
            No encontramos estos
            <span class="text-red-6 text-weight-bold">{{
              wndImportJSON.wndNoDataFound.length
            }}</span>
            modelos:
          </div>
          <div
            class="text-uppercase"
            v-for="(code, idx) in wndImportJSON.wndNoDataFound"
            :key="idx"
          >
            <q-avatar size="xs" class="text-red-6" icon="fas fa-circle" />{{
              code
            }}
          </div>
        </q-card-section>
        <q-card-actions align="center">
          <q-btn
            class="full-width"
            flat
            label="Ok"
            color="green-13"
            v-close-popup
          />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <!-- <q-dialog v-model="wndAOE.state" position="bottom" @hide="cleanWndAOE">
      <q-card v-if="wndAOE.product" class="exo bg-darkl0 text-grey-4">
        <q-card-section>
          <div class="row justify-between items-start text-h6 text-bold">
            <div class="text-green-13">{{ wndAOE.product.code }}</div>
            <div class="text-light-blue-13">{{ wndAOE.product.name }}</div>
          </div>
          <div class="text--2">{{ wndAOE.product.description }}</div>
        </q-card-section>

        <div>
          <template v-if="wndAOE.params.type == 'std'">
            <div class="text-center row justify-between q-px-md">
              <div
                v-for="prc in wndAOE.product.prices"
                :key="prc.id"
                class="q-px-md"
              >
                <div class="text--2">{{ prc.alias }}</div>
                <div class="text-bold">$ {{ prc.price }}</div>
              </div>
            </div>
          </template>

          <template v-if="wndAOE.params.type == 'off'">
            <div class="text-center text-bold text-orange">
              <div>OFERTA</div>
              <div class="text-h4">$ {{ wndAOE.product.prices[0].price }}</div>
            </div>
          </template>

          <div class="q-mt-lg row items-end">
            <div class="text-center">
              <div class="column">
                <div v-if="wndAOE.product.stocks">
                  <q-btn
                    flat
                    dense
                    no-caps
                    class="text-bold"
                    :color="
                      wndAOE.product.stocks[0].stock ? 'green-13' : 'amber-13'
                    "
                    :label="`Stock: ${wndAOE.product.stocks[0].stock}`"
                  />
                </div>
                <q-btn
                  icon="fas fa-chevron-up"
                  class="q-py-xs"
                  @click="ctrlPzsUp"
                  flat
                />
                <div class="text-center col column q-py-md">
                  <input
                    type="number"
                    min="1"
                    v-model="wndAOE.params.amount"
                    class="text-center exo fieldcant"
                    @keyup="wAOEcalcs"
                  />
                </div>
                <q-btn
                  icon="fas fa-chevron-down"
                  class="q-py-xs"
                  @click="ctrlPzsDown"
                  flat
                />
              </div>
            </div>
            <div class="col">
              <q-markup-table
                dark
                flat
                dense
                square
                class="col q-mx-md bg-none text-grey-5"
              >
                <tbody>
                  <tr>
                    <td colspan="2">
                      <q-select
                        label="Surtir por"
                        @input="wAOEcalcs"
                        borderless
                        dense
                        dark
                        color="green-13"
                        v-model="metsupply.model"
                        option-value="id"
                        option-label="alias"
                        :options="metsupply.opts"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2">
                      <q-input
                        borderless
                        dense
                        dark
                        flat
                        label="Notas"
                        color="green-13"
                        v-model="wndAOE.params.comments"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Piezas X Caja</td>
                    <td align="right">{{ wndAOE.product.pieces }}</td>
                  </tr>
                  <tr>
                    <td>Cajas</td>
                    <td align="right">{{ wndAOE.params.boxes }}</td>
                  </tr>
                  <tr>
                    <td>Unidades</td>
                    <td align="right">{{ wndAOE.params.units }}</td>
                  </tr>
                  <tr>
                    <td>Precio unitario</td>
                    <td align="right">{{ wndAOE.params.price }}</td>
                  </tr>
                  <tr>
                    <td>Total</td>
                    <td align="right">{{ wndAOE.params.total }}</td>
                  </tr>
                </tbody>
              </q-markup-table>
            </div>
          </div>
        </div>
        <q-separator />
        <div class="row">
          <q-btn
            class="col q-py-md"
            color="green-13"
            icon="done"
            :label="wndAOE.action == 'a' ? 'Agregar' : 'Aplicar'"
            no-caps
            flat
            @click="doneAOE"
            :loading="wndAOE.actions.done.save"
            :disable="wndAOE.actions.done.dis"
          />
          <q-btn
            v-if="wndAOE.action == 'e'"
            class="col q-py-md"
            color="amber-13"
            icon="delete"
            label="Remover"
            no-caps
            flat
            @click="remove"
            :loading="wndAOE.actions.remove.rem"
            :disable="wndAOE.actions.remove.dis"
          />
          <q-btn
            class="col q-py-md"
            color="light-blue-14"
            icon="close"
            label="Cancelar"
            no-caps
            flat
            @click="cancelAOE"
          />
        </div>
      </q-card>
    </q-dialog> -->

    <q-dialog v-model="wndSelectSupply.wndDialogState" position="bottom">
      <q-card class="exo bg-darkl0 text-grey-4">
        <q-card-section>
          <div class="row justify-between text-h6 text-center">
            Selección de Surtido
          </div>
          <q-separator color="green-13" dark />
        </q-card-section>
        <q-card-section class="q-pt-none row text-center col justify-around">
          <q-card
            v-for="(items, idx) in wndSelectSupply.options"
            :key="idx"
            class="
              col-4
              card-action
              cursor-pointer
              bg-darkl1
              text-white
              no-border
            "
            @click="setSupplyTarget(items.value)"
          >
            <q-card-section>
              <div class="text-subtitle1">
                <q-avatar square>
                  <img :src="items.icon" />
                </q-avatar>
              </div>
              <span class="">{{ items.label }}</span>
            </q-card-section>
          </q-card>
        </q-card-section>
        <div>
          <!-- <template>
            <q-card-actions align="right">
              <div class="row">
                <q-btn
                  class="col q-py-md"
                  color="green-13"
                  icon="done"
                  label="Aplicar"
                  no-caps
                  flat
                />
                <q-btn
                  class="col q-py-md"
                  color="amber-13"
                  icon="delete"
                  label="Cancelar"
                  no-caps
                  flat
                />
                <q-btn
                  class="col q-py-md"
                  color="light-blue-14"
                  icon="close"
                  label="Cancelar"
                  no-caps
                  flat
                />
              </div>
            </q-card-actions>
          </template> -->
        </div>
      </q-card>
    </q-dialog>

    <q-dialog
      v-model="wndSetItem.state"
      position="bottom"
      @hide="wndSetItemReset"
    >
      <q-card v-if="wndSetItem.art" class="exo bg-darkl0 text-grey-5">
        <q-card-section>
          <div class="row text-white items-center justify-between">
            <span class="text-h6">{{ wndSetItem.art.code }}</span>
            <span class="text-bold">{{ wndSetItem.art.name }}</span>
          </div>
          <div class="text--1">{{ wndSetItem.art.description }}</div>

          <template v-if="!editableord">
            <div class="row q-gutter-md">
              <div>Cantidad: {{ wndSetItem.units }}</div>
            </div>
          </template>
        </q-card-section>
        <q-form v-if="editableord">
          <q-card-section class="row justify-around items-center">
            <!-- <q-select class="col" disable label="unidad" dark color="green-13" :options="seltypeunit" v-model="wndSetItem.unittype"/> -->
            <q-input
              dark
              color="green-13"
              min="1"
              type="number"
              label-slot
              v-model="wndSetItem.units"
              autofocus
            >
              <template v-slot:label>
                <div class="row text-amber-13">
                  <q-icon
                    :name="
                      wndSetItem.art.units == 1
                        ? 'fas fa-box'
                        : 'fas fa-puzzle-piece'
                    "
                  />
                  <div class="q-pl-sm">
                    {{ wndSetItem.art.units.name }}s
                    <span v-if="wndSetItem.art.units.id == 3">
                      ({{ wndSetItem.art.pieces }} pzs / caj)</span
                    >
                  </div>
                </div>
              </template>
            </q-input>
            <q-input
              label="notas"
              dark
              color="green-13"
              type="text"
              v-model="wndSetItem.notes"
            />
          </q-card-section>
          <q-card-actions align="around">
            <template v-if="duplicate">
              <q-btn
                v-if="deleteitem == 'ask'"
                @click="deleteitem = 'confirm'"
                dark
                flat
                color="pink-13"
                class="bg-none"
                icon="delete"
                :disable="wndSetItem.adding"
              />
              <q-btn
                v-else
                dark
                flat
                color="pink-13"
                @click="removeProduct"
                class="bg-none"
                :label="'eliminar ' + wndSetItem.art.code"
                :disable="erasing.state"
                :loading="erasing.state"
              />
            </template>
            <q-btn
              v-if="deleteitem == 'ask'"
              dark
              flat
              color="green-13"
              @click="addProduct"
              type="submit"
              class="bg-none"
              icon="done"
              :loading="wndSetItem.adding"
              :disable="wndSetItem.adding"
            />
            <q-btn
              v-else
              dark
              flat
              color="amber-13"
              class="bg-none"
              label="cancelar"
              @click="deleteitem = 'ask'"
            />
          </q-card-actions>
        </q-form>
      </q-card>
    </q-dialog>

    <q-dialog v-model="wndLog.state">
      <q-card
        v-if="wndLog.order"
        class="exo bg-darkl0 text-grey-5"
        style="width: 500px"
      >
        <q-card-section>
          <q-timeline dark color="green-13">
            <q-timeline-entry heading>
              {{ wndLog.order.from.alias }} {{ wndLog.order.id }}
            </q-timeline-entry>

            <q-timeline-entry
              v-for="log in wndLog.order.log"
              :key="log.id"
              :subtitle="log.details.responsable"
              :title="log.name"
            >
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
                    humantime(log.updated_at)
                  }}</span>
                </div>
                <div class="col row items-center">
                  <q-icon name="fas fa-stopwatch" color="blue-grey-7" />
                  <span class="text-white q-px-sm">{{ duration(log) }}</span>
                </div>
              </div>
            </q-timeline-entry>
          </q-timeline>
        </q-card-section>
      </q-card>
    </q-dialog>

    <q-dialog v-model="flagPrompt" persistent>
      <q-card class="exo bg-darkl0 text-white" style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">Nombre del archivo</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input
            dark
            dense
            color="green-13"
            v-model="saveNameExport"
            autofocus
            @keyup.enter="
              exportExcel;
              flagPrompt = !flagPrompt;
            "
          />
        </q-card-section>

        <q-card-actions align="right" class="text-green-13">
          <q-btn flat label="Cancelar" v-close-popup />
          <q-btn flat label="Descargar" @click="exportExcel" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-footer class="bg-darkl1 text-white" elevated v-if="order">
      <div class="q-pa-xs row justify-center items-center">
        <template v-if="order.products.length != 0">
          <div>
            <q-btn
              class="no-shadow"
              flat
              @click="flagPrompt = !flagPrompt"
              color="green-13"
              icon="fas fa-download"
            />
          </div>
        </template>
        <template v-if="order.status.id == 1">
          <div>
            <q-btn
              class="q-mr-sm no-shadow"
              flat
              @click="
                wndSelectSupply.wndDialogState = !wndSelectSupply.wndDialogState
              "
              color="green-13"
              icon="fas fa-upload"
            />
          </div>
          <!-- El pedido esta en captura -->
          <div class="col text-center">
            <ProductAutocomplete
              with_image
              with_prices
              with_stock
              @input="selItem"
              ref="comp_autocomplete"
            />
          </div>
          <div class="text-right">
            <q-btn
              v-show="products.length"
              flat
              color="green-13"
              label="terminar"
              @click="changeState()"
              :disable="nextstep.state"
              :loading="nextstep.state"
            />
            <input
              type="file"
              ref="blobfile"
              id="blobfile"
              @input="deliveryJSON"
              hidden
              accept=".xlsx,.xls"
            />
          </div>
        </template>

        <template v-else-if="order.status.id == 7"><!-- El pedido esta en camino -->
          <template v-if="!tostock.state">
            <span class="text-grey-4 q-pl-md">{{ order.status.name }}</span>
            <span>
              <q-btn flat color="green-13" icon="history" @click="showLog" />
              <q-btn
                flat
                color="green-13"
                icon="fas fa-people-carry"
                @click="tostock.state = true"
                v-if="owner"
              />
              <div></div>
            </span>
          </template>
          <template v-else>
            <span></span>
            <span>
              <!-- <q-btn flat color="green-13" label="validar"/> -->
              <q-btn
                flat
                color="green-13"
                label="Confirmar entrega"
                @click="changeState(10)"
              />
              <q-btn
                flat
                color="amber-13"
                label="cancelar"
                @click="tostock.state = false"
              />
            </span>
          </template>
        </template>

        <template v-else
          ><!-- El pedido puede mostrar el log -->
          <span class="text-grey-4 q-pl-md">{{ order.status.name }}</span>
          <q-btn flat color="green-13" icon="history" @click="showLog" />
        </template>

        <q-btn
          icon="print"
          flat
          color="green-13"
          v-if="order.printed"
          @click="reprint"
          :loading="print.state"
          :disable="print.state"
        />
      </div>
    </q-footer>
  </q-page>
</template>

<script>
import { date } from "quasar";
import dbproduct from "../../API/Product";
import ExcelJS from "exceljs";
import dbreqs from "../../API/requisitions";
import ProductAutocomplete from "../../components/Global/ProductAutocomplete.vue";
import saved from "file-saver";
export default {
  components: { ProductAutocomplete },
  data() {
    return {
      flagPrompt: false,
      saveNameExport: "",
      orderProd: [],
      flagDuplicate: false,
      messageDuplicate: "",
      filteringItems: undefined,
      flagFilter: false,
      ldrawer: { state: false },
      startremove: { state: false },
      flag: true,
      configToolbar: [],
      setupToolbar: {
        destiny: "",
        verify: "",
      },
      params: {
        id: "",
        data: Array,
      },
      seltypeunit: [
        { label: "cajas", value: 1 },
        { label: "piezas", value: 2 },
      ],
      products: [],
      order: undefined,
      iptsearch: {
        value: "",
        processing: false,
        type: "text",
        icon: "fas fa-hashtag",
      },
      wndSetItem: {
        state: false,
        adding: false,
        idxlist: undefined,
        art: undefined,
        units: 1,
        notes: "",
        unittype: undefined,
      },
      wndLog: {
        state: false,
        order: undefined,
      },
      deleteitem: "ask",
      erasing: { state: false },
      nextstep: { value: "ask", state: false },
      sounds: { moved: new Audio("sounds/moved.mp3") },
      archive: { state: false },
      tostock: { state: false },
      duplicate: false,
      print: { state: false },
      autocom: { model: null, options: undefined },
      tableproducts: {
        columns: [
          {
            name: "id",
            align: "left",
            label: "ID",
            field: "id",
            sortable: true,
          },
          {
            name: "code",
            align: "left",
            label: "Codigo",
            field: "code",
            sortable: true,
          },
          {
            name: "name",
            align: "center",
            label: "Codigo Corto",
            field: "name",
            sortable: false,
          },
          {
            name: "description",
            align: "center",
            label: "Description",
            field: "description",
            sortable: false,
          },
          {
            name: "cant",
            align: "center",
            label: "Cantidad",
            field: "cant",
            sortable: true,
          },
          {
            name: "pieces",
            align: "center",
            label: "PzsXCaj",
            field: "pieces",
            sortable: true,
          },
          {
            name: "stock",
            align: "center",
            label: "Disponibles",
            field: (row) => row.ordered.stock,
            sortable: true,
          },
          {
            name: "boxes",
            align: "center",
            label: "Cajas",
            field: "boxes",
            sortable: true,
          },
        ],
        filtrator: "",
        pagination: {
          descending: false,
          page: 1,
          rowsPerPage: 16,
        },
      },
      wndImportJSON: {
        state: false,
        wndGetRows: [],
        wndNoDataFound: [],
        wndTotal: [],
        wndGetAdded: [],
        _supply_by: 0,
      },
      wndSelectSupply: {
        wndDialogState: false,
        options: [
          {
            label: "Unidad",
            icon: "https://cdn-icons-png.flaticon.com/512/1524/1524855.png",
            value: 1,
          },
          {
            label: "Docena",
            icon: "https://cdn-icons-png.flaticon.com/512/541/541087.png",
            value: 2,
          },
          {
            label: "Caja",
            icon: "https://cdn-icons-png.flaticon.com/512/2979/2979677.png",
            value: 3,
          },
        ],
      },
      rsocket: this.$sktRestock,
    };
  },
  beforeDestroy() {
    this.$store.commit("Layout/showToolbarModule");
    this.rsocket.emit("leave", {
      room: this.socketroom,
      user: this.profile,
    });
    this.rsocket.off();
    console.log("desconectado del socket");
  },
  async mounted() {
    this.$store.commit("Requisitions/setHeaderState", false);
    this.$store.commit("Requisitions/setFooterState", false);

    this.params.id = this.$route.params.id;
    this.params.data = this.$route.params;
    // console.log(this.owner);
    this.$store.commit("Layout/hideToolbarModule");
    this.$q.loading.show({ message: "..." });
    this.order = await dbreqs.find(this.params.id);
    this.flagFilter = this.order.log.length >= 2 ? true : false;
    this.flag = this.order.status.id == 10 ? false : true;
    this.products = this.order.products;
    this.$q.loading.hide();

    this.setupToolbar.destiny = this.order.to.alias;
    this.setupToolbar.verify = this.order.id;
    this.saveNameExport = `FOLIO-${this.setupToolbar.verify}`;
  },
  methods: {
    sktOrderHere(data) {
      return this.params.id == data.order.id;
    },
    showLog() {
      this.wndLog.order = this.order;
      this.wndLog.state = true;
    },
    reprint() {
      console.log("reimprimiendo");
      let data = { _requisition: this.params.id };
      this.print.state = true;
      dbreqs
        .reprint(data)
        .then((success) => {
          console.log(success);
          this.print.state = false;
        })
        .catch((fail) => {
          console.log(fail);
        });
    },
    sktOrder_changeState(data) {
      console.log("Este pedido ha sido modificado por cedis");
      console.log(data.order.status);
      console.log(this.order.status);
      let _msg = "";
      let _icon = "";
      let _color = "";
      let showNotf = false;

      this.order.log = data.order.log;
      this.order.status = data.order.status;

      switch (data.order.status.id) {
        case 3:
          _msg = "Inició el surtido de este pedido";
          _icon = "fas fa-people-carry";
          _color = "blue-10";
          showNotf = true;
          break;
        case 5:
          _msg = "Inició la salida de este pedido";
          _icon = "fas fa-truck-moving";
          _color = "green-10";
          showNotf = true;
          break;
      }

      if (showNotf) {
        this.$q.notify({
          icon: _icon,
          color: _color,
          message: _msg,
          position: "bottom-right",
          html: true,
        });
        this.sounds.moved.play();
      }
    },
    changeState(_atstate = null) {
      let atstate = _atstate ? _atstate : parseInt(this.order.status.id) + 1;
      let data = { id: this.params.id, _status: atstate };
      let message = "";
      let newstatus = { id: atstate, name: undefined };

      switch (atstate) {
        case 2:
          console.log("Moviendo a por surtir");
          newstatus.name = "Por surtir";
          message = "Enviando pedido...";
          break;

        case 9:
          console.log("Moviendo a Terminados");
          newstatus.name = "Recibido";
          message = "Recibiendo y finalizando...";
          break;
      }
      dbreqs
        .nextstep(data)
        .then((success) => {
          console.log(
            "%cEl pedido ha cambiado de status...",
            "font-size:1.5em;color:yellow;"
          );
          let resp = success.data.updates;
          let newState = [];
          // debugger
          let newStateSend = undefined;
          newStateSend = resp.status;
          newState = this.order.log.concat(resp.log[0]);
          this.order.log = newState;
          this.order.status = newStateSend;
          // this.products = resp.order.products;
          this.$q.notify({
            color: "positive",
            icon: "done",
            position: "center",
          });
          this.rsocket.emit("order_changestate", {
            state: newStateSend,
            log: newState,
            user: this.profile,
            from: this.workin,
            order: this.order,
            room: this.socketroom,
          });
        })
        .catch((fail) => {
          console.error(fail);
        });
    },
    wndSetItemReset() {
      this.wndSetItem.idxlist = undefined;
      this.wndSetItem.art = undefined;
      this.wndSetItem.units = 1;
      this.wndSetItem.notes = "";
      this.wndSetItem.adding = false;
      this.deleteitem = "ask";
    },
    order_archive() {
      let data = { id: this.params.id, _status: 100 };

      this.$q.loading.show({ message: "Archivando pedido, espera..." });
      dbreqs
        .nextstep(data)
        .then((success) => {
          let resp = success.data;
          let newstatus = { id: 100, name: "Cancelado" };
          console.log(resp);
          this.order = resp.order;
          this.$q.loading.hide();
          this.$q.notify({
            message: "Pedido archivado",
            color: "positive",
            icon: "done",
            position: "center",
          });
          // this.$sktRestock.emit('order_changestate',{state:newstatus,profile:this.profile,order:this.order});
          this.rsocket.emit("order_changestate", {
            state: newstatus,
            user: this.profile,
            from: this.workin,
            order: this.order,
            room: this.socketroom,
          });
          this.$router.push("/pedidos");
        })
        .catch((fail) => {
          console.log(fail);
        });
    },
    removeProduct() {
      this.erasing.state = true;
      let data = {
        _product: this.wndSetItem.art.id,
        _requisition: this.params.id,
      };
      let proderase = this.wndSetItem.art.id;

      dbreqs
        .remove(data)
        .then((success) => {
          // let resp = success.data;
          this.products.splice(this.wndSetItem.idxlist, 1);
          this.erasing.state = false;
          this.wndSetItem.state = false;

          this.rsocket.emit("order_update", {
            user: this.profile,
            from: this.workin,
            cmd: "remove",
            order: this.params.data,
            product: proderase,
          });
        })
        .catch((fail) => {
          console.log(fail);
        });
    },
    addProduct() {
      this.wndSetItem.adding = true;
      this.filteringItems = "";

      let data = new Object();
      let product = this.wndSetItem.art;
      product.amount = this.wndSetItem.units;
      product.comments = this.wndSetItem.notes;

      data._product = product.id;
      data.amount = product.amount;
      data.comments = product.comments;
      data._requisition = this.params.id;

      dbreqs
        .add(data)
        .then((success) => {
          let artidx = this.wndSetItem.idxlist;
          let resp = success.data;
          let sktproduct = null;
          let cmd = null;

          if (artidx >= 0) {
            // el articulo fue editado
            console.log("Articulo editado");
            let _product = this.products[artidx];
            sktproduct = _product;
            _product.ordered.amount = this.wndSetItem.units;
            _product.ordered.comments = this.wndSetItem.notes;
            cmd = "edit";
            this.flagDuplicate = false;
          } else {
            console.log("Articulo agregado");
            console.log(resp);
            this.products.unshift(resp);
            cmd = "add";
            sktproduct = resp;
          } // el articulo fue agregado

          this.wndSetItem.state = false;
          this.autocom.options = undefined;
          this.autocom.model = null;

          this.rsocket.emit("order_update", {
            user: this.profile,
            from: this.workin,
            cmd: cmd,
            order: this.params.data,
            product: sktproduct,
          });
        })
        .catch((fail) => {
          console.log(fail);
        });
    },
    async selItem(opt, id) {
      console.log(opt);
      let ids = opt.code;
      // console.log(ids);
      await this.getOrder(ids);
      let units = this.orderProd;
      console.log(units);
      opt = Object.assign(opt, units);
      let idx = this.products.findIndex((item) => {
        return opt.id == item.id;
      });
      // id = opt.code;
      console.log(idx);

      if (idx >= 0) {
        // el producto ya esta en la lista
        if (id == 2) {
          this.wndSetItem.state = true;
          // this.filteringItems = '';
        } else {
          this.flagDuplicate = !this.flagDuplicate;
          this.messageDuplicate =
            "Haz seleccionado este producto dos veces, te sugiero que ingreses la cantidad correcta.";
          this.filteringItems = opt.code;
          console.log(this.filteringItems);
        }

        console.log("Editando producto");
        let art = this.products[idx];
        this.duplicate = !this.duplicate;
        this.wndSetItem.notes = art.ordered.comments;
        this.wndSetItem.units = art.ordered.amount;
        this.wndSetItem.idxlist = idx;
        this.wndSetItem.art = art;
        // this.wndSetItem.state = true
      } else {
        // agregar nuevo producto
        console.log("Agregando producto...");
        this.duplicate = false;
        this.wndSetItem.art = opt;
        this.wndSetItem.state = true;
        this.filteringItems = "";
      }
      // this.flagDuplicate = this.flagDuplicate ? this.wndSetItem.state = true : this.wndSetItem.state = false;
    },
    toogleIptSearch() {
      switch (this.iptsearch.type) {
        case "text":
          this.iptsearch.type = "number";
          this.iptsearch.icon = "fas fa-font";
          break;
        case "number":
          this.iptsearch.type = "text";
          this.iptsearch.icon = "fas fa-hashtag";
          break;
      }

      this.$refs.iptsearch.focus();
    },
    async getOrder(val) {
      let data = { params: { code: val } };
      await dbproduct
        .autocompleteGET(data)
        .then((success) => {
          let resp = success.data;
          let idx = resp.findIndex((idx) => idx.code == val);
          console.log(resp[idx]);
          this.orderProd = resp[idx];
        })
        .catch((fail) => {
          console.log(fail);
        });
      // console.log(this.orderProd);
    },
    triggerInputFile() {
      this.$refs.blobfile.click();
    },
    async deliveryJSON() {
      this.$q.loading.show({ message: "Procesando archivo, espera..." });
      let inputFile = document.getElementById("blobfile").files[0];
      let workbook = new ExcelJS.Workbook();

      workbook.xlsx.load(inputFile).then(() => {
        let worksheet = workbook.worksheets[0];
        let typeA = worksheet.getColumn("A");
        let extractTypeA = [];
        let extractTypeB = [];
        let extractJSON = [];
        typeA.eachCell({ includeEmpty: true }, function (cell, rowNumber) {
          cell.value ? extractTypeA.push(cell.value) : null;
        });
        let typeB = worksheet.getColumn("B");
        typeB.eachCell({ includeEmpty: true }, function (cell, rowNumber) {
          cell.value ? extractTypeB.push(cell.value) : null;
        });
        
        let diference = extractTypeA.filter((item, pos, self) => {
          return self.indexOf(item) == pos;
        });

        for (let i = 0; i < diference.length; i++) {
          let order = {
            code: diference[i],
            amount: extractTypeA[i] == diference[i] ? extractTypeB[i] : 1,
          };
          extractJSON.push(order);
        }

        let convert = extractTypeA.length - diference.length;

        if (diference.length != extractTypeA.length) {
          // this.wndImportJSON.state = false;
          this.flagDuplicate = !this.flagDuplicate;
          this.messageDuplicate =
            `Durante el análisis nos percatamos de ${convert == 1 ? `un folio` : convert + ` folios`} duplicados. Los retiramos para el proceso de subida de información, sin embargo le recomendamos revisar sus archivos antes de subirlos.`;
          
        } 
        
        let data = {
          _requisition: this.setupToolbar.verify,
          products: extractJSON,
          _supply_by: this.wndImportJSON._supply_by,
        };
        console.log(data);
        

        // HABILITAR BOTON DE LIMPIAR / REMOVER FOLIOS

        dbreqs
          .addMasive(data)
          .then((success) => {
            console.log(success.data);
            let data = [];
            data = success.data;
            for (let i = 0; i < data.notFound.length; i++) {
                this.wndImportJSON.wndNoDataFound.push(data.notFound[i]);
              }
              this.wndImportJSON.wndTotal = extractJSON.length;
              this.wndImportJSON.wndGetRows = data.added.length;
              this.wndImportJSON.state = !this.wndImportJSON.state;
              this.wndImportJSON.wndGetAdded = data.added;
              this.wndImportJSON.wndGetAdded.map((item) => {
                this.products.push(item);
              });
          })
          .catch((log) => {
            console.log(log);
          });

        this.$q.loading.hide();
        document.getElementById("blobfile").value = "";
        // console.log(extractJSON.length);
        // console.log(this.setupToolbar.verify);
      });
    },
    exportExcel() {
      let workbook = new ExcelJS.Workbook();
      let worksheet = workbook.addWorksheet("My Sheet");

      worksheet.columns = [
        { header: "", key: "code", width: 15 },
        { header: "", key: "cajas", width: 10 },
      ];

      // console.log(this.products);
      for (let i = 0; i < this.products.length; i++) {
        worksheet.addRow({
          code: this.products[i].code,
          cajas: this.products[i].boxes,
        });
      }
      // this.flagPrompt = !this.flagPrompt;
      // console.log(this.saveNameExport)
      let name = this.saveNameExport;
      console.log(name);
      this.appsounds.download.play();
      // save under export.xlsx
      workbook.xlsx.writeBuffer().then((buffer) => {
        saved(
          new Blob([buffer], { type: "application/octet-stream" }),
          `${name}.xlsx`
        );
      });
      this.saveNameExport = `FOLIO-${this.setupToolbar.verify}`;
    },
    setSupplyTarget(value) {
      console.log(value);
      this.wndImportJSON._supply_by = value;
      this.wndSelectSupply.wndDialogState =
        !this.wndSelectSupply.wndDialogState;
      this.triggerInputFile();
    },
    emptyOrder() {
      // let data = {
      //   _product: this.wndSetItem.art.id,
      //   _requisition: this.params.id,
      // };
      this.$q.loading.show({ message: "Removiendo datos, espera..." });
      console.log(this.products);
      let articles = this.products.length - 1;
      this.ldrawer.state = !this.ldrawer.state;
      do {
        this.wndSetItem.art = this.products[articles];
        this.removeProduct();
        articles--;
      } while (articles >= 0);
      this.$q.loading.hide();
      // console.log(this.params.id);
    }
  },
  computed: {
    appsounds() {
      return this.$store.getters["Multimediapp/sounds"];
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
      // console.log(this.products);
      return this.products.map((item) => {
        item.pieces = item.pieces;
        item.boxes = item.ordered.amount;
        return item;
      });
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
    editableord() {
      if (this.order) {
        return this.order.status.id == 1 ? true : false;
      }
      return false;
    },
    ordersize() {
      if (this.order) {
        let sizeprod = this.products.length;
        if (sizeprod) {
          let labelpzs = this.products.reduce((ammount, item) => {
            return parseInt(item.ordered.amount) + ammount;
          }, 0);
          return [sizeprod, labelpzs];
        }
        return [0, 0];
      } else {
        return [0, 0];
      }
    },
    humantime() {
      return (time) => {
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
    owner() {
      return this.order
        ? this.order.created_by.id == this.profile.me.id
        : false;
    },
    // isduplicate(){ return code => { this.products.findIndex(item=>{return item.code==code}) } }
    isduplicate() {
      return (code) => {
        return (
          this.products.findIndex((item) => {
            return item.code == code;
          }) >= 0
        );
      };
    },
  },
};
</script>

<style lang="scss" scoped>
._optact {
  background: saddlebrown !important;
  color: white;
}
.fieldcant {
  width: 120px;
  padding: none;
  margin: none;
  font-size: 1.8em;
  background: none;
  outline: greenyellow;
  color: white;
  margin: auto auto;
  border: none;

  &:focus {
    background: rgba(#fff, 0.06);
  }
}

.divimg {
  width: 140px;
  height: 140px;
}

.divlcient {
  border-radius: 0px 0px 20px 20px;
}

.card-action {
  border: 0 solid;
  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);
  outline: 1px solid;
  outline-color: rgba(0, 255, 157, 0.5);
  outline-offset: 0px;
  text-shadow: none;
  transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);
}

.card-action:hover {
  border: 1px solid;
  // box-shadow: inset 0 0 20px rgba(255, 255, 255, .5), 0 0 20px rgba(255, 255, 255, .2);
  outline-color: rgba(255, 255, 255, 0);
  outline-offset: 15px;
  text-shadow: 1px 1px 2px #427388;
}
</style>