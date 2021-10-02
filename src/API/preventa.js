import { vizapi } from 'boot/vizapi'

export default{
    autocomplete(data){
        return vizapi.get('/product/autocomplete',data);
    },
    create(data){ return vizapi.post('/order',data); },
    index(vista){
        return vizapi.post('/order/index',vista).then(success=>{
            return success.data;
        }).catch(fail=>{ return {err:true, msg:fail } });
    },
    order(order){
        console.log(`Obteniendo pedido ${order.id}`);
        return vizapi.get(`/order/${order.id}`).then(success => { return success.data; }).catch(fail=>{ console.log(fail); });
    },
    add(data){
        return vizapi.post('/order/add',data).then(success=>{
            return {resp:success.data,err:null};
        }).catch(fail=>{
            return {resp:fail,err:true}
        });
    },
    nextStep(data){
        return vizapi.post('/order/next',data).then(success=>{
            return success.data;
        }).catch(fail=>{
            return { err:fail }
        });
    },
    reprint(data){
        return vizapi.post('/order/reimpresion',data).then(success=>{
            return { resp:success.data };
        }).catch(fail=>{
            return { err:fail }
        });
    },
    removeProduct(data){
        return vizapi.post('/order/remove',data).then(success=>{
            return { resp:success.data }
        }).catch(fail=>{
            return { err:fail }
        });
    },
    archive(data){
        return vizapi.post('order/cancell',data).then(success=>{
            return { resp:success.data }
        }).catch(fail=>{
            return { err:fail }
        });
    },
    setModState(data){
        return vizapi.post('order/changeConfig',data).then( done => {
            return done.data;
        }).catch( fail => {
            console.log(fail);
            return { err:fail }
        });
    },
    setCashState(data){
        return vizapi.post('cash/changeStatus',data).then(done => {
            return done.data;
        }).catch( fail => {
            return { error:fail }
        });
    },
    makeCheckout(data){
        return vizapi.post('order/toDelivered',data).then( done => {
            return done.data;
        }).catch( fail => {
            return { error: fail}
        });
    }
}