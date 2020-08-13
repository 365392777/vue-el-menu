// 系统维护
import {
// 基础配置-药品
//   DrugList,
// 基础配置-诊疗项目
  DiagnosisTreatmentList,
  AddTreatmentList,
  SaveTreatmentList, SaupTreatmentList,

  // 基础配置-病种
  DiseaseList, AddDiseaseList, SaveDiseaseList, SaupDiseaseList,
  // 基础配置-用药频次
  MedicationList, AddMedicationList, SaveMedicationList, SaupMedicationList,
  // 基础配置-医技组套
  MedicalSkillsList, AddMedicalSkillsList, SaveMedicalSkillsList, SaupMedicalSkillsList, ListChargingItems, ListDrugConsumables,

  // 管理类配置-部门管理
  ManagementList, AddManagement, TableHeaderName, ManagementIdList, SaveManagementIdList, SaupManagementIdList, ListDepartmentClassification, DelManagementIdList,

  // 管理类配置-员工管理
  AddStaff, TableHeaderStaffName, AddStaffIdList, SaveStaffIdList, ListSaupStaffId, DelListSaupStaffId,

  // 管理类配置-诊室管理
  AddConsultingRoom, SaupConsultingRoom, SaupStaffIdList, TableHeaderConsultingName, ClinicRoomListIdList, DelConsultingRoom, SaveConsultingRoom,
  ConsultingRoomSelect, ConsultingRoomDoctorSelect,

  // 管理类配置-科室排班
  TableDepartmentSchedulingName, RegistrationDepartmentSelect, RegistrationTypeSelect, DepartmentSchedulingIdList, AddDepartmentScheduling,
  SaveDepartmentScheduling, DelDepartmentScheduling, SaupDepartmentScheduling,

  // 管理类配置-医生排班
  DoctorTreeList, GetSchedulingInformation, GetDoctorVisitsInformation, DoctorRoomSelect, DoctorRoomDropDownSelect, SaveScheduling,
  SaupScheduling, ReportRoomSelect,

  // 管理类配置-药品耗材
  DrugConsumablesSelectAll,

  // 管理类配置-诊察费设置
  ExaminationFeeList, AddExaminationFeeList, SaupExaminationFeeList, SelectFeeList, SaveExaminationFeeList, ExaminationDoctorList,
  DoctorListById, LinkDoctorList, LinkRoomByDoctorId, LevlCodeSingList,
  LevlRoomList

} from '@/api/modules/system_maintenance_system/system_maintenance_system.js'

