<template>

  <div class="main">
    <div class="content">
      <h1 class=" wow  animate__animated animate__zoomInDown " data-wow-duration="1s">MetaDaos World</h1>
      <h2 class=" wow  animate__animated animate__backInDown" data-wow-duration="2s"> The first place where you can buy and sell items with your cryptocurrency</h2>
      <div class="buttons  wow  animate__animated animate__bounceInLeft" data-wow-duration="3s">
        <div class="button_1">
          <a href="https://app.gitbook.com/s/mlIj6Clqca34joALWnkx/" target="_blank" rel="noopener noreferrer">
          <span> Whitepaper</span>
          <img src="@/assets/images/icon-white.png"
               alt="">
          </a>
        </div>
        <div class="button_2">
          <span> Enter Metaverse</span>
          <img src="~@/assets/images/icon-income.png"
               alt="">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { WOW } from "wowjs";
export default {
  name:'section1',
    mounted() {
    var options = {
      //默认为true
      live: false
    };
    new WOW(options).init();
  }
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
a{
  color: #fff;
}
.content {
  width: 650 / @p;
  margin: 359 / @p auto;
}
h1 {
  font-size: 76 / @p;
  font-family: Cabin;
  font-weight: 600;
  color: #182c82;
}
h2 {
  font-size: 32 / @p;
  font-family: Alibaba PuHuiTi;
  font-weight: 400;
  color: #2f4b80;
  line-height: 51 / @p;
}
.buttons {
  font-size: 20 / @p;
  font-family: Alibaba PuHuiTi;
  font-weight: 400;
  margin-top: 70 / @p;
  display: flex;
  justify-content: space-around;
  .button_1,
  .button_2 {
    display: flex;
    align-items: center;
    border-radius: 28 / @p;
    height: 56 / @p;
  }
  .button_1 {
    color: #ffffff;
    background: linear-gradient(152deg, #07a7ee 0%, #0550dc 100%);
    padding: 13 / @p 20 / @p;
    img {
      width: 20 / @p;
      height: 20 / @p;
      margin-left: 12 / @p;
    }
  }
  .button_2 {
    background: #ffffff;
    opacity: 0.7;
    padding: 14 / @p 21 / @p;
    color: #182c82;
    img {
      width: 16 / @p;
      height: 16 / @p;
      margin-left: 12 / @p;
    }
  }
}
</style>