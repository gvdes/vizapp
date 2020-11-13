import { vizapi } from 'boot/vizapi'

export default{
    join(data){
        return vizapi.post('/workpoint/join',data);
    }
}