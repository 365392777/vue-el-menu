import request from '@/utils/request.js'
//管理类配置-诊查费设置--------------------------------------

//门诊科室下拉框  /api/single/selectex?code=
export const LevlRoomList  = data => {
  return request({
    url: '/api/single/selectex',
    method: 'get',
     params:{
      code: "Department_Select",

     },
  })
}



//获取职称和电子签名等级下拉
export const LevlCodeSingList  = data => {
  return request({
    url: '/api/single/list',
    method: 'get',
     params:{
      mCode: "21008",
      pageCode:"Diagnosis"
     },
  })
}



//选择医生 根据医生id获取右边关联诊室
export const LinkRoomByDoctorId  = data => {
  return request({
    url: '/api/single/list',
    method: 'get',
     params:{
      mCode: "ClinicRoom_Doctor",
      DocId_dmark:data.id || ''
     },
  })
}



//点击关联诊室左上角加号 根据在门诊医生里面选择的科室找到科室下的所有诊室
export const LinkDoctorList  = data => {
  return request({
    url: '/api/single/listpage',
    method: 'get',
     params:{
      mCode: "Dep_ClinicRoom",
      DepId_dmark:data.id || ''
     },
  })
}



// 新增点击 门诊医生显示医院科室
export const ExaminationDoctorList  = data => {
  return request({
    url: '/api/single/list',
    method: 'get',
     params:{
      mCode: "21004",
     },
  })
}

//新增点击 门诊医生 根据科室id显示医生信息
export const DoctorListById  = data => {
  return request({
    url: '/api/single/listpage',
    method: 'get',
     params:{
      mCode: "Department_Doctor",
      id_dmark:data.id || ''
     },
  })
}








//列表数据
export const ExaminationFeeList  = data => {
  return request({
    url: '/api/single/listpage',
    method: 'get',
     params:{
      mcode: "DiagnosisList",
      ...data
     },
  })
}
//新增或编辑获取诊察费设置
export const AddExaminationFeeList  = data => {
  return request({
    url: '/api/simapi/get',
    method: 'get',
     params:{
       code:'20020',
       id:data.id || ''
     },
  })
}

//启停医技组套信息 SaupMedicalSkillsList
export const SaupExaminationFeeList = data => {
  return request({
    url: '/api/simapi/saUp',
    method: 'put',
    data:{
      code:'20020',
      Oid: '',
      Value: JSON.stringify(data.Value),
      Att: {}

    },
  })
}

//弹窗下拉框  费用项目 /api/single/selectex
export const SelectFeeList  = data => {
  return request({
    url: '/api/single/selectex',
    method: 'get',
     params:{
      code:'ChargeItemSelect',
       name:''
     },
  })
}
//保存疾病信息

export const SaveExaminationFeeList = data => {
  return request({
    url: '/api/simapi/save',
    method: 'post',
    data:{
      code:'20020',
      Oid: '',
      Value: JSON.stringify(data.Value),
      Att: {}

    }

  })
}







//管理类配置-药品耗材-----------------------------------
//药品耗材页面整体下拉框

export const DrugConsumablesSelectAll = data => {
  return request({
    url: 'api/single/list',
    method: 'get',
    params:{
      mCode:'21008',
      pageCode:"Drugs",
    }

  })
}








//管理类配置-医生排班-----------------------------------

//报告科室下拉框
export const ReportRoomSelect = data => {
  return request({
    url: '/api/single/selectex',
    method: 'get',
    params:{
      code:'GetDeptDropDown',
    }

  })
}


/// 医生停诊

export const SaupScheduling = data => {
  return request({
    url: '/api/simapi/saDel',
    method: 'delete',
    data:{
      code:'20005',
      Oid: '',
      Value: JSON.stringify(data.Value),
      Att: {}

    }

  })
}



//添加排班人员 保存
export const SaveScheduling = data => {
  return request({
    url: '/api/simapi/save',
    method: 'post',
    data:{
      code:'20005',
      Oid: '',
      Value: JSON.stringify(data.Value),
      Att: {}

    }

  })
}




//诊室下拉框  GetDeptOfSetCostDropDown

export const DoctorRoomDropDownSelect = data => {
  return request({
    url: '/api/single/selectex',
    method: 'get',
    params:{
      code:'GetClinicRoomDropDown',
      empId_dmark: data.id || '',
    }

  })
}



