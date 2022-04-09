<!--
 * @Author: your name
 * @Date: 2022-04-09 10:40:37
 * @LastEditTime: 2022-04-09 13:34:35
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /mdo-master/src/pages/presale/faq.vue
-->
<template>
  <div class="faq">
    <h1>FAQ</h1>
    <a-collapse
      default-active-key="1"
      :bordered="false"
    >
      <a-collapse-panel
        key="1"
        header="This is panel header 1"
      >
        <p>{{ text }}</p>
      </a-collapse-panel>
      <a-collapse-panel
        key="2"
        header="This is panel header 2"
        :disabled="false"
      >
        <p>{{ text }}</p>
      </a-collapse-panel>
      <a-collapse-panel
        key="3"
        header="This is panel header 3"
      >
        <p>{{ text }}</p>
      </a-collapse-panel>
    </a-collapse>
  </div>
</template>
<script>
export default {
  data() {
    return {
      text: `A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.`,
    };
  },
};
</script>
<style lang="less" scoped>
.faq {
  width: 1300px;
  margin: auto;
  color: #ffffff;
  padding: 28px 28px;
  border: 2px solid #f5cc3e;
  background: linear-gradient(0deg, #090909 0%, #26252c 100%);
  font-family: DM Sans;
  border-radius: 12px;
  margin-bottom: 100px;
}
/deep/.ant-collapse > .ant-collapse-item > .ant-collapse-header {
  color: #ffffff;
  font-size: 20px;
  background-color: transparent;
}
/deep/ .ant-collapse {
  background-color: transparent;
}
/deep/ .ant-collapse-borderless > .ant-collapse-item {
  border-bottom: 0px;
}
/deep/ p {
  color: #ffffff;
}
h1 {
  font-size: 60px;
  color: #fff141;
  text-align: center;
}
</style>
