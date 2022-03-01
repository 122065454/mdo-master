<template>
  <div class="main">
    <img src="@/assets/images/bg2.png"
         v-if="isPC"
         class="bg"
         alt="">
    <img src="@/assets/images/h5/bg2.png"
         v-if="!isPC"
         class="bg"
         alt="">
    <h1 class=" wow  animate__animated animate__fadeInUp"
        v-if="isPC"
        data-wow-duration="1s">Roadmap</h1>
    <h1 v-if="!isPC">Roadmap</h1>
    <div class="route"></div>
    <div class="phase1 wow  animate__animated animate__backInLeft"
         data-wow-duration="1s">
      <div class="tips tips_1">
        <div class="circle">
          <img src="@/assets/images/circle.svg"
               alt="">
        </div>
        <div class="title">
          <p>Phase 1</p>
          <p>Q1 2022</p>
        </div>
      </div>
    </div>
    <div class="phase2 wow  animate__animated animate__backInLeft"
         data-wow-duration="1.1s">
      <div class="tips tips_2">
        <div class="circle">
          <img src="@/assets/images/circle.svg"
               alt="">
        </div>
        <div class="title">
          <p>Phase 2</p>
          <p>Q2 2022</p>
        </div>
      </div>
    </div>
    <div class="phase3 wow  animate__animated animate__backInLeft"
         data-wow-duration="1.2s">
      <div class="tips tips_3">
        <div class="circle">
          <img src="@/assets/images/circle.svg"
               alt="">
        </div>
        <div class="title">
          <p>Phase 3</p>
          <p>Q3 2022</p>
        </div>
      </div>
    </div>
    <div class="phase4 wow  animate__animated animate__backInLeft"
         data-wow-duration="1.3s">
      <div class="tips tips_4">
        <div class="circle">
          <img src="@/assets/images/circle.svg"
               alt="">
        </div>
        <div class="title">
          <p>Phase 4</p>
          <p>Q4 2022</p>
        </div>
      </div>
    </div>
    <div class="phase5 wow  animate__animated animate__backInLeft"
         data-wow-duration="1.4s">
      <div class="tips tips_5">
        <div class="circle">
          <img src="@/assets/images/circle.svg"
               alt="">
        </div>
        <div class="title">
          <p>Phase 5</p>
          <p>Q1-Q4 2023</p>
        </div>
      </div>
    </div>
    <!-- <div class="space">
    </div> -->
    <div class="rocket"></div>
    <!-- content -->
    <div :class="['content', item.sclass]"
         v-for="(item,index) in contentList"
         :key="index">
      <div v-html="item.content"></div>
    </div>

  </div>
