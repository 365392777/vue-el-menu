import {
    getAssignedList,
    getUnassignedList,
    getDischargedList,
    getNobedUser,
    getUserBeHospitalizedInfo,
    confirmTransfer,
    saveAllocation
} from '@/api/modules/ward_nurse_system/index.js'

const state = {

}

const mutations = {}

const actions = {
    getAssignedList({
        commit
    }, data = {}) {
        return new Promise((resolve, reject) => {
            getAssignedList(data).then(res => {
                resolve(res)
            }, error => {
                reject(error)
            })
        })
    },
    getUnassignedList({
        commit
    }, data = {}) {
        return new Promise((resolve, reject) => {
            getUnassignedList(data).then(res => {
                resolve(res)
            }, error => {
                reject(error)
            })
        })
    },
    getDischargedList({
        commit
    }, data = {}) {
        return new Promise((resolve, reject) => {
            getDischargedList(data).then(res => {
                resolve(res)
            }, error => {
                reject(error)
            })
        })
    },
    getNobedUser({
        commit
    }, data = {}) {
        return new Promise((resolve, reject) => {
            getNobedUser(data).then(res => {
                resolve(res)
            }, error => {
                reject(error)
            })
        })
    },
    getUserBeHospitalizedInfo({
        commit
    }, data = {}) {
        return new Promise((resolve, reject) => {
            getUserBeHospitalizedInfo(data).then(res => {
                resolve(res)
            }, error => {
                reject(error)
            })
        })
    },
    confirmTransfer({
        commit
    }, data = {}) {
        return new Promise((resolve, reject) => {
            confirmTransfer(data).then(res => {
                resolve(res)
            }, error => {
                reject(error)
            })
        })
    },
    saveAllocation({
        commit
    }, data = {}) {
        return new Promise((resolve, reject) => {
            saveAllocation(data).then(res => {
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