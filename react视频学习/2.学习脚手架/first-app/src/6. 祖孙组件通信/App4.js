import React, { Component } from 'react'

// 使用多个Context进行数据共享

// 第一步：创建context
const UserContext = React.createContext({
  name: 'jida',
  age: 18
})

const ThemeContext = React.createContext({
  color: 'yellow'
})

// 第四步：当共享数据的组件是函数时的用法
class ProfileHeader extends Component {
  render () {
    // 第六步：通过参数value, theme进行数据的调用
    return (
      <UserContext.Consumer>
        {
          value => {
            return (
              <ThemeContext.Consumer>
                {
                  theme => {
                    return (
                      <div style={ { backgroundColor: theme.color } }>
                        <div>
                          { theme.color }
                        </div>
                        <div>
                          { value.name }
                        </div>
                        <div>
                          { value.age }
                        </div>
                      </div>
                    )
                  }
                }
              </ThemeContext.Consumer>
            )
          }
        }
      </UserContext.Consumer>
    )
  }
}


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
        {/* 第三步：在内部嵌入多个需共享数据的其他组件, 若不放入到内部，则会使用该对象设置的默认值，就不会传递共享数据而已 */}
          <ThemeContext.Provider value={ { color: 'red' } }>
            <Profile/>
          </ThemeContext.Provider>
        </UserContext.Provider>
        {/* 此处使用的是context设置的默认值 */}
        <Profile/>
      </div>
    )
  }
}
