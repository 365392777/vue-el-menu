import request from '@/utils/request.js'
//常用诊断----------------------------------------




//页面所属类型下拉框
export const typeSelectList  = data => {
  return request({
    url: '/api/single/list',
    method: 'get',
    params:{
      mCode:"21008",
      pageCode:"ClincDiag",
    },
  })
}

//表头
export const TableHeaderName  = data => {
  return request({
    url: '/api/single/list',
    method: 'get',
    params:{
      mCode:"1002",
      code:"ClincDiag",
    },
  })
}

//列表
export const TableHeaderList  = data => {
  return request({
    url: '/api/single/listpage',
    method: 'get',
    params:{
      mCode:"ClincDiagList",
      ...data
    },
  })
}





//基础配置-药品-------------------------------------------------------------------------------
//列表信息
export const DrugList  = data => {
  return request({
    url: '/api/single/listpage',
    method: 'get',
    params:{
      mcode:"DurgsInfoList",
      Name:data.Name||"",
      DoseCode:data.DoseCode ||"",
      DurgRecipeTpye:data.DurgRecipeTpye ||"",
      DrugType:data.DrugType ||"",
      pageNumber:data.pageNumber || "",
      pageSize:data.pageSize || ""
    },
  })
}


//新增接口&&编辑
export const AddDrugsList  = data => {
  return request({
    url: '/api/simapi/get',
    method: 'get',
    params:{
      code:"20014",
      id:data.id||"",
    },
  })
}

// 页面->vuex->api

//保存药品信息
export const SaveDrugsList  = data => {

  return request({
    url: '/api/simapi/save',
    method: 'post',
    data:{
      code:"20014",
      oid:"",
      Value: JSON.stringify(data.Value),
      att:data.att||{},
    },

  })
}


// 删除药品接口
export const DeleleDrugsList  = data => {
  // console.log(data)
  return request({
    url: '/api/simapi/saDel',
    method: 'delete',
    data:{
      code:"20014",
      oid:"",
      Value: JSON.stringify(data.Value),
      att:data.att|| {},
    },
  })
}

// 启停药品
export const onoffDrugsList  = data => {
  // console.log(data)
  return request({
    url: '/api/simapi/saUp',
    method: 'put',
    data:{
      code:"20017",
      oid:"",
      Value: JSON.stringify(data.Value),
      att:data.att|| {},
    },
  })
}

//基础配置 常用诊断-------------------------------------------------------------------------------------
//列表信息
export const DiagnosisList  = data => {
  return request({
    url: '/api/single/listpage',
    method: 'get',
    params:{
      mcode:"ClincDiagList",
      name:data.name||"",
      remark:data.remark ||"",
      clincdiagtype:data.clincdiagtype ||"",
    },
  })
}
//新增接口&&编辑
export const AddDiagnosisList  = data => {
  return request({
    url: '/api/simapi/get',
    method: 'get',
    params:{
      code:"20015",
      id_dmark:data.id||"",
    },
  })
}

//保存药品信息
export const SaveDiagnosisList  = data => {
  return request({
    url: '/api/simapi/save',
    method: 'post',
    data:{
      Code:"20015",
      Oid:"",
      Value: JSON.stringify(data.Value),
      Att:data.Att||{},
    },

  })
}

// 删除诊断信息接口
export const DeleleDiagnosisList  = data => {
  // console.log(data)
  return request({
    url: '/api/simapi/saDel',
    method: 'delete',
    data:{
      Code:"20015",
      Oid:"",
      Value: JSON.stringify(data.Value),
      Att:data.Att|| {},
    },
  })
}

// 停用诊断信息接口
export const SaupDiagnosisList  = data => {
  // console.log(data)
  return request({
    url: '/api/simapi/saUp',
    method: 'put',
    data:{
      Code:"20015",
      Oid:"",
      Value: JSON.stringify(data.Value),
      Att:data.Att|| {},
    },
  })
}

// 管理类配置  病床管理-----------------------------------------------------------------------------
//病床管理列表  列表信息
export const BedList = data => {
  return request({
    url: '/api/single/listpage',
    method: 'get',
    params:{
      mcode:"BedsInWardInfoList",
      RoomNo:data.RoomNo||"",
      BadNo:data.BadNo ||"",
      LimitSex:data.LimitSex ||"",
      pageNumber:data.pageNumber ||"",
      pageSize:data.pageSize ||"",
    },
  })
}

