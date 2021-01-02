import Vue from 'vue'

// const vsocket_route = 'http://192.168.1.250:7171';
// const routefiles = 'http://192.168.1.250/files';

const routefiles = 'http://vizappdev.grupovizcarra.net:7001/vizapidev/files';
const vsocket_route = 'http://vsocket.grupovizcarra.net:7171';

Vue.prototype.$vsocket = vsocket_route;
Vue.prototype.$routefiles = routefiles;

/**
 * 
 * reporte de los productos que menos se hayan vendido de 15 dias hacia atras..
 * creo que lo mejor seria de inicio de mes a hoy
 * 
 */