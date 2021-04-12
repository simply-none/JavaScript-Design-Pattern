import React, { PureComponent } from 'react'

class App extends PureComponent {
  render() {
    return (
      <div>
        name: { this.props.name }
      </div>
    )
  }
}

// 定义高阶组件：
function highComponent (Component) {
  // 当使用类表达式时，省略名称，则组件名自动为PureComponent
  class HighComponent extends PureComponent {
    render () {
      return (
        <div>
          <Component {...this.props}/>
        </div>
      )
    }
  }
  // 若想为该组件重命名，则使用
  HighComponent.displayName = 'mycom'
  return HighComponent
}

// 定义高阶组件：
function highComponent2 (Component) {
  // 当使用类表达式时，省略名称，则组件名自动为PureComponent
  function HighComponent (props) {
    return (
      <div>
        <Component {...props}/>
      </div>
    )
  }
  // 若想为该组件重命名，则使用
  HighComponent.displayName = 'mycom'
  return HighComponent
}

const SelfHighComponent = highComponent2(App)

export default SelfHighComponent
