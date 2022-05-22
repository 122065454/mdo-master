<template>
  <div id="app" ontouchstart>
    <!-- <img alt="Vue logo"
         src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <v-header></v-header>
    <router-view @mouseenter.native="over"></router-view>
    <v-footer></v-footer>
  </div>
</template>

<script>
import vheader from '@/pages/components/header.vue'
import vfooter from '@/pages/components/footer.vue'
export default {
  name: 'App',
  components: {
    'v-header': vheader,
    'v-footer': vfooter,
  },
  methods:{
    over(){
      this.$bus.$emit('overPage')
    }
  }
}
</script>

<style>
@import '~@/assets/css/font.less';

#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
