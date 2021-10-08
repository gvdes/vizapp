export function startState(state, data) {
    state.orders = data.requisitions;
    state.printers = data.workpoints;
    state.process = data.status;
}

export function newOrder(state, order) {
    console.log(`%cOrden ${order.id} creada!`, "background:#3ae374;color:#3d3d3d;border-radius:10px;padding:6px;");
    state.orders.push(order);
}

export function updateState(state, { order, newState }) {
    console.log(order);
    console.log(`Buscando orden ${order.id} para actualizarla...`);
    // debugger
    let idx = state.orders.findIndex(ord => order.id == ord.id);
    console.log(idx);
    // debugger
    state.orders[idx].status = newState.state;
    state.orders[idx].log = newState.log;
    // state.orders[idx].log = newStateLog;
}

export function setHeaderTitle(state, title) {
    state.layout.header.title = title;
}

export function setHeaderState(state, newState) {
    state.layout.header.state = newState;
}

export function setFooterState(state, newState) {
    state.layout.footer.state = newState;
}