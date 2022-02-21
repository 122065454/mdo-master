<template>
  <div id="app"
       ontouchstart>
    <!-- <img alt="Vue logo"
         src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <v-header></v-header>
    <router-view></router-view>
    <v-footer></v-footer>
  </div>
</template>

<script>
import header from '@/pages/components/header.vue'
import footer from '@/pages/components/footer.vue'
export default {
  name: 'App',
  components: {
    'v-header': header,
    'v-footer': footer,
  },
}
</script>

<style>
/* @import '@/assets/css/font.css'; */

#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
