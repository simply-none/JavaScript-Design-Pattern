/**
 * @desc classnames的使用：动态的添加class
 * 
 * @use  classnames(规则)
 * 
 *      其中，规则中可包含任意个的参数，有如下一些参数类型：
 *          1. 当为假值时，添加该参数不会加入到字符串中
 *          2. 数字、字符串：会直接添加到class中
 *          3. 对象：对象中的键会根据键值决定是否添加到class中
 *          4. 数组：会对数组进行展平处理，内部的元素和该库的规则类似
 *          5. 变量：会根据变量的真假是否添加，为真时（根据变量的类型），自动添加到class中
 *          
 */
import React, { PureComponent } from 'react'

import classnames from 'classnames'

export default class App extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      isActive: true,
      other: {
        foo: true,
        bar: true,
        baz: true
      }
    }
  }
  render() {
    const { isActive, other } = this.state
    return (
      <div>
        {/* 普通class添加 */}
        <div className={'foo bar baz'}>1</div>
        <div className={'foo ' + (isActive ? 'active' : '')}>2</div>
        <div className={['foo', isActive ? 'active' : ''].join(' ')}>3</div>

        {/* 使用classnames */}
        <div className={classnames(0, 1, false, true, '', 'str', undefined, null)}>4</div>
        <div className={classnames([0, 1, false, true, '', 'str', undefined, null])}>5</div>
        <div className={classnames(other)}>6</div>
      </div>
    )
  }
}
