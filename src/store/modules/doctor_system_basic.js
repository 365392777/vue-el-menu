import {
    recipeList,
    patientInfo,
    deleteRecipe,
    savePrescription,
    getDrugList,
    doctotrPaientList,
    withdrawalPrescription
} from '@/api/modules/outpatient_doctor_system/doctor_system_basic.js'

const state = {
    patient_info: {
        allergy: "",
        birthdate: "",
        cardno: "",
        cliniccode: "",
        diagnosis: "",
        homeareaadd: "",
        homedetailadd: "",
        name: "",
        patnaturecodename: "",
        registerfee: "",
        sexcodename: "",
    }, //患者信息
}
const mutations = {
    SET_PATIENT_INNO(state, info) {
        state.patient_info = info;
    }
}


const actions = {
    recipeList({
        commit
    }, data = {}) {
        return new Promise((resolve, reject) => {
            recipeList(data).then(res => {
                resolve(res)
            }, error => {
                reject(error)
            })
        })
    },

    patientInfo({
        commit
    }, data = {}) {
        return new Promise((resolve, reject) => {
            patientInfo(data).then(res => {
                if (res.data[0]) {
                    commit('SET_PATIENT_INNO', res.data[0]);
                }
                resolve(res)
            }, error => {
                reject(error)
            })
        })
    },

    deleteRecipe({
        commit
    }, data = {}) {
        return new Promise((resolve, reject) => {
            deleteRecipe(data).then(res => {
                resolve(res)
            }, error => {
                reject(error)
            })
        })
    },
    savePrescription({
        commit
    }, data = {}) {
        return new Promise((resolve, reject) => {
            savePrescription(data).then(res => {
                resolve(res)
            }, error => {
                reject(error)
            })
        })
    },
    withdrawalPrescription({
        commit
    }, data = {}) {
        return new Promise((resolve, reject) => {
            withdrawalPrescription(data).then(res => {
                resolve(res)
            }, error => {
                reject(error)
            })
        })
    },
    getDrugList({
        commit
    }, data = {}) {
        return new Promise((resolve, reject) => {
            getDrugList(data).then(res => {
                resolve(res)
            }, error => {
                reject(error)
            })
        })
    },
    doctotrPaientList({
        commit
    }, data = {}) {
        return new Promise((resolve, reject) => {
            doctotrPaientList(data).then(res => {
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