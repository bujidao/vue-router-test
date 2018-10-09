import axios from 'axios' // 引入axios
import api from '@/api/index'
const baseUrl = api.Hallowmas

// 自定义判断元素类型JS
function toType (obj) {
  return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}
// 参数过滤函数
function filterNull (o) {
  for (var key in o) {
    if (o[key] === null) {
      delete o[key]
    }
    if (toType(o[key]) === 'string') {
      o[key] = o[key].trim()
    } else if (toType(o[key]) === 'object') {
      o[key] = filterNull(o[key])
    } else if (toType(o[key]) === 'array') {
      o[key] = filterNull(o[key])
    }
  }
  return o
}

export function request ({method, url, params, success, failure}) {
  console.log(params)
  console.log("-------------------------------")
  // if (params) {
  //   params = filterNull(params)
  // }
  // params = {params}
  console.log(url)
  // return new Promise((resolve, reject) => {
    const service = axios.create({
      headers: {
        'Content-Type': 'application/json'
      },
      timeout: 30 * 1000
    })
    service({
      method: method,
      url: baseUrl + url,
      params: method === 'GET' || method === 'DELETE' ? params : null,
      success: success,
      failure: failure
    }).then(res => {
      success(res)
    }).catch(err => {
      console.log('请求异常信息：' + err)
      failure(err)
    })
  // })
}
