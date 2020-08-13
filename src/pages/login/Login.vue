<template>
  <div class="bg">
    <el-card class="login-form-layout">
      <el-form
        autocomplete="on"
        :model="loginForm"
        :rules="loginRules"
        ref="loginForm"
        label-position="left"
      >
        <div style="text-align: center">
          <!-- <svg-icon icon-class="login-mall" style="width: 56px;height: 56px;color: #409EFF"></svg-icon> -->
        </div>
        <h2 class="login-title color-main">商城管理</h2>
        <el-form-item prop="username">
          <el-input
            name="username"
            type="text"
            v-model="loginForm.username"
            autocomplete="on"
            placeholder="请输入用户名"
          >
            <span slot="prefix">
              <!-- <svg-icon icon-class="user" class="color-main"></svg-icon> -->
            </span>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            name="password"
            :type="pwdType"
            @keyup.enter.native="handleLogin('loginForm')"
            v-model="loginForm.password"
            autocomplete="on"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item style="margin-bottom: 60px">
          <el-button
            style="width: 100%"
            type="primary"
            :loading="loading"
            @click.native.prevent="handleLogin('loginForm')"
          >登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <!-- <img :src="login_center_bg" class="login-center-layout"> -->
    <!-- <img src="../assets/login_center_bg.png" alt class="login-center-layout" /> -->
    <img src="../../assets/login_center_bg.png" alt class="login-center-layout" />
  </div>
</template>

<script>
// import { mapActions } from 'vuex'
// import { USER_SIGNIN } from '../store/state '
import { getCookie } from '@/utils/cookie.js'
// import { getUserInfo } from '@/api/login'

export default {
  name: 'login',
  data () {
    return {
      loginForm: {
        // username: '',
        // password: ''
        username: 'xpzgly',
        password: '123456'
      },
      loginRules: {
        // username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        // password: [{ required: true, trigger: 'blur', validator: validatePass }]
      },
      loading: false,
      pwdType: 'password',
      dialogVisible: false,
      supportDialogVisible: false,
      rules: {
        username: [
          { required: true, message: '请输入账号', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
          // { min: 3, max: 5, message: '长度在 6 到 18个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // ...mapActions([USER_SIGNIN]),
    // 登录
    async handleLogin () {
      this.$refs.loginForm.validate(async (valid) => {
        if (valid) {
          if (
            this.loginForm.username === 'xpzgly' &&
            this.loginForm.password === '123456'
          ) {
            sessionStorage.setItem('client_userinfo', JSON.stringify(this.loginForm))
            // this.$router.replace({ path: '/layout/mall' })
            this.$router.push('/forms')
            // 根据store中set_token方法将token保存至localStorage/sessionStorage中，data["Authentication-Token"]，获取token的value值
            // this.$store.state.TOKEN = this.loginForm.password
            // this.$store.commit('GET_TOKEN', this.loginForm.password['Authentication-Token'])
            // 根据api接口获取token
          } else {
            this.$notify.error({
              title: '提示',
              message: '账号密码错误',
              duration: 2000
            })
          }
          // console.log(valid)
          // let res = await getUserInfo()
          // console.log(res)
          // let res = await getUserInfo({
          //   loginName: this.loginForm.username,
          //   password: this.loginForm.password
          // })
          // console.log(res)
          //   // console.log(res.content.token)
          //   if (res.data.code === 1) {
          //     // 把登录信息存到VUEX
          //     this.USER_SIGNIN(this.loginForm)
          //     // 把信息存储到本地
          //     localStorage.setItem('client_userinfo', JSON.stringify(res.data.content))
          //     localStorage.setItem('client_token', JSON.stringify(res.data.content.token))
          //     this.$router.replace({ path: '/admin/account-list' })
          //     console.log(123)
          //   } else {
          //     this.$notify.error({
          //       title: '提示',
          //       message: '账号密码错误',
          //       duration: 2000
          //     })
          //   }
          // } else {
          //   console.log('参数验证不合法！')
          //   return false
        }
      })
    }
    // x (formName) {
    //   this.$refs[formName].resetFields()
    // }
  },
  mounted () {
    console.log(this.$router.options.routes, 'login')
    // let token = localStorage.setItem('client_token', JSON.stringify(res.data.content.token))
    // let user = JSON.parse(localStorage.getItem('client_userinfo'))
    // localStorage.setItem('client_token', user.token)
    // console.log(token)
    // let res = getUserInfo({
    //   loginName: 'xpzgly',
    //   password: 'xpz2019#@!'
    // })
    // console.log(user.token)
    // console.log(this.$store.state)
  }
}
</script>

<style lang="less" scoped>
.bg {
  // height: 100%;
  // width: 100%;
  // position: relative;
  // overflow: hidden;
  // .bgi{
  // height: 100%;
  // width: 100%;
  // background:url("../assets/img/20160422190539_571a0553ef3be.jpg") no-repeat;
  // background-size: cover;
  // position: absolute; ;
  // }
  .login {
    width: 300px;
    margin: 15% auto;
  }
}
.login-form-layout {
  position: absolute;
  left: 0;
  right: 0;
  width: 360px;
  margin: 140px auto;
  border-top: 10px solid #409eff;
}
.login-center-layout {
  background: #409eff;
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  margin-top: 200px;
}
</style>
