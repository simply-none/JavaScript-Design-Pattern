/**
 * @desc 受控组件：通常情况下，表单元素通常会自己维护state，并根据用户的输入进行更新，且有一个默认的提交动作
 *      React中：将表单元素绑定state，使得其成为一个唯一的数据源；在输入时，监听数据的改变，之后更新state，最后由更新的state显示到界面上
 *      
 *      // es6语法：计算属性名：针对动态属性
 */

import React, { PureComponent } from 'react'

export default class App extends PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      userName: '',
      password: '',
      hobbies: '散步'
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={ e => this.onSubmit(e) }>
          <div>
            <label htmlFor="userName">
              用户名：<input
              id="userName"
              name="userName"
              type="text"
              onChange={ e => this.onChange(e) }
              value={ this.state.userName }/>
            </label>
          </div>
          {/* input组件叫做受控组件：先禁用表单的默认提交行为，同时state作为该组件的唯一事件源 */}
          <div>
            <label htmlFor="password">
              密码：<input
              id="password"
              name="password"
              type="password"
              onChange={ e => this.onChange(e) }
              value={ this.state.password }/>
            </label>
          </div>
          <div>
            <label htmlFor="hobbies">
              爱好：
              <select
                id="hobbies"
                name='hobbies'
                onChange={ e => this.onChange(e) }
                value={ this.state.hobbies }>
                <option value="跑步">跑步</option>
                <option value="散步">散步</option>
                <option value="漫步">漫步</option>
              </select>
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
    console.log(this.state, '个人资料')
  }

  onChange (e) {
    console.log(e, 'change')
    // es6语法：计算属性名：针对动态属性
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onClick (e) {
    console.log(e, 'click')
  }
}
