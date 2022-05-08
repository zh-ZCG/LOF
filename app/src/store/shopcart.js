import { reqCartList, reqDeleteCartById, reqDeleteCartById2, reqUpdateCheckedByid, reqUpdateCheckedByid2, reqCartList1 } from "@/api";


const state = {
    cartList: [],
};
const mutations = {
    GETCARTLIST(state, cartList) {
        state.cartList = cartList;
    },
};
const actions = {
    //获取购物车列表数据
    async getCartList({ commit }) {
        let result = await reqCartList();
        if (result.code == 200) {
            commit("GETCARTLIST", result.data);
        }
    },

    async getCartList1({ commit }, phone) {
        let result = await reqCartList1(phone);
        if (result.code == 200) {
            commit("GETCARTLIST", result.data);
        }
    },

    //删除购物车某一个产品
    async deleteCartListBySkuId({ commit }, skuId) {
        let result = await reqDeleteCartById(skuId);
        if (result.code == 200) {
            return "ok";
        } else {
            return Promise.reject(new Error("faile"));
        }
    },
    async deleteCartListBySkuId2({ commit }, { skuId, phone }) {
        let result = await reqDeleteCartById2(skuId, phone);
        if (result.code == 200) {
            return "ok";
        } else {
            return Promise.reject(new Error("faile"));
        }
    },

    //修改购物车某一个产品的选中状态
    async updateCheckedById({ commit }, { skuId, isChecked }) {
        let result = await reqUpdateCheckedByid(skuId, isChecked);
        if (result.code == 200) {
            return "ok";
        } else {
            return Promise.reject(new Error("faile"));
        }
    },
    async updateCheckedById2({ commit }, { skuId, isChecked, phone }) {
        let result = await reqUpdateCheckedByid2(skuId, isChecked, phone);
        if (result.code == 200) {
            return "ok";
        } else {
            return Promise.reject(new Error("faile"));
        }
    },
    //删除全部勾选的产品
    deleteAllCheckedCart({ dispatch, getters }) {
        let PromiseAll = [];
        getters.cartList.forEach((item) => {
            let promise =
                item.isChecked == 1
                    ? dispatch("deleteCartListBySkuId", item.id)
                    : "";
            PromiseAll.push(promise);
        });
        return Promise.all(PromiseAll);
    },
    deleteAllCheckedCart2({ dispatch, getters }, phone) {
        let PromiseAll = [];
        getters.cartList.forEach((item) => {
            let promise =
                item.isChecked == 1
                    ? dispatch("deleteCartListBySkuId2", { skuId: item.id, phone })
                    : "";
            PromiseAll.push(promise);
        });
        return Promise.all(PromiseAll);
    },

    //修改全部产品的状态
    updateAllCartIsChecked({ dispatch, state }, isChecked) {
        //数组
        let promiseAll = [];
        state.cartList.forEach((item) => {
            let promise = dispatch("updateCheckedById", {
                skuId: item.id,
                isChecked,
            });
            promiseAll.push(promise);
        });
        //最终返回结果
        return Promise.all(promiseAll);
    },
    updateAllCartIsChecked2({ dispatch, state }, { isChecked, phone }) {
        //数组
        let promiseAll = [];
        state.cartList.forEach((item) => {
            let promise = dispatch("updateCheckedById2", {
                skuId: item.id,
                isChecked,
                phone
            });
            promiseAll.push(promise);
        });
        //最终返回结果
        return Promise.all(promiseAll);
    },
};
const getters = {
    cartList(state) {
        return state.cartList || [];
    },
};
export default {
    state,
    mutations,
    actions,
    getters,
};
