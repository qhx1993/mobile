<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'

export default {
  name: 'app',
  components: {
    AppHeader
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>
