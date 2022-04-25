<template>
  <header class="header">
    <!--头部第一行 搜索区域-->
    <div class="headerbox">
      <div class="headercenter wrapper">
        <h1 class="loflogo">
          <router-link title="花语" to="/home">
            <img src="./images/betweenlof.png" alt="" />
          </router-link>
        </h1>
        <div class="loftitle">Language Of Flower</div>
        <div class="yonghu">
          <button @click="goLogin" title="用户" class="yonghulogo">
            <img src="./images/yonghu.png" alt="" />
          </button>
        </div>
        <div class="gouwuche">
          <button @click="gogowuche" title="购物车" class="gouwuchelogo">
            <img src="./images/gouwuche.png" alt="" />
          </button>
        </div>
        <div class="searchArea" title="搜索">
          <input type="text" class="search-input" />
          <button @click="goSearch" class="search-button">
            <img src="./images/sosuo.png" alt="" />
          </button>
        </div>
        <ul class="jijiedaohang wrapper">
          <li class="buttonchun">
            <span>春</span>
            <ul>
              <li>水仙花</li>
              <li>君子兰</li>
              <li>牡丹花</li>
              <li>玫瑰花</li>
              <li>百合花</li>
              <li>郁金香</li>
              <li>丁香花</li>
            </ul>
          </li>
          <li class="buttonxia">
            <span>夏</span>
            <ul>
              <li>栀子花</li>
              <li>向日葵</li>
              <li>千日红</li>
              <li>荷花</li>
              <li>茉莉花</li>
            </ul>
          </li>
          <li class="buttonqiu">
            <span>秋</span>
            <ul>
              <li>菊花</li>
              <li>雁来红</li>
              <li>紫茉莉</li>
              <li>芙蓉花</li>
              <li>秋海棠</li>
            </ul>
          </li>
          <li class="buttondong">
            <span>冬</span>
            <ul>
              <li>南天竹</li>
              <li>水仙花</li>
              <li>四季海棠</li>
              <li>春鹃</li>
              <li>春兰</li>
              <li>一品红</li>
              <li>山茶花</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <div class="fengexian" style="border-bottom: 2px solid"></div>
  </header>
</template>

<script>
export default {
  methods: {
    goSearch() {
      this.$router.push("./search");
    },
    goLogin() {
      this.$router.push("./login");
    },
    gogowuche() {
      this.$router.push("./login");
    },
  },
};
</script>

<style lang=less>
.header {
  height: 133px;
  .headerbox {
    width: 1920px;
    height: 135px;
    margin: 0px auto;
    background-color: white;
    position: fixed;
    .headercenter {
      left: 300px;
      position: fixed;
      background-color: white;
      .loflogo {
        margin-left: 30px;
      }
      .loftitle {
        float: left;
        height: 30px;
        margin-top: 85px;
        margin-left: 30px;
        font-size: 30px;
      }
      .searchArea {
        float: right;
        height: 32px;
        background: #46485f;
        padding: 8px;
        margin-top: 75px;
        margin-right: 30px;
        border-radius: 25px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .search-input {
          background: none;
          width: 0px;
          height: 36px;
          border: none;
          float: left;
          background-color: #46485f;
          color: white;
          font-size: 20px;
          border-radius: 15px;
          outline: none;
          transition: 0.5s;
        }
        .search-button {
          width: 32px;
          height: 32px;
          display: flex;
          border: none;
          cursor: pointer;
          background-color: #46485f;
          justify-content: space-between;
          align-items: center;
        }
      }
      .searchArea:hover .search-input {
        width: 250px;
      }
      .gouwuche {
        float: right;
        height: 32px;
        padding: 8px;
        margin-top: 75px;
        margin-right: 30px;
        background: #46485f;
        border-radius: 25px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .gouwuchelogo {
          width: 32px;
          height: 32px;
          background-color: #46485f;
          border: none;
          cursor: pointer;
        }
      }
      .yonghu {
        float: right;
        height: 32px;
        padding: 8px;
        margin-top: 75px;
        margin-right: 30px;
        background: #46485f;
        border-radius: 25px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .yonghulogo {
          width: 32px;
          height: 32px;
          background-color: #46485f;
          border: none;
          cursor: pointer;
        }
      }
      .jijiedaohang {
        float: left;
        font-size: 20px;
        color: white;
        margin-left: 200px;
        display: flex;
        background-color: #6b473c;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        width: 800px;
        position: fixed;
        .buttonchun {
          width: 200px;
          height: 50px;
          border-bottom-left-radius: 10px;
          text-align: center;
          line-height: 50px;
          transition: 0.3s;
          cursor: pointer;
        }
        .buttonxia {
          width: 200px;
          height: 50px;
          text-align: center;
          line-height: 50px;
          transition: 0.3s;
          cursor: pointer;
        }
        .buttonqiu {
          width: 200px;
          height: 50px;
          text-align: center;
          line-height: 50px;
          transition: 0.3s;
          cursor: pointer;
        }
        .buttondong {
          width: 200px;
          height: 50px;
          border-bottom-right-radius: 10px;
          text-align: center;
          line-height: 50px;
          transition: 0.3s;
          cursor: pointer;
        }
        .buttonchun:hover {
          background-color: #225a1f;
        }
        .buttonchun ul li:hover {
          background-color: #b2d235;
        }
        .buttonchun ul li {
          height: 0;
          transition: 0.2s;
          opacity: 0;
          transform: translateY(-50px);
          background-color: #6b473c;
        }
        .buttonchun:hover li {
          height: 50px;
          opacity: 1;
          transform: translateY(0);
          background-color: #225a1f;
        }
        .buttonxia:hover {
          background-color: #d93a49;
        }
        .buttonxia ul li:hover {
          background-color: #f58f98;
        }
        .buttonxia ul li {
          height: 0;
          transition: 0.2s;
          opacity: 0;
          transform: translateY(-50px);
          background-color: #6b473c;
        }
        .buttonxia:hover li {
          height: 50px;
          opacity: 1;
          transform: translateY(0);
          background-color: #d93a49;
        }
        .buttonqiu:hover {
          background-color: orange;
          color: black;
        }
        .buttonqiu ul li:hover {
          background-color: white;
        }
        .buttonqiu ul li {
          height: 0;
          transition: 0.2s;
          opacity: 0;
          transform: translateY(-50px);
          background-color: #6b473c;
        }
        .buttonqiu:hover li {
          height: 50px;
          opacity: 1;
          transform: translateY(0);
          background-color: orange;
        }
        .buttondong:hover {
          background-color: white;
          color: black;
        }
        .buttondong ul li:hover {
          background-color: black;
          color: white;
        }
        .buttondong ul li {
          height: 0;
          transition: 0.2s;
          opacity: 0;
          transform: translateY(-50px);
          background-color: #6b473c;
        }
        .buttondong:hover li {
          height: 50px;
          opacity: 1;
          transform: translateY(0);
          background-color: white;
        }
      }
    }
  }
  .fengexian {
    float: left;
    width: 1920px;
    margin-top: 135px;
    position: fixed;
  }
}
</style>