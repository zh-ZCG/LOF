<template>
  <div class="list-container">
    <div class="sortList">
      <div class="center">
        <!--banner轮播-->
        <div class="swiper-container" ref="mySwiper">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide"
              v-for="(carousel, index) in bannerList"
              :key="carousel.id"
              @click="tosearch(carousel.id)"
            >
              <img :src="carousel.imgUrl" height="600px" width="900px" />
            </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>

          <!-- 如果需要导航按钮 -->
          <div class="swiper-button-prev" @click="prev"></div>
          <div class="swiper-button-next" @click="next"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Swiper from "swiper";
export default {
  name: "",
  mounted() {
    this.$store.dispatch("getBannerList");
  },
  computed: {
    ...mapState({
      bannerList: (state) => state.home.bannerList,
    }),
  },
  watch: {
    bannerList: {
      handler() {
        this.$nextTick(() => {
          var mySwiper = new Swiper(
            document.querySelector(".swiper-container"),
            {
              autoplay: true,
              loop: true,
              pagination: {
                el: ".swiper-pagination",
                clickable: true,
              },
              navigation: {
                nextE1: ".swiper-button-next",
                prevE1: ".swiper-button-prev",
              },
            }
          );
          mySwiper.el.onmouseover = function () {
            mySwiper.autoplay.stop();
          };
          mySwiper.el.onmouseout = function () {
            mySwiper.autoplay.start();
          };
        });
      },
    },
  },
  methods: {
    prev() {
      this.$refs.mySwiper.swiper.slidePrev();
    },
    next() {
      this.$refs.mySwiper.swiper.slideNext();
    },
    tosearch(id) {
      if (id == 1) {
        let location = { name: "search" };
        let query = { categoryChildName: "玫瑰花" };
        query.categoryChildID = "4";
        location.query = query;
        this.$router.push(location);
      } else if (id == 2) {
        let location = { name: "search" };
        let query = { categoryChildName: "向日葵" };
        query.categoryChildID = "2";
        location.query = query;
        this.$router.push(location);
      } else if (id == 3) {
        let location = { name: "search" };
        let query = { categoryChildName: "百合花" };
        query.categoryChildID = "5";
        location.query = query;
        this.$router.push(location);
      }
    },
  },
};
</script>

<style lang="less" scoped>
.list-container {
  width: 1920px;
  height: 620px;
  .sortList {
    height: 600px;
    margin: 0, auto;

    .center {
      width: 890px;
      padding: 5px;
      margin-left: 520px;
    }
  }
}
.swiper-button-next,
.swiper-button-prev {
  opacity: 0;
}
.swiper-button-next:hover,
.swiper-button-prev:hover {
  opacity: 1;
}

.swiper-slide:hover {
  cursor: pointer;
}
img {
  transition: all 0.5s;
}
img:hover {
  transform: scale(1.1);
}
</style>