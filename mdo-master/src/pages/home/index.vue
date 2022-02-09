<template>
  <div class="main">
    <!-- 头部 -->
    <v-header></v-header>
    <section1></section1>
    <section2></section2>
    <section3></section3>

    <!-- <full-page :options="options">
      <div class="section">
        <div class="box1">
          <section1></section1>
        </div>
      </div>
      <div class="section">
        <div class="box2">
          <section2></section2>
        </div>
      </div>
      <div class="section">
        <div class="box3">
          <section3></section3>
        </div>
      </div>
    </full-page>  -->

    <!-- <v-footer></v-footer> -->
  </div>
</template>

<script>
import section1 from '../components/section1.vue'
import section2 from '../components/section2.vue'
import section3 from '../components/section3.vue'
import header from '../components/header.vue'
import footer from '../components/footer.vue'
export default {
  name: 'home',
  components: {
    section1,
    section2,
    section3,
    'v-header': header,
    'v-footer': footer,
  },
  data() {
    return {
      options: {
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        afterLoad: this.afterLoad,
        scrollOverflow: true,
        scrollBar: false,
        menu: '#menu',
        // navigation: true,
        // anchors: ['page1', 'page2', 'page3'],
        sectionsColor: [
          // '#41b883',
          // '#ff5f45',
          // '#0798ec',
          // '#fec401',
          // '#1bcee6',
          // '#ee1a59',
          // '#2c3e4f',
          // '#ba5be9',
          // '#b4b8ab',
        ],
      },
    }
  },
}
</script>

<style lang="less" scoped>
.main {
  scroll-behavior: smooth;
}
</style>