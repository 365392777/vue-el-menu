/* eslint-disable prefer-promise-reject-errors */
import axios from 'axios'
import router from '@/router/index.js'
import { Message, Loading } from 'element-ui'

// create asios 实例
const service = axios.create({
  // baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  baseURL: 'https://unidemo.dcloud.net.cn/', // url = base url + request url
  timeout: 15000 // request timeout
})

// //开始加载动画
// let loading;
// function startLoading() {
//   loading = Loading.service({
//     lock: true, //是否锁定
//     spinner: "el-icon-loading",
//     text: '加载中...',//加载中需要显示的文字
//     background: 'rgba(0,0,0,.7)',//背景颜色
//   });
// }

// //结束加载动画
// function endLoading() {
//   loading.close();
// }

// 请求拦截器
service.interceptors.request.use(
  config => {
    // startLoading();//请求时的加载动画
    var token = sessionStorage.getItem('token')
    if (token) {
      config.headers.Authorization = token
      config.headers['Content-type'] = 'application/json'
    }
    return config
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  response => {
    // endLoading();//结束加载动画
    const res = response.data
    // 对响应数据做点什么
    // 无权限
    if (res.noauthority) {
      Message({
        message: res.msg || '无权限',
        type: 'error',
        duration: 3 * 1000
      })
      router.push('/error/403')
      return
    }
    if (res.logintimeout || res.code == -99) {
      Message({
        message: res.msg || '登录超时,正在跳转登录页面',
        type: 'error',
        duration: 3 * 1000
      })
      // 跳转登录页面
      localStorage.clear()
      sessionStorage.clear()
      router.push('/login')
      return
    }
    // if (res.code !== 200) {
    //   Message({
    //     message: res.msg || '接口错误，请联系后端程序猿',
    //     type: 'error',
    //     duration: 3 * 1000
    //   })
    //   return Promise.reject() // 拦截code不是0，执行cathe
    // }
    return res
  },
  error => {
    // endLoading(); //结束加载动画
    // 对响应错误做点什么
    Message({
      message: error,
      type: 'error',
      duration: 3 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
