// 获取下拉框
import request from '@/utils/request.js'

// 登录
export const Login = data => {
  return request({
    url: '/api/home/login',
    method: 'POST',
    data: {
      ...data
    }
  })
}

// 退出登录
export const outLogin = data => {
  return request({
    url: '/api/home/logout',
    method: 'POST',
    data: {
      ...data
    }
  })
}
