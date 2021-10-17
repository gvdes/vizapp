import { vizapi } from 'boot/vizapi'

export default{
    join(data){
        return vizapi.get('/workpoint/join');
    },
    get(data){//esta es la funcion que si debe de quedarse
        return vizapi.post('account/users',data).then( done =>{ return done.data; }).catch( fail =>{ return {error:fail} });
    },
    list(data){//esta funcion hay que removerla, hasta corregir o reescribir modulo de inventarios
        return vizapi.post('account/users',data);
    }
}