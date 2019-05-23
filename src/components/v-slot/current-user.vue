<template>
  <div>
    <div v-for="(item, index) in items" :key="index" style="line-height:2.2;" :style="index % 2 === 0 ? 'background:'+oddBgcolor : 'background:'+evenBgcolor" >
      <slot name="cont" :$index="index"></slot>
    </div>
    <slot></slot>
</div>
</template>
<script>
export default {
  props: {
    items: Array,
    oddBgcolor: String,
    evenBgcolor: String
  }
}
</script>
