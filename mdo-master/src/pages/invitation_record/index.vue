<template>
  <div class="invitation_record">
    <div class="top_background">
      <h1>Invite friends to gain $SMT</h1>
    </div>
    <div class="content inner">
      <div class="top">
        <div class="left">
          <h2>Invited Friends</h2>
          <div class="left_box">
            <img
              src="@/assets/images/invited_one.png"
              alt=""
            >
            <span>20000</span>
          </div>
        </div>
        <div class="right">
          <h2>Total </h2>
          <div class="right_box">
            <p>
              <span>$SMT</span>
              <span style="margin-left:.2rem">500</span>
            </p>

            <button>GO Rewards</button>
          </div>
        </div>

        <div class="sp_block hide">
          <div class="left_top">
            <h2>Invited Friends</h2>

            <div class="img_span">
              <img
                src="@/assets/images/invited_one.png"
                alt=""
              >
              <span>20000</span>
            </div>
          </div>
          <div class="left_top">
            <h2>Total $SMT</h2>
            <div class="img_span">
              <img
                style="
                width: 20px;
    height: 15px;"
                src="@/assets/images/invited_two.png"
                alt=""
              >
              <span>500</span>
            </div>

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
            <li @click="doAction">
              <img
                src="@/assets/images/message.png"
                alt=""
              >
              <p>message</p>
            </li>
            <li @click="gowhatsapp">
              <img
                src="@/assets/images/phone_two.png"
                alt=""
              >
              <p>WhatsApp</p>
            </li>
            <li @click="shareTwitter">
              <img
                src="@/assets/images/twitter_three.png"
                alt=""
              >
              <p>twitter</p>
            </li>
            <li>
              <img
                src="@/assets/images/more_four.png"
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
          <el-table
            :data="tableData"
            style="width: 100%"
          >
            <el-table-column
              prop="date"
              label="Date"
              width="180"
              align="center"
            >
            </el-table-column>
            <el-table-column
              prop="name"
              label="Account"
              width="180"
              align="center"
            >
            </el-table-column>
            <el-table-column
              prop="address"
              label="Rewards"
              align="center"
            >
            </el-table-column>
          </el-table>
          <el-pagination
            layout="prev, pager, next"
            :total="1000"
          >
          </el-pagination>
        </div>
        <div class="icon_input show">
          <ul>
            <li @click="doAction">

              <img
                src="@/assets/images/message.png"
                alt=""
              >
              <p>message</p>

            </li>
            <li @click="gowhatsapp">
              <img
                src="@/assets/images/phone_two.png"
                alt=""
              >
              <p>WhatsApp</p>
            </li>
            <li @click="shareTwitter">
              <img
                src="@/assets/images/twitter_three.png"
                alt=""
              >
              <p>twitter</p>
            </li>
            <li>
              <img
                src="@/assets/images/more_four.png"
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
    return {
      share_url: "",
      tableData: [
        {
          date: "05-04 12",
          name: "Je...@gmail.com",
          address: "+50 $SMT",
        },
        {
          date: "05-04 12",
          name: "Je...@gmail.com",
          address: "+50 $SMT",
        },
        {
          date: "05-04 12",
          name: "Je...@gmail.com",
          address: "+50 $SMT",
        },
        {
          date: "05-04 12",
          name: "Je...@gmail.com",
          address: "+50 $SMT",
        },
      ],
    };
  },
  created() {
    this.share_url = document.location.href;
    this.$axios
      .get(
        "http://5i01j19762.zicp.vip/simeta/buyer/awardRecord/pageAwardRecord"
      )
      .then((res) => {
        console.log(res);
      });
  },
  methods: {
    // 分享到twitter
    shareTwitter() {
      function popupwindow(url, title) {
        return window.open(
          "https://twitter.com/intent/tweet?url=" +
            encodeURIComponent(url) +
            "&text=" +
            encodeURIComponent(title),
          "_blank",
          "toolbar=yes, location=yes, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, width=600, height=450,top=100,left=350"
        );
      }
      popupwindow(
        this.share_url,
        "Check out the amazing Web3.0 crypto ecommerce platform and get rewards every day"
      );
    },

    // 分享message
    doAction() {
      var u = navigator.userAgent;
      //判断是否为android终端
      // var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
      //判断是否为ios终端
      var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
      //这里填写要分享的内容
      var des = `Check out the amazing Web3.0 crypto ecommerce platform and get rewards every day ${this.share_url}`;
      //ios终端
      if (isiOS) {
        window.location.href = "sms:" + "&body=" + des;
        //安卓终端
      } else {
        window.location.href = "sms:" + "?body=" + des;
      }
    },

    // 分享whatsapp
    gowhatsapp() {
      let _href = "https://api.whatsapp.com/send?";
      const text = `Check out the amazing Web3.0 crypto ecommerce platform and get rewards every day`;
      _href += "&text=" + text; //标题
      _href += "&url=" + encodeURIComponent(this.share_url); //链接
      window.open(_href);
    },
  },
};
</script>

<style lang="less" scoped>
@import "./index.less";
/deep/ .el-table tr {
  background: #e9e9e9;
  color: #868686;
  font-size: 0.2rem;
}
/deep/ .el-table th.el-table__cell {
  background: #e9e9e9;
}
.el-pagination {
  text-align: center;
}
/deep/ .el-pagination button {
  background: #e9e9e9;
}
/deep/ .el-pager li {
  background: #e9e9e9;
}
/deep/ .el-pagination button:disabled {
  background: #e9e9e9;
}
</style>
