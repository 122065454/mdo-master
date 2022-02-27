<template>

  <div class="main">
    <!-- <video controls  src="@/assets/images/bg.webm" type="video/webm" width="500px" height="300px"  loop="loop" autoplay="autoplay"> -->

    <!-- <video  autoplay="autoplay" loop="loop" muted="muted">
                           <source src="@/assets/images/bg.webm" type="video/webm"/>
               </video>       -->

    <div class="content"
         v-if="isPC">
      <h1 class=" wow  animate__animated animate__zoomInDown "
          data-wow-duration="1s">Simeta</h1>
      <h2 class=" wow  animate__animated animate__backInDown"
          data-wow-duration="2s"> The first virtual futuristic eCommerce marketplace where users can buy and sell items in both the crypto field and the physical world with cryptocurrencies worldwide
      </h2>
      <div class="buttons  wow  animate__animated animate__bounceInLeft"
           data-wow-duration="3s">
        <div class="button_1">
          <a href="https://metadaosworld.gitbook.io/simeta/"
             target="_blank"
             rel="noopener noreferrer">
            <span> Whitepaper</span>
          </a>
        </div>
        <div class="button_2"
             @click="Metaverse">
          <span class="Metaverse"> Enter Metaverse</span>
          <div class="soon"
               v-show="soonShow">SOON</div>
        </div>
      </div>
    </div>

    <!-- h5 -->

    <div class="content_h5"
         v-if="!isPC">
      <h1 class=" wow  animate__animated animate__zoomInDown "
          data-wow-duration="1s">Simeta</h1>
      <h2 class=" wow  animate__animated animate__backInDown"
          data-wow-duration="2s"> The first virtual futuristic eCommerce marketplace where users can buy and sell items in both the crypto field and the physical world with cryptocurrencies worldwide
      </h2>
      <div class="buttons  wow  animate__animated animate__bounceInLeft"
           data-wow-duration="3s">
        <div class="button_1">
          <a href="https://metadaosworld.gitbook.io/simeta/"
             target="_blank"
             rel="noopener noreferrer">
            <span> Whitepaper</span>
          </a>
        </div>
        <div class="button_2"
             @click="Metaverse">
          <span class="Metaverse"> Enter Metaverse</span>
          <div class="soon"
               v-show="soonShow">SOON</div>
        </div>
      </div>
    </div>
    <contact class="wow  animate__animated animate__zoomInDown"
             v-if="isPC"></contact>
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
  data() {
    return {
      soonShow: false,
    }
  },
  mounted() {
    var options = {
      //默认为true
      live: false,
    }
    new WOW(options).init()
  },
  methods: {
    Metaverse() {
      this.soonShow = !this.soonShow
    },
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
  position: relative;
}
video {
  width: 100%;
  min-height: 100%; //不会因视频尺寸造成页面需要滚动
  width: auto;
  height: auto; //尺寸保持原视频大小
  z-index: 100; //z轴定位，小于0即可
  -webkit-filter: grayscale(20%); //添加灰度蒙版，如果设定为100%则视频显示为黑白
}
a {
  color: #fff;
}

.soon {
  position: absolute;
  top: 20 / @p;
  left: 80 / @p;
  height: 10 / @p;
  font-size: 12px;
  // line-height: 0;
}

@media screen and (min-width: 700px) {
  .content {
    transform: skewX(-5deg);
  }
  h1 {
    transform: skewX(5deg);
  }
  h2 {
    transform: skewX(5deg);
  }
  .buttons {
    transform: skewX(5deg);
  }
}
.content {
  position: absolute;
  top: 309 / @p;
  left: 631 / @p;
  border: 2px solid #fff;

  width: 40%;
  // height: 500px;
  margin: auto;
  text-align: center;
  background: rgba(24, 22, 22, 0.6);
  transform-origin: 0 0;
  // background: rgba(29, 21, 22, 0.5);
  padding: 50 / @p 20 / @p;
}

h1 {
  font-size: 70 / @p;
  font-family: Cabin;
  font-weight: 600;
  color: #fefefe;
}
h2 {
  font-size: 24 / @p;
  font-family: AlibabaPuHuiTi;
  font-weight: 400;
  color: #cad1de;
  line-height: 51 / @p;
  // transform: skewX(5deg)
}
.buttons {
  font-size: 20 / @p;
  font-family: AlibabaPuHuiTi;
  font-weight: 400;
  margin-top: 50 / @p;
  display: flex;
  justify-content: space-evenly;
  // transform: skewX(5deg);

  .button_1,
  .button_2 {
    // display: flex;
    // align-items: center;
    // justify-content: center;
    position: relative;
    border-radius: 40 / @p;
    // height: 60 / @p;
    font-size: 22 / @p;
    font-family: AlibabaPuHuiTi;
    font-weight: 400;
    line-height: 60 / @p;
    color: #02071b;
    cursor: pointer;
  }
  .button_1 {
    width: 200 / @p;
    height: 60 / @p;
    background: #ffc000;

    img {
      width: 20 / @p;
      height: 20 / @p;
      margin-left: 12 / @p;
    }
  }
  .button_2 {
    width: 200 / @p;
    height: 60 / @p;
    background: #ffffff;
    opacity: 0.7;

    img {
      width: 16 / @p;
      height: 16 / @p;
      margin-left: 12 / @p;
    }
  }
}
@media screen and (max-width: 700px) {
  .main {
    background: url(~@/assets/images/h5/BG.png) center no-repeat;
    background-size: cover;
    height: 80%;
    padding: 200 / @p 65 / @p 70 / @p 65 / @p;
  }
  .soon {
    position: absolute;
    top: 23 / @p;
    left: 70 / @p;
    height: 20 / @p;
    font-size: 12 / @p;
    // line-height: 0;
  }
  .content_h5 {
    text-align: center;
  }
  .buttons {
    font-size: 36 / @p;
    flex-direction: column;
    text-align: center;
    align-items: center;
    .button_1 {
      width: 200 / @p;
      margin-bottom: 40 / @p;
    }
    .button_2 {
      width: 200 / @p;
      // margin-bottom: 40 / @p;
    }
  }

  h2 {
    font-size: 26 / @p;
  }
}
</style>