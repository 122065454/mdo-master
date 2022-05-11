<template>
  <transition name='modelToggel'>
    <div class="model" v-show="isShow">
      <div class="modal-mask">
        <section>
          <div class="head">
            <div class="title">Reward 90 $SMT</div>
          </div>
          <!-- 倒计时 -->
          <div class="time_contant">
            <img src="@/assets/images/clock/clock.png" alt="">
            <span>NEXT CHEST IN</span>
            <div class="time" v-if="timestamp">
              {{timestampToTime.h}}:{{timestampToTime.m}}:{{timestampToTime.s}}
            </div>
          </div>
          <!-- 打卡 -->
          <div class="punch">
            <div :class="['punch_item', `punch_item-${index+1}`]" v-for="(item,index) in dayList" :key="index" @click="claimPrice(index)">
              <h1>{{item.name}}</h1>
              <img src="@/assets/images/clock/priceshow.jpg" alt="" v-if="indexList.includes(index)">
              <img :src="item.url" alt="" v-else>
              <img class="check" src="@/assets/images/clock/check.png" alt="" v-if="indexList.includes(index)">

              <div class="award">
                <img src="@/assets/images/clock/coin.png" alt="">
                <span>+{{item.nums}}</span>
              </div>
            </div>

          </div>
          <!-- day 5 -->
          <div class="day5" @click="claimPrice(4)">
            <h1>DAY 5</h1>
            <div class="price5">
              <img src="@/assets/images/clock/priceshow.jpg" alt="" v-if="indexList.includes(4)">
              <img src="@/assets/images/clock/day5.jpg" alt="" v-else>
              <img class="check5" src="@/assets/images/clock/check.png" alt="" v-if="indexList.includes(4)">
              <span>SURPRISE CHEST !</span>
            </div>
          </div>
          <!-- gift -->
          <div class="gifts">
            <div class="gift_item" v-for="(item,index) in giftsList" :key="index">
              <img :src="item.url" alt="">
              <img class="check2" src="@/assets/images/clock/check2.png" alt="" v-if="['10','20','30','60','90'].includes(totalDays)">
              <h2>{{item.name}}</h2>
              <div class="award">
                <img src="@/assets/images/clock/coin.png" alt="">
                <span>+{{item.nums}}</span>
              </div>
              <div class="trangle"></div>
            </div>
          </div>
          <div class="progress">
            <img src="@/assets/images/clock/loading.jpg" alt="" :style="{width:percentage+'%'}">
            <span>30/90 days</span>
          </div>
          <div class="button">SET</div>
          <h3>Check the STE record</h3>
          <div class="button2">Dismiss</div>
        </section>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  data() {
    return {
      isShow: false,
      dayList: [
        {
          url: require('@/assets/images/clock/price1.png'),
          nums: 2,
          name: 'Today',
        },
        {
          url: require('@/assets/images/clock/price1.png'),
          nums: 2,
          name: 'DAY 2',
        },
        {
          url: require('@/assets/images/clock/price2.png'),
          nums: 3,
          name: 'DAY 3',
        },
        {
          url: require('@/assets/images/clock/price2.png'),
          nums: 3,
          name: 'DAY 4',
        },
      ],
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
      timestamp: 0,
      timer: null,
      indexList: [],
      totalDays: '',
      percentage: 20,
    }
  },
  mounted() {
    this.countDown()
    // 通过接口拿到当前天数 进行判断和清空操作
  },
  watch: {
    timestamp() {
      // if(this.timestamp==0)
    },
  },

  computed: {
    timestampToTime() {
      return this.formatSecondsToDate(this.timestamp)
    },
  },
  methods: {
    countDown() {
      this.timestamp = parseInt(Date.now() / 1000 - 1651981435)
      if (this.timestamp <= 60 * 60 * 24) {
        clearInterval(this.timer)
        this.timer = setInterval(() => {
          if (this.timestamp == 0) {
            clearInterval(this.timer)
          } else {
            this.timestamp -= 1
          }
        }, 1000)
      } else {
        this.timestamp = 0
      }
    },
    formatSecondsToDate(time) {
      let hours = this.singleFormat(parseInt(time / 3600))
      let minutes = this.singleFormat(parseInt((time % 3600) / 60))
      let seconds = this.singleFormat(time % 60)
      return {
        hms: `${hours}:${minutes}:${seconds}`,
        ms: `${minutes}:${seconds}`,
        s: seconds,
        m: minutes,
        h: hours,
      }
    },
    singleFormat(str) {
      return str.toString().length === 1 ? '0' + str : str
    },
    /* 1.点击完可以显示
       2.点击完重置倒计时
       3.未到当前打卡时间不可点击 
       4.到第5天后清空  
       5.当数组为0的时候只能点击第一个
       6.只能点击下一个
   */
    claimPrice(i) {
      //   if(this.timestamp!==0) return
      //   this.timestamp=10
      //   this.countDown()
      if (this.indexList.length == 0 && i !== 0) return

      this.indexList.push(i)
      if (this.indexList.length == 5 && this.timestamp == 0) {
        this.indexList = []
      }
    },
  },
}
</script>
<style lang="less" scoped>
@p: 100rem;
.model {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: block;
  z-index: 8;
}
.modal-mask {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
}
.modelToggel-enter-active {
  animation: modalToggle 0.5s;
}
.modelToggel-leave-active {
  animation: modalToggle 0.5s reverse;
}
@keyframes modalToggle {
  0% {
    transform: scale(1.1);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
section {
  width: 664 / @p;
  height: 832 / @p;
  background: #ffffff;
  border: 4 / @p solid #1b1b1b;
  border-radius: 5 / @p;
  margin-top: 100 / @p;
}
.head {
  width: 572 / @p;
  height: 124 / @p;
  background: url('~@/assets/images/clock/ste.png');
  background-size: contain;
  margin: -52 / @p auto;
  position: relative;
}
.title {
  // height: 19/@p;
  font-size: 26 / @p;
  font-family: Times New Roman;
  font-weight: bold;
  color: #272727;
  line-height: 32 / @p;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}
.time_contant {
  display: flex;
  width: 505 / @p;
  height: 44 / @p;
  border: 2 / @p solid #000000;
  // background: linear-gradient(-90deg, #fd55ff 0%, #fff600 100%);
  border-radius: 10 / @p;
  margin: 78 / @p auto 0 / @p;
  align-items: center;
  justify-content: center;
  img {
    width: 24 / @p;
    height: 28 / @p;
    margin-right: 15 / @p;
  }
  span {
    font-size: 18 / @p;
    font-family: Times New Roman;
    font-weight: bold;
    color: #272727;
    line-height: 23 / @p;
    margin-right: 21 / @p;
  }
  .time {
    font-size: 26 / @p;
    font-family: CTCuYuanSF;
    font-weight: 400;
    color: #272727;
  }
}
.punch_item-1 {
  width: 130 / @p;
  background: url('~@/assets/images/clock/bg1.jpg');
  background-size: cover;
}
.punch_item-2 {
  width: 150 / @p;
  background: url('~@/assets/images/clock/bg2.jpg');
  background-size: cover;
}
.punch_item-3 {
  width: 157 / @p;
  background: url('~@/assets/images/clock/bg3.jpg');
  background-size: cover;
  .award {
    margin-left: 20 / @p !important;
  }
}
.punch_item-4 {
  width: 157 / @p;
  background: url('~@/assets/images/clock/bg4.jpg');
  background-size: cover;
  .award {
    margin-left: 30 / @p !important;
  }
}
.punch {
  display: flex;
  margin-left: 31 / @p;
  margin-top: 18 / @p;
  .punch_item {
    height: 182 / @p;
    text-align: center;
    position: relative;
    h1 {
      font-size: 22 / @p;
      font-family: Corporate S Extra;
      font-weight: bold;
      color: #272727;
      text-align: center;
    }
    .check {
      position: absolute;
      z-index: 9;
      right: 0;
      top: 68 / @p;
      width: 92 / @p;
      height: 72 / @p;
    }
    img {
      width: 124 / @p;
      height: 116 / @p;
    }
    .award {
      width: 95 / @p;
      height: 30 / @p;
      margin-left: 15 / @p;
      background: #bdbdbd;
      border: 4 / @p solid #272727;
      border-radius: 5 / @p;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 15 / @p;
        height: 15 / @p;
        margin-right: 5 / @p;
      }
      span {
        font-size: 22 / @p;
        font-family: Corporate S Extra;
        font-weight: bold;
        color: #000000;
        line-height: 14 / @p;
      }
    }
  }
}
.day5 {
  margin-left: 31 / @p;
  width: 604 / @p;
  height: 142 / @p;
  background: #e9e9e9;
  border-radius: 15 / @p;
  position: relative;
  .check5 {
    position: absolute;
    z-index: 9;
    right: 220 / @p;
    top: 30 / @p;
    width: 92 / @p;
    height: 72 / @p;
  }
  h1 {
    font-size: 22 / @p;
    font-family: Corporate S Extra;
    font-weight: bold;
    color: #272727;
    position: absolute;
    top: 16 / @p;
    left: 30 / @p;
  }
  .price5 {
    margin-left: 247 / @p;
    margin-top: 10 / @p;
  }
  img {
    width: 127 / @p;
  }
  span {
    font-size: 22 / @p;
    font-family: Corporate S Extra;
    font-weight: bold;
    color: #272727;
    margin-left: 17 / @p;
  }
}
.gifts {
  display: flex;
  margin-left: 102 / @p;
  margin-top: 18 / @p;
  .gift_item {
    margin-right: 16 / @p;
    width: 90 / @p;
    height: 116 / @p;
    background: #e9e9e9;
    border-radius: 10 / @p;
    text-align: center;
    padding-top: 10 / @p;
    position: relative;
    img {
      width: 44 / @p;
      height: 50 / @p;
    }
    .check2 {
      width: 29 / @p;
      height: 29 / @p;
      position: absolute;
      top: 30 / @p;
      right: 4 / @p;
    }
    h2 {
      margin-top: 10 / @p;
      font-size: 14 / @p;
      font-family: Corporate S Extra;
      font-weight: bold;
      color: #272727;
    }
    .award {
      width: 74 / @p;
      height: 24 / @p;
      background-color: #bdbdbd;
      border: 2 / @p solid #272727;
      border-radius: 5 / @p;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: auto;
      img {
        width: 15 / @p;
        height: 15 / @p;
      }
      span {
        font-size: 17 / @p;
        font-family: Corporate S Extra;
        font-weight: bold;
        color: #000000;
        margin-left: 5 / @p;
      }
    }
    .trangle {
      margin: 5 / @p auto 0;
      width: 0;
      height: 0;
      border-left: 9 / @p solid transparent;
      border-right: 9 / @p solid transparent;
      border-top: 10 / @p solid #6880e2;
    }
  }
}
.progress {
  text-align: center;
  width: 530 / @p;
  height: 28 / @p;
  margin-top: 15 / @p;
  margin-left: 43 / @p;
  background: url('~@/assets/images/clock/progress.png');
  background-size: cover;
  position: relative;
  img {
    position: absolute;
    left: 2 / @p;
    height: 24 / @p;
    margin-top: 2px;
  }
  span {
    font-size: 13 / @p;
    font-family: Corporate S Extra;
    font-weight: bold;
    color: #272727;
    line-height: 29 / @p;
  }
}
.button {
  width: 168 / @p;
  height: 41 / @p;
  background: #eeea38;
  border: 3 / @p solid #272727;
  border-radius: 5 / @p;
  font-size: 35 / @p;
  font-family: Times New Roman;
  font-weight: bold;
  color: #272727;
  line-height: 41 / @p;
  text-align: center;
  margin: 23 / @p auto 0;
}
h3 {
  width: 156 / @p;
  height: 16 / @p;
  font-size: 16 / @p;
  font-family: Times New Roman;
  font-weight: bold;
  text-decoration: underline;
  color: #242424;
  margin: 12 / @p auto 0;
  // border-bottom: 1/@p solid #242424;
}
.button2 {
  width: 130 / @p;
  height: 33 / @p;
  background: #eeea38;
  border: 3 / @p solid #272727;
  border-radius: 5 / @p;
  font-size: 20 / @p;
  font-family: Times New Roman;
  font-weight: bold;
  color: #110e0b;
  line-height: 33 / @p;
  text-align: center;
  margin: 18 / @p auto 0;
}
@media screen and (max-width: 700px) {
  section {
    height: 1016 / @p;
    margin: auto;
  }
  .gifts {
    margin-left: 66 / @p;
    .gift_item {
      margin-right: 14 / @p;
      width: 113 / @p;
      height: 145 / @p;
    }
  }
  .punch {
    .punch_item {
      background-size: cover;
    }
  }
  .punch_item-1 {
    width: 137 / @p !important;
  }

  .punch_item-2 {
    width: 150 / @p;
    background: url('~@/assets/images/clock/bg2h5.png');
  }
  .punch_item-3 {
    width: 157 / @p;
  }
  .punch_item-4 {
    width: 160 / @p;
  }
  .progress {
    width: 580 / @p;
    height: 30 / @p;
    background-size: cover;
    margin-left: 10 / @p;

    span {
      font-size: 12 / @p;
      line-height: 30 / @p;
      vertical-align: super;
    }
  }
  h3 {
    width: 240 / @p;
    height: 23 / @p;
  }
}
</style>