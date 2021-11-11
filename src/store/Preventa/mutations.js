
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

    state.orders = data.index.orders; //almacena las ordenes que viene de la BDD
    // state.agents = data.agents;// almacena los perfiles de los vendedores
    
     // Obtengo todos los perfiles de los pedidos obtenidos (incluyen los repetidos)
    let listProfilesInit = state.orders.map( o => o.created_by );
    // obtengo los ids unicos de la lista de perfiles
    // let idsinorders = listProfilesInit.map( p => p.id);

    // console.log("Ids de todos los perfiles en los pedidos");
    // console.log(idsinorders);

    // Distingo los perfiles unicos obtenidos de los pedidos mediante el id del perfil
    // console.log("ids unicos de Perfiles de los pedidos ");
    let idProfiles = [...new Set( listProfilesInit.map(p => p.id) )];
    // console.log(idProfiles);

    // Obtengo los ids de los agentes que la sucursal tiene asignada
    // console.log("ids de Perfiles asignados en la sucursal");
    let agInBr = data.agents.map( a => a.id );
    // console.log(agInBr);

    // Junto ambos ids de perfiles para obtener un solo conjunto
    // console.log("union de los perfiles via ID en sucursal+pedidos para obtener los que estan en tienda y los que no");
    let allids = agInBr.concat(idProfiles);
    // console.log(allids);

    // Obtengo los ids unicos de la lista de perfiles completa (elimino ids repetidos)
    // console.log("Perfiles unicos de la union de ids en sucursal+pedidos");
    let allunicids = [...new Set(allids)];
    // console.log(allunicids);

    // Construir perfiles+pedidos para crear lista de usuarios en sucursal
    state.agents = allunicids.map( pid => {
        
        let agent = new Object();
        agent.socket = null;

        let profinbranch = data.agents.find( a => a.id == pid );
        
        if(profinbranch){// seteamos cuando el usuairo pertenece a la sucursal
            agent.profile = profinbranch;
            agent.salesib = true;
        }else{// seteamos cuando el usuario no pertenece a la sucursal
            agent.profile = listProfilesInit.find( p => p.id == pid);
            agent.salesib = false;
        }

        return agent;
    });

    state.process = data.index.status.map( state => {
        state.state = state.active ? true:false;
        state.descs = descriptions[state.id];
        return state;
    });

    state.cashdesks = data.index.cash_register;
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

