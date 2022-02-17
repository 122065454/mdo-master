<template>
  <header v-if="isPC">
    <div class="logo">
      <img src="@/assets/images/h5/logo.png"
           alt="">
      <p class=" wow  animate__animated animate__flipInX "
         data-wow-duration="1s">Simeta</p>
    </div>
    <div class="menu">
      <ul>
        <li>
          <img src="@/assets/images/shopping.png"
               alt="">
          <span>Checkout</span>
        </li>
        <li @click="connectWallect">
          <span>WALLET</span>
        </li>
      </ul>
    </div>
  </header>
  <header v-else>
    <div class="logo_h5">
      <img src="@/assets/images/h5/logo.png"
           alt="">
      <span>Simeta</span>
    </div>
    <div class="logo_right"
         @click="diagleShow">
      <img src="@/assets/images/h5/icon.png"
           alt="">
    </div>
    <van-popup v-model="show"
               position="left"
               :style="{ height: '100%',width:'60%' }">
      <ul>
        <li>
          <!-- <img src="@/assets/images/shopping.png"
               alt=""> -->
          Checkout
        </li>
        <li @click="connectWallect">
          WALLET
        </li>
      </ul>
    </van-popup>
  </header>
</template>
<script>
import { WOW } from 'wowjs'

export default {
  name: 'header',
  data() {
    return {
      show: false,
    }
  },
  methods: {
    async connectWallect() {
      if (typeof window.ethereum !== 'undefined') {
        let addr = await ethereum.request({ method: 'eth_requestAccounts' })
        console.log('address:', addr[0])
      } else {
      }
    },
    diagleShow() {
      this.show = !this.show
    },
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
@media screen and (min-width: 700px) {
  header {
    width: 100%;
    height: 100 / @p;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    // margin-top: 50 / @p;
    z-index: 100;
    background: rgba(0, 0, 0, 0.6);
  }
}

.logo {
  display: flex;
  align-items: center;
  margin-left: 283 / @p;
  img {
    width: 66 / @p;
    height: 74 / @p;
  }
  p {
    margin-left: 33 / @p;
    width: 350 / @p;
    height: 24 / @p;
    font-size: 34 / @p;
    font-family: Alibaba PuHuiTi;
    font-weight: bold;
    color: #fefefe;
    line-height: 24 / @p;
  }
}
.menu {
  font-size: 20 / @p;
  font-family: Alibaba PuHuiTi;
  font-weight: 500;
  margin-right: 285 / @p;
  ul {
    width: 100%;
    display: flex;
    position: relative;
  }
  li:first-child {
    display: flex;
    align-items: center;
  }

  li {
    margin-left: 30 / @p;
    cursor: pointer;
    color: #07a7ee;
  }
  img {
    width: 22 / @p;
    height: 22 / @p;
    margin-right: 6 / @p;
  }
}

@media screen and (max-width: 700px) {
  /deep/.van-popup {
    background-color: #342b2b;
  }
  header {
    width: 100%;
    height: 120 / @p;
    position: fixed;
    top: 0;
    left: 0;
    // margin-top: 50 / @p;
    padding: 23 / @p 61 / @p 23 / @p 59 / @p;
    z-index: 999;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: space-between;
  }
  .logo_h5 {
    display: flex;
    align-items: center;
    img {
      width: 66 / @p;
      height: 74 / @p;
    }
    span {
      font-size: 40 / @p;
      font-family: Alibaba PuHuiTi;
      font-weight: bold;
      color: #fefefe;
      margin-left: 21 / @p;
    }
  }
  .logo_right {
    width: 28 / @p;
    height: 26 / @p;
    img {
      width: 100%;
      vertical-align: text-top;
      margin-top: 20 / @p;
    }
  }
  li {
    height: 60 / @p;
    padding-left: 20px;
    line-height: 60 / @p;
    font-size: 20 / @p;
    font-family: Alibaba PuHuiTi;
    border-bottom: 1px solid #dbd1cc;
    color: #dbbbbb;
    img {
      width: 25 / @p;
      height: 25 / @p;
      margin-left: 10px;
    }
  }
}
</style>