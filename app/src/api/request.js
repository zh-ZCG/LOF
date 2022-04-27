//对axios进行二次封装
import axios from "axios";
//引入进度条
import nprogress from "nprogress";
import "nprogress/nprogress.css";

const requests = axios.create({
    baseURL: 'http://localhost:3000/api',
    //请求超时时间
    timeout: 5000,
});

//请求拦截器
requests.interceptors.request.use((config) => {
    //config当中包含请求头headers
    //进度条开始
    nprogress.start();
    return config;
});

//响应拦截器
requests.interceptors.response.use((res) => {
    nprogress.done();
    return res.data;
}, (err) => {
    return Promise.reject(new Error('flase'));
});

//对外暴露
export default requests;