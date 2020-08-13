// 获取下拉框
import request from '@/utils/request.js'

export const optionType  = data => {
  return request({
    url:"/api/single/list",
    method: 'get',
    params:{
      mCode:"21008",
      pageCode:data
    },
  })
}

// 数据源下拉框
export const getSourceType  = data => {
  return request({
    url:"/api/single/selectex",
    method: 'get',
    params:{
      code:data
    },
  })
}


//删除信息
export const deleteInfo = data => {
  return request({
    url: '/api/simapi/saDel',
    method: 'DELETE',
    data: {
      ...data
    },
  })
}

