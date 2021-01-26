
import { vizapi } from 'boot/vizapi'

export default{
    index(){
        return vizapi.get('inventory').then(success=>{
            return success.data;
        }).catch(fail=>{ console.log(fail); });
    },
    find(id){
        return vizapi.get(`inventory/${id}`).then(success=>{
            return success.data;
        }).catch(fail=>{ console.log(fail); });
    },
    create(data){ return vizapi.post('inventory',data); },
    toggleReponsable(data){ return vizapi.post('inventory/responsable',data); },
    addProducts(data){ return vizapi.post('inventory/add',data); },
    nextStep(data){ return vizapi.post('inventory/next',data); },
    rowCount(data){
        return vizapi.post('inventory/value',data);
    }
}