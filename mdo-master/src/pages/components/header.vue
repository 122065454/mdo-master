<template>
  <header>
    <div class="logo">
      <img src="@/assets/images/LOGO.png"
           alt="">
      <p class=" wow  animate__animated animate__flipInX "
         data-wow-duration="1s">METADAOS WORLD</p>
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
</template>
<script>
import { WOW } from 'wowjs'

export default {
  name: 'header',
  methods: {
    async connectWallect() {
      if (typeof window.ethereum !== 'undefined') {
        let addr = await ethereum.request({ method: 'eth_requestAccounts' })
        console.log('address:', addr[0])
      } else {
      }
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
header {
  width: 100%;
  height: 54 / @p;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  margin-top: 50 / @p;
  z-index: 100;
}
.logo {
  display: flex;
  align-items: center;
  margin-left: 283 / @p;
  img {
    width: 65 / @p;
    height: 54 / @p;
  }
  p {
    margin-left: 33 / @p;
    width: 350 / @p;
    height: 24 / @p;
    font-size: 34 / @p;
    font-family: Alibaba PuHuiTi;
    font-weight: bold;
    color: #182c82;
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
  }
  li:first-child {
    display: flex;
    align-items: center;
  }

  li {
    margin-left: 30 / @p;
    cursor: pointer;
  }
  img {
    width: 22 / @p;
    height: 22 / @p;
    margin-right: 6 / @p;
  }
}
</style>