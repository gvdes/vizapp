
export function workpoints_size (state) { return state.workpoints.length; }
export function toolbarModule (state) {
    let icons = {
        "admin":"fas fa-wrench",
        "informes":"fas fa-chart-line",
        "contador":"fas fa-clipboard-list",// almacen/contador
        "ubicador":"fas fa-compass",// almacen/ubicador
        "minymax":"fas fa-balance-scale",// almacen/minymax
        "dashboard":"dashboard",// dashboard/dashboard
        "solicitud":"fas fa-clipboard-list",// dashboard/dashboard
        "existencias":"grading",// almacen/existencias

        "dashboard":"dashboard",//preventa/recepcion de ticket
    };

    let _prefix = state.workin.module.path;
    let _modules = state.workin.module.submodules;

    let modules = _modules.map(item=>{
        return {path:`/${_prefix}/${item.path}`,icon:icons[item.path],name:item.name,alias:item.path}
    });

    return { paths:modules, prefix:_prefix };
}
export function profile(state){ return state.profile; }
export function moduleauths(state){ return state.workin.module; }
