import React, { Component } from 'react'

// 使用Context进行数据共享
// 在模块化开发中，若需要使用context，则应该对context对象进行导出导入操作
// 在类中使用多个context时，仅可使用context.consumer的方式，使用this.context的方式只能获取到最后一个赋值的context对象


// 第一步：创建context
const UserContext = React.createContext({
  name: 'jida',
  age: 18
})

// 第四步：需共享的组件不能是函数组件：必须是类组件
class ProfileHeader extends Component {
  render () {
    // 第六步：通过this.context进行数据的调用
    console.log(this.context, 'context')
    return (
      <div>
        <div>
          { this.context.name }
        </div>
        <div>
          { this.context.age }
        </div>
      </div>
    )
  }
}

// 第五步：将需要共享的组件设置contextType为创建的context对象
ProfileHeader.contextType = UserContext

function Profile () {
  return (
    <div>
      {/* props的中转 */}
      <ProfileHeader/>
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
      age: 23
    }
  }
  render() {
    return (
      <div>
      {/* 第二步：在需要共享数据的子组件中嵌套一个userContext.Provider, 将需要共享的数据放到value中 */}
        <UserContext.Provider value={ this.state }>
        {/* 第三步：在内部嵌入需共享数据的其他组件, 若不放入到内部，则会使用该对象设置的默认值，就不会传递共享数据而已 */}
          <Profile/>
        </UserContext.Provider>
        {/* 此处使用的是context设置的默认值 */}
        <Profile/>
      </div>
    )
  }
}
