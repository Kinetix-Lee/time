<template>
  <div class="container">
    <Clock />
  </div>
</template>

<script>
import Clock from './components/Clock.vue'

export default {
  name: 'Time',
  components: {
    Clock
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
}
</style>
