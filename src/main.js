import Vue from 'vue';
import App from './App.vue';
import store from './store';
import i18n from './language';
import './assets/styles/_all.scss';

Vue.config.productionTip = false;

new Vue({
  i18n,
  store,
  render: (h) => h(App),
}).$mount("#app");
