// EMR配置
import {
  treemenu,
  classification,
  preserve,
  deletesaDel,
  formclassify,
  addsimapi,
  dropdownGets,
  historyPreserve,
  apimedicalapi,
  medicalCase
} from '@/api/modules/emr_management/emr_management.js'
const state = {}

const mutations = {}

const actions = {
  // 树形菜单
  treemenu({
    commit
  }, data={}) {
    return new Promise((resolve, reject) => {
      treemenu(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },
  // 表格数据
  formclassify({
    commit
  }, data={}) {
    return new Promise((resolve, reject) => {
      formclassify(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },
  // 病历分类
  classification({
    commit
  }, data={}) {
    return new Promise((resolve, reject) => {
      classification(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },
  // 获取模板页面所有下拉框
  dropdownGets({
    commit
  }, data={}) {
    return new Promise((resolve, reject) => {
      dropdownGets(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },
  // 新增
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
  // 电子病历编辑新增api
  apimedicalapi({
    commit
  }, data={}) {
    return new Promise((resolve, reject) => {
      apimedicalapi(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },
  // 保存
  preserve({
    commit
  }, data={}) {
    return new Promise((resolve, reject) => {
      preserve(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },
  // 电子病历编辑保存
  medicalCase({
    commit
  }, data={}) {
    return new Promise((resolve, reject) => {
      medicalCase(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },
  // 病历保存
  historyPreserve({
    commit
  }, data={}) {
    return new Promise((resolve, reject) => {
      historyPreserve(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },
  // 删除
  deletesaDel({
    commit
  }, data) {
    return new Promise((resolve, reject) => {
      deletesaDel(data).then(res => {
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
