import {
    getInpatientList,
    getUserInfo
} from '@/api/modules/resident_doctor_system/home.js'

const state = {
    USER_INFO: {}, //患者信息
}

const mutations = {
    SET_USER_INFO(state, data) {
        state.USER_INFO = data;
    }
}

const actions = {
    getInpatientList({
        commit
    }, data = {}) {
        return new Promise((resolve, reject) => {
            getInpatientList(data).then(res => {
                resolve(res)
            }, error => {
                reject(error)
            })
        })
    },
    getUserInfo({
        commit
    }, data = {}) {
        return new Promise((resolve, reject) => {
            getUserInfo(data).then(res => {
                commit('SET_USER_INFO', res.data);
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