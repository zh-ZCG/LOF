<template>
  <div class="order-right">
    <div class="order-content">
      <div class="title">
        <h3>我的订单</h3>
      </div>
      <div class="chosetype">
        <table>
          <thead>
            <tr>
              <th width="29%">商品</th>
              <th width="31%">订单详情</th>
              <th width="13%">收货人</th>
              <th>金额</th>
              <th>地址</th>
              <th style="width:60px"></th>
            </tr>
          </thead>
        </table>
      </div>
      <div class="orders">
        <!-- 每一笔订单 -->
        <table
          class="order-item"
          v-for="(order, index) in myOrder"
          :key="index"
        >
          <thead>
            <tr>
              <th colspan="5">
                <span class="ordertitle"
                  >订单编号：{{ order.order_number }}
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(cart, index) in order.orderDetailList" :key="index">
              <td width="60%">
                <div class="typographic">
                  <img :src="cart.skuDefaultImg" style="width:100px;height:100px" />

                  <span>{{cart.skuName}}<br><br>{{cart.skuDesc}}x{{ cart.skuNum }}</span>
                </div>
              </td>
              <td
                :rowspan="order.orderDetailList.length"
                v-if="index == 0"
                width="8%"
                class="center"
              >
                {{ order.userName }}
              </td>
              <td
                :rowspan="order.orderDetailList.length"
                v-if="index == 0"
                width="13%"
                class="center"
              >
                <ul class="unstyled">
                  <li>总金额¥{{ order.paymoney }}.00</li>
                  <li>在线支付</li>
                </ul>
              </td>
              <td
                :rowspan="order.orderDetailList.length"
                v-if="index == 0"
                width="8%"
                class="center"
              >
                <div class="btn">{{ order.addressName }}</div>
              </td>
              <td
                :rowspan="order.orderDetailList.length"
                v-if="index == 0"
                width="13%"
                class="center"
              >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      //存储我的订单的数据
      myOrder: {},
    };
  },
  mounted() {
    //获取我的订单的数据方法
    this.getData();
  },
  methods: {
    //获取我的订单的方法
    async getData() {
      //解构出参数
      let phone=this.$store.state.user.phone;
      let result = await this.$API.reqMyOrderList(phone);
      if (result.code == 200) {
        this.myOrder = result.data;
      }
    }
  },
};
</script>

<style scoped></style>
