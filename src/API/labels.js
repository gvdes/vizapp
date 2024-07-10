import { local } from 'boot/vizapi'

export default{
    index(){
        return local.get('/pdf').then(success=>{
            let resp = success.data;
            return resp;
        }).catch(fail=>{
            console.log(fail);
        });
    },
    generate(data){
        return local.post('pdf/etiquetas',data);
    }
}
