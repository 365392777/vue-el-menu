//  系统界面的接口-------------------------------------------------------------
import request from '@/utils/request.js'

// 获取系统菜单数据
export const systemList = data => {
  return request({
    url: '/api/single/list',
    method: 'get',
    params: {
      mCode: '1001'
    }
  })
}
// // 字典明细列表
// export const detailList = data => {
//   return request({
//     url: '/api/single/listpage',
//     method: 'get',
//     params: {
//       mCode:'DictionaryClassList',
//       type: data.type,
//       id: data.id || '',
//       dicname:data.dicname || ''
//     },
//   })
// }
//
// // 新增或编辑获取字典域或字典明细信息
// export const addsimapi = data => {
//   return request({
//     url: '/api/simapi/get',
//     method: 'get',
//     params: {
//       code: '20004',
//       id:data._id || ''
//     },
//   })
// }
// // 保存
// export const saveapi = data => {
//   return request({
//     url: '/api/simapi/save',
//     method: 'post',
//     data: {
//       Code: '20004',
//       Oid: data.Oid || "",
//       Value: JSON.stringify(data.Value),
//       Att: {}
//     },
//   })
// }
