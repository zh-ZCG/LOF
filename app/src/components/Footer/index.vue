<template>
  <footer class="footer">
    <div class="footercenter wrapper">
      <div class="yonghu">
        <button @click="goLogin" title="用户" class="yonghulogo">
          <img src="./images/yonghu.png" alt="" />
        </button>
      </div>
      <router-link title="github" to="/">
        <img src="./images/betweenlof.png" alt="" />
      </router-link>
      <ul class="footer-menu">
        <li>
          <a>CONTACT</a>
        </li>
        <li>
          <a>SHOP</a>
        </li>
        <li>
          <a>Pricing</a>
        </li>
        <li>
          <a>PRIVACY POLICY</a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  methods: {
    goLogin() {
      this.$router.push("./login");
    },
    goGithub() {
      this.$router.push(".");
    },
  },
};
</script>

<style>
.footer {
  height: 250px;
  background: #1a1d2d;
  padding: 20px 0;
}

.footercenter {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.footer .footer-menu {
  margin-top: 30px;
}

.footer .footer-menu li {
  display: inline-block;
  margin: 0 10px;
}

.footer .footer-menu li a {
  color: #fff;
  font-size: 12px;
}

.footer {
  margin-top: 20px;
}

.footer-container li {
  display: inline-block;
  margin: 0 5px;
}

.footer-container li a {
  padding: 8px 10px;
}

.footer-container li a i {
  font-size: 20px;
  color: #555;
}
</style>