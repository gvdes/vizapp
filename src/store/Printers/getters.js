
export function printers (state) {
    return state.nativeData;
}

export function All(state,deftbranch=null){
    return deftbranch => {
        let access = state.nativeData;
        console.log(access);

        if(access.length>1){
            return access.map( b => {
                return {
                    id:b.id,
                    name:b.name,
                    alias:b.alias,
                    groups:b.printers,
                    selected:deftbranch==b.id
                }
            });
        }else{
            let b = access[0];
            return {
                id:b.id,
                name:b.name,
                alias:b.alias,
                groups:b.printers,
                selected:true
            }
        }
    }
}
