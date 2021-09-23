<template>
  <div class="boxEditLanguage box" v-if="is_edit_language">
    <div class="box__title">{{$t("box_edit_language.box_title")}}</div>
    <div class="box__content">
      
    </div>
    <div class="box__footer in-right">
      <Button type="solid" v-on:click="onClickUpdateLanguage">{{$t('btn_menu.accept')}}</Button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Button from '../components/button.vue'

export default {
  name: "BoxEditLanguage",

  components: {
    Button
  },

  computed: {
    ...mapState('language', [
      'is_edit_language',
      'current_language',
    ]),


    setter_current_language: {
      get (vm) {
        return vm.current_language; 
      },
      set (value) {
        this.updateBackground(value);
      }
    },
  },

  methods: {
    ...mapActions('language', [
      'updateIsEditLanguage',
      'updateCurrentLanguage'
    ]),

    ...mapActions('overlay', [
      'openOverlay'
    ]),

    onClickUpdateLanguage () {
      this.openOverlay(false);
      this.updateIsEditLanguage(false);
    }
  },
}
</script>

<style lang="scss" scoped>
.boxEditLanguage {
  width: 100%;
  max-width: 540px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 21;
}
</style>