/**
 * @desc 商场折扣：夏天八折
 *        将条件分支提炼成函数
 */
const isSummer = function () {
  const date = new Date()
  return date.getMonth() >=6 && date.getMonth() <=9
}

const getPrice = function (price) {
  if (isSummer()) {
    return price * 0.8
  }
  return price
}