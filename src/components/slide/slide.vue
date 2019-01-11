<template>
  <div class="slide-wrapper" ref="slideWrapper">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props:{

  },
  mounted(){ 
    // this._setItemSize()
  },
  methods:{
    _getFatherSize(){
      let father = this.$refs.slideWrapper.parentElement
      let height = father.offsetHeight
      let width = father.offsetWidth
      return {
        height : height,
        width : width
      }
    },
    _setItemSize(){
       let children = this.$refs.slideWrapper.children
       let fatherSize = this._getFatherSize()
       for(let i = 0; i < children.length; i++){
         children[i].style.width = fatherSize.width + 'px'
         children[i].style.height = fatherSize.height + 'px'
       }
    },
    _calculateWrapperSize(){
      let children = this.$refs.slideWrapper.children
      let height = children[0].offsetHeight
      let width = 0
      for(let i = 0; i < children.length; i++){
        width += children[0].offsetWidth
      }
      return {
        height : height,
        width : width
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
  .slide-wrapper 
    display flex
    .item
      width 100%
      border solid red 2px
</style>
