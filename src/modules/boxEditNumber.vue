<template>
  <div
    class="boxEditNumber box"
    v-if="is_edit_number"
  >
    <div class="box__title">{{$t('box_edit_number.box_title')}}</div>
    <div class="box__content no-padding">
      <div class="form horizontal">
        <div class="box__content--region">
          <div class="form__row">
            <label class="form__label" for="">{{$t('box_edit_number.label_customsize_number')}}</label>
            <div class="form__colRight">
              <div class="form__group" style="max-width: 400px">
                <input
                  type="text"
                  class="form__control"
                  :placeholder="$t('box_edit_number.prefix')"
                  v-model="setter_prefix_number"
                  style="display:block; width: 80px; margin: 0 5px">
                <div style="display:block; text-align: center; margin: 0 5px"> : </div>
                <input
                  type="number"
                  class="form__control"
                  v-model="setter_start_number">
                <div style="display:block; text-align: center; margin: 0 5px"> → </div>
                <input
                  type="number"
                  class="form__control"
                  v-model="setter_end_number">
              </div>
            </div>
          </div>
          <div class="form__row">
            <label class="form__label" for="">{{$t('box_edit_number.label_rolling_stop_style')}}</label>
            <div class="form__colRight">
              <div class="form__group" style="max-width: 400px">
                <select class="form__control" v-model="setter_current_rolling_stop_style">
                    <option
                      v-for="item in list_rolling_stop_style"
                      :key="item.key"
                      :value="item.type"
                      v-text="item.text"
                    ></option>
                  </select>
              </div>
              <div class="form__validate" v-if="!range_number_validate">{{$t('box_edit_number.text_validate_number', {'num': max_number})}}</div>
            </div>
          </div>
        </div>
        <div class="box__content--row">
          <div class="box__content--col">
            <div class="form__textTitle">{{$t('box_edit_number.title_container')}}</div>
            <div class="form__row">
              <label class="form__label" for="">{{$t('box_edit_number.label_container_background')}}</label>
              <div class="form__colRight">
                <div class="form__group" style="max-width: 155px">
                  <input
                    type="color"
                    class="form__control form__control--color"
                    v-model="container.first_color">
                  <input
                    type="color"
                    class="form__control form__control--color"
                    v-model="container.second_color">
                  <RoundSlider
                    v-model="container.angle"
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
              <label class="form__label" for="">{{$t('box_edit_number.label_container_border')}}</label>
              <div class="form__colRight">
                <div class="form__group">
                  <select class="form__control" v-model="container.border_style">
                    <option
                      v-for="item in list_border_style"
                      :key="item.key"
                      :value="item"
                      v-text="item"
                    ></option>
                  </select>
                  <input
                    type="number"
                    class="form__control form__control--number"
                    v-model="container.border_width">
                  <input
                    type="color"
                    class="form__control form__control--color"
                    v-model="container.border_color">
                </div>
              </div>
            </div>
          </div>
          <div class="box__content--col">
            <div class="form__textTitle">{{$t('box_edit_number.title_number')}}</div>
              <div class="form__row">
                <label class="form__label" for="">{{$t('box_edit_number.label_number_background')}}</label>
                <div class="form__colRight">
                  <div class="form__group" style="max-width: 155px">
                    <input
                      type="color"
                      class="form__control form__control--color"
                      v-model="number.first_color">
                    <input
                      type="color"
                      class="form__control form__control--color"
                      v-model="number.second_color">
                    <RoundSlider
                      v-model="number.angle"
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
                <label class="form__label" for="">{{$t('box_edit_number.label_number_border')}}</label>
                <div class="form__colRight">
                  <div class="form__group">
                    <select class="form__control" v-model="number.border_style">
                    <option
                      v-for="item in list_border_style"
                      :key="item.key"
                      :value="item"
                      v-text="item"
                    >Solid</option>
                  </select>
                  <input
                    type="number"
                    class="form__control form__control--number"
                    v-model="number.border_width">
                  <input
                    type="color"
                    class="form__control form__control--color"
                    v-model="number.border_color">
                  </div>
                </div>
              </div>
              <div class="form__row">
                <label class="form__label" for="">{{$t('box_edit_number.label_number_font')}}</label>
                <div class="form__colRight">
                  <div class="form__group">
                    <select class="form__control" v-model="number.font_style">
                      <option 
                        v-for="font in list_font_style"
                        :key="font.key"
                        :value="font"
                        v-text="font"></option>
                    </select>
                    <input
                      type="color"
                      class="form__control form__control--color"
                      v-model="number.color">
                  </div>
                  <div class="form__group">
                    <select class="form__control" v-model="number.font_size">
                      <option
                        v-for="item in list_font_size"
                        :key="item.key"
                        :value="item"
                        v-text="item"
                      ></option>
                    </select>
                    <select class="form__control" v-model="number.line_height">
                      <option
                        v-for="item in list_line_height"
                        :key="item.key"
                        :value="item"
                        v-text="item"
                      ></option>
                    </select>
                    <select class="form__control" v-model="number.font_weight">
                      <option
                        v-for="item in list_font_weight"
                        :key="item.key"
                        :value="item"
                        v-text="item"
                      ></option>
                    </select>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
    <div class="box__footer in-right" v-if="range_number_validate">
      <Button type="solid" v-on:click="onClickUpdateNumber">{{$t('btn_menu.accept')}}</Button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import RoundSlider from 'vue-round-slider'
