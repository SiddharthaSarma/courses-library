import App from './App.vue';
import AddCourse from './components/add-course';
import SignIn from './components/signin';
import CourseDetails from './components/view-course';
import EventBus from './eventbus.js';

export const routes = [
  {
    path: '/signin',
    component: SignIn,
    beforeEnter: (to, from, next) => {
      if (EventBus.isUserLoggedIn()) {
        next({ path: '/library' });
      } else {
        next();
      }
    }
  },
  {
    path: '/library',
    component: App,
    beforeEnter: (to, from, next) => {
      if (EventBus.isUserLoggedIn()) {
        next();
      } else {
        next({ path: '/signin' });
      }
    }
  },
  {
    path: '/add',
    component: AddCourse,
    beforeEnter: (to, from, next) => {
      if (EventBus.isUserLoggedIn()) {
        next();
      } else {
        next({ path: '/signin' });
      }
    }
  },
  {
    path: '/details',
    component: CourseDetails
  },
  { path: '*', redirect: '/signin' }
];
