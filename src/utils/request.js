import axios from 'axios' // 引入axios
import api from '@/api/index'
const baseUrl = api.Hallowmas

let service = axios.create({
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 30 * 1000,
  // `withCredentials` 表示跨域请求时是否需要使用凭证
  withCredentials: false,
  // `responseType` 表示服务器响应的数据类型，可以是 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
  responseType: 'json',
  json: true
})

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

// 添加请求拦截器
service.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
service.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})

// 请求数据
export function request ({method, url, params}) {
  if (params) {
    params = filterNull(params)
  }
  let promise = new Promise((resolve, reject) => {
    service({
      method: method,
      url: baseUrl + url,
      params: params
    }).then(res => {
      resolve(res)
    }).catch(err => {
      console.log('请求异常信息：' + err)
      reject(err)
    })
  })
  return promise
}
