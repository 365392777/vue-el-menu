<!--
 * @Author: your name
 * @Date: 2020-08-13 09:01:24
 * @LastEditTime: 2020-08-13 10:47:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \admin\src\components\Menu\index.vue
-->
<template>
  <!--  背景颜色：此备注说明用，实际开发需要删除，否则报错 -->
  <!-- 字体颜色：此备注说明用，实际开发需要删除，否则报错 -->
  <!-- 只打开一个菜单：此备注说明用，实际开发需要删除，否则报错 -->
  <div>
    <div class="tools" @click="toggleClick">
      <i :class="icon"></i>
    </div>
    <el-menu router class="el-menu-vertical-demo" :collapse="isCollapse" background-color="rgb(73, 80, 96)" text-color="rgba(255,255,255,0.7)" unique-opened>
      <Menu :routerList="routers"></Menu>
    </el-menu>
  </div>
</template>



<script>
import Menu from './menus'; //引进菜单模板
export default {
  data () {
    return {
      isCollapse: false,//菜单展开功能
      unCollapse: {
        width: '220px'
      },
      collapse: {
        width: '50px'
      },
      unCollapseMain: {
        paddingLeft: '220px'
      },
      collapseMain: {
        paddingLeft: '50px'
      },
    };
  },
  components: {
    Menu
  },
  computed: {
    routers () {
      return this.$router.options.routes[2].children
    },
    icon: function () {
      return this.isCollapse ? 'el-icon-right' : 'el-icon-back'
    }
  },
  methods: {
    toggleClick () {
      this.isCollapse = !this.isCollapse
    },
  }
}
</script>

<style  lang="scss">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.tools {
  cursor: pointer;
  text-align: center;
  font-size: 20px;
  height: 30px;
  line-height: 30px;
  color: pink;
  background-color: rgb(24, 9, 78);
}
</style>