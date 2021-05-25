import Vue from 'vue'
import axios from 'axios'
import { io } from "socket.io-client";

// ❰❰❰❰❰ D E S A R R O L L O ❱❱❱❱❱
// const URLBackend = 'http://192.168.1.243/public';
// const URLFiles = 'http://192.168.1.243:7171';
// const URLSocket = 'http://192.168.1.247/files';

// ❰❰❰❰❰ P R O D U C C I O N ❱❱❱❱❱
// const URLBackend = 'http://vizappdev.grupovizcarra.net:7001/vizapidev/public';
// const URLFiles = 'http://vizappdev.grupovizcarra.net:7001/vizapidev/files';
// const URLSocket = 'http://vsocket.grupovizcarra.net:7171';

// ❰❰❰❰❰ P R U E B A S ❱❱❱❱❱
const URLBackend = 'http://vizappdev.grupovizcarra.net:6001/vizapi/public';
const URLFiles = 'http://vizappdev.grupovizcarra.net:6001/vizapi/files';
const URLSocket = 'http://vsocket.grupovizcarra.net:7777';

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