# vue组件传值

## 组件封装的一些技巧

1. 插槽的用法：组件封装时，需要考虑到通用性。比如一个dialog组件，需要显示中间的信息和底部的操作按钮。此时需要考虑的场景是当组件使用时，是否需要中间/底部栏，则在封装组件的时候，通过`v-if='$slot.name'`判断用户是否使用了相应的中间/底部栏，否则会一直展示中间/底部栏的位置。
2. 组件封装时，组件通信的技巧：通过vue语法糖`.sync`来进行组件间的传值，用法如下：使用该组件时：`:data.sync="sync"`，自定义组件内部通过某些点击事件来传送该值到父组件中：`this.$emit('update:data', value)`
3. 自定义组件注册：在使用`Vue.component()`注册组件时，第一个参数可以使用组件的名字(`component.name)`，此处的name即exports里面的name
4. 组件注册自定义属性的时候，在自定义组件内部使用props时，需验证属性的类型，以及默认值等信息。同时在使用该组件时，不一定必须使用`v-bind`对属性进行绑定，因为默认情况下是字符串，同时对于一些显示隐藏的属性，可根据是否有值来判定/设置相应的class。
5. 输入框组件封装重点：`v-model`的使用技巧。使用组件时：`v-model="value"`，自定义组件内部：`:value="value" @input="handleInput" handleInput (e) { this.$emit('input', e.target.value) }`，这样才能实现数据的双绑定。
6. 输入框组件密码显隐：展示密码和展示右侧的图标。密码的显隐切换是由type类型来控制的，故当传入密码显示属性`password`时，type应进行判断，有password则通过password来判断是否在password和text之间切换，无password属性则直接为password。控制password的变化需要在自定义组件内部加一个passwordVisible属性来切换