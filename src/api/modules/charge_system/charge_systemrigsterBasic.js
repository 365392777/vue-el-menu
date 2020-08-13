//  基础配置 basics_put
import request from '@/utils/request.js'
// 办理就诊卡-------------------------------------------------------------------------------------

// 获取就诊卡列表
export const getUserInfo = data => {
  return request({
    url: '/api/simapi/get',
    method: 'get',
    params: {
      Code: data.Code || '',
      cardNo: data.cardNo || ''
    },
  })
}

//删除过敏原
export const deleteArritability = data => {
  return request({
    url: '/api/simapi/saDel',
    method: 'delete',
    data: {
      Code: "30007",
      Oid: "",
      Value: JSON.stringify(data),
      Att: ""
    },
  })
}

//患者列表-------------------------------------------------------------------------------------

//患者列表表头数据
export const patientTab = data => {
  return request({
    url: '/api/single/list',
    method: 'get',
    params: {
      code: data,
      mCode: "1002",
      // ...data
    },
  })
}
// 患者列表
export const patientList = data => {
  var obj = {};
  for (var k in data) {
    if (k != "apiurl") {
      obj[k] = data[k];
    }
  }
  return request({
    url: data.apiurl,
    method: 'get',
    params: {
      ...obj
    },
  })
}

// 启用注销就诊卡
export const editPatientCard = data => {
  return request({
    url: "/api/simapi/saDel",
    method: 'DELETE',
    data: {
      Code: '10000',
      Oid: '',
      Value: JSON.stringify(data),
      Att: {}
    },
  })
}

// 患者列表删除记录
// export const deletePatient = data => {
//   return request({
//     url: "/api/simapi/saDel",
//     method: 'delete',
//     data: {
//       Code: '10000',
//       Oid: '',
//       Value: JSON.stringify(data),
//       Att: {}
//     },
//   })
// }


// 门诊挂号 ------------------------------------------------------------------------------------

// /预约/挂号列表
export const subscribeList = data => {
  return request({
    url: "api/single/list",
    method: 'get',
    params: {
      mCode: "GetRegDeptList",
      type: data.type || ''
    },
  })
}


//科室排班表头
export const registerTab = data => {
  return request({
    url: '/api/single/list',
    method: 'get',
    params: {
      code: "DeptStuff",
      mCode: "1002",
      // ...data
    },
  })
}

// 排班医生列表
export const doctorList = data => {
  return request({
    url: "api/single/list",
    method: 'get',
    params: {
      mCode: "GetSchemaDoctorListByDeptId",
      deptId_dmark: data.markId
    },
  })
}

// 挂号科室列表
export const registerList = data => {
  var obj = {};
  for (var k in data) {
    if (k != "apiurl") {
      obj[k] = data[k];
    }
  }
  return request({
    url: data.apiurl,
    method: 'get',
    params: {
      ...obj
    },
  })
}

// 挂号患者弹窗列表
export const modalPatientList = data => {
  return request({
    url: "api/single/listpage",
    method: 'get',
    params: {
      ...data
    },
  })
}


// 保存
export const infoSave = data => {
  return request({
    url: data.apiurl,
    method: data.method,
    data: {
      Code: data.Code,
      Oid: data.cardNo || '',
      Value: JSON.stringify(data.Value),
      Att: data.Att || ''
    },
  })
}

// 挂号列表 ------------------------------------------------------------------------------------

// export const ghlrigsterHead  = data => {
//   return request({
//     url: '/api/single/list',
//     method: 'get',
//     params:{
//       code:"Patient",
//       mCode: "1002",
//       // ...data
//     },
//   })
// }
// // 患者列表
// export const ghlrigsterList  = data => {
//   var obj={};
//   for(var k in data){
//     if(k!="apiurl"){
//       obj[k] = data[k];
//     }
//   }
//   return request({
//     url:data.apiurl,
//     method: 'get',
//     params:{
//       ...obj
//     },
//   })
// }

//患者列表表头数据
export const chargeList = data => {
  return request({
    url: '/api/single/listpage',
    method: 'get',
    params: {
      ...data
    },
  })
}




//患者收费信息
export const paientCharge = data => {
  return request({
    url: '/api/simapi/get',
    method: 'get',
    params: {
      ...data
    },
  })
}
