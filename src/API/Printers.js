import { vizapi } from 'boot/vizapi'

export default{
    getPrinters(){
        return vizapi.get('/account/printers').then( success => success.data).catch( fail => { return {error:fail} } );
    },
    get(){
        return vizapi.get('/printer/all').then( success => success.data ).catch( fail =>  { return {error:fail} } );
    }
}