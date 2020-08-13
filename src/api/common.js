import request from '@/utils/request.js'

// 全局公用请求接口
export const $table = data => {
  return request({
    url: 'api/news',
    method: 'get'
    // params: {
    // //   mCode: '21008', // 接口编码
    // //   pageCode: data.pageCode // 界面编码
    // }
  })
}

// 获取当前页面所有的下拉数据
export const $getSelect = data => {
  return request({
    url: '/api/single/list',
    method: 'get',
    params: {
      mCode: '21008', // 接口编码
      pageCode: data.pageCode // 界面编码
    }
  })
}

// 获取数据源下拉框
export const $getSelectex = data => {
  return request({
    url: '/api/single/selectex',
    method: 'get',
    params: {
      ...data
    }
  })
}

// 获取列表数据接口 [无分页]
export const $getList = data => {
  return request({
    url: '/api/single/list',
    method: 'get',
    params: {
      ...data
    }
  })
}

// 获取列表数据[有分页]功能
export const $getListPage = data => {
  return request({
    url: '/api/single/listpage',
    method: 'get',
    params: {
      ...data
      /**
             * mCode      必填[否] 类型[int] 描述[页码] 默认值[1]
             * pageNumber 必填[否] 类型[int] 描述[页码] 默认值[1]
             * pageSize   必填[否] 类型[int] 描述[每页显示条数] 默认值[10]
             */
    }
  })
}

// 获取系统列表表头
export const $getTableHead = data => {
  return request({
    url: '/api/single/list',
    method: 'get',
    params: {
      code: data,
      mCode: '1002'
    }
  })
}

// 获取系统列表
export const $getTableList = data => {
  var obj = {}
  for (var k in data) {
    if (k != 'apiurl') {
      obj[k] = data[k]
    }
  }
  return request({
    url: data.apiurl,
    method: 'get',
    params: {
      ...obj
    }
  })
}

/**
 * 一般用于新增，编辑获取该条数据的详细信息
 * @param {*} data 后台接口需要的参数 参数名看接口文档
 */
export const $getDefaultInfo = data => {
  return request({
    url: '/api/simapi/get',
    method: 'get',
    params: {
      ...data
    }
  })
}

/**
 * 数据保存提交请求 Att不常用 我在这边固定了 页面上可以不用定义改字段
 * @param {*} data
 */
export const $saveData = data => {
  return request({
    url: '/api/simapi/save',
    method: 'POST',
    data: {
      ...data,
      Att: ''
    }
  })
}

/**
 * 一般用于更新数据请求
 * @param {*} data
 */
export const $update = data => {
  return request({
    url: '/api/simapi/saUp',
    method: 'PUT',
    data: {
      ...data,
      Att: ''
    }
  })
}

/**
 * 删除数据接口，一般用于删除数据请求
 * @param {*} data
 */
export const $delete = data => {
  return request({
    url: '/api/simapi/saDel',
    method: 'DELETE',
    data: {
      ...data,
      Att: ''
    }
  })
}
