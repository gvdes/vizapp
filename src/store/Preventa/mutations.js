
export function startState (state,data) {
    state.orders = data.orders;
    state.printers = data.printers;
    state.process = data.status;
    
    localStorage.setItem("printers",JSON.stringify(data));
}

export function newOrder(state, order){
	console.log(`%cOrden ${order.id} creada!`,"background:#3ae374;color:#3d3d3d;border-radius:10px;padding:6px;");
    state.orders.push(order);
}

export function updateState(state, { order, newstate }){
    console.log(`Buscando orden ${order.id} para actualizarla...`);
    let idx = state.orders.findIndex( ord => order.id == ord.id);
    console.log(idx);
    state.orders[idx].status = newstate;
}

export function setHeaderTitle(state,title){ state.layout.header.title = title; }

export function setHeaderState(state,newstate){ state.layout.header.state = newstate; }

export function setFooterState(state,newstate){ state.layout.footer.state = newstate; }