import axios from 'axios'
import NProgress from 'nprogress'
import "nprogress/nprogress.css"

NProgress.configure({ showSpinner: false }) // 关闭加载旋转器

const service = axios.create({
  baseURL: '/api'
})

service.interceptors.request.use(config => {
  NProgress.start()
  return config
})

service.interceptors.response.use(res => {
  NProgress.done()
  return res.data
}, err => {
  return Promise.reject(err)
})

export default service