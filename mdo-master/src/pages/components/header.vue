<template>
  <header v-if="isPC">
    <div class="menu_left">
      <ul>
        <li @mouseover='subMenuShow'>
          <span>About</span>
          <ol class="sbumenu"
              v-show="subshow"
              @mouseout='subMenuOut'>
            <li>
              <a href="https://simeta.gitbook.io/about/whitepaper/our-team"
                 target="_blank"
                 rel="noopener noreferrer">Team</a>
            </li>
            <li>
              <a href="https://simeta.gitbook.io/about/whitepaper/our-roadmap"
                 target="_blank"
                 rel="noopener noreferrer">Roadmap</a>
            </li>
          </ol>
        </li>
        <li @mouseover='subMenuShow2'>
          <span>Merchant</span>
          <ol class="sbumenu2"
              v-show="subshow2"
              @mouseout='subMenuOut2'>
            <li>
              <a href="https://form.nativeforms.com/wQlVlWv1jZmATYyUFMy0Db"
                 target="_blank"
                 rel="noopener noreferrer">Seller Application</a>
            </li>
            <li class="noneshow">
              Seller Center
            </li>
          </ol>
        </li>
        <li class="noshow">
          <span>DeBank</span>
        </li>
        <li class="noshow">
          <span>Land</span>
        </li>
      </ul>

    </div>
    <div class="logo">
      <img src="@/assets/images/h5/logo.png"
           alt="">
      <p class=" wow  animate__animated animate__flipInX "
         data-wow-duration="1s">Simeta</p>
    </div>
    <div class="menu">
      <ul>
        <!-- <li @click="$router.push('/presale')">
          <span>Presale</span>
        </li> -->
        <li>
          <img src="@/assets/images/shopping.png"
               alt="">
          <span>Checkout</span>
        </li>
        <li @click="connectWallect">
          <span>Wallet</span>
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
      <van-icon name="cross"
                @click="close"
                class="icon"
                size="30" />
      <ul>
        <li>
          <!-- <img src="@/assets/images/shopping.png"
               alt=""> -->
          Checkout
        </li>
        <li @click="connectWallect">
          Wallet
        </li>
        <li>
          <a href="https://simeta.gitbook.io/about/whitepaper/our-team"
             target="_blank"
             rel="noopener noreferrer">Team</a>

        </li>
        <li>
          <a href="https://simeta.gitbook.io/about/whitepaper/our-roadmap"
             target="_blank"
             rel="noopener noreferrer">Roadmap</a>

        </li>
        <li>
          <a href="https://form.nativeforms.com/wQlVlWv1jZmATYyUFMy0Db"
             target="_blank"
             rel="noopener noreferrer">Seller Application</a>

        </li>
        <li>
          <span>Seller Center</span>
        </li>
        <li>
          <span>DeBank</span>
        </li>
        <li>
          <span>Land</span>
        </li>

      </ul>
    </van-popup>
  </header>
</template>
<script>
import { WOW } from 'wowjs'

export default {
  name: 'headers',
  data() {
    return {
      show: false,
      subshow: false,
      subshow2: false,
      activeNames: ['1'],
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
    subMenuShow() {
      this.subshow = true
      this.subshow2 = false
    },
    subMenuOut() {
      this.subshow = false
    },
    subMenuShow2() {
      this.subshow2 = true
      this.subshow = false
    },
    subMenuOut2() {
      this.subshow2 = false
    },
    close() {
      this.show = false
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
    height: 80 / @p;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    position: fixed;
    // margin-top: 50 / @p;
    z-index: 100;

    background: rgba(0, 0, 0, 0.6);
  }
  .noneshow {
    color: #cdc2c2;
  }
}
.sbumenu {
  width: 100 / @p;
  height: 100 / @p;
  font-size: 16 / @p;
  position: absolute;
  background: rgba(0, 0, 0, 0.6);

  // opacity: 0.6;
  border-radius: 5 / @p;
  font-size: 19 / @p;
  font-family: AlibabaPuHuiTi;
  font-weight: 400;
  text-align: center;
  top: 50 / @p;
  left: -20 / @p;
  // background: rgba(0, 0, 0, 0.6);

  li {
    margin-left: unset !important;
    margin-top: 10px;
  }
  a:hover {
    color: #07a7ee;
  }
  a {
    // color: #07a7ee;
    color: #fefefe;
  }
}
.sbumenu2 {
  width: 200 / @p;
  height: 100 / @p;
  font-size: 16 / @p;
  position: absolute;
  background: rgba(0, 0, 0, 0.6);
  //  background: #ffffff;
  // opacity: 0.6;
  border-radius: 5 / @p;
  font-size: 19 / @p;
  font-family: AlibabaPuHuiTi;
  font-weight: 400;
  text-align: center;
  top: 50 / @p;
  left: -50 / @p;
  li {
    margin-left: unset !important;
    margin-top: 10px;
  }
  li:last-child:hover::after {
    content: 'SOON';
    position: absolute;
    top: 20 / @p;
    left: 60 / @p;
    font-size: 12 / @p;
  }
  a {
    color: #fff;
  }
  a:hover {
    color: #07a7ee;
  }
}
.logo {
  display: flex;
  align-items: center;
  // margin-left: 283 / @p;
  img {
    width: 60 / @p;
    height: 54 / @p;
  }
  p {
    margin-left: 33 / @p;
    width: 350 / @p;
    height: 24 / @p;
    font-size: 34 / @p;
    font-family: AlibabaPuHuiTi;
    font-weight: bold;
    color: #fefefe;
    line-height: 24 / @p;
  }
}
.menu_left {
  font-size: 20 / @p;
  font-family: AlibabaPuHuiTi;
  font-weight: bold;
  color: #fefefe;
  // margin-left: 100px;
  ul {
    width: 100%;
    display: flex;
    position: relative;
    align-items: center;
  }
  li {
    margin-left: 30 / @p;
    // color: #cdc2c2;
    position: relative;
  }
  li:nth-child(n + 3) {
    color: #cdc2c2;
  }
  .noshow {
    cursor: not-allowed;
  }

  li:nth-child(n + 3):hover::after {
    content: 'SOON';
    position: absolute;
    top: 20 / @p;
    left: 10 / @p;
    font-size: 12 / @p;
  }
}
.menu {
  font-size: 20 / @p;
  font-family: AlibabaPuHuiTi;
  font-weight: 500;
  // margin-right: 285 / @p;
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
    color: #fefefe;
    display: flex;
    align-items: center;
  }
  li:hover {
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
  /deep/ .van-cell {
    background-color: #342b2b;
  }
  .icon {
    float: right;
    color: #dbbbbb;
    margin-top: 10 / @p;
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
      width: 80 / @p;
      height: 74 / @p;
    }
    span {
      font-size: 40 / @p;
      font-family: AlibabaPuHuiTi;
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
  ul {
    margin-top: 100 / @p;
  }
  li {
    height: 60 / @p;
    padding-left: 20px;
    line-height: 60 / @p;
    font-size: 30 / @p;
    font-family: AlibabaPuHuiTi;
    color: #fefefe;
    a {
      font-family: AlibabaPuHuiTi;
      color: #fefefe;
      font-size: 30 / @p;
    }
    img {
      width: 25 / @p;
      height: 25 / @p;
      margin-left: 10px;
    }
  }
  li:nth-child(n + 5) {
    color: #746969;
  }
}
</style>