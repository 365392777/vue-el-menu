import request from '@/utils/request.js'
// 公共部分
// 获取全部的下拉框
export const Select  = data => {
  return request({
    url: 'api/single/list',
    method: 'get',
    params:{
      mCode:"21008",
      pageCode:data.pageCode || "",
    },
  })
};
// 获取科室下拉框
export const DepartmentSelect  = data => {
  return request({
    url: '/api/single/selectex',
    method: 'get',
    params:{
      Code:"GetDeptDropDown",
    },
  })
};
// 获取药库下拉框
export const DrugStorageSelect  = data => {
  return request({
    url: '/api/single/selectex',
    method: 'get',
    params:{
      Code:"StorehouseList",
      dicType:"4",
      pid_dmark:"0",
    },
  })
};
// 获取供应商及生产商公共接口
export const SupplierSelect  = data => {
  return request({
    url: '/api/single/selectex',
    method: 'get',
    params:{
      code:"CustomerList",
      // CuTypeCode:"2",
      CuTypeCode: data.CuTypeCode,
    },
  })
};

// 获取药品下拉框
export const DrugsSelect  = data => {
  return request({
    url: 'api/single/listpage',
    method: 'get',
    params:{
      mCode:"ItemList",
      name:data.name||"",
      pageNumber: data.pageNumber || 1,
      pageSize: data.pageSize || 10,
    },
  })
};
// 职员列表下拉框（审批人）
export const administratorsSelect  = data => {
  return request({
    url: '/api/single/selectex',
    method: 'get',
    params:{
      code:"EmployeeList",
    },
  })
};


//药库管理-入库出库-------------------------------------------------------------------------------
//0.采购入库计划列表
export const $ProcurementPlanList  = data => {
  return request({
    url: '/api/single/listpage',
    method: 'get',
    params:{
      mCode:"WarehousingPlanList",
      billNo:data.billNo ||"",
      pageSize:data.pageSize || 10,
      pageNumber:data.pageNumber || 1,
    },
  })
};

// 1.入库查询列表
export const DrugStorageInList  = data => {
  return request({
    url: '/api/single/listpage',
    method: 'get',
    params:{
      mCode:"DrugStorageInList",
      startTime:data.startTime||"",
      endTime:data.endTime ||"",
      billNo:data.billNo ||"",
      state:data.state ||"",
      pageSize:data.pageSize || 10,
      pageNumber:data.pageNumber || 1,
    },
  })
};
// 2.采购计划明细信息和入库查询明细信息
export const ProcurementDetailedList  = data => {
  return request({
    url: '/api/simapi/get',
    method: 'get',
    params:{
      code:"50001",
      dataType:data.dataType ||"",
      id:data.id ||"",
    },
  })
};
// 3.保存采购入库信息
export const SaveProcurementDetailedList  = data => {
  return request({
    url: '/api/simapi/save',
    method: 'post',
    data:{
      Code:"50001",
      Oid: data.Oid||"",
      Value: JSON.stringify(data.Value),
      Att:data.Att||{},
    },
  })
};
// 4.采购确认入库(直接入库)
export const SaupProcurementDetailedList = data => {
  // console.log(data)
  return request({
    url: '/api/simapi/saUp',
    method: 'put',
    data:{
      Code:"50001",
      Oid: data.Oid||"",
      Value: JSON.stringify(data.Value),
      Att:data.Att|| {},
    },
  })
};
// 5.未确认入库（确认入库）
export const SaupProcurementDetailedList_again = data => {
  // console.log(data)
  return request({
    url: '/api/simapi/saUp',
    method: 'put',
    data:{
      Code:"50006",
      Oid: data.Oid||"",
      Value: JSON.stringify(data.Value),
      Att:data.Att|| {},
    },
  })
};

// 1.  出库列表的获取
export const OutboundList  = data => {
  return request({
    url: '/api/single/listpage',
    method: 'get',
    params:{
      mCode:"StorageOutList",
      OutMode:data.OutMode ||"",//出库方式
      OutStatus: data.OutStatus ||"",//出库状态:0 未出库 1 已出库
      RoomId:data.RoomId ||"",//库房
      PharmacyId:data.PharmacyId ||"",//药房
      startTime:data.startTime||"",
      endTime:data.endTime ||"",
      pageSize:data.pageSize || 10,
      pageNumber:data.pageNumber || 1,
    },
  })
};
// 2.获取出库处理信息
export const OutboundListDetailed = data => {
  return request({
    url: '/api/simapi/get',
    method: 'get',
    params:{
      code:"50002",
      id:data.id ||"",
    },
  })
};
// 3.确认出库（保存）
export const SaupOutboundListDetailed  = data => {
  // console.log(data)
  return request({
    url: '/api/simapi/saUp',
    method: 'put',
    data:{
      Code:"50002",
      Oid: data.Oid||"",
      Value: JSON.stringify(data.Value),
      Att:data.Att|| {},
    },
  })
};

//药库管理-采购计划-------------------------------------------------------------------------------
//入库列表
export const ProcurementPlanList  = data => {
  console.log(data,'1321321')
  return request({
    url: '/api/single/listpage',
    method: 'get',
    params:{
      mCode:"PlanList",
      startTime:data.startTime||"",
      endTime:data.endTime ||"",
      billNo:data.billNo ||"",
      status:data.status || "",
      pageSize:data.pageSize || 10,
      pageNumber:data.pageNumber || 1,
    },
  })
};

//入库明细列表
export const ProcurementPlanDetailedList  = data => {
  return request({
    url: '/api/simapi/get',
    method: 'get',
    params:{
      code:"50000",
      id:data.id ||"",
      // id:"7D8B72C4B2EF793E" ||"",
      pageSize:data.pageSize || 10,
      pageNumber:data.pageNumber || 1,
    },
  })
};

// 保存入库明细
export const SaveProcurementPlanDetailedList  = data => {
  return request({
    url: '/api/simapi/save',
    method: 'post',
    data:{
      Code:"50000",
      Oid: data.Oid||"",
      // Id: data.Id||"",
      Value: JSON.stringify(data.Value),
      Att:data.Att||{},
    },
  })
};

// 删除入库明细
export const DeleleProcurementPlanDetailedList  = data => {
  // console.log(data)
  return request({
    url: '/api/simapi/saDel',
    method: 'delete',
    data:{
      Code:"50000",
      Oid: data.Oid||"",
      Value: JSON.stringify(data.Value),
      Att:data.Att|| {},
    },
  })
};

//审核入库计划
export const SaupProcurementPlanDetailedList  = data => {
  // console.log(data)
  return request({
    url: '/api/simapi/saUp',
    method: 'put',
    data:{
      Code:"50000",
      Oid: data.Oid||"",
      Value: JSON.stringify(data.Value),
      Att:data.Att|| {},
    },
  })
};