//门诊医生下拉框
export const DoctorRoomSelect = data => {
  return request({
    url: '/api/single/selectex',
    method: 'get',
    params:{
      code:'GetDoctorOfSetCostDropDown',
      deptId_dmark:data.id || '',
      noonCode:data.code || ''
    }

  })
}

//弹窗--获取医生出诊信息
export const GetDoctorVisitsInformation  = data => {
  return request({
    url: '/api/simapi/get',
    method: 'get',
     params:{
      Code:'20005',
      id_dmark:data.id || ''

     },
  })
}




//获取排班信息
export const GetSchedulingInformation  = data => {
  return request({
    url: '/api/single/list',
    method: 'get',
     params:{
      mCode:'21007',
      ...data

     },
  })
}


 //树状数据
export const DoctorTreeList  = data => {
  return request({
    url: '/api/single/list',
    method: 'get',
     params:{
      mCode:'GetSchemaDeptList',

     },
  })
}








//管理类配置-科室排班------------------------------------Department scheduling

//表头名字

export const TableDepartmentSchedulingName  = data => {
  return request({
    url: '/api/single/list',
    method: 'get',
     params:{
      mCode:'1002',
      code:'DeptStuff'

     },
  })
}
//列表 ClinicRoomList
export const DepartmentSchedulingIdList = data => {
  return request({
    url: '/api/single/listpage',
    method: 'get',
     params:{
      mCode:'DeptStuffList',
      ...data

     },
  })
}

//挂号科室
export const RegistrationDepartmentSelect = data => {
  return request({
    url: '/api/single/selectex',
    method: 'get',
    params:{
      code:'GetDeptDropDown',
      isStuff:data.isStuff || '',
    }

  })
}

//挂号类型
export const RegistrationTypeSelect = data => {
  return request({
    url: '/api/single/list',
    method: 'get',
    params:{
      pageCode:'DeptStuff',
      mCode:'21008',
    }

  })
}

//新增&&编辑
export const AddDepartmentScheduling = data => {
  return request({
    url: '/api/simapi/get',
    method: 'get',
     params:{
      Code:'20001',
      Id_dmark:data.id || ''
     },
  })
}

//保存记录信息
export const SaveDepartmentScheduling = data => {
  return request({
    url: '/api/simapi/save',
    method: 'post',
    data:{
      code:'20001',
      Oid: data.Oid || '',
      Value: JSON.stringify(data.Value),
      Att: {}

    }

  })
}

//删除列表数据 /api/simapi/saDel
export const DelDepartmentScheduling = data => {
  return request({
    url: '/api/simapi/saDel',
    method: 'delete',
    data:{
      code:'20001',
      Oid: '',
      Value: JSON.stringify(data.Value),
      Att: {}

    },
  })
}

//停启
export const SaupDepartmentScheduling = data => {
  return request({
    url: '/api/simapi/saUp',
    method: 'put',
    data:{
      code:'20001',
      Oid: '',
      Value: JSON.stringify(data.Value),
      Att: {}

    },
  })
}







//管理类配置-诊室管理----------------------------------
//表头名字

export const TableHeaderConsultingName  = data => {
  return request({
    url: '/api/single/list',
    method: 'get',
     params:{
      mCode:'1002',
      code:'ClinicRoom'

     },
  })
}


//列表 ClinicRoomList
export const ClinicRoomListIdList = data => {
  return request({
    url: '/api/single/listpage',
    method: 'get',
     params:{
      mCode:'ClinicRoomList',
      ...data

     },
  })
}




//新增&&编辑
export const AddConsultingRoom = data => {
  return request({
    url: '/api/simapi/get',
    method: 'get',
     params:{
      Code:'20003',
      Id_dmark:data.id || ''
     },
  })
}


//停启
export const SaupConsultingRoom = data => {
  return request({
    url: '/api/simapi/saUp',
    method: 'put',
    data:{
      code:'20003',
      Oid: '',
      Value: JSON.stringify(data.Value),
      Att: {}

    },
  })
}

//删除列表数据 /api/simapi/saDel
export const DelConsultingRoom = data => {
  return request({
    url: '/api/simapi/saDel',
    method: 'delete',
    data:{
      code:'20003',
      Oid: '',
      Value: JSON.stringify(data.Value),
      Att: {}

    },
  })
}
//保存记录信息
export const SaveConsultingRoom = data => {
  return request({
    url: '/api/simapi/save',
    method: 'post',
    data:{
      code:'20003',
      Oid: '',
      Value: JSON.stringify(data.Value),
      Att: {}

    }

  })
}

