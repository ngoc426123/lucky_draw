<template>
  <div
    class="background"
    :style="backgroundComputed"
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

    ...mapState('screen', [
      'is_edit_program',
    ]),

    backgroundComputed: ({ first_color, second_color, angle, background }) => {
      return !background ? { 'background': `linear-gradient(${angle}deg, ${second_color} 0%, ${first_color} 100%)` } : { 'background-image': `url(${background})` };
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
      if ( !this.is_edit_program ) {
        return;
      }

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
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 1;

  .EditLive & {
    cursor: pointer;
  }
}
</style>