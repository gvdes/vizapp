import { vizapi } from 'boot/vizapi'

export default{
    autocomplete(data){
        return vizapi.get('/product/autocomplete',data);
    },
    labelStates(){
        return vizapi.get('/product/getStatus').then(success=>{
            return success.data.status;
        }).catch(fail=>{
            console.log(fail);
        });
    },
    updateState(data){
        return vizapi.post('/product/updateStatus',data);
    }
}