// import CryptoJS from 'crypto-js'

export function setsession (state,data) {
    state.profile.me = data.account.me;
    state.profile.rol = data.account.rol;
    state.profile.workpoint = data.account.workpoint;

    state.token = data.account.token;

    state.workpoints = data.workpoints;

    if(data.stock){
        localStorage.setItem('token',state.token);
        localStorage.setItem('profile',JSON.stringify(state.profile));
        localStorage.setItem('workpoints',JSON.stringify(state.workpoints));
    }
}

export function unsetsession(state){
    localStorage.removeItem('token');
    localStorage.removeItem('profile');
    localStorage.removeItem('workpoints');
    localStorage.removeItem('printers_native');

    state.profile.me = undefined;
    state.profile.rol = undefined;
    state.profile.workpoint = undefined;
    state.token = undefined;
    state.workpoints = undefined;
}

export function setworkpoint(state,data){
    // console.log(data);
    localStorage.setItem('workin',JSON.stringify(data));
    state.workin.workpoint = data.workpoint;
    state.workin.module = data.module;
}

export function join(state, data){
    state.token = data.token;
    localStorage.setItem('token',state.token);
}