import {  local, vizapi } from '../boot/vizapi'; // Si necesitas mantener la instancia vizapi

export default async ({ router, store }) => {
  router.beforeEach((to, from, next) => {
    console.log("%cProtecting routes...", "font-size:1.5em;color:#40739e;");
    let token = localStorage.getItem("token");

    if (token) {
      vizapi.defaults.headers.common['Authorization'] = 'Bearer ' + token;
      local.defaults.headers.common['Authorization'] = 'Bearer ' + token;

      let profile = JSON.parse(localStorage.getItem('profile'));
      let workpoints = JSON.parse(localStorage.getItem('workpoints'));
      let workin = JSON.parse(localStorage.getItem('workin'));

      let session = {
        account: {
          me: profile.me,
          rol: profile.rol,
          workpoint: profile.workpoint,
          token: token
        },
        workpoints: workpoints,
        stock: false
      };

      store.commit('Account/setsession', session);
      if (workin) { store.commit('Account/setworkpoint', workin); }
    }
    console.log(local.defaults.headers.common);
    if (to.path != '/acceso') {
      token ? next() : next('/acceso');
    } else {
      token ? next('/lanzador') : next();
    }
  });
};
