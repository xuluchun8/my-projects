<template>
  <div id="header">
   <div class="content-wrapper">
     <!-- <span class="arrow con-circle-left"></span> -->
     <div class="content" ref="slide" >
        <div class="slide-items" ref="slideItems">
          <img  class="item" :src="item.url" alt="" v-for="(item,index) in images" :key="index">
        </div>
     </div>
     <div class="dots" v-if="dots">
       <span @click="changeIndex(index)" class="dot" :class="{'active': index === currentPageIndex}" v-for="(item,index) in dots" :key="index"></span>
     </div>
     <!-- <span class="arrow con-circle-right"></span> -->
   </div>
  </div>
</template>
<script>
import Bscroll from 'better-scroll'
export default {
  data(){
    return {
      images : [
        {name: 'h5AndCss3',url: 'https://7n.w3cschool.cn/attachments/cover/cover_html5_and_css_camp.png?t=1537934755'},
        {name: 'javascript',url: 'https://7n.w3cschool.cn/attachments/cover/cover_basic_javascript_camp.png?t=1537934787'},
        {name: 'htmlcourse',url: 'https://7n.w3cschool.cn/attachments/cover/cover_htmlcourse.png?t=1537936902'},
        {name: 'weixinapp',url: 'https://7n.w3cschool.cn/attachments/cover/cover_weixinapp.png?t=1542089322?imageView2/1/w/150/h/84'},
      ],
      currentPageIndex: 0,
      autoPlay:true,
      dots:null
    }
  },
  created () {
    setTimeout(() => {
      this.currentPageIndex = 0
      this._setSlideWidth()
      this._initDots()
      this._initScroll()
      if(this.autoPlay){
        this._play()
      }
    },20)
    window.addEventListener('resize',() => {
      this._setSlideWidth()
      this.slide.refresh()
      this._initScroll()
      if(this.autoPlay){
        this._play()
      }
    })
  },
  
  methods: {
    _initDots(){
      this.dots = new Array(this.images.length)
    },
    _play(){
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.slide.next()
      }, 1000);
    },
    _onScrollEnd(){
      let pageIndex = this.slide.getCurrentPage().pageX
      this.currentPageIndex = pageIndex 
      if(this.autoPlay){
        this._play()
      }
    },
    changeIndex(index){
      if(this.autoPlay){
        this.autoPlay = false
      }
      this.slide.goToPage(index)
      this.currentPageIndex = index
      setTimeout(() => {
        this.autoPlay = true
        this._play()
      },1000)
      
    },
    _initScroll(){
      this.slide = new Bscroll(this.$refs.slide,{
        scrollX: true,
        scrollY: false,
        momentum: false,
        snap: {
          loop: true,
          threshold: 0.3,
          speed: 400
        },
        bounce: false,
        stopPropagation: true,
        click: false
      })
      this.slide.on('scrollEnd',this._onScrollEnd)
      this.slide.on('touchEnd',() => {
        if(this.autoPlay){
          this._play()
        };
      })
    },
    _setSlideWidth(){
      let children = this.$refs.slideItems.children
      let wrapperWidth = this.$refs.slideItems.parentElement.offsetWidth
      let width = 0
      
      for(let i = 0; i < children.length; i++){
        width += wrapperWidth
        children[i].style.width = wrapperWidth + 'px'
      }
      width += wrapperWidth*2
      console.log(width);
      
      this.$refs.slideItems.style.width = width + 'px'
    }
  }
}
</script>
<style lang="stylus">
@import '../../common/css/style.css'  ;
#header
  height 138px
  width 100%
  .content-wrapper
    position relative
    overflow hidden
    height 138px
    width 100%
    .arrow
      position absolute
      width 40px 
      height 40px
      background-color gray
      left -50px
    .content 
      height 138px
      .slide-items
        display flex
        height 138px
        position relative
        .item
          width 100%
          display block
    .dots 
      position absolute 
      display flex
      align-self center
      bottom 10px
      left 50%
      transform translateX(-50%)
      .dot 
        width 10px 
        height 10px
        background-color white
        margin-right 5px
        border-radius 10px
        &.active
          width 20px
</style>
