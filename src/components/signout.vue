<template>
  <v-btn flat @click="signOut()">
      <v-icon>power_settings_new</v-icon>
      Sign Out
    </v-btn>
</template>

<script>
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import EventBus from '../eventbus.js';
import firebase from 'firebase';

@Component({})
export default class SignOut extends Vue {
  signOut() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        EventBus.clearLoginDetails();
        this.$router.push('/signin');
      })
      .catch(err => console.error(err));
  }
}
</script>
