<template>
  <button id="settingsButton" @click="toggle()">
    <span class="material-icons">{{ onClock ? 'schedule' : 'timer' }}</span>
  </button>
</template>
<style>
#settingsButton {
  display: flex;
  position: absolute;
  right: 5%;
  top: 5%;
  width: 2.5rem;
  height: 2.5rem;
  align-items: center;
  justify-content: center;
  border: none;
  z-index: 10;
  color: #fafafa;
  background: #212121;
  transition: .25s;
}
#settingsButton:hover {
  background: #fafafa;
  color: #212121
}
</style>
<script>
import clockStatus from '../store/clockStatus'
export default {
  name: 'SettingsButton',
  data() {
    return {
      onClock: clockStatus.state.onClock
    }
  },
  methods: {
    toggle: clockStatus.toggle
  }
}
</script>
