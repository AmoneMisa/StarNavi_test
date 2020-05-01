<template>
  <table class="game-field" v-if="mode">
    <tbody>
    <tr v-for="y in mode.field" :key="y" class="game-field__row">
      <td v-for="x in mode.field" :key="x" @click="() => click(x - 1, y - 1)"
          class="game-field__cell"
          :class="{'cell_red': getColor(x - 1, y - 1) === 'red',
           'cell_blue': getColor(x - 1, y - 1) === 'blue',
           'cell_green': getColor(x - 1, y - 1) === 'green'}">
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
  import moment from "moment";

  export default {
    data() {
      return {
        userPoints: 0,
        aiPoints: 0,
        currentX: null,
        currentY: null,
        randomCells: [],
        nextTickId: null
      }
    },
    computed: {
      mode() {
        return this.$store.getters.mode;
      },
      isStarted() {
        return this.$store.state.isStarted;
      },
      totalFields() {
        return this.mode.field * this.mode.field;
      },
      username() {
        return this.$store.state.username;
      }
    },
    async created() {
      if (!this.mode) {
        await this.$store.dispatch('fetchModes');
      }

      this.checkIsStarted(this.isStarted);
    },
    methods: {
      getColor(x, y) {
        return this.$store.getters.getColor(x, y);
      },
      setColor(x, y, color) {
        this.$store.commit('setColor', {x, y, color});
      },
      click(x, y) {
        if (this.currentX === x && this.currentY === y) {
          this.setColor(x, y, 'green');
          this.userPoints++;

          if (this.totalFields / 2 < this.userPoints) {
            this.$store.commit('setIsStarted', {isStarted: false});
            this.currentX = null;
            this.currentY = null;
            this.$store.commit('setWinner', {winner: this.username});
            this.sendWinner(this.username);

            return;
          }

          this.currentX = null;
          this.currentY = null;
          this.$store.commit('setWinner', {winner: ''});
        }
      },
      nextTick() {
        this.nextTickId = setTimeout(() => {
          if (this.currentX !== null && this.currentY !== null) {
            this.setColor(this.currentX, this.currentY, 'red');
            this.aiPoints++;

            if (this.totalFields / 2 < this.aiPoints) {
              this.$store.commit('setIsStarted', {isStarted: false});
              this.currentX = null;
              this.currentY = null;
              this.$store.commit('setWinner', {winner: 'Computer'});
              this.sendWinner('Computer');

              return;
            }

            this.$store.commit('setWinner', {winner: ''});
          }

          do {
            this.currentX = Math.floor(Math.random() * this.mode.field);
            this.currentY = Math.floor(Math.random() * this.mode.field);
          } while (this.getColor(this.currentX, this.currentY));

          this.setColor(this.currentX, this.currentY, 'blue');
          this.nextTick();
        }, this.mode.delay);
      },
      checkIsStarted(isStarted) {
        if (isStarted) {
          this.$nextTick(() => {
            this.nextTick();
          });
        } else {
          clearTimeout(this.nextTickId);
        }
      },
      async sendWinner(winner) {
        let date = moment().format('HH:mm; DD MMMM YYYY');
        await this.$store.dispatch('sendWinner', {date, winner})
      }
    },
    watch: {
      isStarted(value) {
       this.checkIsStarted(value);
      }
    }
  }
</script>

<style lang="scss">
  .game-field {
    border-collapse: collapse;
    margin: 0 auto;
  }

  .game-field__row {

  }

  .game-field__cell {
    width: 60px;
    height: 60px;
    border: 1px solid darkgray;
  }

  .cell_red {
    background-color: #ab1512;
  }

  .cell_blue {
    background-color: #7ddfe8;
  }

  .cell_green {
    background-color: green;
  }

</style>
