<template>
<div id="countdownContainer" :style="{ display: !$store.state.onClock ? 'flex' : 'none' }">
  <input
    :style="{
      'background-color': backgroundColor,
      color: color
    }"
    @input="countdownCheckInput"
    :disabled="countdownStarted"
    type="text" v-model="countdownInput" placeholder="00:00:00" id="countdown">
  <button id="countdownControl" @click="countdownToggle()" :disabled="!ableToStart">
    <span class="material-icons">{{ !countdownStarted ? 'play_arrow' : 'pause' }}</span>
  </button>
</div>
</template>
<style>
#countdownContainer {
  align-items: center;
  justify-content: center;
}
#countdown {
  border: none;
  font-size: 10rem;
  width: 48rem;
  height: 11rem;
  text-align: center;
}
#countdown:disabled {
  background-color: #212121 !important;
  color: #fafafa !important;
}
#countdownControl {
  height: 11rem;
  margin-left: 1rem;
}
</style>
<script>
export default {
  name: 'Countdown',
  data() {
    return {
      countdownInput: '',
      countdownValue: '00:00:00',
      countdownStarted: false,
      countdownTime: 0,
      ableToStart: false,
      backgroundColor: '#fafafa',
      color: '#212121',
      updater: null
    }
  },
  methods: {
    countdownCheckInput() {
      console.log(this.countdownInput.match(/^[\d+]+:[0-5]?[0-9]:[0-5]?[0-9]$/));
      if (this.countdownInput === '' || this.countdownInput.match(/^0+:0+:0+$/)) {
        this.backgroundColor = '#fafafa'
        this.color = '#212121'
        this.ableToStart = false;
      } else if (this.countdownInput.match(/^[\d+]+:[0-5]?[0-9]:[0-5]?[0-9]$/)) {
        this.backgroundColor = '#fafafa'
        this.color = '#212121'
        this.ableToStart = true;
      } else {
        this.color = '#fafafa'
        this.backgroundColor = '#ef5350'
        this.ableToStart = false;
      }
    },
    countdownStart() {
      console.log('countdown starts')
      this.countdownStarted = true
      this.countdownValue = this.countdownInput
      const time = this.countdownValue.split(':')
      this.countdownTime = parseInt(time[0]) * 3600 + parseInt(time[1]) * 60 + parseInt(time[2])
      this.updater = setInterval(this.countdown, 1000);
    },
    countdownStop() {
      console.log('countdown stops')
      this.countdownStarted = false
      clearInterval(this.updater)
    },
    countdownToggle() {
      if (this.countdownStarted) this.countdownStop()
      else this.countdownStart()
    },
    countdown() {
      if (this.countdownTime > 0) {
        --this.countdownTime
        const time = [
          parseInt(this.countdownTime / 3600),
          parseInt(this.countdownTime / 60 % 60),
          Math.ceil(this.countdownTime % 60)
        ]
        time[0] = (time[0] < 10) ? '0'+time[0] : time[0]
        time[1] = (time[1] < 10) ? '0'+time[1] : time[1]
        time[2] = (time[2] < 10) ? '0'+time[2] : time[2]
        this.countdownInput = `${time[0].toString()}:${time[1]}:${time[2]}`
      } else this.countdownStop()
    }
  }
}
</script>
