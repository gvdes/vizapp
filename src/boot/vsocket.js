import Vue from 'vue'

const vsocket_route = 'http://192.168.1.243:45174';
// const vsocket_route = 'http://vsocket.grupovizcarra.net:8585';

Vue.prototype.$vsocket = vsocket_route;