
export function initAddSection (state,data) {
    state.wndAddSections.parent=data;
    state.wndAddSections.state=true;
}

export function cancelAddSection (state) {
    state.wndAddSections.parent=undefined;
    state.wndAddSections.state=false;
}

export function addChildren (state,data) {
    console.log("Agregando elementos");
    console.log(data);
    data.forEach(element => {
        element.children=[];
        state.wndAddSections.parent.children.push(element);
    });
}

export function set (state,data) {
    state.warehouses.push(data);
}

export function cleanModule (state) {
    state.warehouses=[];
    state.wndAddSections.parent=undefined;
    state.wndAddSections.state=false;
}