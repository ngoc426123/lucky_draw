<template>
  <div
    class="transitionScreen"
    :class="{ 'open': is_transition }"
  >
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: none; display: block; shape-rendering: auto;" width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><g><circle cx="60" cy="50" r="4" fill="#ff5722"><animate attributeName="cx" repeatCount="indefinite" dur="1s" values="95;35" keyTimes="0;1" begin="-0.67s"></animate><animate attributeName="fill-opacity" repeatCount="indefinite" dur="1s" values="0;1;1" keyTimes="0;0.2;1" begin="-0.67s"></animate></circle><circle cx="60" cy="50" r="4" fill="#ff5722"><animate attributeName="cx" repeatCount="indefinite" dur="1s" values="95;35" keyTimes="0;1" begin="-0.33s"></animate><animate attributeName="fill-opacity" repeatCount="indefinite" dur="1s" values="0;1;1" keyTimes="0;0.2;1" begin="-0.33s"></animate></circle><circle cx="60" cy="50" r="4" fill="#ff5722"><animate attributeName="cx" repeatCount="indefinite" dur="1s" values="95;35" keyTimes="0;1" begin="0s"></animate><animate attributeName="fill-opacity" repeatCount="indefinite" dur="1s" values="0;1;1" keyTimes="0;0.2;1" begin="0s"></animate></circle></g><g transform="translate(-15 0)"><path d="M50 50L20 50A30 30 0 0 0 80 50Z" fill="#19bdb9" transform="rotate(90 50 50)"></path><path d="M50 50L20 50A30 30 0 0 0 80 50Z" fill="#19bdb9"><animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;45 50 50;0 50 50" keyTimes="0;0.5;1"></animateTransform></path><path d="M50 50L20 50A30 30 0 0 1 80 50Z" fill="#19bdb9"><animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;-45 50 50;0 50 50" keyTimes="0;0.5;1"></animateTransform></path></g></svg>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'TransitionScreen',

  computed: {
    ...mapState([
      'is_transition'
    ]),
  }
}
</script>

<style lang="scss" scoped>
.transitionScreen {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 20;
  background: #020213;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: all 0.2s ease;

  &.open {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }

  svg {
    max-width: 100px;
    max-height: 100px;
  }
}
</style>