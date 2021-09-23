<template>
  <div class="boxEditLanguage box" v-if="is_edit_language">
    <div class="box__title">{{$t("box_edit_language.box_title")}}</div>
    <div class="box__content">
      <div class="boxEditLanguage__listLanguage">
        <div
          class="boxEditLanguage__lang"
          v-for="item in list_language"
          :key="item.key"
          :class="{ 'active': current_language === item.lang }"
          v-on:click="onClickChangeLanguage(item.lang)"
        >
          <img :src="item.image" alt="">
        </div>
      </div>
    </div>
    <div class="box__footer in-right">
      <Button type="solid" v-on:click="onClickUpdateLanguage">{{$t('btn_menu.accept')}}</Button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Button from '../components/button.vue';

export default {
  name: "BoxEditLanguage",

  data () {
    return {
      list_language: [
        {
          lang: 'en',
          image: require('@/assets/flags/united-states.svg')
        },
        {
          lang: 'vn',
          image: require('@/assets/flags/vietnam.svg')
        },
        {
          lang: 'cn',
          image: require('@/assets/flags/china.svg')
        },
      ],
    }
  },

  components: {
    Button
  },

  computed: {
    ...mapState('language', [
      'is_edit_language',
      'current_language',
    ]),
  },

  methods: {
    ...mapActions('language', [
      'updateIsEditLanguage',
      'updateCurrentLanguage'
    ]),

    ...mapActions('overlay', [
      'openOverlay'
    ]),

    onClickChangeLanguage (lang) {
      this.updateCurrentLanguage(lang);
    },

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

  &__listLanguage {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__lang {
    width: 60px;
    margin: 0 15px;
    cursor: pointer;

    &.active {
      img {
        filter: grayscale(0);
      }
    }

    img {
      filter: grayscale(100%);
    }
  }
}
</style>