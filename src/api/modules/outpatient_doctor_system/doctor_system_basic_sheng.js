import request from '@/utils/request.js'


// 门诊处方列表
export const herbList = data => {
  return request({
    url: "/api/single/listpage",
    method: 'get',
    params: {
      mcode: "HerbsList",
      clinicCode:data.clinicCode, //门诊号
      // pageNumber: data.keyWord || 1,
      // pageSize: data.keyWord || 10,
    },
  })
}
//1.中医诊断
export const GetWinDiseaseList = data => {
  return request({
    url: '/api/single/list',
    method: 'get',
    params: {
      mCode: "GetWinDiseaseList",
      itemType: data.itemType,
      keyWord: data.keyWord || "",
      cwSign: data.cwSign || 1,
      pageNumber: data.keyWord || 1,
      pageSize: data.keyWord || 10,
    }
  })
}
//2.中医侯症
export const GetChMedSyDicList = data => {
  return request({
    url: '/api/single/list',
    method: 'get',
    params: {
      mCode: "GetChMedSyDicList",
    }
  })
}
//获取住院医生（医嘱）
export const getDrugList = data => {
  return request({
    url: '/api/single/list',
    method: 'get',
    params: {
      mCode: "60006",
      itemType: data.itemType,
      name: data.name || "",
    }
  })
}
// 3.新增或编辑获取数据（针对草药）
export const addList = data => {
  return request({
    url: '/api/simapi/get',
    method: 'get',
    params: {
      Code: "30004",
      id_dmark: data.id_dmark || "",
    }
  })
}
// 4.保存处方信息
export const saveList = data => {
  return request({
    url: '/api/simapi/save',
    method: 'post',
    data: {
      Code: "30004",
      Oid: data.Oid || "",
      Value: JSON.stringify(data.Value),
      Att:  {},
    }
  })
}
// 5.批量删除草药
export const saDelList = data => {
  return request({
    url: '/api/simapi/saDel',
    method: 'delete',
    data: {
      Code: "30004",
      Oid: data.Oid || "",
      Value: JSON.stringify(data.Value),
      Att: data.Att || {},
    }
  })
}

// 6.批量申请退药
export const saupList = data => {
  return request({
    url: '/api/simapi/saUp',
    method: 'put',
    data: {
      Code: "30004",
      Oid: data.Oid || "",
      Value: JSON.stringify(data.Value),
      Att: data.Att || {},
    }
  })
}
