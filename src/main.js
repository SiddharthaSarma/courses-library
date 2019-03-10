import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';
import { routes } from './router';
import Routes from './routes.vue';

Vue.use(VueRouter);
const router = new VueRouter({
  mode: 'history',
  routes
});

Vue.use(Vuetify, {
  theme: {
    primary: '#d32f2f',
    secondary: '#bdbdbd',
    accent: '#ff5252',
    error: '#d50000'
  }
});
new Vue({
  el: '#app',
  router,
  render: h => h(Routes)
});
