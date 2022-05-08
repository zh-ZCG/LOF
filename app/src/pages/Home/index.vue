<template>
  <div class="homebackground">
    <BannerList />
    <TodayFlower></TodayFlower>
  </div>
</template>

<script>
import BannerList from "./BannerList";
import TodayFlower from "./TodayFlower";
import { mapState } from "vuex";
export default {
  components: {
    BannerList,
    TodayFlower,
  },
  name: "",
  mounted() {
    this.$store.dispatch("getTodayFlower");
  },
  computed: {
    ...mapState({
      TodayFlower: (state) => state.home.TodayFlower,
    }),
  },
  methods: {},
};
</script>

<style>
.homebackground {
  height: 1500px;
  background: url("/images/backgroundimage.jpg") no-repeat;
}
</style>