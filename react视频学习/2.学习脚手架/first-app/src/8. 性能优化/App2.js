/**
 * @desc 全局事件传递：使用events库中的EventEmitter
 * 
 * @step 步骤总结：
 *      1. 安装events库
 *      2. 导入内部的EventEmitter对象
 *      3. 创建事件总线对象：eventBus = new EventEmitter()
 *      4. 某组件发送事件：eventBus.emit(eventName, ...values)
 *      5. 某组件监听事件：eventBus.addListener(eventName, callback(...values))
 *      6. 某组件取消监听：eventBus.removeListener(eventName, callback(...values))
 */
import React, { PureComponent } from 'react'
import { EventEmitter } from 'events'

// 在模块化开发中，这个全局通信对象可单独放到一个文件中，在使用的时候导入即可
const eventBus = new EventEmitter()

class Child1 extends PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      message1: 'origin',
      message2: 'origin'
    }

    this.getChild1Data = this.getChild1Data.bind(this)
  }

  // 在componentDidMount中进行事件的侦听
  componentDidMount () {
    eventBus.addListener('toChild1', this.getChild1Data)
  }

  // 
  componentWillUnmount () {
    eventBus.removeListener('toChild1', this.getChild1Data)
  }

  render () {
    const { message1, message2 } = this.state
    return (
      <div>
        child1 组件
        <div>{ message1 }</div>
        <div>{ message2 }</div>
      </div>
    )
  }

  // 侦听事件参数
  getChild1Data (...args) {
    console.log(args, 'args')
    this.setState({
      message1: args[0],
      message2: args[1]
    })
  }
}

class Child2 extends PureComponent {
  constructor (props) {
    super(props)

    this.state = {}
  }

  render () {
    return (
      <div>
        child2 组件
        <button onClick={ e => this.getEmitter() }>点击跨组件通信</button>
      </div>
    )
  }

  getEmitter () {
    eventBus.emit('toChild1', 'hello child1', 'I\'m child2')
  }
}

export default class App2 extends PureComponent {
  constructor (props) {
    super(props)

    this.state = {

    }
  }
  render() {
    return (
      <div>
        父组件：
        <Child1/>
        <Child2/>
      </div>
    )
  }
}
