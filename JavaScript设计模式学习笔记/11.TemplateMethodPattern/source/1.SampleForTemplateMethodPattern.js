/**
 * @file 模板方法实现
 * @desc coffee or tea
 */

const Beverage = function () {}

Beverage.prototype.boilWater = function () {
  console.log('把水煮沸')
}

Beverage.prototype.brew = function () {
  // 子类重写
  throw new Error('子类必须重写brew方法')
}

Beverage.prototype.pourInCup = function () {
  // 子类重写
  throw new Error('子类必须重写pourInCup方法')
}

Beverage.prototype.addCondiments = function () {
  // 子类重写
  throw new Error('子类必须重写addCondiments方法')
}

// 钩子函数
Beverage.prototype.customerWantsCondiments = function () {
  return true
}

// 模板方法
Beverage.prototype.init = function () {
  this.boilWater()
  this.brew()
  this.pourInCup()
  // 执行钩子函数
  if (this.customerWantsCondiments()) {
    this.addCondiments()
  }
}

const Coffee = function () {}
Coffee.prototype = new Beverage()

Coffee.prototype.brew = function () {
  console.log('用沸水冲泡咖啡')
}

Coffee.prototype.pourInCup = function () {
  console.log('把咖啡倒进杯子')
}

Coffee.prototype.addCondiments = function () {
  console.log('加糖和牛奶')
}

Coffee.prototype.customerWantsCondiments = function () {
  return window.confirm('是否需要调料？')
}

const Coffee = new Coffee
Coffee.init()

const Tea = function () {}
Tea.prototype = new Beverage()

Tea.prototype.brew = function () {
  console.log('用沸水冲泡咖啡')
}

Tea.prototype.pourInCup = function () {
  console.log('把咖啡倒进杯子')
}

Tea.prototype.addCondiments = function () {
  console.log('加糖和牛奶')
}

const Tea = new Tea
Tea.init()