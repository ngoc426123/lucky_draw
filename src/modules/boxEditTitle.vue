<template>
  <div
    class="boxEditTitle box"
    v-if="is_edit_title"
  >
    <div class="box__title">Edit Title</div>
    <div class="box__content">
      <div class="form horizontal">
        <div class="form__row">
          <label class="form__label" for="">Sub Title</label>
          <div class="form__colRight">
            <div class="form__group">
              <input type="text" class="form__control" name="text_sub_text" v-model="text_sub.text">
            </div>
            <div class="form__group">
              <select id="" class="form__control" name="text_sub_font_style" v-model="text_sub.font_style">
                <option 
                  v-for="font in list_font_style"
                  :key="font.key"
                  :value="font"
                  v-text="font"></option>
              </select>
              <select id="" class="form__control" name="text_sub_font_size" v-model="text_sub.font_size">
                <option
                  v-for="size in list_font_size"
                  :key="size.key"
                  :value="size"
                  v-text="`${size} px`"></option>
              </select>
              <select id="" class="form__control" name="text_sub_font_weight" v-model="text_sub.font_weight">
                <option
                  v-for="weight in list_font_weight"
                  :key="weight.key"
                  :value="weight"
                  v-text="weight"
                ></option>
              </select>
              <input
                type="number"
                class="form__control form__control--number"
                name="text_sub_margin_bottom"
                v-model="text_sub.margin_bottom">
              <input
                type="color"
                class="form__control form__control--color"
                name="text_sub_color"
                v-model="text_sub.color">
            </div>
          </div>
        </div>
        <div class="form__row">
          <label class="form__label" for="">Title</label>
          <div class="form__colRight">
            <div class="form__group">
              <input type="text" class="form__control" name="text_title_text" v-model="text_title.text">
            </div>
            <div class="form__group">
              <select id="" class="form__control" name="text_title_font_style" v-model="text_title.font_style">
                <option value="none">--- Font Style ---</option>
                <option value="roboto">Roboto</option>
                <option 
                  v-for="font in list_font_style"
                  :key="font.key"
                  :value="font"
                  v-text="font"></option>
              </select>
              <select id="" class="form__control" name="text_title_font_size" v-model="text_title.font_size">
                <option
                  v-for="size in list_font_size"
                  :key="size.key"
                  :value="size"
                  v-text="`${size} px`"></option>
              </select>
              <select id="" class="form__control" name="text_title_font_weight" v-model="text_title.font_weight">
                <option
                  v-for="weight in list_font_weight"
                  :key="weight.key"
                  :value="weight"
                  v-text="weight"
                ></option>
              </select>
              <input
                type="number"
                class="form__control  form__control--number"
                name="text_title_margin_bottom"
                v-model="text_title.margin_bottom">
              <input
                type="color"
                class="form__control form__control--color"
                name="text_title_color"
                v-model="text_title.color">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="box__footer in-right">
      <button class="btn btn-solid" v-on:click="onClickUpdateTitle">Accept</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'BoxEditTitle',

  computed: {
    ...mapState('title', [
      'is_edit_title',
      'text_sub',
      'text_title',
      'list_font_style',
      'list_font_weight',
      'list_font_size',
      'start_font_size',
      'step_font_size',
      'end_font_size',
    ]),
  },

  methods: {
    ...mapActions('title', [
      'updateIsEditTitle',
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

    onClickUpdateTitle () {
      this.openOverlay(false);
      this.updateIsEditTitle(false);
    }
  },

  created () {
    this.updateListFontSize(this.initSetupFontSize());
  }
}
</script>

<style lang="scss" scoped>
.boxEditTitle {
  width: 100%;
  max-width: 670px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 11;
}
</style>