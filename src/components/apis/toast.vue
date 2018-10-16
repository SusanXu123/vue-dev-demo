<template>
<div class="toast-wraper" v-if="value">
  <Button shape="circle" @click="close">X</Button>
  <div>
    {{text}}
  </div>
</div>
</template>
<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: '这是弹窗啊'
    }
  },
  methods: {
    close () {
      this.$emit('close')
    }
  }
}
</script>
<style scoped>
.toast-wraper {
  position: fixed;
  width: 200px;
  padding: 16px;
  left: 50%;
  margin-left: -50px;
  top: 50%;
  border: 1px solid gray;
  background-color: rgba(200, 200, 200, 0.6);
  border-radius: 8px
}

</style>
