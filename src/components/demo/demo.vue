<template>
  <div id="demos">
    <div class="left">
      <scroll ref="titleScroll" >
        <div class="left-wrapper">
          <div class="title-wrapper" @click="switchDemo(item.id)" :class="{'active' : currentDemo == item.id }" v-for="(item) in demos" :key="item.id">
            <span class="title">
              {{item.title}}
            </span>
          </div>
        </div>
      </scroll>
    </div>
    <div class="right">
      <scroll :scrollX='false' :scrollY="true" ref="demoScroll" :probeType="3" @getCurrentIndex="getCurrentIndex" >
        <div class="right-wrapper">
          <demo-wrapper :title="'奔跑的马儿'" :height="200">
            <div class="horse"></div>
          </demo-wrapper>
          <demo-wrapper :title="'验证组件'" :height="200">
            <validation></validation>
          </demo-wrapper>
          <demo-wrapper :title="'复制文本'" :height="200">
            <word-copy></word-copy>
          </demo-wrapper>
          <demo-wrapper :title="'炫酷导航条'" :height="200">
            <nav-icon></nav-icon>
          </demo-wrapper>
          <demo-wrapper :title="'奔跑的马儿'" :height="200">
            <lucky-draw></lucky-draw>
          </demo-wrapper>
        </div>
      </scroll>
    </div>
  </div>
</template>
<script>
import DemoWrapper from '../demo-wrapper/demoWrapper'
import Scroll from '../scroll/scroll'
import Validation from '../../components/demos/validation'
import WordCopy from '../../components/demos/word-copy'
import NavIcon from '../../components/demos/nav-icon'
import LuckyDraw from '../../components/demos/lucky-draw'
export default {
  components:{
    DemoWrapper,
    Scroll,
    Validation,
    WordCopy,
    NavIcon,
    LuckyDraw
  },
  methods:{ 
    getCurrentIndex(index){
      this.currentDemo = index      
    },
    switchDemo(id){
      console.log(id);
      
      let height = this.$refs.demoScroll.heightArr[id]
      this.$refs.demoScroll.scroll.scrollTo(0,-height,400)      
    }
  },
  data(){
    return {
      currentDemo : null,
      demos : [
        {title : '奔跑的马儿',description : 'css3 transform steps', id:0},
        {title : '验证组件',description : 'css3 transform steps', id:1},
        {title : '复制文本',description : '从一个文本框中复制到另一个文本框', id:2},
        {title : '炫酷导航条',description : 'css3 transform steps', id:3},
        {title : '奔跑的马儿',description : 'css3 transform steps', id:4},
        {title : '奔跑的马儿',description : 'css3 transform steps', id:5},
        {title : '奔跑的马儿',description : 'css3 transform steps', id:6},
        {title : '奔跑的马儿',description : 'css3 transform steps', id:7},
        {title : '奔跑的马儿',description : 'css3 transform steps', id:8},
        {title : '奔跑的马儿',description : 'css3 transform steps', id:9},
        {title : '奔跑的马儿',description : 'css3 transform steps', id:10},
        {title : '奔跑的马儿',description : 'css3 transform steps', id:11},
      ]
    }
  }
}
</script>
<style lang="stylus">
#demos
  display flex
  width 100%
  height 378px
  .left 
    background-color #f2f5f7
    width 80px
    height 300px
    overflow hidden
    position relative
    .title-wrapper
      &.active
        background-color white
      padding 10px 10px
      padding-bottom 5px
      font-weight: 200;
      font-size: 13px;
      line-height: 14px
      .title
        display inline-block
        position relative
        &::before
          content ""
          border-bottom solid rgba(7, 17, 27, 0.1) 1px
          width 100%
          display inline-block
          position absolute
          bottom -4px

  .right 
    flex-grow 1
    height 334px
    overflow hidden
    position relative
    .horse
      width 140px
      background-image url('./horse.png')
      border-radius 10px
      background-size cover
      background-repeat no-repeat
      height 70px
      animation run 0.3s steps(12,end)  infinite
@keyframes run {
  0%{
    background-position 0px
  }
  100%{
     background-position -1680px
  }
}
</style>
