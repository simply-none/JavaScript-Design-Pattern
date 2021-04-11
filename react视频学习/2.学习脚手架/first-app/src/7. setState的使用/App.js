/**
 * @desc 获取异步更新后的state
 */
import React, { Component } from 'react'

export default class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      message: new Date().toTimeString()
    }
  }

  componentDidUpdate () {
    // 第二种方式：通过在生命周期方法componentDidUpdate中获取
    console.log(this.state.message)
  }

  render() {
    return (
      <div>
        <div>{ this.state.message }</div>
        <button onClick={ () => this.changeMsg() }>
          改变
        </button>
      </div>
    )
  }

  changeMsg () {
    // 第一种方式：获取异步更新后的数据，通过setState的第二个参数（一个函数）
    this.setState({
      message: new Date().toTimeString()
    }, () => {
      console.log(this.state.message)
    })
  }

}
