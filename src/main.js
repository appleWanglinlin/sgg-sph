import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import '@/mock/mockServer'

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router, // 注册后，组件身上就可以访问$route(当前路由)、$router(路由器)
  store
}).$mount('#app')
