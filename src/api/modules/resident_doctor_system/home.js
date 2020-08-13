// 住院医生首页api
import request from '@/utils/request.js'


//获取住院病人列表
export const getInpatientList = data => {
    return request({
        url: "/api/single/listpage",
        method: 'get',
        params: {
            mCode: "70000", //接口编码
            category: data.category, //住院类型
            inpatientStatus: data.inpatientStatus || "", //住院状态
            name: data.name || "", //姓名
            sex: data.sex || "0", //性别   0 全部 1 男 2 女
            badNo: data.badNo || "", //床号
            inAreaId: data.inAreaId || "", //病区
            startTime: data.startTime || "", //入院开始日期
            endTime: data.endTime || "", //入院结束日期
            pageNumber: data.pageNumber || 1, //当前页
            pageSize: data.pageSize || 0 //每页多少条
        },
    })
};


export const getUserInfo = data => {
    return request({
        url: "/api/simapi/get",
        method: 'get',
        params: {
            code: "70004", //接口编码
            inPatientNo: data.inPatientNo, //住院流水号
        },
    })
}