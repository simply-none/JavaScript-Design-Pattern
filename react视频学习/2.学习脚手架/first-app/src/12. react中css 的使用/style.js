/**
 * @desc 用法：该元素返回一个包裹组件：styled.eleTag中的eleTag表示该包裹组件的最终形态是作用在那个元素上的
 * 
 * @step 动态设置css属性的值/props属性穿透；
 *    第一种（属性穿透）：在引用的css组件中像普通属性一样传入一些属性，比如对于input-css组件来说，可传入type定义input的类型
 *    第二种：styled.elTag.attrs({这里可定义一些属性（放到元素上的）、或者变量})``，使用这些变量的方式`${props => props.varName}`
 *    第三种：将父组件的props传入到css组件中动态修改样式/属性，这些属性和普通属性一样传递过来，然后会和attrs中的属性/变量进行合并，最后再进行取值
 * 
 * @notice
 *      1. 继承：若想使用一些公共的样式，可进行样式的抽离，然后使用styled(classComp)``的形式继续书写自己的样式
 *      2. 定义主题：在styled-components中有一个主题属性，在包裹了这个主题且该包裹组件设置了属性（xx = xxx: xxxx）的所有元素都可通过`${props => props.xx.xxx}`进行获取
 */
import styled from 'styled-components'

const RootStyle = styled.div`
  padding: 20px;
  margin: 8px;
`

// 使用继承
const OtherStyle = styled(RootStyle)`
  border: 2px solid pink;
`

export {
  OtherStyle
}

// 第二种方式：attrs
export default styled.div.attrs({
  // 可定义元素的一些原生属性/其他属性
  title: '鼠标覆盖显示标题',
  classaaa: 'qiujida',
  borderColor: 'red'
})`
  color: red;
  /* 第二种方式/第三种方式 */
  border: 1px solid ${ props => props.borderColor };
  /* 第三种方式：传入并引入props */
  background: ${ props => props.changeColor };
  height: 100px;
  width: 100%;

  h1,
  h2 {
    font-weight: 100;
  }

  h1 {
    /* 使用主题 */
    color: ${ props => props.theme.color };
  }

  h2 {
    color: purple;
  }

  p {
    span {
      display: inline-block;
    }
    .div1 {
      color: red;
      background-color: black;
    }
    .div2 {
      color: burlywood;
      font-size: 12px;
    }
  }
`