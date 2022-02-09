<template>
  <footer>
    <div class="content">
      <div class="logo">
        <div class="logo_top">
          <img src="@/assets/images/logo_footer.png"
               class="img1"
               alt="">
          <img src="@/assets/images/logoname.png"
               class="img2"
               alt="">
          <div class="logo_bottom">
            The first place where you can buy and <br>sell items with your cryptocurren
          </div>
        </div>
      </div>
      <div class="contrat">
        <ol>
          <li>infomation </li>
          <li v-for="(item,index) in infomationList"
              :key="index">
            <a :href="item.herf"
               target="_blank"
               rel="noopener noreferrer">{{item.name}}</a>
          </li>
        </ol>
        <ol>
          <li>Community </li>
          <li v-for="(item,index) in communityList"
              :key='index'>
            <a :href="item.herf"
               target="_blank"
               rel="noopener noreferrer">{{item.name}}</a>
          </li>
          <!-- <li> Telegram </li>
          <li>Discord</li>
          <li>Meta</li> -->
        </ol>
      </div>
      <div class="mail">
        <p>Subscribe to our newsletter: stay in touch with latest updates with MetaDaos World</p>
        <div class="input">
          <input type="text"
                 placeholder="Your Email">
          <input type="text"
                 placeholder="Your Name">
        </div>
        <div class="button">Subscribe</div>
      </div>

    </div>
    <div class="sociality">
      <a v-for="(item,index) in socialist"
         :key="index"
         :href="item.herf"
         target="_blank"
         rel="noopener noreferrer">
        <img :src="item.imgUrl"
             alt="">
      </a>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'footer',
  data() {
    return {
      socialist: [
        {
          imgUrl: require('@/assets/images/twiter.png'),
          herf: 'https://twitter.com/Metadaos_world',
        },
        {
          imgUrl: require('@/assets/images/tg.png'),
          herf: 'https://t.me/MetadaosEn',
        },
        {
          imgUrl: require('@/assets/images/discord.png'),
          herf: 'https://discord.gg/5MFdTsNxtr',
        },
        {
          imgUrl: require('@/assets/images/faceBook.png'),
          herf: 'https://discord.gg/5MFdTsNxtr',
        },
      ],
      infomationList: [
        { name: 'Doc', herf: '' },
        {
          name: 'Whitepaper',
          herf: 'https://app.gitbook.com/s/mlIj6Clqca34joALWnkx/',
        },
        { name: 'Tokenomics', herf: '' },
        { name: 'Contact us', herf: '' },
      ],
      communityList: [
        { name: 'Twitter', herf: 'https://twitter.com/Metadaos_world' },
        { name: 'Telegram', herf: 'https://t.me/MetadaosEn' },
        { name: 'Discord', herf: 'https://discord.gg/5MFdTsNxtr' },
        { name: 'Meta', herf: '' },
      ],
    }
  },
}
</script>
<style lang="less" scoped>
@p: 100rem;
footer {
  width: 100%;
  height: 475 / @p;
  background: linear-gradient(10deg, #4ecdfb 0%, #1698e9 30%, #0a76e1 100%);
}
.content {
  width: 1241 / @p;
  margin: auto;
  padding-top: 114 / @p;
  display: flex;
  // overflow: hidden;
}

.logo_top {
  width: 275 / @p;
  height: 132 / @p;
  margin-right: 118 / @p;
  .img1 {
    width: 88 / @p;
    height: 77 / @p;
  }
  .img2 {
    width: 160 / @p;
    height: 65 / @p;
    margin-left: 20 / @p;
  }
}
.logo_bottom {
  font-size: 14 / @p;
  font-family: Alibaba PuHuiTi;
  font-weight: 400;
  color: #ffffff;
  line-height: 22 / @p;
  margin-top: 18 / @p;
}
.contrat {
  display: flex;
}
ol {
  font-family: Alibaba PuHuiTi;
  font-weight: 300;
  color: #ffffff;
  font-size: 16 / @p;
  margin-right: 53 / @p;
  a {
    color: #ffffff;
  }
}
ol li:first-child {
  font-size: 20 / @p;
  font-weight: 500;
  margin-bottom: 25 / @p;
}
.mail {
  width: 485 / @p;
  p {
    font-size: 20 / @p;
    font-family: Alibaba PuHuiTi;
    font-weight: 500;
    color: #ffffff;
    line-height: 26 / @p;
    margin-bottom: 17 / @p;
  }
  .button {
    width: 147 / @p;
    height: 45 / @p;
    background: #0c84e4;
    border: 2 / @p solid #ffffff;
    border-radius: 10 / @p;
    font-size: 16 / @p;
    font-family: Alibaba PuHuiTi;
    font-weight: 300;
    color: #fefefe;
    text-align: center;
    line-height: 45 / @p;
    margin-top: 10 / @p;
  }
}
// .input{
//   height:46/@p ;
//   margin-bottom: 10/@p;
// }
.sociality {
  width: 213 / @p;
  height: 48 / @p;
  display: flex;
  margin: 30 / @p auto;
  justify-content: space-between;
  img {
    width: 46 / @p;
    height: 46 / @p;
    vertical-align: text-top;
  }
}
input {
  width: 240 / @p;
  height: 46 / @p;
  border: 2 / @p solid #ffffff;
  border-radius: 10 / @p;
}
.input {
  display: flex;
  justify-content: space-between;

  // margin-top: -50 / @p;
}
</style>