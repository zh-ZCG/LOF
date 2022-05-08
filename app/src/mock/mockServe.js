import Mock from 'mockjs'
import banner from './banner.json'
import TodayFlower from './TodayFlower.json'
Mock.mock("/mock/banner", { code: 200, data: banner });
Mock.mock("/mock/TodayFlower", { code: 200, data: TodayFlower });