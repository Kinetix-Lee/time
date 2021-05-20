import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'

const store = createStore({
  state() {
    return {
      onClock: true
    }
  },
  mutations: {
    toggle(state) {
      state.onClock = !state.onClock
    }
  }
})

createApp(App)
  .use(store)
  .mount('#app')
