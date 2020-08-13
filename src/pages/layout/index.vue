<template>
  <div class="index-container">
    <el-container>
      <el-header>
        <img src="../../assets/icom.png" alt />
        <div class="operate">
          <el-dropdown class="exit" trigger="click">
            <span class="el-dropdown-link">
              <!-- {{ loginName }} -->
              系统操作
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <i class="el-icon-edit"></i>
                修改密码
              </el-dropdown-item>
              <el-dropdown-item @click.native="handleClose">
                <i class="el-icon-info"></i>
                退出登录
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>
      <el-container>
        <el-aside width="auto">
          <!-- 左侧导航 reki -->
          <!-- <asideBar class="sidemeus"></asideBar> -->
          <asideBar></asideBar>
        </el-aside>
        <el-main>
          <div>
            <!-- 标签路由 -->
            <top-tags></top-tags>
          </div>

        <!-- 面包屑导航 -->
          <!-- <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item v-for="item in levelList" :key="item.path">{{item.name}}</el-breadcrumb-item>
          </el-breadcrumb> -->

          <!-- 右侧显示区域   <router-view></router-view>-->
          <!-- <keep-alive> -->
          <appMain></appMain>
          <!-- </keep-alive> -->
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// import asideBar from './asideBar'
import asideBar from '@/components/Menu/index'
import tagsView from '../../components/tabs/tagsView'
import appMain from './appMain'

export default {
  name: 'index',
  components: {
    asideBar,
    appMain,
    // tagsView
    'top-tags': tagsView
  },
  data () {
    return {
      levelList: null,
      isCollapse: false
    }
  },
  mounted () {
    // console.log(document.cookie)
    // console.log(this.$store.state)
    console.log(sessionStorage.getItem('client_userinfo'), '首页')
  },
  // computed: {},
  // 计算属性

  watch: {
    $route () {
      this.getBreadcrumb()
    }
  },
  methods: {
    getBreadcrumb () {
      // $route.matched一个数组 包含当前路由的所有嵌套路径片段的路由记录
      const matched = this.$route.matched.filter((item) => item.name)
      this.levelList = matched
    },
    handleClose () {
      this.$confirm('确定退出当前账号吗？', '提示', { type: 'warning' })
        .then(_ => {
          // localStorage.removeItem('client_userinfo')
          // localStorage.removeItem('client_token')
          // localStorage.removeItem('user')
          this.$router.push('/login')
        })
        .catch(_ => {})
    }
  },
  created () {
    this.getBreadcrumb()
  }

}
</script>

<style lang="scss" scoped>
body > .el-container {
  // margin-bottom: 40px;
}
// .index-container {
//   height: 100%;
//   overflow: hidden;
// }
.index-container > .el-container {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 0;
}
/deep/.el-header {
  // background-color: #3a529d;
  background-color: #304156;
  position:relative;
  display: table-cell;
  img {
    // height: 50px;
    margin-top: 4px;
  }
  .el-dropdown{
  color: #e9eef3;
  font-size:18px;
}
.operate{
  position: absolute;
  right:80px;
  top: 40%;
}
}

.el-footer {
  // background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  // background-color: #D3DCE6;
  background-color: #304156;
  color: #333;
  // text-align: center;
  height: 100%;
}

.el-main {
  background-color: #e9eef3;
  // background-color: #e9eef3;
  // background-color: pink;
  // color: #333;
  // text-align: center;
  // background-color: pink;
}

</style>
