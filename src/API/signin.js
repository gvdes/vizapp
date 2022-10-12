import { vizapi } from 'boot/vizapi'

export default{
    trySignin(data){
        console.log("%cLogueando...","font-size:2em; color:#2e86de;");
        console.log(data);
        return vizapi.post('account/auth',data);
    },
    trySetPass(data){
        console.log("%cSetting Pass...","font-size:2em; color:#2e86de;");
        console.log(data);
        return vizapi.put('account/password',data);
    }
}
