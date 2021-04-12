/**
 * @desc 高阶组件props增强：当很多个地方都要增加某个属性时，可使用高阶组件
 */
import React, { PureComponent } from 'react'

class App extends PureComponent {
  render() {
    return (
      <div>
        name: { this.props.name }
        rigion: { this.props.rigion }
      </div>
    )
  }
}

// 定义高阶组件：
function highComponent2 (Component) {
  return props => {
    return <Component {...props} rigion="中国"/>
  }
}

const SelfHighComponent = highComponent2(App)

export default SelfHighComponent
