
export function setPrinters (state,data) {
    console.log("las impresras han sido agregadas");
    state.printers = data;
    localStorage.setItem("printers",JSON.stringify(data));
}

