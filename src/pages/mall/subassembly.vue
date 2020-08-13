<template>
  <div class="box" style="overflow-x:hidden;">
    <div class="minx">
      <span :style="{fontSize:fontSize + 'px'}">父组件</span>
      <div>{{text}}</div>
      <sub-level :list="list" @magnify="handle" @func="getMsgFormSon" ref="header"></sub-level>
    </div>
  </div>
</template>

<script>
import subLevel from './sublevel'
export default {
  components: { subLevel },
  data () {
    return {
      list: '我是父组件传递的数据',
      fontSize: 10,
      text: ''
    }
  },
  mounted () {
    // this.getMsgFormSon()
  },
  methods: {
    handle () {
      // this.fontSize += 5

      // 函数防抖 防抖动就是，在多次触发时（不间断点击N秒），点击停止3秒后触发函数
      let timer = false
      clearTimeout(timer)
      timer = setTimeout(() => {
        this.fontSize += 5
        console.log('执行买的http请求')
        console.log(timer)
      }, 2000)

      // 函数节流 节流是，在多次触发时（不间断点击N秒），每隔3秒触发一次函数，scroll滚动事件等
      // let flag = true
      // console.log('买')
      // if (!flag) { return }
      // flag = false
      // // 隔2秒执行一次
      // setTimeout(() => {
      //   flag = true
      //   this.fontSize += 5
      //   console.log('执行买的http请求')
      // }, 2000)
    },
    // 子组件传递值的方法
    getMsgFormSon (data) {
      // console.log(data, 'data')
      // this.text = data
      this.text = this.$refs.header.msg // 通过ref调用子组件的值
      // this.$refs.header.run() // 通过ref调用子组件的方法
    }
  }
}
</script>

<style>
.box{
  /* overflow: hidden; */
  height: calc(100vh - 135px);
  overflow:scroll;
  /* overflow-y:scroll;overflow-y: hidden */
}
.minx{
  height: 1000px;
  background-color: pink;
  /* overflow-y:scroll;overflow-y: hidden; */
}
</style>
