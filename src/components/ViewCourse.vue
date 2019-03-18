<template>
  <v-app dark>
    <navbar></navbar>
    <v-content>
      <v-layout></v-layout>
    </v-content>
  </v-app>
</template>

<script>
import Vue from "vue";
import EventBus from "../eventbus.js";
import { Component } from "vue-property-decorator";
import Navbar from "./Navbar";

@Component({
  components: {
    Navbar
  }
})
export default class Viewcourse extends Vue {}
</script>

<style>
</style>
