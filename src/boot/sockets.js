import { io } from "socket.io-client";

// const URLSocket = 'http://192.168.12.183:4141';
// const URLSocket = 'http://192.168.10.189:4444';
// const URLSocket = 'http://vizuru-cedis-cjvmhnwzgk.dynamic-m.com:4141';
const URLSocket = 'http://vizuru-cedis-cjvmhnwzgk.dynamic-m.com:4141';
// const URLSocket = 'http://10.20.10.21:4141';


// const URLSocket = 'http://mx100-cedis-mkrqpwcczk.dynamic-m.com:4548';
// const URLSocket = 'http://localhost:7171/';

/**
 * remotive.io
 *
 */

export default ({ Vue }) => {

	let profile = JSON.parse(localStorage.getItem('profile'));

	Vue.prototype.$vSocket = io(`${URLSocket}`, { autoConnect: false });
	Vue.prototype.$sktCounters = io(`${URLSocket}/counters`, { autoConnect: false });
	Vue.prototype.$sktPreventa = io(`${URLSocket}/preventa`, { autoConnect: false });
	Vue.prototype.$sktRestock = io(`${URLSocket}/resurtidos`, { autoConnect: false });

	console.log("%cInstancias de socket listas para conexion: (boot/sockets.js)","font-size:1.2em;background:#58B19F;border-radius:10px;color:white;padding:5px;");
	// console.log(session);

	if(profile){
		if(Vue.prototype.$vSocket.disconnected){
			Vue.prototype.$vSocket.connect();
			// Vue.prototype.$sktPreventa.connect();
			// Vue.prototype.$vSocket.on('socketid', data => {
			console.log(`%cUnido al canal global (by bootfile)`,"background:#1B9CFC;color:white;border-radius:10px;padding:6px;");
			// 	Vue.prototype.$vSocket.emit('session_start',{profile,socketid:data.socketid,from:workin});
			// });
		}
	}else{ console.log("%cNo hay sesion activa, union a socket cancelada","background:#F97F51;color:#2C3A47;border-radius:10px;padding:6px;"); }
}
