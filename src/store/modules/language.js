export default {
  state: {
    is_edit_language: false,
    current_language: 'en',
  },

  mutations: {
    isEditLanguage: (vm, data) => (vm.is_edit_language = data),
    currentLanguage: (vm, data) => (vm.current_language = data),
  },

  actions: {
    updateIsEditLanguage: ({ commit }, data) => commit('isEditLanguage', data),
    updateCurrentLanguage: ({ commit }, data) => commit('currentLanguage', data),
  }
}