
export function startState (state,data) {
    let descriptions = {
        1:{ on:'',off:''},
        2:{ on:'',off:''},
        3:{
            on:'Los pedidos esperan en el proceso de "CheckIn".',
            off:'Los pedidos llegan a Bodega.'
        },
        4:{
            on:'Los pedidos esperaran la asistencia del personal de Bodega para iniciar proceso de surtido.',
            off:'El sistema asignara al personal responsable del surtido, y se iniciara el proceso de surtido.'
        },
        5:{ on:'',off:''},
        6:{ on:'',off:''},
        7:{
            on:'Los pedidos llegarán a validación y se insertaran en Factusol',
            off:'Los pedidos deberan de capturarse en caja.'
        },
        8:{ on:'',off:''},
        9:{ on:'',off:''},
    }

    state.orders = data.index.orders;
    state.printers = data.index.printers;
    state.agents = data.agents.map( ag => { ag.rt={cnx:false,id:null}; return ag; });
    state.process = data.index.status.map( state => {
        state.state = state.active ? true:false;
        state.descs = descriptions[state.id];
        return state;
    });
    state.cashdesks = data.index.cash_register;
    
    localStorage.setItem("printers",JSON.stringify(data));
}

export function setState(state, newstate){
    let idx = state.process.findIndex( state => state.id == newstate.id );
    state.process[idx].state = !state.process[idx].state;
}

export function setCashState(state, data){
    let idx = state.cashdesks.findIndex( cash => cash.id == data.cash.id );
    state.cashdesks[idx].status = data.newstate;
}

export function newOrder(state, order){
	// console.log(`%cOrden ${order.id} creada!`,"background:#3ae374;color:#3d3d3d;border-radius:10px;padding:6px;");
    state.orders.push(order);
}

export function updateState(state, { order, newstate }){
    // console.log(order);
    let idx = state.orders.findIndex( ord => order.id == ord.id);
    // console.log(idx);
    state.orders[idx].status = newstate;
    state.orders[idx].updated_at = newstate.created_at;
}

export function setHeaderTitle(state,title){ state.layout.header.title = title; }

export function setHeaderState(state,newstate){ state.layout.header.state = newstate; }

export function setFooterState(state,newstate){ state.layout.footer.state = newstate; }

export function setViewSection(state,newstate){ state.layout.viewsection = newstate; }

export function setStatusSktUser(state,data){
    let iduser = data.id;
    let _state = data.state;
    let idx = state.agents.findIndex(ag => ag.id==iduser);

    idx<0 ? null : state.agents[idx].rt.cnx = _state ;
}

export function orderAOU(state, data){
    let order = data.order;

    let idx = state.orders.findIndex( o => o.id == order.id);
    
    if(idx>=0){
        console.log("El pedido EXISTE, hay que ACTUALIZARLO!!");
        state.orders[idx].status = data.newstate;
        state.orders[idx].updated_at = data.newstate.created_at;
    }else{
        console.log("El pedido NO existe, hay que AGREGARLO!!");
        state.orders.push(order);
    }
}

