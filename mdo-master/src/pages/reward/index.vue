<template>
  <div class="main">
    <div class="reward inner">
      <div class="box">
        <div class="left_box">
          <p class="text">Rewards dashboard</p>
          <div class="Withdraw">
            <img
              src="@/assets/images/400@2x.png"
              alt=""
            >
            <p><span style="margin-right: .1rem;">{{totalPrice}}</span><span style="margin-left: .1rem;">SMT</span></p>
            <div class="btn">Withdraw</div>
            <!-- <a-tooltip>
              <template #title>
              </template>
              <img
                src="@/assets/images/tist.png"
                class="tips"
                alt=""
                srcset=""
              >
            </a-tooltip> -->

          </div>
        </div>
        <div class="right_box">
          <ul class="one">
            <li @click="tabclick(1)">
              <div :class="{'active_box': params.dateType == 1}">All time</div>
            </li>
            <li @click="tabclick(2)">
              <div :class="{'active_box': params.dateType == 2}">Today</div>
            </li>
            <li @click="tabclick(3)">
              <div :class="{'active_box': params.dateType == 3}">This week</div>
            </li>
            <li @click="tabclick(4)">
              <div :class="{'active_box': params.dateType == 4}">Last month</div>
            </li>
          </ul>
          <div class="box">
            <ul class="two">
              <li
                :class="{'active_li': params.type == 1}"
                @click="tabclick2(1)"
              >S2E</li>
              <li
                @click="tabclick2(2)"
                :class="{'active_li': params.type == 2}"
              >Clock-in</li>
              <li
                @click="tabclick2(3)"
                :class="{'active_li': params.type == 3}"
              >invite</li>
            </ul>
            <div class="table_list">
              <ul
                class="box_list"
                v-if="records.length > 0"
              >
                <li
                  v-for="(item,index) in records"
                  :key="index"
                >
                  <span class="one_box">{{item.award}}</span>
                  <span class="two_box">{{item.createTime}}</span>
                </li>
              </ul>
              <ul
                style="text-align: center;height:2.2rem;"
                v-else
              >
                No data
              </ul>
            </div>
            <el-pagination
              layout="prev, pager, next"
              :total="total"
              hide-on-single-page
              @current-change="handleCurrentChange"
            >
            </el-pagination>
          </div>
        </div>
      </div>

    </div>
  </div>

</template>

<script>
import { pageAwardRecord, getUserIntegral } from "@/utils/request.js";
export default {
  data() {
    return {
      totalPrice: 0,
      records: [],
      params: {
        currPage: 1,
        pageSize: 5,
        dateType: 1,
        type: 2,
      },
      total: 0,
    };
  },
  created() {
    this.getdatalist();
    getUserIntegral().then((res) => {
      this.totalPrice = res.data || 0;
    });
  },
  methods: {
    getdatalist() {
      pageAwardRecord(this.params).then((res) => {
        console.log(res);
        this.records = res.data.records;
        this.total = res.data.total;
      });
    },
    tabclick(dateType) {
      this.params.dateType = dateType;
      this.getdatalist();
    },
    tabclick2(type) {
      this.params.type = type;
      this.getdatalist();
    },
    // 分页
    handleCurrentChange(e) {
      this.params.currPage = e;
      this.getdatalist();
    },
  },
};
</script>

<style lang="less" scoped>
@import "./index.less";
.el-pagination {
  text-align: center;
  margin-top: 0.1rem;
}
/deep/ .el-pagination button {
  background: transparent;
}
/deep/ .el-pager li {
  background: transparent;
}
/deep/ .el-pagination button:disabled {
  background: transparent;
}
</style>
