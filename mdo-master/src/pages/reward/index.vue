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
            <p><span style="margin-right: .1rem;">500</span><span style="margin-left: .1rem;">SMT</span></p>
            <div class="btn">Withdraw</div>
          </div>
        </div>
        <div class="right_box">
          <ul class="one">
            <li @click="tabclick(1)">All time</li>
            <li @click="tabclick(2)">Today</li>
            <li @click="tabclick(3)">This week</li>
            <li @click="tabclick(4)">Last month</li>
          </ul>
          <div class="box">
            <ul class="two">
              <li>S2E</li>
              <li>Clock-in</li>
              <li>invite</li>
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
              <ul class="box_list">
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
import { pageAwardRecord } from "@/utils/request.js";
export default {
  data() {
    return {
      records: [],
      params: {
        currPage: 1,
        pageSize: 5,
        dateType: 1,
      },
      total: 0,
    };
  },
  created() {
    this.getdatalist();
  },
  methods: {
    getdatalist() {
      pageAwardRecord(this.params).then((res) => {
        this.records = res.data.records;
        this.total = res.data.total;
      });
    },
    tabclick(dateType) {
      this.params.dateType = dateType;
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
