<template>
  <footer v-if='isPC'>
    <div class="content">
      <div class="logo">
        <div class="logo_top">
          <img src="@/assets/images/h5/logo.png"
               class="img1"
               alt="">
          <img src="@/assets/images/h5/Simeta.png"
               class="img2"
               alt="">
          <div class="logo_bottom">
            The first virtual futuristic eCommerce marketplace where users can buy and sell items in both the crypto field and the physical world with cryptocurrencies worldwide
          </div>
        </div>
      </div>
      <div class="contrat">
        <ol>
          <li>Infomation </li>
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
        <p>Subscribe to our newsletter: stay in touch with latest updates with Simeta</p>
        <div class="input">
          <input type="text"
                 v-model="email"
                 placeholder="Your Email">
          <input type="text"
                 v-model="name"
                 placeholder="Your Name">
        </div>
        <div class="button"
             @click="sumbit">Subscribe</div>
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
  <footer v-else>
    <div class="title">
      <img src="@/assets/images/h5/logo.png"
           class="footer_logo"
           alt="">
      <img src="@/assets/images/h5/Simeta.png"
           class="simeta"
           alt="">
    </div>
    <div class="introduce">
      The first virtual futuristic eCommerce marketplace where users can buy and sell items in both the crypto field and the physical world with cryptocurrencies worldwide
    </div>
    <div class="h5_contact">
      <ol>
        <li>Infomation </li>
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
    <div class="h5_input">
      <h1>Subscribe to our newsletter, stay in touch </h1>
      <h2> with latest updates with Simeta</h2>
      <input type="text"
             placeholder="Your Email"
             v-model="email"
             name=""
             id="">
      <input type="text"
             name=""
             v-model="name"
             placeholder="Your Name"
             id="">
      <div class="h5_button"
           @click="sumbit">Subscribe</div>
    </div>
    <div class="h5_sociality">
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
import { Notify } from 'vant'
import md5 from 'md5'
export default {
  name: 'footers',
  data() {
    return {
      email: '',
      name: '',
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
          herf: 'https://discord.gg/5MFdTsNxtr',
        },
        {
          imgUrl: require('@/assets/images/faceBook.png'),
          herf: '',
        },
      ],
      infomationList: [
        {
          name: 'Doc',
          herf: 'https://simeta.gitbook.io/about/',
        },
        {
          name: 'Whitepaper',
          herf: 'https://www.simeta.io/whitepaper.pdf',
        },
        {
          name: 'Tokenomics',
          herf: 'https://simeta.gitbook.io/about/whitepaper/our-tokenomics',
        },
        {
          name: 'Contact us',
          herf: 'https://simeta.gitbook.io/about/contact-us',
        },
      ],
      communityList: [
        { name: 'Twitter', herf: 'https://twitter.com/simeta_io' },
        { name: 'Telegram', herf: 'https://t.me/SimetaOfficial' },
        { name: 'Discord', herf: 'https://discord.gg/b58T5CP8Ky' },
        { name: 'Meta', herf: '' },
      ],
    }
  },
  methods: {
    sumbit() {
      if (this.email && this.name) {
        this.$axios
          .post('/api/commit', this.$qs.stringify({
            email: this.email,
            name: this.name,
            sign: md5(
              'a=MetaDao123456&email=' + this.email + '&name=' + this.name
            ),
          }))
          
          .then(function (response) {
            if (response.data.code == 0) {
              Notify({ type: 'success', message: 'Submitted successfully' })
            } else {
              Notify({ type: 'danger', message:response.data.msg})           
            }

            console.log(response)
          })
          .catch(function (error) {
            Notify({ type: 'danger', message: 'Submission Failed' })

            console.log(error)
          })
      } else {
      }
    },
  },
}
</script>
<style lang="less" scoped>
@p: 100rem;
@media screen and (min-width: 700px) {
  footer {
    width: 100%;
    height: 375 / @p;
    background: url(~@/assets/images/footer.png) center no-repeat;
    background-size: cover;
  }
  input {
    width: 240 / @p;
    height: 46 / @p;
    border: 2 / @p solid #ffffff;
    border-radius: 10 / @p;
    font-size: 16 / @p;
    padding-left: 20 / @p;
  }
  .input {
    display: flex;
    justify-content: space-between;

    // margin-top: -50 / @p;
  }
}

