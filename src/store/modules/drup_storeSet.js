// 药库系统
import {
 //药库设置
 treeInterfaceType,treeIdTableList,AddEditInformation,SaveDrugTree,AddDrugTable,EditDrugTable,
 deleteDrugTable,

 //查询统计-库存查询
 InventoryQueryList,
//  查询统计--入库查询
 QueryOutList,QueryOutIdList,
//  盘点管理-盘点处理
 InventoryList,InventoryIdList,InventoryFormList,saveInventoryTable,examineInventoryTable,
 deleteInventoryTable,

 //盘点管理-调价-------------------
 adjustList,adjustIdList,saveAdjustTable,saupAdjustTable,deleteAdjustTable,
//查询统计-出库查询
 OutStockList,OutIdList,

 //查询统计-盘点查询
 CheckList,CheckIdList,
 //查询统计-药品入库汇总
 InCheckList,
 //查询统计-药品出库汇总
 OutCheckList,

//  查询统计--厂商采购统计-
purchaseList,purchaseIdList,

// 查询统计--供应商采购统计

supplyList,supplyIdList

} from '@/api/modules/drup_storehouse_system/drup_storeSet.js'

const state = {

}
const mutations = {

}

const actions = {

   //  查询统计--供应商采购统计-
   supplyList({
    commit
  }, data={}) {
  return new Promise((resolve, reject) => {
    supplyList(data).then(res => {
  resolve(res)
  }, error => {
  reject(error)
  })
  })
  },
  supplyIdList({
    commit
  }, data={}) {
  return new Promise((resolve, reject) => {
    supplyIdList(data).then(res => {
  resolve(res)
  }, error => {
  reject(error)
  })
  })
  },



  //  查询统计--厂商采购统计-
  purchaseList({
    commit
  }, data={}) {
  return new Promise((resolve, reject) => {
    purchaseList(data).then(res => {
  resolve(res)
  }, error => {
  reject(error)
  })
  })
  },
  purchaseIdList({
    commit
  }, data={}) {
  return new Promise((resolve, reject) => {
    purchaseIdList(data).then(res => {
  resolve(res)
  }, error => {
  reject(error)
  })
  })
  },





   //查询统计-药品出入库汇总-------------
   OutCheckList({
    commit
  }, data={}) {
  return new Promise((resolve, reject) => {
    OutCheckList(data).then(res => {
  resolve(res)
  }, error => {
  reject(error)
  })
  })
  },

 //查询统计-药品入库汇总-------------
  InCheckList({
    commit
  }, data={}) {
  return new Promise((resolve, reject) => {
    InCheckList(data).then(res => {
  resolve(res)
  }, error => {
  reject(error)
  })
  })
  },



   //查询统计-盘点查询-----------
   CheckList({
    commit
  }, data={}) {
  return new Promise((resolve, reject) => {
    CheckList(data).then(res => {
  resolve(res)
  }, error => {
  reject(error)
  })
  })
  },
  CheckIdList({
    commit
  }, data={}) {
  return new Promise((resolve, reject) => {
    CheckIdList(data).then(res => {
  resolve(res)
  }, error => {
  reject(error)
  })
  })
  },




     //查询统计-出库查询-------------------


     OutIdList({
      commit
    }, data={}) {
    return new Promise((resolve, reject) => {
      OutIdList(data).then(res => {
    resolve(res)
    }, error => {
    reject(error)
    })
    })
    },
     OutStockList({
      commit
    }, data={}) {
    return new Promise((resolve, reject) => {
      OutStockList(data).then(res => {
    resolve(res)
    }, error => {
    reject(error)
    })
    })
    },

   //盘点管理-入库-------------------
   QueryOutIdList({
    commit
  }, data={}) {
  return new Promise((resolve, reject) => {
    QueryOutIdList(data).then(res => {
  resolve(res)
  }, error => {
  reject(error)
  })
  })
  },
  


  
 //盘点管理-调价-------------------

 //删除
 deleteAdjustTable({
  commit
}, data={}) {
return new Promise((resolve, reject) => {
  deleteAdjustTable(data).then(res => {
resolve(res)
}, error => {
reject(error)
})
})
},


 //审核
 saupAdjustTable({
  commit
}, data={}) {
return new Promise((resolve, reject) => {
  saupAdjustTable(data).then(res => {
resolve(res)
}, error => {
reject(error)
})
})
},

 //保存
 saveAdjustTable({
  commit
}, data={}) {
return new Promise((resolve, reject) => {
  saveAdjustTable(data).then(res => {
resolve(res)
}, error => {
reject(error)
})
})
},

  //列表
  adjustIdList({
    commit
  }, data={}) {
  return new Promise((resolve, reject) => {
    adjustIdList(data).then(res => {
  resolve(res)
  }, error => {
  reject(error)
  })
  })
  },
 //列表
 adjustList({
  commit
}, data={}) {
return new Promise((resolve, reject) => {
  adjustList(data).then(res => {
resolve(res)
}, error => {
reject(error)
})
})
},







   //查询统计-盘点处理------------------------------------------------

            //删除列表单
            deleteInventoryTable({
              commit
            }, data={}) {
            return new Promise((resolve, reject) => {
              deleteInventoryTable(data).then(res => {
            resolve(res)
            }, error => {
            reject(error)
            })
            })
            },
      

         //列表单
         examineInventoryTable({
          commit
        }, data={}) {
        return new Promise((resolve, reject) => {
          examineInventoryTable(data).then(res => {
        resolve(res)
        }, error => {
        reject(error)
        })
        })
        },
  




       //列表单
       saveInventoryTable({
        commit
      }, data={}) {
      return new Promise((resolve, reject) => {
        saveInventoryTable(data).then(res => {
      resolve(res)
      }, error => {
      reject(error)
      })
      })
      },





    //列表单
    InventoryFormList({
    commit
  }, data={}) {
  return new Promise((resolve, reject) => {
    InventoryFormList(data).then(res => {
  resolve(res)
  }, error => {
  reject(error)
  })
  })
  },
  //列表Id
  InventoryIdList({
    commit
  }, data={}) {
  return new Promise((resolve, reject) => {
    InventoryIdList(data).then(res => {
  resolve(res)
  }, error => {
  reject(error)
  })
  })
  },







  //列表
  InventoryList({
    commit
  }, data={}) {
  return new Promise((resolve, reject) => {
    InventoryList(data).then(res => {
  resolve(res)
  }, error => {
  reject(error)
  })
  })
  },








 //查询统计-入库查询------------------------------------------------
  //列表
  QueryOutList({
    commit
  }, data={}) {
  return new Promise((resolve, reject) => {
    QueryOutList(data).then(res => {
  resolve(res)
  }, error => {
  reject(error)
  })
  })
  },





  //查询统计-库存查询------------------------------------------------
  //列表
  InventoryQueryList({
    commit
  }, data={}) {
  return new Promise((resolve, reject) => {
    InventoryQueryList(data).then(res => {
  resolve(res)
  }, error => {
  reject(error)
  })
  })
  },
   //药库设置------------------------------------------------

  //删除表格接口
  deleteDrugTable({
    commit
  }, data={}) {
  return new Promise((resolve, reject) => {
    deleteDrugTable(data).then(res => {
  resolve(res)
  }, error => {
  reject(error)
  })
  })
  },
//编辑保存接口
  EditDrugTable({
    commit
  }, data={}) {
  return new Promise((resolve, reject) => {
    EditDrugTable(data).then(res => {
  resolve(res)
  }, error => {
  reject(error)
  })
  })
  },

//新增编辑 --表格
AddDrugTable({
    commit
  }, data={}) {
  return new Promise((resolve, reject) => {
    AddDrugTable(data).then(res => {
  resolve(res)
  }, error => {
  reject(error)
  })
  })
  },

  //保存树状--

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

  //点击新增编辑
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

//根据药库id获取表格数据
treeIdTableList({
  commit
}, data={}) {
return new Promise((resolve, reject) => {
  treeIdTableList(data).then(res => {
resolve(res)
}, error => {
reject(error)
})
})
},





  //获取药库设置树状图接口
  treeInterfaceType({
                      commit
                    }, data={}) {
    return new Promise((resolve, reject) => {
      treeInterfaceType(data).then(res => {
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