</template> 
<script>
import { WOW } from 'wowjs'
export default {
  name: 'section2',
  data() {
    return {
      contentList: [
        {
          content:
            '1）Market research, feasibility analysis & team formation;<br> 2) Business model design and simulation；<br>3) Whitepaper and website establish;<br>4) Issuance of utility tokens.<br>5) Seed & Private round sale;',
          sclass: 'phase1_content',
        },
        {
          content:
            '1) Land system & Crypto eCommerce platform development;<br> 2) Social media accounts registration and marketing; <br>3) Issuance of utility tokens.<br>4) Invite the first batch of sellers <br>5) Launch SMT token on different launchpads & IDO platform',
          sclass: 'phase2_content',
        },
        {
          content:
            '1) Optimization of Land system & Crypto eCommerce System<br> 2) Invite the second batch of sellers & achieve a 20 million USDT turnover on the crypto eCommerce platform ',
          sclass: 'phase3_content',
        },
        {
          content:
            '1) Simeta metaverse development includes land NFT, customization of characters, pet system, land and pet NFT marketplace, NFT farming system, etc; <br>2) Promote for merchants to complete sales of $200 million;<br> 3) List the utility tokens on CEX;<br> 4) Marketing by listing land and pet NFT via INO. ',
          sclass: 'phase4_content',
        },
        {
          content:
            '1) Combine Crypto eCommerce platform and Simeta metaverse to complete Simeta, a metaverse eCommerce platform where users can shop on an emerging immersive digital environment with other users around the world;<br> 2)Optimization of the whole system and invite more merchants;<br>3) Invite more merchants & promote for merchants to complete sales of $2 billion; ',
          sclass: 'phase5_content',
        },
      ],
    }
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
@media screen and (min-width: 700px) {
  .phase1:hover,
  .phase2:hover,
  .phase3:hover,
  .phase4:hover,
  .phase5:hover {
    transform: translateY(10px);
  }
}

.phase1:hover ~ .phase1_content,
.phase2:hover ~ .phase2_content,
.phase3:hover ~ .phase3_content,
.phase4:hover ~ .phase4_content,
.phase5:hover ~ .phase5_content {
  display: block;
}
.main {
  width: 100%;
  height: 1336 / @p;
  // background: url(~@/assets/images/map.png) center no-repeat;
  // background-size: cover;
  // overflow: hidden;
  position: relative;
  // background: linear-gradient(10deg, #4ecdfb 0%, #1698e9 30%, #0a76e1 100%);
}
.tips {
  width: 217 / @p;
  height: 84 / @p;
  display: flex;
  .circle {
    width: 60 / @p;
    height: 60 / @p;
  }
  img {
    width: 100%;
    vertical-align: text-top;
  }
  .title {
    font-family: AlibabaPuHuiTi;
    & p:first-child {
      font-size: 40 / @p;
      font-weight: 500;
      color: #02e8ff;
    }
    & p:last-child {
      font-weight: 400;
      color: #ffffff;
      font-size: 24 / @p;
    }
  }
}
.space {
  position: absolute;
  top: 10%;
  right: -6%;
  width: 510 / @p;
  height: 345 / @p;
  background: url(~@/assets/images/space.png) center no-repeat;
  background-size: cover;
}
h1 {
  font-size: 56 / @p;
  font-family: Cabin;
  font-weight: 600;
  color: #ffffff;
  position: absolute;
  top: 10%;
  left: 42%;
}
// .rocket{
//   position: absolute;
//   left: 0;
//   opacity: 0.1;
//   bottom:10%;
//   width: 338px;
//   height: 447px;
//    background: url(~@/assets/images/huojian.jpg) center no-repeat;
//   background-size: cover
// }
.phase1_content {
  position: absolute;
  top: 900 / @p;
  left: 120 / @p;
  padding: 10 / @p;
  width: 430 / @p;
  height: 270 / @p;
  display: none;
}
.phase2_content {
  position: absolute;
  bottom: 130 / @p;
  left: 1000 / @p;
  width: 619 / @p;
  height: 230 / @p;
  padding: 10 / @p;
  display: none;
}
.phase3_content {
  position: absolute;
  z-index: 999;
  top: 420 / @p;
  right: 40 / @p;
  width: 350 / @p;
  height: 260 / @p;
  padding: 10 / @p;
  display: none;
}
.phase4_content {
  position: absolute;
  top: 190 / @p;
  right: 620 / @p;
  width: 600 / @p;
  height: 230 / @p;
  padding: 10 / @p;
  line-height: 35 / @p !important;
  display: none;
}
.phase5_content {
  position: absolute;
  top: 302 / @p;
  left: 20 / @p;
  width: 400 / @p;
  height: 420 / @p;
  padding: 10 / @p;
  display: none;
}
.content {
  background: #ffffff;
  opacity: 0.6;
  border-radius: 30 / @p;
  font-size: 19 / @p;
  font-family: AlibabaPuHuiTi;
  font-weight: 400;
  color: #3d4a84;
  word-break: keep-all;
  line-height: 40 / @p;
  -webkit-hyphens: auto;
  -moz-hyphens: auto;
  hyphens: auto;
}
.tips_1 {
  position: absolute;
  top: 300 / @p;
  left: 60 / @p;
}
.tips_2 {
  position: absolute;
  top: 120 / @p;
  left: 290 / @p;
}
.tips_3 {
  position: absolute;
  top: -75 / @p;
  left: 40 / @p;
}
.tips_4 {
  position: absolute;
  top: 162 / @p;
  left: 260 / @p;
}
.tips_5 {
  position: absolute;
  top: -53 / @p;
  left: 30 / @p;
}
.bg {
  // margin-top: 150 / @p;
}

.route {
  position: absolute;
  top: 405 / @p;
  left: 635 / @p;
  width: 856 / @p;
  height: 512 / @p;
  background: url(~@/assets/images/route.png) center no-repeat;
  background-size: cover;
}
.phase1 {
  // animation: scaleDraw2 3s ease-in-out infinite;

  position: absolute;
  top: 669 / @p;
  left: 488 / @p;
  width: 327 / @p;
  height: 322 / @p;
  background: url(~@/assets/images/phase.png) center no-repeat;
  background-size: cover;
  transition: all 1s;
}
.phase2 {
  // animation: scaleDraw2 3s ease-in-out infinite;
  position: absolute;
  top: 684 / @p;
  left: 1020 / @p;
  width: 300 / @p;
  height: 252 / @p;
  background: url(~@/assets/images/phase2.png) center no-repeat;
  background-size: cover;
  transition: all 1s;
}
.phase3 {
  position: absolute;
  // animation: scaleDraw2 3s ease-in-out infinite;

  top: 260 / @p;
  left: 1236 / @p;
  width: 308 / @p;
  height: 258 / @p;
  background: url(~@/assets/images/phase3.png) center no-repeat;
  background-size: cover;
  transition: all 1s;
}
.phase4 {
  position: absolute;
  // animation: scaleDraw2 3s ease-in-out infinite;

  top: 400 / @p;
  left: 810 / @p;
  width: 284 / @p;
  height: 308 / @p;
  background: url(~@/assets/images/phase4.png) center no-repeat;
  background-size: cover;
  transition: all 1s;
}
.phase5 {
  position: absolute;
  // animation: scaleDraw2 3s ease-in-out infinite;

  top: 316 / @p;
  left: 383 / @p;
  width: 337 / @p;
  height: 254 / @p;
  background: url(~@/assets/images/phase5.png) center no-repeat;
  background-size: cover;
  transition: all 1s;
}

@keyframes scaleDraw {
  0% {
    transform: scale(1); /*开始为原始大小*/
  }
  25% {
    transform: scale(1.3); /*放大1.1倍*/
  }
  50% {
    transform: scale(1);
  }
  75% {
    transform: scale(1.3);
  }
}
@keyframes scaleDraw2 {
  0% {
    transform: scale(1); /*开始为原始大小*/
  }
  25% {
    transform: scale(1.05); /*放大1.1倍*/
  }
  50% {
    transform: scale(1);
  }
  75% {
    transform: scale(1.05);
  }
}
.circle {
  animation: scaleDraw 3s ease-in-out infinite;
}

@media screen and (max-width: 700px) {
  .main {
    margin-top: -1px;
  }
  .content {
    word-break: break-all;
  }
  .route {
    background: url(~@/assets/images/h5/route.png) center no-repeat;
    background-size: cover;
    width: 407 / @p;
    height: 1252 / @p;
    top: 372 / @p;
    left: 160 / @p;
  }
  h1 {
    top: 90 / @p;
    left: 50%;
    transform: translateX(-50%);
  }
  .tips_4 {
    position: absolute;
    top: 272 / @p;
    left: 50 / @p;
  }
  .tips_2 {
    position: absolute;
    top: 252 / @p;
    left: 50 / @p;
  }
  .phase1 {
    top: 233 / @p;
    left: 47 / @p;
  }
  .phase2 {
    top: 580 / @p;
    left: 420 / @p;
  }
  .phase3 {
    top: 882 / @p;
    left: 0%;
  }
  .phase4 {
    top: 1180 / @p;
    left: 400 / @p;
  }
  .phase5 {
    top: 1520 / @p;
    left: 50 / @p;
  }
  .phase5_content {
    top: 1400 / @p;
    left: 350 / @p;
    height: 430 / @p;
    background-color: #fff;
    opacity: 1;
  }
  .phase4_content {
    top: 1100 / @p;
    left: 30 / @p;
    width: 400 / @p;
    height: 380 / @p;
    background-color: #fff;
    opacity: 1;
  }
  .phase3_content {
    top: 830 / @p;
    left: 300 / @p;
    height: 280 / @p;
    background-color: #fff;
    opacity: 1;
  }
  .phase2_content {
    width: 350 / @p;
    top: 450 / @p;
    left: 60 / @p;
    height: 400 / @p;
    background-color: #fff;
    opacity: 1;
  }
  .phase1_content {
    top: 180 / @p;
    left: 370 / @p;
    height: 330 / @p;
    background-color: #fff;
    opacity: 1;
  }
}
</style>