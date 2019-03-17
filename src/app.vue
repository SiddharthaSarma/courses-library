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
import List from './components/List';
import vform from './components/AddCourse';
import search from './components/Search';
import Navbar from './components/Navbar';
import ViewCourse from './components/ViewCourse';
import { Component } from 'vue-property-decorator';

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

