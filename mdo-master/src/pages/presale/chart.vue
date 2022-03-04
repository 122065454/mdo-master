<template>
  <div>
    <section class="chart w">
      <div class="chart_left">
        <p>Token Distribution</p>
        <div class="chart_show" ref="chartLeft"></div>
      </div>
      <div class="chart_right">
        <p>Allocation of funds</p>
        <div class="chart_show" ref="chartRight"></div>
      </div>
    </section>
  </div>
</template>
<script>
import * as echarts from "echarts";
export default {
  name: "chart",
  mounted() {
    this.initEachartsLeft();
    this.initEachartsRight();
  },
  methods: {
    initEachartsLeft() {
      let myChart = echarts.init(this.$refs.chartLeft);
      var option = {
        tooltip: {
          trigger: "item",
        },
        legend: {
          top: "5%",
          left: "center",
           textStyle: { //图例文字的样式
                            color: '#fff',
                            fontSize: 12

        },
        },
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                // show: true,
                fontSize: "40",
                fontWeight: "bold",
              
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 1048, name: "Search Engine" },
              { value: 735, name: "Direct" },
              { value: 580, name: "Email" },
              { value: 484, name: "Union Ads" },
              { value: 300, name: "Video Ads" },
            ],
          },
        ],
      };
      myChart.setOption(option);
    },
    initEachartsRight() {
      let myChart = echarts.init(this.$refs.chartRight);
      var option = {
        tooltip: {
          trigger: "item",
        },
        legend: {
          // orient: "vertical",
          // right: "0%", //图例距离左的距离
          // y: "center", //图例上下居中
           top: "5%",
          left: "center",
           textStyle: { //图例文字的样式
                            color: '#fff',
                            fontSize: 12

        },
        },
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                // show: true,
                fontSize: "40",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              {
                value: 1048,
                name: "Search Engine",
                itemStyle: { color: "#77ffcf" },
              },
              { value: 735, name: "Direct", itemStyle: { color: "#fae373" } },
              { value: 580, name: "Email", itemStyle: { color: "#f29c5f" } },
              {
                value: 484,
                name: "Union Ads",
                itemStyle: { color: "#fd65ae" },
              },
              {
                value: 300,
                name: "Video Ads",
                itemStyle: { color: "#8c53fc" },
              },
            ],
          },
        ],
      };
      myChart.setOption(option);
    },
  },
};
</script>

<style lang="less" scoped>
.chart {
  display: flex;
  justify-content: space-between;
  width: 1300px;
  margin: auto;
  color: #ffffff;
  padding: 28px 28px;
  background: rgba(94, 149, 232, 0.1);
  font-family: DM Sans;
  border-radius: 12px;
  margin-bottom: 40px;
}
.chart_show {
  width: 500px;
  height: 500px;
}
.chart_left,
.chart_right {
  p {
    width: 200px;
    margin: auto;
    font-size: 20px;
  }
  p::after {
    content: "";
    width: 180px;
    height: 2px;
    background: linear-gradient(
      to right,
      rgb(166, 112, 226) 0%,
      rgb(116, 226, 199) 100%
    );
    display: block;
  }
}
</style>