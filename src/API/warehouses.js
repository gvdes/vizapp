import { vizapi } from 'boot/vizapi'

export default{
    index(){
        return vizapi.get('/location/index').then(succcess=>{
            // console.log(succcess);
            return succcess.data;
        }).catch(fail=>{
            console.log(fail);
        });
    },
    tree(data){ return vizapi.get('/location/allSections',data); },
    warehouses(data){ return vizapi.get('/location/cellers'); },
    list(){
        return vizapi.get('/location/cellers').then(success=>{
            // console.log(success.data);
            return success.data.cellers
        }).catch(fail=>{
            console.log(fail);
        });
    },
    loadWarehouses(){
        console.log("%cCargando Almacenes...","font-size:2em; color:purple;");
        return vizapi.get('/location/cellers').then(succcess=>{
            // console.log(succcess);
            return succcess.data.cellers;
        }).catch(fail=>{
            console.log(fail);
        });
    },
    sections(data){
        return vizapi.get('/location/sections',data).then(success=>{
            return success.data.sections;
        }).catch(fail=>{ console.log(fail); });
    },
    product(data){
        console.log(data);
        return vizapi.get('/location/product',data);
    },
    toggle(data){
        return vizapi.post('/location/toggle',data);
    },
    create(data){
        // console.log(data);
        return vizapi.post('/location/celler',data);
    },
    addSections(data){ return vizapi.post('/location/section',data); },
    setminmax(data){
        console.log(data);
        return vizapi.post('/location/maximos',data);
    },
    existencesIndex(data){
        return vizapi.post('/product/catalog',data).then(success=>{
            // console.log(success.data);
            return success.data;
        }).catch(fail=>{
            console.log("===========ERROR===========");
            console.log(fail);
        });
    },
    loadCats(data){ return vizapi.post('/product/catalog',data); },
    getStocks(data){ return vizapi.post('/location/stocks',data); },
    getFiltred(data){ return vizapi.post('/product/catalog',data); },
    report(data){ return vizapi.post('/location/report',data); },
    sectionRemove(data){ return vizapi.post('/location/remove',data); },
    sectionDelete(data){ return vizapi.post('/location/deleteSection',data); }
}