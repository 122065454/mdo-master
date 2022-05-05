<template>
  <section>
    <div class="head">
      <div class="title">Reward 90 $SMT</div>
    </div>
    <!-- 倒计时 -->
    <div class="time_contant">
      <img src="@/assets/images/clock/clock.png" alt="">
      <span>NEXT CHEST IN</span>
      <div class="time">
        23:59:20
      </div>
    </div>
    <!-- 打卡 -->
    <div class="punch">
      <div class="punch_item punch_item-1">
        <h1>TODAY</h1>
        <img src="@/assets/images/clock/price1.png" alt="">
        <div class="award">
          <img src="@/assets/images/clock/coin.png" alt="">
          <span>+2</span>
        </div>
      </div>
      <div class="punch_item punch_item-2">
        <h1>DAY 2</h1>
        <img src="@/assets/images/clock/price1.png" alt="">
        <div class="award">
          <img src="@/assets/images/clock/coin.png" alt="">
          <span>+2</span>
        </div>
      </div>
      <div class="punch_item punch_item-3">
        <h1>DAY 3</h1>
        <img src="@/assets/images/clock/price1.png" alt="">
        <div class="award">
          <img src="@/assets/images/clock/coin.png" alt="">
          <span>+2</span>
        </div>
      </div>
      <div class="punch_item punch_item-4">
        <h1>DAY 3</h1>
        <img src="@/assets/images/clock/price1.png" alt="">
        <div class="award">
          <img src="@/assets/images/clock/coin.png" alt="">
          <span>+2</span>
        </div>
      </div>
    </div>
    <!-- day 5 -->
    <div class="day5">
      <h1>DAY 5</h1>
      <div class="price5">
        <img src="@/assets/images/clock/day5.jpg" alt="">
        <span>SURPRISE CHEST !</span>
      </div>
    </div>
    <!-- gift -->
    <div class="gifts">
      <div class="gift_item" v-for="(item,index) in giftsList" :key="index">
        <img :src="item.url" alt="">
        <h2>{{item.name}}</h2>
        <div class="award">
          <img src="@/assets/images/clock/coin.png" alt="">
          <span>+{{item.nums}}</span>
        </div>
        <div class="trangle"></div>
      </div>
    </div>
    <div class="progress">
      <span>30 / 90 Days</span>
    </div>
    <div class="button">SET</div>
    <h3>Check the STE record</h3>
    <div class="button2">Dismiss</div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      giftsList: [
        {
          url: require('@/assets/images/clock/gift.png'),
          nums: '2',
          name: '10 days',
        },
        {
          url: require('@/assets/images/clock/gift2.png'),
          nums: 15,
          name: '20 days',
        },
        {
          url: require('@/assets/images/clock/gift3.png'),
          nums: 20,
          name: '30 days',
        },
        {
          url: require('@/assets/images/clock/gift4.png'),
          nums: 30,
          name: '60 days',
        },
        {
          url: require('@/assets/images/clock/gift5.png'),
          nums: 40,
          name: '90 days',
        },
      ],
    }
  },
}
</script>
<style lang="less" scoped>
section {
  width: 664px;
  height: 832px;
  background: #ffffff;
  border: 4px solid #1b1b1b;
  border-radius: 5px;
  margin-top: 100px;
}
.head {
  width: 572px;
  height: 124px;
  background: url('~@/assets/images/clock/ste.png');
  background-size: contain;
  margin: -52px auto;
  position: relative;
}
.title {
  // height: 19px;
  font-size: 26px;
  font-family: Times New Roman;
  font-weight: bold;
  color: #272727;
  line-height: 32px;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}
