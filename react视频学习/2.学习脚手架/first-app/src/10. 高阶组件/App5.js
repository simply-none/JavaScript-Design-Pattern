/**
 * @desc 使用高阶组件将生命周期函数进行传递，这样可以少写一些生命周期函数
 * @notice 强烈不建议高阶组件中，返回的组件继承参数组件，而是使用下面的类似组合的方式
 * 
 * @bad 高阶组件的缺陷：
 *      1. 高阶组件需要在原组件的基础上进行组件的嵌套；当嵌套层级越多时，调试会变得更加困难
 *      2. 高阶组件会劫持props，若在不遵守约定的情况下，会造成props的冲突
 */

import React, { PureComponent } from 'react'

// 定义一个高阶组件
function highCom (Component) {
  return class NewComponent extends PureComponent {
    componentWillMount () {
      this.startTime = Date.now()
    }

    componentDidMount () {
      this.endTime = Date.now()
      console.log(`当前组件${Component.name}渲染时间：${this.endTime - this.startTime}`)
    }

    render() {
      return <Component { ...this.props }/>
    }
  }
}

class CartPage extends PureComponent {
  render() {
    return (
      <div>
        <h1>是否登录：{ `${this.props.isLogin}` }</h1>
        <h2>CartPage组件</h2>
      </div>
    )
  }
}

const NewCartPage = highCom(CartPage)

export default class App4 extends PureComponent {
  render() {
    return (
      <div>
        <NewCartPage isLogin={ true }/>
      </div>
    )
  }
}
