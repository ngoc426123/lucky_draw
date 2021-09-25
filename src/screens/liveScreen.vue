<template>
  <div
    rel="LiveScreen"
    class="container screen"
    :class="{
      'GoLive': !is_edit_program,
      'isRolling': is_rolling,
      'isPreventFastSpin': is_prevent_fast_spin,
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
      >
        <span>
          <span>{{$t('btn_rolling.text_roll')}}</span>
          <span>{{$t('btn_rolling.text_stop')}}</span>
        </span>
      </Button>
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
    ...mapState([
      'is_transition',
    ]),

    ...mapState('number', [
      'is_rolling',
      'is_prevent_fast_spin',
    ]),

    ...mapState('screen', [
      'is_edit_program',
    ]),

    ...mapState('dashbroad', [
      'is_show_dashbroad',
    ]),
  },

  methods: {
    ...mapActions([
      'updateIsTransition',
    ]),

    ...mapActions('overlay', [
      'openOverlay'
    ]),

    ...mapActions('screen', [
      'updateIsEditProgram'
    ]),

    ...mapActions('number', [
      'rollNumber',
      'getNumber',
      'clearGame',
      'updateIsPreventFastSpin',
      'updateIsEditNumber',
    ]),

    ...mapActions('dashbroad', [
      'updateIsShowDashbroad'
    ]),

    async handleEventSpinNumber () {
      this.updateIsPreventFastSpin(true);
      await new Promise((reslove, reject) => {setTimeout(reslove, 300)});
      this.getNumber();
      this.rollNumber(false);
      await new Promise((reslove, reject) => {setTimeout(reslove, 2500)});
      this.updateIsPreventFastSpin(false);
    },

    async handleEventStopNumber () {
      this.rollNumber(true);
      this.updateIsPreventFastSpin(true);
      await new Promise((reslove, reject) => {setTimeout(reslove, 2000)});
      this.updateIsPreventFastSpin(false);
    },

    onClickRolling () {
      if ( this.is_rolling ) {
        if ( !this.is_prevent_fast_spin ) {
          this.handleEventSpinNumber();
        }
      } else {
        this.handleEventStopNumber();
      }
    },

    async onClickGoEdit () {
      this.updateIsTransition(true);
      await new Promise((reslove, reject) => setTimeout(reslove, 200));
      this.clearGame();
      this.updateIsPreventFastSpin(false);
      this.updateIsEditProgram(true);
      await new Promise((reslove, reject) => setTimeout(reslove, 800));
      this.updateIsTransition(false);
    },
  },
  
  mounted () {
    document.addEventListener('keyup', async (key) => {
      if ( this.is_edit_program && this.is_transition ) {
        return;
      }

      if ( key.key === 'Enter' ) {
        if ( this.is_rolling  ) {
          if ( !this.is_prevent_fast_spin ) {
            this.handleEventSpinNumber();
          }
        } else {
          this.handleEventStopNumber();
        }
      }

      if ( key.key === 'F10' && key.ctrlKey ) {
        if ( !this.is_show_dashbroad ) {
          this.openOverlay(true);
          this.updateIsShowDashbroad(true);
        } else {
          this.openOverlay(false);
          this.updateIsShowDashbroad(false);
        }
      }
    });
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
    bottom: 100px;
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
    height: 65px;
    border: none;
    border-bottom: solid 4px #c4281d;
    background-color: #f44336;
    background-image: url(../assets/images/bg-btn-rolling.svg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    transition: all 0.2s ease;
    position: relative;

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

    .isPreventFastSpin & {
      transform: translateY(50%);
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
    }

    > span {
      line-height: 65px;
      position: absolute; 
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      overflow: hidden;

      > span {
        position: absolute; 
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        overflow: hidden;
        transition: opacity 0.1s ease 0.2s;

        &:first-child {
          color: #ffffff;

          .isRolling & {
            opacity: 0;
          }
        }

        &:last-child {
          opacity: 0;

          .isRolling & {
            opacity: 1;
          }
        }
      }
    }
  }
}
</style>