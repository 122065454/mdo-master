<template>
  <div>
    <section class="chart w">
      <div class="chart_left">
        <p>Private Sale Fund Usage</p>
        <div class="chart_show"
             ref="chartLeft"></div>
      </div>
      <div class="chart_right">
        <p>Allocation of funds</p>
        <div class="chart_show h5-chart"
             ref="chartRight"></div>
      </div>
    </section>
  </div>
</template>
<script>
import * as echarts from 'echarts'
export default {
  name: 'chart',
  mounted() {
    this.initEachartsLeft()
    this.initEachartsRight()
  },

  methods: {
    initEachartsLeft() {
      let myChart = echarts.init(this.$refs.chartLeft)
      var option = {
        tooltip: {
          trigger: 'item',
        },
        legend: {
          top: '5%',
          left: this.isPC ? 'center' : '10%',
          textStyle: {
            //图例文字的样式
            color: '#fff',
            // fontSize: 12,
          },
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c}% ',
        },
        series: [
          {
            center: this.isPC ? ['50%', '50%'] : ['49%', '60%'],
            name: 'Access From',
            type: 'pie',

            // avoidLabelOverlap: false,
            radius: '50%',
            label: {
              bleedMargin: 5,
              // show: false,
              normal: {
                fontSize: '20',
                show: true,
                formatter: '{d}%', //自定义显示格式(b:name, c:value, d:百分比)
              },
            },

            emphasis: {
              label: {
                show: true,
                fontSize: '20',
                fontWeight: 'bold',
              },
            },
            labelLine: {
              show: true,
            },
            data: [
              {
                value: '43',
                name: 'Marketing & Cummunity',
                itemStyle: {
                  normal: {
                    color: '#B91C1C',
                  },
                },
              },
              {
                value: '33',
                name: 'Operation & Development',
                itemStyle: {
                  normal: {
                    color: '#F97316',
                  },
                },
              },
              {
                value: '24',
                name: 'Liquidity & Exchanges ',
                itemStyle: {
                  normal: {
                    color: '#FCD34D',
                  },
                },
              },
            ],
          },
        ],
      }
      myChart.setOption(option)
    },
    initEachartsRight() {
      let myChart = echarts.init(this.$refs.chartRight)
      var option = {
        tooltip: {
          trigger: 'item',
        },
        legend: {
          // orient: "vertical",
          // right: "0%", //图例距离左的距离
          // y: "center", //图例上下居中
          top: '5%',
          left: this.isPC ? 'center' : '0%',
          textStyle: {
            //图例文字的样式
            color: '#fff',
            fontSize: 12,
          },
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)',
        },
        series: [
          {
            center: this.isPC ? ['50%', '50%'] : ['50%', '75%'],
            name: 'Access From',
            type: 'pie',
            radius: '50%',
            avoidLabelOverlap: false,
            label: {
              // show: false,
              // position: "center",
              normal: {
                fontSize: '20',
                show: true,
                formatter: '{d}%', //自定义显示格式(b:name, c:value, d:百分比)
              },
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '40',
                fontWeight: 'bold',
              },
            },
            labelLine: {
              show: true,
            },
            data: [
              {
                value: '60000000',
                name: 'Strategic Partner',
                itemStyle: { color: '#DC2626' },
              },
              {
                value: '100000000',
                name: 'Seed Round',
                itemStyle: { color: '#D97706' },
              },
              {
                value: 200000000,
                name: 'Private Round',
                itemStyle: { color: '#65A30D' },
              },
              {
                value: 120000000,
                name: 'Public Round',
                itemStyle: { color: '#059669' },
              },
              {
                value: 320000000,
                name: 'Development Team',
                itemStyle: { color: '#0891B2' },
              },
              {
                value: 200000000,
                name: 'Marketing',
                itemStyle: { color: '#2563EB' },
              },
              {
                value: 500000000,
                name: 'User Incentives',
                itemStyle: { color: '#7C3AED' },
              },
              {
                value: '140000000',
                name: 'Liquidity',
                itemStyle: { color: '#C026D3' },
              },
              {
                value: 300000000,
                name: 'Reserve',
                itemStyle: { color: '#E11D48' },
              },
              {
                value: 60000000,
                name: 'Advisors',
                itemStyle: { color: '#FACC15' },
              },
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
  justify-content: space-evenly;
  margin-top: 40px;
  // width: 1300px;
  // margin: auto;
  // color: #ffffff;
  // padding: 28px 28px 0;
  // background: rgba(94, 149, 232, 0.1);
  // font-family: DM Sans;
  // border-radius: 12px;
  // margin-bottom: 40px;
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
    text-align: center;
    color: #eece5a;
  }
  p::after {
    content: '';
    width: 186px;
    height: 2px;
    background: linear-gradient(
      to right,
      rgb(166, 112, 226) 0%,
      rgb(116, 226, 199) 100%
    );
    display: block;
  }
}
.chart_left {
  p {
    width: 234px;
    margin: auto;
    font-size: 20px;
  }
  p::after {
    content: '';
    width: 230px;
    height: 2px;
  }
}
// h5
@media screen and (max-width: 700px) {
  @p: 100rem;
  .chart {
    width: 90%;
    margin-top: 20px;
    flex-direction: column;
    padding: 28px 16px;
  }
  .chart_show {
    width: 250px;
    height: 300px;
  }
  .h5-chart{
     height: 400px !important;
  }
  .chart_left,
  .chart_right {
    p {
      width: 200px;
      margin: auto;
      font-size: 20px;
      margin-bottom: 10px;
    }
  }
  .chart_left {
    p {
      width: 234px;
    }
  }
}
</style>
