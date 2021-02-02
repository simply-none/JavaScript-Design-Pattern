/**
 * @file 模板方法实现
 * @desc 好莱坞原则
 */

const Beverage = function (param) {
  const boilWater = function () {
    console.log('把水煮沸')
  }
  
  const brew = param.brew || function () {
    // 子类重写
    throw new Error('子类必须重写brew方法')
  }
  
  const pourInCup = param.pourInCup || function () {
    // 子类重写
    throw new Error('子类必须重写pourInCup方法')
  }
  
  const addCondiments = param.addCondiments || function () {
    // 子类重写
    throw new Error('子类必须重写addCondiments方法')
  }

  const F = function () {}
  F.prototype.init = function () {
    boilWater()
    brew()
    pourInCup()
    addCondiments()
  }

  return F
}

const Coffee = Beverage({
  brew: function () {
    console.log('用沸水冲泡咖啡')
  },
  pourInCup: function () {
    console.log('把咖啡倒进杯子')
  },
  addCondiments: function () {
    console.log('加糖和牛奶')
  }
})


const Tea = Beverage({
  brew: function () {
    console.log('用沸水冲泡咖啡')
  },
  pourInCup: function () {
    console.log('把咖啡倒进杯子')
  },
  addCondiments: function () {
    console.log('加糖和牛奶')
  }
})

const Coffee = new Coffee()
Coffee.init()

const Tea = new Tea()
Tea.init()