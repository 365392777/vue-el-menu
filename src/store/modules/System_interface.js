// 系统界面===================================================
// 系统维护  基础配置模块
import {
  systemList
} from '@/api/modules/System_interface/System_interface.js'

const state = {}
const mutations = {}
const actions = {
  // 获取系统列表
  systemList({
                 commit
               }, data={}) {
    return new Promise((resolve, reject) => {
      systemList(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },
  // addsimapi({
  //             commit
  //           }, data={}) {
  //   return new Promise((resolve, reject) => {
  //     addsimapi(data).then(res => {
  //       resolve(res)
  //     }, error => {
  //       reject(error)
  //     })
  //   })
  // },
  // //
  // saveapi({
  //           commit
  //         }, data={}) {
  //   return new Promise((resolve, reject) => {
  //     saveapi(data).then(res => {
  //       resolve(res)
  //     }, error => {
  //       reject(error)
  //     })
  //   })
  // },
  // // 字典明细列表
  // detailList({
  //              commit
  //            }, data={}) {
  //   return new Promise((resolve, reject) => {
  //     detailList(data).then(res => {
  //       resolve(res)
  //     }, error => {
  //       reject(error)
  //     })
  //   })
  // },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
