import { startState } from "../Preventa/mutations";

export function ordersRequisitions(state) {
    return (by) => {
        let storage = by ? by.value : {};
        return state.orders.filter(order => { return order.from.id == storage });
    }
}

export function getIDX(state) {
    return (order) => {
        // console.log(order);
        console.log(`Buscando orden ${order.id} para devolverla...`);
        // debugger
        let idx = state.orders.findIndex(ord => order.id == ord.id);
        // console.log(idx);
        return idx;
    }
}

export function getOrders(state) {
    return state.orders;
}

export function ordersDash(state){
    return state.orders_in;
}

export function getStates(state) {
    return state.process;
}

export function ordersCheckIn(state) {
    return state.orders.filter(order => { order.status.id == 3 });
}

export function printers(state) {
    return state.printers.map(mapingState => { mapingState.printers }).flat();
}

export function printersSale(state) {
    return state.printers.length ? state.printers.find(group => { group.id == 1 }).printers : [];
}

export function printersRequisition(state) {
    return state.printers.length ? state.printers.find(group => { group.id == 2 }).printers : [];
}
