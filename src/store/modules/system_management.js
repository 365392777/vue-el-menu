// 系统维护  管理类配置
import {
  administer,
    administerlist,
    DeptStuffList
} from '@/api/modules/system_maintenance_system/Management.js'
const state = {}

const mutations = {}
const actions = {
  administer({
    commit
  }, data) {
    return new Promise((resolve, reject) => {
      administer(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },
  administerlist({
    commit
  }, data) {
    return new Promise((resolve, reject) => {
      administerlist(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },
  DeptStuffList({
    commit
  }, data) {
    return new Promise((resolve, reject) => {
      DeptStuffList(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  }

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
