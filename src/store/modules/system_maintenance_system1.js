// 系统维护
import {
  //基础配置-药品
  DrugList,
  AddDrugsList,
  SaveDrugsList,
  DeleleDrugsList,
  onoffDrugsList,

  // 基础配置-常用诊断
  DiagnosisList,
  AddDiagnosisList,
  SaveDiagnosisList,
  DeleleDiagnosisList,
  SaupDiagnosisList,
  TableHeaderName,
  TableHeaderList,
  typeSelectList,

  //管理类配置-病区管理
  InpatientAreaList,
  AddInpatientAreaList,
  SaveInpatientAreaList,
  DeleleInpatientAreaList,
  SaupInpatientAreaList,
  KeshiInpatientAreaList,

  // 管理类配置-病床管理
  BedList,
  AddBedList,
  SaveBedList,
  DeleleBedList,
  SaupBedList,
  divisionDown,
  wardInpatient,
  handPayment,
  divisionIdDown,

} from '@/api/modules/system_maintenance_system/system_maintenance_system1.js'

const state = {

}
const mutations = {

}
//基础配置-药品管理---------------------------------------------------------------------
const actions = {
   //常用诊断下拉框
   typeSelectList({
  commit
}, data) {

  return new Promise((resolve, reject) => {
    typeSelectList(data).then(res => {
      resolve(res)
    }, error => {
      reject(error)
    })
  })
},



 //常用诊断列表
 TableHeaderList({
  commit
}, data) {

  return new Promise((resolve, reject) => {
    TableHeaderList(data).then(res => {
      resolve(res)
    }, error => {
      reject(error)
    })
  })
},




  //常用诊断表头
  TableHeaderName({
    commit
  }, data) {

    return new Promise((resolve, reject) => {
      TableHeaderName(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },

  // 列表接口
  DrugList({
    commit
  }, data) {

    return new Promise((resolve, reject) => {
      DrugList(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },
  //新增 &&编辑
  AddDrugsList({
    commit
  }, data) {

    return new Promise((resolve, reject) => {
      AddDrugsList(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },
  //保存药品信息
  SaveDrugsList({
    commit
  }, data) {
    return new Promise((resolve, reject) => {
      SaveDrugsList(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },
  //删除药品信息
  DeleleDrugsList({
    commit
  }, data) {
    return new Promise((resolve, reject) => {
      DeleleDrugsList(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },
  //启停药品信息
  onoffDrugsList({
    commit
  }, data) {
    return new Promise((resolve, reject) => {
      onoffDrugsList(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },

  // 基础配置-常用诊断------------------------------------------------------------------------
  // 列表接口
  DiagnosisList({
    commit
  }, data) {
    return new Promise((resolve, reject) => {
      DiagnosisList(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },
  //新增 &&编辑
  AddDiagnosisList({
    commit
  }, data = {}) {

    return new Promise((resolve, reject) => {
      AddDiagnosisList(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },

  //保存常信息
  SaveDiagnosisList({
    commit
  }, data) {
    return new Promise((resolve, reject) => {
      SaveDiagnosisList(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },
  //删除常用诊断信息
  DeleleDiagnosisList({
    commit
  }, data) {
    return new Promise((resolve, reject) => {
      DeleleDiagnosisList(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },

  //停启常用诊断信息
  SaupDiagnosisList({
    commit
  }, data) {
    return new Promise((resolve, reject) => {
      SaupDiagnosisList(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },
  // 管理类配置-病床管理-----------------------------------------------------------------------------


  //根据病床获取科室 
  divisionIdDown({
    commit
  }, data) {
    return new Promise((resolve, reject) => {
      divisionIdDown(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },


  // 列表接口
  BedList({
    commit
  }, data) {
    return new Promise((resolve, reject) => {
      BedList(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },

  //新增 &&编辑
  AddBedList({
    commit
  }, data = {}) {

    return new Promise((resolve, reject) => {
      AddBedList(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },

  //保存疾病信息
  SaveBedList({
    commit
  }, data) {
    return new Promise((resolve, reject) => {
      SaveBedList(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },
  //删除疾病信息
  DeleleBedList({
    commit
  }, data) {
    return new Promise((resolve, reject) => {
      DeleleBedList(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },

  //停启疾病信息
  SaupBedList({
    commit
  }, data) {
    return new Promise((resolve, reject) => {
      SaupBedList(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },

  // 管理类配置-病区管理----------------------------------------------------------------------
  // 列表接口
  InpatientAreaList({
    commit
  }, data) {
    return new Promise((resolve, reject) => {
      InpatientAreaList(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },
  //新增 &&编辑
  AddInpatientAreaList({
    commit
  }, data = {}) {

    return new Promise((resolve, reject) => {
      AddInpatientAreaList(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },
  //病区的所有科室
  KeshiInpatientAreaList({
    commit
  }, data) {
    return new Promise((resolve, reject) => {
      KeshiInpatientAreaList(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },
  //保存病区信息
  SaveInpatientAreaList({
    commit
  }, data) {
    return new Promise((resolve, reject) => {
      SaveInpatientAreaList(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },
  //删除病区信息
  DeleleInpatientAreaList({
    commit
  }, data) {
    return new Promise((resolve, reject) => {
      DeleleInpatientAreaList(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },

  //停启病区信息
  SaupInpatientAreaList({
    commit
  }, data) {
    return new Promise((resolve, reject) => {
      SaupInpatientAreaList(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },

  // 获取科室下拉
  divisionDown({
    commit
  }, data) {
    return new Promise((resolve, reject) => {
      divisionDown(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },
  // 获取病区下拉
  wardInpatient({
    commit
  }, data) {
    return new Promise((resolve, reject) => {
      wardInpatient(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },
  
// 获取床位费用
  handPayment({
    commit
  }, data) {
    return new Promise((resolve, reject) => {
      handPayment(data).then(res => {
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
