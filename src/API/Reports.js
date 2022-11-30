import { vizapi } from 'boot/vizapi'

export default{
  salesStore(data){
    return vizapi.post("C/salesstore",data).then( done => done).catch( fail => fail.response);
  }
}
