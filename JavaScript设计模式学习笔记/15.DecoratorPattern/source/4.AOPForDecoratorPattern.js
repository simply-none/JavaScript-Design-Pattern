/**
 * @file 使用aop装饰函数
 */
'use strict'
Function.prototype.before = function (beforeFn) {
  const _this = this
  return function () {
    // 当this指向null/undefined时，直接指向它本身，下面的this指向undefined
    // ----------------共用一套参数----------------
    beforeFn.apply(this, arguments)
    return _this.apply(this, arguments)
  }
}

Function.prototype.after = function (afterFn) {
  const _this = this
  return function () {
    const ret = _this.apply(this, arguments)
    afterFn.apply(this, arguments)
    return ret
  }
}

// 执行
let fn = function () {
  console.log(0)
}

fn = fn.before(function fn2 () {
  console.log(1)
})

fn = fn.after(function fn3 () {
  console.log(2)
})

// 结果：1， 0，2
fn()