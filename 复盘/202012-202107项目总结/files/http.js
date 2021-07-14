/**
 * @file http请求（axios）改造文件：改造axios生成新的axios实例
 */

import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
import apiConfig from './url'
import qs from 'qs'

// 请求失败后统一处理
const errorHandle = (status, message) => {
  // 状态码判断
  switch (status) {
    // 403: 未登录状态，跳转登录页
    case 401:
      // 当没有了权限，清空缓存
      break
      // 403 token过期
      // 清除token并跳转登录页
    case 403:
      // tip('登录过期，请重新登录')
      break
      // 404请求不存在
    case 404:
      // tip('请求的资源不存在')
      break
    case 500:
    case 501:
    case 502:
    case 503:
      Message.closeAll()
      Message({
        type: 'error',
        message: '服务不可用或出现服务故障，请联系管理员！',
        duration: 5000
      })
      break
    default:
      // 其他错误提示消息
  }
}

// 创建axios实例
const instance = axios.create({ timeout: 1000 * 12 })

// 设置post请求头
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// 响应拦截器
instance.interceptors.response.use(
  res => {
    if (res.data.status === 403) {
      errorHandle(403, res.data.message)
      return Promise.resolve(res)
    }
    if (res.data.status === 401) {
      // token失效的逻辑，失效后重新请求；请求再次失败后，reject
      return instance.post(apiConfig.oauth.TOKEN, qs.stringify({
        grant_type: 'refresh_token',
        client_id: 'smithy-pc',
        client_secret: 'smithy-pc',
        refresh_token: JSON.parse(localStorage.authInfo).refresh_token
      })).then(response => {
        // 刷新token也失效，跳转到登录
        if ([0, 401].includes(response.data.status)) {
          errorHandle(401, response.data.message)
          return Promise.reject(response)
        }
        // 刷新token成功，将最新的token更新到header中，同时保存在localStorage中
        const refreshAuthInfo = response.data
        const originAuthInfo = JSON.parse(localStorage.authInfo)
        originAuthInfo.refresh_token = refreshAuthInfo.refresh_token
        originAuthInfo.token = refreshAuthInfo.access_token
        localStorage.setItem('authInfo', JSON.stringify(originAuthInfo))
        // 获取当前失败的请求
        const config = res.config
        // 重置一下配置
        config.headers.Authorization = /* originAuthInfo.token_type +  */'Bearer ' + originAuthInfo.token
        config.baseURL = localStorage.getItem('platApp')
        // 重试当前请求并返回promise
        parent.postMessage({ msg: localStorage.getItem('authInfo'), flag: 'refresh' }, '*')
        return instance(config)
      }).catch(error => {
        const { response } = error
        if (response) {
          errorHandle(response.data.status, response.data.message)
        }
        return Promise.reject(error)
      })
    }
    if (res.status !== 200) {
      return Promise.reject(res)
    }
    return Promise.resolve(res)
  },
  // 请求失败
  async error => {
    const { response } = error
    if (response) {
      errorHandle(response.status, response.data.message)
    }
    return Promise.reject(error)
})

export default instance
