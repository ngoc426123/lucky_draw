<template>
  <div class="app">
    <EditScreen />
    <LiveScreen />

    <!-- OVERLAY -->
    <TransitionScreen />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import EditScreen from "./screens/editScreen.vue";
import LiveScreen from "./screens/liveScreen.vue";
import TransitionScreen from "./modules/transitionScreen.vue";

export default {
  name: "App",

  components: {
    EditScreen,
    LiveScreen,
    TransitionScreen,
  },
  
  methods: {
    ...mapActions([
      'updateIsTransition'
    ]),
  },

  created () {
    this.updateIsTransition(true);
  },

  async mounted () {
    await new Promise((reslove, reject)=> { setTimeout(reslove, 1000) });
    this.updateIsTransition(false);
  }
};
</script>

<style lang="scss">
.container {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.snowf-canvas {
  pointer-events: none;
}
</style>