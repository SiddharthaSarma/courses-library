<template>
  <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s6">
          <input id="courseName" type="text" class="validate">
          <label for="courseName">Course Name</label>
        </div>
        <div class="input-field col s6">
          <select name="courseLanguage" id="ddlLanguage">
            <option v-for="opt in languages" :value="opt.id" :key="opt.id">{{opt.value.name}}</option>
          </select>
          <label for="txtLanguage">Language</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="txtAutorName" type="text" class="validate">
          <label for="txtAutorName">Author Name</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="txtCourseLink" type="text" class="validate">
          <label for="txtCourseLink">Course Link</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="txtImageLink" type="text" class="validate">
          <label for="txtImageLink">Image Link</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s6">
          <select name="coursePublisher" id="ddlPublisher">
            <option v-for="opt in publishers" :value="opt.id" :key="opt.id">{{opt.value.name}}</option>
          </select>
          <label for="coursePublisher">Publisher</label>
        </div>
        <div class="input-field col s6">
          <input id="txtPublishedDate" type="text">
          <label for="txtPublishedDate">Published Date</label>
        </div>
      </div>
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