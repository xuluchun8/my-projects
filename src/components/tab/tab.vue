<template>
  <div id="tab">
    <div class="nav">
      <router-link to="app">App</router-link>
      <router-link to="weixinapp">小程序</router-link>
      <router-link to="demo">demo</router-link>
    </div>
    <!-- <keep-alive>
      <router-view></router-view>
    </keep-alive> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
    };
  },
  methods: {

  },
  deactivated(){
    console.log('deactived');
  },
  activated(){
    console.log('actived');
    
  }
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
  a 
    display inline-block
    width 100%
    text-align center
  .router-link-active
    color: red;
    width 100%

</style>
