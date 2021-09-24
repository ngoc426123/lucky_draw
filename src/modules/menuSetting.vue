<template>
  <div class="menuSetting">
    <Link
      v-on:click="onClickLoadConfig"
    >Load config</Link>
    <Link
      v-on:click="onClickSaveConfig"
    >Save config</Link>
    <Link
      v-on:click="onClickEditLanguage"
    >{{$t('btn_menu.language')}}</Link>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import localstore from '../utils/localstorage'
import Link from '../components/link.vue';

export default {
  name: 'MenuSetting',

  components: {
    Link
  },

  computed: {
    ...mapState('screen', [
      'is_edit_program',
    ]),
  },

  methods: {
    ...mapActions([
      'updateIsTransition'
    ]),

    ...mapActions('overlay', [
      'openOverlay'
    ]),

    ...mapActions('title', [
      'updateTextSub',
      'updateTextTitle',
    ]),

    ...mapActions('number', [
      'updatePrefixNumber',
      'updateStartNumber',
      'updateEndNumber',
      'updateCurrentRollingStopStyle',
      'updateNumber',
      'updateContainer',
    ]),

    ...mapActions('background', [
      'updateFirstColor',
      'updateSecondColor',
      'updateAngle',
      'updateBackground',
    ]),

    ...mapActions('language', [
      'updateIsEditLanguage',
      'updateCurrentLanguage',
    ]),

    async onClickLoadConfig () {
      const jsonStore = localstore.get('LckDw');
      const store = JSON.parse(jsonStore);

      if ( !jsonStore ) {
        this.$notify({
          title: 'Config',
          text: 'No have any data saved before on your computer. !',
          type: 'error',
        });
        return;
      }

      this.updateIsTransition(true);
      await new Promise((reslove, reject) => setTimeout(reslove, 500));
      // TITLE STORE
      this.updateTextSub(store.title_config.text_sub);
      this.updateTextTitle(store.title_config.text_title);

      // NUMBER
      this.updatePrefixNumber(store.number_config.prefix_number);
      this.updateStartNumber(store.number_config.start_number);
      this.updateEndNumber(store.number_config.end_number);
      this.updateCurrentRollingStopStyle(store.number_config.current_rolling_stop_style);
      this.updateNumber(store.number_config.number);
      this.updateContainer(store.number_config.container);

      //BACKGROUND
      this.updateFirstColor(store.background_config.first_color);
      this.updateSecondColor(store.background_config.second_color);
      this.updateAngle(store.background_config.angle);
      this.updateBackground(store.background_config.background);

      // LANGUAGE
      this.updateCurrentLanguage(store.language_config.current_language);

      this.updateIsTransition(false);
    },

    onClickSaveConfig () {
      const { text_sub, text_title } = this.$store.state.title;
      const { container, current_rolling_stop_style, number, prefix_number, start_number, end_number } = this.$store.state.number;
      const { angle, background, first_color, second_color } = this.$store.state.background;
      const { current_language } = this.$store.state.language;
      
      const title_config = { text_sub, text_title };
      const number_config = { container, current_rolling_stop_style, number, prefix_number, start_number, end_number  };
      const background_config = { angle, background, first_color, second_color };
      const language_config = { current_language };
      
      const saveConfig = {
        title_config,
        number_config,
        background_config,
        language_config
      }

      localstore.set('LckDw', JSON.stringify(saveConfig));
      this.$notify({
        title: 'Config',
        text: 'Save success !',
        type: 'success',
      })
    },

    onClickEditLanguage () {
      if ( !this.is_edit_program ) {
        return;
      }

      this.openOverlay(true);
      this.updateIsEditLanguage(true);
    }
  }
}
</script>

<style lang="scss" scoped>
.menuSetting {
  position: fixed;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;

  .link {
    margin: 0 20px;
    font-size: 16px;
    color: #ffffff;
    cursor: pointer;
    position: relative;

    &:hover {
      text-decoration: underline;
    }

    &::after {
      content: "•";
      font-size: 20px;
      position: absolute;
      top: 50%;
      right: -24px;
      transform: translateY(-50%);
    }

    &:last-child {
      &::after {
        display: none;
      }
    }
  }
}

</style>