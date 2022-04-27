//api统一管理
import requests from "./request";

export const reqimg = () => requests({ url: '/jijiedaohang', method: 'get' });