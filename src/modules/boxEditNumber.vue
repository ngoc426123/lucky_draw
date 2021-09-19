<template>
  <div
    class="boxEditNumber box"
    v-if="is_edit_number"
  >
    <div class="box__title">Edit Number</div>
    <div class="box__content">
      <div class="form horizontal">
        <div class="form__textTitle">Select number range</div>
        <div class="form__row">
          <label class="form__label" for="">Range</label>
          <div class="form__colRight">
            <div class="form__group">
              <input
                type="number"
                class="form__control"
                name="first_color">
              <div style="display:block; width: 50px; text-align: center; margin: 0 20px"> → </div>
              <input
                type="number"
                class="form__control"
                name="second_color">
            </div>
          </div>
        </div>
        <div class="form__row">
          <label class="form__label" for="">Prefix</label>
          <div class="form__colRight">
            <div class="form__group">
              <input type="checkbox">
              <input
                type="text"
                class="form__control">
            </div>
          </div>
        </div>
        <hr>
        <div class="form__textTitle">Container</div>
        <div class="form__row">
          <label class="form__label" for="">Background</label>
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
          <label class="form__label" for="">Border</label>
          <div class="form__colRight">
            <div class="form__group">
              <select id="" class="form__control" >
                <option value="0">Solid</option>
              </select>
              <input
                type="number"
                class="form__control form__control--number">
              <input
                type="color"
                class="form__control form__control--color">
            </div>
          </div>
        </div>
        <hr>
        <div class="form__textTitle">Number</div>
        <div class="form__row">
          <label class="form__label" for="">Background</label>
          <div class="form__colRight">
            <div class="form__group" style="max-width: 155px">
              <input
                type="color"
                class="form__control form__control--color"
                name="first_color">
              <input
                type="color"
                class="form__control form__control--color"
                name="second_color">
              <RoundSlider
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
          <label class="form__label" for="">Border</label>
          <div class="form__colRight">
            <div class="form__group">
              <select id="" class="form__control" >
                <option value="0">Solid</option>
              </select>
              <input
                type="number"
                class="form__control form__control--number">
              <input
                type="color"
                class="form__control form__control--color">
            </div>
          </div>
        </div>
        <div class="form__row">
          <label class="form__label" for="">Font</label>
          <div class="form__colRight">
            <div class="form__group">
              <select id="" class="form__control" >
                <option value="0">Size</option>
              </select>
              <select id="" class="form__control" >
                <option value="0">Line height</option>
              </select>
              <select id="" class="form__control" >
                <option value="0">Weight</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="box__footer in-right">
      <button class="btn btn-solid" v-on:click="onClickUpdateNumber">Accept</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import RoundSlider from 'vue-round-slider'

export default {
  name: 'BoxEditNumber',

  components: {
    RoundSlider,
  },

  computed: {
    ...mapState('number', [
      'is_edit_number',
      'start_font_size',
      'step_font_size',
      'end_font_size',
    ]),
  },

  methods: {
    ...mapActions('number', [
      'updateIsEditNumber',
      'updateListFontSize',
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
    this.updateListFontSize(this.initSetupFontSize());
  }
}
</script>

<style lang="scss" scoped>
.boxEditNumber {
  width: 100%;
  max-width: 600px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 11;
}
</style>