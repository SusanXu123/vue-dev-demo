<template>
<div>

  <p>
    钩子函数的合并策略
  </p>
  <p>
      parentVal 已经不是 Vue.options.created 了，而是 Parent.options.created，那么 Parent.options.created 是什么呢？它其实是通过 Vue.extend 函数内部的 mergeOptions 处理过的，所以这个例子最终的结果就是既有 childVal，又有 parentVal
  </p>

</div>
</template>
<script>
import Vue from 'vue'
const Parent = Vue.extend({
  created: function () {
    console.log('parentVal')
  }
})

const Child = new Parent({
  created: function () {
    console.log('childVal')
  }
})

export default Child
</script>
