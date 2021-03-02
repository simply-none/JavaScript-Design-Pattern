/**
 * @file 使用aop装饰函数：改进，不污染原型
 */

const before = function (fn, beforeFn) {
  return function () {
    // 当this指向null/undefined时，直接指向它本身，下面的this指向undefined
    beforeFn.apply(this, arguments)
    return fn.apply(this, arguments)
  }
}

// 执行
let fn = before(function () {console.log(1)}, function () {console.log(2)})

fn = before(fn, function () {console.log(3)})

// 结果：3, 2, 1
fn()
