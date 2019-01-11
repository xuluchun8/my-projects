<template>
  <div class="wrapper">
    <ul class="imgs">
      <li class="icon0">
        <a href>
          <img src="./images/clos.png" alt>
        </a>
      </li>
      <li class="icon1">
        <a href>
          <img src="./images/full.png" alt>
        </a>
      </li>
      <li class="icon2">
        <a href>
          <img src="./images/refresh.png" alt>
        </a>
      </li>
      <li class="icon3">
        <a href>
          <img src="./images/open.png" alt>
        </a>
      </li>
      <li class="icon4">
        <a href>
          <img src="./images/prev.png" alt>
        </a>
      </li>
    </ul>
    <img class="home" src="./images/home.png" alt>
  </div>
</template>
<script>
import "jquery";
export default {
  mounted() {
    var showIn = true;
    $(".home").click(function() {
      console.log("sdf");

      if (showIn) {
        $(this).css({
          transform: "rotate(-720deg)"
        });
        for (var index = 0; index < 5; index++) {
          $(".icon" + index).css({
            "transition-delay": index * 0.06 + "s",
            transform: "rotate(-720deg)",
            visibility: 'visible',
            transformOrigin: `50% ${index}*12.5% 0`,
            left: 120 - Math.sin((Math.PI * index) / 8) * 120,
            top: 120 - Math.cos((Math.PI * index) / 8) * 120
          });
        }
        setTimeout(function() {
          showIn = false;
        }, 600);
      } else {
        $(this).css({
          transform: "rotate(0deg)"
        });
        $("li").each(function(index) {
          $(this).css({
            transform: "rotate(0deg)",
            left: 120,
            top: 120
          });
        });
        setTimeout(function() {
          showIn = true;
        }, 500);
      }
    });
  }
};
</script>
<style  scoped>
.wrapper {
  position: relative;
  width: 115px;
  height: 200px;
}

li {
  position: absolute;
  list-style: none;
  border-radius: 50%;
  transform: rotate(0deg);
  transition: all 0.5s;
  left: 120px;
  top: 120px;
}

ul {
  position: absolute;
  height: 170px;
  visibility: hidden;
}

.home {
  position: absolute;
  left: 115px;
  bottom: 5px;
  border-radius: 50%;
  transform: rotate(0deg);
  transition: all 0.5s;
}

li a img {
  border-radius: 50%;
}
</style>

