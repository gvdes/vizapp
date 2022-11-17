import { vizapi } from 'boot/vizapi'

export default{
  salesStore(){
    return vizapi.get("C/salesstore").then( done => done).catch( fail => fail.response);
  }
}
