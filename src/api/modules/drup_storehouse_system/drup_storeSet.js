import request from '@/utils/request.js'
//药库管理-查询统计--供应商采购统计--------------------------------
//2.出库明细信息
export const supplyIdList = data => {
  return request({
    url: '/api/single/list',
    method: 'get',
    params:{
      mCode:"SupplierDtlQuery",
      ...data
    },
  })
}

// 列表
export const supplyList = data => {
  return request({
    url: '/api/single/listpage',
    method: 'get',
    params:{
      mCode:"SupplierStatisticList",
      ...data
    },
  })
}



//药库管理-查询统计--厂商采购统计--------------------------------
//2.出库明细信息
export const purchaseIdList = data => {
  return request({
    url: '/api/single/list',
    method: 'get',
    params:{
      mCode:"ManufacturerDtlQuery",
      ...data
    },
  })
}

// 列表
export const purchaseList = data => {
  return request({
    url: '/api/single/listpage',
    method: 'get',
    params:{
      mCode:"ManufacturerStatisticList",
      ...data
    },
  })
}



//药库管理-查询统计--药品出库汇总--------------------------------
// 列表
export const OutCheckList = data => {
  return request({
    url: '/api/single/listpage',
    method: 'get',
    params:{
      mCode:"StorageOutSumQuery",
      ...data
    },
  })
}


//药库管理-查询统计--药品入库汇总--------------------------------
// 列表
export const InCheckList = data => {
  return request({
    url: '/api/single/listpage',
    method: 'get',
    params:{
      mCode:"StorageInSumQuery",
      ...data
    },
  })
}

//药库管理-查询统计--盘点查询--------------------------------

//2.出库明细信息
export const CheckIdList = data => {
  return request({
    url: '/api/single/list',
    method: 'get',
    params:{
      mCode:"TakingDtlQueryInfo",
      ...data
    },
  })
}

// 列表
export const CheckList = data => {
  return request({
    url: '/api/single/listpage',
    method: 'get',
    params:{
      mCode:"StockTakingQuery",
      ...data
    },
  })
}
//药库管理-查询统计--出库查询--------------------------------

//2.出库明细信息
export const OutIdList = data => {
  return request({
    url: '/api/single/list',
    method: 'get',
    params:{
      mCode:"OutQueryInfo",
      ...data
    },
  })
}

// 列表
export const OutStockList = data => {
  return request({
    url: '/api/single/listpage',
    method: 'get',
    params:{
      mCode:"StorageOutQuery",
      ...data
    },
  })
}





//药库管理-查询统计--入库查询--------------------------------
// 2.入库明细信息
export const QueryOutIdList = data => {
  return request({
    url: '/api/simapi/get',
    method: 'get',
    params:{
      code:"50001",
      ...data
    },
  })
}


//查询的列表数据
export const QueryOutList = data => {
  return request({
    url: '/api/single/listpage',
    method: 'get',
    params:{
      mCode:"DrugStorageInList",
      ...data
    },
  })
}



//药库管理-盘点管理--调价-------------------------------

// 5.删除药品调价单
export const deleteAdjustTable = data => {
  return request({
    url: '/api/simapi/saDel',
    method: 'delete',
    data:{
      Code:"50005",
      Oid: "",
      Value: JSON.stringify(data.Value),
      Att:"",
    },
  })
}



// 4.审核调价

export const saupAdjustTable = data => {
  return request({
    url: '/api/simapi/saUp',
    method: 'put',
    data:{
      Code:"50005",
      Oid: "",
      Value: JSON.stringify(data.Value),
      Att:"",
    },
  })
}


//3.保存调价信息(新增、修改)

export const saveAdjustTable = data => {
  return request({
    url: '/api/simapi/save',
    method: 'post',
    data:{
      Code:"50005",
      Oid: "",
      Value: JSON.stringify(data.Value),
      Att:"",
    },
  })
}




// 2.获取调价信息

