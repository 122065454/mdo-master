<template>
  <div class="main">
    <section class="token_sale w">
      <h1>1st Round Presale for $SMT</h1>
      <div class="tokenList">
        <ul>
          <li><img
              src="@/assets/images/bnb.png"
              style="margin-right:5px"
            >BNB</li>
          <li><img
              src="@/assets/images/bsc.png"
              alt=""
            >
            Binance Smart Chian</li><br>

        </ul>
        <p class="time_sj"><img
            src="@/assets/images/h5/1.svg"
            alt=""
          >08:00 (UTC) <br><img
            src="@/assets/images/h5/2.svg"
            alt=""
          > Sun 17th April 2022</p>

        <div class="AppLication_btn"> <a
            href="https://form.jotform.com/221002321766443"
            target="_blank"
            rel="noopener noreferrer"
          >Bonus Application</a></div>
        <h3 style="font-size: 18px;">Bonus Application: 08:00 on 12th Apr to 08:00 on 16th Apr 2022 (UTC)</h3>
      </div>
      <div class="introduce_time">
        <div
          class="introduce"
          v-if="isPC"
        >
          The first virtual futuristic eCommerce marketplace where users<br> can buy and sell items in both the crypto and physical worlds <br>with cryptocurrencies worldwide
        </div>
        <div
          class="introduce"
          v-if="!isPC"
        >
          The first virtual futuristic eCommerce marketplace where users can buy and sell items in both the crypto and physical worlds with cryptocurrencies worldwide
        </div>

        <p class="end">Starting in</p>
        <Time
          :type="4"
          :theme="2"
          :endDate="1650182400000"
          :timeUnit="[':', ':', ':']"
          @timeUp='timeUp'
        ></Time>
        <div class="total_number">
          <ul>
            <li>
              <h3>
                <img
                  src="@/assets/images/yuan.png"
                  alt=""
                >
                Pool supply
              </h3>
              <h2>4,000,000 $SMT</h2>
            </li>
            <li>
              <h3>
                <img
                  src="@/assets/images/yuan.png"
                  alt=""
                >
                Rate
              </h3>
              <h2>1 BNB = 20,000 $SMT</h2>
            </li>
            <li>
              <h3>
                <img
                  src="@/assets/images/yuan.png"
                  alt=""
                >
                To be credited
                <a-tooltip>
                  <template #title>
                    All investors will receive their 20% of the sum of purchased tokens and bonus when $SMT listed on Pancakeswap in late April to early May and the balances are distributed within the coming 10 months linearly as stated in our tokenomics with project progress which is part of our vesting program.
                  </template>
                  <img
                    src="@/assets/images/tist.png"
                    class="tips"
                    alt=""
                    srcset=""
                  >
                </a-tooltip>
              </h3>
              <h2>{{Number(amount*20000)+amount_extra(amount)}}

              </h2>
            </li>
          </ul>
          <!-- value = value.replace(/[^\d]/g, ''); -->
          <div
            class="trade"
            v-if="isPC"
          >
            <div class="trade_content">
              <span>Amount:</span>
              <input
                class="no-arrow"
                type="number"
                @input="amountValue(amount)"
                v-model="amount"
                placeholder="BNB amount(0.2~20)"
              />
              <div
                class="button"
                @click='purchase'
              >Purchase Now</div>
            </div>
          </div>
          <div
            class="trade"
            v-if="!isPC"
          >
            <div class="trade_content">
              <span>Amount:</span>
              <input
              class="no-arrow"
                type="number"
                @input="amountValue(amount)"
                v-model="amount"
                placeholder="BNB amount(0.2~20)"
              />
              <div class="button">Purchase Now</div>
            </div>

          </div>

        </div>
      </div>
    </section>

    <section class="Contracts">
      <div>
        <span class="label">
          $SMT Contracts:
        </span>
        <img
          class="img1"
          src="@/assets/images/bsc.png"
          alt=""
        >
        <span>BNB smart Chain（BEP 20）：</span>
        <span>
          0xa363....F9745f
          <!-- OxE91c...306399F -->
        </span>
        <img
          src="@/assets/images/icon3.png"
          alt=""
          style="margin-left: 10px;"
          @click='copy'
        >
        <img
          src="@/assets/images/az9n5-o5l7g.png"
          alt=""
          @click="addToken"
          style="margin-left: 10px;"
        >
      </div>
    </section>

    <section class="scenarios w">
      <h1>Scenarios</h1>
      <div class="content">
        <div class="content1">
          <p>Services and products</p>
          <ul>
            <li>
              1. Pay advertising campaigns with $SMT only
            </li>
            <li>
              2. Buy special discount items with $SMT
            </li>
            <li>
              3. Join DAO by community voting for $SMT holders

            </li>
          </ul>
        </div>
        <div class="content2">
          <p>Land and associate NFT</p>
          <ul>
            <li>
              1. Buy land NFT with $SMT
            </li>
            <li>
              2. Buy rare accessories (including pets) for their avatars with $SMT
            </li>
            <li>
              3. Pay for tickets for selected scenes in Simeta metaverse
            </li>
          </ul>
        </div>
        <div class="content3">
          <p>Farming</p>
          <ul>
            <li>
              1. 2% out of 5% service fees will be rewarded to $SMT holders by farming
            </li>
            <li>
              2. Stake $SMT to mine other well-known tokens that collaborate with Simeta

            </li>
            <li>
              3. Deposit $SMT in our DeBank to get various interest
            </li>
          </ul>
        </div>
      </div>
      <charts></charts>
    </section>

    <faq v-if="isPC"></faq>
  </div>
