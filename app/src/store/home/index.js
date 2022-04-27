import { reqimg } from "@/api";
//存储数据
const state = {
    categoryList: [],
};
//修改state
const mutations = {
    CATEGORYLIST(state, data) {
        state.categoryList = data;
    }
};
//业务逻辑，异步处理
const actions = {
    async categoryList({ commit }) {
        let result = await reqimg();
        if (result.code == 200) {
            commit("CATEGORYLIST", result.data);
        }
    }
};
//计算属性，简化数据
const getters = {};

export default {
    state, mutations, actions, getters
}