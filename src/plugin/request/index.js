import Axios from 'axios'
import db from '../db'
const ls = db.ls
const params2Query = params/* :Object */ => {
  return Object.entries(params).map(keyValue => keyValue.join('=')).join('&')
}

const axios = Axios.create()

// const get = async (uri, params) => {
//   uri = uri + (params ? '?' + params2Query(params) : '')
//   return axios._get(axios, uri)
// }
const request = {}

const methods = ['get', 'post', 'put', 'delete']

methods.forEach(method => {
  request[method] = async (uri, params) => {
    let response
    if (method === 'get') {
      uri = uri + (params ? '?' + params2Query(params) : '')
      response = await axios.get(uri)
    } else {
      response = await axios[method](uri, params)
    }
    return response
  }
})

// // request 拦截器
axios.interceptors.request.use(
  (config) => {
    config.headers = Object.assign(config.headers, {
      // 'Authorization': `Token ${ls.get('iFileToken')}`,
      'token': ls.get('userToken').token,
      'deviceType': 'web'
    })

    return config
  }
)

// response 拦截器
axios.interceptors.response.use(
  (response) => {
    return response.data
    // if (response.data.isSuccess =false) {
    //   return response.data
    // }
    // else {
    //   // postMessage.toast({msg: response.data.resultMsg})
    //   return Promise.reject(Error('error'))
    // }
  },
  (error) => {
    // if (error.response) {
    //   switch (error.response.status) {
    //     case 401:
    //       // postMessage.stateGo('login.wechat')
    //   }
    //   return error.response
    // }
  }
)
export default request