</template>
<script>
// import FlipDown from 'FlipDown'
import { message } from "ant-design-vue";
import faq from "./faq.vue";
import charts from "./chart.vue";
import Time from "./time.vue";
import { transfer ,sendTransaction} from "@/utils/publicErc20.js";
export default {
  name: "presale",
  components: {
    charts,
    Time,
    faq,
  },
  data() {
    return {
      amount: "",
    };
  },
  computed: {
    account() {
      console.log("this.$store.state.account", this.$store.state.account);
      return this.$store.state.account;
    },
      // 额外奖励数量
    amount_extra(){
      return (val)=>{
      if(val==0){
        return 0 
      }
      else if(0.2<Number(val)<=2){
        return 1600
      }else if(2<Number(val)<=5){
        return 2400
      }else if(5<Number(val)<=10){
        return 3200
      }else if(10<Number(val)<=20){
        return 4000
      }
      }
   
    },
 
  },
  created() {
    document.querySelector("body").removeAttribute("style");
  },
  mounted() {},
  methods: {
     
    NumberCheck(num) {
      var str = num;
      var len1 = str.substr(0, 1);
      var len2 = str.substr(1, 1);
      //如果第一位是0，第二位不是点，就用数字把点替换掉
      if (str.length > 1 && len1 == 0 && len2 != ".") {
        str = str.substr(1, 1);
      }
      //第一位不能是.
      if (len1 == ".") {
        str = "";
      }
      //限制只能输入一个小数点
      if (str.indexOf(".") != -1) {
        var str_ = str.substr(str.indexOf(".") + 1);
        if (str_.indexOf(".") != -1) {
          str = str.substr(0, str.indexOf(".") + str_.indexOf(".") + 1);
        }
      }
      //正则替换，保留数字和小数点
      str = str.replace(/^(\-)*(\d+)\.(\d\d\d\d).*$/, "$1$2.$3");
      //如果需要保留小数点后两位，则用下面公式
      // str = str.replace(/\.\d\d$/, "");
      if (str.length == 3) {
        if (str < 0.2) {
          str = 0.2;
          message.warning("BNB amount(0.2~20)");
        } else if (str > 20) {
          str = 20;
          message.warning("BNB amount(0.2~20)");
        }
      } else if (str < 0) {
        str = 0.2;
        message.warning("BNB amount(0.2~20)");
      }
      return str;
    },
    amountValue(value) {
      this.amount = this.NumberCheck(value);
    },
    async purchase() {
      if (this.amount) {
        try {
          await sendTransaction({
            to:'0x873463b56aEcCd6b2E01628775971EdD31D11Fc0',
            from:this.account,
          },this.amount)
        } catch (error) {
          console.log("error", error);
        }
      } else {
        return;
      }
    },
    input() {},
    timeUp() {},
    copy() {
      this.copyToClipboard("0xa363F972DBaEA97624E4B5FAAAcC5964c7F9745f").then(
        () => {
          this.$message.success("Copy successfully");
        }
      );
    },
    addToken() {
      // 快捷钱包添加代币
      const symbol = "SMT";
      const addressToken =
        "0xa363F972DBaEA97624E4B5FAAAcC5964c7F9745f".toLowerCase();
      const image = "http://simeta.io/logo.png";
      ethereum.request({
        method: "wallet_watchAsset",
        params: {
          type: "ERC20",
          options: {
            address: addressToken,
            decimals: 18,
            symbol,
            image,
          },
        },
      });
    },
    copyToClipboard(textToCopy) {
      // navigator clipboard api needs a secure context (https)
      if (navigator.clipboard && window.isSecureContext) {
        // navigator clipboard api method'
        return navigator.clipboard.writeText(textToCopy);
      } else {
        // text area method
        let textArea = document.createElement("textarea");
        textArea.value = textToCopy;
        // make the textarea out of viewport
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        return new Promise((res, rej) => {
          // here the magic happens
          document.execCommand("copy") ? res() : rej();
          textArea.remove();
        });
      }
    },
  },
};
</script>
<style lang="less" scoped>
.no-arrow::-webkit-outer-spin-button,
.no-arrow::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
.main {
  background: url(../../assets/images/bgc.png) no-repeat;
  background-size: cover;
  overflow: hidden;
  // font-family: AlibabaPuHuiTi;
}
.tips {
  margin-bottom: 35px;
  width: 15px;
  height: 15px;
  vertical-align: text-top;
}
.w {
  width: 1300px;
  margin: auto;
}
.token_sale {
  margin-top: 100px;
  text-align: center;

  h1 {
    font-weight: 700;
    font-size: 60px;
    line-height: 73px;
    margin-bottom: 30px;
    color: #f5cc3e;
  }
  h3 {
    color: #fff;
    font-weight: bold;
  }
}
.Contracts {
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
  .img1 {
    width: 30px;
    height: 30px;
  }
  img {
    width: 18px;
    height: 18px;
  }
  .label {
    color: #f5cc3e;
    font-size: 20px;
  }
}
.end {
  font-size: 41px;
  margin-bottom: 20px;
  color: #ffef40;
  // font-family: Franklin Gothic Demi;
  font-weight: bold;
}
a {
  color: #fff;
}
.AppLication_btn {
  width: 210px;
  // border: none;
  border: 2px solid #ffef40;
  background: linear-gradient(180deg, #e8b805 0%, #b85803 100%);
  box-shadow: 0px 0px 7px 2px rgba(51, 5, 98, 0.8);

  border-radius: 10px;
  color: #fff;
  padding: 10px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-content: center;
  // line-height: 42px;
  font-weight: bold;
  // font-family: FZCuHei-B03T;
  margin: 10px auto;
  cursor: pointer;
}
.tokenList {
  margin-bottom: 30px;
  ul {
    display: flex;
    font-size: 25px;
    justify-content: center;
  }
  .time_sj {
    font-size: 25px;
    color: #fff;
    img {
      margin-right: 5px;
    }
  }
  li {
    padding: 0 20px;
    color: #fff;
  }
  li:first-child {
    border-right: 1px solid #44454b;
  }
  img {
    width: 30px;
    height: 30px;
    vertical-align: text-bottom !important;
  }
}
.introduce_time {
  color: #ffffff;
  padding: 28px 28px;
  background: linear-gradient(0deg, #090909 0%, #26252c 100%);
  border-image: linear-gradient(0deg, #cb8512, #ffdd40) 3 3;
  // font-family: DM Sans;
  border-radius: 12px;
  margin-bottom: 40px;
  border: 3px solid #ffdd40;
}
.introduce {
  font-size: 40px;
  margin-bottom: 30px;
  // font-family: FZCuHei-B03T;
}
.time {
  margin-bottom: 60px;
}
.card__item-value {
  color: #48587b;
  font-size: 24px;
  margin-top: 10px;
  font-weight: 500;
}
.new-item-value {
  margin-bottom: 8px;
  span {
    background-color: #333881;
    color: white;
    border-radius: 4px;
    /* padding: 0 2px; */
    font-size: 50px;
    margin: 0 5px;
    display: inline-block;
    text-align: center;
    padding-right: 1px;
    width: 80px;
    height: 80px;
    line-height: 80px;
  }
  strong {
    padding-right: 5px;
    font-size: 14px;
    font-weight: 400;
  }
}
.total_number {
  margin-bottom: 60px;
  margin-top: 60px;
  // color: #ffffff;
  // padding: 28px 28px;
  // background: rgba(94, 149, 232, 0.1);
  // font-family: DM Sans;
  // border-radius: 12px;
  // margin-bottom: 40px;
  ul {
    display: flex;
    justify-content: space-around;
  }
  li {
  }
  h3 {
    font-size: 40px;
    color: #fff141;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 18px;
      height: 18px;
      margin-right: 5px;
    }
  }
  h2 {
    font-size: 40px;
    color: #fff;
  }
}
.progress {
  display: flex;
  align-items: center;
  margin: 20px auto;
  width: 1150px;
  span {
    font-size: 30px;
    margin: 0 20px;
  }
}
.total_number_bottom {
  margin-top: 40px;

  ul {
    display: flex;
    justify-content: space-around;
  }
  li {
    font-size: 23px;
    color: #be5e9c;
  }
}
.trade {
  text-align: center;
  margin-bottom: 40px;
  margin-top: 40px;
  .trade_content {
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      font-size: 40px;
      margin-right: 20px;
      color: #fff141;
    }
    input {
      height: 50px;
      background: transparent;
      font-size: 24px;
      // font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 600;
      line-height: 20px;
      border-radius: 20px;
      padding-left: 10px;
      margin-right: 20px;

      border: 1px solid #feef40;
    }
    .button {
      width: 200px;
      height: 50px;
      // border: none;
      border: 1px solid #f8e75e;
      // background: linear-gradient(0deg, #090909 0%, #26252c 100%);
      background: linear-gradient(0deg, #cb8512 0%, #ffdd40 100%);
      border-radius: 10px;

      cursor: pointer;
      // padding: 10px;
      font-size: 20px;
      line-height: 50px;
      font-weight: 500;
    }
  }
}
.scenarios {
  color: #fff;
  padding: 28px 28px;
  background: rgba(94, 149, 232, 0.1);
  // font-family: DM Sans;
  border-radius: 12px;
  margin-bottom: 40px;
  h1 {
    font-weight: 700;
    font-size: 60px;
    line-height: 73px;
    color: #f5cc3e;
    margin-bottom: 30px;
    text-align: center;
  }
  .content {
    display: flex;
    i {
      display: inline-block;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #fff;
      margin-right: 10px;
    }
    li {
      // display: flex;
      // align-items: center;
      // justify-content: center;
      font-size: 18px;
      margin-bottom: 20px;
    }
    .content1,
    .content2,
    .content3 {
      flex: 1;
      margin: 10px;
      border-radius: 10px;
      height: 300px;
      padding: 20px;
      p {
        color: #fff141;
        font-size: 29px;
        margin-bottom: 20px;
        text-align: center;
        font-weight: 700;
      }
    }
    .content1,
    .content2,
    .content3 {
      background: linear-gradient(0deg, #090909 0%, #26252c 100%);
      border: 1px solid;
    }
  }
}

// h5
@media screen and (max-width: 700px) {
  @p: 100rem;

  .Contracts {
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;
    padding: 0 20px;
    .img1 {
      width: 30px;
      height: 30px;
    }
    img {
      width: 18px;
      height: 18px;
    }
    .label {
      color: #f5cc3e;
      font-size: 20px;
    }
  }

  .w {
    width: 90%;
    margin: auto;
  }
  .token_sale {
    margin-top: 120 / @p;
    h1 {
      font-size: 60 / @p;
      line-height: 73 / @p;
      margin-bottom: 30 / @p;
    }
  }
  .introduce_time {
    padding: 20px 10px;
  }
  .tokenList {
    margin-bottom: 50 / @p;
    ul {
      display: flex;
      font-size: 25 / @p;
      justify-content: center;
    }
    li {
      padding: 0 20px;
    }
    li:first-child {
      border-right: 1px solid #44454b;
    }
    img {
      width: 20px;
      height: 20px;
      vertical-align: bottom !important;
    }
  }
  .introduce {
    font-size: 26 / @p;
    margin-bottom: 30px;
  }
  .time_h5 {
    margin-bottom: 30px;
    .card__item-value {
      color: #48587b;
      font-size: 24px;
      margin-top: 10px;
      font-weight: 500;
    }
    .new-item-value {
      margin-bottom: 8px;
      span {
        background-color: #333881;
        color: white;
        border-radius: 4px;
        /* padding: 0 2px; */
        font-size: 20px;
        margin: 0 5px;
        display: inline-block;
        text-align: center;
        padding-right: 1px;
        width: 50px;
        height: 50px;
        line-height: 50px;
      }
      strong {
        padding-right: 5px;
        font-size: 14px;
        font-weight: 400;
      }
    }
  }
  .AppLication_btn {
    height: 30px;
    line-height: 30px;
    font-size: 12px;
    padding: 0;
    width: 150px;
  }
  .total_number {
    margin-top: 30px;
    margin-bottom: -20px;
    h3 {
      font-size: 25 / @p;
    }
    h2 {
      font-size: 30 / @p;
      color: #fff;
    }
  }
  .total_number_bottom {
    margin-top: 5px;
    li {
      font-size: 20 / @p;
    }
  }
  .progress {
    display: flex;
    align-items: center;
    margin: 20px auto;
    width: 100%;
    span {
      font-size: 20 / @p;
      margin: 0 0px;
    }
  }
  .scenarios {
    color: #ffffff;
    padding: 28px 28px;
    background: rgba(94, 149, 232, 0.1);
    // font-family: DM Sans;
    border-radius: 12px;
    margin-bottom: 40px;
    h1 {
      font-weight: 700;
      font-size: 30px;
      line-height: 43px;
      color: #ffffff;
      margin-bottom: 10px;
      text-align: center;
    }
    .content {
      display: flex;
      i {
        display: inline-block;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #fff;
        margin-right: 10px;
      }
      li {
        // display: flex;
        // align-items: center;
        // justify-content: center;
        font-size: 12px;
      }
      .content1,
      .content2,
      .content3 {
        flex: 1;
        margin: 10px;
        border-radius: 10px;
        height: 300px;
        padding: 20px;
        p {
          font-size: 14px;
          margin-bottom: 20px;
          text-align: center;
          font-weight: 700;
        }
      }
      .content1,
      .content3 {
        background-color: #509d7b;
      }
      .content2 {
        background: #4a4a4a;
      }
    }
  }
  .trade {
    text-align: center;
    margin-bottom: 40px;
    margin-top: 40px;
    .trade_content {
      display: flex;
      // flex-direction: column;
      align-items: center;
      justify-content: center;
      span {
        font-size: 16px;
        margin-right: 20px;
      }
      input {
        height: 30px;
        // background: #fff;
        font-size: 8px;
        // font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 600;
        line-height: 20px;
        border-radius: 20px;
        padding-left: 10px;
        margin-right: 20px;
        width: 100px;
        color: #fff;
      }
      .button {
        width: 100px;
        height: 30px;
        // background: linear-gradient(to right, #f36bc0 0%, #d640ab 100%);
        border-radius: 60px;
        border: none;
        cursor: pointer;
        // padding: 10px;
        font-size: 12px;
        line-height: 30px;
        font-weight: 500;
      }
    }
  }
  .tokenList .time_sj {
    font-size: 16px;
    color: #fff;
  }
  .scenarios {
    .content {
      flex-direction: column;
    }
  }
}
</style>
