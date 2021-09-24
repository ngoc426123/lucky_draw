<template>
  <div class="app">
    <EditScreen />
    <LiveScreen />

    <!-- OVERLAY -->
    <TransitionScreen />
    <notifications position="bottom right"/>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
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

  computed: {
    ...mapState('language', [
      'current_language'
    ]),
  },
  
  methods: {
    ...mapActions([
      'updateIsTransition'
    ]),

    ...mapActions('number', [
      'updateListRollingStopStyle'
    ]),

    changeLanguage (value) {
      this.$i18n.locale = value;
    },
  },

  created () {
    this.changeLanguage(this.current_language);
    this.updateIsTransition(true);
  },

  async mounted () {
    await new Promise((reslove, reject)=> { setTimeout(reslove, 1000) });
    this.updateIsTransition(false);
  },

  watch: {
    async current_language (value) {
      this.updateIsTransition(true);
      await new Promise((reslove, reject) => setTimeout(reslove, 1000));
      this.changeLanguage(value);
      this.updateListRollingStopStyle([
        { type: 0, text: this.$i18n.t('box_edit_number.rolling_stop_style.none') },
        { type: 1, text: this.$i18n.t('box_edit_number.rolling_stop_style.l2r') },
        { type: 2, text: this.$i18n.t('box_edit_number.rolling_stop_style.r2l') },
        { type: 3, text: this.$i18n.t('box_edit_number.rolling_stop_style.rand') },
        { type: 4, text: this.$i18n.t('box_edit_number.rolling_stop_style.b2m') },
      ]);
      this.updateIsTransition(false);
    }
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