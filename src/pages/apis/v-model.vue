<template>
<div>
  <p>
    组件的双向绑定
  </p>
  <Button type="primary" @click="showToast=true">打开弹窗</Button>
  <toast v-model="showToast" text="这是一个弹窗" @close="closeToast"></toast>
</div>
</template>
<script>
import toast from '@/components/apis/toast.vue'

export default {
  data () {
    return {
      showToast: false
    }
  },
  components: {toast},
  methods: {
    closeToast () {
      this.showToast = false
    }
  }
}
</script>