//门诊科室下拉框
export const ConsultingRoomSelect = data => {
  return request({
    url: '/api/single/selectex',
    method: 'get',
    params:{
      code:'GetDeptStuffDropDown',
      name:'',
    }

  })
}

//弹窗  关联门诊医生
export const ConsultingRoomDoctorSelect = data => {
  return request({
    url: '/api/single/list',
    method: 'get',
    params:{
      mCode:'GetEmployeeListOfDept',
      ...data
    }

  })
}








//管理类配置-部门管理---------------------------------------------
//列表--与员工管理  树状图 同数据
export const ManagementList  = data => {
  return request({
    url: '/api/single/list',
    method: 'get',
     params:{
      mCode:'21000',
      type:'2'

     },
  })
}


//列表  表头名称
export const TableHeaderName  = data => {
  return request({
    url: '/api/single/list',
    method: 'get',
     params:{
      mCode:'1002',
      code:'Dept'

     },
  })
}


//新增&&编辑
export const AddManagement = data => {
  return request({
    url: '/api/simapi/get',
    method: 'get',
     params:{
      Code:'20000',
      id:data.id || ''

     },
  })
}

//列表数据  /api/single/listpage?mCode=

export const ManagementIdList = data => {
  return request({
    url: '/api/single/listpage',
    method: 'get',
     params:{
      Code:'20000',
      mCode:'DeptList',
      ...data

     },
  })
}

//保存记录信息
export const SaveManagementIdList = data => {
  return request({
    url: '/api/simapi/save',
    method: 'post',
    data:{
      code:'20000',
      Oid: '',
      Value: JSON.stringify(data.Value),
      Att: {}

    }

  })
}

//停启记录
export const SaupManagementIdList = data => {
  return request({
    url: '/api/simapi/saUp',
    method: 'put',
    data:{
      code:'20000',
      Oid: '',
      Value: JSON.stringify(data.Value),
      Att: {}

    },
  })
}

//部门分类下拉框
export const ListDepartmentClassification = data => {
  return request({
    url: '/api/single/selectex',
    method: 'get',
    params:{
      code:'GetDeptTypeDropDown',
      name:'',
    }

  })
}

//删除列表数据 /api/simapi/saDel
export const DelManagementIdList = data => {
  return request({
    url: '/api/simapi/saDel',
    method: 'delete',
    data:{
      code:'20000',
      Oid: '',
      Value: JSON.stringify(data.Value),
      Att: {}

    },
  })
}








//管理类配置-员工管理------------------------------
//新增&&编辑
export const AddStaff = data => {
  return request({
    url: '/api/simapi/get',
    method: 'get',
     params:{
      Code:'20002',
      Id_dmark:data.id || ''
     },
  })
}

//列表  表头名称
export const TableHeaderStaffName  = data => {
  return request({
    url: '/api/single/list',
    method: 'get',
     params:{
      mCode:'1002',
      code:'Employee'

     },
  })
}

//列表数据
export const AddStaffIdList = data => {
  return request({
    url: '/api/single/listpage',
    method: 'get',
     params:{
      Code:'20002',
      mCode:'EmployeeList',
      ...data

     },
  })
}


//保存记录信息
export const SaveStaffIdList = data => {
  return request({
    url: '/api/simapi/save',
    method: 'post',
    data:{
      code:'20002',
      Oid: '',
      Value: JSON.stringify(data.Value),
      Att: {}

    }

  })
}
export const SaupStaffIdList = data => {
  return request({
    url: '/api/simapi/saUp',
    method: 'put',
    data:{
      code:'20002',
      Oid: '',
      Value: JSON.stringify(data.Value),
      Att: {}

    },
  })
}

//所属部门 下拉框
export const ListSaupStaffId = data => {
  return request({
    url: '/api/single/selectex',
    method: 'get',
    params:{
      code:'GetDeptDropDown',
      name:'',
    }

  })
}
//删除列表数据 /api/simapi/saDel
export const DelListSaupStaffId = data => {
  return request({
    url: '/api/simapi/saDel',
    method: 'delete',
    data:{
      code:'20002',
      Oid: '',
      Value: JSON.stringify(data.Value),
      Att: {}

    },
  })
}







