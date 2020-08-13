// 药房设置
import {

    AddEditInformation,SaveDrugTree,
  
  } from '@/api/modules/pharmacy_system/pharmacy_set.js'
  
  const state = {
  
  }
  const mutations = {
  
  }
  
  const actions = {
          //树状保存接口
          SaveDrugTree({
        commit
      }, data={}) {
return new Promise((resolve, reject) => {
    SaveDrugTree(data).then(res => {
resolve(res)
}, error => {
reject(error)
})
})
},







    //获取药房药库下拉框接口
    AddEditInformation({
                        commit
                      }, data={}) {
      return new Promise((resolve, reject) => {
        AddEditInformation(data).then(res => {
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
  