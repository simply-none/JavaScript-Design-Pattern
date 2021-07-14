<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import axios from './api/http'
import ipc from './utils/ipc'

export default {
  name: 'App',
  provide () {
    return {
      reload: this.reload
    }
  },
  /**
    * @desc electron传送消息到iframe中时，必须在请求数据之前，截取到链接，并添加token等数据才行，否则访问不了
    *
    *
  created () {
    // 清除请求的标志，当打开新的窗口时
    if (localStorage.getItem('stopHttpRequest')) {
      localStorage.removeItem('stopHttpRequest')
    }
    window.addEventListener('message', (e) => {
      const authInfo = JSON.stringify(e.data)
      if (e.source === window.parent) {
        localStorage.setItem('lastLoginOrgs', JSON.stringify({
          lastLoginOrgId: JSON.parse(e.data.lastLoginOrgId),
          accountId: e.data.accountInfo.id
        }))
        localStorage.setItem('platApp', e.data.platApp)
        localStorage.setItem('currentApps', JSON.stringify(e.data.currentApps))
        const urls = e.data.currentApps
        /**
         * 请求拦截器
         * 每次请求前，如果存在token则在请求头中携带token
         */
        localStorage.setItem('authInfo', authInfo)
        axios.interceptors.request.use(
          config => {
            // 特定请求不加token
            if (config.url && config.url.includes('/oauth/token')) {
              return config
            }
            // 某些请求需要加token
            const getAuthInfo = JSON.parse(localStorage.getItem('authInfo'))
            config.headers.Authorization = /* getAuthInfo.token_type +  */'Bearer ' + getAuthInfo.token
            return config
          },
          error => {
            return Promise.reject(error)
          }
        )
        // 当添加完请求头后，开始进行请求
        ipc.init()
      }
    }, false)
  },
  mounted () {
  },
  destroyed () {
    localStorage.clear()
  },
  beforeDestroy () {
    localStorage.clear()
  },
  data () {
    return {
      isRouterAlive: true,
      isModalShow: false
    }
  },
  methods: {
    // 组件刷新
    reload () {
      this.isRouterAlive = false
      this.$nextTick(function () {
        this.isRouterAlive = true
      })
    }
  }
}
</script>
<style lang='scss'>
</style>
