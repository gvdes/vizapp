import { local } from 'boot/vizapi'

export default{
    join(data){
        return local.post('/workpoint/join',data).then(success => success.data).catch(fail => { return {error:fail} });
    },
    index(){
        return local.get('/workpoints').then(success=>{
            // console.log(success);
            return success.data;
        }).catch(fail=>{
            console.log(fail);
        });
    }
}
