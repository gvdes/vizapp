import Vue from 'vue'
import axios from 'axios'

const vizapi = axios.create({
    baseURL: 'http://vizappdev.grupovizcarra.net:7001/vizapidev/public',// build test
    // baseURL: 'http://192.168.1.243/public',//1dev
    // baseURL: 'http://192.168.1.241/vizapi/public',//bebe
    
});
// para usar dentro de componentes
Vue.prototype.$vizapi = vizapi

// para usar dentro de archivos JS
export { vizapi }

// 5611384154 lore vlme 