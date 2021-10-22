export function startState(state, data) {
    state.orders = data.requisitions;
    state.printers = data.workpoints;
    state.process = data.status;
}

export function newOrder(state, order) {
    console.log(`%cOrden ${order.id} creada!`, "background:#3ae374;color:#3d3d3d;border-radius:10px;padding:6px;");
    state.orders.push(order);
}

export function todayState(state, newState) {
    state.today = newState;
}

export function printed(state, order) {
    let idx = state.orders.findIndex(ord => order.id == ord.id);
    state.orders[idx].printed += 1;
}

export function updateState(state, { order, newState }) {
    console.log(order);
    console.log(`Buscando orden ${order.id} para actualizarla...`);
    // debugger
    let idx = state.orders.findIndex(ord => order.id == ord.id);
    console.log(idx);
    // debugger
    if (idx != -1) {
        state.orders[idx].status = newState.state;
        state.orders[idx].log = newState.log;
    }

    // state.orders[idx].log = newStateLog;
}

export function getCleanDuplicates(state, order) {
    let hash = [];
    let duplicate = order.log.map((idx, id) => { return idx.id == 2 ? hash.push(id) : "" });
    hash = hash.filter((item) => item != 1);
    let idx = state.orders.findIndex(ord => order.id == ord.id);
    state.orders[idx].log = state.orders[idx].log.filter((item, id) => !hash.includes(id))
}

export function getAllCleanDuplicates(state, orders) {
    for (let i = 0; i < orders.length; i++) {
        let hash = [];
        let duplicate = orders[i].log.map((idx, id) => { return idx.id == 2 ? hash.push(id) : "" });
        hash = hash.filter((item) => item != 1);
        state.orders[i].log = state.orders[i].log.filter((item, id) => !hash.includes(id));
    }
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