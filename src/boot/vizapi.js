import Vue from 'vue'
import axios from 'axios'
import { io } from "socket.io-client";

// ❰❰❰❰❰ P R U E B A S ❱❱❱❱❱
// const URLBackend = 'http://mx100-cedis-vtbbdhgjzk.dynamic-m.com:4544/public';
// const URLFiles = 'http://mx100-cedis-vtbbdhgjzk.dynamic-m.com:4544/files';

const URLBackend = 'http://192.168.10.12/vizapi/public';
const URLFiles = 'http://192.168.10.12/vizapi/files';

// ❰❰❰❰❰ P R O D U C C I O N ❱❱❱❱❱
// const URLBackend = 'http://mx100-cedis-vtbbdhgjzk.dynamic-m.com:4547/vizapidev/public';
// const URLFiles = 'http://mx100-cedis-vtbbdhgjzk.dynamic-m.com:4547/vizapidev/files';
// const URLSocket = 'http://mx100-cedis-vtbbdhgjzk.dynamic-m.com:4548';




const vizapi = axios.create({ baseURL: URLBackend });

// para usar dentro de componentes
Vue.prototype.$vizapi = vizapi;
Vue.prototype.$routefiles = URLFiles;

// para usar dentro de archivos JS
export { vizapi }