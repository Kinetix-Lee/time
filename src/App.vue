<template>
  <SettingsButton />
  <div class="container">
    <div class="display">
      <Clock />
      <Countdown />
    </div>
  </div>
</template>

<script>
import Clock from './components/Clock'
import Countdown from './components/Countdown'
import SettingsButton from './components/SettingsButton'

export default {
  name: 'Time',
  components: {
    Clock,
    Countdown,
    SettingsButton
  }
}
</script>

<style>
.container {
  /* 全屏显示 */
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  /* flexbox 居中对齐 */
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #212121;
  color: #fafafa;

  overflow: hidden;
  z-index: -1;
}
.display {
  font-size: 15rem;
}
button {
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  z-index: 10;
  color: #fafafa;
  background: #212121;
  transition: .25s;
}
button:hover {
  background: #fafafa;
  color: #212121
}
input {
  transition: .25s;
}
* {
  font-family: Consolas, Helvetica, sans-serif;
}
</style>
