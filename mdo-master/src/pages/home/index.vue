<template>
  <div class="main">
    <!-- 头部 -->
    <!-- <v-header></v-header> -->
    <div
      class="hidden"
      v-if="isshow"
    >
      <div class="hidden1">
        <div>
          <router-link to="/presale">
            <img
              src="@/assets/images/active.jpg"
              alt=""
            >
          </router-link>

          <img
            class="close"
            src="@/assets/images/close1.png"
            alt=""
            @click="delimg"
          >
        </div>

      </div>
    </div>
    <section1></section1>
    <section2></section2>
    <section3></section3>

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
  </div>
</template>

<script>
import section1 from "../components/section1.vue";
import section2 from "../components/section2.vue";
import section3 from "../components/section3.vue";
import header from "../components/header.vue";
import footer from "../components/footer.vue";
export default {
  name: "home",
  components: {
    section1,
    section2,
    section3,
    "v-header": header,
    "v-footer": footer,
  },
  data() {
    return {
      isshow: true,
    };
  },
  beforeCreate() {
    document.querySelector("body").setAttribute("style", "overflow: hidden;");
  },
  methods: {
    delimg() {
      document.querySelector("body").removeAttribute("style");
      this.isshow = false;
    },
  },
};
</script>

<style lang="less" scoped>
.main {
  scroll-behavior: smooth;
  position: relative;
  left: 0;

  top: 0;
  .hidden {
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    .hidden1 {
      width: 50%;
      position: relative;
      .close {
        width: 20px;
        height: 20px;
        position: absolute;
        top: 5px;
        right: 5px;
        cursor: pointer;
      }
    }
    @media screen and (max-width: 700px) {
      .hidden1 {
        width: 80%;
      }
    }
  }
}
</style>
