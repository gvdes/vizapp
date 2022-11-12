export default function() {
  return {
    orders: [], // pedidos que el usuairo levanta
    orders_in:[], // pedidos que las tiendas levantan
    printers:[],
    process: [],
    today: false,
    layout: {
      header: { state: true, title: "" },
      footer: { state: true }
    }
  };
}