import Button from '../components/button.vue'

export default {
  name: 'BoxEditNumber',

  components: {
    RoundSlider,
    Button
  },

  data () {
    return {
      range_number_validate: {
        type: Boolean,
        default: true,
      },
    }
  },

  computed: {
    ...mapState([
      'list_font_style',
      'list_font_weight',
      'list_border_style',
    ]),

    ...mapState('number', [
      'is_edit_number',
      'start_font_size',
      'step_font_size',
      'end_font_size',
      'container',
      'number',
      'list_font_size',
      'list_line_height',
      'prefix_number',
      'start_number',
      'end_number',
      'max_number',
      'list_rolling_stop_style',
      'current_rolling_stop_style',
    ]),

    setter_prefix_number: {
      get (vm) {
        return vm.prefix_number;
      },
      set (value) {
        this.updatePrefixNumber(value);
      }
    },

    setter_start_number: {
      get (vm) {
        return vm.start_number;
      },
      set (value) {
        this.updateStartNumber(value);
      }
    },

    setter_end_number: {
      get (vm) {
        return vm.end_number;
      },
      set (value) {
        this.updateEndNumber(value);
      }
    },

    setter_current_rolling_stop_style: {
      get (vm) {
        return vm.current_rolling_stop_style;
      },
      set (value) {
        this.updateCurrentRollingStopStyle(value);
      }
    },
  },

  methods: {
    ...mapActions('number', [
      'updateIsEditNumber',
      'updateListFontSize',
      'updateListLineHeight',
      'updatePrefixNumber',
      'updateStartNumber',
      'updateEndNumber',
      'updateCurrentRollingStopStyle'
    ]),

    ...mapActions('overlay', [
      'openOverlay'
    ]),

    initSetupFontSize () {
      const listFontSize = [];

      for ( let i = this.start_font_size; i <= this.end_font_size; i+=this.step_font_size ) {
        listFontSize.push(i);
      }
      return listFontSize;
    },

    onClickUpdateNumber () {
      this.openOverlay(false);
      this.updateIsEditNumber(false);
    }
  },

  created () {
    const fontSize = this.initSetupFontSize();

    this.updateListFontSize(fontSize);
    this.updateListLineHeight(fontSize);
  },

  watch: {
    start_number (value) {
      this.range_number_validate = value < this.end_number;
    },

    end_number (value) {
      this.range_number_validate = value > this.start_number && value <= this.max_number;
    }
  }
}
</script>

<style lang="scss" scoped>
.boxEditNumber {
  width: 100%;
  max-width: 900px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 21;
}
</style>