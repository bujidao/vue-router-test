import axios from 'axios' // 引入axios

export function request (method, url, params, success, failure) {
  return new Promise((resolve, reject) => {
    const service = axios.create({ // instance创建一个axios实例，可以自定义配置，可在 axios文档中查看详情
      // 所有的请求都会带上这些配置，比如全局都要用的身份信息等。
      headers: {
        'Content-Type': 'application/json'
        // 'token_in_header': global_.token,//token从全局变量那里传过来
      },
      timeout: 30 * 1000 // 30秒超时
    })
    service(method, url, params, success, failure)
      .then(res => { // then 请求成功之后进行什么操作
        resolve(res) // 把请求到的数据发到引用请求的地方
      })
      .catch(err => {
        console.log('请求异常信息：' + err)
        reject(err)
      })
  })
}
