import { local } from 'boot/vizapi'

export default{
    getPrinters(){
        return local.get('/account/printers').then( success => success.data).catch( fail => { return {error:fail} } );
    },
    get(){
        return local.get('/printer/all').then( success => success.data ).catch( fail =>  { return {error:fail} } );
    }
}
