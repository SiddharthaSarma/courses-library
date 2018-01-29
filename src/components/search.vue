<template>
  <v-content dark class="search-content">
    <v-layout>
      <v-flex>
        <div class="mb-3 input-group input-group--prepend-icon input-group--text-field input-group--single-line input-group--solo">
          <div class="input-group__input">
            <i aria-hidden="true" class="material-icons icon input-group__prepend-icon">search</i>
            <input tabindex="0" placeholder="Search" type="text" v-model="search" v-on:keyup="searchCourse">
              <i aria-hidden="true" class="material-icons icon input-group__append-icon"></i>
            </div>
        </div>
      </v-flex>
    </v-layout>
  </v-content>
</template>

<script>
import Vue from 'vue';
import EventBus from '../eventbus.js';
import { Component } from 'vue-property-decorator';

@Component({})
export default class Search extends Vue {
  search = '';

  searchCourse() {
    EventBus.$emit('SEARCH_COURSE', { search: this.search });
  }
}
</script>

<style>
.content--wrap.search-content {
  flex: unset;
}
div.input-group.input-group--solo {
  background: #303030;
}
</style>
