<template>
  <footer class="footer">
    <div class="footercenter">
      <div class="footeryonghu">
        <button @click="goLogin" title="用户" class="footeryonghulogo">
          <img src="./images/yonghu.png" alt="" />
        </button>
      </div>
      <div class="github">
        <a
          class="githublogo"
          title="github"
          href="https://github.com/zh-ZCG/LOF"
        >
          <img src="./images/github.png" alt="" />
        </a>
      </div>
      <div class="footerfengexian wrapper" style="border-bottom: 2px solid">
        <div class="footer-menu wrapper">
          <div class="footerbigtext1">
            <h3>关于我们</h3>
            <ul>
              <li>
                <a href="https://baidu.com/">微信</a>
              </li>
              <li>
                <a href="https://themefisher.com/hugo-themes/">企业公众号</a>
              </li>
              <li>
                <a href="https://themefisher.com/premium-templates/">地址</a>
              </li>
            </ul>
          </div>
          <div class="footerbigtext2">
            <h3>联系我们</h3>
            <ul>
              <li>
                <a href="https://docs.themefisher.com">电话</a>
              </li>
              <li>
                <a href="https://baidu.com">加入我们</a>
              </li>
              <li>
                <a href="https://github.com/zh-ZCG/LOF">GitHub地址</a>
              </li>
            </ul>
          </div>
          <div class="footerbigtext3">
            <h3>售后服务</h3>
            <ul>
              <li>
                <a href="https://themefisher.com/privacy-policy/">注意事项</a>
              </li>
              <li>
                <a href="https://themefisher.com/privacy-policy/">作者微信</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  methods: {
    goLogin() {
      this.$router.push("./login");
    },
  },
};
</script>

<style lang=less>
.footer {
  height: 300px;
  background: #1a1d2d;
  padding: 20px 0;
  margin-top: 20px;
}

.footercenter {
  float: left;
  width: 1920px;
  margin: 0, auto;
  height: 100%;
  display: flex;
  justify-content: center;
  position: relative;
}

.github {
  float: left;
  height: 32px;
  padding: 8px;
  margin-top: 15px;
  margin-left: 30px;
  background: white;
  border-radius: 25px;
  display: flex;
  justify-content: space-between;
  position: relative;
  .yonghulogo {
    width: 32px;
    height: 32px;
    background-color: white;
    border: none;
    cursor: pointer;
  }
}
.footeryonghu {
  float: left;
  height: 32px;
  padding: 8px;
  margin-top: 15px;
  margin-right: 30px;
  background: #46485f;
  border-radius: 25px;
  display: flex;
  justify-content: space-between;
}
.footeryonghulogo {
  width: 32px;
  height: 32px;
  background-color: #46485f;
  border: none;
  cursor: pointer;
}
.footerfengexian {
  float: left;
  position: absolute;
  margin-top: 100px;
  color: white;
}
.footer-menu {
  float: left;
  height: 75px;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  position: absolute;
  background-color: #1a1d2d;
}
.footerbigtext1 {
  float: left;
  width: 200px;
  height: 75px;
  font-size: 16px;
  margin-left: 75px;
  color: white;
  ul {
    margin-top: 25px;
    li {
      font-size: 15px;
      margin-top: 10px;
    }
  }
}
.footerbigtext2 {
  float: left;
  width: 200px;
  height: 75px;
  font-size: 16px;
  margin-left: 150px;
  color: white;
  ul {
    margin-top: 25px;
    li {
      font-size: 15px;
      margin-top: 10px;
    }
  }
}
.footerbigtext3 {
  float: left;
  width: 200px;
  height: 75px;
  margin-left: 150px;
  color: white;
  font-size: 16px;
  ul {
    margin-top: 25px;
    li {
      font-size: 15px;
      margin-top: 10px;
    }
  }
}
</style>