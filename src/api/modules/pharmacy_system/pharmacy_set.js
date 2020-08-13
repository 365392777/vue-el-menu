import request from '@/utils/request.js'
//药房管理-药房设置---------------------------------

// 保存 、保存 药房/库位 信息--树状
export const SaveDrugTree = data => {
    return request({
      url: '/api/simapi/save',
      method: 'post',
      data:{
        Code:"20012",
        Oid: "",
        Value: JSON.stringify(data.Value),
        Att:"",
      },
    })
  }

//.新增或编辑获取要药房信息
export const AddEditInformation = data => {
    return request({
      url: '/api/simapi/get',
      method: 'get',
      params:{
        code:"20012",
        id:data.id || ''
      },
    })
}
