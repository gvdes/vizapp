import { vizapi } from 'boot/vizapi'

export default{
    autocomplete(data){
        return vizapi.get('/product/autocomplete',data);
    },
    create(data){ return vizapi.post('/order',data); },
    index(vista){
        return vizapi.post('/order/index',vista).then(success=>{
            return success.data;
        }).catch(fail=>{ console.log(fail); });
    },
    order(order){
        console.log(`Obteniendo pedido ${order.id}`);
        return vizapi.get(`/order/${order.id}`).then(success => { return success.data; }).catch(fail=>{ console.log(fail); });
    }
}