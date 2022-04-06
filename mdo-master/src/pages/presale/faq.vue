<template>
  <div class="faq">
    <h1>FAQ</h1>
    <a-collapse default-active-key="1"
                :bordered="false">
      <a-collapse-panel key="1"
                        style="background: #2a3357;border: 0;overflow: hidden;color:red !important"
                        header="This is panel header 1">
        <p>{{ text }}</p>
      </a-collapse-panel>
      <a-collapse-panel key="2"
                        style="background: #2a3357;border: 0;overflow: hidden"
                        header="This is panel header 2"
                        :disabled="false">
        <p>{{ text }}</p>
      </a-collapse-panel>
      <a-collapse-panel key="3"
                        style="background: #2a3357;border: 0;overflow: hidden"
                        header="This is panel header 3">
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
    }
  },
}
</script>
<style lang="less" scoped>
.faq {
  width: 1300px;
  margin: auto;
  color: #ffffff;
  padding: 28px 28px;
  background: rgba(94, 149, 232, 0.1);
  font-family: DM Sans;
  border-radius: 12px;
  margin-bottom: 100px;
}
/deep/.ant-collapse > .ant-collapse-item > .ant-collapse-header {
  color: #ffffff;
  font-size: 20px;
}
p {
  color: #ffffff;
}
h1 {
  font-size: 60px;
  color: #ffffff;
  text-align: center;
}
</style>