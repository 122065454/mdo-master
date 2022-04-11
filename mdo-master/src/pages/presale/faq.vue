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
        v-for="item in dataList"
        :key="item.id"
        :header="item.header"
      >
        <p>{{ item.text }}</p>
      </a-collapse-panel>
    </a-collapse>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dataList: [
        {
          id: 1,
          header: "How can I participate in the Simeta Pre-sale?",
          text: "To participate in the Simeta Pre-sale, head over to https://www.simeta.io once it opens on Apr 17th 2022 and follow the registration instructions. All you need is an Ethereum wallet compatible with BEP20 tokens. Please do use only BSC compatible wallet.",
        },
        {
          id: 2,
          header:
            "I am an US citizen. Can I participate in the Simeta Pre-sale?",
          text: "The Simeta Pre-sale is a worldwide and it’s open to everyone, however national laws apply. It’s up to the investors to check locally whether or not they can invest.",
        },
        {
          id: 3,
          header: "Is there a discount or a bonus during the Simeta Pre-sale?",
          text: "There will be a 20% bonus in the first 7 days of the sale or until we sell 30% of tokens — whichever comes first — , to reward our first investors. This bonus is meant to reward the investors that decided to invest sooner than later.",
        },
        {
          id: 4,
          header: " Is there a minimum investment stake?",
          text: "Yes, the minimum investment during theSimeta Pre-sale is 0.2BNB. There won’t be a maximum investment per wallet, unlike pre-sale, which means every single investor will be able to invest as much as they like.",
        },
        {
          id: 5,
          header: "Does Simeta Pre-sale require KYC?",
          text: "Yes, there will be two types of KYC. For investors under 5 BNB there will be a light KYC process where personal information will be required, such as first and last name, gender, date of birth, nationality, country of residence, passport/national id number. For investors over 5 BNB we will have a full KYC process where an additional scan of the passport or national ID card will be required.",
        },
        {
          id: 6,
          header: "Why do you require a KYC process?",
          text: "The Know Your Client form is a standard form in the investment industry that ensures investment advisors know detailed information about their clients’ risk tolerance, investment knowledge and financial position. The aim of KYC is also to prevent theft, fraud, terrorist financing and money laundering. It helps us ensure that our clients are not involved in any of the above, hence the service provider won’t get in trouble with the regulators.",
        },
        {
          id: 7,
          header: "Which cryptocurrencies are accepted during the sale?",
          text: "Since Simeta Pre-sale is an BEP-20 token and the token distribution is done instantly by smart contract, we can only accept BNB.",
        },
        {
          id: 8,
          header: "Do we receive the actual tokens during the sale?",
          text: "",
        },
        {
          id: 9,
          header: "On which exchange will AppCoins be listed?",
          text: "",
        },
        {
          id: 10,
          header: "Is there a vesting period for team tokens?",
          text: "Yes there will be a vesting period for the team tokens. The tokens distribution will have a cliff of 0.5 year and a vesting period of 4 year. ",
        },
      ],
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
