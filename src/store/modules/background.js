export default {
  state: {
    is_edit_background: false,
    first_color: '#010952',
    second_color: '#017bb6',
    angle: 0,
    background: '',
  },

  mutations: {
    isEditBackground: (vm, data) => (vm.is_edit_background = data),
    firstColor: (vm, data) => (vm.first_color = data),
    secondColor: (vm, data) => (vm.second_color = data),
    angle: (vm, data) => (vm.angle = data),
    background: (vm, data) => (vm.background = data),
  },

  actions: {
    updateIsEditBackground: ({ commit }, data) => commit('isEditBackground', data),
    updateFirstColor: ({ commit }, data) => commit('firstColor', data),
    updateSecondColor: ({ commit }, data) => commit('secondColor', data),
    updateAngle: ({ commit }, data) => commit('angle', data),
    updateBackground: ({ commit }, data) => commit('background', data),
  },
}