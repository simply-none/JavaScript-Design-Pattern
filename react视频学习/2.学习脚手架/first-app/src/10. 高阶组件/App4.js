/**
 * @desc 使用高阶组件进行登录鉴权：当满足某个条件时，进行组件的切换
 */

import React, { PureComponent } from 'react'

// 定义一个高阶组件
function highCom (Component) {
  const NewCom = props => {
    const { isLogin } = props
    if (isLogin) {
      return <Component { ...props }/>
    }
    return <LoginPage/>
  }
  return NewCom
}

class CartPage extends PureComponent {
  render() {
    return (
      <div>
        <h1>是否登录：{ `${this.props.isLogin}` }</h1>
        <h2>CartPage组件</h2>
      </div>
    )
  }
}

class LoginPage extends PureComponent {
  render() {
    return (
      <div>
        <h2>LoginPage组件</h2>
      </div>
    )
  }
}

const NewCartPage = highCom(CartPage)


export default class App4 extends PureComponent {
  render() {
    return (
      <div>
        <NewCartPage isLogin={ true }/>
      </div>
    )
  }
}
