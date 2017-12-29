<template>
  <v-form ref="form" v-model="valid">
    <v-text-field label="Course Name" v-model="courseName" :rules="nameRules" required></v-text-field>
    <v-text-field label="Description" v-model="courseDescription"></v-text-field>
    <v-text-field label="Author" v-model="courseAuthor"></v-text-field>
    <v-text-field label="Course Link" v-model="courseLink"></v-text-field>
    <v-text-field label="Image Link" v-model="imageLink"></v-text-field>
    <v-select label="Publisher" v-model="coursePublisher" :items="publishers" item-text="value" single-line item-value="id" return-object></v-select>
    <v-select label="Language" v-model="courseLanguage" :items="languages" item-text="value" single-line item-value="id" return-object></v-select>
    <v-dialog persistent v-model="modal" lazy full-width width="290px">
      <v-text-field slot="activator" label="Released on" v-model="publishedDate" prepend-icon="event" readonly></v-text-field>
      <v-date-picker v-model="publishedDate" scrollable actions>
        <template slot-scope="{ save, cancel }">
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn flat color="primary" @click="cancel">Cancel</v-btn>
            <v-btn flat color="primary" @click="save">OK</v-btn>
          </v-card-actions>
        </template>
      </v-date-picker>
    </v-dialog>
    <v-btn @click="submit" :disabled="!valid">submit</v-btn>
    <v-btn @click="clear">clear</v-btn>
    <v-snackbar :timeout="5000" :top="true" :right="true" :color="color" v-model="snackbar">
      {{msg}}
    </v-snackbar>
  </v-form>
</template>

<script>
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import db from '../firebase';

@Component({})
export default class AddCourse extends Vue {
  languages = [];
  publishers = [];
  courseLink = '';
  courseName = '';
  courseAuthor = '';
  imageLink = '';
  courseDescription = '';
  courseLanguage = null;
  coursePublisher = null;
  publishedDate = null;
  courseLanguage = null;
  menu = false;
  modal = false;
  snackbar = false;
  color = '';
  msg = '';

  // validation
  valid = true;
  nameRules = [
    v => !!v || 'Course Name is required'
  ];

  created() {
    this.fetchLanguages();
    this.fetchPublishers();
  }

  // Fetch languages
  fetchLanguages() {
    db
      .collection('languages')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          this.languages.push({
            id: doc.id,
            value: doc.data().name
          });
        });
      });
  }
  // Need to save details in firebase.
  submit() {
    db
      .collection('courses')
      .add({
        name: this.courseName,
        released_year: this.publishedDate,
        imageLink: this.imageLink,
        link: this.courseLink,
        description: this.courseDescription,
        author_name: this.courseAuthor,
        language: this.courseLanguage.id,
        publisher: this.coursePublisher.id
      })
      .then(() => {
        this.showToastr('success', 'Course created successfully');
        this.clear();
      })
      .catch(function(error) {
        console.error('Error writing document: ', error);
      });
  }

  // Clear form
  clear() {
    this.$refs.form.reset();
  }

  // Show toastr
  showToastr(color, msg) {
    this.color = color;
    this.msg = msg;
    this.snackbar = true;
  }

  // Fetch publishers
  fetchPublishers() {
    db
      .collection('publisher')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          this.publishers.push({
            id: doc.id,
            value: doc.data().name
          });
        });
      });
  }
}
</script>
