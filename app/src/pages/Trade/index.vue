<template>
  <div class="trade-container">
    <h3 class="title">填写并核对订单信息</h3>
    <div class="content" v-if="addressInfo[0]">
      <h5 class="receive">收件人信息</h5>
      <div
        class="address clearFix"
        v-for="(address, index) in addressInfo[0].address"
        :key="index"
      >
        <span class="username" :class="{ selected: address.isCheck == 1 }">{{
          address.userName
        }}</span>
        <p @click="changeDefault(address, addressInfo[0].address)">
          <span class="s1">{{ address.addressName }}</span>
          <span class="s2">{{ address.phone }}</span>
          <span class="s3" v-show="address.isCheck == 1">默认地址</span>
        </p>
      </div>
      <div class="line"></div>
      <h5 class="pay">支付方式</h5>
      <div class="address clearFix">
        <span class="username selected">在线支付</span>
      </div>
      <div class="line"></div>
      <h5 class="pay">送货清单</h5>
      <div class="way">
        <h5>配送方式</h5>
        <div class="info clearFix">
          <span class="s1">小赵不送货</span>
          <p>配送时间：预计{{ getDate() }}送达</p>
        </div>
      </div>
      <div class="detail">
        <h5>商品清单</h5>
        <ul
          class="list clearFix"
          v-for="(order, index) in orderInfo"
          :key="index"
          v-if="order.isChecked === 1"
        >
          <li>
            <img
              :src="order.skuDefaultImg"
              alt=""
              style="width: 100px; height: 100px"
            />
          </li>
          <li>
            <p>
              {{ order.skuName }}
            </p>
            <h4>{{ order.skuDesc }}</h4>
          </li>
          <li>
            <h3>￥{{ order.skuNum * order.price }}.00</h3>
          </li>
          <li>X{{ order.skuNum }}</li>
          <li>有货</li>
        </ul>
      </div>
      <div class="bbs">
        <h5>备注：</h5>
        <textarea
          placeholder="给卖家留言"
          class="remarks-cont"
          v-model="msg"
        ></textarea>
      </div>
      <div class="line"></div>
    </div>
    <div class="money clearFix">
      <ul>
        <li>
          <b v-if="addressInfo[0]"
            ><i>{{ getjianshu }}</i
            >件商品，总商品金额</b
          >
          <span>￥{{ getsum }}</span>
        </li>
      </ul>
    </div>
    <div class="trade">
      <div class="price">
        应付金额:　<span>¥{{ getsum }}.00</span>
      </div>
      <div class="receiveInfo" v-if="addressInfo[0]">
        寄送至:
        <span>{{ userDefaultAddress.addressName }}</span>
        收货人：<span>{{ userDefaultAddress.userName }}</span>
        <span> {{ userDefaultAddress.phone }}</span>
      </div>
    </div>
    <div class="sub clearFix">
      <a class="subBtn" @click="submitOrder">提交订单</a>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
var date = require("silly-datetime");
export default {
  name: "Trade",
  data() {
    return {
      cartList: [],
      msg: "",
      orderId: "",
    };
  },
  mounted() {
    this.$store.dispatch("getUserAddress", this.$store.state.user.phone);
    this.$store.dispatch("getOrderInfo", this.$store.state.shopcart.cartList);
  },
  methods: {
    getDate() {
      var today = date.format(new Date(), "YYYY-MM-DD");
      return today;
    },
    changeDefault(address, addressInfo) {
      addressInfo.forEach((item) => (item.isCheck = 0));
      address.isCheck = 1;
    },
    //提交订单
    async submitOrder() {
      let data = {
        userName: this.userDefaultAddress.userName, //最终收件人的名字
        phone: this.userDefaultAddress.phone, //最终收件人的手机号
        addressName: this.userDefaultAddress.addressName, //收件人的地址
        ordermessage: this.msg, //买家的留言信息
        orderDetailList: this.orderInfo, //商品清单
        paymoney: this.getsum,
      };
      //需要带参数的：tradeNo
      let result = await this.$API.reqSubmitOrder(
        this.$store.state.user.phone,
        data
      );
      //提交订单成功
      if (result.code == 200) {
        this.orderId = result.data;
        //路由跳转 + 路由传递参数
        this.$router.push("/pay?orderId=" + this.orderId);
        //提交的订单失败
      } else {
        alert(result.data);
      }
    },
  },
  computed: {
    ...mapState({
      addressInfo: (state) => state.trade.address,
      orderInfo: (state) => state.trade.orderInfo,
    }),
    userDefaultAddress() {
      return (
        this.addressInfo[0].address.find((item) => item.isCheck == 1) || {}
      );
    },
    getsum() {
      let sum = 0;
      this.orderInfo.map((item) => {
        if (item.isChecked === 1) sum += item.skuNum * item.price;
      });
      return sum;
    },
    getjianshu() {
      let sum = 0;
      this.orderInfo.map((item) => {
        if (item.isChecked === 1) sum++;
      });
      return sum;
    },
  },
};
</script>

