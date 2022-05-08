import {
    reqGetCode,
    reqUserRegister,
    reqUserLogin,
    reqUserInfo,
    reqUpdateUserGoodsList
} from "@/api";
import { setToken, getToken, removeToken } from "@/utils/token";
//登录与注册的模块
const state = {
    code: "",
    token: getToken(),
    phone: '',
};
const mutations = {
    GETCODE(state, code) {
        state.code = code;
    },
    USERLOGIN(state, token) {
        state.token = token;
    },
    GETUSERINFO(state, phone) {
        state.phone = phone;
    },
    // //清除本地数据
    CLEAR(state) {
        //帮仓库中先关用户信息清空
        state.token = '';
        state.phone = '';
        //本地存储数据清空
        removeToken();
    }
};
const actions = {
    async getCode({ commit }, phone) {
        let result = await reqGetCode(phone);
        if (result.result == 200) {
            commit("GETCODE", result.code);
            return "ok";
        } else {
            return Promise.reject(new Error("faile"));
        }
    },
    // //用户注册
    async userRegister({ commit }, user) {
        let result = await reqUserRegister(user);
        if (result.code == 200) {
            return "ok";
        } else if (result.code == 201) {
            alert("用户已存在")
        } else {
            return Promise.reject(new Error("faile"));
        }
    },
    // //登录业务
    async userLogin({ commit }, data) {
        let result = await reqUserLogin(data);
        if (result.code == 200) {
            commit("USERLOGIN", result.result.token);
            setToken(result.result.token);
            return "ok";
        } else {
            return Promise.reject(new Error("faile"));
        }
    },
    // //获取用户信息
    async getUserInfo({ commit }) {
        let result = await reqUserInfo();
        if (result.code == 200) {
            //提交用户信息
            commit("GETUSERINFO", result.phone);
            return 'ok';
        } else {
            return Promise.reject(new Error('faile'));
        }
    },
    // //退出登录
    userLogout({ commit }) {
        //只是向服务器发起一次请求，通知服务器清除token
            commit("CLEAR");
            return 'ok';
        
    },
    //更新用户购物车
    async updateusergoods({commit},phone){
        let result = await reqUpdateUserGoodsList(phone);
        if (result.code == 200) {
            return 'ok';
        } else {
            return Promise.reject(new Error('faile'));
        }
    }
};
const getters = {};
export default {
    state,
    mutations,
    actions,
    getters,
};
