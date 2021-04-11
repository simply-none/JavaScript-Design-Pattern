import React, { Component } from 'react'

export default class TabBar extends Component {
  render() {
    // 嵌套的内容，可以通过this.props[prop]形式来获取
    const { leftSlot, centerSlot, rightSlot } = this.props
    return (
      <div className='tab-bar'>
        <div className='tab-item left-solt'>
          { leftSlot }
        </div>
        <div className='tab-item center-solt'>
          { centerSlot }
        </div>
        <div className='tab-item right-solt'>
          { rightSlot }
        </div>
      </div>
    )
  }
}
