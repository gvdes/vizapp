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
    loadWarehouses(){
        console.log("%cCargando Almacenes...","font-size:2em; color:purple;");
        return vizapi.get('/location/cellers').then(succcess=>{
            console.log(succcess);
            return succcess.data.cellers;
        }).catch(fail=>{
            console.log(fail);
        });
    },
    loadSections(data){
        console.log("Traiendo secciones");
        return vizapi.get('/location/sections',data);
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
    addSection(data){
        console.log(data);
        return vizapi.post('/location/section',data);
    },
    setminmax(data){
        console.log(data);
        return vizapi.post('/location/maximos',data);
    },
    existencesIndex(data){
        console.log("Cargando index del modulo EXISTENCIAS..");

        return vizapi.post('/product/catalog',data).then(success=>{
            // console.log(success.data);
            return success.data;
        }).catch(fail=>{
            console.log("===========ERROR===========");
            console.log(fail);
        });
    },
    loadCats(data){
        return vizapi.post('/product/catalog',data);
    },
    getStocks(data){
        return vizapi.post('/location/stocks',data);
    },
    getFiltred(data){
        console.log(data);

        return vizapi.post('/product/catalog',data);
    }
}