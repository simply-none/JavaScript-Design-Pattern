import React, { Component } from 'react'

class ChildApp  extends Component {
  render () {
    // 第二步：解构props，然后调用父组件传递过来的属性，就能够引用父组件对应的方法，从而改变对应的state
    const { onClick } = this.props
    return (
      <button onClick={ onClick }>+1</button>
    )
  }
}

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      counter: 0
    }
  }

  render() {
    const { counter } = this.state
    return (
      <div>
        <div>
          { counter }
        </div>
        {/* 第一步：先定义一个属性：让子组件能有对父组件的引用 */}
        <ChildApp onClick={ () => this.increment() }/>
      </div>
    )
  }

  increment () {
    this.setState({
      counter: this.state.counter + 1
    })
  }
}
