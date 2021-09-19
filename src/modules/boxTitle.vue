<template>
  <div
    class="boxTitle"
    v-on:click="onClickEditTitle"
  >
    <div
      class="boxTitle__subTitle"
      v-text="text_sub.text"
      :style="{
        fontFamily: text_sub.font_style,
        fontWeight: text_sub.font_weight,
        fontSize: `${text_sub.font_size}px`,
        color: text_sub.color,
        marginBottom: `${text_sub.margin_bottom}px`
      }"
    ></div>
    <div
      class="boxTitle__title"
      v-text="text_title.text"
      :style="{
        fontFamily: text_title.font_style,
        fontWeight: text_title.font_weight,
        fontSize: `${text_title.font_size}px`,
        color: text_title.color,
        marginBottom: `${text_sub.margin_bottom}px`
      }"
    ></div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: "BoxTitle",
  
  computed: {
    ...mapState('title', [
      'text_sub',
      'text_title',
    ]),
  },

  methods: {
    ...mapActions('overlay', [
      'openOverlay'
    ]),

    ...mapActions('title', [
      'updateIsEditTitle',
    ]),

    onClickEditTitle () {
      this.openOverlay(true);
      this.updateIsEditTitle(true);
    }
  },
}
</script>

<style lang="scss" scoped>
.boxTitle {
  color: #ffffff;
  text-align: center;
  position: fixed;
  top: 60px;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  z-index: 2;
  
  &__title {
    font-weight: bold;
    text-shadow: 5px 5px 6px rgba(0,0,0,0.4);
  }
}
</style>