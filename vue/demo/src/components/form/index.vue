<template>
  <div>
    <h2>KInput-Test</h2>
    <!-- 由于model和rules子组件也需要使用，所以K-Form组件中需使用inject、provide -->
    <k-form :model="model" :rules="rules" ref="loginForm">
      <!-- prop的作用：在formitem这个组件中拿到值和校验规则 -->
      <k-form-item label="用户名" prop="username">
        <k-input v-model="model.username" placeholder="请输入用户名"></k-input>
        <!-- 等于： -->
        <k-input :value="model.username" @input="model.username = $event"></k-input>
        <!-- 等于： -->
        <k-input :value.sync="model.username"></k-input>
        {{ this.model }}
      </k-form-item>
      <k-form-item label="密码" prop="password">
        <k-input type="password" v-model="model.password"  placeholder="请输入密码"></k-input>
      </k-form-item>
      <k-form-item>
        <button @click="submit">登录</button>
      </k-form-item>
    </k-form>
    <hr/>
  </div>
</template>

<script>
import KForm from './KForm.vue'
import KFormItem from './KFormItem.vue'
import KInput from './KInput.vue'
export default {
  data () {
    return {
      model: {
        username: 'jade',
        password: ''
      },
      // rules的规则和model结构非常相似
      rules: {
        username: [
          {
            required: true,
            message: '用户名必填'
          }
        ],
        password: [
          {
            required: true,
            message: '密码必填'
          }
        ]
      }
    }
  },
  methods: {
    submit () {
      this.$refs.loginForm.validate(isValidate => {
        if (isValidate) {
          alert('登录中....')
        } else {
          alert('错误，重新输入')
        }
      })
    }
  },
  components: { KInput, KFormItem, KForm },

}
</script>

<style>

</style>