const mutations = {
// 前面两个路由
  addTab (state, componentName) {
    state.openedTab.push(componentName)
  },
  changeTab (state, componentName) {
    state.activeTab = componentName
  },

  // 设置用户数据
  setUserInfo (state, data) {
    state.userInfo = data
  },
  // 清除用户数据
  clearUserInfo (state) {
    state.userInfo = {
      token: '',
      user: {}
    }
  },
  setTheme (state, data) {
    state.theme = data
  },
  setTitleWidth (state, data) {
    state.titleWidth = data
  },
  SET_MENU (state, data) {
    state.MENU = data
  },
  SET_CURRENT_SYSTEM_MENU (state, data) {
    state.CURRENT_SYSTEM_MENU = data
  },
  SET_TOKEN: (state, token) => {
    state.TOKEN = token
  },
  SET_USERINFO: (state, data) => {
    state.USERINFO = data
  }
}
export default mutations
