<template>
  <div id="app">
    <v-header></v-header>
    <v-tab></v-tab>
    <router-view/>
  </div>
</template>
<script>
import VHeader from './components/header/header';
import VTab from './components/tab/tab';
export default {
  components : {
    VHeader,
    VTab
  }
}
</script>
<style>
*{
  padding: 0; 
  margin: 0;
}
</style>
