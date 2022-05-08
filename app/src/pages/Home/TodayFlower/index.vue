<template>
  <div class="TodayFlower-container">
    <div class="center">
      <div class="today-font">今日推荐：</div>
      <div class="flower1" v-if="TodayFlower[0]" @click="tosearch(1)">
        <img :src="TodayFlower[0].imgUrl" height="700px" width="465px" />
      </div>
      <div class="flower2" v-if="TodayFlower[1]" @click="tosearch(2)">
        <img :src="TodayFlower[1].imgUrl" height="200px" width="400px" />
      </div>
      <div class="flower3" v-if="TodayFlower[2]" @click="tosearch(3)">
        <img :src="TodayFlower[2].imgUrl" height="200px" width="400px" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "",
  mounted() {
    this.$store.dispatch("getTodayFlower");
  },
  computed: {
    ...mapState({
      TodayFlower: (state) => state.home.TodayFlower,
    }),
  },
  methods: {
    tosearch(id) {
      if (id == 1) {
        let location = { name: "search" };
        let query = { categoryChildName: "君子兰" };
        query.categoryChildID = "2";
        location.query = query;
        this.$router.push(location);
      } else if (id == 2) {
        let location = { name: "search" };
        let query = { categoryChildName: "四季海棠" };
        query.categoryChildID = "3";
        location.query = query;
        this.$router.push(location);
      } else if (id == 3) {
        let location = { name: "search" };
        let query = { categoryChildName: "茉莉花" };
        query.categoryChildID = "5";
        location.query = query;
        this.$router.push(location);
      }
    },
  },
};
</script>

<style lang=less>
.TodayFlower-container {
  width: 1920px;
  height: 700px;
  .center {
    width: 885px;
    height: 600px;
    margin: 0 auto;
    .today-font {
      font-family: STXINGKA;
      font-size: 40px;
      color: rgb(212, 101, 101);
    }
    .flower1 {
      float: left;
      cursor: pointer;
    }
    .flower2 {
      float: left;
      margin-left: 20px;
      margin-top: 100px;
      cursor: pointer;
    }
    .flower3 {
      float: left;
      margin-top: 100px;
      margin-left: 20px;
      cursor: pointer;
    }
  }
  img {
    transition: all 0.5s;
  }
  img:hover {
    transform: scale(1.1);
  }
}
</style>