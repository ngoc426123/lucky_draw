<template>
  <div class="boxEditBackground box" v-if="is_edit_background">
    <div class="box__title">{{$t('box_edit_background.box_title')}}</div>
    <div class="box__content">
      <div class="form horizontal">
        <div class="form__row">
          <label class="form__label" for="">{{$t('box_edit_background.label_gradient')}}</label>
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
                max="360"
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
          <label class="form__label" for="">{{$t('box_edit_background.label_background')}}</label>
          <div class="form__colRight">
            <div class="form__group">
              <input
                type="text"
                class="form__control"
                name="background"
                v-model="setter_background">
            </div>
            <div class="form__group">
              <div class="form__textNote">{{$t("box_edit_background.text_node")}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="box__footer in-right">
      <Button type="solid" v-on:click="onClickUpdateBackground">{{$t('btn_menu.accept')}}</Button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import RoundSlider from 'vue-round-slider'
import Button from '../components/button.vue'

export default {
  name: "BoxEditBackground",

  components: {
    RoundSlider,
    Button
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
  z-index: 21;
}
</style>