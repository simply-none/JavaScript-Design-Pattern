/**
 * @desc setState的多次调用的情况
 */
import React, { Component } from 'react'

export default class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      message: 1
    }
  }

  render() {
    return (
      <div>
        <div>{ this.state.message }</div>
        <button onClick={ () => this.changeMsg() }>
          改变文本同步
        </button>
      </div>
    )
  }

  changeMsg () {
    // 当两者混用时，参数为对象的会被参数为函数的覆盖掉
    // 第一种方式：参数为对象时，多次调用仅会执行一次
    // 总得结果为：5
    this.setState({
      message: this.state.message + 1
    })
    this.setState({
      message: this.state.message + 1
    })
    this.setState({
      message: this.state.message + 1
    })
    // 第二种方式：参数为函数时，多次调用会进行累加，且函数的第一个参数为上一次的结果
    this.setState((preState, props) => {
      console.log(preState, props)
      return {
        message: preState.message + 1
      }
    })
    this.setState((preState, props) => {
      console.log(preState, props)
      return {
        message: preState.message + 1
      }
    })
    this.setState((preState, props) => {
      console.log(preState, props)
      return {
        message: preState.message + 1
      }
    })
  }

}
