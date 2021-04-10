import React, { Component } from 'react'

class Com extends Component {
  render () {
    return (
      <div>我是子组件：用于销毁操作示例</div>
    )
  }

  // 销毁
  componentWillUnmount () {
    console.log('销毁com组件')
  }
}

export default class App extends Component {
  /**
   * @desc 最先被执行
   *    若不初始化state，或不进行方法的绑定（例如绑定this），则不需要该函数
   */
  constructor () {
    super()
    this.state = {
      count: 1,
      isShow: true
    }
    console.log('执行构造函数，执行顺序第一')
  }

  /**
   * @desc 执行完构造函数后，进行dom的渲染，第二被执行
   * @returns 
   */
  render() {
    console.log('执行渲染函数，执行顺序第二')
    const { isShow, count } = this.state
    return (
      <div>
        <p>我是app组件：展示生命周期方法</p>
        <button onClick={ () => {
          this.updateData()
        }}>
          更新状态 { count }
        </button>
        <hr/>
        {
          isShow && <Com/>
        }

        {/* 
          销毁子组件顺序：
            由于是根据isShow来切换的，所以是isShow状态发生改变，render函数重新执行
            然后是子组件执行销毁事件
            最后是本组件执行更新事件
        */}
        <button onClick={ () => {
          this.distroyCom()
        }}>
          销毁com组件
        </button>
      </div>
    )
  }

  updateData () {
    this.setState({
      count: this.state.count + 1
    })
  }

  distroyCom () {
    this.setState({
      isShow: !this.state.isShow
    })
  }

  /**
   * @desc 组件挂载后立即被调用
   *    用途；
   *      1. 依赖于dom的操作可在此处执行
   *      2. 发送网络请求（官方建议）
   *      3. 添加一些订阅事件，但应当在componentWillUnmount移除
   */
  componentDidMount () {
    console.log('组件挂在方法，执行顺序第三')
  }

  /**
   * @desc 在组件更新后立即调用，首次渲染不会执行
   *    用途：对比更新前后的props，并进行相关的操作
   */
  componentDidUpdate () {
    console.log('组件更新后的方法，执行顺序：排在非首次render方法的后面，第二，二')
  }

  /**
   * @desc 在组件卸载与销毁前调用
   *     用途：执行必要的清理操作
   *        1. 取消网络请求
   *        2. 取消订阅事件
   *        3. 清除定时器
   */
  componentWillUnmount () {
    console.log('组件销毁前调用：执行顺序：')
  }
}
