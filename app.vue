<template>
  <v-app dark>
		<v-toolbar class="teal darken-3">
			<v-toolbar-title>Title</v-toolbar-title>
			<v-spacer></v-spacer>
			<v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>
			<v-toolbar-items class="hidden-sm-and-down">
				<v-btn flat @click="toggleList(true)">List</v-btn>
				<v-btn flat @click="toggleList(false)">create course</v-btn>
			</v-toolbar-items>
  	</v-toolbar>
		<v-content>
			<v-layout>
				<v-flex v-show="showList">
					<List />
				</v-flex>
				<v-flex class="pa-3" v-if="!showList">
					<vform></vform>
				</v-flex>
		  </v-layout>
	  </v-content>
	</v-app>
</template>

<script>
import Vue from 'vue';
import db from './firebaseinit';
import List from './components/list';
import vform from './components/add-course';
import { Component } from 'vue-property-decorator';
import('./node_modules/vuetify/dist/vuetify.min.css')
@Component({
  components: {
    List,
    vform
  }
})
export default class App extends Vue {
  showList = true;
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
  toggleList(val) {
    this.showList = val;
  }
}
</script>
