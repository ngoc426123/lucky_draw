export default {
  state: {
    is_out_screen: false,
  },

  mutations: {
    isOutScreen: (vm, data) => (vm.is_out_screen = data),
  },

  actions: {
    updateIsOutScreen: ({ commit }, data) => commit('isOutScreen', data),
  }
}