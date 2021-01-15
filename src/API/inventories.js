
import { vizapi } from 'boot/vizapi'

export default{
    index(){
        return vizapi.get('inventory').then(success=>{
            return success.data;
        }).catch(fail=>{
            console.log(fail);
        });
    },
    create(data){
        return vizapi.post('inventory',data);
    },
    find(id){
        return vizapi.get(`inventory/${id}`).then(success=>{
            return success.data;
        }).catch(fail=>{
            console.log(fail);
        });
    },
    toggleReponsable(data){
        return vizapi.post('inventory/responsable',data);
    }
}