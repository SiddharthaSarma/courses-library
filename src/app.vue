<template>
  <v-app dark>
    <navbar></navbar>
    <search></search>
    <v-content>
      <v-layout>
        <v-flex>
          <List />
        </v-flex>
      </v-layout>
    </v-content>
  </v-app>
</template>

<script>
import Vue from 'vue';
import List from './components/list';
import vform from './components/add-course';
import search from './components/search';
import Navbar from './components/navbar';
import ViewCourse from './components/view-course';
import { Component } from 'vue-property-decorator';
import('../node_modules/vuetify/dist/vuetify.min.css');
@Component({
  components: {
    List,
    vform,
    search,
    Navbar,
    ViewCourse
  }
})
export default class App extends Vue {}
</script>
<style>
.fade-enter-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
