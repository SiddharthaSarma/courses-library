import App from './app.vue';
import SignIn from './components/signin';
import EventBus from './eventbus.js';

export const routes = [
  {
    path: '/signin',
    component: SignIn,
    beforeEnter: (to, from, next) => {
      if (EventBus.user) {
        next({ path: '/library'});
      } else {
        next();
      }
    }
  },
  {
    path: '/library',
    component: App,
    beforeEnter: (to, from, next) => {
      if (EventBus.user) {
        next();
      } else {
        next(false);
      }
    }
  },
  { path: '*', redirect: '/signin' }
];


