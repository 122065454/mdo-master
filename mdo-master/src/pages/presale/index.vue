<template>
  <div class="main  ">
    <section class="token_sale w ">
      <h1>$SMT Token Sale</h1>
      <div class="tokenList">
        <ul>
          <li>
            BUSD
          </li>
          <li>
            Binance Smart Chian
          </li>
          <li>
            WhilteList AppLication
          </li>
        </ul>
      </div>
      <div class="introduce">
        Coindash Token Poll Coindash Token Poll Coindash Token Poll Coindash Token Poll
      </div>
      <div class="time">
        <div class="card__item-value new-item-value ">

          <span>23</span>:<span>23</span>:<span>23</span>:<span>23</span>
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
            <h2>100000</h2>
          </li>
          <li>
            <h3>Cliamabel</h3>
            <h2>100000</h2>
          </li>
        </ul>
      </div>
      <div class="trade">
        <div class="trade_content">
          <span>Amount</span>
          <input type="text">
          <div class="button">
            Purchase Now
          </div>
        </div>
      </div>
    </section>
    <section class="scenarios w">
      <h1>scenarios</h1>
      <div class="content">
        <div class="content1">
          <p>STAKING</p>
        </div>
        <div class="content2">
          <p>STAKING</p>
        </div>
        <div class="content3">
          <p>STAKING</p>
        </div>
      </div>
    </section>
    <!-- 扇形图 -->
    <section class="chart">

    </section>
  </div>
</template>

<style lang="less" scoped>
.main {
  background: #22284a;
  overflow: hidden;
  height: 100vh;
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
    // color: #fff;
  }
}

.tokenList {
  ul {
    display: flex;
    font-size: 30px;
    justify-content: center;
  }
  li {
    border-right: 1px solid red;
    padding: 0 20px;
  }
}
.introduce {
  font-size: 40px;
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
    background-color: #000;
    color: white;
    border-radius: 4px;
    /* padding: 0 2px; */
    font-size: 26px;

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
.total_number {
  ul {
    display: flex;
    justify-content: space-around;
  }
  h3 {
    font-size: 40px;
  }
  h2 {
    font-size: 30px;
  }
}
.trade {
  text-align: center;
  .trade_content {
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      font-size: 40px;
    }
    input {
      height: 50px;
      background: transparent;

      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 600;
      line-height: 20px;
      border-radius: 20px;
      padding-right: 10px;
    }
    .button {
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
    }
  }
}
.scenarios {
  text-align: center;
  h1 {
    font-weight: 700;
    font-size: 60px;
    line-height: 73px;
  }
  .content {
    display: flex;

    color: #ffffff;
    padding: 28px 28px;
    background: #303035;
    font-family: DM Sans;
    border-radius: 12px;
    margin-bottom: 12px;
    .content1,
    .content2,
    .content3 {
      flex: 1;
      margin: 10px;
      border-radius: 10px;
      background-color: red;
      height: 300px;
      p {
        font-size: 20px;
      }
    }
  }
}
</style>