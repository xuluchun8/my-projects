<template>
  <div class="demo-wrapper" :style="'height:' + height + 'px'" >
    <h2 class="title">{{title}}</h2>
    <div class="content" ref="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title : {
      type: String 
    },
    height :{
      type : Number,
      default : 200
    }
  },
  created() {
  },
}
</script>

<style lang="stylus" scoped>
.demo-wrapper
  width 100%
  display flex
  flex-direction column
  .title
    background-color #f2f5f7
    padding-left 10px
    border-left: 3px solid #d9dde1
    display block
    font-size: 12px;
    color: #93999f;
    line-height: 26px;
    height 26px
  .content
    padding 5px
    border solid white 1px
    position relative
    border-bottom solid rgba(7, 17, 27, 0.1) 1px
    flex-grow 1
    width 90%
    display flex
    flex-direction column
    justify-content center
    align-items center
</style>
