<template>
  <div class="row">
    <form class="col s12" @submit.prevent="submitForm">
      <div class="row">
        <div class="input-field col s6">
          <input id="courseName" type="text" v-model="courseName" class="validate">
          <label for="courseName">Course Name</label>
        </div>
        <div class="input-field col s6">
          <select name="courseLanguage" id="ddlLanguage" v-model="courseLanguage">
            <option v-for="opt in languages" :value="opt.id" :key="opt.id">{{opt.value.name}}</option>
          </select>
          <label for="txtLanguage">Language</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="txtAutorName" type="text" class="validate" v-model="courseAuthor">
          <label for="txtAutorName">Author Name</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="txtCourseLink" type="text" class="validate" v-model="courseLink">
          <label for="txtCourseLink">Course Link</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="txtImageLink" type="text" class="validate" v-model="imageLink">
          <label for="txtImageLink">Image Link</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s6">
          <select name="coursePublisher" id="ddlPublisher" v-model="coursePublisher">
            <option v-for="opt in publishers" :value="opt.id" :key="opt.id">{{opt.value.name}}</option>
          </select>
          <label for="coursePublisher">Publisher</label>
        </div>
        <div class="input-field col s6">
          <input id="txtPublishedDate" type="text" v-model="publishedDate">
          <label for="txtPublishedDate">Published Date</label>
        </div>
      </div>
       <button class="btn waves-effect waves-light" type="submit" name="action">Create
        <i class="material-icons right">send</i>
      </button>
    </form>
  </div>
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
            value: doc.data()
          });
        });
        setTimeout(function() {
          $('select').material_select();
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
        setTimeout(function() {
          $('select').material_select();
        });
      });
  }
  
  mounted() {
    $('#txtPublishedDate').pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 15, // Creates a dropdown of 15 years to control year,
      today: 'Today',
      clear: 'Clear',
      close: 'Ok',
      closeOnSelect: false // Close upon selecting a date,
    });
  }
}
</script>
