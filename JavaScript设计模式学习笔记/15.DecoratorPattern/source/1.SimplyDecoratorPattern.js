/**
 * @file 装饰者对象的透明性，嵌套任意装饰者对象：函数形式
 */

const Plane = function () {}

Plane.prototype.fire = function () {
  console.log('发射普通子弹')
}

const MissileDecorator = function (plane) {
  this.plane = plane
}

MissileDecorator.prototype.fire = function () {
  this.plane.fire()
  console.log('发射导弹')
}

const AtomDecorator = function (plane) {
  this.plane = plane
}

AtomDecorator.prototype.fire = function () {
  this.plane.fire()
  console.log('发射原子弹')
}

// 创建对象，并输出
let plane = new Plane()
plane = new MissileDecorator(plane)
plane = new AtomDecorator(plane)

// 输出：普通子弹 -> 导弹 ->  原子弹
plane.fire()