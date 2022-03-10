<template>
  <div class="sociality ">
    <a v-for="(item,index) in socialist"
       :key="index"
       :href="item.herf"
       target="_blank"
       rel="noopener noreferrer">
      <img :src="item.imgUrl"
           alt="">
    </a>
  </div>

</template>
<script>
export default {
  data() {
    return {
      socialist: [
        {
          imgUrl: require('@/assets/images/twiter.png'),
          herf: 'https://twitter.com/simeta_io',
        },
        {
          imgUrl: require('@/assets/images/tg.png'),
          herf: 'https://t.me/SimetaOfficial',
        },
        {
          imgUrl: require('@/assets/images/discord.png'),
          herf: 'https://discord.gg/b58T5CP8Ky',
        },
        {
          imgUrl: require('@/assets/images/faceBook.png'),
          herf: 'https://discord.gg/5MFdTsNxtr',
        },
      ],
    }
  },
}
</script>

<style lang="less" scoped>
@p: 100rem;
.sociality {
  position: fixed;
  z-index: 99;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
  width: 50 / @p;
  height: 170 / @p;
  background: #6600ff;
  padding-top: 15 / @p;
  border-radius: 20 / @p 0 / @p 0 / @p 20 / @p;
  img {
    width: 100%;
    vertical-align: text-top;
  }
  a {
    display: block;
    width: 23 / @p;
    height: 23 / @p;
    margin-top: 10px;
    margin: 10 / @p auto;
  }
  a:hover {
    // transform: translateX(10px);
    transform: scale(1.1);
    transition: all 0.5;
  }
}
</style>