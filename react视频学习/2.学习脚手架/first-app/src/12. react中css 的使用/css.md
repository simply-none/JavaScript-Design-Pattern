# react中css的使用

使用方式有：

1. 在render函数中嵌入style属性，该属性（值为一个对象形式）和其他属性的使用方法一致
2. 对每个组件都导入一个自有的css文件（此种方法，很容易对样式进行覆盖掉）
3. 使用css modules：在所有具备类似webpack的环境中均可使用
   1. react中，默认设置了`modules:true`，其他库需要设置该属性
   2. css modules是局部作用域的，生成的类名会类似`style-xxx-hash`的形式
   3. css modules中的连接符形式的类名，是无法获取到的
   4. 对所有的css、scss、less等文件都修改成带`.module.css`的形式引用，使用方法如下：
      1. 编写带有`xxx.module.css`的样式
      2. 导入样式：`import xxxStyle from 'xxx'`
      3. 使用样式：`className={xxxStyle.styleName}`，这里就是class类名为xxx文件中的styleName
4. css in js：css由js文件生成，而不是外部文件定义的
   1. 具备类似css预处理器的一些功能
   2. 可以获取动态的状态
   3. 目前流行的css in js库有：styled-components(智能化提示插件vscode-styled-components)、emotion、glamorous