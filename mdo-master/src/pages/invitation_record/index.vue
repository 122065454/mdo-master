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
            <img src="@/assets/images/user_@2x.png" alt="">
            <span>{{firends}}</span>
          </div>
        </div>
        <div class="right">
          <h2>Total </h2>
          <div class="right_box">
            <p>
              <span>$SMT</span>
              <span style="margin-left:.2rem">{{smt}}</span>
            </p>
            <router-link to="/reward">
              <button>GO Rewards</button>
            </router-link>

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
            <li>Step 3 : Both of you and your friend get $SMT rewards </li>
          </ul>
        </div>

      </div>
      <ul class="hide">
        <li>Step 1 : Click button to share the invite link</li>
        <li>Step 1 : Your friends take invitation, complete the registration</li>
        <li>Step 3 : Both of you and your friend get $SMT rewards </li>
      </ul>
      <div class="bottom">

        <div class="icon_input hide">
          <ul>
            <li @click="doAction">
              <img src="@/assets/images/message.png" alt="">
              <p>message</p>
            </li>
            <li @click="gowhatsapp">
              <img src="@/assets/images/phone_two.png" alt="">
              <p>WhatsApp</p>
            </li>
            <li @click="shareTwitter">
              <img src="@/assets/images/twitter_three.png" alt="">
              <p>twitter</p>
            </li>
            <li>
              <img src="@/assets/images/more_four.png" alt="">
              <p>more...</p>
            </li>
          </ul>
          <div class="input_btn">
            <input type="text" placeholder="simeta.io/i/Jessie">
            <button>Copy</button>
          </div>
        </div>
        <div class="records">
          <h1>Records</h1>

          <el-table v-if="records.length > 0" :data="records" style="width: 100%">
            <el-table-column prop="createTime" label="Date" align="center" show-overflow-tooltip>
            </el-table-column>
            <el-table-column prop="email" label="Account" align="center" show-overflow-tooltip>
            </el-table-column>
            <el-table-column prop="award" label="Rewards" align="center">
            </el-table-column>
          </el-table>
          <div v-else style="
    width: 100%;
    background: #fff;
    box-sizing: border-box;
    height: 1.5rem;
    border-radius: 0.1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    
">
            No data
          </div>
          <el-pagination layout="prev, pager, next" :total="total" hide-on-single-page @current-change="handleCurrentChange" :page-size="params.pageSize">
          </el-pagination>
        </div>
        <div class="icon_input show">
          <ul>
            <li @click="doAction">

              <img src="@/assets/images/message.png" alt="">
              <p>message</p>

            </li>
            <li @click="gowhatsapp">
              <img src="@/assets/images/phone_two.png" alt="">
              <p>WhatsApp</p>
            </li>
            <li @click="shareTwitter">
              <img src="@/assets/images/twitter_three.png" alt="">
              <p>twitter</p>
            </li>
            <li>
              <img src="@/assets/images/more_four.png" alt="">
              <p>more...</p>
            </li>
          </ul>
          <div class="input_btn">
            <input type="text" placeholder="simeta.io/i/Jessie" v-model="share_url">
            <button @click="copystring">Copy</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  inviteUser,
  pageAwardRecordForInvite,
  getInviteUserSum,
  getUserIntegral,
} from '@/utils/request.js'
export default {
  data() {
    return {
      firends: 0,
      smt: 0,
      total: 0,
      share_url: 'http://tc.simeta.io/shop/register',
      params: {
        currPage: 1,
        pageSize: 5,
      },
      records: [],
    }
  },
  created() {
    inviteUser().then((res) => {
      if (res.data.code == 200) {
        this.share_url = `${this.share_url}?inviteCode=${res.data.data}`
      }
    })
    getInviteUserSum().then((res) => {
      if (res.code == 200) {
        this.firends = res.data
      }
    })
    getUserIntegral().then((res) => {
      if (res.data.code == 200) {
        this.smt = res.data.data
      }
    })
    this.getdatalist()
  },
  methods: {
    copystring() {
      let oInput = document.createElement('input')
      //这边为链接地址this.liveLink='www.baidu.com'
      oInput.value = this.share_url
      document.body.appendChild(oInput)
      oInput.select()
      document.execCommand('Copy')
      oInput.remove()
      this.$message({
        message: 'Copy successful',
        type: 'success',
      })
    },
    getdatalist() {
      pageAwardRecordForInvite(this.params).then((res) => {
        this.records = res.data.data.records
        this.total = res.data.data.total
      })
    },
    // 分页
    handleCurrentChange(e) {
      this.params.currPage = e
      this.getdatalist()
    },
    // 分享到twitter
    shareTwitter() {
      function popupwindow(url, title) {
        return window.open(
          'https://twitter.com/intent/tweet?url=' +
            encodeURIComponent(url) +
            '&text=' +
            encodeURIComponent(title),
          '_blank',
          'toolbar=yes, location=yes, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, width=600, height=450,top=100,left=350'
        )
      }
      popupwindow(
        this.share_url,
        'Check out the amazing Web3.0 crypto ecommerce platform and get rewards every day'
      )
    },

    // 分享message
    doAction() {
      var u = navigator.userAgent
      //判断是否为android终端
      // var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
      //判断是否为ios终端
      var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
      //这里填写要分享的内容
      var des = `Check out the amazing Web3.0 crypto ecommerce platform and get rewards every day ${this.share_url}`
      //ios终端
      if (isiOS) {
        window.location.href = 'sms:' + '&body=' + des
        //安卓终端
      } else {
        window.location.href = 'sms:' + '?body=' + des
      }
    },

    // 分享whatsapp
    gowhatsapp() {
      let _href = 'https://api.whatsapp.com/send?'
      const text = `Check out the amazing Web3.0 crypto ecommerce platform and get rewards every day`
      _href += '&text=' + text //标题
      _href += '&url=' + encodeURIComponent(this.share_url) //链接
      window.open(_href)
    },
  },
}
</script>

<style lang="less" scoped>
@import './index.less';
/deep/ .el-table tr {
  background: #e9e9e9;
  color: #868686;
  font-size: 0.2rem;
}

/deep/ .el-table .cell {
  text-align: center;
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
  min-width: 25.5px;
}
/deep/ .el-pagination button:disabled {
  background: #e9e9e9;
}
/deep/ .el-table .el-table__cell {
  padding: 0;
}
</style>
