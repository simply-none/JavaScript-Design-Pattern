<template>
  <div class="brother-2">
    <div>
      <div>
        当前组件：{{ this.$options.name }}
      </div>
      <button @click="emitBroEvent">触发兄弟组件事件</button>
    </div>
  </div>
</template>

<script>
import bus from './bus'

export default {
  name: 'brother-2',
  methods: {
    // 触发bus
    emitBroEvent () {
      bus.$emit('bus-brother', this.$options.name)
    }
  },
}
</script>

<style>

</style>