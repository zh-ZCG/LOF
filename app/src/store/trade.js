import { reqAddressInfo} from "@/api";
const state = {
    address: [],
    orderInfo: [],
    sum :''
};
const mutations = {
    GETUSERADDRESS(state, address) {
        state.address = address;
    },
    GETORDERINFO(state, orderInfo) {
        state.orderInfo = orderInfo;
    },
    GETSUM(state,sum){
        state.sum = sum;
    }
};
const actions = {
    //获取用户地址信息
    async getUserAddress({ commit },phone) {
        let result = await reqAddressInfo(phone);
        if (result.code == 200) {
            commit("GETUSERADDRESS", result.data);
        }
    },
    //获取商品清单数据
    async getOrderInfo({ commit },shuzu) {
        commit("GETORDERINFO", shuzu);
    },
    async getSum({ commit }, sum) {
        commit("GETSUM", sum);
    },
};
const getters = {};
export default {
    state,
    mutations,
    actions,
    getters,
};
