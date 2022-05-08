<template>
  <div class="clearfix selector">
    <div class="type-wrap logo">
      <div class="key">产地</div>
      <div class="value logos">
        <ul class="logo-list">
          <li
            v-for="(address, index) in address"
            :key="address.tmId"
            @click="clickaddress(address)"
          >
            {{ address.tmName }}
          </li>
        </ul>
      </div>
    </div>
    <div class="type-wrap">
      <div class="fl key">价格</div>
      <div class="fl value">
        <ul class="type-list">
          <li
            v-for="(price, index) in price"
            :key="price.prId"
            @click="clickprice(price)"
          >
            <a>{{ price.prValue }}</a>
          </li>
        </ul>
      </div>
      <div class="fl ext"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "SearchSelector",
  computed: {
    ...mapGetters(["address", "attrsList", "price"]),
  },
  methods: {
    clickaddress(address) {
      this.$emit("addressInfo", address);
    },
    clickprice(price) {
      this.$emit("priceInfo", price);
    },
  },
};
</script>

<style lang="less" scoped>
.selector {
  border: 1px solid #ddd;
  margin-bottom: 5px;
  overflow: hidden;

  .logo {
    border-top: 0;
    margin: 0;
    position: relative;
    overflow: hidden;

    .key {
      padding-bottom: 45px !important;
    }
  }

  .type-wrap {
    margin: 0;
    position: relative;
    border-top: 1px solid #ddd;
    overflow: hidden;

    .key {
      width: 100px;
      background: #f1f1f1;
      line-height: 26px;
      text-align: center;
      padding: 10px 10px 0 15px;
      float: left;
    }

    .value {
      overflow: hidden;
      padding: 10px 0 0 15px;
      color: #333;
      margin-left: 120px;
      padding-right: 90px;

      .logo-list {
        li {
          float: left;
          border: 1px solid #e4e4e4;
          margin: -1px -1px 0 0;
          width: 105px;
          height: 52px;
          text-align: center;
          line-height: 52px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-weight: 700;
          color: #e1251b;
          font-style: italic;
          font-size: 14px;

          img {
            max-width: 100%;
            vertical-align: middle;
          }
        }
      }

      .type-list {
        li {
          float: left;
          display: block;
          margin-right: 30px;
          line-height: 26px;

          a {
            text-decoration: none;
            color: #666;
          }
        }
      }
    }
  }
}
</style>