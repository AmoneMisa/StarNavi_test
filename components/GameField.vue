<template>
  <table class="game-field">
    <tbody>
    <tr v-for="y in 5" :key="y" class="game-field__row">
      <td v-for="x in 5" :key="x" @click="() => setColor(x, y, 'red')"
         class="game-field__cell"
          :class="{'cell_red': getColor(x,y) === 'red',
           'cell_blue': getColor(x,y) === 'blue',
           'cell_green': getColor(x,y) === 'green'}">
        {{ getColor(x, y) }}
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
  export default {
    data(){
      return {
        userPoints: 0,
        AIPoints: 0,
        currentBlueCell: {x: null, y: null, color: 'blue'},
        randomCells: []
      }
    },
    methods: {
      getColor(x, y) {
        return this.$store.getters.getColor(x, y);
      },
      setColor(x, y, color) {
        this.$store.commit('setColor', {x, y, color});
      },
      getRandomCell(x, y, color) {
        let getXOfCell = Math.floor(Math.random() * (5 - x + 1) + x);

        let getYOfCell = Math.floor(Math.random() * (5 - y + 1) + y);

        let randCell = {x: getXOfCell, y: getYOfCell};

        if (this.randomCells.includes(randCell)){
          return;
        } else {
          this.randomCells.push(randCell);
        }


        console.log(this.randomCells);

        this.$store.commit('setColor', {getXOfCell, getYOfCell, color});
      }
    }
  }
</script>

<style lang="scss">
  .game-field {
    border-collapse: collapse;
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

</style>
