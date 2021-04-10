import React, { Component } from 'react'

class App1 extends Component {
  constructor () {
    super()
    this.state = {
      message: 'hello react'
    }
  }
  /**
   * @desc 返回类型：
   *       1. jsx语法
   *       2. 若需返回多个并列元素，需要使用数组将这些jsx装起来
   * @returns JSX | JSX Array | fragments | 字符串/数值（文本节点） | Boolean/null（空）
   */
  render () {
    return (
      <div>
        <h1>我是类组件：app</h1>
        <h2>{ this.state.message }</h2>
      </div>
    )
  }
}

/**
 * @desc 函数组件：无this，无内部状态
 * @returns 
 */
function App2 () {
  return (
    <div>
      <h1>我是函数组件：app</h1>
      <h2>无this，无内部状态（需要使用hooks）</h2>
    </div>
  )
}

export {
  App1,
  App2
}