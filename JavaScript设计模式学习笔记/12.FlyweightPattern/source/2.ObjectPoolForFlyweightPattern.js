/**
 * @file 对象池应用
 */

const objectPoolFactory = function (createObjFn) {
  const objectPool = []
  return {
    create: function () {
      const obj = objectPool.length === 0 ? createObjFn.apply(this, arguments) : objectPool.shift()
      return obj
    },
    recover: function (obj) {
      objectPool.push(obj)
    }
  }
}

const iframeFactory = objectPoolFactory(function () {
  const iframe = document.createElement('iframe')
  document.body.appendChild(iframe)
  iframe.onload = function () {
    iframe.onload = null
    iframeFactory.recover(iframe)
  }
  return iframe
})