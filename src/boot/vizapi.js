import Vue from 'vue'
import axios from 'axios'

// ❰❰❰❰❰ P R U E B A S ❱❱❱❱❱
const URLBackend = 'http://mx100-cedis-vtbbdhgjzk.dynamic-m.com:4544/public';
const URLFiles = 'http://mx100-cedis-vtbbdhgjzk.dynamic-m.com:4544/files';

// const URLBackend = 'http://192.168.10.12/vizapi/public';
// const URLFiles = 'http://192.168.10.12/vizapi/files';

const vizapi = axios.create({ baseURL: URLBackend });

// para usar dentro de componentes
Vue.prototype.$vizapi = vizapi;
Vue.prototype.$routefiles = URLFiles;

// para usar dentro de archivos JS
export { vizapi }