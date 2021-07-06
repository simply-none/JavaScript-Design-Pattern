<template>
  <div class="getProps">
    <child name="parent-child" :age="19" ref="child"/>
    <hr/>
    <div>
      <div>
        当前组件：{{ this.$options.name}}
      </div>
      <div>
        当前name：{{ this.name }}
      </div>
      <div>
        获取子组件：<button @click="getChildNickNameAttr">获取子组件nickname</button>
      </div>
      <div>
        修改子组件：<button @click="setChildNickNameAttr">修改子组件nickname</button>
      </div>
      <div>
        获取子组件，通过children：<button @click="getChildNickNameByChildren">获取子组件nickname</button>
      </div>
      <div>
        修改子组件，通过children：<button @click="setChildNickNameByChildren">修改子组件nickname</button>
      </div>
    </div>
    <child-2 @setAttr="setAttr"/>
    <pre>
      {{ this.postData }}
    </pre>
    <hr/>
    <div>
      <brother name="brother00"></brother>
      <brother name="brother01"></brother>
      <brother-2></brother-2>
    </div>
  </div>
</template>

<script>
import Brother from './Brother.vue'
import Brother2 from './Brother2.vue'
import Child from './Child.vue'
import Child2 from './Child2.vue'

export default {
  name: 'get-props',
  data() {
    return {
      name: 'parent',
      postData: {}
    }
  },
  components: {
    Child,
    Child2,
    Brother,
    Brother2
  },
  methods: {
    // 获取子组件的方法
    getChildNickNameAttr () {
      this.name = this.$refs.child.getName()
    },
    // 修改子组件的值
    setChildNickNameAttr () {
      this.$refs.child.nickName = 'edit in parent nickname'
    },
    setChildNickNameByChildren () {
      this.$children[0].nickName = 'edit in parent by $children'
    },
    getChildNickNameByChildren () {
      this.name = this.$children[0].getName()
    },
    // 通过子组件emit修改父组件属性值
    setAttr (data) {
      this.postData = data
    }
  },
}
</script>

<style>

</style>