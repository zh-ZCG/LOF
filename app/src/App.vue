<template>
  <div>
    <Header></Header>
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

<style>
</style>