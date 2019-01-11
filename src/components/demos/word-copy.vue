<template>
  <div class="word-copy">
    <textarea class="inputWord" type="text"></textarea>
    <div class="clickToMove">
      <button class="btn">文字下移</button>
      <strong class="wordNums">0/0</strong>
      <ul class="moving" >
        <li></li>
        <li></li>
        <li></li>

    </ul>
    </div>  
    <textarea disabled class="copyWord" type="text"></textarea>
  </div>
</template>
<script>
import 'jquery'
export default {
  created() {
     $(document).ready(function () {
      // 进度条动画
      let j = 1
      setInterval(function () {
        j = j > 4 ? 1 : ++j
        $('li:eq(' + j + ')').css({
          'background-color': 'red'
        }).siblings().css({
          'background-color': 'orange'
        })
      }, 100)

      // 点击copy
      $('.btn').click(function () {
        let text = $('textarea').val()
        if (text == '') {
          alert('请输入内容')
        } else {
          // 显示文字个数
          let textLength = text.length,
            copyIndex = 0
          var timer = setInterval(function () {
            if (copyIndex < textLength) {
              // 展示动画
              $('.moving')[0].style.display = 'block'
              copyIndex++
              $('.copyWord').append(text[copyIndex])
              $('.wordNums').text(copyIndex + '/' + textLength)
              var s = text.split("").slice(copyIndex, textLength).join("")
              $('.inputWord').val(s)
            } else {
              // 取消动画
              $('.moving')[0].style.display = 'none'
              clearInterval(timer)
            }
          }, 100)
        }
      })
    })
  },
}
</script>
<style lang="stylus" scoped>
 .inputWord{
    background-color: orange;
    width: 200px;
    height:50px;
  }
  .copyWord{
    width: 200px;
    height:50px;
    display: flex;
    flex-direction:column;
    justify-content:space-around;
    // border: black dotted 1px;
    background-color: yellowgreen;
    margin-top 2px;
  }
  .btn{
    background-color: brown;
    padding: 5px 15px;
    color: white;
  }
  .clickToMove{
    text-align: center;
    display: flex;
  }
  .wordNums{
    display: block;
    text-align: center;
    height:29px;
    line-height :29px;
  }
  .moving{
    position absolute;
    left 190px;
    transform translateY(5px)
  }
  ul{
    text-align: center;
    display:none;
  }
  li{
    width: 10px;
    height: 10px;
    background-color: orange;
    border-radius: 50%;
    list-style: none;
    display: inline-block;
  }
</style>

