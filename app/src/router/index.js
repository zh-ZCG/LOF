// 配置路由
import Vue from 'vue';
import VueRouter from 'vue-router';
//使用插件
Vue.use(VueRouter);
//引入路由组件
import routes from './routes';
import store from "@/store";

//备份原型对象的push
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;
//重写push|replce
VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this, location, resolve, reject)
    } else {
        originPush.call(this, location, () => { }, () => { });
    }
}
VueRouter.prototype.replace = function (location, resolve, reject) {
    if (resolve && reject) {
        originReplace.call(this, location, resolve, reject)
    } else {
        originReplace.call(this, location, () => { }, () => { });
    }
}


let router =  new VueRouter({
    routes,
    scrollBehavior(to, from, savePosition) {
        return { x: 0, y: 0 };
    }
})

router.beforeEach(async (to, from, next) => {
    let token = store.state.user.token;
    let phone = store.state.user.phone;
    if (token) {
        if (to.path == "/login" || to.path == '/register') {
            next('/');
        } else {
            //已经登陆了,访问的是非登录与注册
            //登录了且拥有用户信息放行
            if (phone) {
                next();
            } else {
                //登陆了且没有用户信息
                //在路由跳转之前获取用户信息且放行
                try {
                    await store.dispatch('getUserInfo');
                    next();
                } catch (error) {
                    //token失效从新登录
                    await store.dispatch('userLogout');
                    next('/login')
                }
            }
        }
    } else {
        let toPath = to.path;
        if (toPath.indexOf('/trade') != -1 || toPath.indexOf('/pay') != -1 || toPath.indexOf('/center') != -1) {
            //把未登录的时候向去而没有去成的信息，存储于地址栏中【路由】
            next('/login?redirect=' + toPath);
        } else {
            //去的不是上面这些路由（home|search|shopCart）---放行
            next();
        }

    }
});

export default router;