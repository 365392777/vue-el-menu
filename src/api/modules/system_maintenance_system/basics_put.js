//  基础配置 api
import request from '@/utils/request.js'

// 字典分类列表  表格列表
export const dictionaries = data => {
  return request({
    url: '/api/single/listpage',
    method: 'get',
    params: {
      mCode: 'DictionaryList',
      type: data.type || ''  ,
      code: data.code || '',
      nacode:data.nacode || '',
      dictypename: data.name || '',
      pageNumber: data.pageNumber || 1,
      pageSize: data.pageSize || 10

    },
  })
}

// 树形菜单
export const treeMenuList = data => {
  return request({
    url: '/api/single/list',
    method: 'get',
    params: {
      mCode: data.mCode || '',
      type: data.type || ''
    },
  })
}

//左表格 字典明细
export const dictionariesList1 = data => {
  return request({
    url: '/api/single/listpage',
    method: 'get',
    params: {
      mCode: 'DictionaryList1',
      type: data.type || ''  ,
      code: data.code || '',
      nacode:data.nacode || '',
      name: data.name || '',
      pageNumber: data.pageNumber || 1,
      pageSize: data.pageSize || 10

    },
  })
}
// 右表格 字典明细列表
export const detailList = data => {
  return request({
    url: '/api/single/listpage',
    method: 'get',
    params: {
      mCode:'DictionaryClassList',
      type: data.type,
      id_dmark: data.id || '',
      name:data.name,
      dicname: data.dicname || '',
      pageNumber: data.pageNumber || 1,
      pageSize: data.pageSize || 10
    },
  })
}

// 新增或编辑获取字典域或字典明细信息
export const addsimapi = data => {
  return request({
    url: '/api/simapi/get',
    method: 'get',
    params: {
      code: '20004',
      id:data._id || ''
    },
  })
}
// 保存
export const saveapi = data => {
  return request({
    url: '/api/simapi/save',
    method: 'post',
    data: {
      Code: '20004',
      Oid: data.Oid || "",
      Value: JSON.stringify(data.Value),
      Att: {}
    },
  })
}
// 启停 start
export const startSaUp= data => {
  return request({
    url: '/api/simapi/saUp',
    method: 'put',
    data: {
      Code: '20004',
      Oid: "",
      Value: JSON.stringify(data.Value),
      Att: {}
    },
  })
}

