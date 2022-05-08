//api统一管理
import requests from "./request";
import mockRequests from './mockAjax';
import qs from 'qs';
export const reqimg = () => requests({ url: '/jijiedaohang', method: 'get' });

export const reqGetBannerList = () => mockRequests({ url: '/banner', method: 'get' });
export const reqGetTodayFlower = () => mockRequests({ url: '/TodayFlower', method: 'get' });

export const reqGetSearchdata = (params) => requests({ url: '/searchdatatest', method: 'post', data: params })

export const reqGoodsInfo = (id) => requests({ url: `/goodsinfo/${id}`, method: 'get' })

export const reqAddOrUpdateShopCart = (skuId, skuNum, goodstempList) => requests({ url: `/cart/addToCart/${skuId}/${skuNum}`, method: "post", data: goodstempList })

export const reqAddOrUpdateShopCart2 = (skuId, skuNum, goodstempList,phone) => requests({ url: `/cart/addToCart/${skuId}/${skuNum}/${phone}`, method: "post", data: goodstempList })

export const reqCartList = () => requests({ url: '/cart/List', method: "get" })

export const reqCartList1 = (phone) => requests({ url: `/cart/List/${phone}`, method: "get" })

export const reqDeleteCartById = (skuId) => requests({url:`/cart/deleteCart/${skuId}`,method:"DELETE"})

export const reqDeleteCartById2 = (skuId,phone) => requests({ url: `/cart/deleteCart/${skuId}/${phone}`, method: "DELETE" })

export const reqUpdateCheckedByid = (skuId, isChecked) => requests({ url: `/cart/checkCart/${skuId}/${isChecked}`, method: 'get' });

export const reqUpdateCheckedByid2 = (skuId, isChecked,phone) => requests({ url: `/cart/checkCart/${skuId}/${isChecked}/${phone}`, method: 'get' });

export const reqGetCode = (phone) => requests({ url: `/user/passport/sendCode/${phone}`, method: 'get' });

export const reqUserRegister = (data) => requests({ url: '/user/passport/register', data, method: 'post' });

export const reqUserLogin = (data) => requests({ url: '/user/passport/login', data, method: 'post' });

export const reqUserInfo = () => requests({ url: '/user/passport/auth/getUserInfo', method: 'get' });

export const reqAddressInfo = (phone) => requests({ url: `/user/userAddress/auth/findUserAddressList/${phone}`, method: 'get' });

export const reqUpdateUserGoodsList = (phone) => requests({url:`/user/usersgoods/update/${phone}`,method:'get'});

export const reqSubmitOrder = (phone, data) => requests({ url: `/order/auth/submitOrder/${phone}`, data, method: 'post' });

export const reqPayInfo = (orderId) => requests({ url: `/payment/${orderId}`, method: 'get' });

export const reqzhifu = (data) => requests({ url: '/payment/zhifu', data:qs.stringify(data), method: 'post' ,headers:{
    "Content-Type":"application/x-www-form-urlencoded"
}});

export const getzhifujieguo = (data1) => requests({url: '/payment/zhifujieguo', data: qs.stringify(data1), method: 'post', headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    }
});

export const reqMyOrderList = (phone) => requests({ url: `/order/auth/${phone}`, method: 'get' });

export const reqMyDiZhiList = (phone) => requests({ url: `/order/dizhi/${phone}`, method: 'get' });

export const reqsetMyDiZhi = (phone, data) => requests({ url: `/order/setdizhi/${phone}`, data, method: 'post' });
