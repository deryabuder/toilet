<template>
  <div id="app">
    <router-view/>
    <tab/>
  </div>
</template>

<script>
import Tab from './base/Tab'
export default {
  name: 'App',
  components: {
    Tab
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
