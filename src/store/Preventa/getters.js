export function OrdersWarehouse (state) {
    // devuelve las ordenes que estan por surtir o surtiendo
    return state.orders.filter( order => order.status.id==4 || order.status.id==5);
}

export function OrdersCheckIn (state) {
    // devuelve las ordenes que estan en checkin
    return state.orders.filter( order => order.status.id==3 );
}

export function OrdersCheckout (state) {
    // devuelve las ordenes que estan en checkin
    return state.orders.filter( order => (order.status.id>=5 && order.status.id<=8) );
}

export function process (state){
    // devuelve los status disponibles de la aplicacion;
    return state.process;
}

export function printers (state){
    // devuelve todas las impresoras de la sucursal;
    return state.printers.map( group => group.printers ).flat();
}

export function printersSale(state){
    return state.printers.length ? state.printers.find( group => group.id == 1).printers : [];
}

export function printersWarehouse(state){
    return state.printers.length ? state.printers.find( group => group.id == 2).printers : [];
}

export function agents_orders(state){
    return state.agents.map(agent => {
        agent.orders = state.orders.filter( ord => agent.profile.id == ord.created_by.id );
        agent.ordersize = agent.orders.length;
        return agent;
    });
}

export function cashdesks(state){
    return state.cashdesks;
}

export function keepProcess(state){
    return id => { return state.process.length ? state.process.find( p => p.id == id ).state : false; }
}