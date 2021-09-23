<template>
  <div
    rel="LiveScreen"
    class="container screen"
    :class="{
      'GoLive': !is_edit_program,
    }"
  >
    <Background />
    <BoxTitle />
    <BoxNumber />
    <Dashbroad />
    <div class="screen__btnGroup">
      <Button
        type="solid"
        size="lg"
        cstClass="screen__btnRolling"
        tooltip="Enter"
        v-on:click="onClickRolling"
      >{{is_rolling ? $t('btn_rolling.text_stop') : $t('btn_rolling.text_roll')}}</Button>
    </div>
    <Button
      type="transparent"
      cstClass="screen__btnGoEdit"
      v-on:click="onClickGoEdit"
    >{{$t('btn_menu.customsize')}}</Button>
    <!-- POPUP -->
    <Overlay />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Background from "../modules/background.vue";
import BoxTitle from "../modules/boxTitle.vue";
import BoxNumber from "../modules/boxNumberLiving.vue";
import Dashbroad from "../modules/dashbroad.vue";
import Overlay from "../modules/overlay.vue";
import Button from '../components/button.vue';

export default {
  name: "LiveScreen",

  components: {
    Background,
    BoxTitle,
    BoxNumber,
    Dashbroad,
    Overlay,
    Button,
  },

  computed: {
    ...mapState('number', [
      'is_rolling'
    ]),

    ...mapState('screen', [
      'is_edit_program',
    ]),
  },

  methods: {
    ...mapActions([
      'updateIsTransition',
    ]),

    ...mapActions('screen', [
      'updateIsEditProgram'
    ]),

    ...mapActions('number', [
      'rollNumber',
      'getNumber',
      'clearGame',
    ]),

    onClickRolling () {
      if ( this.is_rolling ) {
        this.rollNumber(false);
        this.getNumber();
      } else {
        this.rollNumber(true);
      }
    },

    async onClickGoEdit () {
      this.updateIsTransition(true);
      await new Promise((reslove, reject) => setTimeout(reslove, 200));
      this.clearGame();
      this.updateIsEditProgram(true);
      await new Promise((reslove, reject) => setTimeout(reslove, 800));
      this.updateIsTransition(false);
    },
  }
};
</script>

<style lang="scss" scoped>
.container {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
}

.screen {
  display: none;

  &.GoLive {
    display: block;
  }

  &__btnGroup {
    position: fixed;
    bottom: 80px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;

    .btn {
      margin: 0 10px;
    }
  }

  &__btnGoEdit {
    position: fixed;
    bottom: 0;
    right: 0;
    z-index: 10;
  }

  &__btnRolling {
    width: 280px;
    border: none;
    border-bottom: solid 4px #c4281d;
    background-color: #f44336;
    background-image: url(../assets/images/bg-btn-rolling.svg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: #da2f23;

      &::before {
        opacity: 1;
        visibility: visible;
        transform: translate(0%, -50%);
      }
    }

    &::before {
      content: attr(data-tooltip);
      font-size: 13px;
      padding: 5px 10px;
      color: #727272;
      text-shadow: 1px 1px 0 #b9b8b8;
      border-radius: 3px;
      background-color: #d6d6d6;
      position: absolute;
      top: 50%;
      right: 100%;
      transform: translate(80%, -50%);
      transition: all 0.2s ease;
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
    }
  }
}
</style>