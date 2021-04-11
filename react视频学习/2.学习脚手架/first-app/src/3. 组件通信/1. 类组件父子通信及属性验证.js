import React, { Component } from 'react'
// 导入验证库或者使用typescript
import PropTypes from 'prop-types'


// 或者使用Child.propTypes的形式，都是一样的，都是类的属性

class Child extends Component {
  // 这个构造函数是可省略的: props在源码中是默认进行保存的
  // constructor (props) {
  //   super(props)
  // }

  // 使用验证库
  static propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    numbers: PropTypes.array
  }

  // 使用默认值
  static defaultProps = {
    name: 'jiu',
    age: 23,
    numbers: [23, 34]
  }

  render () {
    const { name, age, numbers } = this.props
    return (
      [
      <div>
        name: { name }
        <hr/>
        age: { age }
      </div>,
      <ul>
        {
          numbers.map(item => <li>item</li>)
        }
      </ul>
      ]
    )
  }
}

export default class App extends Component {
  render() {
    return (
      <div>
        {/* 传递props到子组件 */}
        {/* 非字符串类型需要使用大括号 */}
        <Child name='qiu' age={ 23 } numbers={ [1, 2, 4, 5, 0] }/>
      </div>
    )
  }
}
