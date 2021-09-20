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
import Overlay from "../modules/overlay.vue";
import Button from '../components/button.vue';

export default {
  name: "LiveScreen",

  components: {
    Background,
    BoxTitle,
    BoxNumber,
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

    onClickGoEdit () {
      this.updateIsEditProgram(true);
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
  transition: transform 0.4s ease;
  transform: translateX(100%);

  &.GoLive {
    transform: translateX(0);
  }
}
</style>