
export function setNativeData (state, data) {
    localStorage.setItem("printers_native",JSON.stringify(data));
    console.log("Impresoras nativas seteadas en LS");
    state.nativeData = data;
}