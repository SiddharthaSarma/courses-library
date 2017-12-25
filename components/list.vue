<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex xs12 sm6 md3 v-for="course in list" :key="course.id">
        <v-card flat tile>
          <v-card-media :src="course.imageLink" height="150px">
          </v-card-media>
          <v-card-title primary-title>
            <div>
              <h6 class="headline mb-0">
                <a :href="course.link" target="_blank">{{course.name}}</a>
              </h6>
              <div class="course-description">{{course.description}}</div>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat color="orange">Share</v-btn>
            <v-btn flat color="orange">Explore</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import db from '../firebaseinit';
@Component({})
export default class List extends Vue {
  list = [];
  created() {
    db
      .collection('courses')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.list.push(doc.data());
        });
      });
  }
}
</script>

<style>
.course-description {
  max-height: 150px;
  overflow: hidden;
}
</style>
