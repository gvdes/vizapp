import { vizapi } from 'boot/vizapi'

export default{
    test(){ console.log("cluster is working");},
    index(data){
        return vizapi.post('/ventas',data).then(success=>{
            let resp = success.data;
            return resp;
        }).catch(fail=>{
            console.log(fail);
        });
    }
}