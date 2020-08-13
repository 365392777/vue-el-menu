import request from '@/utils/request.js'
// 发烧退药-------------------------------------------------------------------------------------------
// 领药药房列表
export const pharmacyName = data => {
  return request({
    url: '/api/single/listpage',
    method: 'get',
    params: {
      mcode: 'DictionaryList',
      type: data.type || '',
      code: data.code || '',
      nacode: data.nacode || '',
      dictypename: data.name || '',
      pageNumber: data.pageNumber || 1,
      pageSize: data.pageSize || 10

    },
  })
}

// 待发药列表
export const dispensingList = data => {
  return request({
    url: '/api/single/listpage',
    method: 'get',
    params: {
      mCode: 'PhamarcyRecipeList',
      listType: data.type || '',//列表类型（1.待配药，2.待发药，3.已发药）
      phamarcyId_dmark: data.phamarcyId_dmark || '',
      keyWord: data.keyWord || '',
      pageNumber: data.pageNumber || '',
      pageSize: data.pageSize || 10

    },
  })
}
// 待发药详情
export const dispensingDetail = data => {
  return request({
    url: '/api/simapi/get',
    method: 'get',
    params: {
      code: "60000",
      recipeNo: data.recipeNo,
      clinicCode:data.clinicCode
    },
  })
}


// 配药
export const saveapi = data => {
  var obj = {};
  for (var k in data) {
    if (k != "Code") {
      obj[k] = data[k];
    }
  }
  return request({
    url: '/api/simapi/save',
    method: 'POST',
    data: {
      Code: data.Code,
      Oid: '',
      Value: JSON.stringify(obj),
      Att: ""
    },
  })
  // return request({
  //     url: '/api/simapi/saUp',
  //     method: 'put',
  //     data: {
  //       Code: data.Code,
  //       Oid: '',
  //       Value: JSON.stringify(obj),
  //       Att: ""
  //     },
  //   })


}


// 药房的库房管理-------------------------------------------------------------------------------------
// 药品申领
//一、 提交申请
// 获取药房及药库的下拉框
export const StorehouseSelect = data => {
  return request({
    url: '/api/single/selectex',
    method: 'get',
    params: {
      Code: "StorehouseList",
      dicType: data.dicType || "",
      pid_dmark: "0",
    },
  })
}
// 药库药品（药房的时候调用）
// 获取药品下拉框
export const DrugsSelect = data => {
  return request({
    url: '/api/single/selectex',
    method: 'get',
    params: {
      Code: "StorageStockList",
      roomId_dmark: data.roomId_dmark || "",
    },
  })
}
// 保存申请信息
export const SaveDrugApplication  = data => {
  return request({
    url: '/api/simapi/save',
    method: 'post',
    data:{
      Code:"60003",
      Oid: data.Oid||"",
      Value: JSON.stringify(data.Value),
      Att:data.Att||{},
    },
  })
}
// 1.药品申领列表
export const DrugApplication = data => {
  return request({
    url: '/api/single/listpage',
    method: 'get',
    params: {
      mCode: "DrugApplicationList",
      Status: data.Status || "",//是否入库 0 未入库 1 已入库
      startTime: data.startTime || "",
      endTime: data.endTime || "",
      pageNumber: data.pageNumber || "",
      pageSize: data.pageSize || 10,
    },
  })
}
// 2.获取药品申领信息(明细)
export const DrugApplicationDetailed  = data => {
  return request({
    url: '/api/simapi/get',
    method: 'get',
    params:{
      code:"60003",
      // dataType:data.dataType ||"",
      id:data.id ||"",
    },
  })
}

