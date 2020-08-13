// 系统维护  基础配置模块
import {
  dictionaries,
  addsimapi,
  saveapi,
  detailList,
  dictionariesList1,
  startSaUp,
  treeMenuList
} from '@/api/modules/system_maintenance_system/basics_put.js'
const state = {}

const mutations = {}
const actions = {
  // 字典分类
  dictionaries({
    commit
  }, data={}) {
    return new Promise((resolve, reject) => {
      dictionaries(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },

  // 树形菜单
  treeMenuList({
      commit
    }, data={}) {
  return new Promise((resolve, reject) => {
    treeMenuList(data).then(res => {
      resolve(res)
    }, error => {
      reject(error)
    })
  })
},
  addsimapi({
    commit
  }, data={}) {
    return new Promise((resolve, reject) => {
      addsimapi(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },
  //
  saveapi({
    commit
  }, data={}) {
    return new Promise((resolve, reject) => {
      saveapi(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },
  //右表格 字典明细列表
  detailList({
    commit
  }, data={}) {
    return new Promise((resolve, reject) => {
      detailList(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },
  // 左表格 字典明细列表
  dictionariesList1({
    commit
  }, data={}) {
    return new Promise((resolve, reject) => {
      dictionariesList1(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },
  // 启停字典域
  startSaUp({
    commit
  }, data={}) {
    return new Promise((resolve, reject) => {
      startSaUp(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
