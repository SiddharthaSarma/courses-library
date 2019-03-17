import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';
import { routes } from './router';
import Routes from './routes.vue';
import('../node_modules/vuetify/dist/vuetify.min.css');

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
  router,
  render: h => h(Routes)
}).$mount('#app');
