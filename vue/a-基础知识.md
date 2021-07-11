# 基础知识

1. 获取当前组件设置的name：`this.$options.name`
2. `$on`：组件实例上的自定义事件
   1. `this.$on('event-name', callback)`：第一个参数可为数组，绑定多个事件
3. `$emit`：触发绑定的自定义事件
   1. `this.$emit('event-name', data)`
4. `$off`：用来移除组件实例上绑定的自定义事件($on)
   1. `this.$off()`：移除所有绑定的自定义事件
   2. `this.$off('event-name')`：移除特定绑定的自定义事件event-name的所有绑定
   3. `this.$off('event-name', callback)`：移除特定绑定的自定义事件event-name的特定绑定(callback)
   4. `this.$off([event1, event2, ...])`：移除多个绑定事件
5. 项目开发时，若报错，可直接进行线上断点调试（找到报错的文件行数即可，然后进行断点，再次刷新，找到报错的步骤）