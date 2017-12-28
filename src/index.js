import Vue from 'vue';
import App from './app.vue';
import Vuetify from 'vuetify';

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
  render: h => h(App)
});
