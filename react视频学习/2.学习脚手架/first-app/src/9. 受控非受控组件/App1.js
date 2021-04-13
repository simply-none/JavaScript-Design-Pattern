/**
 * @desc ref的使用：
 *     函数组件中使用ref：通过React.forwardRef来获取函数内部元素
 */
import React, { PureComponent, createRef, forwardRef } from 'react'

const Other = forwardRef (function (props, ref) {
  console.log(props, ref, 'Other组件')
  return (
    <div>
      <div ref={ ref }>{ props.count }</div>
    </div>
  )
})


export default class App extends PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      count: 9
    }
    this.otherRef = createRef()

    this.changeOtherCount = this.changeOtherCount.bind(this)
  }

  render() {
    return (
      <div>
        <Other ref={ this.otherRef } { ...this.state } changeOtherCount={ () => this.changeOtherCount }>other组件</Other>
        <button onClick={ () => this.changeOtherCount() }>改变other组件的count</button>
      </div>
    )
  }

  changeOtherCount () {
    this.setState({
      count: this.state.count + 1
    })
  }
}
