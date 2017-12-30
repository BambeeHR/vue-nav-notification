<template>
  <div id="app">
    <NavNotification
      :notifications="notifications"
    >
      <img
        slot="icon"
        src="./assets/logo.png"
      />
    </NavNotification>
  </div>
</template>

<script>
import NavNotification from './components/NavNotification'

export default {
  name: 'app',
  components: {
    NavNotification
  },

  data () {
    return {
      notifications: [
        {
          text: 'first message',
          read: true
        },
        {
          text: 'second message',
          read: false
        }
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
