<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <div class="spinner" v-if="loading"></div>
      <v-flex xs12 v-if="!loading && !computedPages.length">
        <h1
          class="text-xs-center"
        >There are no courses matching with search text :( Try different search.</h1>
      </v-flex>
      <v-flex xs12 sm6 md2 class="course-card" v-for="course in computedPages" :key="course.id">
        <v-card flat tile>
          <v-img :src="course.imageLink" height="150px"></v-img>
          <v-card-title primary-title class="white">
            <div>
              <h4 class="mb-0">
                <a :href="course.link" target="_blank">{{course.name}}</a>
              </h4>
              <!-- <div class="course-description">{{course.description}}</div> -->
            </div>
          </v-card-title>
          <v-card-actions class="white">
            <v-btn flat color="purple darken-4" @click="$router.push('details')">View</v-btn>
            <!-- <v-btn flat color="orange">Explore</v-btn> -->
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    <div class="text-xs-center">
      <v-pagination
        :length="pagesLength"
        v-model="page"
        v-if="!loading && pagesLength !==1 && computedPages.length !== 0"
        circle
      ></v-pagination>
    </div>
  </v-container>
</template>

<script>
import Vue from "vue";
import { Component } from "vue-property-decorator";
import db from "../firebase";
import EventBus from "../eventbus";

@Component({})
export default class List extends Vue {
  list = [];
  originalList = [];
  loading = true;
  pagesLength = 1;
  page = 1;

  mounted() {
    EventBus.$on("SEARCH_COURSE", payload => {
      this.searchCourses(payload.search);
    });
  }

  // computed
  get computedPages() {
    window.scrollTo(0, 0);
    return this.list.slice((this.page - 1) * 12, this.page * 12);
  }

  created() {
    db.collection("courses")
      .get()
      .then(querySnapshot => {
        this.loading = false;
        querySnapshot.forEach(doc => {
          this.originalList.push(doc.data());
        });
        this.searchCourses("");
        this.calculatePages();
      });
  }

  // search for the courses
  // FIXME: Add search at the client side, need to implement at server side using Algolia
  searchCourses(search) {
    this.list = this.originalList.filter(course =>
      course.name.toLowerCase().includes(search.toLowerCase())
    );
    this.calculatePages();
  }

  calculatePages() {
    this.pagesLength = Math.ceil(this.list.length / 12);
    this.page = 1;
  }
}
</script>

<style>
.course-description {
  max-height: 150px;
  overflow: hidden;
}
.spinner {
  background-image: url(../assets/preloader.gif);
  background-position: center;
  background-repeat: no-repeat;
  height: 200px;
  left: 50%;
  margin: -100px 0 0 -100px;
  position: absolute;
  top: 50%;
  width: 200px;
}
button {
  outline: none;
}
h4.mb-0 {
  min-height: 42px;
  max-height: 42px;
  overflow: hidden;
}
.course-card {
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
}
.application a {
  color: #303030;
}
</style>
