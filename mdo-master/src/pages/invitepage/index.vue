<template>
  <section>
    <div class="title">Earn $SMT </div>
    <ul>
      <li v-for="(item,index) in inviteList" :key="index" @click='jump(index)'>
        <img :src="item.url" alt="" :class="`img${index}`">
        <div class="introduce">
          <h1>{{item.name1}}</h1>
          <h2>{{item.name2}}</h2>
        </div>
      </li>
      <!-- <li>
        <img src="@/assets/images/invite/ste.png" alt="">
        <div class="introduce">
          <h1>Shop-to-Earn</h1>
          <h2>Earn by every completed order</h2>
        </div>
      </li>
      <li>
        <img src="@/assets/images/invite/ste.png" alt="">
        <div class="introduce">
          <h1>Shop-to-Earn</h1>
          <h2>Earn by every completed order</h2>
        </div>
      </li>
      <li>
        <img src="@/assets/images/invite/ste.png" alt="">
        <div class="introduce">
          <h1>Shop-to-Earn</h1>
          <h2>Earn by every completed order</h2>
        </div>
      </li> -->
    </ul>
    <clockDialog ref="clock"></clockDialog>
  </section>
</template>
<script>
import clockDialog from '@/pages/clock/index.vue'
export default {
  components: {
    clockDialog,
  },
  data() {
    return {
      inviteList: [
        {
          url: require('@/assets/images/invite/ste.png'),
          name1: 'Shop-to-Earn',
          name2: 'Earn by every completed order',
        },
        {
          url: require('@/assets/images/invite/inviteFriend.png'),
          name1: 'Invite Friends',
          name2:
            'You will get 50 $SMT for every success invitation and your friend will get 25 $SMT after registration',
        },
        {
          url: require('@/assets/images/invite/cle.png'),
          name1: 'Clock-to Earn',
          name2: 'Earn by daily clock-in',
        },
        {
          url: require('@/assets/images/invite/so.png'),
          name1: 'Special Offers',
          name2: 'Stay tuned',
        },
      ],
    }
  },
  methods: {
    jump(index) {
      switch (index) {
        case 2:
          this.$refs.clock.isShow = true
          break
        case 1:
          this.$router.push('invitation_record')
          break
      }
    },
  },
}
</script>
<style scoped lang='less'>
@p: 100rem;
section {
  width: 100%;
  height: 100vh;
  background: url('~@/assets/images/invite/bg.jpg');
  background-size: cover;
  overflow: hidden;
}
.title {
  margin: 141 / @p auto 0;
  font-size: 67 / @p;
  font-family: Times New Roman;
  font-weight: bold;
  color: #272727;
  line-height: 78 / @p;
  width: 455 / @p;
  height: 110 / @p;
  background: #eeea38;
  box-shadow: 0 / @p 2 / @p 19 / @p 1 / @p rgba(76, 109, 216, 0.47);
  border-radius: 5 / @p;
  text-align: center;
  line-height: 110 / @p;
  margin-bottom: 66 / @p;
}
ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.img0 {
  width: 206 / @p;
  height: 162 / @p;
  margin-right: 30 / @p;
  margin-left: 46 / @p;
}
.img1 {
  width: 149 / @p;
  height: 149 / @p;
  margin-right: 70 / @p;
  margin-left: 59 / @p;
}
.img2 {
  width: 205 / @p;
  height: 130 / @p;
  margin-right: 52 / @p;
  margin-left: 24 / @p;
}
.img3 {
  width: 160 / @p;
  height: 149 / @p;
  margin-right: 68 / @p;
  margin-left: 54 / @p;
}
li {
  width: 868 / @p;
  height: 269 / @p;
  box-shadow: 0 / @p 5 / @p 15 / @p 1 / @p rgba(76, 109, 216, 0.47);
  border-radius: 20 / @p;
  display: flex;
  align-items: center;
  margin-bottom: 43 / @p;

  h1 {
    font-size: 50 / @p;
    font-family: Times New Roman;
    font-weight: bold;
    color: #272727;
    line-height: 36 / @p;
    margin-bottom: 15 / @p;
  }
  h2 {
    font-size: 33 / @p;
    font-family: Times New Roman;
    font-weight: bold;
    color: #272727;
    line-height: 36 / @p;
  }
}
@media screen and (max-width: 700px) {
  section {
    background: url('~@/assets/images/invite/h5bg.jpg');
  }
  .title {
    margin: 151 / @p auto 0;
    font-size: 51 / @p;
    width: 350 / @p;
    height: 85 / @p;
    line-height: 85 / @p;
    margin-bottom: 36 / @p;
  }
  ul {
    flex-direction: column;
    align-items: center;
  }
  li {
    width: 657 / @p;
    height: 191 / @p;
    h1 {
      font-size: 35 / @p;
    }
    h2 {
      font-size: 21 / @p;
    }
  }
  .img0 {
    width: 156 / @p;
    height: 123 / @p;
    margin-right: 26 / @p;
    margin-left: 39 / @p;
  }
  .img1 {
    width: 156 / @p;
    height: 99 / @p;
    margin-right: 76 / @p;
    margin-left: 39 / @p;
  }
  .img2 {
    width: 114 / @p;
    height: 113 / @p;
    margin-right: 66 / @p;
    margin-left: 39 / @p;
  }
  .img3 {
    width: 121 / @p;
    height: 114 / @p;
    margin-right: 66 / @p;
    margin-left: 39 / @p;
  }
}
</style>