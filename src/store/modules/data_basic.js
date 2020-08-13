// 公共下拉框
import {
  optionType,
  getSourceType,
  deleteInfo
} from '@/api/modules/basic_data_system/basic.js'

const state = {

}
const mutations = {

}

const actions = {
  optionType({
                     commit
                   }, data = {}) {
    return new Promise((resolve, reject) => {
      optionType(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })

  },
  getSourceType({
               commit
             }, data = {}) {
    return new Promise((resolve, reject) => {
      getSourceType(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },

  deleteInfo({
                  commit
                }, data = {}) {
    return new Promise((resolve, reject) => {
      deleteInfo(data).then(res => {
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




