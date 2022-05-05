<template>
  <div class="main">
    <!-- 头部 -->
    <!-- <v-header></v-header> -->
    <!-- <section1></section1>
    <section2></section2>
    <section3></section3> -->

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

    <section class="simeta_one">
      <div class="left_word">
        <h1>Simeta</h1>
        <p>The first virtual futuristic eCommerce marketplace where<br>users can buy and sell items in both the crypto field and the<br>physical world with cryptocurrencies worldwide</p>
        <div class="one_btn">
          <button>Whitepaper</button>
          <button>Clock-in</button>
        </div>
      </div>
      <div class="right_img">
        <div class="border">
          <img
            src="@/assets/images/33@2x.png"
            alt=""
          >
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </section>

    <section class="shop_to_earn">
      <h1 class="title">Shop -to-Earn</h1>
      <div class="shop_one">
        <img
          src="@/assets/images/shop_one.png"
          alt=""
        >
        <div class="word">
          <h1>Sellers</h1>
          <p>Sellers can earn additional $SMT for every completed order on<br>top of high profit thanks to lower service fee and advertising<br>cost compared with traditional ecommerce platform</p>
        </div>
      </div>
      <div class="shop_one">
        <div class="word">
          <h1>Buyers</h1>
          <p>Buyerss can earn additional $SMT for every completed<br>order at a reasonable price</p>
        </div>
        <img
          src="@/assets/images/shop_two.png"
          alt=""
        >
      </div>
    </section>

    <section class="shop_to_earn">
      <div class="shop_one">
        <img
          src="@/assets/images/shop_one.png"
          alt=""
        >
        <div class="word">
          <h1>All ecology</h1>
          <p>All users in simeta ecology can get $SMT every day by clocking<br>in Simeta website or APP</p>
        </div>
      </div>
      <div class="shop_one">
        <div class="word">
          <h1>Simeta team</h1>
          <p>Simeta will charge a service fee with a fixed ratio of 8% for every<br>completed order which is lower than that of traditional ecommerce<br>platforms (15-20%) of which 5% will be returned to simeta ecology<br>and 3% will be used for the develop Simeta </p>
        </div>
        <img
          src="@/assets/images/shop_two.png"
          alt=""
        >
      </div>
    </section>
    <section class="scenarios_smt">
      <h1 class="title">Scenarios of $SMT</h1>
      <div class="servies_one">
        <img
          src="@/assets/images/smt_one.png"
          alt=""
        >
        <div class="services one">
          <h1>Services and products</h1>
          <ul>
            <li>1. Pay advertising campaigns with $SMT only </li>
            <li>2. Buy special discount items with $SMT</li>
            <li>3. Join DAO by community voting for $SMT holders</li>
          </ul>
        </div>
      </div>
      <div class="servies_one">
        <div class="services two">
          <h1>Land and associate NFT</h1>
          <ul>
            <li>1. Buy land NFT with $SMT</li>
            <li>2. Buy rare accessories (including pets) for your avatars with $SMT</li>
            <li>3. Pay for tickets for selected scenes in Simeta metaverse</li>
          </ul>
        </div>
        <img
          src="@/assets/images/smt_one.png"
          alt=""
        >
      </div>
      <div class="servies_one">
        <img
          src="@/assets/images/smt_one.png"
          alt=""
        >
        <div class="services three">
          <h1>Farming</h1>
          <ul>
            <li>1. 2% out of 8% service fees will be rewarded to $SMT holders by farming</li>
            <li>2. Stake $SMT to mine other well-known tokens that collaborate with Simeta</li>
            <li>3. Deposit $SMT in our DeBank to get various interest</li>
          </ul>
        </div>

      </div>
    </section>

    <section class="usage_fee">
      <h1>Usage of 8% service fee</h1>
      <div class="echartsAndword">
        <div
          class="echarts"
          ref="echarts"
        ></div>
        <ul>
          <li>1. 2% out 8% service fee will be rewarded to $SMT holders by farming</li>
          <li>2. 3% out 8% service fee will be used to buyback and detory $SMT from secondary market</li>
          <li>3. The balance will go to Simeta treasure</li>
        </ul>
      </div>
    </section>

    <section class="steps">
      <h1>Roadmap</h1>
      <div>

      </div>
    </section>

  </div>
</template>

<script>
import * as echarts from "echarts";
// import section1 from "../components/section1.vue";
// import section2 from "../components/section2.vue";
// import section3 from "../components/section3.vue";
import header from "../components/header.vue";
import footer from "../components/footer.vue";
export default {
  name: "home",
  components: {
    // section1,
    // section2,
    // section3,
    "v-header": header,
    "v-footer": footer,
  },
  data() {
    return {};
  },
  mounted() {
    this.initEachartsLeft();
  },
  methods: {
    initEachartsLeft() {
      let myChart = echarts.init(this.$refs.echarts);
      console.log(myChart);
      var option = {
        title: {
          text: "Referer of a Website",
          subtext: "Fake Data",
          left: "center",
        },
        tooltip: {
          trigger: "item",
        },
        legend: {
          orient: "vertical",
          left: "left",
        },
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: "50%",
            data: [
              { value: 1048, name: "Search Engine" },
              { value: 735, name: "Direct" },
              { value: 580, name: "Email" },
              { value: 484, name: "Union Ads" },
              { value: 300, name: "Video Ads" },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      };
      myChart.setOption(option);
    },
  },
};
</script>

<style lang="less" scoped>
.main {
  scroll-behavior: smooth;
}
@import "./index.less";
</style>
