<template>
  <div class="pay-main">
    <div class="pay-container">
      <div class="checkout-tit">
        <h4 class="tit-txt">
          <span class="success-icon"></span>
          <span class="success-info"
            >订单提交成功，请您及时付款，以便尽快为您发货~~</span
          >
        </h4>
        <div class="paymark">
          <span class="fl"
            >请您在提交订单<em class="orange time">4小时</em
            >之内完成支付，超时订单会自动取消。订单号：<em>{{
              orderId
            }}</em></span
          >
          <span class="fr"
            ><em class="lead">应付金额：</em
            ><em class="orange money" v-if="payInfo[0]"
              >￥{{ payInfo[0].paymoney }}</em
            ></span
          >
        </div>
      </div>
      <div class="checkout-info">
        <h4>重要说明：</h4>
        <ol>
          <li>花语线上售花平台支持<span class="zfb">支付宝</span>支付方式。</li>
          <li>为了保证您的购物支付流程顺利完成，请尽快完成支付。</li>
        </ol>
      </div>
      <div class="checkout-steps">
        <div class="step-tit">
          <h5>支付平台</h5>
        </div>
        <div class="step-cont">
          <ul class="payType">
            <li><img src="./images/pay2.jpg" /></li>
          </ul>
        </div>
        <div class="hr"></div>
        <div class="hr"></div>

        <div class="submit" v-if="payInfo[0]">
          <a class="btn" @click="quzhifu">立即支付</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pay",
  data() {
    return {
      payInfo: {},
    };
  },
  computed: {
    orderId() {
      return this.$route.query.orderId;
    },
  },
  mounted() {
    this.getPayInfo();
  },
  methods: {
    //获取支付信息
    async getPayInfo() {
      let result = await this.$API.reqPayInfo(this.orderId);
      //如果成功：组件当中存储支付信息
      if (result.code == 200) {
        this.payInfo = result.data;
      }
    },
    async quzhifu() {
      var xiaoshu = "0.00";
      if (this.payInfo[0].paymoney) {
        var f = Math.round(parseFloat(this.payInfo[0].paymoney) * 100) / 100;
        if (!isNaN(f)) {
          xiaoshu = f.toString();
          var rs = xiaoshu.indexOf(".");
          if (rs < 0) {
            rs = xiaoshu.length;
            xiaoshu += ".";
          }
          while (xiaoshu.length <= rs + 2) {
            xiaoshu += "0";
          }
        }
      }
      let dataOrder = {
        orderId: this.payInfo[0].order_number,
        price: xiaoshu,
      };
      let result = await this.$API.reqzhifu(dataOrder);
      if (result.data.code == 200) {
        window.location.href = result.data.paymentUrl;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.pay-main {
  margin-bottom: 20px;

  .pay-container {
    margin: 0 auto;
    width: 1200px;

    a:hover {
      color: #4cb9fc;
    }

    .orange {
      color: #e1251b;
    }

    .money {
      font-size: 18px;
    }

    .zfb {
      color: #e1251b;
      font-weight: 700;
    }

    .checkout-tit {
      padding: 10px;

      .tit-txt {
        font-size: 14px;
        line-height: 21px;

        .success-icon {
          width: 30px;
          height: 30px;
          display: inline-block;
          background: url(./images/icon.png) no-repeat 0 0;
        }

        .success-info {
          padding: 0 8px;
          line-height: 30px;
          vertical-align: top;
        }
      }

      .paymark {
        overflow: hidden;
        line-height: 26px;
        text-indent: 38px;

        .fl {
          float: left;
        }

        .fr {
          float: right;

          .lead {
            margin-bottom: 18px;
            font-size: 15px;
            font-weight: 400;
            line-height: 22.5px;
          }
        }
      }
    }

    .checkout-info {
      padding-left: 25px;
      padding-bottom: 15px;
      margin-bottom: 10px;
      border: 2px solid #e1251b;

      h4 {
        margin: 9px 0;
        font-size: 14px;
        line-height: 21px;
        color: #e1251b;
      }

      ol {
        padding-left: 25px;
        list-style-type: decimal;
        line-height: 24px;
        font-size: 14px;
      }

      ul {
        padding-left: 25px;
        list-style-type: disc;
        line-height: 24px;
        font-size: 14px;
      }
    }

    .checkout-steps {
      border: 1px solid #ddd;
      padding: 25px;

      .hr {
        height: 1px;
        background-color: #ddd;
      }

      .step-tit {
        line-height: 36px;
        margin: 15px 0;
      }

      .step-cont {
        margin: 0 10px 12px 20px;

        ul {
          font-size: 0;

          li {
            margin: 2px;
            display: inline-block;
            padding: 5px 20px;
            border: 1px solid #ddd;
            cursor: pointer;
            line-height: 18px;
          }
        }
      }
    }

    .submit {
      text-align: center;

      .btn {
        display: inline-block;
        padding: 15px 45px;
        margin: 15px 0 10px;
        font: 18px "微软雅黑";
        font-weight: 700;
        border-radius: 0;
        background-color: #e1251b;
        border: 1px solid #e1251b;
        color: #fff;
        text-align: center;
        vertical-align: middle;
        cursor: pointer;
        user-select: none;
        text-decoration: none;
      }
    }
  }
}
</style>