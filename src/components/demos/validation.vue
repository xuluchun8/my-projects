<template>
  <div class="validation">
    <div class="checkCodes" @click="update">
      <div class="codes" ref="codes">
        <strong class="code"></strong>
        <strong class="code"></strong>
        <strong class="code"></strong>
        <strong class="code"></strong>
      </div>
    </div>
    <form class="wrapper">
      <input class="input" ref="oinput" name="inputcodes" type="text" placeholder="请输入验证码">
      <!-- <button type="submit" class="btn">验证</button> -->
      <input type="button" value="验证" class="btn" ref="btn">
    </form>
  </div>
</template>
<script>
export default {
  mounted() {
    this.createCodes();
  },
  methods: {
    update() {
      this.createCodes();
    },
    createCodes() {
      var ospan = this.$refs.codes.children;
      var obtn = this.$refs.btn;
      var oinput = this.$refs.oinput;
      var codesStr = "";
      var codes = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "a",
        "b",
        "q",
        "p",
        "o",
        "n",
        "m",
        "l",
        "k",
        "j",
        "i",
        "h",
        "g",
        "f",
        "e",
        "d",
        "c",
        "r",
        "s",
        "t",
        "v",
        "u",
        "w",
        "x",
        "y",
        "z",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "J",
        "G",
        "H",
        "I",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "W",
        "V",
        "X",
        "Y",
        "Z"
      ];
      for (var i = 0; i < 4; i++) {
        let code = codes[Math.floor(Math.random() * 62)];
        ospan[i].innerHTML = code;
        codesStr += code.toUpperCase();
      }
      obtn.onclick = function(e) {
        e.preventDefault();
        var inputValue = oinput.value.toUpperCase();
        if (!inputValue) {
          alert("请输入验证码");
        }
        if (inputValue === codesStr) {
          alert("验证成功");
          window.open("http://www.baidu.com");
        }
      };
    }
  }
};
</script>

<style scoped>
.validation{
  width: 100%;
  align-self: auto;
  transform: translateX(30px)
}
.wrapper {
  position: absolute;
  display: flex;
  width: 90%;
  font-size: 10px;
  left: 0;
}
.checkCodes {
  background-color: gray;
  opacity: 0.4;
  width: 100px;
  height: 40px;
  text-align: center;
  align-self: flex-start;
  margin-bottom: 10px;
}
.input {
  border: solid rgb(199, 195, 195) 1px;
  padding-left: 10px;
}
.btn {
  background-color: rgb(4, 77, 77);
  padding: 10px 20px;
  color: white;
  border-radius: 5px;
  opacity: 0.7;
}
.codes {
  padding: 10px 4px;
  color: white;
}
</style>