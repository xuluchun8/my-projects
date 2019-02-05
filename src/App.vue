<template>
  <div id="app">
    <v-header></v-header>
    <v-tab :getedTabIndex="currentPage" @getTabIndex="changeContent" ></v-tab>
    <!-- <router-view/> -->
    <div class="main" ref="main">
      <div class="contents" ref="contents">
        <my-app></my-app>
        <weixin-app></weixin-app>
        <demo></demo>
      </div>
    </div>
  </div>
</template>
<script>
import VHeader from './components/header/header';
import VTab from './components/tab/tab';
import Demo from './components/demo/demo'
import MyApp from './components/my-app/app'
import WeixinApp from './components/weixinapp/weixinapp'
import Bscroll from 'better-scroll'
export default {
  components : {
    VHeader,
    VTab,
    Demo,
    MyApp,
    WeixinApp,
  },
  data(){
    return {
      currentPage : 0
    }
  },
  methods: {
    changeContent(index){      
      this.mainScroll.goToPage(index)
    }
  },
  created() {
    setTimeout(() => {
      this.mainScroll = new Bscroll(this.$refs.main,{
        scrollX: true,
        scrollY: false,
        momentum: false,
        probeType : 3,
        snap: {
          loop: false,
          threshold: 0.3,
          speed: 400
        },
        bounce: false,
        stopPropagation: true,
        click: true
      })
      this.mainScroll.on('scrollEnd',() => {
        this.currentPage = this.mainScroll.getCurrentPage().pageX
        
      })
      // this.mainScroll.on('scroll',(pos) => {
      //   console.log(this.currentPage);
      // })
    },20)
  },
}
</script>
<style lang="stylus" scoped>
#app
  width 100% 
  position relative
  .main 
    bottom 0px;
    top 190px
    .contents 
      width 300%
      display flex
</style>

