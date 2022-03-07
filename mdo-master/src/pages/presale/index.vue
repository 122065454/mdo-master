<template>
  <div class="main">
    <section class="token_sale w">
      <h1>$SMT Token Sale</h1>
      <div class="tokenList">
        <ul>
          <li><img src="https://mdex.co/token-icons/bsc/0xe9e7cea3dedca5984780bafc599bd69add087d56.png"
                 alt="">
            BUSD</li>
          <li><img src="@/assets/images/svg/BSC.svg"
                 alt="">
            Binance Smart Chian</li>
        </ul>
        <div class="AppLication_btn">WhilteList AppLication</div>
      </div>
      <div class="introduce_time">
        <div class="introduce">
          Coindash Token Poll Coindash Token Poll Coindash Token Poll Coindash
          Token Poll
        </div>
        <!-- <div class="time" v-if="isPC">
          <div class="card__item-value new-item-value">
            <span>2</span>
            <span>3</span>
            :
            <span>3</span>
            <span>3</span>
            :
            <span>2</span>
            <span>3</span>
            :
            <span>3</span>
            <span>3</span>
          </div>
        </div> -->

        <Time v-if="isPC"
              :type="4"
              :theme="2"
              :endDate="1646709257000"
              :timeUnit="[':', ':', ':']"></Time>
        <!-- h5 time -->
        <div class="time_h5"
             v-if="!isPC">
          <div class="card__item-value new-item-value">
            <span>23</span>
            :
            <span>33</span>
            :
            <span>23</span>
            :
            <span>33</span>
          </div>
        </div>
        <div class="total_number">
          <ul>
            <li>
              <h3>Pool supply</h3>
              <h2>100000</h2>
            </li>
            <li>
              <h3>Rate</h3>
              <h2>1 $SMT=0.014 BUSD</h2>
            </li>
            <li>
              <h3>Cliamabel</h3>
              <h2>100000</h2>
            </li>
          </ul>
          <div class="total_number_bottom">
            <ul>
              <li>Pre-order Start Time: TBA</li>
              <li>WhiteList Status:Whiltelisted</li>
            </ul>
          </div>
          <div class="progress">
            <span>$0</span>
            <a-progress :stroke-color="{
                '0%': '#a670e2',
                '100%': '#74e2c7',
              }"
                        status="active"
                        :showInfo="false"
                        :strokeWidth="isPC?50:30"
                        :percent="50" />
            <span>$5M</span>
          </div>
          <div class="trade"
               v-if="isPC">
            <div class="trade_content">
              <span>Amount:</span>
              <input oninput="value=value.replace(/[^\d]/g,'')" />
              <div class="button">Purchase Now</div>
            </div>
          </div>
          <div class="trade"
               v-if="!isPC">
            <div class="trade_content">
              <span>Amount:</span>
              <input oninput="value=value.replace(/[^\d]/g,'')" />
              <div class="button">Purchase Now</div>
            </div>

          </div>

        </div>
      </div>
    </section>

    <section class="scenarios w">
      <h1>scenarios</h1>
      <div class="content">
        <div class="content1">
          <p>STAKING</p>
          <ul>
            <li>
              <i></i>
              hahahahahahahahahha
            </li>
            <li>
              <i></i>
              hahahahahahahahahha
            </li>
            <li>
              <i></i>
              hahahahahahahahahha
            </li>
            <li>
              <i></i>
              hahahahahahahahahha
            </li>
          </ul>
        </div>
        <div class="content2">
          <p>STAKING</p>
        </div>
        <div class="content3">
          <p>STAKING</p>
        </div>
      </div>

    </section>

    <charts></charts>
  </div>
</template>
<script>
// import FlipDown from 'FlipDown'
import charts from './chart.vue'
import Time from './time.vue'
export default {
  name: 'presale',
  components: {
    charts,
    Time,
  },
  mounted() {},
  methods: {
    func() {},
  },
}
</script>
<style lang="less" scoped>
.main {
  background: #22284a;
  overflow: hidden;
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
    color: #faf6f6d9;
  }
}
.AppLication_btn {
  width: 200px;
  height: 42px;
  background-color: rgb(114, 243, 75);
  border-radius: 60px;
  color: rgb(0, 0, 0);
  border: none;
  padding: 10px;
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
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
  background: rgba(94, 149, 232, 0.1);
  font-family: DM Sans;
  border-radius: 12px;
  margin-bottom: 40px;
}
.introduce {
  font-size: 40px;
  margin-bottom: 60px;
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
    font-size: 23px;
    color: #be5e9c;
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
      color: #be5e9c;
    }
    input {
      height: 50px;
      background: transparent;
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 600;
      line-height: 20px;
      border-radius: 20px;
      padding-left: 10px;
      margin-right: 20px;
    }
    .button {
      width: 200px;
      height: 50px;
      background: linear-gradient(to right, #f36bc0 0%, #d640ab 100%);
      border-radius: 60px;

      border: none;
      cursor: pointer;
      // padding: 10px;
      font-size: 16px;
      line-height: 50px;
      font-weight: 500;
    }
  }
}
.scenarios {
  text-align: center;
  color: #ffffff;
  padding: 28px 28px;
  background: rgba(94, 149, 232, 0.1);
  font-family: DM Sans;
  border-radius: 12px;
  margin-bottom: 40px;
  h1 {
    font-weight: 700;
    font-size: 60px;
    line-height: 73px;
    color: #ffffff;
    margin-bottom: 30px;
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
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
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
        font-size: 20px;
        margin-bottom: 20px;
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

// h5
@media screen and (max-width: 700px) {
  @p: 100rem;
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
      color: #be5e9c;
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
      color: #be5e9c;
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
        color: #be5e9c;
      }
      input {
        height: 30px;
        background: transparent;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 600;
        line-height: 20px;
        border-radius: 20px;
        padding-left: 10px;
        margin-right: 20px;
        width: 100px;
      }
      .button {
        width: 100px;
        height: 30px;
        background: linear-gradient(to right, #f36bc0 0%, #d640ab 100%);
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
  .scenarios {
    .content {
      flex-direction: column;
    }
  }
}
</style>
