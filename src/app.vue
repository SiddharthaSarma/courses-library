<template>
  <v-app dark>
    <v-toolbar class="primary">
      <v-toolbar-title>Courses library</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat @click="toggleList(true)">List</v-btn>
        <v-btn flat @click="toggleList(false)">create course</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <search v-if="showList"></search>
    <v-content>
      <v-layout>
        <transition name="fade">
          <v-flex v-if="showList">
            <List />
            <!-- <view-course /> -->
          </v-flex>
        </transition>
        <transition name="fade">
          <v-flex class="pa-3" v-if="!showList">
            <vform></vform>
          </v-flex>
        </transition>
      </v-layout>
    </v-content>
  </v-app>
</template>

<script>
import Vue from 'vue';
import List from './components/list';
import vform from './components/add-course';
import search from './components/search';
import ViewCourse from './components/view-course';
import { Component } from 'vue-property-decorator';
import('../node_modules/vuetify/dist/vuetify.min.css');
@Component({
  components: {
    List,
    vform,
    search,
    ViewCourse
  }
})
export default class App extends Vue {
  showList = true;
  toggleList(val) {
    this.showList = val;
  }
}
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