<style lang="less" scoped>
.trade-container {
  .title {
    width: 1200px;
    margin: 0 auto;
    font-size: 14px;
    line-height: 21px;
  }

  .content {
    width: 1200px;
    margin: 10px auto 0;
    border: 1px solid rgb(221, 221, 221);
    padding: 25px;
    box-sizing: border-box;

    .receive,
    .pay {
      line-height: 36px;
      margin: 18px 0;
    }

    .address {
      padding-left: 20px;
      margin-bottom: 15px;

      .username {
        float: left;
        width: 100px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        border: 1px solid #ddd;
        position: relative;
      }

      .username::after {
        content: "";
        display: none;
        width: 13px;
        height: 13px;
        position: absolute;
        right: 0;
        bottom: 0;
        background: url(./images/choosed.png) no-repeat;
      }

      .username.selected {
        border-color: #e1251b;
      }

      .username.selected::after {
        display: block;
      }

      p {
        width: 610px;
        float: left;
        line-height: 30px;
        margin-left: 10px;
        padding-left: 5px;
        cursor: pointer;

        .s1 {
          float: left;
        }

        .s2 {
          float: left;
          margin: 0 5px;
        }

        .s3 {
          float: left;
          width: 56px;
          height: 24px;
          line-height: 24px;
          margin-left: 10px;
          background-color: #878787;
          color: #fff;
          margin-top: 3px;
          text-align: center;
        }
      }

      p:hover {
        background-color: #ddd;
      }
    }

    .line {
      height: 1px;
      background-color: #ddd;
    }

    .way {
      width: 1080px;
      height: 110px;
      background: #f4f4f4;
      padding: 15px;
      margin: 0 auto;

      h5 {
        line-height: 50px;
      }

      .info {
        margin-top: 20px;

        .s1 {
          float: left;
          border: 1px solid #ddd;
          width: 120px;
          height: 30px;
          line-height: 30px;
          text-align: center;
          margin-right: 10px;
        }

        p {
          line-height: 30px;
        }
      }
    }

    .detail {
      width: 1080px;

      background: #feedef;
      padding: 15px;
      margin: 2px auto 0;

      h5 {
        line-height: 50px;
      }

      .list {
        display: flex;
        justify-content: space-between;

        li {
          line-height: 30px;

          p {
            margin-bottom: 20px;
          }

          h4 {
            color: #c81623;
            font-weight: 400;
          }

          h3 {
            color: #e12228;
          }
        }
      }
    }

    .bbs {
      margin-bottom: 15px;

      h5 {
        line-height: 50px;
      }

      textarea {
        width: 100%;
        border-color: #e4e2e2;
        line-height: 1.8;
        outline: none;
        resize: none;
      }
    }

    .bill {
      h5 {
        line-height: 50px;
      }

      div {
        padding-left: 15px;
      }
    }
  }

  .money {
    width: 1200px;
    margin: 20px auto;

    ul {
      width: 220px;
      float: right;

      li {
        line-height: 30px;
        display: flex;
        justify-content: space-between;

        i {
          color: red;
        }
      }
    }
  }

  .trade {
    box-sizing: border-box;
    width: 1200px;
    padding: 10px;
    margin: 10px auto;
    text-align: right;
    background-color: #f4f4f4;
    border: 1px solid #ddd;

    div {
      line-height: 30px;
    }

    .price span {
      color: #e12228;
      font-weight: 700;
      font-size: 14px;
    }

    .receiveInfo {
      color: #999;
    }
  }

  .sub {
    width: 1200px;
    margin: 0 auto 10px;

    .subBtn {
      float: right;
      width: 164px;
      height: 56px;
      font: 700 18px "微软雅黑";
      line-height: 56px;
      text-align: center;
      color: #fff;
      background-color: #e1251b;
    }
  }
}
</style>