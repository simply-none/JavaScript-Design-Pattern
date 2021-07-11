<template>
  <div id="app">
    <form-test></form-test>
    <get-props msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import GetProps from './components/getProps/GetProps.vue'
import FormTest from './components/form/index.vue'

export default {
  name: 'App',
  components: {
    GetProps,
    FormTest
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
