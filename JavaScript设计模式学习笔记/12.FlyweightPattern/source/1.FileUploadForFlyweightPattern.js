/**
 * @file 文件上传
 * @desc 处理对象爆炸
 */

// 内部状态
const Upload = function (uploadType) {
  this.uploadType = uploadType
}

Upload.prototype.delFile = function (id) {
  uploadManager.setExternalState(id, this)
  if (this.fileSize < 3000) {
    return this.dom.parentNode.removeChild(this.dom)
  }
  if (window.confirm('确定要删除该文件？' + this.fileName)) {
    return this.dom.parentNode.removeChild(this.dom)
  }
}

// 使用工厂进行对象实例化
const UploadFactory = (function () {
  const createdFlyWeightObjs = {}
  return {
    create: function (uploadType) {
      if (createdFlyWeightObjs[uploadType]) {
        return createdFlyWeightObjs[uploadType]
      }
      return createdFlyWeightObjs[uploadType] = new Upload(uploadType)
    }
  }
})()

// 管理器封装外部状态
const uploadManager = (function () {
  const uploadDatabase = {}
  return {
    add: function (id, uploadType, fileName, fileSize) {
      const flyWeightObj = UploadFactory(uploadType)
      const dom = document.createElement('div')
      dom.innerHTML = '<spam>文件名称' + fileName + ', 文件大小：' + fileSize + '</spam>' + '<button class="delFile">删除</button>'
      dom.querySelector('.delFile').onclick = function () {
        flyWeightObj.delFile(id)
      }
      document.body.appendChild(dom)
      uploadDatabase[id] = {
        fileName: fileName,
        fileSize: fileSize,
        dom: dom
      }
      return flyWeightObj
    },
    setExternalState: function (id, flyWeightObj) {
      const uploadData = uploadDatabase[id]
      for (let i in uploadData) {
        flyWeightObj[i] = uploadData[i]
      }
    }
  }
})()

// 触发上传操作
const id = 0
window.startUpload = function (uploadType, files) {
  for (let i = 0, file; file = files[i++];) {
    const uploadObj = uploadManager.add(++id, uploadType, file.fileName, file.fileSize)
  }
}

// 测试
startUpload('plugin', [
  {
    fileName: '1.txt',
    fileSize: 1000
  },
  {
    fileName: '2.txt',
    fileSize: 4000
  },
  {
    fileName: '3.txt',
    fileSize: 9000
  }
])

startUpload('flash', [
  {
    fileName: '1.txt',
    fileSize: 1000
  },
  {
    fileName: '2.txt',
    fileSize: 4000
  },
  {
    fileName: '3.txt',
    fileSize: 9000
  }
])