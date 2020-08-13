<template>
  <div>
    <template v-for="item in routerList">
      <el-submenu v-if="item.hasOwnProperty('children')&&item.children.length>0" :key="item.path" :index="item.path">
        <template slot="title" style="padding-left:10px">
          <i class="el-icon-menu"></i>
          <span slot="title">{{ item.name}}</span>
        </template>
        <!--  如果有子级数据使用递归组件 -->
        <Menu :routerList="item.children"></Menu>
      </el-submenu>
      <el-menu-item v-else :index="item.path" :key="item.path">
        <i :class="item.icon"></i>
        <span>{{item.name}}</span>
      </el-menu-item>
    </template>
  </div>
</template>

<script>
export default {
  props: ['routerList'],
  name: 'Menu',//模板名称
  created () {
    console.log(this.routerList, 'routerList')
  },
}
</script><style  lang="scss">
.el-menu--collapse span,
.el-menu--collapse i.el-submenu__icon-arrow {
  height: 0;
  width: 0;
  overflow: hidden;
  visibility: hidden;
  display: inline-block;
}
</style>