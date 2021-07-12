import Vue from 'vue'
import axios from 'axios'
import { io } from "socket.io-client";

// ❰❰❰❰❰ P R U E B A S ❱❱❱❱❱
const URLBackend = 'http://mx100-cedis-vtbbdhgjzk.dynamic-m.com:4544/public';
const URLFiles = 'http://mx100-cedis-vtbbdhgjzk.dynamic-m.com:4544/files';
const URLSocket = 'http://mx100-cedis-vtbbdhgjzk.dynamic-m.com:4539';


// ❰❰❰❰❰ P R O D U C C I O N ❱❱❱❱❱
// const URLBackend = 'http://mx100-cedis-vtbbdhgjzk.dynamic-m.com:4547/vizapidev/public';
// const URLFiles = 'http://mx100-cedis-vtbbdhgjzk.dynamic-m.com:4547/vizapidev/files';
// const URLSocket = 'http://mx100-cedis-vtbbdhgjzk.dynamic-m.com:4548';

// ❰❰❰❰❰ D E S A R R O L L O ❱❱❱❱❱
// const URLBackend = 'http://192.168.1.144/vizapi/public';
// const URLFiles = 'http://192.168.1.144/vizapi/files';
// const URLSocket = 'http://192.168.1.228:7171';


const vizapi = axios.create({ baseURL: URLBackend });

// conexion a socket y rooms
Vue.prototype.$sktCounters = io(`${URLSocket}/counters`, { autoConnect: false });
Vue.prototype.$sktPreventa = io(`${URLSocket}/preventa`, { autoConnect: false });
Vue.prototype.$sktRestock = io(`${URLSocket}/resurtidos`, { autoConnect: false });

// para usar dentro de componentes
Vue.prototype.$vizapi = vizapi;
Vue.prototype.$routefiles = URLFiles;

// para usar dentro de archivos JS
export { vizapi }