.content {
  width: 1241 / @p;
  margin: auto;
  padding-top: 70 / @p;
  display: flex;
  // overflow: hidden;
}

.logo_top {
  width: 275 / @p;
  height: 132 / @p;
  margin-right: 118 / @p;
  line-height: 10 / @p;
  .img1 {
    width: 80 / @p;
    height: 74 / @p;
  }
  .img2 {
    width: 112 / @p;
    height: 29 / @p;
    margin-left: 20 / @p;
    margin-bottom: 24 / @p;
  }
}
.logo_bottom {
  font-size: 14 / @p;
  font-family: AlibabaPuHuiTi;
  font-weight: 400;
  color: #ffffff;
  line-height: 26 / @p;
  margin-top: 18 / @p;
}
.contrat {
  display: flex;
}
ol {
  font-family: AlibabaPuHuiTi;
  font-weight: 300;
  color: #ffffff;
  font-size: 16 / @p;
  margin-right: 53 / @p;
  a {
    color: #ffffff;
  }
}
li {
  margin-bottom: 7 / @p;
}
a:hover {
  transform: translateY(-10px);
  transition: all 1;
}
li:not(:first-child):hover {
  transform: translateX(10px);
  transition: all 0.5s;
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
    font-family: AlibabaPuHuiTi;
    font-weight: 500;
    color: #ffffff;
    line-height: 26 / @p;
    margin-bottom: 17 / @p;
  }
  .button {
    width: 147 / @p;
    height: 45 / @p;
    background: #0c84e4;
    // border: 2 / @p solid #ffffff;
    border-radius: 10 / @p;
    font-size: 16 / @p;
    font-family: AlibabaPuHuiTi;
    font-weight: 300;
    color: #fefefe;
    text-align: center;
    line-height: 45 / @p;
    margin-top: 20 / @p;
    cursor: pointer;
  }
}
// .input{
//   height:46/@p ;
//   margin-bottom: 10/@p;
// }
.sociality {
  width: 266 / @p;
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

@media screen and (max-width: 700px) {
  footer {
    width: 100%;
    padding: 74 / @p 59 / @p;
    background: linear-gradient(25deg, #3886e6 0%, #650dab 100%);
  }
  .title {
    display: flex;
    align-items: center;
    margin-bottom: 30 / @p;
  }
  .footer_logo {
    width: 82 / @p;
    height: 80 / @p;
    margin-right: 23 / @p;
  }
  .simeta {
    width: 125 / @p;
    height: 32 / @p;
  }
  .introduce {
    font-size: 28 / @p;
    word-break: break-all;
    font-family: AlibabaPuHuiTi;
    font-weight: 400;
    color: #dbcfec;
    line-height: 36 / @p;
    margin-bottom: 60 / @p;
  }
  .h5_contact {
    display: flex;
    justify-content: space-between;
    margin-bottom: 100 / @p;
  }
  ol {
    font-size: 28 / @p;
  }
  ol li:first-child {
    font-size: 30 / @p;
    font-weight: 500;
    margin-bottom: 26 / @p;
  }
  .h5_input {
    h1 {
      font-size: 28 / @p;
      font-family: AlibabaPuHuiTi;
      font-weight: 400;
      color: #ffffff;
      line-height: 26 / @p;
      margin-bottom: 5 / @p;
    }
    h2 {
      font-size: 28 / @p;
      font-family: AlibabaPuHuiTi;
      font-weight: 400;
      color: #ffffff;
      line-height: 40 / @p;
    }
    input {
      border: 2 / @p solid #ffffff;
      border-radius: 10 / @p;
      height: 88 / @p;
      width: 100%;
      font-size: 16px;
      padding-left: 25 / @p;
    }
    .h5_button {
      height: 88 / @p;
      line-height: 88 / @p;
      text-align: center;
      background: #0c84e4;
      width: 40%;
      margin: auto;
      margin-top: 80 / @p;
      border-radius: 10 / @p;
      font-size: 32 / @p;
      font-family: AlibabaPuHuiTi;
      font-weight: 400;
      color: #fefefe;
    }
  }
  .h5_sociality {
    width: 70%;
    height: 88 / @p;
    margin: auto;
    display: flex;
    justify-content: space-between;
    margin-top: 50 / @p;
  }
}
</style>