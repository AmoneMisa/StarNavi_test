export const state = () => ({
  cell: {},
  username: '',
  modes: null,
  isStarted: false,
  currentModeName: null
});

export const getters = {
  getColor: (state) => (x, y) => state.cell[x + '_' + y],
  mode: (state) => state.modes && state.modes[state.currentModeName]
};

export const mutations = {
  setColor(state, {x, y, color}) {
    state.cell = {...state.cell, [x + '_' + y]: color};
  },
  setUsername(state, {name}) {
    state.username = name;
  },
  setModes(state, {modes}) {
    state.modes = modes;

    if (modes) {
      state.currentModeName = Object.keys(modes)[0];
    } else {
      state.currentModeName = null;
    }
  },
  setCurrentMode(state, {mode}) {
    state.currentModeName = mode;
  },
  setIsStarted(state, {isStarted}) {
    state.isStarted = isStarted;
  }
};

export const actions = {
  async fetchModes({commit}) {
    let modes = await this.$axios.$get('/api/game-settings');
    commit('setModes', {modes});
  }
};
