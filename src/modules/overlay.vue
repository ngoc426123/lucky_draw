<template>
  <div
    class="overlay"
    :class="{
      'open': open
    }"
  ></div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Overlay',

  computed: {
    ...mapState('overlay', [
      'open',
    ]),
  }
}
</script>

<style lang="scss" scoped>
.overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 20;
  background: rgba(0,0,0,.7);

  .GoLive & {
    opacity: 0;
    visibility: hidden;
    pointer-events: none;

    &.open {
      opacity: 1;
      visibility: visible;
      pointer-events: auto;
    }
  }

  .EditLive & {
    display: none;

    &.open {
      display: block;
    }
  }
}
</style>