export default {
  state: {
    is_edit_title: false,
    list_font_style: ["Open Sans", "Roboto", "Roboto Slab", "Roboto Condensed", "Anton", "Carattere", "Merriweather", "Pattaya"],
    list_font_weight: ["300", "400", "700"],
    list_font_size: [],
    start_font_size: 20,
    step_font_size: 2,
    end_font_size: 120,
    text_sub: {
      text: "Jesus Company Solutions",
      color: "#fffa4d",
      font_size: 20,
      font_style: "Open Sans",
      font_weight: "700",
      margin_bottom: 5,
    },
    text_title: {
      text: "The Lucky Draw Chirstmas",
      color: "#7fff7d",
      font_size: 50,
      font_style: "Roboto Slab",
      font_weight: "700",
      margin_bottom: 0,
    },
  },

  mutations: {
    isEditTitle: (vm, data) => (vm.is_edit_title = data),
    listFontSize: (vm, data) => (vm.list_font_size = data),
    textSub: (vm, data) => (vm.text_sub = data),
    textTitle: (vm, data) => (vm.text_title = data),
  },

  actions: {
    updateIsEditTitle: ({ commit }, data) => commit("isEditTitle", data),
    updateListFontSize: ({ commit }, data) => commit("listFontSize", data),
    updateTextSub: ({ commit }, data) => commit('textSub', data),
    updateTextTitle: ({ commit }, data) => commit('textTitle', data),
  },
}