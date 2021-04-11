import React, { Component } from 'react'

export default class TabBar extends Component {
  render() {
    // 嵌套的内容，安装顺序，可以通过props.children[index]的形式来获取
    return (
      <div className='tab-bar'>
        <div className='tab-item left-solt'>
          { this.props.children[0] }
        </div>
        <div className='tab-item center-solt'>
          { this.props.children[1] }
        </div>
        <div className='tab-item right-solt'>
          { this.props.children[2] }
        </div>
      </div>
    )
  }
}
