import { vizapi } from 'boot/vizapi'

export default{
    join(data){
        return vizapi.get('/workpoint/join');
    }
}