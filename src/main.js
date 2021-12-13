import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import '@/mock/mockServer'
// import * as dayjs from 'dayjs'
import * as dayjs from '/public/dayjs.min.js'
import xss from 'xss'
Vue.prototype.xss = xss

Vue.filter('formatTime', function(time, str = 'YYYY-MM-DD HH:mm:ss') {
  return dayjs(time).format(str)
})

Vue.directive('focus', {
  inserted(el) {
    el.focus()
  }
})

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router, // 注册后，组件身上就可以访问$route(当前路由)、$router(路由器)
  store
}).$mount('#app')
