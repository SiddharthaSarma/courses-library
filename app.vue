<template>
    <div>
      <Header></Header>
      {{msg}}
      <button class="waves-effect waves-light btn" @click="onClick">change message</button>
      
      <div class="row">
        <course />
        <course />
        <course />
        <course />
      </div>
      <add-course></add-course>
            
    </div>
</template>

<script>
import Vue from 'vue';
import db from './firebaseinit';
import Header from './components/header';
import Course from './components/course';
import AddCourse from './components/add-course';
import { Component } from 'vue-property-decorator';
@Component({
  components: {
    Header,
    Course,
    AddCourse
  }
})
export default class App extends Vue {
  msg = 'Hi this is siddhartha';
  onClick() {
    this.msg = 'Hi! message is changed';
    db
      .collection('languages')
      .add({
        name: 'C',
      })
      .then(function(docRef) {
        console.log('Document written with ID: ', docRef.id);
      })
      .catch(function(error) {
        console.error('Error adding document: ', error);
      });
  }
  created() {
    db
      .collection('courses')
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          console.log(doc.id, ' => ', doc.data());
        });
      });
    db
      .collection('languages')
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          console.log(doc.id, ' => ', doc.data());
        });
      });
    db
      .collection('publisher')
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          console.log(doc.id, ' => ', doc.data());
        });
      });
  }
}
</script>
