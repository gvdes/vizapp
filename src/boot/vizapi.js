import Vue from 'vue'
import axios from 'axios'

const vizapi = axios.create({
    // baseURL: 'http://vizapp.grupovizcarra.net:7001/vizapi/public',// build production
    // baseURL: 'http://vizappdev.grupovizcarra.net:7001/vizapidev/public',// build test
    baseURL: 'http://192.168.1.243/vizapi/public',//dev
});
// para usar dentro de componentes
Vue.prototype.$vizapi = vizapi

// para usar dentro de archivos JS
export { vizapi }

// e05bb0518ebae5553150c6f530c7ba94
// cb66e747bb8f72cca7fbe930514bd3ab

/**
 * 
 * 
 *  SELECT * FROM `tkt_order_head`
 *  WHERE (toh_uskey like "e05bb0518ebae5553150c6f530c7ba94" OR toh_uskey LIKE "cb66e747bb8f72cca7fbe930514bd3ab")
 *  AND toh_start > "2020-11-08 10:00:00"
 * 
 * 
 */