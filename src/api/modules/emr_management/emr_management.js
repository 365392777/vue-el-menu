import request from '@/utils/request.js'

// 表格 
export const formclassify = data => {
  return request({
    url: '/api/single/listpage',
    method: 'get',
    params: {
      mCode: 'TemplateList',
      JurCode: data.JurCode || '',
      TempClass: data.TempClass || '',
      Name: data.Name || '',
      pageNumber: data.pageNumber || 1,
      pageSize: data.pageSize || 10,
    },
  })
}
// 树形菜单
export const treemenu = data => {
  return request({
    url: '/api/single/list',
    method: 'get',
    params: {
      mCode: '21000',
      type: '5'
    },
  })
}
// 病历分类
export const classification = data => {
  return request({
    url: '/api/simapi/get',
    method: 'get',
    params: {
      code: '21002',
      id_dmark:data.id_dmark || ''
    },
  })
}

// 新增或编辑获取字典域或字典明细信息
export const addsimapi = data => {
  return request({
    url: '/api/simapi/get',
    method: 'get',
    params: {
      code: '21003',
      Id_dmark: data.id || '',
    },
  })
}
// 电子病历模板新增
export const apimedicalapi  = data => {
  return request({
    url: '/api/simapi/get',
    method: 'get',
    params: {
      code: '21005',
      Id_dmark: data.id || '',
    },
  })
}

// 保存
export const preserve = data => {
  return request({
    url: '/api/simapi/save',
    method: 'post',
    data: {
      Code: '21003',
      Oid: data.Oid || '',
      Value: JSON.stringify(data.Value) || '',
      Att: {},
    },
  })
}
// 电子病历编辑保存
export const medicalCase = data => {
  return request({
    url: '/api/simapi/save',
    method: 'post',
    data: {
      Code: '21005',
      Oid: data.Oid || '',
      Value: JSON.stringify(data.Value) || '',
      Att: {},
    },
  })
}
// 病历保存
export const historyPreserve = data => {
  return request({
    url: '/api/simapi/save',
    method: 'post',
    data: {
      Code: '21002',
      Oid: data.Oid || '',
      Value: JSON.stringify(data.Value) || '',
      Att: {},
    },
  })
}
// 删除
export const deletesaDel = data => {
  return request({
    url: '/api/simapi/saDel',
    method: 'post',
    params: {
      Code: '21005',
      Oid: '',
      Value: '',
      Att: '',
    },
  })
}

/**
 *控件模板api
 */

 

