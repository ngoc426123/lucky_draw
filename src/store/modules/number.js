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
      angle: 180,
      border_color: '#fff472',
      border_style: 'solid',  
      border_width: 3,
      font_style: 'Anton',
      font_size: 170,
      line_height: 250,
      font_weight: 700,
      color: '#ffffff',
    },
    list_font_size: [],
    list_line_height: [],
    start_font_size: 100,
    step_font_size: 10,
    end_font_size: 300,

    // NUMBER
    prefix_number: '',
    start_number: 1,
    end_number: 100,
    max_number: 999999,
    array_offset_number: [0, 36, 72, 108, 144, 180, 216, 252, 288, 324],
    array_number: [],
    current_number: '',
    rolling: false,
  },

  mutations: {
    isEditNumber: (vm, data) => (vm.is_edit_number = data),
    listFontSize: (vm, data) => (vm.list_font_size = data),
    listLineHeight: (vm, data) => (vm.list_line_height = data),
    prefixNumber: (vm, data) => (vm.prefix_number = data),
    startNumber: (vm, data) => (vm.start_number = data),
    endNumber: (vm, data) => (vm.end_number = data),
    arrayNumber: (vm, data) => (vm.array_number = data.data),
    currentNumber: (vm, data) => (vm.current_number = data.data),
    rolling: (vm, data) => (vm.rolling = data),
  },

  actions: {
    // FUNCTION 4 RUN GAME
    setupNumber: ({ dispatch, state }) => {
      const {
        start_number,
        end_number
      } = state;
      const range = Array.from({ length: (end_number - start_number) / 1 + 1}, (_, i) => start_number + (i * 1));

      dispatch('updateArrayNumber', range);
    },

    rollNumber: ({ dispatch }, data) => {
      data && dispatch('updateCurrentNumber', 0);
      dispatch('updateRolling', data);
    },

    getNumber: ({ dispatch, state }) => {
      const { array_number, end_number } = state;
      const numRandom = array_number[parseInt(Math.random() * (array_number.length - 0) + 0)];
      const idxRandom = array_number.indexOf(numRandom);
      let finalNumber = numRandom ? numRandom.toString(): '';

      if ( !numRandom ) {
        return;
      }

      array_number.splice(idxRandom, 1);
      while (finalNumber.length < end_number.toString().length) finalNumber = '0' + finalNumber;

      dispatch('updateArrayNumber', array_number);
      dispatch('updateCurrentNumber', finalNumber);
    },

    // FUNCTION GAME HANDLE
    

    // UPDATE FUNCTION
    updateIsEditNumber: ({ commit }, data) => commit('isEditNumber', data),
    updateListFontSize: ({ commit }, data) => commit('listFontSize', data),
    updateListLineHeight: ({ commit }, data) => commit('listLineHeight', data),
    updatePrefixNumber: ({ commit }, data) => commit('prefixNumber', data),
    updateStartNumber: ({ commit }, data) => commit('startNumber', data),
    updateEndNumber: ({ commit }, data) => commit('endNumber', data),
    updateArrayNumber: ({ commit }, data) => commit('arrayNumber', { data }),
    updateCurrentNumber: ({ commit }, data) => commit('currentNumber', { data }),
    updateRolling: ({ commit }, data) => commit('rolling', data),
  },
}