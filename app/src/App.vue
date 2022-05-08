<template>
  <div>
    <Header class="headerposition"></Header>
    <div class="changediv"></div>
    <router-view></router-view>
    <Rooter></Rooter>
  </div>
</template>

<script>
import Header from "./components/Header";
import Rooter from "./components/Footer";
export default {
  components: {
    Header,
    Rooter,
  },
};
</script>

<style lang=less>
.headerposition {
  width: 1900px;
  height: 133px;
  position: fixed;
  z-index: 999;
}
.changediv {
  width: 1900px;
  height: 150px;
}
</style>