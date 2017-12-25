<template>
  <v-form>
    <v-text-field
      label="Course Name"
      v-model="courseName"
    ></v-text-field>
    <v-text-field
      label="Description"
      v-model="courseDescription"
    ></v-text-field>
    <v-select
      label="Language"
      v-model="select"
      :items="languages"
      item-text="value"
      single-line
      item-value="id"
      return-object
    ></v-select>
    <v-dialog
      persistent
      v-model="modal"
      lazy
      full-width
      width="290px"
    >
        <v-text-field
          slot="activator"
          label="Picker in dialog"
          v-model="date"
          prepend-icon="event"
          readonly
        ></v-text-field>
        <v-date-picker v-model="date" scrollable actions>
          <template slot-scope="{ save, cancel }">
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn flat color="primary" @click="cancel">Cancel</v-btn>
              <v-btn flat color="primary" @click="save">OK</v-btn>
            </v-card-actions>
          </template>
        </v-date-picker>
      </v-dialog>
    <v-btn
      @click="submit"
      :disabled="!valid"
    >
      submit
    </v-btn>
    <v-btn @click="clear">clear</v-btn>
  </v-form>
</template>

<script>

import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import db from '../firebaseinit';

@Component({})
export default class AddCourse extends Vue {
  languages = [];
  publishers = [];
  courseName = '';
  date = null;
  menu = false;
  modal = false;

  created() {
    this.fetchLanguages();
    this.fetchPublishers();
  }

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
  submitForm() {
    console.log(this.courseName, this.courseAuthor, this.courseLink, this.imageLink, this.coursePublisher, this.publishedDate);
  }

  fetchPublishers() {
    db
      .collection('publisher')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          this.publishers.push({
            id: doc.id,
            value: doc.data()
          });
        });
      });
  }
}
</script>
