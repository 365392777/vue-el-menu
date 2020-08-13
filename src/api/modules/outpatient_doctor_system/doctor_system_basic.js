import request from '@/utils/request.js'

// 门诊处方列表
export const recipeList = data => {
    return request({
        url: "/api/simapi/get",
        method: 'get',
        params: {
            Code: "30003",
            clinicCode: data.clinicCode || "" //门诊号
        },
    })
}

// 获取患者信息
export const patientInfo = data => {
    return request({
        url: "/api/single/list",
        method: 'get',
        params: {
            ...data
        },
    })
}

//批量删除处方
export const deleteRecipe = data => {
    return request({
        url: '/api/simapi/saDel',
        method: 'delete',
        data: {
            "Code": "30003",
            "Oid": "",
            "Value": JSON.stringify(data.Value),
            "Att": {}
        },
    })
};

//保存处方信息
export const savePrescription = data => {
    return request({
        url: '/api/simapi/save',
        method: 'post',
        data: {
            "Code": "30003",
            "Oid": "",
            "Value": JSON.stringify(data.Value),
            "Att": {}
        }
    })
}

//退药
export const withdrawalPrescription = data => {
  return request({
    url: '/api/simapi/saUp',
    method: 'put',
    data: {
      "Code": "30003",
      "Oid": "",
      "Value": JSON.stringify(data.Value),
      "Att": {}
    }
  })
}


// 患者列表
export const doctotrPaientList = data => {
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


//获取药品数据
export const getDrugList = data => {
    return request({
        url: '/api/single/list',
        method: 'get',
        params: {
            "mCode": "60006",
            "itemType": data.itemType,
            "name": data.name || "",
        }
    })
}
