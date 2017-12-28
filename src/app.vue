<template>
  <v-app light>
    <v-toolbar dark class="primary">
      <v-toolbar-title>Courses library</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat @click="toggleList(true)">List</v-btn>
        <v-btn flat @click="toggleList(false)">create course</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <v-layout>
        <v-flex v-if="showList">
          <List />
        </v-flex>
        <v-flex class="pa-3" v-if="!showList">
          <vform></vform>
        </v-flex>
      </v-layout>
    </v-content>
  </v-app>
</template>

<script>
import Vue from 'vue';
import db from './firebaseinit';
import List from './components/list';
import vform from './components/add-course';
import { Component } from 'vue-property-decorator';
import('../node_modules/vuetify/dist/vuetify.min.css');
@Component({
  components: {
    List,
    vform
  }
})
export default class App extends Vue {
  showList = true;
  toggleList(val) {
    this.showList = val;
  }
}
</script>
