import { local } from 'boot/vizapi'

export default{
    autocomplete(data){
        return local.get('/product/autocomplete',data);
    },
    create(data){ return local.post('/order',data); },
    index(vista){
        return local.post('/order/index',vista).then(success=>{
            return success.data;
        }).catch(fail=>{ return {err:true, msg:fail } });
    },
    order(order){
        console.log(`Obteniendo pedido ${order.id}`);
        return local.get(`/order/${order.id}`).then(success => { return success.data; }).catch(fail=>{ console.log(fail); });
    },
    add(data){
        return local.post('/order/add',data).then( done => {
            return done.data;
        }).catch(fail=>{ return {resp:fail,err:true} });
    },
    nextStep(data){
        return local.post('/order/next',data).then(success=>{
            return success.data;
        }).catch(fail=>{ return { err:fail } });
    },
    reprint(data){
        return local.post('/order/reimpresion',data).then(success=>{
            return { resp:success.data };
        }).catch(fail=>{ return { err:fail } });
    },
    rePrint(data){
        return local.post('/order/printTicket',data).then(done=>{
            return done.data;
        }).catch(fail=>{ return { err:fail } });
    },
    removeProduct(data){
        return local.post('/order/remove',data).then(done=>{
            return done.data;
        }).catch(fail=>{ return { err:fail } });
    },
    archive(data){
        return local.post('order/cancell',data).then(done=>{
            return done.data;
        }).catch(fail=>{ return { err:fail } });
    },
    setModState(data){
        return local.post('order/changeConfig',data).then( done => {
            return done.data;
        }).catch( fail => { return { err:fail } });
    },
    setCashState(data){
        return local.post('cash/changeStatus',data).then(done => {
            return done.data;
        }).catch( fail => { return { error:fail } });
    },
    makeCheckout(data){
        return local.post('order/toDelivered',data).then( done => {
            return done.data;
        }).catch( fail => { return { error: fail} });
    },
    checkoutProductRemove(data){
      return local.post('order/checkoutremoveproduct',data).then( done => {
          return done.data;
      }).catch( fail => { return { error: fail} });
    },
    printNotDelivered(data){
        return local.post('order/printNotDelivered',data).then( done => {
            return done.data;
        }).catch( fail => { return { error: fail} });
    }
}
