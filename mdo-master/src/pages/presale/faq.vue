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
        <img
          class="img_one"
          :src="item.img"
          alt=""
        >
        <p>{{item.text2}}</p>
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
          header: "Q1. Is $SMT a cryptocurrency like Bitcoin?",
          text: "No. Well, not exactly. Simeta utility token $SMT applies the same underlying technology as cryptocurrencies like Bitcoin and Ether, they are not spendable currencies. Stock certificates and dollar bills use the same technology (ink on paper), but are different financial instruments made for different purposes. Like a stock, Simeta utility token $SMT is expected to gain value of time, and be sold or traded on accredited exchanges at a profit for investors with the development of the project Simeta.",
        },
        {
          id: 2,
          header: "Q2. Why do a presale?",
          text: "Simply put, the pre-sale enables us to do the programming and auditing work without exhausting our present resources, which are going into product development. In return, investors receive a massive bonus, as described below. The funds raised are going to be used in marketing, liquidity and crypto ecommerce system development with a ratio of 43%, 24% and 33% respectively.",
        },
        {
          id: 3,
          header: "Q3. What is the bonus for investors during presale?",
          text: "Basically, investors receive more tokens for their BNB. Investors who buy tokens during the 1st presale will receive an additional 5% to 20% of the amount of Simeta utility token $SMT they bought  in the first 12 hours of the sale. This bonus is meant to reward the investors that decided to invest sooner than later. The bonus matrix is as following:",
          img: require("../../assets/images/imgone.png"),
          text2:
            "For example: Bob succeeded to invest 7 BNB in first 2 hours during the presale, he will get 140,000 basic amount of $SMT and additional 17% of the number of $SMT he bought which is 16,380, so Bob will totally receive 156,380 $SMT eventually after vesting period that is 10 months from TGE onwards. ",
        },
        {
          id: 4,
          header:
            "Q4. I am an US citizen. Can I participate in the Simeta Pre-sale?",
          text: "Simeta Pre-sale is worldwide and it’s fair and open to everyone, however national laws apply. It’s up to the investors to check locally whether or not they can invest. Only those who are whitelisted after completing the whitelist application form can invest. Here is the whitelist application form: https://form.jotform.com/221002321766443",
        },
        {
          id: 5,
          header: "Q5. How can I participate in the Simeta Pre-sale?",
          text: "To participate in the Simeta Pre-sale, you need to be whitelisted first, then head over to https://www.simeta.io once the Pre-sale is active at 08:00 (UTC) on Apr 17th 2022. All you need is a wallet compatible with BEP20 tokens and enough BNB during the presale.Here is the whitelist application form: https://form.jotform.com/221002321766443",
        },
        {
          id: 6,
          header: "Q6. Is there a minimum investment stake?",
          text: "Yes, the minimum investment during the Simeta Pre-sale is 0.2BNB. There won’t be a maximum investment per wallet, unlike seed round sale, which means every single whitelisted investor will be able to invest as much as they like.",
        },
        {
          id: 7,
          header: "Q7. Does Simeta presale require KYC?",
          text: "Yes, KYC is carried out during the whitelist application process where personal information will be required, such as first and last name, gender, date of birth, nationality, source of funds etc.Here is the whitelist application form: https://form.jotform.com/221002321766443The KYC is a standard process in the investment industry that ensures investment advisors know detailed information about their clients’ risk tolerance, investment knowledge and financial position. The aim of KYC is also to prevent theft, fraud, terrorist financing and money laundering. It helps us ensure that our clients are not involved in any of the above.",
        },
        {
          id: 8,
          header: "Q8. How long will the whitelist application last?",
          text: "Whitelist application starts from 12:00 (UTC) on Tue 12 Apr 2022  and ends at 12:00 (UTC) on Sat 16 Apr 2022 which is one day before the presale",
        },
        {
          id: 9,
          header: "Q9. Can I join the pre-sale if I am not whitelisted?",
          text: "The pre-sale is open for those who are whitelisted only, those who are not whitelisted will not be able to participant in the pre-sale",
        },
        {
          id: 10,
          header:
            "Q10. When will the whitelist application results be generated?",
          text: "Simeta team will announce the results of whitelist application within 6 hours after it’s concluded ",
        },
        {
          id: 11,
          header: "Q11. Which cryptocurrencies are accepted during the sale?",
          text: "Since Simeta utility token $SMT is a BEP-20 token and the token distribution is done instantly by smart contract, we can only accept BNB.",
        },
        {
          id: 12,
          header:
            "Q12. Which exchange will Simeta utility token $SMT be listed on?",
          text: "Simeta utility token $SMT is going to be listed on top tier decentralised exchanges on BSC chain, like Pancakeswap and Biswap after IDO on pinksale in late April to early May and followed by one of the famous centralised exchanges in June to July. ",
        },
        {
          id: 13,
          header: "Q13. Do we receive the actual tokens during the sale?",
          text: "Investors will not receive the purchased token immediately after the presale, instead, all investors will receive their 20% of purchased tokens (Basic + Bonus if there is) before the token listed on Pancake in late April to early May and the balances are distributed within the coming 10 months linearly as stated in our tokenomics with project progress that is part of our vesting program. ",
        },
        {
          id: 14,
          header: "Q14. Is the vesting program applicable for team tokens?",
          text: "Yes, there will be a long vesting period for the team tokens. More than that, the team tokens distribution will have a cliff of 6 months and a vesting period of 40 months. The cliff and vesting of team tokens is intended to create focus on project development before the teams receive rewards.",
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
  .img_one {
    margin: 10px 0 10px 0;
  }
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
