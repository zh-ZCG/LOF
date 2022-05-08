<template>
  <div class="login-container">
    <!-- 登录 -->
    <div class="login-wrap">
      <div class="login">
        <div class="loginform">
          <ul class="tab clearFix">
            <li>
              <a class="current">账户登录</a>
            </li>
          </ul>

          <div class="content">
            <form>
              <div class="input-text clearFix">
                <span class="inputicon"></span>
                <input type="text" placeholder="请输入手机号" v-model="phone" />
              </div>
              <div class="input-text clearFix">
                <span class="pwd"></span>
                <input
                  type="password"
                  placeholder="请输入密码"
                  v-model="password"
                />
              </div>
              <div class="setting clearFix">
                <label class="checkbox inline">
                  <input name="m1" type="checkbox" value="2" checked="" />
                  自动登录
                </label>
              </div>
              <button class="btn" @click.prevent="userLogin">
                登&nbsp;&nbsp;录
              </button>
            </form>

            <div class="call clearFix">
              <router-link class="register" to="/register"
                >立即注册</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      phone: "",
      password: "",
    };
  },
  methods: {
    async userLogin() {
      try {
        const { phone, password } = this;
        phone &&
          password &&
          (await this.$store.dispatch("userLogin", { phone, password }));
        //  let toPath = this.$route.query.redirect||"/home";
        //  this.$router.push(toPath);
        await this.$store.dispatch("updateusergoods", phone);
        this.$router.push("/home");
        this.$store.dispatch("getUserInfo");
      } catch (error) {
        alert(error.message);
      }
    },
  },
};
</script>

<style lang="less" scoped>
.login-container {
  .login-wrap {
    height: 487px;
    background-color: #1a1d2d;

    .login {
      width: 1200px;
      height: 487px;
      margin: 0 auto;
    }

    .loginform {
      width: 420px;
      height: 406px;
      box-sizing: border-box;
      background: #fff;
      float: left;
      margin-left: 390px;
      top: 45px;
      position: relative;
      padding: 20px;

      .tab {
        li {
          width: 100%;
          float: left;
          text-align: center;
          border-bottom: 1px solid #28a3ef;

          a {
            width: 100%;
            display: block;
            height: 50px;
            line-height: 50px;
            font-size: 20px;
            font-weight: 700;
            color: #333;
            border: 1px solid #ddd;
            box-sizing: border-box;
            text-decoration: none;
          }

          .current {
            border-bottom: none;
            border-top-color: #28a3ef;
            color: #e1251b;
          }
        }
      }

      .content {
        width: 380px;
        height: 316px;
        box-sizing: border-box;
        border: 1px solid #ddd;
        border-top: none;
        padding: 18px;

        form {
          margin: 15px 0 18px 0;
          font-size: 12px;
          line-height: 18px;

          .input-text {
            margin-bottom: 16px;

            span {
              float: left;
              width: 37px;
              height: 32px;
              border: 1px solid #ccc;
              background: url("./images/user.png") no-repeat;
              box-sizing: border-box;
              border-radius: 2px 0 0 2px;
            }

            .pwd {
              background: url("./images/password.png") no-repeat;
            }

            input {
              width: 302px;
              height: 32px;
              box-sizing: border-box;
              border: 1px solid #ccc;
              border-left: none;
              float: left;
              padding-top: 6px;
              padding-bottom: 6px;
              font-size: 14px;
              line-height: 22px;
              padding-right: 8px;
              padding-left: 8px;

              border-radius: 0 2px 2px 0;
              outline: none;
            }
          }

          .setting {
            label {
              float: left;
            }

            .forget {
              float: right;
            }
          }

          .btn {
            background-color: #e1251b;
            padding: 6px;
            border-radius: 0;
            font-size: 16px;
            font-family: 微软雅黑;
            word-spacing: 4px;
            border: 1px solid #e1251b;
            color: #fff;
            width: 100%;
            height: 36px;
            margin-top: 25px;
            outline: none;
          }
        }

        .call {
          margin-top: 30px;

          ul {
            float: left;

            li {
              float: left;
              margin-right: 5px;
            }
          }

          .register {
            float: right;
            font-size: 15px;
            line-height: 38px;
          }

          .register:hover {
            color: #4cb9fc;
            text-decoration: underline;
          }
        }
      }
    }
  }

  .copyright {
    width: 1200px;
    margin: 0 auto;
    text-align: center;
    line-height: 24px;

    ul {
      li {
        display: inline-block;
        border-right: 1px solid #e4e4e4;
        padding: 0 20px;
        margin: 15px 0;
      }
    }
  }
}
</style>