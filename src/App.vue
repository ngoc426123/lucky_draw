<template>
  <div class="container">
    <Background />
    <BoxTitle />
    <BoxNumber />
    <!-- POPUP -->
    <Overlay />
    <BoxEditTitle />
    <BoxEditNumber />
    <BoxEditBackground />
  </div>
</template>

<script>
import Background from "./modules/background.vue";
import BoxEditBackground from "./modules/boxEditBackground.vue";
import BoxTitle from "./modules/boxTitle.vue";
import BoxEditTitle from "./modules/boxEditTitle.vue";
import BoxNumber from "./modules/boxNumber.vue";
import BoxEditNumber from "./modules/boxEditNumber.vue";
import Overlay from "./modules/overlay.vue";

export default {
  name: "App",

  components: {
    Background,
    BoxEditBackground,
    BoxTitle,
    BoxEditTitle,
    BoxNumber,
    BoxEditNumber,
    Overlay
  },
};
</script>

<style lang="scss" scoped>
.container {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>