import React, { Component } from 'react'

import './style.css'

import TabControls from './TabControls'

export default class App extends Component {
  constructor () {
    super()

    // 不变的数据直接放到this中
    this.tabs = ['阅文', '腾讯', '百度']
    // state放会改变的数据
    this.state = {
      tabTitle: '阅文'
    }
  }

  render() {
    return (
      <div>
        {/* 传入数据到子组件中 */}
        <TabControls onClick={ index => this.changeTabTitle(index) } tabs={ this.tabs }/>
        <div>
          { this.state.tabTitle }
        </div>
      </div>
    )
  }

  changeTabTitle (index) {
    this.setState({
      tabTitle: this.tabs[index]
    })
  }
}
