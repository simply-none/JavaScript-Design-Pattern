import React, { Component } from 'react'

// 使用props进行一层一层的传递

function ProfileHeader (props) {
  return (
    <div>
      <div>
        { props.name }
      </div>
      <div>
        { props.age }
      </div>
    </div>
  )
}

function Profile (props) {
  return (
    <div>
      {/* props的中转 */}
      <ProfileHeader { ...props }/>
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
      {/* 若想传递所有的state，可以使用这种形式 */}
        <Profile { ...this.state }/>
      </div>
    )
  }
}
