<template>
  <input id="countdown"
    :style="{ display: !$store.state.onClock?'block':'none', 'background-color': countdownValue?'#fafafa':'#ef5350', 'color': countdownValue?'#212121':'#fafafa' }"
    @input="countdownCheckInput"
    type="text" v-model="countdownInput" placeholder="00:00:00">
</template>
<style>
#countdown {
  border: none;
  font-size: 9rem;
  width: 40rem;
}
</style>
<script>
export default {
  name: 'Countdown',
  data() {
    return {
      countdownInput: '00:00:00',
      countdownValue: '00:00:00'
    }
  },
  methods: {
    countdownCheckInput() {
      console.log(this.countdownInput.match(/^[\d+]+:[0-5]?[0-9]:[0-5]?[0-9]$/));
      if (this.countdownInput === '') return (this.countdownValue = '00:00:00')
      else if (this.countdownInput.match(/^[\d+]+:[0-5]?[0-9]:[0-5]?[0-9]$/)) return (this.countdownValue = this.countdownInput)
      else return (this.countdownValue = false)
    }
  }
}
</script>
