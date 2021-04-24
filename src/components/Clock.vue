<template>
  <div id="clock">{{ time }}</div>
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
      count: 0,
      time: '',
      timer: null
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
    this.timer = setInterval(this.update, 1000)
  },
  beforeUnmount() {
    clearInterval(this.timer)
  }
}

</script>