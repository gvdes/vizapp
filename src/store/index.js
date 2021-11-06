import Vue from 'vue'
import Vuex from 'vuex'

import Account from './Account'
import Warehouse from './Warehouse'
import Layout from './Layout'
import Preventa from './Preventa'
import Multimediapp from './Multimediapp'
import Labels from "./Labels"
import Requisitions from './Requisitions'
import Printers from './Printers'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      Account,
      Warehouse,
      Layout,
      Preventa,
      Multimediapp,
      Requisitions,
      Labels,
      Printers
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })

  return Store
}
