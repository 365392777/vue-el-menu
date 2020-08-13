<template>
  <div>
    <template v-for="(value,index) in this.menuData">
      <!-- 如果Chiled的数量不等于0，则渲染展开的菜单-->
      <el-submenu :index="value.Name" v-if="value.Chiled.length!=0" :key="index">
        <template slot="title">
          <i :class="value.Icon"></i>
          <span slot="title">{{value.Name}}</span>
        </template>
        <MenuTree :menuData="value.Chiled"></MenuTree>
      </el-submenu>
      <!-- Chiled为0，则渲染不展开的菜单项 -->
      <el-menu-item :key="index" @click="changMenu(value)" :title="value.Name" :index="value.ViewPath" v-else>
        <i :class="value.Icon"></i>
        <span slot="title">{{value.Name}}</span>
      </el-menu-item>
    </template>
  </div>
</template>

<script>
export default {
  props: ['menuData'],
  // inject: ['changMenu'],
  name: 'MenuTree',
  data () {
    return {}
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
/deep/ .el-menu-item {
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
