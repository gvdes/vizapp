import { vizapi } from 'boot/vizapi'

export default{
    join(data){
        return vizapi.post('/workpoint/join',data);
    },
    index(){ 
        return vizapi.get('/workpoints').then(success=>{
            // console.log(success);
            return success.data;
        }).catch(fail=>{
            console.log(fail);
        });
    }
}