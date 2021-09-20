export default {
  state: {
    is_customsize: false,

    // STYLE
    list_border_style: ["solid", "dashed", "dotted", "double", "groove", "none"],
    list_font_style: ["Open Sans", "Roboto", "Roboto Slab", "Roboto Condensed", "Anton", "Carattere", "Merriweather", "Pattaya", "Alfa Slab One", "Sigmar One", "Bevan", "Calistoga", "Saira Stencil One"],
    list_font_weight: ["300", "400", "700"],
  },

  mutations: {
    isCustomsize: (vm, data) => (vm.is_customsize = data),
  },

  actions: {
    updateIsCustomsize: ({ commit }, data) => commit("isCustomsize", data),
  },
}