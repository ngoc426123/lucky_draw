export default {
  state: {
    is_show_dashbroad: false,
    lucky_number_array: [],
  },

  mutations: {
    isShowDashbroad: (vm, data) => (vm. is_show_dashbroad = data),
    addLuckyNumber: (vm, data) => {
      const luckyNumberArray = vm.lucky_number_array;

      luckyNumberArray.push(data);
      vm.lucky_number_array = luckyNumberArray;
    },
  },

  actions: {
    updateIsShowDashbroad: ({ commit }, data) => commit('isShowDashbroad', data),
    addLuckyNumber: ({ commit }, data) => commit('addLuckyNumber', data),
  }
}