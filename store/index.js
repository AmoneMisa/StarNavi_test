export const state = () => ({
  cell: {},
  username: '',
  modes: null,
  isStarted: false,
  isFirstGame: true,
  currentModeName: null,
  winners: null,
  winner: ''
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
  },
  setWinners(state, {winners}) {
    state.winners = winners;
  },
  setFirstGame(state, {isFirstGame}) {
    state.isFirstGame = isFirstGame;
  },
  clearCell(state) {
    state.cell = {};
  },
  setWinner(state, {winner}) {
    state.winner = winner;
  }
};

export const actions = {
  async fetchModes({commit}) {
    let modes = await this.$axios.$get('/api/game-settings');
    commit('setModes', {modes});
  },
  async fetchWinners({commit}) {
    let winners = await this.$axios.$get('/api/winners');
    commit('setWinners', {winners})
  },
  async sendWinner({state, commit, dispatch}, {winner, date}) {
    await this.$axios.$post('/api/winners', {winner, date});
    await dispatch('fetchWinners');
  }
};
