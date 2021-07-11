<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  provide () {
    return {
      form: this
    }
  },
  props: {
    model: {
      type: Object,
      required: true
    },
    rules: {
      type: Object
    }
  },
  methods: {
    validate (cb) {
      console.log('全局校验')
      // 1. 获取校验项，当所有的promise都通过才行，过滤只留下具有prop属性的item，否则会报错
      const tasks = this.$children.filter(item => item.prop).map(item => item.validate())
      // 2. 判断所有的输入项都需通过
      Promise.all(tasks).then(() => cb(true)).catch(() => cb(false))
    }
  },
}
</script>

<style>

</style>