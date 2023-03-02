import { notification } from 'antd'
import axios, { AxiosResponse } from 'axios'
export const resultHandler = function (resp: AxiosResponse, isOperation?: boolean) {
    if (resp.status === 401) {
        // window.location.href = resp.headers["location"] + "&redirect=" + encodeURI(window.location.href)
        return
    }
    if (resp.status !== 200) {
        notification.error({
            message: resp.status,
            description: "未知错误:" + resp.statusText,
            placement: 'bottomRight',
            duration: 3,
        });
        return
    }
    const commonData = resp.data
    if (commonData.code !== 0) {
        notification.error({
            message: `错误码:${commonData.code} ${commonData.msg}`,
            placement: 'bottomRight',
            duration: 3,
        });
        throw new Error("错误:" + resp.statusText)
    }
    if (isOperation) {
        notification.success({
            message: commonData.msg || '操作成功',
            placement: 'bottomRight',
            duration: 3,
        });
    } else {
        return commonData.data
    }
}

export const API = axios.create({
    validateStatus: function () {
        return true
    },
})