export const adjustIdList = data => {
  return request({
    url: '/api/simapi/get',
    method: 'get',
    params:{
      code:"50005",
      ...data
    },
  })
}

// 1.调价列表信息
export const adjustList = data => {
  return request({
    url: '/api/single/listpage',
    method: 'get',
    params:{
      mCode:"AdjustmentList",
      ...data
    },
  })
}






//药库管理-盘点管理--盘点处理--------------------------------

// 6.删除盘点单
export const deleteInventoryTable = data => {
  return request({
    url: '/api/simapi/saDel',
    method: 'delete',
    data:{
      Code:"50003",
      Oid: "",
      Value: JSON.stringify(data.Value),
      Att:"",
    },
  })
}



// 5.审核盘点单
export const examineInventoryTable = data => {
  return request({
    url: '/api/simapi/saUp',
    method: 'put',
    data:{
      Code:"50003",
      Oid: "",
      Value: JSON.stringify(data.Value),
      Att:"",
    },
  })
}



// 4.保存盘点信息(新增、修改)

export const saveInventoryTable = data => {
  return request({
    url: '/api/simapi/save',
    method: 'post',
    data:{
      Code:"50003",
      Oid: "",
      Value: JSON.stringify(data.Value),
      Att:"",
    },
  })
}

// 3.获取生成的盘点单
export const InventoryFormList = data => {
  return request({
    url: '/api/single/list',
    method: 'get',
    params:{
      mCode:"50004",
      ...data
    },
  })
}




// 2.获取盘点信息（已生成的盘点单）

export const InventoryIdList = data => {
  return request({
    url: '/api/simapi/get',
    method: 'get',
    params:{
      code:"50003",
      ...data
    },
  })
}

//查询的列表数据
export const InventoryList = data => {
  return request({
    url: '/api/single/listpage',
    method: 'get',
    params:{
      mCode:"StockTakingList",
      ...data
    },
  })
}














//药库管理-查询统计--库存查询---------------------------------

//列表数据
export const InventoryQueryList = data => {
  return request({
    url: '/api/single/listpage',
    method: 'get',
    params:{
      mCode:"StorageQuery",
      ...data
    },
  })
}













//药库管理-药库设置---------------------------------


//3.删除库位与药品关系
export const deleteDrugTable = data => {
  return request({
    url: '/api/simapi/saDel',
    method: 'delete',
    data:{
      Code:"20019",
      Oid: "",
      Value: JSON.stringify(data.Value),
      Att:"",
    },
  })
}


//4.修改库位与药品关系-编辑保存接口
export const EditDrugTable = data => {
  return request({
    url: '/api/simapi/saUp',
    method: 'put',
    data:{
      Code:"20019",
      Oid: "",
      Value: JSON.stringify(data.Value),
      Att:"",
    },
  })
}






// 新增库位与药品关系--新增保存接口
export const AddDrugTable = data => {
    return request({
      url: '/api/simapi/save',
      method: 'post',
      data:{
        Code:"20019",
        Oid: "",
        Value: JSON.stringify(data.Value),
        Att:"",
      },
    })
  }




// 保存 药库/库位 信息--树状
export const SaveDrugTree = data => {
    return request({
      url: '/api/simapi/save',
      method: 'post',
      data:{
        Code:"20011",
        Oid: "",
        Value: JSON.stringify(data.Value),
        Att:"",
      },
    })
  }

//新增或编辑获取要药库信息
export const AddEditInformation = data => {
    return request({
      url: '/api/simapi/get',
      method: 'get',
      params:{
        code:"20011",
        id:data.id || ''
      },
    })
}




//根据库位id获取库位与药品
export const treeIdTableList = data => {
    return request({
      url: '/api/single/listpage',
      method: 'get',
      params:{
        mCode:"21009",
        ...data,
      },
    })
}


//树状药库接口
export const treeInterfaceType  = data => {
    return request({
      url: '/api/single/list',
      method: 'get',
      params:{
        mCode:"21000",
        type:data.type,
      },
    })
}
