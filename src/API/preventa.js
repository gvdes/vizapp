import { vizapi } from 'boot/vizapi'

export default{
    autocomplete(data){
        return vizapi.get('/product/autocomplete',data);
    },
    create(data){ return vizapi.post('/order',data); },
    index(){
        return vizapi.get('/order').then(success=>{
            let resp = success.data;
            return resp;
        }).catch(fail=>{
            console.log(fail);
        });
    }
}