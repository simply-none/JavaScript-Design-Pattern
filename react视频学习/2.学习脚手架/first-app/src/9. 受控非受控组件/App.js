/**
 * @desc ref的使用：
 *     第一种方式：通过this.refs.refName的方式（不推荐）
 *     第二种方式：创建createRef函数对象，使用该函数直接获取（推荐）
 *     第三种方式：使用回调函数的形式
 * 
 * @notice 函数式组件是没有实例的，所以无法通过ref获取他们的实例，
 *         然而，可以通过React.forwardRef来获取函数内部元素
 */
import React, { PureComponent, createRef } from 'react'

class Other extends PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      count: 0
    }
  }
  render() {
    return (
      <div>
        <div>{ this.state.count }</div>
        <button onClick={ () => this.changeCount() }>改变count</button>
      </div>
    )
  }

  changeCount () {
    this.setState({
      count: this.state.count + 1
    })
  }
}


export default class App extends PureComponent {
  constructor (props) {
    super(props)

    // 第二种方式：定义ref对象
    this.bodyRef = createRef()
    this.otherRef = createRef()

    // 第三种方式：定义一个空元素
    this.footerEl = null
  }

  render() {
    return (
      <div>
        <div ref="top">top</div>
        <hr/>
        <div ref={ this.bodyRef }>body</div>
        <hr/>
        <div ref={ arg => this.footerEl = arg }>footer</div>
        <hr/>
        <button onClick={() => this.getRef() }>获取ref</button>
        <hr/>
        <Other ref={ this.otherRef }>other组件</Other>
        <button onClick={ () => this.changeOtherCount() }>改变other组件的count</button>
      </div>
    )
  }

  getRef () {
    console.log(this.refs.top, 'top')
    console.log(this.bodyRef, 'body')
    console.log(this.footerEl, 'footer')
  }

  changeOtherCount () {
    this.otherRef.current.changeCount()
  }
}
