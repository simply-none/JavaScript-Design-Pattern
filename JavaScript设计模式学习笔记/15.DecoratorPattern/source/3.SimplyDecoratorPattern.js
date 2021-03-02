/**
 * @file 装饰者对象中 this被劫持
 */

const _getElementById = document.getElementById

document.getElementById = function (id) {
  // 改造，增加一个输出
  console.log('改造，增加一个输出')
  // 此处导致错误：TypeError: Illegal invocation
  // return _getElementById(id)
  // 正确形式：绑定document
  return _getElementById.call(document, id)
}