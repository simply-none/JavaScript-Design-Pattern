/**
 * @desc 将setState换成同步的代码
 */
import React, { Component } from 'react'

export default class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      message: new Date().toTimeString()
    }
  }

  componentDidMount () {
    // 第二种方式：通过原生事件侦听的方式
    document.getElementById('btn').addEventListener('click', () => {
      this.setState({
        message: new Date().toTimeString()
      })
      console.log(this.state.message)
    })
  }

  render() {
    return (
      <div>
        <div>{ this.state.message }</div>
        <button onClick={ () => this.changeMsg() }>
          改变文本同步
        </button>
        <button id='btn'>改变文本同步</button>
      </div>
    )
  }

  changeMsg () {
    // 第一种方式：通过定时器获取同步更新后的数据
    setTimeout(() => {
      this.setState({
        message: new Date().toTimeString()
      })
      console.log(this.state.message)
    })
  }

}
