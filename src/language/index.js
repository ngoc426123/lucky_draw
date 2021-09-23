import Vue from 'vue';
import VueI18n from 'vue-i18n';

import vn from './lang/vn';
import en from './lang/en';

Vue.use(VueI18n)

const messages = {
  ...en,
  ...vn,
};

export default new VueI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages
});