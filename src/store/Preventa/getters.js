
export function OrdersWarehouse (state) {
    // devuelve las ordenes que estan por surtir o surtiendo
    return state.orders.filter( order => order.status.id==4 || order.status.id==5);
}

export function OrdersCheckIn (state) {
    // devuelve las ordenes que estan en checkin
    return state.orders.filter( order => order.status.id==3 );
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
