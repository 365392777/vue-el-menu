// 药房领药模块
import {
  getUserInfo,
  infoSave,
  deleteArritability,
  patientTab,
  patientList,
  deletePatient,
  subscribeList,
  registerTab,
  registerList,
  doctorList,
  modalPatientList,
  editPatientCard,
  chargeList,
  paientCharge
} from '@/api/modules/charge_system/charge_systemrigsterBasic.js'

const state = {}
const mutations = {}

const actions = {
// 获取就诊人信息列表
  getUserInfo({
                commit
              }, data = {}) {
    return new Promise((resolve, reject) => {
      getUserInfo(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },
  // 保存就诊信息
  infoSave({
             commit
           }, data = {}) {
    return new Promise((resolve, reject) => {
      infoSave(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },

  //删除过敏信息
  deleteArritability({
                       commit
                     }, data = {}) {
    return new Promise((resolve, reject) => {
      deleteArritability(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },

  // 就诊类型
  registerTab({
                commit
              }, data = {}) {
    return new Promise((resolve, reject) => {
      registerTab(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },


  // 预约列表
  registerList({
                 commit
               }, data = {}) {
    return new Promise((resolve, reject) => {
      registerList(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })

  },


  // 科室列表
  subscribeList({
                  commit
                }, data = {}) {
    return new Promise((resolve, reject) => {
      subscribeList(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },

  // 排班医生列表
  doctorList({
               commit
             }, data = {}) {
    return new Promise((resolve, reject) => {
      doctorList(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },


  // 患者弹窗列表
  modalPatientList({
                     commit
                   }, data = {}) {
    return new Promise((resolve, reject) => {
      modalPatientList(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },


  // 获取患者列列表表头信息
  patientTab({
               commit
             }, data = {}) {
    return new Promise((resolve, reject) => {
      patientTab(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },
  // 患者列表
  patientList({
                commit
              }, data = {}) {
    return new Promise((resolve, reject) => {
      patientList(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },


  // 删除患者
  deletePatient({
                  commit
                }, data = {}) {
    return new Promise((resolve, reject) => {
      deletePatient(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },

  // 启用 注销就诊卡
  editPatientCard({
                    commit
                  }, data = {}) {
    return new Promise((resolve, reject) => {
      editPatientCard(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },

  chargeList({
               commit
             }, data = {}) {
    return new Promise((resolve, reject) => {
      chargeList(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },

  paientCharge({
      commit
    }, data = {}) {
  return new Promise((resolve, reject) => {
    paientCharge(data).then(res => {
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




