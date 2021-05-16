<template>
  <div id="countdown" class="display"
    :style="{ display: !$store.state.onClock ? 'block' : 'none' }">
  <!-- {{ $store.state.countdown }} -->
  <!-- <input type="text" v-model="time" placeholder="00:00:00"> -->
  </div>
</template>