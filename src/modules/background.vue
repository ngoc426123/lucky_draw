<template>
  <div
    class="background"
    :style="{ background: bgComputed }"
    v-on:click="onClickEditBackground"
  ></div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Background',

  computed: {
    ...mapState('background', [
      'first_color',
      'second_color',
      'angle',
      'background'
    ]),

    bgComputed: ({ first_color, second_color, angle, background }) => {
      return !background ? `linear-gradient(${angle}deg, ${second_color} 0%, ${first_color} 100%)` : `url(${background})`;
    }
  },

  methods: {
    ...mapActions('overlay', [
      'openOverlay'
    ]),

    ...mapActions('background', [
      'updateIsEditBackground'
    ]),

    onClickEditBackground () {
      this.openOverlay(true);
      this.updateIsEditBackground(true);
    }
  }
}
</script>

<style lang="scss" scoped>
.background {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  cursor: pointer;
  background-position: center;
  background-size: auto;
  background-repeat: no-repeat;
  z-index: 1;
}
</style>