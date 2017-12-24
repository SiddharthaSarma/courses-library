<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex
        xs12 sm6 md3
        v-for="n in 16"
        :key="n"
      >
        <v-card flat tile>
          <v-card-media
            :src="list[0].imageLink"
            height="150px"
          >
          </v-card-media>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0"><a :href="list[0].courseLink">{{list[0].name}}</a></h3>
              <div>{{list[0].description}}</div>
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

</style>
