<template functional>
  <button
    class="btn"
    :class="[`btn-${props.type}`, `btn-${props.size}`, props.cstClass]"
    @click="listeners.click"
    v-bind:data-tooltip="props.tooltip"
  >
    <slot/>
  </button>
</template>

<script>
export default {
  functional: true,

  name: "Button",

  props: {
    type: {
      type: String,
      default: 'solid',
    },
    
    cstClass: {
      type: String,
      default: ''
    },

    size: {
      type: String,
      default: 'sm'
    },

    tooltip: {
      type: String,
      default: '',
    }
  },
}
</script>