// 药房入库----
// 1.药房入库查询列表
export const DrugsWarehousingInquiry = data => {
  return request({
    url: '/api/single/listpage',
    method: 'get',
    params: {
      mCode: "PharmacyInList",
      Status: data.Status || "",//出库状态：  0 未出库 1 已出库
      startTime: data.startTime || "",
      endTime: data.endTime || "",
      pageNumber: data.pageNumber || "",
      pageSize: data.pageSize || 10,
      InMode: data.pageNumber || "",//出库方式
      RoomId: data.pageNumber || "",//库房
      PharmacyId: data.PharmacyId || "",//药房
    },
  })
}
// 2.获取药房入库信息
export const DrugsWarehousingInquiryDetailed  = data => {
  return request({
    url: '/api/simapi/get',
    method: 'get',
    params:{
      code:"60004",
      id:data.id ||"",
    },
  })
}
// 3.药房确认入库
export const SaupWarehousingInquiryDetailed = data => {
  // console.log(data)
  return request({
    url: '/api/simapi/saUp',
    method: 'put',
    data:{
      Code:"60004",
      Oid: data.Oid||"",
      Value: JSON.stringify(data.Value),
      Att:data.Att|| {},
    },
  })
}
// 调拨申请-------------
// 0.调拔药品的下拉框
export const PharmacyStockList = data => {
  return request({
    url: '/api/single/selectex',
    method: 'get',
    params: {
      Code: "PharmacyStockList",
      pharmacyId_dmark: data.pharmacyId_dmark,
    },
  })
}
// 1.调拨申请查询列表
export const AllocationList = data => {
  return request({
    url: '/api/single/listpage',
    method: 'get',
    params: {
      mCode: "AllocationList",
      Status: data.Status || "",//审核状态    0：未提交 1：已提交 2：已出库 3：已入库
      startTime: data.startTime || "",
      endTime: data.endTime || "",
      pageNumber: data.pageNumber || "",
      pageSize: data.pageSize || 10,
      InMode: data.pageNumber || "",//出库方式
      APharmacyId: data.APharmacyId || "",//申请药房
      TPharmacyId: data.TPharmacyId || "",//目标药房
    },
  })
}
// 2.获取调拨申请信息
export const AllocationListDetailed  = data => {
  return request({
    url: '/api/simapi/get',
    method: 'get',
    params:{
      code:"60005",
      id:data.id ||"",
    },
  })
}
// 3.保存调拨申请
export const SaveAllocationListDetailed  = data => {
  // console.log(data)
  return request({
    url: '/api/simapi/save',
    method: 'post',
    data:{
      Code:"60005",
      Oid: data.Oid||"",
      Value: JSON.stringify(data.Value),
      Att:data.Att|| {},
    },
  })
}
// 4.审核调拨
export const SaupAllocationListDetailed = data => {
  // console.log(data)
  return request({
    url: '/api/simapi/saUp',
    method: 'put',
    data:{
      Code:"60005",
      Oid: data.Oid||"",
      Value: JSON.stringify(data.Value),
      Att:data.Att|| {},
    },
  })
}

// 药房（查询统计）--------------------------------------------------------------------------------------
// 1.按药房查询库存列表
export const PharmacyStockQuery = data => {
  return request({
    url: '/api/single/listpage',
    method: 'get',
    params: {
      mCode: "PharmacyStockQuery",
      name: data.name || "",
      pageNumber: data.pageNumber || "",
      pageSize: data.pageSize || 10,
    },
  })
}
// 2.库存查询
export const PharmacyStockDtlQuery = data => {
  return request({
    url: '/api/single/listpage',
    method: 'get',
    params: {
      mCode: "PharmacyStockDtlQuery",
      name: data.name || "",
      pharmacyId: data.pharmacyId || "",
      operTime: data.operTime || "",
    },
  })
}
//1.药房入库查询统计
export const PharmacyInQuery = data => {
  return request({
    url: '/api/single/listpage',
    method: 'get',
    params: {
      mCode: "PharmacyInQuery",
      name: data.name || "",
      pageNumber: data.pageNumber || "",
      pageSize: data.pageSize || 10,
    },
  })
}
// 2.入库明细表统计查询
export const PharmacyInDtlQuery = data => {
  return request({
    url: '/api/single/listpage',
    method: 'get',
    params: {
      mCode: "PharmacyInDtlQuery",
      name: data.name || "",
      id_dmark: data.id || "",
    },
  })
}
//1.盘点查询
export const PharmacyStockTakingList = data => {
  return request({
    url: '/api/single/listpage',
    method: 'get',
    params: {
      mCode: "PharmacyStockTakingList",
      name: data.name || "",
      pageNumber: data.pageNumber || "",
      pageSize: data.pageSize || 10,
    },
  })
}
//2.盘点明细统计查询
export const PharmacyStockTakingDtl = data => {
  return request({
    url: '/api/single/listpage',
    method: 'get',
    params: {
      mCode: "PharmacyStockTakingDtl",
      name: data.name || "",
      id_dmark: data.id || "",
    },
  })
}
//1.调拨查询
export const AllocationQueryList = data => {
  return request({
    url: '/api/single/list',
    method: 'get',
    params: {
      mCode: "AllocationQueryList",
      pageNumber: data.pageNumb || 1,
      pageSize: data.pageSize || 10,
    },
  })
}
//2.入库明细表统计查询
export const AllocationQueryDtl = data => {
  return request({
    url: '/api/single/listpage',
    method: 'get',
    params: {
      mCode: "AllocationQueryDtl",
      name: data.name || "",
      id_dmark: data.id || "",
    },
  })
}
