
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
            on:'Los pedidos esperaran a confirmar el inicio del proceso de validación.',
            off:'Los pedidos se enviran directamente a caja.'
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
    
    localStorage.setItem("printers",JSON.stringify(data));
}

export function setState(state, newstate){
    let idx = state.process.findIndex( state => state.id == newstate.id );
    console.log(idx);

    state.process[idx].state = !state.process[idx].state;
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

export function setViewSection(state,newstate){ state.layout.viewsection = newstate; }

export function setStatusSktUser(state,data){
    let iduser = data.id;
    let _state = data.state;
    let idx = state.agents.findIndex(ag => ag.id==iduser);

    idx<0 ? null : state.agents[idx].rt.cnx = _state ;
}