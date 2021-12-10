import request from './request'

// 三级分类接口
export const getBaseCategoryList = () => request({ url: '/product/getBaseCategoryList', method: 'get' })

// mock模拟数据
export const getMockTestData = () => request({ url: '/mockTest', method: 'get' })
