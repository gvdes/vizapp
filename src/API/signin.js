import { local } from 'boot/vizapi'

export default{
    trySignin(data){
        console.log("%cLogueando...","font-size:2em; color:#2e86de;");
        console.log(data);
        return local.post('account/auth',data);
    },
    trySetPass(data){
        console.log("%cSetting Pass...","font-size:2em; color:#2e86de;");
        console.log(data);
        return local.put('account/password',data);
    }
}
