<template>
  <div id="myapp">
    <scroll :scrollY="true" >
      <ul>
        <li class="app-item" v-for="item in apps" :key="item.id">
          <a class="wrapper" :href="item.href">
            <h2 class="name" >{{item.name}}</h2>
            <div class="rescode">
              <img :src="item.rescode">
              <div class="description">{{item.description}}</div>
            </div>
          </a>
          <split></split>
        </li>
      </ul>
    </scroll>
  </div>
</template>
<script>
import Split from "../split/split";
import Scroll from "../scroll/scroll";
import fs from "fs";
export default {
  components: {
    Split,
    Scroll
  },
  data() {
    return {
      apps: [
        { name: "仿写版饿了吗？",href:'http://132.232.104.130:8000/#/goods', rescode: "./seller.png", id: 0 ,description:'vue框架仿写饿了吗网站，大量应用了组件化开发的思想，使用了better-scroll库....'},
        { name: "答题小系统",href:'http://132.232.104.130:8000/#/goods', rescode: "./seller.png", id: 1,description:'待部署到服务器...' },
        { name: "音乐播放器",href:'http://132.232.104.130:8000/#/goods', rescode: "./seller.png", id: 2,description:'技术点：vue better-scroll icoMoon axios promise...' },
      ]
    };
  },
  created() {
    this._normolrizeApps()
    // this._getBase64Image()
  },
  computed: {},
  methods: {
    // 将本地图片转换为base64
    _normolrizeApps() {
      let apps = this.apps;
      apps.forEach(item => {
        var canvas = document.createElement("canvas");
        canvas.width = 100
        canvas.height = 100
        let ctx = canvas.getContext("2d");
        var img = new Image();
        img.onload = function() {
          // img.setAttribute("crossOrigin",'Anonymous')
          // ctx.drawImage(img, 0, 0, 100, 100);
          // var base64 = canvas.toDataURL();
          // item.rescode = base64
        };
        img.src = item.rescode;
      });
    }
  }
};
</script>
<style lang="stylus" scoped >
#myapp 
  position: relative;
  height: 378px;
  width 100%;
  .app-item 
    display: flex;
    flex-direction: column;
    align-items center
    background-color white !important
    .wrapper
      width 80%
      .name 
        text-align center
        padding: 10px;
        font-size: 14px;
        color: #7e8c8d;
      .rescode 
        display flex
        padding-bottom: 10px;
        justify-content center
        img 
          padding-right 20px
          width 100px
          height 100px
        .description
          font-size 10px
          width 100px
          align-self center
</style>
