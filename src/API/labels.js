import { vizapi } from 'boot/vizapi'

export default{
    index(){
        return vizapi.get('/pdf').then(success=>{
            let resp = success.data;
            return resp;
        }).catch(fail=>{
            console.log(fail);
        });
    },
    generate(data){
        return vizapi.post('pdf/etiquetas',data);
    }
}