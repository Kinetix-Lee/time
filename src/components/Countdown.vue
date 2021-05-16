<template>
  <input id="countdown"
    :style="{
      display: !$store.state.onClock ? 'block' : 'none',
      'background-color': backgroundColor,
      color: color
    }"
    @input="countdownCheckInput"
    :disabled="countdownStarted"
    type="text" v-model="countdownInput" placeholder="00:00:00">
  <button id="countdownControl" @click="countdownToggle()">
    <span class="material-icons">{{ !countdownStarted ? 'play_arrow' : 'pause' }}</span>
  </button>
</template>
<style>
#countdown {
  border: none;
  font-size: 10rem;
  width: 48rem;
  text-align: center;
}
#countdown:disabled {
  background-color: #212121 !important;
  color: #fafafa !important;
}
</style>
<script>
export default {
  name: 'Countdown',
  data() {
    return {
      countdownInput: '00:00:00',
      countdownValue: '00:00:00',
      countdownPreviousValue: '00:00:00',
      countdownStarted: false,
      backgroundColor: '#fafafa',
      color: '#212121'
    }
  },
  methods: {
    countdownCheckInput() {
      console.log(this.countdownInput.match(/^[\d+]+:[0-5]?[0-9]:[0-5]?[0-9]$/));
      if (this.countdownInput === '') {
        this.backgroundColor = '#fafafa'
        this.color = '#212121'
        return (this.countdownValue = '00:00:00')
      } else if (this.countdownInput.match(/^[\d+]+:[0-5]?[0-9]:[0-5]?[0-9]$/)) {
        this.backgroundColor = '00:00:00'
        this.color = '#212121'
        return (this.countdownValue = this.countdownInput)
      } else {
        this.color = '#fafafa'
        this.backgroundColor = '#ef5350'
        return this.countdownValue = false
      }
    },
    countdownStart() {

    },
    countdownToggle() {
      this.countdownStarted = !this.countdownStarted
    }
  }
}
</script>
