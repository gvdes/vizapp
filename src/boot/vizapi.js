import Vue from 'vue'
import axios from 'axios'

// const URLBackend = 'http://192.168.10.112:1619/vizapi/public/';
// const URLFiles = 'http://192.168.10.112:1619/vizapi/files/';

const URLBackend = 'http://192.168.10.189/vizapi/public/';
const URLFiles = 'http://192.168.10.189/vizapi/files/';

// const URLBackend = 'http://192.168.10.160:1619/vizapi/public/';
// const URLFiles = 'http://192.168.10.160:1619/vizapi/files/';

// const URLBackend = 'http://192.168.10.238:2314/vizapi/public/';
// const URLFiles = 'http://192.168.10.238:2314/vizapi/files/';



// ❰❰❰❰❰ P R O D U C C I O N   O U T ❱❱❱❱❱
// const URLBackend = 'http://mx100-cedis-mkrqpwcczk.dynamic-m.com:4547/vizapi/public';
// const URLFiles = 'http://mx100-cedis-mkrqpwcczk.dynamic-m.com:4547/vizapi/files';

// ❰❰❰❰❰ P R O D U C C I O N  I N  P U E B L A❱❱❱❱❱
// const URLBackend = 'http://192.168.90.253:1619/vizapi/public/';
// const URLFiles = 'http://192.168.90.253:1619/vizapi/files/';

const vizapi = axios.create({ baseURL: URLBackend });

// para usar dentro de componentes
Vue.prototype.$vizapi = vizapi;
Vue.prototype.$routefiles = URLFiles;

// para usar dentro de archivos JS
export { vizapi }
