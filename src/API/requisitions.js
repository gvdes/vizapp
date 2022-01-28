import { vizapi } from "boot/vizapi";

export default {
  index(data) {
    console.log("Making request");
    return vizapi
      .get("/requisition", data)
      .then(success => {
        console.log(success.data);
        return success.data;
      })
      .catch(fail => {
        console.error("error en solicitud");
        console.error(fail);
      });
  },
  create(data) {
    console.log("Creando pedido...");
    return vizapi.post("/requisition", data);
  },
  find(id) {
    console.log("traiendo " + id);
    return vizapi
      .get("/requisition/" + id)
      .then(success => {
        let resp = success.data;
        console.log(resp);
        return resp;
      })
      .catch(fail => {
        console.log(fail);
      });
  },
  updateStocks(data){
    return vizapi.post('/requisition/updateStocks',data).then( done => {
        return done.data;
    }).catch( fail => { return { error: fail} });
  },
  add(data) {
    console.log(data);
    return vizapi.post("/requisition/add", data);
  },
  toDelivered(data){
    return vizapi.post('/requisition/toDelivered',data).then( done => {
        return done.data;
    }).catch( fail => { return { error: fail} });
  },
  remove(data) {
    console.log(data);
    return vizapi.post("/requisition/remove", data);
  },
  nextstep(data) {
    return vizapi.post("/requisition/next", data);
  },
  dashboard(data) {
    return vizapi
      .get("/requisition/dashboard", data)
      .then(success => {
        let resp = success.data;
        return resp;
      })
      .catch(fail => {
        console.log(fail);
      });
  },
  reprint(data) {
    return vizapi.post("/requisition/reimpresion", data);
  },
  addMasive(data) {
    return vizapi.post("/requisition/addMassive", data)
  },
};
