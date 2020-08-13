
import {
  HerbsList,
} from '@/api/modules/outpatient_doctor_system/doctor_system_basic_sheng.js'

const state = {
  // patient_info: {}, //患者信息
}
const mutations = {
  // SET_PATIENT_INNO(state, info) {
  //   state.patient_info = info;
  // }
}

const actions = {
  HerbsList({
                       commit
                     }, data={}) {
    return new Promise((resolve, reject) => {
      HerbsList(data).then(res => {
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
