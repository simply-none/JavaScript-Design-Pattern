/**
 * @file 获取文件上传对象
 */

const getActiveUploadObj = function () {
  try {
    return new ActiveXObject('TXFTNActiveX.FTNUpload')
  } catch (e) {
    return 'nextSuccessor'
  }
}

const getFlashUploadObj = function () {
  if (supportFlash) {
    const str = '<object type="application/x-shockwave-flash"></object>'
    return $(str).appendTo($('body'))
  }
  return 'nextSuccessor'
}

const getFormUploadObj = function () {
  return $('<form><input name="file" type="file"/></form>').appendTo($('body'))
}

const getUploadObj = getActiveUploadObj.after(getFlashUploadObj).after(getFormUploadObj)

console.log(getUploadObj())