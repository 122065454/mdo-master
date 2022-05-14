<template>
  <div class="invitation_record">
    <div class="top_background">
      <h1>Invite friends to gain $SMT</h1>
    </div>
    <div class="content">
      <div class="top">

        <div class="left_top">
          <h2>Invited Friends</h2>

          <div class="img_span">
            <img
              src="@/assets/images/user@2x.png"
              alt=""
            >
            <span>20</span>
          </div>
        </div>
        <div class="left_top">
          <h2>Total $SMT</h2>
          <div class="img_span">
            <img
              src="@/assets/images/record_img.png"
              alt=""
            >
            <span>500</span>
          </div>

        </div>
      </div>
      <div class="center">
        <div class="box">
          <h1>Only 3 Steps to complete the invitation</h1>
          <div class="smt">
            <span>You get : 50 $SMT / invitation</span>
            <div></div>
            <span>Friends get : 25 $SMT</span>

          </div>
          <ul>
            <li>Step 1 : Click button to share the invite link</li>
            <li>Step 1 : Your friends take invitation, complete the registration</li>
            <li>Step 3 : Both of you get $SMT rewards </li>
          </ul>
        </div>

      </div>
      <ul class="hide">
        <li>Step 1 : Click button to share the invite link</li>
        <li>Step 1 : Your friends take invitation, complete the registration</li>
        <li>Step 3 : Both of you get $SMT rewards </li>
      </ul>
      <div class="bottom">

        <div class="icon_input hide">
          <ul>
            <li>
              <img
                src="@/assets/images/message.png"
                alt=""
              >
              <p>message</p>
            </li>
            <li>
              <img
                src="@/assets/images/message.png"
                alt=""
              >
              <p>WhatsApp</p>
            </li>
            <li>
              <img
                src="@/assets/images/message.png"
                alt=""
              >
              <p>twitter</p>
            </li>
            <li>
              <img
                src="@/assets/images/message.png"
                alt=""
              >
              <p>more...</p>
            </li>
          </ul>
          <div class="input_btn">
            <input
              type="text"
              placeholder="simeta.io/i/Jessie"
            >
            <button>Copy</button>
          </div>
        </div>
        <div class="records">
          <h1>Records</h1>
          <ul class="list">
            <li>Date</li>
            <li>Account</li>
            <li>Rewards</li>
          </ul>
          <ul class="list">
            <li>05-04 12:12</li>
            <li>Je...@gmail.com</li>
            <li>Je...@gmail.com</li>
          </ul>
          <ul class="list">
            <li>05-04 12:12</li>
            <li>Je...@gmail.com</li>
            <li>Je...@gmail.com</li>
          </ul>
          <ul class="list">
            <li>...</li>
            <li>...</li>
            <li>...</li>
          </ul>
          <img
            src="@/assets/images/xia.svg"
            alt=""
          >
        </div>
        <div class="icon_input show">
          <ul>
            <li>
              <img
                src="@/assets/images/message.png"
                alt=""
              >
              <p>message</p>
            </li>
            <li>
              <img
                src="@/assets/images/message.png"
                alt=""
              >
              <p>WhatsApp</p>
            </li>
            <li>
              <img
                src="@/assets/images/message.png"
                alt=""
              >
              <p>twitter</p>
            </li>
            <li>
              <img
                src="@/assets/images/message.png"
                alt=""
              >
              <p>more...</p>
            </li>
          </ul>
          <div class="input_btn">
            <input
              type="text"
              placeholder="simeta.io/i/Jessie"
            >
            <button>Copy</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
    this.$axios
      .get(
        "http://5i01j19762.zicp.vip/simeta/buyer/awardRecord/pageAwardRecord"
      )
      .then((res) => {
        console.log(res);
      });
  },
  methods: {},
};
</script>

<style lang="less" scoped>
@import "./index.css";
</style>
