import Vue from "vue";
import Vuex from "vuex";

// MODULES
import root from './root'
import background from './modules/background'
import overlay from './modules/overlay'
import title from './modules/title'
import number from './modules/number'
import screen from './modules/screen'

Vue.use(Vuex);

const modules = {
  background,
  overlay,
  title,
  number,
  screen,
}

for (let mod in modules) {
  modules[mod].namespaced = true
}

export default new Vuex.Store({
  ...root,
  modules
});
