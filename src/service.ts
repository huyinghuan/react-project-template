
// import axios, { AxiosResponse } from 'axios'
// export const resultHandler = function (resp: AxiosResponse, isOperation?: boolean) {
export const resultHandler = function (resp: any, isOperation?: boolean) {
    const data = resp.data
    switch (resp.status) {
    }
    return data
}

export const API = function () { }
// axios.create({
//     validateStatus: function (status) {
//         return true
//     },
// })