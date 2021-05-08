<template>
  <div id="clock" :style="{ display: $store.state.onClock ? 'block' : 'none' }">
    {{ $store.state.time }}
  </div>
</template>
<style>
#clock {
  font-size: 15rem;
  font-family: Consolas, Helvetica, sans-serif;
}
</style>
<script>
export default {
  name: 'Clock',
  data() {
    return {
      timer: 0
    }
  },
  methods: {
    update() {
      this.$store.commit('update')
    }
  },
  mounted() {
    this.update()
    this.timer = setInterval(this.update, 1000)
  },
  beforeUnmount() {
    clearInterval(this.timer)
  }
}

</script>