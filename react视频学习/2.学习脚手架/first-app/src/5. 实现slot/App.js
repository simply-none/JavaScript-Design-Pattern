import React, { Component } from 'react'

import './style.css'

import TabBar from './TabBar'
import TabBar2 from './TabBar2'

export default class App extends Component {
  render() {
    return (
      <div>
      {/* 两种方式的效果是相同的 */}
        {/* slot的第一种方式：适用于较少的嵌套组件情况（多的也可以） */}
        <TabBar>
          <span>aaa</span>
          <span>bbb</span>
          <span>ccc</span>
        </TabBar>
        <hr/>
        {/* slot的第二种方式：适用于较多的嵌套组件：将jsx作为属性传入到子组件中 */}
        <TabBar2 leftSlot={ <span>aaa</span> }
          centerSlot={ <span>bbb</span> }
          rightSlot={ <span>ccc</span> }
          />
      </div>
    )
  }
}
