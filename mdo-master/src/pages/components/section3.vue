<template>
  <div class="main">
    <div class="content">
      <h1 class=" wow  animate__animated animate__fadeInUp"
          data-wow-duration="1s">Partners & Investors</h1>
      <h2 class=" wow  animate__animated animate__fadeInUp"
          data-wow-duration="2s">We are proud to have these amazing funds and people by our side as we build out HowlCity Network.</h2>
      <div class="partner wow  animate__animated animate__fadeInUp"
           data-wow-duration="2s">
        <img src="@/assets/images/partner.png"
             alt="">
      </div>
    </div>
    <!-- <v-footer></v-footer> -->
  </div>
</template>
<script>
import footer from '../components/footer.vue'
import { WOW } from 'wowjs'

export default {
  name: 'section3',
  components: {
    'v-footer': footer,
  },
  mounted() {
    var options = {
      //默认为true
      live: true,
    }
    new WOW(options).init()
  },
}
</script>
<style lang="less" scoped>
@p: 100rem;
.main {
  width: 100%;
  height: 1104 / @p;
  background: url(~@/assets/images/bg3.png) center no-repeat;
  background-size: cover;
  // overflow: hidden;
}
.content {
  margin: 300 / @p auto 80 / @p;
  text-align: center;
  width: 1361 / @p;
  // overflow: hidden;
}
h1 {
  font-size: 40 / @p;
  font-family: Cabin;
  font-weight: 600;
  color: #0c84e4;
}
h2 {
  font-size: 24 / @p;
  font-family: Alibaba PuHuiTi;
  font-weight: 400;
  color: #0c84e4;
  margin: 34 / @p 0 60 / @p 0;
}
.partner {
  width: 1300 / @p;
  height: 500 / @p;
  margin: auto;
  img {
    width: 100%;
  }
}
</style>