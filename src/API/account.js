import { vizapi } from 'boot/vizapi'

export default{
    join(data){
        return vizapi.get('/workpoint/join');
    },
    get(data){
        return vizapi.post('account/users',data);
    }
}