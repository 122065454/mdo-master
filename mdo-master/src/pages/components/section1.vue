<template>

  <div class="main">
    <div class="content">
      <h1 class=" wow  animate__animated animate__zoomInDown "
          data-wow-duration="1s">MetaDaos World</h1>
      <h2 class=" wow  animate__animated animate__backInDown"
          data-wow-duration="2s"> The first virtual futuristic eCommerce marketplace where users can buy and sell items in both the crypto field and the physical world with cryptocurrencies worldwide
      </h2>
      <div class="buttons  wow  animate__animated animate__bounceInLeft"
           data-wow-duration="3s">
        <div class="button_1">
          <a href="https://app.gitbook.com/s/mlIj6Clqca34joALWnkx/"
             target="_blank"
             rel="noopener noreferrer">
            <span> Whitepaper</span>
            <!-- <img src="@/assets/images/icon-white.png"
                 alt=""> -->
          </a>
        </div>
        <div class="button_2">
          <span> Enter Metaverse</span>
          <!-- <img src="~@/assets/images/icon-income.png"
               alt=""> -->
        </div>
      </div>
    </div>
    <contact class="wow  animate__animated animate__zoomInDown"></contact>
  </div>
</template>
<script>
import { WOW } from 'wowjs'
import contact from './contact.vue'
export default {
  name: 'section1',
  components: {
    contact,
  },
  mounted() {
    var options = {
      //默认为true
      live: false,
    }
    new WOW(options).init()
  },
}
</script>

<style lang="less" scoped>
@p: 100rem;

.main {
  height: 100vh;
  width: 100%;
  background: url(~@/assets/images/bg.png) center no-repeat;
  background-size: cover;
  overflow: hidden;
}
a {
  color: #fff;
}
.content {
  width: 978 / @p;
  margin: 359 / @p auto;
  text-align: center;
}
h1 {
  font-size: 76 / @p;
  font-family: Cabin;
  font-weight: 600;
  color: #fefefe;
}
h2 {
  font-size: 32 / @p;
  font-family: Alibaba PuHuiTi;
  font-weight: 400;
  color: #dde3ef;
  line-height: 51 / @p;
}
.buttons {
  font-size: 20 / @p;
  font-family: Alibaba PuHuiTi;
  font-weight: 400;
  margin-top: 70 / @p;
  display: flex;
  justify-content: space-evenly;

  .button_1,
  .button_2 {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 40 / @p;
    height: 80 / @p;
    font-size: 36 / @p;
    font-family: Alibaba PuHuiTi;
    font-weight: 400;
    color: #02071b;
  }
  .button_1 {
    width: 320 / @p;
    height: 80 / @p;
    background: #ffc000;

    img {
      width: 20 / @p;
      height: 20 / @p;
      margin-left: 12 / @p;
    }
  }
  .button_2 {
    width: 360 / @p;
    height: 80 / @p;
    background: #ffffff;
    opacity: 0.7;

    img {
      width: 16 / @p;
      height: 16 / @p;
      margin-left: 12 / @p;
    }
  }
}
</style>