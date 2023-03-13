/**
 * @file 文件夹扫描,删除
 */

const Folder = function (name) {
  this.name = name
  this.parent = null
  this.files = []
}

Folder.prototype.add = function (file) {
  file.parent = this
  this.files.push(file)
}

Folder.prototype.scan = function () {
  console.log('开始扫描文件夹：' + this.name)
  for (let i = 0, file, files = this.files; file = files[i++];) {
    file.scan()
  }
}

Folder.prototype.remove = function () {
  if (!this.parent) {
    return false
  }
  for (let files = this.parent.files, l = files.length - 1; l >= 0; l--) {
    let file = files[l]
    if (file === this) {
      files.splice(l, 1)
    }
  }
}

const File = function (name) {
  this.name = name
}

File.prototype.add = function (file) {
  console.log('文件下面不能添加文件')
}

File.prototype.scan = function () {
  console.log('开始扫描文件：' + this.name)
}

File.prototype.remove = function () {
  if (!this.parent) {
    return false
  }
  for (let files = this.parent.files, l = files.length - 1; l >= 0; l--) {
    let file = files[l]
    if (file === this) {
      files.splice(l, 1)
    }
  }
}

const folder = new Folder('学习资料')
const folder1 = new Folder('javascript')
const folder2 = new Folder('java')

const file1 = new File('JavaScript设计模式')
const file2 = new File('Java设计模式')
const file3 = new File('重构与模式')

folder1.add(file1)
folder2.add(file2)

folder.add(folder1)
folder.add(folder2)
folder.add(file3)

const folder3 = new Folder('node.js')
const file4 = new File('深入浅出node.js')
folder3.add(file4)
const file5 = new File('JavaScript语言编程实践')

folder.add(folder3)
folder.add(file5)

folder1.remove()

folder.scan()