//新增接口&&编辑
export const AddBedList  = data => {
  return request({
    url: '/api/simapi/get',
    method: 'get',
    params:{
      code:"20021",
      id:data.id||"",
    },
  })
}

//保存疾病信息
export const SaveBedList  = data => {

  return request({
    url: '/api/simapi/save',
    method: 'post',
    data:{
      Code:"20021",
      Oid:"",
      Value: JSON.stringify(data.Value),
      Att:data.Att||{},
    },

  })
}

// 删除疾病信息接口
export const DeleleBedList  = data => {
  // console.log(data)
  return request({
    url: '/api/simapi/saDel',
    method: 'delete',
    data:{
      Code:"20021",
      Oid:"",
      Value: JSON.stringify(data.Value),
      Att:data.Att|| {},
    },
  })
}

// 停用疾病信息接口
export const SaupBedList = data => {
  // console.log(data)
  return request({
    url: '/api/simapi/saUp',
    method: 'put',
    data:{
      Code:"20021",
      Oid:"",
      Value: JSON.stringify(data.Value),
      Att:data.Att|| {},
    },
  })
}

// 管理配置-病区管理-----------------------------------------------------------------------------
//列表信息
export const InpatientAreaList  = data => {
  return request({
    url: '/api/single/listpage',
    method: 'get',
    params:{
      mcode:"InpatientAreaInfoList",
      name:data.name||"",
      isoutpuse:data.isoutpuse ||"",
      pageNumber:data.pageNumber ||"",
      pageSize:data.pageSize ||"",
    },
  })
}

//新增接口&&编辑
export const AddInpatientAreaList = data => {
  return request({
    url: '/api/simapi/get',
    method: 'get',
    params:{
      code:"20009",
      Id:data.Id||"",
    },
  })
}

//获取所有科室接口
export const KeshiInpatientAreaList = data => {
  return request({
    url: '/api/single/selectex',
    method: 'get',
    params:{
      code:"Department_Select",
    },
  })
}

//保存病区信息
export const SaveInpatientAreaList  = data => {

  return request({
    url: '/api/simapi/save',
    method: 'post',
    data:{
      Code:"20009",
      Oid:"",
      Value: JSON.stringify(data.Value),
      Att:JSON.stringify(data.Att)||{},
    },

  })
}

// 删除病区信息接口
export const DeleleInpatientAreaList  = data => {
  // console.log(data)
  return request({
    url: '/api/simapi/saDel',
    method: 'delete',
    data:{
      Code:"20009",
      Oid:"",
      Value: JSON.stringify(data.Value),
      Att:data.Att|| {},
    },
  })
}

// 停用疾病信息接口
export const SaupInpatientAreaList = data => {
  // console.log(data)
  return request({
    url: '/api/simapi/saUp',
    method: 'put',
    data:{
      Code:"20009",
      Oid:"",
      Value: JSON.stringify(data.Value),
      Att:data.Att|| {},
    },
  })
}

// 获取科室下拉
export const divisionDown = data => {
  return request({
    url: '/api/single/selectex',
    method: 'get',
    params:{
      code:'Department_Select'
    },
  })
}
//
export const divisionIdDown = data => {
  return request({
    url: '/api/single/selectex',
    method: 'get',
    params:{
      code:'GetAreaDeptDropDown',
      ...data
    },
  })
}
// 病区下拉
export const wardInpatient = data => {
  return request({
    url: '/api/single/selectex',
    method: 'get',
    params:{
      code:'AreaInfo_Select'
    },
  })
}
//  获取床位费用 缴费
export const handPayment = data => {
  return request({
    url: '/api/single/listpage',
    method: 'get',
    params:{
      mCode:'BedFeeList'
    },
  })
}
//  获取床位级别
export const BedLevel = data => {
  return request({
    url: '/api/single/selectex',
    method: 'get',
    params:{
      code:'BedLevel'
    },
  })
}

// 财务管理---账务接口

// 金额充值
// export const GoldCoinRecharge = data => {
//   return request({
//     url: '/api/simapi/save',
//     method: 'post',
//     data: {
//       'Code': '10012',
//       'Oid': '',
//       'Value': JSON.stringify(data.Value),
//       'Att': {}
//     }
//   })
// }

// 积分充值
// export const PointsRecharge = data => {
//   return request({
//     url: '/api/simapi/save',
//     method: 'post',
//     data: {
//       'Code': '10014',
//       'Oid': '',
//       'Value': JSON.stringify(data.Value),
//       'Att': {}
//     }
//   })
// }
