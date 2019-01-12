<template>
  <div class="lucky-draw">
    <div class="header">
      <span class="startTime">距离抽奖时间{{time}}s</span>
    </div>
    <div class="body">
      <div class="content-left">
        <h5 >抽奖中...</h5>
        <div class="name">姓名</div>
        <div class="phone">电话</div>
      </div>
      <div class="conteny-right">
        <h5>获奖名单</h5>
        <div class="names">
          <ul></ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "jquery";
export default {
  data() {
    return {
      data: [
        { name: "xuli", phone: 123424523522 },
        { name: "栈三", phone: 12232323432 },
        { name: "历史", phone: 23434234 },
        { name: "万物", phone: 123424523522 },
        { name: "xuli", phone: 64564564 },
        { name: "dfd", phone: 4563446758 },
        { name: "3434", phone: 2326564 },
        { name: "电饭锅", phone: 46456345445 },
        { name: "京东方", phone: 4564557 },
        { name: "热热", phone: 4564645 },
        { name: "㧇", phone: 4564728 },
        { name: "䏃", phone: 867867 },
        { name: "风格和梵蒂冈", phone: 5675675 }
      ],
      totalNum : 5,
      index : 0,
      time : 5,
      reset : true
    };
  },
  computed:{
    dataLen(){
      return this.data.length
    },
    status(){
      return !this.reset ? '抽奖中...' : '开始抽奖'
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      var timerInit = setInterval(() => {
        $(".startTime").html("距离抽奖时间" + --this.time + "s");
        if (this.time < 0) {
          clearInterval(timerInit);
          $(".startTime").html("抽奖中....");
          this.reset = false 
          this.getLucky();
        }
      }, 1000);
    },
    getLucky() {
      var timer = setInterval(() => {
        var i = parseInt(Math.random() * this.dataLen);
        $(".content-left .name")
          .html(this.data[i].name)
          .show();
        $(".content-left .phone")
          .html(this.data[i].phone)
          .show();
      }, 100);
      setTimeout(() => {
        clearInterval(timer);
        var name = $(".content-left .name").html();
        var phone = $(".content-left .phone").html();
        this.saveLucky(name, phone);
        setTimeout(() => {
          if (this.index == this.totalNum) {
            $(".startTime").html("抽奖完成");
            $(".content-left .name").html("")
            $(".content-left .phone").html("")
            this.reset = true
            return;
          }
          this.getLucky();
        }, 1000);
      }, 2000);
    },

    saveLucky(name, phone) {
      var len = $("li:contains(" + name + ":" + phone + ")")[0];
      if (!!len) {
        return;
      }
      ++this.index;
      var oli = $("<li>" + this.index + "." + name + ":" + phone + "</li>");
      oli.css({color : 'red',padding:'3px 0'})
      $(".names ul").append(oli);
    }
  }
};
</script>
<style lang="stylus" scoped>
.clickAble{
  background-color orange;
  width 70px;
  margin 0 auto
  border solid red 1px;
  border-radius 5px
}
.lucky-draw {
  font-size: 10px;
  width: 100%;
  border: solid gray 1px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.header {
  padding: 5px;
}

.body {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.content-left {
  display: flex;
  flex-direction: column;
  width: 120px;
  height: 120px;
  text-align: center;
  align-self: center;
}
h5{
  padding: 5px 0;
}
.conteny-right {
  width: 120px;
  height: 120px;
}

.conteny-right h5 {
  text-align: center;
}

.name, .phone {
  color: orange;
  font-size: 12px;
  padding 10px 0;
}

.names {
  width: 200px;
  height: 200px;
}

li {
  list-style: none;
  color: red !important;
  font-size: 14px;
}
</style>
