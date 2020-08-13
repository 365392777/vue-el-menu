<template>
  <div>

  </div>
</template>

<script>
// import asd from '../mall/forms'
export default {
  data () {
    return {

    }
  },
  mounted () {
    this.getter()
  },
  methods: {
    // getter 和  setter
    getter () {
      /**
       *  get为取值，set为赋值
       *
       *  getter 和  setter 可以监测对象的值，当我修改了这个对象的属性时，要去做一些事，这就要用到getter和setter了。
       *
       * isMe；此时，isMe是没有name属性的，当我们调用isMe.name时，我们会进入到get name(){...}中，先判断isMe是否有name属性，答案是否定的，那麽就添加一个name属性，并给它赋值："你还没有取名"；如果有name属性，那就返回name属性
       *
       */
      var Coder = function () {
        var that = this
        console.log(that)
        return {
          get name () {
            if (that.name) {
              return that.name
            }
            return '你还没有取名+name'
          },
          set name (val) {
            console.log('你把名字修成了' + val)
            that.name = val
          }
        }
      }
      var isMe = new Coder()
      console.log(isMe.name)
      isMe.name = '周神'
      console.log(isMe.name)
      console.log(isMe)
    }
  }
}
</script>

<style>

</style>
