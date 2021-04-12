/**
 * @desc 高阶组件props增强：使用createContext函数
 */
import React, { PureComponent, createContext } from 'react'

const UserContext = createContext({
  name: 'jida',
  rigion: 'chos'
})

class Home extends PureComponent {
  render() {
    return (
      <div>
        name: { this.props.name }
        rigion: { this.props.rigion }
      </div>
    )
  }
}

class About extends PureComponent {
  render() {
    return (
      <ul>
        {
          Object.keys(this.props).map(key => {
            return <li key={key}>{key}: {this.props[key]}</li>
          })
        }
      </ul>
    )
  }
}

const HighHome = highComponent2(Home)
const HighAbout = highComponent2(About)

class App extends PureComponent {
  render() {
    return (
      <div>
        <UserContext.Provider value={ {name: 'jidaqiu', rigion: '中国'} }>
          <HighHome/>
          <HighAbout/>
        </UserContext.Provider>
      </div>
    )
  }
}

// 定义高阶组件：
function highComponent2 (Component) {
  return props => {
    return (
      <UserContext.Consumer>
        {
          user => {
            return <Component { ...props } { ...user }/>
          }
        }
      </UserContext.Consumer>
    )
  }
}

export default App
