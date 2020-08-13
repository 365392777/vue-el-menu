import request from '@/utils/request.js'

//收费系统--门诊挂号--重打 --------------------------------------


// 获取可重打门诊号信息

export const GetReplayNo  = data => {
  return request({
    url: '/api/simapi/get',
    method: 'get',
     params:{
      Code: "10005",
      clinicCode:data.clinicCode,

     },
  })
}



//重打表头
export const NewHeader  = data => {
  return request({
    url: '/api/single/list',
    method: 'get',
     params:{
      mCode: "1002",
      code:"RegisterPrint",

     },
  })
}




//收费系统--门诊挂号--退号 --------------------------------------
//退号列表
export const ReturnNoList  = data => {
  return request({
    url: '/api/single/listpage',
    method: 'get',
     params:{
      mCode: "NotSeeDoctorList",
      ...data

     },
  })
}

//退号列表表头
export const ReturnNoHeader  = data => {
  return request({
    url: '/api/single/list',
    method: 'get',
     params:{
      mCode: "1002",
      code:"CanRegisterReturn",

     },
  })
}

//获取可退号信息
export const GetReturnNo  = data => {
  return request({
    url: '/api/simapi/get',
    method: 'get',
     params:{
      Code: "10003",
      clinicCode:data.clinicCode,

     },
  })
}
//退号

export const RetreturnNo  = data => {
  return request({
    url: '/api/simapi/save',
    method: 'post',
    data:{
      code:'10003',
      Oid: '',
      Value: JSON.stringify(data.Value),
      Att: {}

    }
  })
}
















//收费系统--门诊挂号--预约挂号 --------------------------------------


//获取编辑信息

export const editNoList  = data => {
  return request({
    url: '/api/simapi/get',
    method: 'get',
     params:{
      Code: "10002",
      ClinicCode:data.ClinicCode || ''

     },
  })
}


//预约按钮
export const saveAppointment  = data => {
  return request({
    url: '/api/simapi/save',
    method: 'post',
    data:{
      code:'10002',
      Oid: '',
      Value: JSON.stringify(data.Value),
      Att: {}

    }
  })
}









//号源表

export const DoctorTimeNoList  = data => {
  return request({
    url: '/api/single/list',
    method: 'get',
     params:{
      mCode: "Get_AdRegisterInfo",
      ...data

     },
  })
}






//门诊医师列表
export const RoomDoctorListTime  = data => {
  return request({
    url: '/api/single/list',
    method: 'get',
     params:{
      mCode: "GetOrderSchemaDoctorList",
      ...data

     },
  })
}





//职称类别下拉框

export const TitleCategorySelect  = data => {
  return request({
    url: '/api/single/list',
    method: 'get',
     params:{
      mCode: "21008",
      pageCode:"OrderRegister"

     },
  })
}



//预约科室下拉框
export const AppointmentDepartmentSelect  = data => {
  return request({
    url: '/api/single/selectex',
    method: 'get',
     params:{
      Code: "GetDeptDropDown",
      isStuff:"1"

     },
  })
}







//收费系统--住院收费--直接入院 --------------------------------------


//获取新增/编辑信息
export const queryPatientInformation  = data => {
    return request({
      url: '/api/simapi/get',
      method: 'get',
       params:{
        Code: "10009",
        cardNo:data.cardNo

       },
    })
  }



//保存记录信息

export const savePatientInformation  = data => {
    return request({
      url: '/api/simapi/save',
      method: 'post',
      data:{
        code:'10009',
        Oid: '',
        Value: JSON.stringify(data.Value),
        Att: {}

      }
    })
  }



//所有科室下拉框 GetDeptDropDown
export const RoomList  = data => {
    return request({
      url: '/api/single/selectex',
      method: 'get',
       params:{
        code: "GetDeptDropDown",

       },
    })
  }

  //科室下医生下拉框
  export const RoomDoctorList  = data => {
    return request({
      url: '/api/single/selectex',
      method: 'get',
       params:{
        code: "GetDoctorDropDown",
        deptId_dmark:data.id

       },
    })
  }

  //科室下病区下拉框  GetInpatientAreaDropDown

  export const InpatientAreaRoom  = data => {
    return request({
      url: '/api/single/selectex',
      method: 'get',
       params:{
        code: "GetInpatientAreaDropDown",
        deptId_dmark:data.id

       },
    })
  }








//双击列表显示患者信息
export const patientInformation  = data => {
    return request({
      url: '/api/simapi/get',
      method: 'get',
       params:{
        mCode: "10009",
        cardNo:data.cardNo

       },
    })
  }






//直接入院患者列表
export const patientList  = data => {
    return request({
      url: '/api/single/listpage',
      method: 'get',
       params:{
        mCode: "GetPatientOfDirectLiveHospitalList",
        ...data

       },
    })
  }



//地址下拉框
export const AdressList  = data => {
    return request({
      url: '/api/single/list',
      method: 'get',
       params:{
        mCode: "21000",
        type:"10"

       },
    })
  }
