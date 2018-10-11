<template>
  <div>
    <data-child :parent-data="parentData"></data-child>
  </div>
</template>
<script>
import dataChild from '@/components/merge/data-child'
export default {
  data () {
    return {
      parentData: '这是从父级传过来的值'
    }
  },
  components: {dataChild}
}

</script>
