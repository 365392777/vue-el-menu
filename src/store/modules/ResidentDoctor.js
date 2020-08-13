// 住院医生

const state = {
    // 住院医生tags标签页面组件
    tags: [{
        name: "诊疗计划",
        path: "/resident_doctor/inpatient/treatment_plan",
        isclose: false, //不显示关闭按钮
    }],
    tagsName: ""
}

const mutations = {
    pushTags(state, data) {
        state.tags.push(data)
    },
    setTagsName(state, data) {
        state.tagsName = data
    }
}

const actions = {

}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}