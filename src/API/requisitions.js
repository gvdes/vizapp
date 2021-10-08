import { vizapi } from "boot/vizapi";

export default {
  index(data) {
    return vizapi
      .get("/requisition", data)
      .then(succcess => {
        return succcess.data;
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
  add(data) {
    console.log(data);
    return vizapi.post("/requisition/add", data);
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
