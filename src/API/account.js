import { local } from 'boot/vizapi'

export default{
    join(data){
        return local.get('/workpoint/join');
    },
    get(data){//esta es la funcion que si debe de quedarse
        return local.post('account/users',data).then( done =>{ return done.data; }).catch( fail =>{ return {error:fail} });
    },
    list(data){//esta funcion hay que removerla, hasta corregir o reescribir modulo de inventarios
        return local.post('account/users',data);
    }
}