const state = {

}
const mutations = {

}
const actions = {
// 管理类配置-诊察费设置-------------------------------------------
  LevlRoomList ({
    commit
  }, data) {
    return new Promise((resolve, reject) => {
      LevlRoomList(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },

  LevlCodeSingList ({
    commit
  }, data) {
    return new Promise((resolve, reject) => {
      LevlCodeSingList(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },

  LinkRoomByDoctorId ({
    commit
  }, data) {
    return new Promise((resolve, reject) => {
      LinkRoomByDoctorId(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },
  LinkDoctorList ({
    commit
  }, data) {
    return new Promise((resolve, reject) => {
      LinkDoctorList(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },
  DoctorListById ({
    commit
  }, data) {
    return new Promise((resolve, reject) => {
      DoctorListById(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },

  ExaminationDoctorList ({
    commit
  }, data) {
    return new Promise((resolve, reject) => {
      ExaminationDoctorList(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },

  // 列表
  ExaminationFeeList ({
    commit
  }, data) {
    return new Promise((resolve, reject) => {
      ExaminationFeeList(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },

  // AddExaminationFeeList 新增&& 编辑
  AddExaminationFeeList ({
    commit
  }, data) {
    return new Promise((resolve, reject) => {
      AddExaminationFeeList(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },
  // 停启
  SaupExaminationFeeList ({
    commit
  }, data) {
    return new Promise((resolve, reject) => {
      SaupExaminationFeeList(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },
  // 弹窗费用下拉框
  SelectFeeList ({
    commit
  }, data) {
    return new Promise((resolve, reject) => {
      SelectFeeList(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },

  // 保存信息 SaveExaminationFeeList
  SaveExaminationFeeList ({
    commit
  }, data) {
    return new Promise((resolve, reject) => {
      SaveExaminationFeeList(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },

  // 管理类配置-药品耗材-----------------------------------------
  DrugConsumablesSelectAll ({
    commit
  }, data) {
    return new Promise((resolve, reject) => {
      DrugConsumablesSelectAll(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },

  // 管理类配置-医生排班--------------------------------ReportRoomSelect

  ReportRoomSelect ({
    commit
  }, data) {
    return new Promise((resolve, reject) => {
      ReportRoomSelect(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },

  SaupScheduling ({
    commit
  }, data) {
    return new Promise((resolve, reject) => {
      SaupScheduling(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },

  SaveScheduling ({
    commit
  }, data) {
    return new Promise((resolve, reject) => {
      SaveScheduling(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },

  DoctorRoomDropDownSelect ({
    commit
  }, data) {
    return new Promise((resolve, reject) => {
      DoctorRoomDropDownSelect(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },

  DoctorRoomSelect ({
    commit
  }, data) {
    return new Promise((resolve, reject) => {
      DoctorRoomSelect(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },

  GetDoctorVisitsInformation ({
    commit
  }, data) {
    return new Promise((resolve, reject) => {
      GetDoctorVisitsInformation(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },

  GetSchedulingInformation ({
    commit
  }, data) {
    return new Promise((resolve, reject) => {
      GetSchedulingInformation(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },

  DoctorTreeList ({
    commit
  }, data) {
    return new Promise((resolve, reject) => {
      DoctorTreeList(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },

  // 管理类配置-科室排班-------------------------------------------------------------------------------------

  SaupDepartmentScheduling ({
    commit
  }, data) {
    return new Promise((resolve, reject) => {
      SaupDepartmentScheduling(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },

  DelDepartmentScheduling ({
    commit
  }, data) {
    return new Promise((resolve, reject) => {
      DelDepartmentScheduling(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },
  SaveDepartmentScheduling ({
    commit
  }, data) {
    return new Promise((resolve, reject) => {
      SaveDepartmentScheduling(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },

  AddDepartmentScheduling ({
    commit
  }, data) {
    return new Promise((resolve, reject) => {
      AddDepartmentScheduling(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },

  DepartmentSchedulingIdList ({
    commit
  }, data) {
    return new Promise((resolve, reject) => {
      DepartmentSchedulingIdList(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },

  RegistrationTypeSelect ({
    commit
  }, data) {
    return new Promise((resolve, reject) => {
      RegistrationTypeSelect(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },

  RegistrationDepartmentSelect ({
    commit
  }, data) {
    return new Promise((resolve, reject) => {
      RegistrationDepartmentSelect(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },

  TableDepartmentSchedulingName ({
    commit
  }, data) {
    return new Promise((resolve, reject) => {
      TableDepartmentSchedulingName(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },

  // 管理类配置-诊室管理-------------------------------------------------------------------------------------

  ConsultingRoomDoctorSelect ({
    commit
  }, data) {
    return new Promise((resolve, reject) => {
      ConsultingRoomDoctorSelect(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },

  ConsultingRoomSelect ({
    commit
  }, data) {
    return new Promise((resolve, reject) => {
      ConsultingRoomSelect(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },

  AddConsultingRoom ({
    commit
  }, data) {
    return new Promise((resolve, reject) => {
      AddConsultingRoom(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },
  SaupConsultingRoom ({
    commit
  }, data) {
    return new Promise((resolve, reject) => {
      SaupConsultingRoom(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },
  TableHeaderConsultingName ({
    commit
  }, data) {
    return new Promise((resolve, reject) => {
      TableHeaderConsultingName(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },
  //
  ClinicRoomListIdList ({
    commit
  }, data) {
    return new Promise((resolve, reject) => {
      ClinicRoomListIdList(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },
  DelConsultingRoom ({
    commit
  }, data) {
    return new Promise((resolve, reject) => {
      DelConsultingRoom(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },
  //
  SaveConsultingRoom ({
    commit
  }, data) {
    return new Promise((resolve, reject) => {
      SaveConsultingRoom(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },

  // 管理类配置-员工管理---------------------------------
  AddStaff ({
    commit
  }, data) {
    return new Promise((resolve, reject) => {
      AddStaff(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },
  TableHeaderStaffName ({
    commit
  }, data) {
    return new Promise((resolve, reject) => {
      TableHeaderStaffName(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },
  AddStaffIdList ({
    commit
  }, data) {
    return new Promise((resolve, reject) => {
      AddStaffIdList(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },
  // 保存
  SaveStaffIdList ({
    commit
  }, data) {
    return new Promise((resolve, reject) => {
      SaveStaffIdList(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },
  SaupStaffIdList ({
    commit
  }, data) {
    return new Promise((resolve, reject) => {
      SaupStaffIdList(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },
  // ListSaupStaffId
  ListSaupStaffId ({
    commit
  }, data) {
    return new Promise((resolve, reject) => {
      ListSaupStaffId(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },
  DelListSaupStaffId ({
    commit
  }, data) {
    return new Promise((resolve, reject) => {
      DelListSaupStaffId(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },

  // 管理类配置-部门管理---------------------------------------------------
  // 列表
  ManagementList ({
    commit
  }, data) {
    return new Promise((resolve, reject) => {
      ManagementList(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },
  AddManagement ({
    commit
  }, data) {
    return new Promise((resolve, reject) => {
      AddManagement(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },

  // 表头名称
  TableHeaderName ({
    commit
  }, data) {
    return new Promise((resolve, reject) => {
      TableHeaderName(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },

  // 列表数据  ManagementIdList SaveManagementIdList
  ManagementIdList ({
    commit
  }, data) {
    return new Promise((resolve, reject) => {
      ManagementIdList(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },
  SaveManagementIdList ({
    commit
  }, data) {
    return new Promise((resolve, reject) => {
      SaveManagementIdList(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },
  // 停启
  SaupManagementIdList ({
    commit
  }, data) {
    return new Promise((resolve, reject) => {
      SaupManagementIdList(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },

  // 部门分类下拉框
  ListDepartmentClassification ({
    commit
  }, data) {
    return new Promise((resolve, reject) => {
      ListDepartmentClassification(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },

  // DelManagementIdList删除
  DelManagementIdList ({
    commit
  }, data) {
    return new Promise((resolve, reject) => {
      DelManagementIdList(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },

  // 基础配置-诊疗项目---------------------------------------------------------

  // 列表接口
  DiagnosisTreatmentList ({
    commit
  }, data) {
    return new Promise((resolve, reject) => {
      DiagnosisTreatmentList(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },
  // 新增 &&编辑
  AddTreatmentList ({
    commit
  }, data) {
    return new Promise((resolve, reject) => {
      AddTreatmentList(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },
  // 保存诊疗信息
  SaveTreatmentList ({
    commit
  }, data) {
    return new Promise((resolve, reject) => {
      SaveTreatmentList(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },

  // 停启诊疗项目
  SaupTreatmentList ({
    commit
  }, data) {
    return new Promise((resolve, reject) => {
      SaupTreatmentList(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },

  // 基础配置-病种------------------------------------------------------------------
  // 列表
  DiseaseList ({
    commit
  }, data) {
    return new Promise((resolve, reject) => {
      DiseaseList(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },
  // 新增 &&编辑
  AddDiseaseList ({
    commit
  }, data) {
    return new Promise((resolve, reject) => {
      AddDiseaseList(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },

  // 保存病种信息
  SaveDiseaseList ({
    commit
  }, data) {
    return new Promise((resolve, reject) => {
      SaveDiseaseList(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },

  // 停启病种
  SaupDiseaseList ({
    commit
  }, data) {
    return new Promise((resolve, reject) => {
      SaupDiseaseList(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },

  // 基础配置-用药频次------------------------------------------------------------------
  // 列表
  MedicationList ({
    commit
  }, data) {
    return new Promise((resolve, reject) => {
      MedicationList(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },
  // 新增 &&编辑
  AddMedicationList ({
    commit
  }, data) {
    return new Promise((resolve, reject) => {
      AddMedicationList(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },

  // 保存用药频次信息
  SaveMedicationList ({
    commit
  }, data) {
    return new Promise((resolve, reject) => {
      SaveMedicationList(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },

  // 启停频次信息SaupMedicationList
  SaupMedicationList ({
    commit
  }, data) {
    return new Promise((resolve, reject) => {
      SaupMedicationList(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },

  // 基础配置-医技组套---------------------------------------------------------------------
  // 列表
  MedicalSkillsList ({
    commit
  }, data) {
    return new Promise((resolve, reject) => {
      MedicalSkillsList(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },

  // 新增 && 编辑
  AddMedicalSkillsList ({
    commit
  }, data) {
    return new Promise((resolve, reject) => {
      AddMedicalSkillsList(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },

  // 保存医技组套信息 SaveMedicalSkillsList
  SaveMedicalSkillsList ({
    commit
  }, data) {
    return new Promise((resolve, reject) => {
      SaveMedicalSkillsList(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },

  // 启停医技组套信息 SaupMedicalSkillsList
  SaupMedicalSkillsList ({
    commit
  }, data) {
    return new Promise((resolve, reject) => {
      SaupMedicalSkillsList(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },
  // 收费项目列表
  //
  ListChargingItems ({
    commit
  }, data) {
    return new Promise((resolve, reject) => {
      ListChargingItems(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },

  // 获取药品耗材列表
  ListDrugConsumables ({
    commit
  }, data) {
    return new Promise((resolve, reject) => {
      ListDrugConsumables(data).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  }

}

export default {
  namespaced: true,
  state,
  mutations,
  actions

}
