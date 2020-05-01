export const state = () => ({
  cell: {},
  username: '',
  modes: null,
  isStarted: false,
  isGameOver: false,
  isFirstGame: true,
  currentModeName: null,
  winners: null,
  date: null
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
  setDate(state, {date}) {
    state.date = date;
  },
  setGameOver(state, {gameOver}) {
    state.isGameOver = gameOver;
  },
  setFirstGame(state, {isFirstGame}) {
    state.isFirstGame = isFirstGame;
  }
};

export const actions = {
  async fetchModes({commit}) {
    let modes = await this.$axios.$get('/api/game-settings');
    commit('setModes', {modes});
  },
  async fetchWinners({commit}) {
    let winners = await  this.$axios.$get('/api/winners');
    commit('setWinners', {winners})
  }
};
