import request from '@/utils/request.js'


//已分配床位列表
export const getAssignedList = data => {
    return request({
        url: "/api/single/listpage",
        method: 'get',
        params: {
            mCode: "80000", //接口编码
            inpatientStatus: data.inpatientStatus, //在院状态
            keyword: data.keyword, //关键字
            badNo: data.badNo, //床号
            inAreaId: data.inAreaId, //病区
            startInDate: data.startInDate, //入院开始时间
            endInDate: data.endInDate, //入院结束时间
            nurseType: data.nurseType, //责任护士
            tendCode: data.tendCode, //护理级别
            criticalFlag: data.criticalFlag, //患者情况
            pageNumber: data.pageNumber || 1,
            pageSize: data.pageSize || 10
        },
    })
};

//未分配床位列表
export const getUnassignedList = data => {
    return request({
        url: "/api/single/listpage",
        method: 'get',
        params: {
            mCode: "BedList", //接口编码
            badNo: data.badNo, //床号
            areaId_dmark: data.inAreaId, //病区
            pageNumber: data.pageNumber || 1,
            pageSize: data.pageSize || 10
        },
    })
};

//出院患者列表
export const getDischargedList = data => {
    return request({
        url: "/api/single/listpage",
        method: 'get',
        params: {
            mCode: "80001", //接口编码
            keyword: data.keyword, //关键字
            badNo: data.badNo, //床号
            inAreaId: data.inAreaId, //病区
            startInDate: data.startInDate, //入院开始时间
            endInDate: data.endInDate, //入院结束时间
            startOutTime: data.startOutTime, //出院开始日期
            endOutTime: data.endOutTime, //出院结束日期
            nurseType: data.nurseType, //责任护士
            pageNumber: data.pageNumber || 1,
            pageSize: data.pageSize || 10
        },
    })
};

// 未分配床位的患者列表
export const getNobedUser = data => {
    return request({
        url: "/api/single/listpage",
        method: 'get',
        params: {
            mCode: "UnassignedPatients", //接口编码
            badNo: data.badNo, //床号
            areaId: data.inAreaId, //病区
            pageNumber: data.pageNumber || 1,
            pageSize: data.pageSize || 10
        },
    })
}

//获取患者住院信息 * 待删除
export const getUserBeHospitalizedInfo = data => {
    return request({
        url: "/api/simapi/get",
        method: 'get',
        params: {
            code: "70001", //接口编码
            inPatientNo: data.inPatientNo, //住院流水号
        },
    })
}

//确认转科
export const confirmTransfer = data => {
    return request({
        url: "/api/simapi/save",
        method: 'post',
        data: {
            "Code": "70002", //接口编码
            "Oid": "",
            "Value": JSON.stringify(data.Value),
            "Att": ""
        }
    })
}

//保存分配床位信息
export const saveAllocation = data => {
    return request({
        url: "/api/simapi/save",
        method: 'post',
        data: {
            "Code": "80002", //接口编码
            "Oid": "",
            "Value": JSON.stringify(data.Value),
            "Att": ""
        }
    })
}