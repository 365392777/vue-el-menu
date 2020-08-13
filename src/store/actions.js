import {
  systemList
} from '@/api/modules/System_interface/System_interface.js'

import {
  Login,
  outLogin
} from '@/api/modules/user.js'

const actions = {
  systemList ({
    commit
  }, data = {}) {
    return new Promise((resolve, reject) => {
      systemList(data).then(res => {
        commit('SET_MENU', res.data)
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },
  Login ({
    commit
  }, data = {}) {
    return new Promise((resolve, reject) => {
      Login(data).then(res => {
        sessionStorage.setItem('token', res.data.Token)
        sessionStorage.setItem('userInfo', JSON.stringify(res.data))
        commit('SET_TOKEN', res.data.Token)
        commit('SET_USERINFO', res.data)
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },

  outLogin ({
    commit
  }, data = {}) {
    return new Promise((resolve, reject) => {
      outLogin(data).then(res => {
        commit('SET_TOKEN', '')
        commit('USERINFO', '')
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('userInfo')
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  }
}
export default actions
