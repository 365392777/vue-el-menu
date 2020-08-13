import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '../src/assets/icon-font/iconfont.css'
// 全局引入组件
// import Menu from '@/components/Menu'

Vue.config.productionTip = false
Vue.use(Element, {
  size: 'mini',
  zIndex: 3000
})

const components = [
  // Menu
]
router.beforeEach((to, from, next) => {
  if (to.name) {
    document.title = to.name
  }
  next()
})

// 遍历注册全局组件
// components.forEach(component => {
//   Vue.component(component.name, component)
// })
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
