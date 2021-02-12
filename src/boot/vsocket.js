import Vue from 'vue'

// const vsocket_route = 'http://192.168.1.86:45174';
// const routefiles = 'http://192.168.1.86/files';

const routefiles = 'http://vizappdev.grupovizcarra.net:7001/vizapidev/files';
const vsocket_route = 'http://vsocket.grupovizcarra.net:45174';

Vue.prototype.$vsocket = vsocket_route;
Vue.prototype.$routefiles = routefiles;