import {
  $table,
  // $getSelect,
  $getSelectex,
  $getDefaultInfo,
  $saveData,
  $delete,
  $update,
  $getListPage
} from '@/api/common.js'

const state = {

}

const mutations = {}

const actions = {
  $tablea ({
    commit
  }, data = {}) {
    return new Promise((resolve, reject) => {
      $table(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },
  $table ({
    commit
  }, data = {}) {
    return new Promise((resolve, reject) => {
      $table(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },
  $getSelectex ({
    commit
  }, data = {}) {
    return new Promise((resolve, reject) => {
      $getSelectex(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },
  $getDefaultInfo ({
    commit
  }, data = {}) {
    return new Promise((resolve, reject) => {
      $getDefaultInfo(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },
  $saveData ({
    commit
  }, data = {}) {
    return new Promise((resolve, reject) => {
      $saveData(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },
  $delete ({
    commit
  }, data = {}) {
    return new Promise((resolve, reject) => {
      $delete(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },
  $update ({
    commit
  }, data = {}) {
    return new Promise((resolve, reject) => {
      $update(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },
  $getListPage ({
    commit
  }, data = {}) {
    return new Promise((resolve, reject) => {
      $getListPage(data).then(res => {
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
