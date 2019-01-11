<template>
  <div id="tab">
    <div class="nav">
      <span @click="changeIndex(0)" :class="{'active': tabIndex === 0 }" >App</span>
      <span @click="changeIndex(1)" :class="{'active': tabIndex === 1 }" >小程序</span>
      <span @click="changeIndex(2)" :class="{'active': tabIndex === 2 }" >demo</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tabIndex : 0
    };
  },
  props:{
    getedTabIndex : {
      type : Number,
      default : 0
    }
  },
  watch: {
    getedTabIndex(val){
      this.tabIndex = val
    }
  },
  methods: {
    changeIndex(index){
      this.tabIndex = index
      this.$emit('getTabIndex',index)
    }
  },
};
</script>
<style lang="stylus">
.nav 
  width: 100%;
  height: 50px;
  line-height: 50px;
  display: flex;
  justify-content: space-around;
  border-bottom: solid 1px rgba(7, 17, 27, 0.1);
  border-top: solid 1px rgba(7, 17, 27, 0.1);
  flex-grow 1
  span
    color gray
    &.active 
      color red

</style>
