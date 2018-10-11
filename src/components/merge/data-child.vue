<template>
<div>
  {{childData}}
</div>
</template>
<script>
export default {
  data (vm) {
    return {
      childData: vm.parentData
    }
  },
  props: ['parentData']
}

</script>
