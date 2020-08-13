
import {
    //住院收费--直接入院
    AdressList,patientList,patientInformation,RoomList,RoomDoctorList,savePatientInformation,queryPatientInformation,InpatientAreaRoom,
  
//门诊挂号--预约挂号
AppointmentDepartmentSelect,TitleCategorySelect,RoomDoctorListTime,DoctorTimeNoList,saveAppointment,editNoList,

// 门诊挂号-退号
ReturnNoList,ReturnNoHeader,GetReturnNo,RetreturnNo,

//门诊挂号-重打
NewHeader,GetReplayNo,


  } from '@/api/modules/charge_system/charge_zhuyuan.js'
  
  const state = {
  
  }
  const mutations = {
  
  }
  
  const actions = {

//门诊挂号-重打-------------------------------------------


GetReplayNo({
  commit
}, data = {}) {
return new Promise((resolve, reject) => {
  GetReplayNo(data).then(res => {
resolve(res)
}, error => {
reject(error)
})
})
},



    NewHeader({
      commit
    }, data = {}) {
    return new Promise((resolve, reject) => {
      NewHeader(data).then(res => {
    resolve(res)
    }, error => {
    reject(error)
    })
    })
    },

// 门诊挂号-退号----------------------------------------

RetreturnNo({
  commit
}, data = {}) {
return new Promise((resolve, reject) => {
  RetreturnNo(data).then(res => {
resolve(res)
}, error => {
reject(error)
})
})
},


GetReturnNo({
  commit
}, data = {}) {
return new Promise((resolve, reject) => {
  GetReturnNo(data).then(res => {
resolve(res)
}, error => {
reject(error)
})
})
},

ReturnNoHeader({
  commit
}, data = {}) {
return new Promise((resolve, reject) => {
  ReturnNoHeader(data).then(res => {
resolve(res)
}, error => {
reject(error)
})
})
},



ReturnNoList({
  commit
}, data = {}) {
return new Promise((resolve, reject) => {
  ReturnNoList(data).then(res => {
resolve(res)
}, error => {
reject(error)
})
})
},











//门诊挂号--预约挂号----------------------------------------

editNoList({
  commit
}, data = {}) {
return new Promise((resolve, reject) => {
  editNoList(data).then(res => {
resolve(res)
}, error => {
reject(error)
})
})
},

saveAppointment({
  commit
}, data = {}) {
return new Promise((resolve, reject) => {
  saveAppointment(data).then(res => {
resolve(res)
}, error => {
reject(error)
})
})
},



DoctorTimeNoList({
  commit
}, data = {}) {
return new Promise((resolve, reject) => {
  DoctorTimeNoList(data).then(res => {
resolve(res)
}, error => {
reject(error)
})
})
},

//门诊医师列表
RoomDoctorListTime({
  commit
}, data = {}) {
return new Promise((resolve, reject) => {
  RoomDoctorListTime(data).then(res => {
resolve(res)
}, error => {
reject(error)
})
})
},


//职称类别
TitleCategorySelect({
  commit
}, data = {}) {
return new Promise((resolve, reject) => {
  TitleCategorySelect(data).then(res => {
resolve(res)
}, error => {
reject(error)
})
})
},


//预约科室下拉框

AppointmentDepartmentSelect({
  commit
}, data = {}) {
return new Promise((resolve, reject) => {
  AppointmentDepartmentSelect(data).then(res => {
resolve(res)
}, error => {
reject(error)
})
})
},




//住院收费--直接入院--------------------------------------------

InpatientAreaRoom({
    commit
  }, data = {}) {
return new Promise((resolve, reject) => {
    InpatientAreaRoom(data).then(res => {
resolve(res)
}, error => {
reject(error)
})
})
},

queryPatientInformation({
    commit
  }, data = {}) {
return new Promise((resolve, reject) => {
    queryPatientInformation(data).then(res => {
resolve(res)
}, error => {
reject(error)
})
})
},

savePatientInformation({
    commit
  }, data = {}) {
return new Promise((resolve, reject) => {
    savePatientInformation(data).then(res => {
resolve(res)
}, error => {
reject(error)
})
})
},


RoomDoctorList({
    commit
  }, data = {}) {
return new Promise((resolve, reject) => {
    RoomDoctorList(data).then(res => {
resolve(res)
}, error => {
reject(error)
})
})
},
RoomList({
    commit
  }, data = {}) {
return new Promise((resolve, reject) => {
    RoomList(data).then(res => {
resolve(res)
}, error => {
reject(error)
})
})
},



patientInformation({
    commit
  }, data = {}) {
return new Promise((resolve, reject) => {
    patientInformation(data).then(res => {
resolve(res)
}, error => {
reject(error)
})
})
},

    patientList({
        commit
      }, data = {}) {
return new Promise((resolve, reject) => {
    patientList(data).then(res => {
resolve(res)
}, error => {
reject(error)
})
})
},

  // 获取地址
  AdressList({
                  commit
                }, data = {}) {
      return new Promise((resolve, reject) => {
        AdressList(data).then(res => {
          resolve(res)
        }, error => {
          reject(error)
        })
      })
    },
    





  
  }
  
  
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions
  }
  
  
  
  
  