//管理类配置-诊室管理------------------------------











//基础配置-诊疗项目--------------------------------------------------------------------------------------------
//列表信息
export const DiagnosisTreatmentList  = data => {
  return request({
    url: '/api/single/listpage',
    method: 'get',
     params:data,
  })
}

//新增接口&&编辑
export const AddTreatmentList  = data => {
  return request({
    url: '/api/simapi/get',
    method: 'get',
     params:data,
  })
}

//保存诊疗项目信息
export const SaveTreatmentList  = data => {
  return request({
    url: '/api/simapi/save',
    method: 'post',
    //  params:data,
    //   data: {
    //   'Code': '20017',
    //   'Oid': '',
    //   'Value': JSON.stringify(data.Value),
    //   'Att': {}
    // }
    data:data

  })
}
//启停诊疗项目
export const SaupTreatmentList = data => {
  return request({
    url: '/api/simapi/saUp',
    method: 'put',
    data:data

  })
}

//基础配置-病种--------------------------------------------------------------------------------------------

//病种列表
export const DiseaseList  = data => {
  return request({
    url: '/api/single/listpage',
    method: 'get',
     params:{
      mCode:'DiseaseList',
       ...data,
     },
  })
}

//新增或编辑获取数据
export const AddDiseaseList  = data => {
  return request({
    url: '/api/simapi/get',
    method: 'get',
     params:data,
  })
}

//保存疾病信息

export const SaveDiseaseList = data => {
  return request({
    url: '/api/simapi/save',
    method: 'post',
    data:data

  })
}

//启停病种
export const SaupDiseaseList = data => {
  return request({
    url: '/api/simapi/saUp',
    method: 'put',
    data:data

  })
}

//基础配置-用药频次--------------------------------------------------------------------------------------------
//列表数据
export const MedicationList  = data => {
  return request({
    url: '/api/single/listpage',
    method: 'get',
     params:{
      mcode: "FrequencyList",
      ...data
     },
  })
}

//新增或编辑获取数据
export const AddMedicationList  = data => {
  return request({
    url: '/api/simapi/get',
    method: 'get',
     params:data,
  })
}

//保存疾病信息

export const SaveMedicationList = data => {
  return request({
    url: '/api/simapi/save',
    method: 'post',
    data:data

  })
}
//启停频次信息
export const SaupMedicationList = data => {
  return request({
    url: '/api/simapi/saUp',
    method: 'put',
    data:data

  })
}

//基础配置-医技组套--------------------------------------------------------------------------------------------

//列表数据
export const MedicalSkillsList  = data => {
  return request({
    url: '/api/single/listpage',
    method: 'get',
     params:{
      mcode: "PackageList",
      ...data
     },
  })
}

//新增或编辑获取医技组套信息
export const AddMedicalSkillsList  = data => {
  return request({
    url: '/api/simapi/get',
    method: 'get',
     params:{
      code: 20018,
      id:data.id || ''
     },
  })
}

//保存医技组套信息

export const SaveMedicalSkillsList = data => {
  return request({
    url: '/api/simapi/save',
    method: 'post',
    data:data

  })
}

//启停医技组套信息 SaupMedicalSkillsList
export const SaupMedicalSkillsList = data => {
  return request({
    url: '/api/simapi/saUp',
    method: 'put',
    data:data

  })
}

//获取收费项目列表
export const ListChargingItems = data => {
  return request({
    url: '/api/single/listpage',
    method: 'get',
    params:{
      mCode:'ChargeItemList',
      ...data
    }

  })
}

//获取药品耗材列表
export const ListDrugConsumables = data => {
  return request({
    url: '/api/single/listpage',
    method: 'get',
    params:{
      mCode:'DurgConsumablesList',
      name:'',
    }

  })
}













// 财务管理---账务接口

// 金额充值
// export const GoldCoinRecharge = data => {
//   return request({
//     url: '/api/simapi/save',
//     method: 'post',
//     data: {
//       'Code': '10012',
//       'Oid': '',
//       'Value': JSON.stringify(data.Value),
//       'Att': {}
//     }
//   })
// }

// 积分充值
// export const PointsRecharge = data => {
//   return request({
//     url: '/api/simapi/save',
//     method: 'post',
//     data: {
//       'Code': '10014',
//       'Oid': '',
//       'Value': JSON.stringify(data.Value),
//       'Att': {}
//     }
//   })
// }
