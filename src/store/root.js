export default {
  state: {
    is_customsize: false,
  },

  mutations: {
    isCustomsize: (vm, data) => (vm.is_customsize = data),
  },

  actions: {
    updateIsCustomsize: ({ commit }, data) => commit("isCustomsize", data),
  },
}