<template>
  <div class="scroll-wrapper" ref="scrollWrapper">
    <slot></slot>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  data(){
    return {
      currentTop : 0,
      heightArr : []
    }
  },
  props:{
    probeType : {
      type : Number,
      default : null
    },
    scrollX : {
      type : Boolean,
      defalut : false
    },
    scrollY : {
      type : Boolean,
      defalut : true
    }
  },
  created(){
    setTimeout(() => {
      this._initScroll()
      this._calculateHeight()
    },20)
  },
  watch: {
    currentTop(posY){
      let heightArr = this.heightArr
      let currentIndex = 0
      for(let i = 0; i < heightArr.length; i++){
        if(-posY < heightArr[1]){
          currentIndex = 0
        }
        if(-posY >= heightArr[i] && -posY < heightArr[i + 1]){
          currentIndex = i
        }
        if(-posY >= heightArr[heightArr.length - 1]){
          currentIndex = heightArr.length
        }
      }
      // console.log(posY,heightArr);
      
      // console.log('scroll' + currentIndex)
      this.$emit('getCurrentIndex',currentIndex)
    }
  },
  methods:{
    _initScroll(){
      this.scroll = new BScroll(this.$refs.scrollWrapper,{
        click : true,
        probeType : this.probeType,
        scrollX : this.scrollX,
        scrollY : this.scrollY,
      })
      this.scroll.on('scroll',(pos) => {
        this.currentTop = pos.y
        console.log( pos);
      })
    },
    _calculateHeight(){
      let children = this.$refs.scrollWrapper.children[0].children
      let heightArr = this.heightArr
      let height = 0
      heightArr.push(height)
      for(let i = 0; i < children.length; i++){
        height += children[i].getBoundingClientRect().height
        heightArr.push(height)
      }
    },
    scrollTo(){
      this.scroll && this.scroll.scrollTo(this.scroll,arguments)
    }
  }
}
</script>
<style lang="stylus" scoped>
.scroll-wrapper 
  position absolute
  top 0
  bottom 0
  left 0 
  right 0
  overflow hidden
</style>
