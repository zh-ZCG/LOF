<template>
  <div class="order-right">
    <div class="order-content">
      <div class="title">
        <h3>我的地址</h3>
      </div>
      <div class="chosetype">
        <table>
          <thead>
            <tr>
              <th width="13%">收货人</th>
              <th>地址</th>
              <th style="width: 400px"></th>
              <th>电话</th>
            </tr>
          </thead>
        </table>
      </div>
      <div class="orders">
        <table
          class="order-item"
          v-for="(order, index) in mydizhi"
          :key="index"
        >
          <tbody>
            <tr v-for="(cart, index) in order.address" :key="index">
              <td width="2%">
                <input
                  type="text"
                  style="height: 30px; width: 100px"
                  v-model="cart.userName"
                /><input
                  type="text"
                  style="height: 30px; width: 600px"
                  v-model="cart.addressName"
                /><input
                  type="text"
                  style="height: 30px; width: 200px"
                  v-model="cart.phone"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <button class="tijiaodizhi" @click="setDizhi">提交地址</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      //存储我的订单的数据
      mydizhi: {},
    };
  },
  mounted() {
    //获取我的订单的数据方法
    this.getDizhi();
    this.setDizhi();
  },
  methods: {
    //获取我的订单的方法
    async getDizhi() {
      //解构出参数
      let phone = this.$store.state.user.phone;
      let result = await this.$API.reqMyDiZhiList(phone);
      if (result.code == 200) {
        this.mydizhi = result.data;
      }
    },
    async setDizhi() {
      if (this.mydizhi[0]) {
        //解构出参数
        let phone = this.$store.state.user.phone;
        let data = this.mydizhi[0].address;
        let result = await this.$API.reqsetMyDiZhi(phone, data);
        if (result.code == 200) {
          return result;
        }
      }
    },
  },
};
</script>

<style scoped></style>
