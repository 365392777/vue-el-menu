<template>
  <div>
    <span>子组件</span>---
    <span>{{list}}</span>
    <!-- 改变父组件的值要通过 $emit('magnify')方法-->
    <button @click="$emit('magnify')">增大父组件的文字</button>
      <br>
      <!-- 点击向父组件传值 -->
    <button @click="sendMsg">子传值</button>
  </div>
</template>

<script>
export default {
  props: ['list'],
  data () {
    return {
      msg: '我是子组件传递的值'
    }
  },
  mounted () {
    // this.sendMsg()
  },
  methods: {
    sendMsg () {
      // func: 是父组件指定的传数据绑定的函数，this.msg:子组件给父组件传递的数据
      this.$emit('func', this.msg)
    },
    run () {
      alert('我是子组件的方法')
    }
  }
}
</script>

<style>

</style>
