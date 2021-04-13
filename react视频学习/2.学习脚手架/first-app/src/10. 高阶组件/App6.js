/**
 * @desc portal：将组件挂载到其他地方
 * 
 * @use 通过引入的react-dom中的createPortal对象
 *      第一步：某组件Component中render函数返回ReactDOM.createPortal(this.props.children, Element)
 *          注意：若该函数不绑定Element，则默认是展示在其所在的元素内部的
 *      第二步：在导出的组件中用某组件Component包裹一些其他的子组件即可
 */

import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'

class Home extends PureComponent {
  render() {
    // 通过props.children获取子组件
    return ReactDOM.createPortal(this.props.children, document.getElementById('model'))
  }
}

export default class App6 extends PureComponent {
  render() {
    return (
      <div>
        <div>root组件</div>
        <Home>
          <h1>model组件</h1>
        </Home>
      </div>
    )
  }
}
