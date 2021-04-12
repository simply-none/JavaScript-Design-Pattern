/**
 * @desc 非受控组件：通过操作dom的方式来获取表单元素的值（尽量不要使用这种，非不得已）
 */

import React, { PureComponent, createRef } from 'react'

export default class App extends PureComponent {
  constructor (props) {
    super(props)

    this.userNameRef = createRef()
  }
  render() {
    return (
      <div>
        <form onSubmit={ e => this.onSubmit(e) }>
        {/* 非受控组件 */}
          <div>
            <label htmlFor="userName">
              用户名：<input
              ref={ this.userNameRef }
              id="userName"
              name="userName"
              type="text"
              onChange={ e => this.onChange(e) }/>
            </label>
          </div>
          <button onClick={ e => this.onClick(e) }>
            提交
          </button>
        </form>
      </div>
    )
  }

  onSubmit (e) {
    console.log(e, 'submit')
    e.preventDefault();
    console.log(this.userNameRef, '个人资料')
  }

  onChange (e) {
    console.log(e, 'change')
  }

  onClick (e) {
    console.log(e, 'click')
  }
}
