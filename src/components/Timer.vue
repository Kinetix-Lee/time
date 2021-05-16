<template>
  <div id="timer" class="display"
    :style="{ display: !$store.state.onClock ? 'block' : 'none' }">
  <!-- {{ $store.state.timer }} -->
  <!-- <input type="text" v-model="time" placeholder="00:00:00"> -->
  </div>
</template>