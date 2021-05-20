<template>
  <div id="clock" :style="{ display: $store.state.onClock ? 'block' : 'none' }">
    {{ this.time }}
  </div>
</template>
<script>
export default {
  name: 'Clock',
  data() {
    return {
      updater: 0,
      count: 0,
      time: ''
    }
  },
  methods: {
    update() {
      const replacement = this.count%2 === 0 ? ':' : ' '
      this.time = new Date().toLocaleTimeString('en-GB').replace(/:/g, replacement)
      ++this.count
    }
  },
  mounted() {
    this.update()
    this.updater = setInterval(this.update, 1000)
  },
  beforeUnmount() {
    clearInterval(this.updater)
  }
}

</script>