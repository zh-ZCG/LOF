import Vue from 'vue'
import App from './App.vue'

import router from '@/router'
import store from '@/store'


new Vue({
    render: h => h(App),
    //注册路由
    router,
    //注册仓库
    store
}).$mount('#app')
