import App from './App';
import AddCourse from './components/AddCourse';
import SignIn from './components/Signin';
import CourseDetails from './components/ViewCourse';
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
