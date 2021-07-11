<template>
  <div>
    <!-- label是父组件传入的，所以需要通过props传入 -->
    <label v-if="label">{{ label }}</label>
    <slot></slot>
    <!-- 错误信息：自身的状态，到底有没有错，只有自身知道 -->
    <p v-if="error">{{ error }}</p>
    <!-- 验证一下是否传入校验规则： -->
    <p>
      {{ form.rules }}
    </p>
  </div>
</template>

<script>
import Schema from 'async-validator'

export default {
  inject: ['form'],
  props: {
    label: {
      type: String,
      default: ''
    },
    prop: {
      type: String
    }
  },
  data () {
    return {
      error: ''
    }
  },
  mounted() {
    // 监听校验
    this.$on('validate', () => {
      this.validate()
    })
  },
  methods: {
    validate () {
      // 做校验，使用async-validator这个库
      // 1. 获取数值和规则
      const value = this.form.model[this.prop]
      const rule = this.form.rules[this.prop]
      // 2. 创建校验规则
      const schema = new Schema({
        [this.prop]: rule
      })
      // 将校验结果返回，结果返回promise
      return schema.validate({
        [this.prop]: value
      }, errors => {
        if (errors) {
          // 有错
          this.error = errors[0].message
        } else {
          this.error = ''
        }
      })
    }
  },
}
</script>

<style>

</style>