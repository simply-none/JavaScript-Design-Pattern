/**
 * @desc render函数是否被重新渲染
 *    第一种方法：在每个组件中加上生命周期函数shouldComponentUpdate（内部不要深层比较）
 *    第二种方法：针对类组件，让其自动继承自PureComponent组件（而不是Component组件），这个会自动进行比较(浅层比较)，只要该组件未引用父级变化的state
 *    第三种方法：针对函数组件，在每个函数组件包裹一个memo函数即可和第二种方法一样的效果
 */
import React, { Component, memo, PureComponent } from 'react'

// 第二种
class ProfileHeader extends PureComponent {

  render () {
    console.log('profileHeader组件')
    return (
      <div>
        <div>
          aaa
        </div>
      </div>
    )
  }
}

// 第三种
const MenoProfileHeader = memo(function () {
  console.log('MenoProfileHeader组件')
    return (
      <div>
        <div>
          aaa
        </div>
      </div>
    )
})

function Profile (props) {
  return (
    <div>
      {/* props的中转 */}
      <ProfileHeader age={props.age}/>
      <MenoProfileHeader age={props.age}/>
      <ul>
        <li>设置1</li>
        <li>设置2</li>
        <li>设置3</li>
      </ul>
    </div>
  )
}

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: 'jiu',
      age: 23,
      friends: ['1', '2', '3']
    }
  }

  // 第一种
  // 判断是否需要调用render函数，为false则不进行render的调用
  // 当state改变时，不会影响页面的改变时，应为false
  shouldComponentUpdate (nextProps, nextStates) {
    // 仅当之前的name不等于改变后的name时，则进行调用
    if (this.state.name !== nextStates.name) {
      return true
    }
    return false
  }

  render() {
    console.log('调用render函数')
    return (
      <div>
        <div>{ this.state.name }</div>
        <button onClick={ () => this.changeText() }>改变文本</button>
        <button onClick={ () => this.increment() }>改变年龄</button>
        <Profile { ...this.state }/>
      </div>
    )
  }

  changeText () {
    this.setState({
      name: 'qiu'
    })
  }

  increment () {
    this.setState({
      age: 29
    })

    // 推荐的setState的做法：针对对象而言，千万别改变该对象内部的值，应对该对象进行浅层（一般来说）拷贝后，在进行值的改变，然后赋值
    this.setState({
      friends: [...this.state.friends, '78']
    })
  }
}
