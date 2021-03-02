/**
 * @file 把事物每种状态都封装成单独的类，跟此种状态有关的行为都封装在该类的内部
 */

const State = function () {}

State.prototype.buttonWasPressed = function () {
  throw new Error('必须重写该方法')
}

// 关灯
const OffLightState = function (light) {
  this.light = light
}

// 继承抽象父类
OffLightState.prototype = new State()

OffLightState.prototype.buttonWasPressed = function () {
  console.log('弱光')
  this.light.setState(this.light.weakLightState)
}

// 弱光
const WeakLightState = function (light) {
  this.light = light
}

// 继承抽象父类
WeakLightState.prototype = new State()

WeakLightState.prototype.buttonWasPressed = function () {
  console.log('强光')
  this.light.setState(this.light.strongLightState)
}

// 强光
const StrongLightState = function (light) {
  this.light = light
}

// 继承抽象父类
StrongLightState.prototype = new State()

StrongLightState.prototype.buttonWasPressed = function () {
  console.log('关灯')
  this.light.setState(this.light.offLightState)
}

// light：创建每个状态对象
const Light = function () {
  this.offLightState = new OffLightState(this)
  this.weakLightState = new WeakLightState(this)
  this.strongLightState = new StrongLightState(this)

  this.button = null
}

Light.prototype.init = function () {
  const button = document.createElement('button')
  const _this = this
  this.button = document.appendChild(button)
  this.button.innerHTML = '开关'

  // 设置当前状态
  this.currState = this.offLightState

  this.button.onclick = function () {
    _this.currState.buttonWasPressed()
  }
}

// 提供切换状态的方法
Light.prototype.setState = function (newState) {
  this.currState = newState
}

// 执行
const light = new Light()
light.init()