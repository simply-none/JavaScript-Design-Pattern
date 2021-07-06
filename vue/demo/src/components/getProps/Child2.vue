<template>
  <div class="get-props-child2">
    <div>
      当前组件：{{ this.$options.name }}
    </div>
    <div>
      <button @click="setParentAttr">修改父组件属性</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'get-props-child2',
  methods: {
    // 修改父组件属性
    setParentAttr () {
      this.$emit('setAttr', {
        a: 1,
        b: 2
      })
    }
  },
}
</script>

<style>

</style>