.time_contant {
  display: flex;
  width: 505px;
  height: 44px;
  border: 2px solid #000000;
  // background: linear-gradient(-90deg, #fd55ff 0%, #fff600 100%);
  border-radius: 10px;
  margin: 78px auto 0px;
  align-items: center;
  justify-content: center;
  img {
    width: 24px;
    height: 28px;
    margin-right: 15px;
  }
  span {
    font-size: 18px;
    font-family: Times New Roman;
    font-weight: bold;
    color: #272727;
    line-height: 23px;
    margin-right: 21px;
  }
  .time {
    font-size: 26px;
    font-family: CTCuYuanSF;
    font-weight: 400;
    color: #272727;
  }
}
.punch_item-1 {
  width: 137px;
  background: url('~@/assets/images/clock/bg1.jpg');
}
.punch_item-2 {
  width: 150px;
  background: url('~@/assets/images/clock/bg2.jpg');
}
.punch_item-3 {
  width: 157px;
  background: url('~@/assets/images/clock/bg3.jpg');
}
.punch_item-4 {
  width: 160px;
  background: url('~@/assets/images/clock/bg4.jpg');
}
.punch {
  display: flex;
  margin-left: 31px;
  margin-top: 18px;
  .punch_item {
    height: 185px;
    text-align: center;
    h1 {
      font-size: 22px;
      font-family: Corporate S Extra;
      font-weight: bold;
      color: #272727;
      text-align: center;
    }
    img {
      width: 124px;
      height: 116px;
    }
    .award {
      width: 95px;
      height: 30px;
      margin-left: 15px;
      background: #bdbdbd;
      border: 4px solid #272727;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 15px;
        height: 15px;
        margin-right: 5px;
      }
      span {
        font-size: 22px;
        font-family: Corporate S Extra;
        font-weight: bold;
        color: #000000;
        line-height: 14px;
      }
    }
  }
}
.day5 {
  margin-left: 31px;
  width: 604px;
  height: 142px;
  background: #e9e9e9;
  border-radius: 15px;
  position: relative;
  h1 {
    font-size: 22px;
    font-family: Corporate S Extra;
    font-weight: bold;
    color: #272727;
    position: absolute;
    top: 16px;
    left: 30px;
  }
  .price5 {
    margin-left: 247px;
    margin-top: 10px;
  }
  img {
    width: 127px;
  }
  span {
    font-size: 22px;
    font-family: Corporate S Extra;
    font-weight: bold;
    color: #272727;
    margin-left: 17px;
  }
}
.gifts {
  display: flex;
  margin-left: 102px;
  margin-top: 18px;
  .gift_item {
    margin-right: 16px;
    width: 90px;
    height: 116px;
    background: #e9e9e9;
    border-radius: 10px;
    text-align: center;
    padding-top: 10px;
    img {
      width: 44px;
      height: 50px;
    }
    h2 {
      margin-top: 10px;
      font-size: 14px;
      font-family: Corporate S Extra;
      font-weight: bold;
      color: #272727;
    }
    .award {
      width: 74px;
      height: 24px;
      background-color: #bdbdbd;
      border: 2px solid #272727;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: auto;
      img {
        width: 15px;
        height: 15px;
      }
      span {
        font-size: 17px;
        font-family: Corporate S Extra;
        font-weight: bold;
        color: #000000;
        margin-left: 5px;
      }
    }
    .trangle {
      margin: 5px auto 0;
      width: 0;
      height: 0;
      border-left: 9px solid transparent;
      border-right: 9px solid transparent;
      border-top: 10px solid #6880e2;
    }
  }
}
.progress {
  text-align: center;
  width: 530px;
  height: 28px;
  margin-top: 15px;
  margin-left: 43px;
  background: url('~@/assets/images/clock/progress.png');
  span {
    font-size: 13px;
    font-family: Corporate S Extra;
    font-weight: bold;
    color: #272727;
    line-height: 29px;
  }
}
.button {
  width: 168px;
  height: 41px;
  background: #eeea38;
  border: 3px solid #272727;
  border-radius: 5px;
  font-size: 35px;
  font-family: Times New Roman;
  font-weight: bold;
  color: #272727;
  line-height: 41px;
  text-align: center;
  margin: 23px auto 0;
}
h3 {
  width: 156px;
  height: 16px;
  font-size: 16px;
  font-family: Times New Roman;
  font-weight: bold;
  text-decoration: underline;
  color: #242424;
  margin: 12px auto 0;
  // border-bottom: 1px solid #242424;
}
.button2 {
  width: 130px;
  height: 33px;
  background: #eeea38;
  border: 3px solid #272727;
  border-radius: 5px;
  font-size: 20px;
  font-family: Times New Roman;
  font-weight: bold;
  color: #110e0b;
  line-height: 33px;
  text-align: center;
  margin: 18px auto 0;
}
</style>