<template>
  <v-toolbar class="primary">
    <v-toolbar-title>Courses library</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat @click="navigateTo('library')">List</v-btn>
      <v-btn flat @click="navigateTo('add')">create course</v-btn>
      <sign-out></sign-out>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import Vue from "vue";
import { Component } from "vue-property-decorator";
import EventBus from "../eventbus";
import SignOut from "./Signout.vue";

@Component({
  components: {
    SignOut
  }
})
export default class Navbar extends Vue {
  navigateTo(path) {
    this.$router.push(path);
  }
}
</script>
