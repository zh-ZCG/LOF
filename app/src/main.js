import Vue from 'vue'
import App from './App.vue'

import router from '@/router'
import store from '@/store'

import '@/mock/mockServe'

import "swiper/css/swiper.css";

import * as API from '@/api';
new Vue({
    render: h => h(App),

    beforeCreate() {
        Vue.prototype.$bus = this;
        Vue.prototype.$API = API;
    },
    //注册路由
    router,
    //注册仓库
    store
}).$mount('#app')
