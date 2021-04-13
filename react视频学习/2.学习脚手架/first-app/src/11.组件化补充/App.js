/**
 * @desc 包裹代码的空元素（类似vue中的template）
 * @step 第一步：在react中导入Fragment元素
 *       第二步：在某些元素不需要被div包裹的地方使用该元素
 * @notice 
 *       1. Fragment的短语法形式：可直接省略标签名称
 *       2. 省略了标签名称的Fragment和其等效，但不能添加任何其他属性
 */
import React, { Fragment, PureComponent } from 'react'

export default class App extends PureComponent {
  render() {
    return (
      <Fragment>
        <Fragment>
          <h1>Fragment元素</h1>
        </Fragment>
        <>
          <h2>Fragment元素的短语法形式</h2>
        </>
        <>
          {
            [1, 2, 3].map(item => {
              return (
                <Fragment key={ item }>
                  <h3>数组遍历：{ item }</h3>
                </Fragment>
              )
            })
          }
        </>
      </Fragment>
    )
  }
}
