import Vue from 'vue'
import axios from 'axios'

// const URLBackend = 'http://192.168.10.112:1619/vizapi/public/';
// const URLFiles = 'http://192.168.10.112:1619/vizapi/files/';

const localBackend = 'http://192.168.62.159/vizapi/public/';
const localFiles = 'http://192.168.62.159/vizapi/files/';

const URLBackend = 'http://192.168.62.159/vizapi/public/';
const URLFiles = 'http://192.168.62.159/vizapi/files/';

// ❰❰❰❰❰ P R O D U C C I O N   O U T ❱❱❱❱❱
// const URLBackend = 'http://mx100-cedis-mkrqpwcczk.dynamic-m.com:4547/vizapi/public';
// const URLFiles = 'http://mx100-cedis-mkrqpwcczk.dynamic-m.com:4547/vizapi/files';

// ❰❰❰❰❰ P R O D U C C I O N  I N  P U E B L A❱❱❱❱❱
// const URLBackend = 'http://192.168.90.253:1619/vizapi/public/';
// const URLFiles = 'http://192.168.90.253:1619/vizapi/files/';

const vizapi = axios.create({ baseURL: URLBackend });
const local = axios.create({ baseURL: localBackend });


// para usar dentro de componentes
Vue.prototype.$vizapi = vizapi;
Vue.prototype.$local = local;
Vue.prototype.$routefiles = URLFiles;

// para usar dentro de archivos JS
export { vizapi, local }
