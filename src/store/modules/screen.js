export default {
  state: {
    is_edit_program: true,
  },

  mutations: {
    isEditProgram: (vm, data) => (vm.is_edit_program = data),
  },

  actions: {
    updateIsEditProgram: ({ commit }, data) => commit('isEditProgram', data),
  }
}