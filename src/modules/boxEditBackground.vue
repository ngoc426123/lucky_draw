<template>
  <div
    class="boxEditBackground box"
    v-if="is_edit_background"
  >
    <div class="box__title">Edit Background</div>
    <div class="box__content">
      <div class="form horizontal">
        <div class="form__row">
          <label class="form__label" for="">Gradient</label>
          <div class="form__colRight">
            <div class="form__group" style="max-width: 155px">
              <input
                type="color"
                class="form__control form__control--color"
                name="first_color"
                v-model="setter_first_color">
              <input
                type="color"
                class="form__control form__control--color"
                name="second_color"
                v-model="setter_second_color">
              <RoundSlider
                v-model="setter_angle"
                start-angle="0"
                end-angle="+360"
                line-cap="round"
                width="10"
                radius="20"
                borderWidth="1"
                pathColor="transparent"
                rangeColor="transparent"
              />
            </div>
          </div>
        </div>
        <div class="form__row">
          <label class="form__label" for="">Background</label>
          <div class="form__colRight">
            <input
              type="text"
              class="form__control"
              name="background"
              v-model="setter_background">
          </div>
        </div>
      </div>
    </div>
    <div class="box__footer in-right">
      <button class="btn btn-solid" v-on:click="onClickUpdateBackground">Accept</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import RoundSlider from 'vue-round-slider'

export default {
  name: "BoxEditBackground",

  components: {
    RoundSlider,
  },

  computed: {
    ...mapState('background', [
      'is_edit_background',
      'first_color',
      'second_color',
      'angle',
      'background',
    ]),

    setter_first_color: {
      get (vm) {
        return vm.first_color; 
      },
      set (value) {
        this.updateFirstColor(value);
      }
    },

    setter_second_color: {
      get (vm) {
        return vm.second_color; 
      },
      set (value) {
        this.updateSecondColor(value);
      }
    },

    setter_angle: {
      get (vm) {
        return vm.angle; 
      },
      set (value) {
        this.updateAngle(value);
      }
    },

    setter_background: {
      get (vm) {
        return vm.background; 
      },
      set (value) {
        this.updateBackground(value);
      }
    },
  },

  methods: {
    ...mapActions('background', [
      'updateIsEditBackground',
      'updateFirstColor',
      'updateSecondColor',
      'updateAngle',
      'updateBackground'
    ]),

    ...mapActions('overlay', [
      'openOverlay'
    ]),

    onClickUpdateBackground () {
      this.openOverlay(false);
      this.updateIsEditBackground(false);
    }
  },
}
</script>

<style lang="scss" scoped>
.boxEditBackground {
  width: 100%;
  max-width: 540px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 11;
}
</style>