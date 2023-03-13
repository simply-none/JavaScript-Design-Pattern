/**
 * @file 装饰者对象的透明性，嵌套任意装饰者对象：对象形式
 */

const plane = {
  fire: function () {
    console.log('发射普通子弹')
  }
}

const MissileDecorator = function () {
  console.log('发射导弹')
}

const AtomDecorator = function () {
  console.log('发射原子弹')
}

// 创建对象，并输出
const fire1 = plane.fire

plane.fire = function () {
  fire1()
  MissileDecorator()
}

const fire2 = plane.fire

plane.fire = function () {
  fire2()
  AtomDecorator()
}

// 输出：普通子弹 -> 导弹 ->  原子弹
plane.fire()