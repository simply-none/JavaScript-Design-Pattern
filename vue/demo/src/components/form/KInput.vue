<template>
  <div>
    <!-- 双向数据绑定需要实现：value，@input -->
    <!-- $attr的用处：直接将父组件传入的非prop属性设置到input上 -->
    <input
      :type="type"
      :value="value"
      v-bind=$attrs
      @input="onInput"
    />
  </div>
</template>

<script>
export default {
  // 使用v-bind=$attrs时，传入的属性默认会降级的，并且还会附加到组件的根上（div），若不想要这种效果，可设置
  inheritAttrs: false,
  props: {
    value: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    }
  },
  methods: {
    onInput (e) {
      this.$emit('input', e.target.value)
      // 当使用sync时，需要用下面的方法：
      this.$emit('update:value', e.target.value)

      // 通知校验：让父组件去触发，因为让自己去触发，到时候是不能传给父组件的，因为slot会被当前组件直接替换，故而写在slot上的属性无作用
      this.$parent.$emit('validate')
    }
  },
}
</script>

<style>

</style>