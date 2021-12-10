<template>
  <div class="search">
    Search
    {{ a }}
    <button @click="toHome">to Home</button>
    <button @click="toSearch">to Search</button>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div v-for="item in list" :key="item" class="swiper-slide">Slide {{ item }}</div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
      
      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
      
      <!-- 如果需要滚动条 -->
      <div class="swiper-scrollbar"></div>
  </div>
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
      list: []
    }
  },
  computed: {

  },
  created() {
  },
  mounted() {
    this.getMockTestData()
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
