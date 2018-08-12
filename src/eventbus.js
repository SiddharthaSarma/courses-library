import Vue from 'vue';

const EventBus = new Vue();

EventBus.saveLoginDetails = authId => {
  localStorage.setItem('auth', authId);
};

EventBus.clearLoginDetails = () => {
  localStorage.removeItem('auth');
};

EventBus.isUserLoggedIn = () => {
  const auth = localStorage.getItem('auth');
  return auth ? auth : null;
};

export default EventBus;
