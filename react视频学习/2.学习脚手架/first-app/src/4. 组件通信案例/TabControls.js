import React, { Component } from 'react'

export default class TabControls extends Component {
  constructor (props) {
    super(props)
    this.state = {
      currentIndex: 0
    }
  }

  render() {
    const { tabs } = this.props
    const { currentIndex } = this.state
    // class拼接和三元运算符之间优先级需要搞清楚
    return (
      <div className='tab-controls'>
        {
          tabs.map((item, index) => {
            return (
              <div key={ item }
                className={ 'tab-item ' + (currentIndex === index ? 'active' : '') }
                onClick={ () => this.itemClick(index) }>
                <span>
                  { item }
                </span>
              </div>
            )}
          )}
      </div>
    )
  }

  itemClick (index) {
    const { onClick } = this.props
    this.setState({
      currentIndex: index
    })
    // 调用传过来的props
    onClick(index)
  }
}
