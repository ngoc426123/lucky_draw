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
    <Button
      type="transparent"
      cstClass="btnGoEdit"
      v-on:click="onClickGoEdit"
    >Customsize</Button>
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
    ...mapState('screen', [
      'is_edit_program',
    ]),
  },

  methods: {
    ...mapActions('screen', [
      'updateIsEditProgram'
    ]),
    
    ...mapActions([
      'updateIsTransition',
    ]),

    async onClickGoEdit () {
      this.updateIsTransition(true);
      await new Promise((reslove, reject) => setTimeout(reslove, 200));
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

.btnGoEdit {
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 10;
}

.screen {
  display: none;

  &.GoLive {
    display: block;
  }
}
</style>