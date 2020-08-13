// 药房领药模块
import {
// 发烧退药------------------------------------------------------------------------------------
  pharmacyName,
  dispensingList,
  dispensingDetail,
// 库房管理-------------------------------------------------------------------------------------
  // 药品申领接口
  SaveDrugApplication,
  DrugApplication,
  DrugApplicationDetailed,
  saveapi,
  // 药房入库接口
  DrugsWarehousingInquiry,
  DrugsWarehousingInquiryDetailed,
  SaupWarehousingInquiryDetailed,
  // 调拨申请
  AllocationList,
  AllocationListDetailed,
  SaveAllocationListDetailed,
  SaupAllocationListDetailed,
  // 药房药库下拉框
  StorehouseSelect,
  DrugsSelect,

  // 药房（查询统计）--------------------------------------------------------------------------------------
// 库存查询
  PharmacyStockQuery,
  PharmacyStockDtlQuery,
// 药房入库查询
  PharmacyInQuery,
  PharmacyInDtlQuery,
  //盘点查询
  PharmacyStockTakingList,
  PharmacyStockTakingDtl,
  //调拔查询
  PharmacyStockList,
  AllocationQueryList,
  AllocationQueryDtl,
} from '@/api/modules/pharmacy_system/pharmacy_dispensing.js'

const state = {

}
const mutations = {

}

const actions = {
  //获取药房药库下拉框接口
  StorehouseSelect({
                      commit
                    }, data={}) {
    return new Promise((resolve, reject) => {
      StorehouseSelect(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },
  // 获取药品下拉接口
  DrugsSelect({
                     commit
                   }, data={}) {
    return new Promise((resolve, reject) => {
      DrugsSelect(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },
  // 保存药品申领
  SaveDrugApplication({
                                commit
                              }, data={}) {
    return new Promise((resolve, reject) => {
      SaveDrugApplication(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },
  // 1.药品申领列表
  DrugApplication({
                    commit
                  }, data = {}) {
    return new Promise((resolve, reject) => {
      DrugApplication(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },
// 2.获取药品申领信息(明细)
  DrugApplicationDetailed({
                            commit
                          }, data={}) {
    return new Promise((resolve, reject) => {
      DrugApplicationDetailed(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },
  // 药房入库---------------------------------------------------------------------
  // 1.药房入库查询列表
  DrugsWarehousingInquiry({
                            commit
                          }, data={}) {
    return new Promise((resolve, reject) => {
      DrugsWarehousingInquiry(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },
  // 2.获取药房入库信息
  DrugsWarehousingInquiryDetailed({
                            commit
                          }, data={}) {
    return new Promise((resolve, reject) => {
      DrugsWarehousingInquiryDetailed(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },
  //3.确认药房入库
  SaupWarehousingInquiryDetailed({
                                    commit
                                  }, data={}) {
    return new Promise((resolve, reject) => {
      SaupWarehousingInquiryDetailed(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },
  // 调拨申请----------------------------------------------------
  // 0.调拔药品的下拉框
  PharmacyStockList({
                      commit
                    }, data={}) {
    return new Promise((resolve, reject) => {
      PharmacyStockList(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },

  // 1.调拨申请查询列表
  AllocationList({
                            commit
                          }, data={}) {
    return new Promise((resolve, reject) => {
      AllocationList(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },
  // 2.获取调拨申请信息
  AllocationListDetailed({
                   commit
                 }, data={}) {
    return new Promise((resolve, reject) => {
      AllocationListDetailed(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },
  // 3.保存调拨申请
  SaveAllocationListDetailed({
                           commit
                         }, data={}) {
    return new Promise((resolve, reject) => {
      SaveAllocationListDetailed(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },
  // 4.审核调拨
  SaupAllocationListDetailed({
                               commit
                             }, data={}) {
    return new Promise((resolve, reject) => {
      SaupAllocationListDetailed(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },

  // 药房（查询统计）--------------------------------------------------------------------------------------
// 1.按药房查询库存列表
  PharmacyStockQuery({
                            commit
                          }, data={}) {
    return new Promise((resolve, reject) => {
      PharmacyStockQuery(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },
  // 2.库存查询
  PharmacyStockDtlQuery({
                       commit
                     }, data={}) {
    return new Promise((resolve, reject) => {
      PharmacyStockDtlQuery(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },
  // 1.药房入库查询统计
  PharmacyInQuery({
                       commit
                     }, data={}) {
    return new Promise((resolve, reject) => {
      PharmacyInQuery(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },
  // 2.入库明细表统计查询
  PharmacyInDtlQuery({
                          commit
                        }, data={}) {
    return new Promise((resolve, reject) => {
      PharmacyInDtlQuery(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },
  // 1.盘点查询
  PharmacyStockTakingList({
                    commit
                  }, data={}) {
    return new Promise((resolve, reject) => {
      PharmacyStockTakingList(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },
  // 2.盘点查询明细
  PharmacyStockTakingDtl({
                       commit
                     }, data={}) {
    return new Promise((resolve, reject) => {
      PharmacyStockTakingDtl(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },
  // 1.调拔查询
  AllocationQueryList({
                            commit
                          }, data={}) {
    return new Promise((resolve, reject) => {
      AllocationQueryList(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },
  // 2.挑拨查询明细
  AllocationQueryDtl({
                           commit
                         }, data={}) {
    return new Promise((resolve, reject) => {
      AllocationQueryDtl(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },


  // 这个下面是管做的，先放一放 ----------------------------------------------------------------------------------------
    // 药房列表
    pharmacyName({
        commit
    }, data = {}) {
        return new Promise((resolve, reject) => {
            pharmacyName(data).then(res => {
                resolve(res)
            }, error => {
                reject(error)
            })
        })
    },
    //待发药列表
    dispensingList({
        commit
    }, data = {}) {
        return new Promise((resolve, reject) => {
            dispensingList(data).then(res => {
                resolve(res)
            }, error => {
                reject(error)
            })
        })
    },
    //待发药详情
  dispensingDetail({
                     commit
                   }, data = {}) {
    return new Promise((resolve, reject) => {
      dispensingDetail(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },


  saveapi({
      commit
    }, data = {}) {
  return new Promise((resolve, reject) => {
    saveapi(data).then(res => {
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
