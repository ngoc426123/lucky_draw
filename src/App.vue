<template>
  <div>
    <EditScreen />
    <LiveScreen />
  </div>
</template>

<script>
import EditScreen from "./screens/editScreen.vue";
import LiveScreen from "./screens/liveScreen.vue";

export default {
  name: "App",

  components: {
    EditScreen,
    LiveScreen,
  },
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
</style>