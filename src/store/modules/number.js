export default {
  state: {
    is_edit_number: false,

    //DESIGN
    container: {
      first_color: '#b8c139',
      second_color: '#7f8c08',
      angle: 0,
      border_color: '#fff472',
      border_style: 'solid',  
      border_width: 3,
    },
    number: {
      first_color: '#b8c139',
      second_color: '#7f8c08',
      angle: 0,
      border_color: '#fff472',
      border_style: 'solid',  
      border_width: 3,
      font_size: 170,
      line_height: 250,
      font_weight: 700,
      color: '#ffffff',
    },
    list_font_style: ["Open Sans", "Roboto", "Roboto Slab", "Roboto Condensed", "Anton", "Carattere", "Merriweather", "Pattaya"],
    list_font_weight: ["300", "400", "700"],
    list_font_size: [],
    start_font_size: 100,
    step_font_size: 10,
    end_font_size: 200,

    // NUMBER
    prefix_number: '',
    start_number: 1,
    end_number: 1000,
    array_offset_number: [0, 36, 72, 108, 144, 180, 216, 252, 288, 324],
    array_number: [],
    running: false,
  },

  mutations: {
    isEditNumber: (vm, data) => (vm.is_edit_number = data),
    listFontSize: (vm, data) => (vm.list_font_size = data),
    prefixNumber: (vm, data) => (vm.prefix_number = data),
    startNumber: (vm, data) => (vm.start_number = data),
    endNumber: (vm, data) => (vm.end_number = data),
    arrayNumber: (vm, data) => (vm.array_number = data),
    running: (vm, data) => (vm.running = data),
  },

  actions: {
    updateIsEditNumber: ({ commit }, data) => commit("isEditNumber", data),
    updateListFontSize: ({ commit }, data) => commit("listFontSize", data),
    updatePrefixNumber: ({ commit }, data) => commit("startNumber", data),
    updateStartNumber: ({ commit }, data) => commit("startNumber", data),
    updateEndNumber: ({ commit }, data) => commit("endNumber", data),
    updateArrayNumber: ({ commit }, data) => commit("arrayNumber", data),
    updateRunning: ({ commit }, data) => commit("running", data),
  },
}