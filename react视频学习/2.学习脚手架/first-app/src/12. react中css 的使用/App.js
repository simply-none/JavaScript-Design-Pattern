/**
 * @desc styled-components的使用：类似css预处理器
 * 
 * @notice
 *      在真实开发环境中，可对样式进行导入，而不是混在一个文件中
 */

import React, { PureComponent } from 'react'
import { ThemeProvider } from 'styled-components'

import AppWrapperStyle, { OtherStyle } from './style'

export default class App extends PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      changeColor: 'blue'
    }
  }
  render() {
    return (
      <ThemeProvider theme={ { color: 'red' } }>
        <AppWrapperStyle changeColor={this.state.changeColor} className="jidaqiu">
          <h1>我是h1元素</h1>
          <OtherStyle>
            <p>
              <span className="div1">
                我是p元素下的div元素
              </span>
              <span className="div2">
                我是p元素下的div元素2
              </span>
            </p>
          </OtherStyle>
        </AppWrapperStyle>
      </ThemeProvider>
      )
  }
}
