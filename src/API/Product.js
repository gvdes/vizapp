import { vizapi } from 'boot/vizapi'

export default{
    autocomplete(data){
        return vizapi.get('/product/autocomplete',data);
    },
}