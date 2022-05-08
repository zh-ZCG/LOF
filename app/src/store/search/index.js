import { reqGetSearchdata } from "@/api";

//存储数据
const state = {
    searchdata: {}
};
//修改state
const mutations = {
    GETSEARCHDATA(state, searchdata) {
        state.searchdata = searchdata;
    }
};
//业务逻辑，异步处理
const actions = {
    async getSearchdata({ commit }, params = {}) {
        let result = await reqGetSearchdata(params)
        if (result.code == 200) {
            commit('GETSEARCHDATA', result.data);
        }
    }
};
//计算属性，简化数据
const getters = {
    goodsList(state) {
        return state.searchdata.goodsList || [];
    },
    address(state) {
        return state.searchdata.address || [];
    },
    attrsList(state) {
        return state.searchdata.attrsList || [];
    },
    priceValue(state) {
        return state.searchdata.priceValue || [];
    },
    price(state) {
        return state.searchdata.price || [];
    },
};

export default {
    state, mutations, actions, getters
}