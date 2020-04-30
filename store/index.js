export const state = () => ({
  cell: {}
});

export const getters = {
  getColor: (state) => (x, y) => {
    return state.cell[x + '_' + y];
  }
};

export const mutations = {
  setColor(state, {x, y, color}) {
    state.cell = {...state.cell, [x + '_' + y]: color};
  }
};

export const actions = {};
