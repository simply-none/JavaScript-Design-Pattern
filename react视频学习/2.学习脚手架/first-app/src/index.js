import React from 'react'
import ReactDOM from 'react-dom'

// import { App1, App2 } from './1. 组件的定义方式/App'
// import App3 from './2. 组件生命周期/App'
// import App4 from './3. 组件通信/1. 类组件父子通信及属性验证'
import App5 from './3. 组件通信/2. 函数组件父子通信及属性验证'


ReactDOM.render((
  <div>
    {/* <App1/>
    <App2/>
    <App3/>
    <App4/> */}
    <App5/>
  </div>
), document.getElementById('root'))