import Vue from 'vue'
import Vuex from 'vuex'
// import actions from './actions'
// import mutations from './mutations'
Vue.use(Vuex)

/** 使用webpack require方法动态注入modules */
const modulesFiles = require.context('./modules', true, /\.js$/)
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})

const store = new Vuex.Store({
  state: {
    // 表格表头样式配置
    header_cell_style: {
      background: '#DCE3F1',
      // color: 'rgb(51, 51, 51)',
      color: '#3a529d',
      fontWeight: 600,
      height: '25px',
      borderColor: 'rgb(197, 208, 218)'
    },
    MenuTheme: '#666', // 主题配色
    MENU: [], // 菜单数据
    CURRENT_SYSTEM_MENU: {}, // 当前系统菜单数据
    TOKEN: null,
    USERINFO: {}
    // set_token: ''
  },
  getters: {
    GET_TOKEN: state => {
      return state.TOKEN
    }
  },
  // actions,
  // mutations,
  modules
})
export default store
// export default new Vuex.Store({
//   state: {
//   },
//   mutations: {
//   },
//   actions: {
//   },
//   modules: {
//   }
// })
