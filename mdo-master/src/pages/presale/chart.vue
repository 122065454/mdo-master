<template>
  <div>
    <section class="chart w">
      <div class="chart_left"
           ref="chartLeft"></div>
      <div class="chart_right"
           ref='chartRight'></div>
    </section>
  </div>
</template>
<script>
import * as echarts from 'echarts'
export default {
  name: 'chart',
  mounted() {
    this.initEacharts()
  },
  methods: {
    initEacharts() {
      let myChart = echarts.init(this.$refs.chartLeft)
      var option = {
        tooltip: {
          trigger: 'item',
        },
        legend: {
          top: '5%',
          left: 'center',
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center',
            },
            emphasis: {
              label: {
                // show: true,
                fontSize: '40',
                fontWeight: 'bold',
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 1048, name: 'Search Engine' },
              { value: 735, name: 'Direct' },
              { value: 580, name: 'Email' },
              { value: 484, name: 'Union Ads' },
              { value: 300, name: 'Video Ads' },
            ],
          },
        ],
      }
      myChart.setOption(option)
    },
  },
}
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
.chart_left {
  width: 500px;
  height: 500px;
}
</style>