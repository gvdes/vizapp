import { local } from 'boot/vizapi'

export default{
    // autocompleteGET(data){ return local.get('/product/autocomplete',data); }, // para eliminar si todo sale bien!!
    autocomplete(data){ return local.post('/product',data); },
    getMassive(data){ return local.post('/product/getMassive',data); },
    listStates(){
        return local.get('/product/getStatus').then(success=>{
            return success.data.status;
        }).catch(fail=>{ console.log(fail); });
    },
    updateState(data){ return local.post('/product/updateStatus',data); },
    freshState(data){
        return local.post('/product/updateStatus',data)
            .then( done => done.data )
            .catch( fail => { return {error:fail} });
    },
    listPoducts(data){ return local.post('product',data); },
    categories(data){
        return local.post('/product/catalog',data).then(success=>{
            return success.data.categories;
        }).catch(fail=>{ console.log(fail); });
    },
    get(data){ return local.post('/product',data).then(success=>{
        return success.data;
    }).catch(fail=>{console.log(fail);}); }
}
