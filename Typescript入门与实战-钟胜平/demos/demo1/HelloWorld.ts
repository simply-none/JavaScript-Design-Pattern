//#region 区域注释：使区域内的代码在编辑器内可折叠
const greeting = 'jade'.replaceAll('/ji/g', 'ja')

console.log(greeting)
//#endregion

//#region 字符串占位符：`${exp}`表示，将动态内容插入到生成的字符串中
const domain = 'http://www.baidu.com'
const search = 'jade'
const url = `${domain}/search?=${search}`
console.log(url)
//#endregion

//#region 可计算属性名
const computedObj = {
  ['property' + 'name']: 'PropertyValue',
  get propertyname () {
    return 1
  },
  set propertyname (val) {
    // xxx
  }
}
//#endregion

//#region 新增数据类型：BigInt：表示方法：123n/BigInt(123)
/**
 * BigInt与int：
 *  严格比较时，不相等
 *  非严格比较时，将进行数字意义上的比较
 *  bigint不允许和int进行数学运算
 *  bigint转为int会发生精度损失
 */