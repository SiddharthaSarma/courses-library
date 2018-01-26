<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <div class="spinner" v-if="loading"></div>
      <v-flex xs12 v-if="!loading && !list.length">
        <h1>There are no courses in library :(</h1>
      </v-flex>
      <v-flex xs12 sm6 md2 v-for="course in list" :key="course.id">
        <v-card flat tile>
          <v-card-media :src="course.imageLink" height="150px">
          </v-card-media>
          <v-card-title primary-title>
            <div>
              <h4 class="mb-0">
                <a :href="course.link" target="_blank">{{course.name}}</a>
              </h4>
              <!-- <div class="course-description">{{course.description}}</div> -->
            </div>
          </v-card-title>
          <!-- <v-card-actions>
            <v-btn flat color="orange">Share</v-btn>
            <v-btn flat color="orange">Explore</v-btn>
          </v-card-actions> -->
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import db from '../firebase';
import EventBus from '../eventbus';

@Component({})
export default class List extends Vue {
  list = [];
  originalList = [];
  loading = true;

  mounted() {
    EventBus.$on('SEARCH_COURSE', payload => {
      this.searchCourses(payload.search);
    });
  }

  created() {
    db
      .collection('courses')
      .get()
      .then(querySnapshot => {
        this.loading = false;
        querySnapshot.forEach(doc => {
          this.originalList.push(doc.data());
        });
        this.searchCourses('');
      });
  }

  // search for the courses
  // FIXME: Add search at the client side, need to implement at server side using Algolia
  searchCourses(search) {
    this.list = this.originalList.filter(course =>
      course.name.toLowerCase().includes(search.toLowerCase())
    );
  }
}
</script>

<style>
.course-description {
  max-height: 150px;
  overflow: hidden;
}
.spinner {
  background-image: url(../../assets/preloader.gif);
  background-position: center;
  background-repeat: no-repeat;
  height: 200px;
  left: 50%;
  margin: -100px 0 0 -100px;
  position: absolute;
  top: 50%;
  width: 200px;
}
</style>
