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
            <li>All time</li>
            <li>Today</li>
            <li>This week</li>
            <li>Last month</li>
          </ul>
          <div class="box">
            <ul class="two">
              <li>S2E</li>
              <li>Clock-in</li>
              <li>invite</li>
            </ul>
            <div class="table_list">
              <ul class="box_list">
                <li>
                  <span class="one_box">+10</span>
                  <span class="two_box">12:00 2th may 2022</span>
                </li>
                <li>
                  <span class="one_box">+10</span>
                  <span class="two_box">12:00 2th may 2022</span>
                </li>
                <li>
                  <span class="one_box">+10</span>
                  <span class="two_box">12:00 2th may 2022</span>
                </li>
                <li>
                  <span class="one_box">+10</span>
                  <span class="two_box">12:00 2th may 2022</span>
                </li>
              </ul>
            </div>
            <el-pagination
              layout="prev, pager, next"
              :total="1000"
            >
            </el-pagination>
          </div>
        </div>
      </div>

    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {};
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
