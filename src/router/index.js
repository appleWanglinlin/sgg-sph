import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const originPush = VueRouter.prototype.push
const originReplace = VueRouter.prototype.replace
VueRouter.prototype.push = function(location, onComplete, onAbort) {
  return originPush.call(this, location, onComplete, onAbort).catch(err => err)
}
VueRouter.prototype.replace = function(location, onComplete, onAbort) {
  return originReplace.call(this, location, onComplete, onAbort).catch(err => err)
}

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('@/pages/Home'),
    },
    {
      path: '/search/:k',
      name: 'Search',
      component: () => import('@/pages/Search'),
      // props: true // 布尔值写法，只传递动态路径参数
      // props: { a: 1 } // 对象写法
      // props: ($route) => { // 函数写法
      //   return { a: 1 }
      // }
      // props: ($route) => ({ a: 1 }) // 函数写法-简写（返回为对象时）
    }
  ]
})