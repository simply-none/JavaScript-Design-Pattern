<template>
  <div id="app">
    <get-props msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import GetProps from './components/getProps/GetProps.vue'

export default {
  name: 'App',
  components: {
    GetProps
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
