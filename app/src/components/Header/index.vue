<template>
  <header class="header">
    <!--头部第一行 搜索区域-->
    <div class="fengexian" style="border-bottom: 2px solid"></div>
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
            <span>{{ categoryList[0].categoryName }}</span>
            <ul>
              <li
                v-for="(c1, index) in categoryList[0].categoryChild"
                :key="c1.categoryChildID"
              >
                {{ categoryList[0].categoryChild[index].categoryChildName }}
              </li>
            </ul>
          </li>
          <li class="buttonxia">
            <span>{{ categoryList[1].categoryName }}</span>
            <ul>
              <li
                v-for="(c1, index) in categoryList[1].categoryChild"
                :key="c1.categoryChildID"
              >
                {{ categoryList[1].categoryChild[index].categoryChildName }}
              </li>
            </ul>
          </li>
          <li class="buttonqiu">
            <span>{{ categoryList[2].categoryName }}</span>
            <ul>
              <li
                v-for="(c1, index) in categoryList[2].categoryChild"
                :key="c1.categoryChildID"
              >
                {{ categoryList[2].categoryChild[index].categoryChildName }}
              </li>
            </ul>
          </li>
          <li class="buttondong">
            <span>{{ categoryList[3].categoryName }}</span>
            <ul>
              <li
                v-for="(c1, index) in categoryList[3].categoryChild"
                :key="c1.categoryChildID"
              >
                {{ categoryList[3].categoryChild[index].categoryChildName }}
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
import { mapState } from "vuex";
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
  mounted() {
    this.$store.dispatch("categoryList");
  },
  computed: {
    ...mapState({
      categoryList: (state) => state.home.categoryList,
    }),
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
        position: absolute;
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