<template>
  <div class="get-props-child">
    <div>
      当前组件：{{ this.$options.name}}
    </div>
    <div>
      获取父元素中的name，通过props：{{ this.name }}
    </div>
    <div>
      获取父元素的age，通过$attrs：{{ $attrs.age }}
    </div>
    <div>
      展示当前组件的nickName，通过$refs：{{ this.nickName }}
    </div>
    <div>
      展示当前组件的方法获取nickname，通过$children：{{ this.getName() }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'get-props-child',
  props: ['name'],
  data () {
    return {
      nickName: 'child',
      age: 13
    }
  },
  methods: {
    getName () {
      return this.nickName
    }
  }
}
</script>

<style>

</style>