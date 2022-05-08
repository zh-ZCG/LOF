import { reqimg, reqGetBannerList, reqGetTodayFlower } from "@/api";
//存储数据
const state = {
    categoryList: [],
    bannerList: [],
    TodayFlower: []
};
//修改state
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList;
    },
    GETBANNERLIST(state, bannerList) {
        state.bannerList = bannerList;
    },
    GETTODAYFLOWER(state, TodayFlower) {
        state.TodayFlower = TodayFlower;
    }
};
//业务逻辑，异步处理
const actions = {
    async categoryList({ commit }) {
        let result = await reqimg();
        if (result.code == 200) {
            commit("CATEGORYLIST", result.data);
        }
    },
    async getBannerList({ commit }) {
        let result = await reqGetBannerList();
        if (result.code == 200) {
            commit("GETBANNERLIST", result.data);
        }
    },
    async getTodayFlower({ commit }) {
        let result = await reqGetTodayFlower();
        if (result.code == 200) {
            commit("GETTODAYFLOWER", result.data);
        }
    }
};
//计算属性，简化数据
const getters = {};

export default {
    state, mutations, actions, getters
}