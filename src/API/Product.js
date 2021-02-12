import { vizapi } from 'boot/vizapi'

export default{
    autocomplete(data){ return vizapi.get('/product/autocomplete',data); },
    getMassive(data){ return vizapi.post('/product/getMassive',data); },
    labelStates(){
        return vizapi.get('/product/getStatus').then(success=>{
            return success.data.status;
        }).catch(fail=>{ console.log(fail); });
    },
    updateState(data){ return vizapi.post('/product/updateStatus',data); },
    listPoducts(data){ return vizapi.post('product',data); },
    categories(data){ 
        return vizapi.post('/product/catalog',data).then(success=>{
            return success.data.categories;
        }).catch(fail=>{ console.log(fail); });
    },
    get(data){ return vizapi.post('/product',data).then(success=>{
        return success.data;
    }).catch(fail=>{console.log(fail);}); } 
}