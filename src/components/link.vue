<template functional>
  <a
    class="link"
    :class="props.cstClass"
    :title="props.title"
    :href="href"
    v-on="listeners"
  >
    <slot/>
  </a>
</template>

<script>
export default {
  functional: true,

  name: "Link",

  props: {
    cstClass: {
      type: String,
      default: ''
    },

    href: {
      type: String,
      default: '',
    },

    title: {
      type: String,
      default: '',
    }
  },
}
</script>