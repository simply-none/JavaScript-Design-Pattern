<template>
  <div class="brother"></div>
</template>

<script>
import bus from './bus'

export default {
  name: 'brother',
  created () {
    // 监听bus
    bus.$on('bus-brother', (name) => {
      console.log('兄弟组件触发：', name)
    })
  },
  mounted() {
    // 监听事件
    this.$on('brother', (name) => {
      console.log('brother~~', this.$attrs, Date.now(), name)
    })

    // 派发事件：仅当name的时候才会派发，防止多次调用该组件然后多次派发
    if (this.$attrs.name === 'brother01') {
      this.$emit('brother', this.$attrs.name)
    }
  },
  // 销毁：避免不必要的冗余监听
  beforeDestroy() {
    bus.$off('bus-brother')
  },
}
</script>

<style>

</style>