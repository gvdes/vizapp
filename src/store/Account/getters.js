
export function workpoints_size (state) { return state.workpoints.length; }
export function toolbarModule (state) {
    let icons = {
        "admin":"fas fa-wrench",
        "configuracion":"fas fa-wrench",
        "informes":"fas fa-chart-line",
        "reportes":"fas fa-chart-line",//
        "contador":"fas fa-clipboard-list",// almacen/contador
        "ubicador":"fas fa-compass",// almacen/ubicador
        "minymax":"fas fa-balance-scale",// almacen/minymax
        "dashboard":"dashboard",// dashboard/dashboard
        "solicitud":"fas fa-clipboard-list",// dashboard/dashboard
        "existencias":"grading",// almacen/existencias
        "bodega":"fas fa-warehouse",//preventa/bodega
        "checkin":"fas fa-sign-in-alt",//preventa/checkin
        "checkout":"fact_check",//preventa/validar
        "caja":"fas fa-cash-register",//preventa/validar
        "pedidos":"receipt_long"//preventa/validar
    };

    let _prefix = state.workin.module.path;
    let _modules = state.workin.module.submodules;

    let modules = _modules.map( item => {
        return { path:`/${_prefix}/${item.path}`,icon:icons[item.path],name:item.name,alias:item.path }
    });

    return { paths:modules, prefix:_prefix };
}
export function profile(state){ return state.profile; }
export function moduleauths(state){ return state.workin.module; }
export function workin(state){ return state.workin; }
