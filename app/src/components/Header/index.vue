<template>
  <div>
    <header class="header">
      <!--头部第一行 搜索区域-->
      <div class="fengexian" style="border-bottom: 2px solid"></div>
      <div class="kuodaheader"></div>
      <div class="headerbox">
        <div class="headercenter wrapper">
          <h1 class="loflogo">
            <router-link title="花语" to="/home">
              <img src="./images/betweenlof.png" alt="" />
            </router-link>
          </h1>
          <div class="loftitle">Language Of Flower</div>
          <div class="yonghu" v-if="!userphone">
            <button @click="goLogin" title="用户" class="yonghulogo">
              <img src="./images/yonghu.png" alt="" />
            </button>
          </div>
          <div class="yonghu" v-else>
            <div class="tuichu" @click="logout">退出</div>
            <button @click="yonghuzhongxin" title="用户" class="yonghulogo">
              <img src="./images/yonghu.png" alt="" />
            </button>
          </div>
          <div class="gouwuche">
            <button @click="gogowuche" title="购物车" class="gouwuchelogo">
              <img src="./images/gouwuche.png" alt="" />
            </button>
          </div>
          <div class="searchArea" title="搜索">
            <input
              @click="xuanzhong"
              v-model="keyword"
              type="text"
              id="xzipt"
              class="search-input"
            />
            <button @click="goSearch" class="search-button">
              <img src="./images/sosuo.png" alt="" />
            </button>
          </div>
          <ul class="jijiedaohang wrapper" @click="gosearch">
            <li class="buttonchun" v-if="categoryList[0]">
              <span
                :data-categoryName="categoryList[0].categoryName"
                :data-categoryID="categoryList[0].categoryID"
                >{{ categoryList[0].categoryName }}</span
              >
              <ul>
                <li
                  v-for="(c1, index) in categoryList[0].categoryChild"
                  :key="c1.categoryChildID"
                  :data-categoryChildName="
                    categoryList[0].categoryChild[index].categoryChildName
                  "
                  :data-categoryChildID="
                    categoryList[0].categoryChild[index].categoryChildID
                  "
                >
                  {{ categoryList[0].categoryChild[index].categoryChildName }}
                </li>
              </ul>
            </li>
            <li class="buttonxia" v-if="categoryList[1]">
              <span
                :data-categoryName="categoryList[1].categoryName"
                :data-categoryID="categoryList[1].categoryID"
                >{{ categoryList[1].categoryName }}</span
              >
              <ul>
                <li
                  v-for="(c1, index) in categoryList[1].categoryChild"
                  :key="c1.categoryChildID"
                  :data-categoryChildName="
                    categoryList[1].categoryChild[index].categoryChildName
                  "
                  :data-categoryChildID="
                    categoryList[1].categoryChild[index].categoryChildID
                  "
                >
                  {{ categoryList[1].categoryChild[index].categoryChildName }}
                </li>
              </ul>
            </li>
            <li class="buttonqiu" v-if="categoryList[2]">
              <span
                :data-categoryName="categoryList[2].categoryName"
                :data-categoryID="categoryList[2].categoryID"
                >{{ categoryList[2].categoryName }}</span
              >
              <ul>
                <li
                  v-for="(c1, index) in categoryList[2].categoryChild"
                  :key="c1.categoryChildID"
                  :data-categoryChildName="
                    categoryList[2].categoryChild[index].categoryChildName
                  "
                  :data-categoryChildID="
                    categoryList[2].categoryChild[index].categoryChildID
                  "
                >
                  {{ categoryList[2].categoryChild[index].categoryChildName }}
                </li>
              </ul>
            </li>
            <li class="buttondong" v-if="categoryList[3]">
              <span
                :data-categoryName="categoryList[3].categoryName"
                :data-categoryID="categoryList[3].categoryID"
                >{{ categoryList[3].categoryName }}</span
              >
              <ul>
                <li
                  v-for="(c1, index) in categoryList[3].categoryChild"
                  :key="c1.categoryChildID"
                  :data-categoryChildName="
                    categoryList[3].categoryChild[index].categoryChildName
                  "
                  :data-categoryChildID="
                    categoryList[3].categoryChild[index].categoryChildID
                  "
                >
                  {{ categoryList[3].categoryChild[index].categoryChildName }}
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import { mapState } from "vuex";
import throttle from "lodash/throttle";
export default {
  data() {
    return {
      keyword: "",
    };
  },
  methods: {
    goSearch() {
      if (this.$route.query) {
        let loction = {
          name: "search",
          params: { keyword: this.keyword || undefined },
        };
        loction.query = this.$route.query;
        this.$router.push(loction);
      }
    },
    async logout(){
        try {
            await this.$store.dispatch('userLogout');
            this.$router.push('/home');
        } catch (error) {
            
        }
        
    },
    gosearch(event) {
      let element = event.target;
      let { categoryname, categoryid, categorychildname, categorychildid } =
        element.dataset;
      let location = { name: "search" };
      if (categoryname) {
        let query = { categoryName: categoryname };
        query.categoryID = categoryid;
        if (this.$route.params) {
          location.params = {};
          //动态给location配置对象添加query属性
          location.query = query;
          //路由跳转
          this.$router.push(location);
        }
      } else if (categorychildname) {
        let query = { categoryChildName: categorychildname };
        query.categoryChildID = categorychildid;
        if (this.$route.params) {
          location.params = {};
          //动态给location配置对象添加query属性
          location.query = query;
          //路由跳转
          this.$router.push(location);
        }
      }
    },
    goLogin() {
      this.$router.push("./login");
    },
    yonghuzhongxin(){
        this.$router.push("./center/myorder");
    },
    gogowuche() {
      this.$router.push("/shopcart");
    },
    xuanzhong() {
      document.getElementById("xzipt").style.width = "250px";
    },
    changeIndex: throttle(function (index) {
      this.currentIndex = index;
    }, 50),
  },
  mounted() {
    this.$store.dispatch("categoryList");
    this.$bus.$on("clear", () => {
      this.keyword = "";
    });
  },
  computed: {
    ...mapState({
      categoryList: (state) => state.home.categoryList,
    }),
    userphone() {
      return this.$store.state.user.phone;
    },
  },
};
</script>

<style lang=less>
.header {
  width: 1920px;
  height: 133px;
  position: fixed;
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
        .tuichu {
          background: none;
          width: 32px;
          height: 18px;
          border: none;
          float: right;
          background-color: #46485f;
          color: white;
          font-size: 10px;
          cursor: pointer;
          border-radius: 15px;
          outline: none;
          transition: 0.5s;
        }
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
        margin-left: 265px;
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