import App from './app.vue';
import SignIn from './components/signin'

export const routes = [
  { path: '/signin', component: SignIn },
  { path: '/library', component: App }
];


