/**
 * @file 使用aop装饰函数：打开登录框，上报数据
 */

Function.prototype.before = function (beforeFn) {
  const _this = this
  return function () {
    // 当this指向null/undefined时，直接指向它本身，下面的this指向undefined
    beforeFn.apply(this, arguments)
    return _this.apply(this, arguments)
  }
}

// 打开登录框
let showLogin = function (type, url, param) {
  console.log('打开登录框', param)
}

// 数据上报
const log = function (type, url, param) {
  param.age = 23
  console.log('上报数据')
}

showLogin = showLogin.before(log)

// 打开登录框，上报数据:{ name: 'jade', age: 23 }
showLogin('get', 'http://www.baidu.com', {name: 'jade'})