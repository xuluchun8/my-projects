<template>
  <div id="myapp">
    <scroll>
      <ul>
        <li class="app-item" v-for="item in apps" :key="item.id">
          <h2 class="name" >{{item.name}}</h2>
          <div class="rescode">
            <img :src="item.rescode">
            <div class="description">{{item.description}}</div>
          </div>
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
        { name: "检100运维调度", rescode: "./railway.png", id: 0, description:'应用于轨道车辆段内运维管理的微信小程序。' },
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
        console.log(canvas);
        canvas.width = 100
        canvas.height = 100
        let ctx = canvas.getContext("2d");
        var img = new Image();
        img.onload = function() {
          // img.setAttribute("crossOrigin",'Anonymous')
          ctx.drawImage(img, 0, 0, 100, 100);
          // var base64 = canvas.toDataURL();
          // item.rescode = base64
        };
        img.src = item.rescode;
      });
    }
  }
};
</script>
<style lang="stylus">
#myapp 
  position: relative;
  height: 378px;
  
  .app-item 
    display: flex;
    flex-direction: column;
    align-items center
    background-color white !important
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
        font-size 12px
        max-width 100px
        // text-indent 24px
        align-self center
</style>
