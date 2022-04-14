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
        <p v-html="item.text"></p>
        <img
          class="img_one"
          :src="item.img"
          alt=""
        >
        <p v-html="item.text2"></p>
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
          header: "Q1. Who can participate in the presale?",
          text: "There is no restriction on users who can participate in the presale. But users who applied the bonus and were shortlisted eventually will receive extra 8 - 20% of Simeta utility token $SMT they purchased during the presale while only 5% for those who didn't apply the bonus or were NOT shortlisted. <br><br>That means Not every applicant can apply successfully. Only shortlisted users will be noticed by email and on official handles.<br><br>Here is the bonus application and KYC form: https://form.jotform.com/221002321766443<br><br>Here is the bonus matrix for the presale:",
          img: require("../../assets/images/WechatIMG56.png"),
        },
        {
          id: 2,
          header: "Q2. Is $SMT a cryptocurrency like Bitcoin? ",
          text: "No. Well, not exactly. $SMT, the utility token of Simeta, applies the same underlying technology as cryptocurrencies like Bitcoin and Ether, they are not spendable currencies. Stock certificates and dollar bills use the same technology (ink on paper), but are different financial instruments made for different purposes. Like a stock, Simeta utility token $SMT is expected to gain value over time, and be sold or traded on accredited exchanges at a profit for investors with the development of the project Simeta.",
        },
        {
          id: 3,
          header: "Q3. Why do a presale?",
          text: "Simply put, the pre-sale enables us to do the programming and auditing work without exhausting our present resources, which are going into product development. In return, investors receive a massive bonus, as described below. The funds raised are going to be used in marketing, liquidity and crypto ecommerce system development with a ratio of 43%, 24% and 33% respectively.",
        },
        {
          id: 4,
          header: "Q4. What is the bonus for investors during presale?",
          text: "Basically, investors receive more tokens for their BNB. Investors who completed the Bonus Application Form will receive extra 8 - 20% of Simeta utility token $SMT they purchased during the presale while only 5% for those who didn't apply the bonus.. This bonus is meant to reward the investors that decided to invest sooner than later. The bonus matrix is as follows:",
          img: require("../../assets/images/WechatIMG56.png"),
          text2:
            "For example, If Sccot applied the Bonus and succeeded to invest 10 BNB during the presale, he will get 200,000 basic amount of $SMT and an additional 16% of the number of $SMT he bought which is 32,000, so Sccot will totally receive 232,000 $SMT. Sccot will only receive 5% extra of the number of $SMT he bought which is 10,000, so the total number of $SMT he will receive is 210,000 for 10 BNB if he didn’t apply the bonus before the presale after vesting period that is 10 months from TGE onwards.",
        },
        {
          id: 5,
          header:
            "Q5. I am an US citizen. Can I participate in the Simeta Pre-sale?",
          text: "Simeta Pre-sale is worldwide and it’s fair and open to everyone, however national laws apply. It’s up to the investors to check locally whether or not they can invest. ",
        },
        {
          id: 6,
          header: "Q6. How can I participate in the Simeta Pre-sale?",
          text: "To participate in the Simeta Pre-sale, just head over to https://www.simeta.io once the Pre-sale is active at 08:00 (UTC) on Apr 17th 2022. All you need is a wallet compatible with BEP20 tokens and enough BNB during the presale.<br><br>Be aware of that, those who completed the Bonus Application Form before the presale and were shortlisted eventually will receive a massive bonus which is 8% to 20% additional token they purchased during the presale.<br><br>Here is the Bonus application and KYC form: https://form.jotform.com/221002321766443",
        },
        {
          id: 7,
          header: "Q7. Is there a minimum and maximum investment stake?",
          text: "Yes, the minimum investment during the Simeta Pre-sale is 0.2BNB while the maximum investment is 20 BNB per wallet.",
        },
        {
          id: 8,
          header: "Q8. Does Simeta presale require KYC?",
          text: "Yes, KYC is carried out during the bonus application process where personal information will be required, such as first and last name, gender, date of birth, nationality, source of funds etc.<br><br>Here is the bonus application and KYC form: https://form.jotform.com/221002321766443Not every applicant can apply successfully. Only shortlisted users will be noticed by email and on official handles.<br><br>The KYC is a standard process in the investment industry that ensures investment advisors know detailed information about their clients’ risk tolerance, investment knowledge and financial position. The aim of KYC is also to prevent theft, fraud, terrorist financing and money laundering. It helps us ensure that our clients are not involved in any of the above.",
        },
        {
          id: 9,
          header: "Q9. How long will the bonus application last? ",
          text: "Bonus application starts from 08:00 (UTC) on Tue 12 Apr 2022  and ends at 08:00 (UTC) on Sat 16 Apr 2022 which is one day before the presale<br>The Bonus Application (Built-in KYC) Result will be released at 14:00 (UTC) on Sat 16 Apr 2022.",
        },
        {
          id: 10,
          header:
            "Q10. Can I join the pre-sale if I didn’t fill the Bonus Application Form?",
          text: "The pre-sale is open for those who are whitelisted only, those who are not whitelisted will not be able to participant in the pre-sale",
        },
        {
          id: 11,
          header:
            "Q11. When will the whitelist application results be generated?",
          text: "Simeta team will announce the results of the bonus application 6 hours after it’s concluded, which is 14:00 (UTC) on Sat 16 Apr 2022.",
        },
        {
          id: 12,
          header: "Q12. Which cryptocurrencies are accepted during the sale?",
          text: "Since the Simeta utility token $SMT is a BEP-20 token and the token distribution is done instantly by smart contract, we can only accept BNB.",
        },
        {
          id: 13,
          header:
            "Q13. Which exchange will Simeta utility token $SMT be listed on?",
          text: "Simeta utility token $SMT is going to be listed on top tier decentralised exchanges on BSC chain, like Pancakeswap and Biswap after IDO on pinksale in late April to early May and followed by one of the famous centralised exchanges in June to July. ",
        },
        {
          id: 14,
          header: "Q14. What will be the listing price of $SMT",
          text: "The listing price is decided based on market demand and supply of the shares and aims to strike a balance between the two. It  will probably start from around 0.025 USDT when it first launch on Pancakeswap  in late April to early May",
        },
        {
          id: 15,
          header: "Q15. Do we receive the actual tokens during the sale?",
          text: "Investors will not receive the purchased token immediately after the presale, instead, all investors will receive their 20% of purchased tokens (Basic + Bonus if there is) before the token listed on Pancakeswap in late April to early May and the balances are distributed within the coming 10 months linearly as stated in our tokenomics with project progress that is part of our vesting program. ",
        },
        {
          id: 16,
          header: "Q16. Is the vesting program applicable for team tokens?",
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
  // font-family: DM Sans;
  border-radius: 12px;
  margin-bottom: 100px;
  .img_one {
    margin: 10px 0 10px 0;
  }
}
/deep/.ant-collapse > .ant-collapse-item > .ant-collapse-header {
  color: #fff141;
  font-size: 20px;
  background-color: transparent;
}
/deep/ .ant-collapse-content-box {
  width: 60%;
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
