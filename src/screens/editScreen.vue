<template>
  <div
    rel="EditScreen"
    class="container screen" 
    :class="{
      'EditLive': is_edit_program,
    }"
  >
    <!-- TEXT -->
    <div class="screen__textEditScreen">{{$t('text_editting')}}</div>
    <!-- COMPONENT -->
    <Background />
    <BoxTitle />
    <BoxNumber />
    <div class="screen__btnGroup">
      <Button
        type="solid"
        size="md"
        v-on:click="onClickGoLive"
      >{{$t('btn_menu.go_live')}}</Button>
    </div>
    <MenuSetting />
    <!-- POPUP -->
    <Overlay />
    <BoxEditTitle />
    <BoxEditNumber />
    <BoxEditBackground />
    <BoxEditLanguage />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Background from "../modules/background.vue";
import BoxEditBackground from "../modules/boxEditBackground.vue";
import BoxTitle from "../modules/boxTitle.vue";
import BoxEditTitle from "../modules/boxEditTitle.vue";
import BoxNumber from "../modules/boxNumberEditing.vue";
import BoxEditNumber from "../modules/boxEditNumber.vue";
import BoxEditLanguage from "../modules/boxEditLanguage.vue";
import MenuSetting from "../modules/menuSetting.vue";
import Overlay from "../modules/overlay.vue";
import Button from '../components/button.vue';

export default {
  name: "EditScreen",

  components: {
    Background,
    BoxEditBackground,
    BoxTitle,
    BoxEditTitle,
    BoxNumber,
    BoxEditNumber,
    BoxEditLanguage,
    MenuSetting,
    Overlay,
    Button
  },

  computed: {
    ...mapState('screen', [
      'is_edit_program',
    ]),

    ...mapState('language', [
      'is_edit_language'
    ]),
  },

  methods: {
    ...mapActions([
      'updateIsTransition'
    ]),

    ...mapActions('screen', [
      'updateIsEditProgram'
    ]),

    ...mapActions('number', [
      'setupNumber'
    ]),

    ...mapActions('overlay', [
      'openOverlay'
    ]),

    async onClickGoLive () {
      this.updateIsTransition(true);
      await new Promise((reslove, reject) => setTimeout(reslove, 200));
      this.setupNumber();
      this.updateIsEditProgram(false);
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
  z-index: 2;
}

.screen {
  display: none;

  &.EditLive {
    display: block;
  }

  &__textEditScreen {
    padding: 10px 20px;
    font-size: 15px;
    font-weight: bold;
    background: #000000;
    color: #ffffff;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3;
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
}
</style>