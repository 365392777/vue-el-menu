// 药库系统
import {
  // 公共类---------------------------------------------
  Select,//全部的下拉框
  DrugStorageSelect,  // 获取药库下拉框接口
  SupplierSelect,  // 获取供应商接口
  DrugsSelect,  // 药品下拉选择接口
  administratorsSelect, //审批人下拉接口
  DepartmentSelect,// 获取科室下拉框
//入库出库-
  DrugStorageInList,
  $ProcurementPlanList,
  ProcurementDetailedList,
  SaveProcurementDetailedList,
  SaupProcurementDetailedList,
  SaupProcurementDetailedList_again,
  OutboundList,//出库列表
  OutboundListDetailed,
  SaupOutboundListDetailed,//确认出库列表

// 采购计划
  ProcurementPlanList,
  ProcurementPlanDetailedList,
  SaveProcurementPlanDetailedList,
  DeleleProcurementPlanDetailedList,
  SaupProcurementPlanDetailedList,


} from '@/api/modules/drup_storehouse_system/drup_storehouse_system.js'

const state = {

}
const mutations = {

}

const actions = {
  //获取全部下拉框接口
  Select({
                      commit
                    }, data={}) {
    return new Promise((resolve, reject) => {
      Select(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },
  //获取科室下拉框接口
  DepartmentSelect({
                      commit
                    }, data={}) {
    return new Promise((resolve, reject) => {
      DepartmentSelect(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },
  //获取药库下拉框接口
  DrugStorageSelect({
                    commit
                  }, data={}) {
    return new Promise((resolve, reject) => {
      DrugStorageSelect(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },
  // 获取药品下拉接口
  DrugsSelect({
                      commit
                    },data={}) {
    return new Promise((resolve, reject) => {
      DrugsSelect(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },
  // 获取供应商下拉接口
  SupplierSelect({
                   commit
                 }, data={}) {
    return new Promise((resolve, reject) => {
      SupplierSelect(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },
  // 获取供应商下拉接口
  administratorsSelect({
                   commit
                 }, data={}) {
    return new Promise((resolve, reject) => {
      administratorsSelect(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },

//药库管理-入库出库---------------------------------------------------------------------
//   0.采购入库计划列表
  $ProcurementPlanList({
                        commit
                      }, data={}) {
    return new Promise((resolve, reject) => {
      $ProcurementPlanList(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },
// 1.入库查询列表
  DrugStorageInList({
             commit
           }, data={}) {
    return new Promise((resolve, reject) => {
      DrugStorageInList(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },
//   2.采购计划明细信息和入库查询明细信息
  ProcurementDetailedList({
             commit
           }, data={}) {
    return new Promise((resolve, reject) => {
      ProcurementDetailedList(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },
// 3.保存采购入库信息
  SaveProcurementDetailedList({
                                    commit
                                  }, data={}) {
    return new Promise((resolve, reject) => {
      SaveProcurementDetailedList(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },
  // 4.采购确认入库(直接入库)
  SaupProcurementDetailedList({
                                commit
                              }, data={}) {
    return new Promise((resolve, reject) => {
      SaupProcurementDetailedList(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },
  // 5.未确认入库（确认入库）
  SaupProcurementDetailedList_again({
                                commit
                              }, data={}) {
    return new Promise((resolve, reject) => {
      SaupProcurementDetailedList_again(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },
  // 1.  出库列表的获取
  OutboundList({
                      commit
                    }, data={}) {
    return new Promise((resolve, reject) => {
      OutboundList(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },
  // 2.获取出库处理信息
  OutboundListDetailed({
                 commit
               }, data={}) {
    return new Promise((resolve, reject) => {
      OutboundListDetailed(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },
  // 3.保存出库信息
  SaupOutboundListDetailed({
                             commit
                           }, data={}) {
    return new Promise((resolve, reject) => {
      SaupOutboundListDetailed(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },

//药库管理-采购计划---------------------------------------------------------------------
//入库列表
  ProcurementPlanList({
                    commit
                  }, data={}) {
    return new Promise((resolve, reject) => {
      ProcurementPlanList(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },

  //入库明细列表
  ProcurementPlanDetailedList({
                        commit
                      }, data={}) {
    return new Promise((resolve, reject) => {
      ProcurementPlanDetailedList(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },

    //保存入库明细列表
  SaveProcurementPlanDetailedList({
                      commit
                    }, data={}) {
    return new Promise((resolve, reject) => {
      SaveProcurementPlanDetailedList(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },

  //删除入库明细列表
  DeleleProcurementPlanDetailedList({
                  commit
                }, data={}) {
    return new Promise((resolve, reject) => {
      DeleleProcurementPlanDetailedList(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },
  //审核入库计划
  SaupProcurementPlanDetailedList({
                    commit
                  },data={}) {
    return new Promise((resolve, reject) => {
      SaupProcurementPlanDetailedList(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },
//
//   // 基础配置-常用诊断------------------------------------------------------------------------
//   // 列表接口
//   DiagnosisList({
//              commit
//            }, data) {
//     return new Promise((resolve, reject) => {
//       DiagnosisList(data).then(res => {
//         resolve(res)
//       }, error => {
//         reject(error)
//       })
//     })
//   },
//   //新增 &&编辑
//   AddDiagnosisList({
//                  commit
//                }, data={}) {
//
//     return new Promise((resolve, reject) => {
//       AddDiagnosisList(data).then(res => {
//         resolve(res)
//       }, error => {
//         reject(error)
//       })
//     })
//   },
//
//   //保存常信息
//   SaveDiagnosisList({
//                       commit
//                     }, data) {
//     return new Promise((resolve, reject) => {
//       SaveDiagnosisList(data).then(res => {
//         resolve(res)
//       }, error => {
//         reject(error)
//       })
//     })
//   },
//   //删除常用诊断信息
//   DeleleDiagnosisList({
//                     commit
//                   }, data) {
//     return new Promise((resolve, reject) => {
//       DeleleDiagnosisList(data).then(res => {
//         resolve(res)
//       }, error => {
//         reject(error)
//       })
//     })
//   },
//
//   //停启常用诊断信息
//   SaupDiagnosisList({
//                     commit
//                   }, data) {
//     return new Promise((resolve, reject) => {
//       SaupDiagnosisList(data).then(res => {
//         resolve(res)
//       }, error => {
//         reject(error)
//       })
//     })
//   },
// // 管理类配置-病床管理-----------------------------------------------------------------------------
//   // 列表接口
//   BedList({
//                   commit
//                 }, data) {
//     return new Promise((resolve, reject) => {
//       BedList(data).then(res => {
//         resolve(res)
//       }, error => {
//         reject(error)
//       })
//     })
//   },
//
//   //新增 &&编辑
//   AddBedList({
//                      commit
//                    }, data={}) {
//
//     return new Promise((resolve, reject) => {
//       AddBedList(data).then(res => {
//         resolve(res)
//       }, error => {
//         reject(error)
//       })
//     })
//   },
//
//   //保存疾病信息
//   SaveBedList({
//                       commit
//                     }, data) {
//     return new Promise((resolve, reject) => {
//       SaveBedList(data).then(res => {
//         resolve(res)
//       }, error => {
//         reject(error)
//       })
//     })
//   },
//   //删除疾病信息
//   DeleleBedList({
//                         commit
//                       }, data) {
//     return new Promise((resolve, reject) => {
//       DeleleBedList(data).then(res => {
//         resolve(res)
//       }, error => {
//         reject(error)
//       })
//     })
//   },
//
//   //停启疾病信息
//   SaupBedList({
//                       commit
//                     }, data) {
//     return new Promise((resolve, reject) => {
//       SaupBedList(data).then(res => {
//         resolve(res)
//       }, error => {
//         reject(error)
//       })
//     })
//   },
//
//   // 管理类配置-病区管理----------------------------------------------------------------------
//   // 列表接口
//   InpatientAreaList({
//                   commit
//                 }, data) {
//     return new Promise((resolve, reject) => {
//       InpatientAreaList(data).then(res => {
//         resolve(res)
//       }, error => {
//         reject(error)
//       })
//     })
//   },
//   //新增 &&编辑
//   AddInpatientAreaList({
//                commit
//              }, data={}) {
//
//     return new Promise((resolve, reject) => {
//       AddInpatientAreaList(data).then(res => {
//         resolve(res)
//       }, error => {
//         reject(error)
//       })
//     })
//   },
// //病区的所有科室
//   KeshiInpatientAreaList({
//                       commit
//                     }, data) {
//     return new Promise((resolve, reject) => {
//       KeshiInpatientAreaList(data).then(res => {
//         resolve(res)
//       }, error => {
//         reject(error)
//       })
//     })
//   },
//   //保存病区信息
//   SaveInpatientAreaList({
//                 commit
//               }, data) {
//     return new Promise((resolve, reject) => {
//       SaveInpatientAreaList(data).then(res => {
//         resolve(res)
//       }, error => {
//         reject(error)
//       })
//     })
//   },
//   //删除病区信息
//   DeleleInpatientAreaList({
//                   commit
//                 }, data) {
//     return new Promise((resolve, reject) => {
//       DeleleInpatientAreaList(data).then(res => {
//         resolve(res)
//       }, error => {
//         reject(error)
//       })
//     })
//   },
//
//   //停启病区信息
//   SaupInpatientAreaList({
//                 commit
//               }, data) {
//     return new Promise((resolve, reject) => {
//       SaupInpatientAreaList(data).then(res => {
//         resolve(res)
//       }, error => {
//         reject(error)
//       })
//     })
//   },

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}


