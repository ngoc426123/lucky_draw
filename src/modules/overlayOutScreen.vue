<template>
  <div
    class="outScreen"
    v-if="is_out_screen"
    v-on:click="onClickOutScreen"
  >
    <div class="outScreen__box">
      <div class="outScreen__title">{{$t('out_screen.title')}}</div>
      <div class="outScreen__icon">
        <i class="icon icon-mouse-click"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'OverlayOutscreen',

  computed: {
    ...mapState('outscreen', [
      'is_out_screen',
    ]),
  },

  methods: {
    ...mapActions('outscreen', [
      'updateIsOutScreen'
    ]),

    onClickOutScreen () {
      this.updateIsOutScreen(false);
    }
  }
}
</script>

<style lang="scss" scoped>
.outScreen {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9999;
  background: rgba(0,0,0,.9);

  &__box {
    pointer-events: none;
    max-width: 600px;
  }

  &__title {
    margin-bottom: 50px;
    font-size: 25px;
    text-align: center;
  }

  &__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 180px;
    margin: 0 auto;
    font-size: 80px;
    position: relative;

    &::before {
      content: "";
      width: 40%;
      height: 40%;
      border-top: solid 2px #ffffff;
      border-left: solid 2px #ffffff;
      position: absolute;
      top: 0;
      left: 0;
    }

    &::after {
      content: "";
      width: 40%;
      height: 40%;
      border-bottom: solid 2px #ffffff;
      border-right: solid 2px #ffffff;
      position: absolute;
      right: 0;
      bottom: 0;
    }
  }
}
</style>