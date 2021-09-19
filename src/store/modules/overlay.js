export default {
  state: {
    open: false,
  },

  mutations: {
    open: (vm, data) => (vm.open = data),
  },

  actions: {
    openOverlay: ({ commit }, data) => commit("open", data),
  },
}