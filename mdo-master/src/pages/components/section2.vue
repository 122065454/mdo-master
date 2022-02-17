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
        data-wow-duration="1s">ROADMAP</h1>
    <h1 v-if="!isPC">ROADMAP</h1>
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
          <p>Q4 2021</p>
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
          <p>Q1 2022</p>
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
          <p>Q2 2022</p>
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
          <p>Q3 2022</p>
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
          <p>Q4 2022</p>
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
      {{item.content}}
    </div>
    <!-- <div class="content phase2_content">Crypto E-mall development
      Website & Crypto E-mall development
      Seed & Private round sale,
      Social media accounts registration and marketing.
      Issuance of utility tokens.
    </div>
    <div class="content phase3_content">Merchants Invitation and optimization
      Marketing by IDOs & List the utility tokens on Uniswap.
      Invite merchants to list their products on Simeta.
      System optimization & officially launches.
    </div>
    <div class="content phase4_content">Metaverse development include land NFT, customization of characters, pet system, land and pet NFT marketplace, NFT farming system, etc.
      Promote for merchants to complete sales of $20 million.
      List the utility tokens on CEX.
      Marketing by listing land and pet NFT via INO.
    </div>
    <div class="content phase5_content"> Achievement of Simeta
      Combine Crypto E-mall and metaverse to realize a Simeta where users can shop on an emerging immersive digital land with other users around the world.
      Promote for merchants to complete sales of $100 million.
      Optimization of the whole system and invite more merchants
    </div> -->
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
            'Feasibility Analysis Market research and feasibility analysis Team formation Business model design and simulation',
          sclass: 'phase1_content',
        },
        {
          content:
            'Crypto E-mall development Website & Crypto E-mall development Seed & Private round sale,Social media accounts registration and marketing.Issuance of utility tokens.',
          sclass: 'phase2_content',
        },
        {
          content:
            'Merchants Invitation and optimization Marketing by IDOs & List the utility tokens on Uniswap.Invite merchants to list their products on Simeta.System optimization & officially launches.',
          sclass: 'phase3_content',
        },
        {
          content:
            'Metaverse development include land NFT, customization of characters, pet system, land and pet NFT marketplace, NFT farming system, etc.Promote for merchants to complete sales of $20 million.List the utility tokens on CEX.Marketing by listing land and pet NFT via INO.',
          sclass: 'phase4_content',
        },
        {
          content:
            'Achievement of Simeta Combine Crypto E-mall and metaverse to realize a Simeta where users can shop on an emerging immersive digital land with other users around the world.Promote for merchants to complete sales of $100 million.Optimization of the whole system and invite more merchants',
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
    font-family: Alibaba PuHuiTi;
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
  left: 200 / @p;
  padding: 10 / @p;
  width: 350 / @p;
  height: 210 / @p;
  display: none;
}
.phase2_content {
  position: absolute;
  bottom: 180 / @p;
  left: 1000 / @p;
  width: 602 / @p;
  height: 210 / @p;
  padding: 27 / @p;
  display: none;
}
.phase3_content {
  position: absolute;
  top: 420 / @p;
  right: 10 / @p;
  width: 350 / @p;
  height: 320 / @p;
  padding: 10 / @p;
  display: none;
}
.phase4_content {
  position: absolute;
  top: 190 / @p;
  right: 620 / @p;
  width: 600 / @p;
  height: 200 / @p;
  padding: 10 / @p;
  line-height: 35 / @p !important;
  display: none;
}
.phase5_content {
  position: absolute;
  top: 302 / @p;
  left: 20 / @p;
  width: 400 / @p;
  height: 400 / @p;
  padding: 10 / @p;
  display: none;
}
.content {
  background: #ffffff;
  opacity: 0.6;
  border-radius: 30 / @p;
  font-size: 20 / @p;
  font-family: Alibaba PuHuiTi;
  font-weight: 400;
  color: #3d4a84;
  line-height: 45 / @p;
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
  top: -65 / @p;
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
    top: 1520 / @p;
    left: 50 / @p;
  }
  .phase2 {
    top: 1150 / @p;
    left: 400 / @p;
  }
  .phase3 {
    top: 882 / @p;
    left: 0%;
  }
  .phase4 {
    top: 637 / @p;
    left: 420 / @p;
  }
  .phase5 {
    top: 233 / @p;
    left: 47 / @p;
  }
  .phase5_content {
    top: 180 / @p;
    left: 20 / @p;
    background-color: #fff;
    opacity: 1;
  }
  .phase4_content {
    top: 670 / @p;
    left: 60 / @p;
    height: 250 / @p;
    background-color: #fff;
    opacity: 1;
  }
  .phase3_content {
    top: 670 / @p;
    left: 60 / @p;
    height: 400 / @p;
    background-color: #fff;
    opacity: 1;
  }
  .phase2_content {
    top: 1200 / @p;
    left: 60 / @p;
    height: 230 / @p;
    background-color: #fff;
    opacity: 1;
  }
  .phase1_content {
    top: 1600 / @p;
    left: 320 / @p;
    height: 250 / @p;
    background-color: #fff;
    opacity: 1;
  }
}
</style>