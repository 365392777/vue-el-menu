<template>
  <div>
    <!-- <abuo></abuo> -->
    <!-- 整个大盒子  vue组件封装调用-->
    <div
      class="box"
      ref="box"
      @click="Movement"
      @mouseover="changeMask"
      @mouseout="changeMask2"
      @mousemove="changeMask3"
    >
      <div class="small" ref="smallImg">
        <!--小图  商品 -->
        <img src="@/assets/iphoneX.jpg" alt />
        <!--遮挡层,黄色的小方块-->
        <div class="mask" ref="mask"></div>
      </div>
      <!--大层-->
      <div class="big" ref="big">
        <!--大图-->
        <img src="@/assets/iphoneX.jpg" alt class="big-img" ref="bigImg" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  components: {
  },
  methods: {
    Movement () {
    },
    // touchStart (e) {
    //   // console.log(e);
    //   this.startX = e.targetTouches[0].clientX
    //   this.startY = e.targetTouches[0].clientY
    //   console.log(this.startX)
    //   // console.log(this.startY);
    // },
    // 鼠标移入
    changeMask () {
      //   console.log(123)
      this.$refs.mask.style.display = 'block'
      this.$refs.big.style.display = 'block'
    },
    // 鼠标离开
    changeMask2 () {
      this.$refs.mask.style.display = 'none'
      this.$refs.big.style.display = 'none'
    },
    changeMask3 (ev) {
      //   var smallImg = document.querySelector('.small img')
      var x =
        ev.pageX - this.$refs.box.offsetLeft - this.$refs.mask.offsetWidth / 2
      var y =
        ev.pageY - this.$refs.box.offsetTop - this.$refs.mask.offsetHeight / 2
      /* 右边边界判断 */
      if (x > this.$refs.box.offsetWidth - this.$refs.mask.offsetWidth) {
        x = this.$refs.box.offsetWidth - this.$refs.mask.offsetWidth
      }
      /* 下边界 */
      if (y > this.$refs.box.offsetHeight - this.$refs.mask.offsetHeight) {
        y = this.$refs.box.offsetHeight - this.$refs.mask.offsetHeight
      }
      /* 左边界 */
      if (x < 0) {
        x = 0
      }
      /* 上边界 */
      if (y < 0) {
        y = 0
      }
      /* 设置遮罩盒子移动 */
      this.$refs.mask.style.left = x + 'px'
      this.$refs.mask.style.top = y + 'px'

      /* 设置大图片移动 */
      this.$refs.bigImg.style.left =
        (this.$refs.bigImg.offsetWidth / this.$refs.smallImg.offsetWidth) *
          x *
          -1 +
        'px'
      this.$refs.bigImg.style.top =
        (this.$refs.bigImg.offsetHeight / this.$refs.smallImg.offsetHeight) *
          y *
          -1 +
        'px'
    }
  },
  mounted () {
    // console.log(111)
  }
}
</script>

<style lang="less" scoped>
.box {
  width: 350px;
  height: 350px;
  // margin: 100px;
  border: 1px solid #ccc;
  position: relative;
  .big {
    width: 400px;
    height: 400px;
    position: absolute;
    top: 0;
    left: 360px;
    border: 1px solid #ccc;
    overflow: hidden;
    display: none;
    //   img{
    //       width: 100%;
    //       height: 100%;
    //   }
  }

  .mask {
    width: 175px;
    height: 175px;
    background: rgba(255, 255, 0, 0.4);
    position: absolute;
    top: 0px;
    left: 0px;
    /* 把鼠标指针换成移动图标 */
    cursor: move;
    display: none;
  }
  .small {
    position: relative;
    height: 350px;
    width: 350px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .active .mask,
  .active .big {
    display: block;
  }
  .big img {
    /* 相对定位：相对自己原本的位置定位，原来的位置保留的 */
    position: absolute;
    /* 绝对定位：基于定位父元素定位，脱离标准流 */
    /*position: absolute;*/
  }
}
</style>
