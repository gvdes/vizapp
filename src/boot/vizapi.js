import Vue from 'vue'
import axios from 'axios'

// ❰❰❰❰❰ O U T   T E S T ❱❱❱❱❱
// const URLBackend = 'http://mx100-cedis-vtbbdhgjzk.dynamic-m.com:4544/public';
// const URLFiles = 'http://mx100-cedis-vtbbdhgjzk.dynamic-m.com:4544/files';

const URLBackend = 'http://192.168.10.12/vizapi_master/public';
const URLFiles = 'http://192.168.10.12/vizapi_master/files';

// ❰❰❰❰❰ P R O D U C C I O N  OUT❱❱❱❱❱
// const URLBackend = 'http://mx100-cedis-vtbbdhgjzk.dynamic-m.com:4547/vizapi_master/public';
// const URLFiles = 'http://mx100-cedis-vtbbdhgjzk.dynamic-m.com:4547/vizapi_master/files';

// ❰❰❰❰❰ P R O D U C C I O N  IN❱❱❱❱❱
// const URLBackend = 'http://192.168.10.15/vizapi_master/public';
// const URLFiles = 'http://192.168.10.15/vizapi_master/files';

// ❰❰❰❰❰ P R O D U C C I O N  I N  P U E B L A❱❱❱❱❱
// const URLBackend = 'http://192.168.90.253:1619/vizapi/public/';
// const URLFiles = 'http://192.168.90.253:1619/vizapi/files/';

const vizapi = axios.create({ baseURL: URLBackend });

// para usar dentro de componentes
Vue.prototype.$vizapi = vizapi;
Vue.prototype.$routefiles = URLFiles;

// para usar dentro de archivos JS
export { vizapi }