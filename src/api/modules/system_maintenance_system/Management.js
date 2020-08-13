import request from '@/utils/request.js'
// 界面列表请求 
export const administer = data => {
  return request({
    url: '/api/single/list',
    method: 'get',
    params: {
      mCode: 1002,
      code:'DeptStuff',
    },
  })
}

export const administerlist = data => {
  return request({
    url: '/api/simapi/get',
    method: 'get',
    params: {
      Code: 20001,
      id_dmark:'8'
    },
  })
}

export const DeptStuffList = data => {
  return request({
    url: 'api/single/listpage',
    method: 'get',
    params: {
      mCode:DeptStuffList
    },
  })
}