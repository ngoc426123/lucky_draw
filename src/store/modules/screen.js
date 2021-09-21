export default {
  state: {
    is_edit_program: false,
  },

  mutations: {
    isEditProgram: (vm, data) => (vm.is_edit_program = data),
  },

  actions: {
    updateIsEditProgram: ({ commit }, data) => commit('isEditProgram', data),
  }
}